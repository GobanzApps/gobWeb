<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Gabinete extends Model
{
    use HasFactory;

    protected $table = 'gabinetes';

    protected $fillable = [
        'nombre',
        'descripcion',
        'activo',
        'orden',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'activo' => 'boolean',
    ];

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