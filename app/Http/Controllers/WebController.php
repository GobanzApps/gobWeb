<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WebController extends Controller
{
    public function index()
    {
        return Inertia::render('Web/Welcome');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function planes()
    {
        $planes = [
            [
                'id' => 1,
                'titulo' => 'Rehabilitación de vías principales',
                'descripcion' => 'Proyecto destinado a la recuperación y mejoramiento de las principales vías del estado Anzoátegui.',
                'ubicacion' => 'Barcelona, Anzoátegui',
                'estado' => 'En ejecución',
                'fecha_inicio' => '2026-01-15',
                'fecha_estimada_finalizacion' => '2026-08-30',
                'imagen' => '/images/planes/asfaltado.jpg',
            ],
            [
                'id' => 2,
                'titulo' => 'Construcción de complejo habitacional',
                'descripcion' => 'Construcción de nuevas viviendas destinadas a mejorar las condiciones habitacionales de las comunidades.',
                'ubicacion' => 'Puerto La Cruz, Anzoátegui',
                'estado' => 'En planificación',
                'fecha_inicio' => '2026-04-10',
                'fecha_estimada_finalizacion' => '2027-02-15',
                'imagen' => '/images/planes/viviendas.jpg',
            ],
            [
                'id' => 3,
                'titulo' => 'Recuperación de espacios públicos',
                'descripcion' => 'Modernización y recuperación de plazas, parques y espacios recreativos para el disfrute de las comunidades.',
                'ubicacion' => 'Lechería, Anzoátegui',
                'estado' => 'Finalizado',
                'fecha_inicio' => '2025-09-01',
                'fecha_estimada_finalizacion' => '2026-02-20',
                'imagen' => '/images/planes/espacios-publicos.jpg',
            ],
            [
                'id' => 4,
                'titulo' => 'Mejoramiento de infraestructura educativa',
                'descripcion' => 'Programa de rehabilitación y adecuación de instituciones educativas del estado.',
                'ubicacion' => 'Anzoátegui',
                'estado' => 'En ejecución',
                'fecha_inicio' => '2026-02-01',
                'fecha_estimada_finalizacion' => '2026-12-20',
                'imagen' => '/images/planes/educacion.jpg',
            ],
        ];

        return Inertia::render('Web/Planes/Index', [
            'planes' => $planes,
        ]);
    }
}