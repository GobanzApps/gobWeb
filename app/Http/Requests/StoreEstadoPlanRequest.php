<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEstadoPlanRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nombre' => [
                'required',
                'string',
                'max:255',
                'unique:estados_plan,nombre',
            ],

            'descripcion' => [
                'nullable',
                'string',
                'max:255',
            ],

            'activo' => [
                'required',
                'boolean',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'nombre.required' => 'El nombre del estado es obligatorio.',
            'nombre.string' => 'El nombre del estado debe ser texto.',
            'nombre.max' => 'El nombre del estado no puede superar los 255 caracteres.',
            'nombre.unique' => 'Ya existe un estado con ese nombre.',

            'descripcion.string' => 'La descripción debe ser texto.',
            'descripcion.max' => 'La descripción no puede superar los 255 caracteres.',

            'activo.required' => 'El estado activo es obligatorio.',
            'activo.boolean' => 'El campo activo debe ser verdadero o falso.',
        ];
    }
}