<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use App\Http\Requests\StorePlanRequest;
use App\Http\Requests\UpdatePlanRequest;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use App\Models\EstadoPlan;
use App\Models\Plan;

class PlanController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:planes.view')->only(['index', 'show']);
        $this->middleware('permission:planes.create')->only(['create', 'store']);
        $this->middleware('permission:planes.edit')->only(['edit', 'update']);
        $this->middleware('permission:planes.delete')->only(['destroy']);
        $this->middleware('permission:planes.toggle-status')->only(['toggleStatus']);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function index(Request $request): Response
    {
        $query = Plan::query()
            ->with('estado')
            ->withCount('imagenes');

        if ($request->filled('search')) {
            $search = $request->search;

            $query->where(function ($q) use ($search) {
                $q->where('titulo', 'like', "%{$search}%")
                    ->orWhere('descripcion', 'like', "%{$search}%")
                    ->orWhere('ubicacion', 'like', "%{$search}%")
                    ->orWhereHas('estado', function ($estadoQuery) use ($search) {
                        $estadoQuery->where('nombre', 'like', "%{$search}%");
                    });
            });
        }

        $planes = $query
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Sys/Planes/Index', [
            'planes' => $planes,
            'filters' => [
                'search' => $request->search,
            ],
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function create(): Response
    {
        $estadosPlan = EstadoPlan::query()
            ->where('activo', true)
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        return Inertia::render('Sys/Planes/Create', ['estadosPlan' => $estadosPlan]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function store(StorePlanRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $validated['created_by'] = Auth::id();

        DB::transaction(function () use ($request, $validated) {
            $imagenPortada = $request->file('imagen_portada');
            unset($validated['imagen_portada']);

            if ($imagenPortada) {
                $validated['imagen_portada'] = $imagenPortada->store('planes/portadas', 'public');
            }

            $plan = Plan::create($validated);
            $this->guardarImagenes($request, $plan);
        });

        return redirect()->route('planes.index')->with('success', 'Plan creado correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function show(Plan $plan): Response
    {
        $plan->load([
            'estado',
            'creador',
            'editor',
            'imagenes' => fn ($query) => $query->orderBy('orden'),
        ]);

        return Inertia::render('Sys/Planes/Show', ['plan' => $plan]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function edit(Plan $plan): Response
    {
        $estadosPlan = EstadoPlan::query()
            ->where(fn ($query) => $query->where('activo', true)->orWhere('id', $plan->estado_id))
            ->orderBy('nombre')
            ->get(['id', 'nombre', 'activo']);

        $plan->load(['imagenes' => fn ($query) => $query->orderBy('orden')]);

        return Inertia::render('Sys/Planes/Edit', [
            'plan' => $plan,
            'estadosPlan' => $estadosPlan,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function update(UpdatePlanRequest $request, Plan $plan): RedirectResponse
    {
        $validated = $request->validated();

        DB::transaction(function () use ($request, $plan, $validated) {
            $validated['updated_by'] = Auth::id();

            if ($request->hasFile('imagen_portada')) {
                if ($plan->imagen_portada) {
                    Storage::disk('public')->delete($plan->imagen_portada);
                }

                $validated['imagen_portada'] = $request->file('imagen_portada')->store('planes/portadas', 'public');
            } else {
                unset($validated['imagen_portada']);
            }

            $plan->update($validated);

            $imagenesEliminar = $request->input('imagenes_eliminar', []);

            if (!empty($imagenesEliminar)) {
                $imagenes = $plan->imagenes()->whereIn('id', $imagenesEliminar)->get();

                foreach ($imagenes as $imagen) {
                    Storage::disk('public')->delete($imagen->archivo);
                    $imagen->delete();
                }
            }

            $this->guardarImagenes($request, $plan);
        });

        return redirect()->route('planes.index')->with('success', 'Plan actualizado correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function destroy(Plan $plan): RedirectResponse
    {
        foreach ($plan->imagenes as $imagen) {
            Storage::disk('public')->delete($imagen->archivo);
            $imagen->delete();
        }

        $plan->delete();

        return redirect()
            ->route('planes.index')
            ->with('success', 'Plan eliminado correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function toggleStatus(Plan $plan): RedirectResponse
    {
        $plan->update([
            'publicado' => ! $plan->publicado,
            'updated_by' => Auth::id(),
        ]);

        return redirect()
            ->back()
            ->with(
                'success',
                $plan->publicado
                    ? 'Plan publicado correctamente.'
                    : 'Plan despublicado correctamente.'
            );
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    private function guardarImagenes(
        Request $request,
        Plan $plan
    ): void {
        if (!$request->hasFile('imagenes')) {
            return;
        }

        $orden = $plan->imagenes()->max('orden') ?? -1;

        foreach ($request->file('imagenes') as $imagen) {

            $archivo = $imagen->store(
                'planes',
                'public'
            );

            $plan->imagenes()->create([
                'nombre_original' => $imagen->getClientOriginalName(),
                'archivo' => $archivo,
                'alt_text' => $plan->titulo,
                'orden' => ++$orden,
                'created_by' => Auth::id(),
            ]);
        }
    }
}