<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use App\Models\Gaceta;
use App\Models\Noticia;
use App\Models\Plan;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $estadisticas = [
            'noticias' => Noticia::count(),
            'gacetas' => Gaceta::count(),
            'eventos' => Evento::count(),
            'planes' => Plan::count(),
        ];

        $noticiasRecientes = Noticia::query()
            ->latest()
            ->take(5)
            ->get(['id', 'titulo', 'publicado', 'created_at']);

        $gacetasRecientes = Gaceta::query()
            ->latest()
            ->take(5)
            ->get(['id', 'titulo', 'publicado', 'created_at']);

        $proximosEventos = Evento::query()
            ->where('publicado', true)
            ->where('fecha_inicio', '>=', now())
            ->orderBy('fecha_inicio')
            ->take(5)
            ->get(['id', 'titulo', 'fecha_inicio', 'fecha_fin', 'lugar']);

        $planes = Plan::query()
            ->with('estado')
            ->latest()
            ->take(5)
            ->get(['id', 'titulo', 'estado_id', 'fecha_inicio', 'fecha_estimada_finalizacion', 'publicado']);

        return Inertia::render('dashboard', [
            'estadisticas' => $estadisticas,
            'noticiasRecientes' => $noticiasRecientes,
            'gacetasRecientes' => $gacetasRecientes,
            'proximosEventos' => $proximosEventos,
            'planes' => $planes,
        ]);
    }
}