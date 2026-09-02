<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGacetaRequest;
use App\Http\Requests\UpdateGacetaRequest;
use App\Models\Gaceta;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class GacetaController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:gacetas.view')->only(['index', 'show']);
        $this->middleware('permission:gacetas.create')->only(['create', 'store']);
        $this->middleware('permission:gacetas.edit')->only(['edit', 'update']);
        $this->middleware('permission:gacetas.delete')->only(['destroy']);
        $this->middleware('permission:gacetas.toggle-status')->only(['toggleStatus']);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function index(Request $request): Response
    {
        $search = $request->input('search');

        $gacetas = Gaceta::query()
            ->with(['creador', 'editor'])
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('titulo', 'like', "%{$search}%")
                        ->orWhere('descripcion', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Sys/Gacetas/Index', [
            'gacetas' => $gacetas,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function create(): Response
    {
        return Inertia::render('Sys/Gacetas/Create');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function store(StoreGacetaRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if ($request->hasFile('archivo')) {
            $data['archivo'] = $request->file('archivo')
                ->store('gacetas', 'public');
        }

        $data['publicado'] = $request->boolean('publicado');
        $data['created_by'] = Auth::id();

        Gaceta::create($data);

        return redirect()
            ->route('gacetas.index')
            ->with('success', 'Gaceta creada correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function show(Gaceta $gaceta): Response
    {
        $gaceta->load(['creador', 'editor']);

        return Inertia::render('Sys/Gacetas/Show', [
            'gaceta' => $gaceta,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function edit(Gaceta $gaceta): Response
    {
        return Inertia::render('Sys/Gacetas/Edit', [
            'gaceta' => $gaceta,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function update(UpdateGacetaRequest $request, Gaceta $gaceta): RedirectResponse
    {
        $data = $request->validated();

        // Si se cargó un nuevo PDF, reemplazar el archivo anterior.
        if ($request->hasFile('archivo')) {
            if ($gaceta->archivo) {
                Storage::disk('public')->delete($gaceta->archivo);
            }

            $data['archivo'] = $request->file('archivo')
                ->store('gacetas', 'public');
        } else {
            // Si no se cargó un nuevo PDF, conservar el archivo actual.
            unset($data['archivo']);
        }

        $data['publicado'] = $request->boolean('publicado');
        $data['updated_by'] = Auth::id();

        $gaceta->update($data);

        return redirect()
            ->route('gacetas.index')
            ->with('success', 'Gaceta actualizada correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function destroy(Gaceta $gaceta): RedirectResponse
    {
        if ($gaceta->archivo) {
            Storage::disk('public')->delete($gaceta->archivo);
        }

        $gaceta->delete();

        return redirect()
            ->route('gacetas.index')
            ->with('success', 'Gaceta eliminada correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function toggleStatus(Gaceta $gaceta): RedirectResponse
    {
        $gaceta->update([
            'publicado' => !$gaceta->publicado,
            'updated_by' => Auth::id(),
        ]);

        return redirect()
            ->back()
            ->with('success', $gaceta->publicado ? 'Gaceta publicada correctamente.' : 'Gaceta despublicada correctamente.');
    }
}