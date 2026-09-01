import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { notify } from '@/lib/notify';

interface Gaceta {
    id?: number;
    titulo: string;
    descripcion: string | null;
    archivo: string | null;
    publicado: boolean;
}

interface Props {
    gaceta?: Gaceta;
    submitUrl: string;
    method?: 'post' | 'put';
}

export default function Form({gaceta, submitUrl, method = 'post'}: Props)
{
    const { data, setData, post, processing, errors } = useForm({
        titulo: gaceta?.titulo ?? '',
        descripcion: gaceta?.descripcion ?? '',
        archivo: null as File | null,
        publicado: gaceta?.publicado ?? false,
        _method: method === 'put' ? 'put' : undefined,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(submitUrl, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {notify.success(gaceta ? 'Gaceta actualizada correctamente.' : 'Gaceta creada correctamente.');},
            onError: () => {notify.error(gaceta ? 'No se pudo actualizar la gaceta.' : 'No se pudo crear la gaceta.');
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-6">

            {/* Título */}
            <div className="space-y-2">
                <Label htmlFor="titulo">
                    Título
                </Label>

                <Input
                    id="titulo"
                    type="text"
                    value={data.titulo}
                    onChange={(e) =>
                        setData('titulo', e.target.value)
                    }
                    placeholder="Ej. Gaceta Oficial N.º 123"
                />

                {errors.titulo && (
                    <p className="text-sm text-red-600">
                        {errors.titulo}
                    </p>
                )}
            </div>

            {/* Descripción */}
            <div className="space-y-2">
                <Label htmlFor="descripcion">
                    Descripción
                </Label>

                <Textarea
                    id="descripcion"
                    value={data.descripcion}
                    onChange={(e) =>
                        setData('descripcion', e.target.value)
                    }
                    placeholder="Descripción de la gaceta..."
                    rows={5}
                />

                {errors.descripcion && (
                    <p className="text-sm text-red-600">
                        {errors.descripcion}
                    </p>
                )}
            </div>

            {/* Archivo PDF */}
            <div className="space-y-2">
                <Label htmlFor="archivo">
                    Archivo PDF
                </Label>

                {gaceta?.archivo && (
                    <div className="rounded-md border bg-muted/30 p-3 text-sm">
                        <span className="font-medium">
                            Archivo actual:
                        </span>{' '}

                        <a
                            href={`/storage/${gaceta.archivo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Ver PDF
                        </a>
                    </div>
                )}

                <Input
                    id="archivo"
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;
                        setData('archivo', file);
                    }}
                />

                <p className="text-xs text-muted-foreground">
                    Solo archivos PDF. Tamaño máximo: 10 MB.
                </p>

                {errors.archivo && (
                    <p className="text-sm text-red-600">
                        {errors.archivo}
                    </p>
                )}
            </div>

            {/* Publicado */}
            <div className="flex items-center space-x-2">
                <Checkbox
                    id="publicado"
                    checked={data.publicado}
                    onCheckedChange={(checked) =>
                        setData('publicado', checked === true)
                    }
                />

                <Label
                    htmlFor="publicado"
                    className="cursor-pointer"
                >
                    Publicado
                </Label>
            </div>

            {errors.publicado && (
                <p className="text-sm text-red-600">
                    {errors.publicado}
                </p>
            )}

            {/* Botón */}
            <div className="flex justify-end">
                <Button
                    type="submit"
                    disabled={processing}
                >
                    {processing
                        ? 'Guardando...'
                        : gaceta
                            ? 'Actualizar gaceta'
                            : 'Crear gaceta'}
                </Button>
            </div>

        </form>
    );
}