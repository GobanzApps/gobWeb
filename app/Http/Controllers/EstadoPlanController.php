<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEstadoPlanRequest;
use App\Http\Requests\UpdateEstadoPlanRequest;
use App\Models\EstadoPlan;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class EstadoPlanController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:estados-plan.view')->only(['index', 'show',]);
        $this->middleware('permission:estados-plan.create')->only(['create', 'store',]);
        $this->middleware('permission:estados-plan.edit')->only(['edit', 'update',]);
        $this->middleware('permission:estados-plan.delete')->only(['destroy',]);
        $this->middleware('permission:estados-plan.toggle-status')->only(['toggleStatus',]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function index(Request $request): Response
    {
        $query = EstadoPlan::query()
            ->withCount('planes');

        if ($request->filled('search')) {
            $search = $request->search;

            $query->where(function ($q) use ($search) {
                $q->where('nombre', 'like', "%{$search}%")
                    ->orWhere('descripcion', 'like', "%{$search}%");
            });
        }

        $estadosPlan = $query
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Sys/EstadosPlan/Index', [
            'estadosPlan' => $estadosPlan,
            'filters' => [
                'search' => $request->search,
            ],
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function create(): Response
    {
        return Inertia::render('Sys/EstadosPlan/Create');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function store(StoreEstadoPlanRequest $request): RedirectResponse
    {
        EstadoPlan::create($request->validated());

        return redirect()
            ->route('estados-plan.index')
            ->with('success', 'Estado de plan creado correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function show(EstadoPlan $estadoPlan): Response
    {
        $estadoPlan->loadCount('planes');

        return Inertia::render('Sys/EstadosPlan/Show', [
            'estadoPlan' => $estadoPlan,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function edit(EstadoPlan $estadoPlan): Response
    {
        return Inertia::render('Sys/EstadosPlan/Edit', [
            'estadoPlan' => $estadoPlan,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function update(UpdateEstadoPlanRequest $request, EstadoPlan $estadoPlan): RedirectResponse
    {
        $estadoPlan->update($request->validated());

        return redirect()
            ->route('estados-plan.index')
            ->with('success', 'Estado de plan actualizado correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function destroy(EstadoPlan $estadoPlan): RedirectResponse
    {
        if ($estadoPlan->planes()->exists()) {
            return back()->withErrors([
                'delete' => 'No se puede eliminar este estado porque está siendo utilizado por uno o más planes.',
            ]);
        }

        $estadoPlan->delete();

        return back()->with('success', 'Estado de plan eliminado correctamente.');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function toggleStatus(EstadoPlan $estadoPlan): RedirectResponse
    {
        $estadoPlan->update([
            'activo' => !$estadoPlan->activo,
        ]);

        $mensaje = $estadoPlan->activo
            ? 'Estado de plan activado correctamente.'
            : 'Estado de plan desactivado correctamente.';

        return redirect()
            ->route('estados-plan.index')
            ->with('success', $mensaje);
    }
}