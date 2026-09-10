<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Plan;
use App\Models\Noticia;
use App\Models\Evento;

class WebController extends Controller
{
    public function index()
    {
        $planes = Plan::with(['estado:id,nombre', 'imagenes' => fn ($query) => $query->orderBy('orden')])
            ->where('publicado', true)
            ->latest()
            ->take(4)
            ->get()
            ->map(fn ($plan) => [
                'id' => $plan->id,
                'titulo' => $plan->titulo,
                'descripcion_corta' => $plan->descripcion_corta,
                'descripcion' => $plan->descripcion,
                'ubicacion' => $plan->ubicacion,
                'estado' => $plan->estado?->nombre,
                'fecha_inicio' => $plan->fecha_inicio?->format('Y-m-d'),
                'fecha_estimada_finalizacion' => $plan->fecha_estimada_finalizacion?->format('Y-m-d'),
                'imagen_portada' => $plan->imagen_portada ? Storage::url($plan->imagen_portada) : null,
                'imagenes' => $plan->imagenes
                    ->filter(fn ($imagen) => $imagen->archivo)
                    ->map(fn ($imagen) => [
                        'url' => Storage::url($imagen->archivo),
                        'alt' => $imagen->alt_text ?: $plan->titulo,
                    ])
                    ->values()
                    ->all(),
            ]);

        $noticias = Noticia::where('publicado', true)
            ->latest()
            ->take(3)
            ->get()
            ->map(fn ($noticia) => [
                'id' => $noticia->id,
                'titulo' => $noticia->titulo,
                'descripcion_corta' => $noticia->descripcion_corta,
                'descripcion' => $noticia->descripcion,
                'imagen_portada' => $noticia->imagen_portada ? Storage::url($noticia->imagen_portada) : null,
                'fecha' => $noticia->created_at?->locale('es')->translatedFormat('d \d\e F \d\e Y'),
            ]);

        $eventos = Evento::where('publicado', true)
            ->where(function ($query) {
                $query->whereNull('fecha_fin')
                    ->where('fecha_inicio', '>=', now())
                    ->orWhere('fecha_fin', '>=', now());
            })
            ->orderBy('fecha_inicio')
            ->take(3)
            ->get()
            ->map(fn ($evento) => [
                'id' => $evento->id,
                'titulo' => $evento->titulo,
                'descripcion_corta' => $evento->descripcion_corta,
                'fecha_inicio' => $evento->fecha_inicio?->format('Y-m-d\TH:i:s'),
                'fecha_fin' => $evento->fecha_fin?->format('Y-m-d\TH:i:s'),
                'lugar' => $evento->lugar,
                'imagen_portada' => $evento->imagen_portada ? Storage::url($evento->imagen_portada) : null,
            ]);

        return Inertia::render('Web/Welcome', [
            'planes' => $planes,
            'noticias' => $noticias,
            'eventos' => $eventos,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function planes()
    {
        $planes = Plan::with(['estado:id,nombre', 'imagenes' => fn ($query) => $query->orderBy('orden')])
            ->where('publicado', true)
            ->latest()
            ->get()
            ->map(fn ($plan) => [
                'id' => $plan->id,
                'titulo' => $plan->titulo,
                'descripcion_corta' => $plan->descripcion_corta,
                'descripcion' => $plan->descripcion,
                'ubicacion' => $plan->ubicacion,
                'estado' => $plan->estado?->nombre,
                'fecha_inicio' => $plan->fecha_inicio?->format('Y-m-d'),
                'fecha_estimada_finalizacion' => $plan->fecha_estimada_finalizacion?->format('Y-m-d'),
                'imagen_portada' => $plan->imagen_portada
                    ? Storage::url($plan->imagen_portada)
                    : null,
                'imagenes' => $plan->imagenes
                    ->filter(fn ($imagen) => $imagen->archivo)
                    ->map(fn ($imagen) => [
                        'url' => Storage::url($imagen->archivo),
                        'alt' => $imagen->alt_text ?: $plan->titulo,
                    ])
                    ->values()
                    ->all(),
        ]);

        return Inertia::render('Web/Planes/Index', [
            'planes' => $planes,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    // ESTE ES EL NOTICIAS DEL INDEX, EL PRINCIPAL QUE RECOGE TODA LA INFORMACIÓN DE TODOS
    public function noticias()
    {
        $noticias = Noticia::with(['imagenes' => fn ($query) => $query->orderBy('orden')])
            ->where('publicado', true)
            ->latest()
            ->get()
            ->map(fn ($noticia) => [
                'id' => $noticia->id,
                'titulo' => $noticia->titulo,
                'descripcion_corta' => $noticia->descripcion_corta,
                'descripcion' => $noticia->descripcion,
                'imagen_portada' => $noticia->imagen_portada ? Storage::url($noticia->imagen_portada) : null,
                'fecha' => $noticia->created_at?->locale('es')->translatedFormat('d \d\e F \d\e Y'),
                'imagenes' => $noticia->imagenes
                    ->filter(fn ($imagen) => $imagen->archivo)
                    ->map(fn ($imagen) => [
                        'url' => Storage::url($imagen->archivo),
                        'alt' => $imagen->alt_text ?: $noticia->titulo,
                    ])
                    ->values()
                    ->all(),
            ]);

        return Inertia::render('Web/Noticias/Index', [
            'noticias' => $noticias,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    // ESTE ES EL NOTICIAS INDIVIDUAL, EL QUE PERTENECE AL SHOW
    public function noticia(Noticia $noticia)
    {
        abort_unless($noticia->publicado, 404);

        $noticia->load(['imagenes' => fn ($query) => $query->orderBy('orden')]);

        return Inertia::render('Web/Noticias/Show', [
            'noticia' => [
                'id' => $noticia->id,
                'titulo' => $noticia->titulo,
                'descripcion_corta' => $noticia->descripcion_corta,
                'descripcion' => $noticia->descripcion,
                'fecha' => $noticia->created_at?->locale('es')->translatedFormat('d \d\e F \d\e Y'),
                'imagen_portada' => $noticia->imagen_portada ? Storage::url($noticia->imagen_portada) : null,
                'imagenes' => $noticia->imagenes
                    ->filter(fn ($imagen) => $imagen->archivo)
                    ->map(fn ($imagen) => [
                        'url' => Storage::url($imagen->archivo),
                        'alt' => $imagen->alt_text ?: $noticia->titulo,
                    ])
                    ->values()
                    ->all(),
            ],
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function eventos()
    {
        $eventos = Evento::with(['imagenes' => fn ($query) => $query->orderBy('orden')])
            ->where('publicado', true)
            ->orderBy('fecha_inicio')
            ->get()
            ->map(fn ($evento) => [
                'id' => $evento->id,
                'titulo' => $evento->titulo,
                'descripcion_corta' => $evento->descripcion_corta,
                'descripcion' => $evento->descripcion,
                'fecha_inicio' => $evento->fecha_inicio?->format('Y-m-d\TH:i:s'),
                'fecha_fin' => $evento->fecha_fin?->format('Y-m-d\TH:i:s'),
                'lugar' => $evento->lugar,
                'imagen_portada' => $evento->imagen_portada ? Storage::url($evento->imagen_portada) : null,
                'imagenes' => $evento->imagenes
                    ->filter(fn ($imagen) => $imagen->archivo)
                    ->map(fn ($imagen) => [
                        'url' => Storage::url($imagen->archivo),
                        'alt' => $imagen->alt_text ?: $evento->titulo,
                    ])
                    ->values()
                    ->all(),
            ]);

        return Inertia::render('Web/Eventos/Index', [
            'eventos' => $eventos,
        ]);
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function evento(Evento $evento)
    {
        abort_unless($evento->publicado, 404);

        $evento->load([
            'imagenes' => fn ($query) => $query->orderBy('orden'),
        ]);

        return Inertia::render('Web/Eventos/Show', [
            'evento' => [
                'id' => $evento->id,
                'titulo' => $evento->titulo,
                'descripcion_corta' => $evento->descripcion_corta,
                'descripcion' => $evento->descripcion,
                'fecha_inicio' => $evento->fecha_inicio?->format('Y-m-d\TH:i:s'),
                'fecha_fin' => $evento->fecha_fin?->format('Y-m-d\TH:i:s'),
                'lugar' => $evento->lugar,
                'imagen_portada' => $evento->imagen_portada ? Storage::url($evento->imagen_portada) : null,
                'imagenes' => $evento->imagenes
                    ->filter(fn ($imagen) => $imagen->archivo)
                    ->map(fn ($imagen) => [
                        'url' => Storage::url($imagen->archivo),
                        'alt' => $imagen->alt_text ?: $evento->titulo,
                    ])
                    ->values()
                    ->all(),
            ],
        ]);
    }
}