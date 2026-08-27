<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Plan extends Model
{
    use HasFactory;

    protected $table = 'planes';

    protected $fillable = [
        'titulo',
        'descripcion',
        'estado_id',
        'fecha_inicio',
        'fecha_estimada_finalizacion',
        'ubicacion',
        'publicado',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'fecha_inicio' => 'date',
        'fecha_estimada_finalizacion' => 'date',
        'publicado' => 'boolean',
    ];

    public function estado(): BelongsTo
    {
        return $this->belongsTo(EstadoPlan::class, 'estado_id');
    }

    public function creador(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function editor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    public function imagenes(): MorphMany
    {
        return $this->morphMany(Imagen::class, 'imageable');
    }
}