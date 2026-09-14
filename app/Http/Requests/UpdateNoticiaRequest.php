<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNoticiaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'titulo' => ['required', 'string', 'max:255'],
            'descripcion_corta' => ['required', 'string', 'max:250'],
            'descripcion' => ['required', 'string'],
            'imagen_portada' => ['nullable', 'file', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'publicado' => ['boolean'],
            'imagenes' => ['nullable', 'array', 'max:10'],
            'imagenes.*' => ['file', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'imagenes_eliminar' => ['nullable', 'array'],
            'imagenes_eliminar.*' => ['integer', 'exists:imagenes,id'],
        ];
    }
}