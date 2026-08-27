import { FormEventHandler } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { notify } from '@/lib/notify';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Props {
    estadoPlan?: {
        id: number;
        nombre: string;
        descripcion: string | null;
        activo: boolean;
    };
}

export default function Form({ estadoPlan }: Props) {

    const isEditing = !!estadoPlan;

    const { data, setData, post, put, processing, errors } = useForm({
        nombre: estadoPlan?.nombre ?? '',
        descripcion: estadoPlan?.descripcion ?? '',
        activo: estadoPlan?.activo ?? true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (isEditing) {
            put(
                route('estados-plan.update', estadoPlan.id),
                {
                    onSuccess: () => {notify.success('Estado de plan actualizado correctamente.');},
                    onError: () => {notify.error('No se pudo actualizar el estado de plan.');},
                }
            );
            return;
        }
        post(
            route('estados-plan.store'),
            {
                onSuccess: () => {notify.success('Estado de plan creado correctamente.');},
                onError: () => {notify.error('No se pudo crear el estado de plan.');},
            }
        );
    };

    return (
        <form
            onSubmit={submit}
            className="space-y-6 max-w-2xl"
        >

            {/* Nombre */}
            <div className="space-y-2">

                <label
                    htmlFor="nombre"
                    className="text-sm font-medium"
                >
                    Nombre
                    <span className="text-red-500"> *</span>
                </label>

                <Input
                    id="nombre"
                    type="text"
                    value={data.nombre}
                    onChange={(e) =>
                        setData('nombre', e.target.value)
                    }
                    placeholder="Ej. En ejecución"
                    disabled={processing}
                />

                {errors.nombre && (
                    <p className="text-sm text-red-600">
                        {errors.nombre}
                    </p>
                )}

            </div>

            {/* Descripción */}
            <div className="space-y-2">

                <label
                    htmlFor="descripcion"
                    className="text-sm font-medium"
                >
                    Descripción
                </label>

                <Textarea
                    id="descripcion"
                    value={data.descripcion}
                    onChange={(e) =>
                        setData('descripcion', e.target.value)
                    }
                    placeholder="Describe brevemente este estado..."
                    disabled={processing}
                    rows={4}
                />

                {errors.descripcion && (
                    <p className="text-sm text-red-600">
                        {errors.descripcion}
                    </p>
                )}

            </div>

            {/* Estado */}
            <div className="space-y-2">

                <label
                    htmlFor="activo"
                    className="text-sm font-medium"
                >
                    Estado
                </label>

                <div className="flex items-center gap-3">

                    <input
                        id="activo"
                        type="checkbox"
                        checked={data.activo}
                        onChange={(e) =>
                            setData('activo', e.target.checked)
                        }
                        disabled={processing}
                        className="h-4 w-4 rounded border-gray-300"
                    />

                    <label
                        htmlFor="activo"
                        className="text-sm"
                    >
                        Estado activo
                    </label>

                </div>

                {errors.activo && (
                    <p className="text-sm text-red-600">
                        {errors.activo}
                    </p>
                )}

            </div>

            {/* Botones */}
            <div className="flex items-center gap-3">

                <Link
                    href={route('estados-plan.index')}
                >
                    <Button
                        type="button"
                        variant="outline"
                        disabled={processing}
                    >
                        Cancelar
                    </Button>
                </Link>

                <Button
                    type="submit"
                    disabled={processing}
                >
                    {processing
                        ? 'Guardando...'
                        : isEditing
                            ? 'Actualizar estado'
                            : 'Guardar estado'}
                </Button>

            </div>

        </form>
    );
}