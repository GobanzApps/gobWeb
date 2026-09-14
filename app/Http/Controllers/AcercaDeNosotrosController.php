<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AcercaDeNosotrosController extends Controller
{
    // El Estado

    public function historia()
    {
        return Inertia::render('Web/AcercaDeNosotros/ElEstado/Historia');
    }

    public function mandatos()
    {
        return Inertia::render('Web/AcercaDeNosotros/ElEstado/Mandatos');
    }
    
    public function geografia()
    {
        return Inertia::render('Web/AcercaDeNosotros/ElEstado/Geografia');
    }

    public function efemerides()
    {
        return Inertia::render('Web/AcercaDeNosotros/ElEstado/Efemerides');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    // Símbolos Patrimoniales

    public function bandera()
    {
        return Inertia::render('Web/AcercaDeNosotros/SimbolosPatrimoniales/Bandera');
    }

    public function escudo()
    {
        return Inertia::render('Web/AcercaDeNosotros/SimbolosPatrimoniales/Escudo');
    }

    public function himno()
    {
        return Inertia::render('Web/AcercaDeNosotros/SimbolosPatrimoniales/Himno');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    // Naturaleza

    public function floraYVegetacion()
    {
        return Inertia::render('Web/AcercaDeNosotros/Naturaleza/FloraYVegetacion');
    }

    public function recursosMinerales()
    {
        return Inertia::render('Web/AcercaDeNosotros/Naturaleza/RecursosMinerales');
    }

    public function lagunasRios()
    {
        return Inertia::render('Web/AcercaDeNosotros/Naturaleza/LagunasYRios');
    }

    public function islasBahias()
    {
        return Inertia::render('Web/AcercaDeNosotros/Naturaleza/IslasYBahias');
    }

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

    // Cultura

    public function costumbresTradiciones()
    {
        return Inertia::render('Web/AcercaDeNosotros/Cultura/CostumbresYTradiciones');
    }

    public function bailes()
    {
        return Inertia::render('Web/AcercaDeNosotros/Cultura/Bailes');
    }

    public function plazas()
    {
        return Inertia::render('Web/AcercaDeNosotros/Cultura/Plazas');
    }

    public function sitiosHistoricos()
    {
        return Inertia::render('Web/AcercaDeNosotros/Cultura/SitiosHistoricos');
    }
}