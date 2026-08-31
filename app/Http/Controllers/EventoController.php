<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventoRequest;
use App\Http\Requests\UpdateEventoRequest;
use App\Models\Evento;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EventoController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:eventos.view')->only(['index', 'show']);
        $this->middleware('permission:eventos.create')->only(['create', 'store']);
        $this->middleware('permission:eventos.edit')->only(['edit', 'update']);
        $this->middleware('permission:eventos.delete')->only(['destroy']);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function index(Request $request): Response
    {
        $eventos = Evento::query()
            ->with(['creador', 'editor'])
            ->withCount('imagenes')
            ->when($request->search, function ($query, $search) {
                $query->where(function ($query) use ($search) {
                    $query->where('titulo', 'like', "%{$search}%")
                        ->orWhere('descripcion', 'like', "%{$search}%")
                        ->orWhere('lugar', 'like', "%{$search}%");
                });
            })
            ->when($request->has('publicado') && $request->publicado !== '', function ($query) use ($request) {
                $query->where('publicado', $request->boolean('publicado'));
            })
            ->orderBy('fecha_inicio', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Sys/Eventos/Index', [
            'eventos' => $eventos,
            'filters' => [
                'search' => $request->search,
                'publicado' => $request->publicado,
            ],
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function create(): Response
    {
        return Inertia::render('Sys/Eventos/Create');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function store(StoreEventoRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            $evento = Evento::create([
                ...$request->validated(),
                'created_by' => Auth::id(),
            ]);

            $imagenes = $request->file('imagenes', []);

            foreach ($imagenes as $index => $imagen) {
                $archivo = $imagen->store('eventos', 'public');

                $evento->imagenes()->create([
                    'nombre_original' => $imagen->getClientOriginalName(),
                    'archivo' => $archivo,
                    'alt_text' => null,
                    'orden' => $index,
                    'created_by' => Auth::id(),
                ]);
            }
        });

        return redirect()
            ->route('eventos.index')
            ->with('success', 'Evento creado correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function show(Evento $evento): Response
    {
        $evento->load([
            'creador',
            'editor',
            'imagenes' => function ($query) {
                $query->orderBy('orden')->orderBy('id');
            },
        ]);

        return Inertia::render('Sys/Eventos/Show', [
            'evento' => $evento,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function edit(Evento $evento): Response
    {
        $evento->load([
            'imagenes' => function ($query) {
                $query->orderBy('orden')->orderBy('id');
            },
        ]);

        return Inertia::render('Sys/Eventos/Edit', [
            'evento' => $evento,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function update(UpdateEventoRequest $request, Evento $evento): RedirectResponse
    {
        DB::transaction(function () use ($request, $evento) {
            $evento->update([
                ...$request->validated(),
                'updated_by' => Auth::id(),
            ]);

            $imagenesEliminar = $request->input('imagenes_eliminar', []);

            if (!empty($imagenesEliminar)) {
                $imagenes = $evento->imagenes()
                    ->whereIn('id', $imagenesEliminar)
                    ->get();

                foreach ($imagenes as $imagen) {
                    Storage::disk('public')->delete($imagen->archivo);
                    $imagen->delete();
                }
            }

            $imagenesExistentes = $evento->imagenes()->count();
            $imagenesNuevas = $request->file('imagenes', []);

            foreach ($imagenesNuevas as $index => $imagen) {
                $archivo = $imagen->store('eventos', 'public');

                $evento->imagenes()->create([
                    'nombre_original' => $imagen->getClientOriginalName(),
                    'archivo' => $archivo,
                    'alt_text' => null,
                    'orden' => $imagenesExistentes + $index,
                    'created_by' => Auth::id(),
                ]);
            }
        });

        return redirect()
            ->route('eventos.index')
            ->with('success', 'Evento actualizado correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function destroy(Evento $evento): RedirectResponse
    {
        $evento->delete();

        return redirect()
            ->route('eventos.index')
            ->with('success', 'Evento eliminado correctamente.');
    }
}