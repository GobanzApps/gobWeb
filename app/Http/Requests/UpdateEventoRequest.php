<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Evento;
use Illuminate\Validation\Validator;

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
            'descripcion_corta' => ['required', 'string', 'max:100'],
            'descripcion' => ['required', 'string'],
            'imagen_portada' => ['nullable', 'file', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'fecha_inicio' => ['required', 'date'],
            'fecha_fin' => ['nullable', 'date', 'after_or_equal:fecha_inicio'],
            'lugar' => ['nullable', 'string', 'max:255'],
            'publicado' => ['boolean'],
            'imagenes' => ['nullable', 'array'],
            'imagenes.*' => ['image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'imagenes_eliminar' => ['nullable', 'array'],
            'imagenes_eliminar.*' => ['integer', 'exists:imagenes,id'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator) {
            $evento = $this->route('evento');

            if (!$evento instanceof Evento) {
                return;
            }

            $eliminadas = $this->input('imagenes_eliminar', []);
            $existentes = $evento->imagenes()->whereNotIn('id', $eliminadas)->count();
            $nuevas = count($this->file('imagenes', []));

            if (($existentes + $nuevas) > 100) {
                $disponibles = max(0, 100 - $existentes);

                $validator->errors()->add(
                    'imagenes',
                    "El evento puede tener un máximo de 100 imágenes. Puedes agregar {$disponibles} imagen(es) adicionales."
                );
            }
        });
    }
}
