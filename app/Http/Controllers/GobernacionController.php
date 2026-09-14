<?php

namespace App\Http\Controllers;

use App\Models\Gaceta;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GobernacionController extends Controller
{
    public function entesAdscritos()
    {
        return Inertia::render('Web/Gobernacion/EntesAdscritos');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    public function gacetas()
    {
        $gacetas = Gaceta::where('publicado', true)
            ->latest()
            ->get()
            ->map(fn ($gaceta) => [
                'id' => $gaceta->id,
                'titulo' => $gaceta->titulo,
                'descripcion' => $gaceta->descripcion,
                'archivo' => Storage::url($gaceta->archivo),
                'fecha' => $gaceta->created_at?->locale('es')->translatedFormat('d \d\e F \d\e Y'),
                'anio' => $gaceta->created_at?->format('Y'),
            ]);

        return Inertia::render('Web/Gobernacion/Gacetas', [
            'gacetas' => $gacetas,
        ]);
    }
}