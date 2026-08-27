<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePlanRequest extends FormRequest
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
            'estado_id' => ['required', 'integer',
                Rule::exists('estados_plan', 'id')
                    ->where('activo', true),
            ],
            'fecha_inicio' => ['nullable', 'date'],
            'fecha_estimada_finalizacion' => ['nullable', 'date', 'after_or_equal:fecha_inicio'],
            'ubicacion' => ['nullable', 'string', 'max:255'],
            'publicado' => ['required', 'boolean'],

            // Imágenes nuevas
            'imagenes' => ['nullable', 'array', 'max:10'],
            'imagenes.*' => [
                'image',
                'mimes:jpeg,png,webp',
                'max:5120',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'titulo.required' => 'El título del plan es obligatorio.',
            'titulo.string' => 'El título del plan debe ser texto.',
            'titulo.max' => 'El título no puede superar los 255 caracteres.',

            'descripcion.required' => 'La descripción del plan es obligatoria.',
            'descripcion.string' => 'La descripción debe ser texto.',

            'estado_id.required' => 'Debes seleccionar un estado.',
            'estado_id.integer' => 'El estado seleccionado no es válido.',
            'estado_id.exists' => 'El estado seleccionado no existe.',

            'fecha_inicio.date' => 'La fecha de inicio no es válida.',

            'fecha_estimada_finalizacion.date' => 'La fecha estimada de finalización no es válida.',
            'fecha_estimada_finalizacion.after_or_equal' => 'La fecha estimada de finalización debe ser igual o posterior a la fecha de inicio.',

            'ubicacion.string' => 'La ubicación debe ser texto.',
            'ubicacion.max' => 'La ubicación no puede superar los 255 caracteres.',

            'publicado.required' => 'Debes indicar si el plan será publicado.',
            'publicado.boolean' => 'El campo publicado debe ser verdadero o falso.',

            'imagenes.array' => 'Las imágenes enviadas no son válidas.',
            'imagenes.max' => 'Puedes subir un máximo de 10 imágenes.',
            'imagenes.*.image' => 'Cada archivo debe ser una imagen válida.',
            'imagenes.*.mimes' => 'Las imágenes deben ser JPG, PNG o WebP.',
            'imagenes.*.max' => 'Cada imagen no puede superar los 5 MB.',
        ];
    }
}