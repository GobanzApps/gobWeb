<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Gaceta extends Model
{
    use HasFactory;

    protected $table = 'gacetas';

    protected $fillable = [
        'titulo',
        'descripcion',
        'archivo',
        'publicado',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'publicado' => 'boolean',
    ];

    public function creador(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function editor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}