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

interface Imagen {
    id: number;
    archivo: string;
    nombre_original: string;
    alt_text: string | null;
    orden: number;
}

interface Evento {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string | null;
    lugar: string | null;
    publicado: boolean;
    imagenes: Imagen[];
}

interface Props {
    evento?: Evento;
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

function getTimeFromDateTime(value: string | null | undefined): string {
    if (!value) return '';

    const match = value.match(/(?:T|\s)(\d{2}:\d{2})/);

    if (match) return match[1];

    const date = new Date(value);

    if (isNaN(date.getTime())) return '';

    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

export default function Form({ evento }: Props) {
    const isEditing = !!evento;
    const inputRef = useRef<HTMLInputElement>(null);

    const [fechaInicio, setFechaInicio] = useState<Date | undefined>(
        parseDate(evento?.fecha_inicio)
    );

    const [fechaFin, setFechaFin] = useState<Date | undefined>(
        parseDate(evento?.fecha_fin)
    );

    const [horaInicio, setHoraInicio] = useState(
        getTimeFromDateTime(evento?.fecha_inicio)
    );

    const [horaFin, setHoraFin] = useState(
        getTimeFromDateTime(evento?.fecha_fin)
    );

    const [imagenesEliminadas, setImagenesEliminadas] = useState<number[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

    const { data, setData, post, transform, processing, errors } = useForm({
        titulo: evento?.titulo ?? '',
        descripcion: evento?.descripcion ?? '',
        fecha_inicio: evento?.fecha_inicio ?? '',
        fecha_fin: evento?.fecha_fin ?? '',
        lugar: evento?.lugar ?? '',
        publicado: evento?.publicado ?? false,
        imagenes: [] as File[],
        imagenes_eliminar: [] as number[],
    });

    const imagenesExistentes = (evento?.imagenes ?? []).filter(
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

        if (nuevas.length) {
            setData('imagenes', [...data.imagenes, ...nuevas]);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEditing) {
            transform((formData) => ({
                ...formData,
                _method: 'put',
            }));

            post(route('eventos.update', evento.id), {
                forceFormData: true,
                onSuccess: () => notify.success('Evento actualizado correctamente.'),
                onError: () => notify.error('No se pudo actualizar el evento.'),
            });

            return;
        }

        post(route('eventos.store'), {
            forceFormData: true,
            onSuccess: () => notify.success('Evento creado correctamente.'),
            onError: () => notify.error('No se pudo crear el evento.'),
        });
    };

    const totalImagenes = imagenesExistentes.length + data.imagenes.length;
    const puedeAgregarImagenes = totalImagenes < 10;

    return (
        <form onSubmit={submit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-xl border bg-card p-6 lg:col-span-2">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">Información del evento</h2>
                        <p className="text-sm text-muted-foreground">
                            Datos principales del evento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="titulo" className="text-sm font-medium">
                                Título <span className="text-red-500">*</span>
                            </label>

                            <Input
                                id="titulo"
                                value={data.titulo}
                                onChange={(e) => setData('titulo', e.target.value)}
                                placeholder="Ej. Inauguración de la nueva sede"
                                disabled={processing}
                            />

                            {errors.titulo && (
                                <p className="text-sm text-red-600">{errors.titulo}</p>
                            )}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="lugar" className="text-sm font-medium">
                                Lugar
                            </label>

                            <Input
                                id="lugar"
                                value={data.lugar}
                                onChange={(e) => setData('lugar', e.target.value)}
                                placeholder="Ej. Plaza Bolívar de Barcelona"
                                disabled={processing}
                            />

                            {errors.lugar && (
                                <p className="text-sm text-red-600">{errors.lugar}</p>
                            )}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="descripcion" className="text-sm font-medium">
                                Descripción <span className="text-red-500">*</span>
                            </label>

                            <Textarea
                                id="descripcion"
                                value={data.descripcion}
                                onChange={(e) => setData('descripcion', e.target.value)}
                                placeholder="Describe el evento, actividades, participantes, objetivos, etc."
                                rows={9}
                                disabled={processing}
                                className="resize-none"
                            />

                            {errors.descripcion && (
                                <p className="text-sm text-red-600">{errors.descripcion}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">Detalles</h2>
                        <p className="text-sm text-muted-foreground">
                            Fechas, horario y publicación.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Fecha de inicio <span className="text-red-500">*</span>
                            </label>

                            <div className="space-y-2">
                                <DatePicker
                                    value={fechaInicio}
                                    onChange={(value) => {
                                        setFechaInicio(value);

                                        const fecha = formatDateForInput(value);

                                        setData(
                                            'fecha_inicio',
                                            fecha ? `${fecha}T${horaInicio || '00:00'}` : ''
                                        );

                                        if (value && fechaFin && fechaFin < value) {
                                            setFechaFin(undefined);
                                            setHoraFin('');
                                            setData('fecha_fin', '');
                                        }
                                    }}
                                />

                                <Input
                                    type="time"
                                    value={horaInicio}
                                    onChange={(e) => {
                                        const hora = e.target.value;

                                        setHoraInicio(hora);

                                        const fecha = formatDateForInput(fechaInicio);

                                        setData(
                                            'fecha_inicio',
                                            fecha ? `${fecha}T${hora}` : ''
                                        );
                                    }}
                                    disabled={processing}
                                />
                            </div>

                            {errors.fecha_inicio && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.fecha_inicio}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Fecha de finalización
                            </label>

                            <div className="space-y-2">
                                <DatePicker
                                    value={fechaFin}
                                    onChange={(value) => {
                                        setFechaFin(value);

                                        const fecha = formatDateForInput(value);

                                        setData(
                                            'fecha_fin',
                                            fecha ? `${fecha}T${horaFin || '00:00'}` : ''
                                        );
                                    }}
                                    minDate={fechaInicio}
                                />

                                <Input
                                    type="time"
                                    value={horaFin}
                                    onChange={(e) => {
                                        const hora = e.target.value;

                                        setHoraFin(hora);

                                        const fecha = formatDateForInput(fechaFin);

                                        setData(
                                            'fecha_fin',
                                            fecha ? `${fecha}T${hora}` : ''
                                        );
                                    }}
                                    disabled={processing || !fechaFin}
                                />
                            </div>

                            {errors.fecha_fin && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.fecha_fin}
                                </p>
                            )}
                        </div>

                        <div className="border-t pt-5">
                            <p className="text-sm font-medium">Estado de publicación</p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                {data.publicado
                                    ? 'El evento será visible públicamente.'
                                    : 'El evento permanecerá oculto en la web.'}
                            </p>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="pr-4">
                                <p className="text-sm font-medium">Publicación en la web</p>

                                <p className="mt-1 text-xs text-muted-foreground">
                                    Permitir que el evento aparezca públicamente.
                                </p>
                            </div>

                            <Switch
                                checked={data.publicado}
                                onCheckedChange={(checked) => setData('publicado', checked)}
                                disabled={processing}
                            />
                        </div>

                        {errors.publicado && (
                            <p className="text-sm text-red-600">{errors.publicado}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">Imágenes</h2>

                        <p className="text-sm text-muted-foreground">
                            Agrega hasta 10 imágenes al evento.
                        </p>
                    </div>

                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                        {totalImagenes}/10
                    </span>
                </div>

                <div className="space-y-5">
                    {imagenesExistentes.length > 0 && (
                        <div>
                            <p className="mb-3 text-sm font-medium">
                                Imágenes actuales
                            </p>

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
                                            <AttachmentTitle>
                                                {imagen.nombre_original}
                                            </AttachmentTitle>

                                            <AttachmentDescription>
                                                Imagen actual
                                            </AttachmentDescription>
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
                            <p className="mb-3 text-sm font-medium">
                                Nuevas imágenes
                            </p>

                            <AttachmentGroup className="flex-wrap overflow-visible">
                                {data.imagenes.map((file, index) => (
                                    <Attachment
                                        key={`${file.name}-${index}`}
                                        orientation="horizontal"
                                    >
                                        <AttachmentMedia variant="image">
                                            <img
                                                src={previews[index]}
                                                alt={file.name}
                                            />
                                        </AttachmentMedia>

                                        <AttachmentContent>
                                            <AttachmentTitle>
                                                {file.name}
                                            </AttachmentTitle>

                                            <AttachmentDescription>
                                                Imagen nueva
                                            </AttachmentDescription>
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

                                <p className="mb-1 text-sm font-medium">
                                    Agregar imágenes
                                </p>

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

                    {errors.imagenes && (
                        <p className="text-sm text-red-600">
                            {errors.imagenes}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-end gap-3">
                <Link href={route('eventos.index')}>
                    <Button
                        type="button"
                        variant="outline"
                        disabled={processing}
                    >
                        Cancelar
                    </Button>
                </Link>

                <Button type="submit" disabled={processing}>
                    {processing
                        ? 'Guardando...'
                        : isEditing
                            ? 'Actualizar evento'
                            : 'Guardar evento'}
                </Button>
            </div>
        </form>
    );
}
