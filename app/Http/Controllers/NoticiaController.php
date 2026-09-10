<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNoticiaRequest;
use App\Http\Requests\UpdateNoticiaRequest;
use App\Models\Imagen;
use App\Models\Noticia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class NoticiaController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:noticias.view')->only(['index', 'show']);
        $this->middleware('permission:noticias.create')->only(['create', 'store']);
        $this->middleware('permission:noticias.edit')->only(['edit', 'update']);
        $this->middleware('permission:noticias.delete')->only(['destroy']);
        $this->middleware('permission:noticias.toggle-status')->only(['toggleStatus']);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function index(Request $request): Response
    {
        $search = $request->input('search');

        $noticias = Noticia::query()
            ->with(['creador', 'editor'])
            ->withCount('imagenes')
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('titulo', 'like', "%{$search}%")
                        ->orWhere('descripcion', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Sys/Noticias/Index', [
            'noticias' => $noticias,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function create(): Response
    {
        return Inertia::render('Sys/Noticias/Create');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function store(StoreNoticiaRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $imagenes = $data['imagenes'] ?? [];
        unset($data['imagenes']);
        $data['publicado'] = $request->boolean('publicado');
        $data['created_by'] = Auth::id();

        if ($request->hasFile('imagen_portada')) {
            $data['imagen_portada'] = $request->file('imagen_portada')->store('noticias/portadas', 'public');
        }

        $noticia = Noticia::create($data);

        foreach ($imagenes as $imagen) {
            $noticia->imagenes()->create([
                'nombre_original' => $imagen->getClientOriginalName(),
                'archivo' => $imagen->store('noticias', 'public'),
                'alt_text' => $noticia->titulo,
                'orden' => 0,
                'created_by' => Auth::id(),
            ]);
        }

        return redirect()->route('noticias.index')->with('success', 'Noticia creada correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function show(Noticia $noticia): Response
    {
        $noticia->load([
            'creador',
            'editor',
            'imagenes',
        ]);

        return Inertia::render('Sys/Noticias/Show', [
            'noticia' => $noticia,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function edit(Noticia $noticia): Response
    {
        $noticia->load('imagenes');

        return Inertia::render('Sys/Noticias/Edit', [
            'noticia' => $noticia,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function update(UpdateNoticiaRequest $request, Noticia $noticia): RedirectResponse
    {
        $data = $request->validated();
        $imagenes = $data['imagenes'] ?? [];
        $imagenesEliminar = $data['imagenes_eliminar'] ?? [];
        unset($data['imagenes'], $data['imagenes_eliminar']);
        $data['publicado'] = $request->boolean('publicado');
        $data['updated_by'] = Auth::id();

        if ($request->hasFile('imagen_portada')) {
            if ($noticia->imagen_portada) {
                Storage::disk('public')->delete($noticia->imagen_portada);
            }

            $data['imagen_portada'] = $request->file('imagen_portada')->store('noticias/portadas', 'public');
        } else {
            unset($data['imagen_portada']);
        }

        $noticia->update($data);

        foreach ($noticia->imagenes()->whereIn('id', $imagenesEliminar)->get() as $imagen) {
            if ($imagen->archivo) Storage::disk('public')->delete($imagen->archivo);
            $imagen->delete();
        }

        foreach ($imagenes as $imagen) {
            $noticia->imagenes()->create([
                'nombre_original' => $imagen->getClientOriginalName(),
                'archivo' => $imagen->store('noticias', 'public'),
                'alt_text' => $noticia->titulo,
                'orden' => 0,
                'created_by' => Auth::id(),
            ]);
        }

        return redirect()->route('noticias.index')->with('success', 'Noticia actualizada correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function destroy(Noticia $noticia): RedirectResponse
    {
        $noticia->load('imagenes');

        foreach ($noticia->imagenes as $imagen) {
            if ($imagen->archivo) {
                Storage::disk('public')->delete($imagen->archivo);
            }

            $imagen->delete();
        }

        $noticia->delete();

        return redirect()
            ->route('noticias.index')
            ->with('success', 'Noticia eliminada correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function toggleStatus(Noticia $noticia): RedirectResponse
    {
        $noticia->update([
            'publicado' => !$noticia->publicado,
            'updated_by' => Auth::id(),
        ]);

        return redirect()
            ->back()
            ->with('success', $noticia->publicado ? 'Noticia publicada correctamente.' : 'Noticia despublicada correctamente.');
    }
}