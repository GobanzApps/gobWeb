<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EstadoPlan extends Model
{
    use HasFactory;

    protected $table = 'estados_plan';

    protected $fillable = [
        'nombre',
        'descripcion',
        'activo',
    ];

    protected $casts = [
        'activo' => 'boolean',
    ];

    public function planes(): HasMany
    {
        return $this->hasMany(Plan::class, 'estado_id');
    }
}