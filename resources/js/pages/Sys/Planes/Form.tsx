import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { ImagePlus, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '@/components/ui/date-picker';
import { Switch } from '@/components/ui/switch';
import {
    Attachment,
    AttachmentActions,
    AttachmentAction,
    AttachmentContent,
    AttachmentDescription,
    AttachmentGroup,
    AttachmentMedia,
    AttachmentTitle,
} from '@/components/ui/attachment';
import { notify } from '@/lib/notify';

interface EstadoPlan {
    id: number;
    nombre: string;
    activo?: boolean;
}

interface Imagen {
    id: number;
    archivo: string;
    nombre_original: string;
    alt_text: string | null;
    orden: number;
}

interface Plan {
    id: number;
    titulo: string;
    descripcion: string;
    estado_id: number;
    fecha_inicio: string | null;
    fecha_estimada_finalizacion: string | null;
    ubicacion: string | null;
    publicado: boolean;
    imagenes: Imagen[];
}

interface Props {
    estadosPlan: EstadoPlan[];
    plan?: Plan;
}

function parseDate(value: string | null | undefined): Date | undefined {
    if (!value) return undefined;

    const [year, month, day] = value.substring(0, 10).split('-').map(Number);
    return new Date(year, month - 1, day);
}

function formatDateForInput(value: Date | undefined): string {
    if (!value) return '';

    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export default function Form({ estadosPlan, plan }: Props) {
    const isEditing = !!plan;
    const inputRef = useRef<HTMLInputElement>(null);

    const [fechaInicio, setFechaInicio] = useState<Date | undefined>(parseDate(plan?.fecha_inicio));
    const [fechaFinalizacion, setFechaFinalizacion] = useState<Date | undefined>(parseDate(plan?.fecha_estimada_finalizacion));
    const [imagenesEliminadas, setImagenesEliminadas] = useState<number[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

    const { data, setData, post, transform, processing, errors } = useForm({
        titulo: plan?.titulo ?? '',
        descripcion: plan?.descripcion ?? '',
        estado_id: plan?.estado_id?.toString() ?? '',
        fecha_inicio: plan?.fecha_inicio?.substring(0, 10) ?? '',
        fecha_estimada_finalizacion: plan?.fecha_estimada_finalizacion?.substring(0, 10) ?? '',
        ubicacion: plan?.ubicacion ?? '',
        publicado: plan?.publicado ?? false,
        imagenes: [] as File[],
        imagenes_eliminar: [] as number[],
    });

    const imagenesExistentes = (plan?.imagenes ?? []).filter(
        (imagen) => !imagenesEliminadas.includes(imagen.id)
    );

    useEffect(() => {
        const urls = data.imagenes.map((file) => URL.createObjectURL(file));
        setPreviews(urls);

        return () => urls.forEach((url) => URL.revokeObjectURL(url));
    }, [data.imagenes]);

    const handleRemoveExistingImage = (id: number) => {
        const nuevas = [...imagenesEliminadas, id];
        setImagenesEliminadas(nuevas);
        setData('imagenes_eliminar', nuevas);
    };

    const removeNewImage = (index: number) => {
        setData('imagenes', data.imagenes.filter((_, i) => i !== index));
    };

    const handleFiles = (files: FileList | null) => {
        if (!files) return;

        const disponibles = 10 - imagenesExistentes.length - data.imagenes.length;
        const nuevas = Array.from(files).slice(0, disponibles);

        if (nuevas.length) setData('imagenes', [...data.imagenes, ...nuevas]);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEditing) {
            transform((formData) => ({ ...formData, _method: 'put' }));

            post(route('planes.update', plan.id), {
                forceFormData: true,
                onSuccess: () => notify.success('Plan actualizado correctamente.'),
                onError: () => notify.error('No se pudo actualizar el plan.'),
            });

            return;
        }

        post(route('planes.store'), {
            forceFormData: true,
            onSuccess: () => notify.success('Plan creado correctamente.'),
            onError: () => notify.error('No se pudo crear el plan.'),
        });
    };

    const totalImagenes = imagenesExistentes.length + data.imagenes.length;
    const puedeAgregarImagenes = totalImagenes < 10;

    return (
        <form onSubmit={submit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Cuadro 1 */}
                <div className="rounded-xl border bg-card p-6 lg:col-span-2">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">Información del plan</h2>
                        <p className="text-sm text-muted-foreground">Datos principales del plan.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="titulo" className="text-sm font-medium">
                                Título <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="titulo"
                                value={data.titulo}
                                onChange={(e) => setData('titulo', e.target.value)}
                                placeholder="Ej. Rehabilitación de la Avenida Principal"
                                disabled={processing}
                            />
                            {errors.titulo && <p className="text-sm text-red-600">{errors.titulo}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="estado_id" className="text-sm font-medium">
                                Estado <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="estado_id"
                                value={data.estado_id}
                                onChange={(e) => setData('estado_id', e.target.value)}
                                disabled={processing}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                            >
                                <option value="">Selecciona un estado</option>
                                {estadosPlan.map((estado) => (
                                    <option key={estado.id} value={estado.id}>
                                        {estado.nombre}{estado.activo === false ? ' (Inactivo)' : ''}
                                    </option>
                                ))}
                            </select>
                            {errors.estado_id && <p className="text-sm text-red-600">{errors.estado_id}</p>}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="ubicacion" className="text-sm font-medium">Ubicación</label>
                            <Input
                                id="ubicacion"
                                value={data.ubicacion}
                                onChange={(e) => setData('ubicacion', e.target.value)}
                                placeholder="Ej. Barcelona, Estado Anzoátegui"
                                disabled={processing}
                            />
                            {errors.ubicacion && <p className="text-sm text-red-600">{errors.ubicacion}</p>}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="descripcion" className="text-sm font-medium">
                                Descripción <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                                id="descripcion"
                                value={data.descripcion}
                                onChange={(e) => setData('descripcion', e.target.value)}
                                placeholder="Describe el plan, proyecto, objetivo, alcance, etc."
                                rows={9}
                                disabled={processing}
                                className="resize-none"
                            />
                            {errors.descripcion && <p className="text-sm text-red-600">{errors.descripcion}</p>}
                        </div>
                    </div>
                </div>

                {/* Cuadro 2 */}
                <div className="rounded-xl border bg-card p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">Detalles</h2>
                        <p className="text-sm text-muted-foreground">Fechas y publicación.</p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium">Fecha de inicio</label>
                            <DatePicker
                                value={fechaInicio}
                                onChange={(value) => {
                                    setFechaInicio(value);
                                    setData('fecha_inicio', formatDateForInput(value));

                                    if (value && fechaFinalizacion && fechaFinalizacion < value) {
                                        setFechaFinalizacion(undefined);
                                        setData('fecha_estimada_finalizacion', '');
                                    }
                                }}
                            />
                            {errors.fecha_inicio && <p className="mt-1 text-sm text-red-600">{errors.fecha_inicio}</p>}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Fecha estimada de finalización</label>
                            <DatePicker
                                value={fechaFinalizacion}
                                onChange={(value) => {
                                    setFechaFinalizacion(value);
                                    setData('fecha_estimada_finalizacion', formatDateForInput(value));
                                }}
                                minDate={fechaInicio}
                            />
                            {errors.fecha_estimada_finalizacion && (
                                <p className="mt-1 text-sm text-red-600">{errors.fecha_estimada_finalizacion}</p>
                            )}
                        </div>

                        <div className="border-t pt-5">
                            <p className="text-sm font-medium">Estado actual</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {estadosPlan.find((estado) => estado.id.toString() === data.estado_id)?.nombre ?? 'Sin estado'}
                            </p>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="pr-4">
                                <p className="text-sm font-medium">Publicación en la web</p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Permitir que el plan aparezca públicamente.
                                </p>
                            </div>

                            <Switch
                                checked={data.publicado}
                                onCheckedChange={(checked) => setData('publicado', checked)}
                                disabled={processing}
                            />
                        </div>

                        {errors.publicado && <p className="text-sm text-red-600">{errors.publicado}</p>}
                    </div>
                </div>
            </div>

            {/* Cuadro 3 */}
            <div className="rounded-xl border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">Imágenes</h2>
                        <p className="text-sm text-muted-foreground">
                            Agrega hasta 10 imágenes al plan.
                        </p>
                    </div>

                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                        {totalImagenes}/10
                    </span>
                </div>

                <div className="space-y-5">
                    {imagenesExistentes.length > 0 && (
                        <div>
                            <p className="mb-3 text-sm font-medium">Imágenes actuales</p>

                            <AttachmentGroup className="flex-wrap overflow-visible">
                                {imagenesExistentes.map((imagen) => (
                                    <Attachment key={imagen.id} orientation="horizontal">
                                        <AttachmentMedia variant="image">
                                            <img
                                                src={`/storage/${imagen.archivo}`}
                                                alt={imagen.alt_text || imagen.nombre_original}
                                            />
                                        </AttachmentMedia>

                                        <AttachmentContent>
                                            <AttachmentTitle>{imagen.nombre_original}</AttachmentTitle>
                                            <AttachmentDescription>Imagen actual</AttachmentDescription>
                                        </AttachmentContent>

                                        <AttachmentActions>
                                            <AttachmentAction
                                                type="button"
                                                onClick={() => handleRemoveExistingImage(imagen.id)}
                                                disabled={processing}
                                                title="Eliminar imagen"
                                            >
                                                <X />
                                            </AttachmentAction>
                                        </AttachmentActions>
                                    </Attachment>
                                ))}
                            </AttachmentGroup>
                        </div>
                    )}

                    {data.imagenes.length > 0 && (
                        <div>
                            <p className="mb-3 text-sm font-medium">Nuevas imágenes</p>

                            <AttachmentGroup className="flex-wrap overflow-visible">
                                {data.imagenes.map((file, index) => (
                                    <Attachment key={`${file.name}-${index}`} orientation="horizontal">
                                        <AttachmentMedia variant="image">
                                            <img src={previews[index]} alt={file.name} />
                                        </AttachmentMedia>

                                        <AttachmentContent>
                                            <AttachmentTitle>{file.name}</AttachmentTitle>
                                            <AttachmentDescription>Imagen nueva</AttachmentDescription>
                                        </AttachmentContent>

                                        <AttachmentActions>
                                            <AttachmentAction
                                                type="button"
                                                onClick={() => removeNewImage(index)}
                                                disabled={processing}
                                                title="Eliminar imagen"
                                            >
                                                <X />
                                            </AttachmentAction>
                                        </AttachmentActions>
                                    </Attachment>
                                ))}
                            </AttachmentGroup>
                        </div>
                    )}

                    {puedeAgregarImagenes && (
                        <div className="flex justify-center rounded-xl border-2 border-dashed p-8">
                            <div className="text-center">
                                <ImagePlus className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
                                <p className="mb-1 text-sm font-medium">Agregar imágenes</p>
                                <p className="mb-4 text-xs text-muted-foreground">
                                    JPG, PNG o WebP · máximo 5 MB por imagen
                                </p>

                                <input
                                    ref={inputRef}
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    multiple
                                    className="hidden"
                                    onChange={(e) => {
                                        handleFiles(e.target.files);
                                        e.target.value = '';
                                    }}
                                    disabled={processing}
                                />

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => inputRef.current?.click()}
                                    disabled={processing}
                                >
                                    <ImagePlus className="mr-2 h-4 w-4" />
                                    Seleccionar imágenes
                                </Button>
                            </div>
                        </div>
                    )}

                    {totalImagenes === 0 && (
                        <p className="text-center text-sm text-muted-foreground">
                            Todavía no has agregado imágenes.
                        </p>
                    )}

                    {errors.imagenes && <p className="text-sm text-red-600">{errors.imagenes}</p>}
                </div>
            </div>

            {/* Botones */}
            <div className="flex items-center justify-end gap-3">
                <Link href={route('planes.index')}>
                    <Button type="button" variant="outline" disabled={processing}>
                        Cancelar
                    </Button>
                </Link>

                <Button type="submit" disabled={processing}>
                    {processing ? 'Guardando...' : isEditing ? 'Actualizar plan' : 'Guardar plan'}
                </Button>
            </div>
        </form>
    );
}