<?php

namespace Database\Seeders;

use App\Models\EstadoPlan;
use Illuminate\Database\Seeder;

class EstadoPlanSeeder extends Seeder
{
    public function run(): void
    {
        $estados = [
            [
                'nombre' => 'Planificado',
                'descripcion' => 'El plan ha sido proyectado pero aún no ha comenzado.',
            ],
            [
                'nombre' => 'En ejecución',
                'descripcion' => 'El plan se encuentra actualmente en ejecución.',
            ],
            [
                'nombre' => 'Paralizado',
                'descripcion' => 'La ejecución del plan se encuentra temporalmente detenida.',
            ],
            [
                'nombre' => 'Finalizado',
                'descripcion' => 'El plan ha sido completado.',
            ],
            [
                'nombre' => 'Cancelado',
                'descripcion' => 'El plan fue cancelado y no será ejecutado.',
            ],
        ];

        foreach ($estados as $estado) {
            EstadoPlan::create($estado);
        }
    }
}