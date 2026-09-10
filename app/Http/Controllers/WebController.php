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

        return Inertia::render('Web/Welcome', [
            'planes' => $planes,
            'noticias' => $noticias,
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
        $eventos = [
            [
                'id' => 1,
                'titulo' => 'El Puerto Fest',
                'descripcion' => 'Una jornada cultural y recreativa para toda la comunidad del estado Anzoátegui. El evento reunirá actividades culturales, deportivas y recreativas para el disfrute de las familias, además de espacios destinados a promover el talento y la identidad de nuestro estado.',
                'fecha_inicio' => '2026-09-18T09:00:00',
                'fecha_fin' => '2026-09-18T17:00:00',
                'lugar' => 'Plaza Bolívar, Barcelona',
                'imagen_portada' => 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
            ],
            [
                'id' => 2,
                'titulo' => 'Expoferia Agroproductiva',
                'descripcion' => 'Encuentro para impulsar la producción y el desarrollo agroproductivo del estado.',
                'fecha_inicio' => '2026-09-22T10:00:00',
                'fecha_fin' => '2026-09-22T16:00:00',
                'lugar' => 'Parque Andrés Eloy Blanco, Lechería',
                'imagen_portada' => 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=80',
            ],
            [
                'id' => 3,
                'titulo' => 'Festival Playero',
                'descripcion' => 'Actividad deportiva, cultural y recreativa para disfrutar de nuestras costas.',
                'fecha_inicio' => '2026-09-27T08:30:00',
                'fecha_fin' => '2026-09-27T15:00:00',
                'lugar' => 'Municipio Simón Rodríguez',
                'imagen_portada' => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
            ],
            [
                'id' => 4,
                'titulo' => 'Jornada de Atención Ciudadana',
                'descripcion' => 'Jornada de atención y orientación dirigida a los ciudadanos del estado.',
                'fecha_inicio' => '2026-08-15T09:00:00',
                'fecha_fin' => '2026-08-15T14:00:00',
                'lugar' => 'Casa de Gobierno, Barcelona',
                'imagen_portada' => 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80',
            ],
            [
                'id' => 5,
                'titulo' => 'Encuentro Cultural Anzoátegui',
                'descripcion' => 'Espacio dedicado a la cultura, tradición y expresión artística de nuestro estado.',
                'fecha_inicio' => '2026-08-05T10:00:00',
                'fecha_fin' => '2026-08-05T18:00:00',
                'lugar' => 'Centro Cultural Anzoátegui',
                'imagen_portada' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
            ],
        ];

        return Inertia::render('Web/Eventos/Index', [
            'eventos' => $eventos,
        ]);
    }

    public function evento(int $evento)
    {
        $eventos = [
            [
                'id' => 1,
                'titulo' => 'El Puerto Fest',
                'descripcion' => 'Una jornada cultural y recreativa para toda la comunidad del estado Anzoátegui. El evento reunirá actividades culturales, deportivas y recreativas para el disfrute de las familias, además de espacios destinados a promover el talento y la identidad de nuestro estado.',
                'fecha_inicio' => '2026-09-18T09:00:00',
                'fecha_fin' => '2026-09-18T17:00:00',
                'lugar' => 'Plaza Bolívar, Barcelona',
                'imagen_portada' => 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85',
            ],
            [
                'id' => 2,
                'titulo' => 'Expoferia Agroproductiva',
                'descripcion' => 'Encuentro para impulsar la producción y el desarrollo agroproductivo del estado.',
                'fecha_inicio' => '2026-09-22T10:00:00',
                'fecha_fin' => '2026-09-22T16:00:00',
                'lugar' => 'Parque Andrés Eloy Blanco, Lechería',
                'imagen_portada' => 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=80',
            ],
            [
                'id' => 3,
                'titulo' => 'Festival Playero',
                'descripcion' => 'Actividad deportiva, cultural y recreativa para disfrutar de nuestras costas.',
                'fecha_inicio' => '2026-09-27T08:30:00',
                'fecha_fin' => '2026-09-27T15:00:00',
                'lugar' => 'Municipio Simón Rodríguez',
                'imagen_portada' => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
            ],
            [
                'id' => 4,
                'titulo' => 'Jornada de Atención Ciudadana',
                'descripcion' => 'Jornada de atención y orientación dirigida a los ciudadanos del estado.',
                'fecha_inicio' => '2026-08-15T09:00:00',
                'fecha_fin' => '2026-08-15T14:00:00',
                'lugar' => 'Casa de Gobierno, Barcelona',
                'imagen_portada' => 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80',
            ],
            [
                'id' => 5,
                'titulo' => 'Encuentro Cultural Anzoátegui',
                'descripcion' => 'Espacio dedicado a la cultura, tradición y expresión artística de nuestro estado.',
                'fecha_inicio' => '2026-08-05T10:00:00',
                'fecha_fin' => '2026-08-05T18:00:00',
                'lugar' => 'Centro Cultural Anzoátegui',
                'imagen_portada' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
            ],
        ];

        $evento = collect($eventos)->firstWhere('id', $evento);

        abort_unless($evento, 404);

        return Inertia::render('Web/Eventos/Show', [
            'evento' => $evento,
        ]);
    }
}