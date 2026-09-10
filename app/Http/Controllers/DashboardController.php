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
            ->orderBy('id', 'desc')
            ->take(5)
            ->get()
            ->map(fn ($evento) => [
                'id' => $evento->id,
                'titulo' => $evento->titulo,
                'fecha_inicio' => $evento->fecha_inicio?->format('Y-m-d\TH:i:s'),
                'fecha_fin' => $evento->fecha_fin?->format('Y-m-d\TH:i:s'),
                'lugar' => $evento->lugar,
                'publicado' => $evento->publicado,
            ]);

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