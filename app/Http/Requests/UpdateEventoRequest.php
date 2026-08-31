<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEventoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'titulo' => ['required', 'string', 'max:255'],
            'descripcion' => ['required', 'string'],
            'fecha_inicio' => ['required', 'date'],
            'fecha_fin' => ['nullable', 'date', 'after_or_equal:fecha_inicio'],
            'lugar' => ['nullable', 'string', 'max:255'],
            'publicado' => ['boolean'],
            'imagenes' => ['nullable', 'array', 'max:10'],
            'imagenes.*' => ['image', 'mimes:jpeg,png,webp', 'max:5120'],
            'imagenes_eliminar' => ['nullable', 'array'],
            'imagenes_eliminar.*' => ['integer', 'exists:imagenes,id'],
        ];
    }
}
