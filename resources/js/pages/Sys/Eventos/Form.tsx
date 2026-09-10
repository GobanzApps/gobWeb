import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { ImagePlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '@/components/ui/date-picker';
import { Switch } from '@/components/ui/switch';
import { Attachment, AttachmentActions, AttachmentAction, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle } from '@/components/ui/attachment';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    descripcion_corta: string;
    descripcion: string;
    imagen_portada: string | null;
    fecha_inicio: string;
    fecha_fin: string | null;
    lugar: string | null;
    publicado: boolean;
    imagenes: Imagen[];
}

interface SelectorHoraProps {
    hora: string;
    minuto: string;
    periodo: string;
    onChange: (hora: string, minuto: string, periodo: string) => void;
    disabled?: boolean;
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

function obtenerHora12(value: string | null | undefined) {
    const hora = getTimeFromDateTime(value) || '12:00';
    let [h, m] = hora.split(':').map(Number);
    const periodo = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return { hora: String(h), minuto: String(m).padStart(2, '0'), periodo };
}

function convertirHora(hora: string, minuto: string, periodo: string): string {
    let h = Number(hora);
    if (periodo === 'AM' && h === 12) h = 0;
    if (periodo === 'PM' && h !== 12) h += 12;
    return `${String(h).padStart(2, '0')}:${minuto}`;
}

function SelectorHora({ hora, minuto, periodo, onChange, disabled }: SelectorHoraProps) {
    return (
        <div className="flex overflow-hidden rounded-md border bg-background">
            <Select value={hora} onValueChange={(value) => onChange(value, minuto, periodo)} disabled={disabled}>
                <SelectTrigger className="w-[58px] rounded-none border-0 border-r shadow-none focus:ring-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                    {Array.from({ length: 12 }, (_, i) => {
                        const value = String(i + 1);
                        return <SelectItem key={value} value={value}>{value}</SelectItem>;
                    })}
                </SelectContent>
            </Select>

            <span className="flex items-center bg-muted/30 px-1 text-muted-foreground">:</span>

            <Select value={minuto} onValueChange={(value) => onChange(hora, value, periodo)} disabled={disabled}>
                <SelectTrigger className="w-[62px] rounded-none border-0 shadow-none focus:ring-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                    {Array.from({ length: 60 }, (_, i) => {
                        const value = String(i).padStart(2, '0');
                        return <SelectItem key={value} value={value}>{value}</SelectItem>;
                    })}
                </SelectContent>
            </Select>

            <Select value={periodo} onValueChange={(value) => onChange(hora, minuto, value)} disabled={disabled}>
                <SelectTrigger className="w-[68px] rounded-none border-0 border-l shadow-none focus:ring-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="AM">a.m.</SelectItem>
                    <SelectItem value="PM">p.m.</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}

export default function Form({ evento }: Props) {
    const isEditing = !!evento;
    const inputRef = useRef<HTMLInputElement>(null);
    const portadaRef = useRef<HTMLInputElement>(null);
    const [portadaPreview, setPortadaPreview] = useState<string | null>(null);
    const horaInicioInicial = obtenerHora12(evento?.fecha_inicio);
    const horaFinInicial = obtenerHora12(evento?.fecha_fin);

    const [fechaInicio, setFechaInicio] = useState<Date | undefined>(parseDate(evento?.fecha_inicio));
    const [fechaFin, setFechaFin] = useState<Date | undefined>(parseDate(evento?.fecha_fin));
    const [horaInicio12, setHoraInicio12] = useState(horaInicioInicial.hora);
    const [minutoInicio, setMinutoInicio] = useState(horaInicioInicial.minuto);
    const [periodoInicio, setPeriodoInicio] = useState(horaInicioInicial.periodo);
    const [horaFin12, setHoraFin12] = useState(horaFinInicial.hora);
    const [minutoFin, setMinutoFin] = useState(horaFinInicial.minuto);
    const [periodoFin, setPeriodoFin] = useState(horaFinInicial.periodo);
    const [imagenesEliminadas, setImagenesEliminadas] = useState<number[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

    const { data, setData, post, transform, processing, errors } = useForm({
        titulo: evento?.titulo ?? '',
        descripcion_corta: evento?.descripcion_corta ?? '',
        descripcion: evento?.descripcion ?? '',
        imagen_portada: null as File | null,
        fecha_inicio: evento?.fecha_inicio ?? '',
        fecha_fin: evento?.fecha_fin ?? '',
        lugar: evento?.lugar ?? '',
        publicado: evento?.publicado ?? false,
        imagenes: [] as File[],
        imagenes_eliminar: [] as number[],
    });

    const imagenesExistentes = (evento?.imagenes ?? []).filter((imagen) => !imagenesEliminadas.includes(imagen.id));

    useEffect(() => {
        const urls = data.imagenes.map((file) => URL.createObjectURL(file));
        setPreviews(urls);
        return () => urls.forEach((url) => URL.revokeObjectURL(url));
    }, [data.imagenes]);

    useEffect(() => {
        if (!data.imagen_portada) {
            setPortadaPreview(null);
            return;
        }

        const url = URL.createObjectURL(data.imagen_portada);
        setPortadaPreview(url);

        return () => URL.revokeObjectURL(url);
    }, [data.imagen_portada]);

    const actualizarHoraInicio = (hora: string, minuto: string, periodo: string) => {
        setHoraInicio12(hora);
        setMinutoInicio(minuto);
        setPeriodoInicio(periodo);
        const fecha = formatDateForInput(fechaInicio);
        if (fecha) setData('fecha_inicio', `${fecha}T${convertirHora(hora, minuto, periodo)}`);
    };

    const actualizarHoraFin = (hora: string, minuto: string, periodo: string) => {
        setHoraFin12(hora);
        setMinutoFin(minuto);
        setPeriodoFin(periodo);
        const fecha = formatDateForInput(fechaFin);
        if (fecha) setData('fecha_fin', `${fecha}T${convertirHora(hora, minuto, periodo)}`);
    };

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

        const disponibles = 100 - imagenesExistentes.length - data.imagenes.length;
        const nuevas = Array.from(files).slice(0, disponibles);

        if (nuevas.length) setData('imagenes', [...data.imagenes, ...nuevas]);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEditing) {
            transform((formData) => ({ ...formData, _method: 'put' }));
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
    const puedeAgregarImagenes = totalImagenes < 100;

    return (
        <form onSubmit={submit} className="space-y-6">

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr]">
                <div className="rounded-xl border bg-card p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">Información del evento</h2>
                        <p className="text-sm text-muted-foreground">Datos principales del evento.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.4fr_1fr]">
                        <div className="space-y-2">
                            <label htmlFor="titulo" className="text-sm font-medium">Título <span className="text-red-500">*</span></label>
                            <Input id="titulo" value={data.titulo} onChange={(e) => setData('titulo', e.target.value)} placeholder="Ej. Inauguración de la nueva sede" disabled={processing} />
                            {errors.titulo && <p className="text-sm text-red-600">{errors.titulo}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lugar" className="text-sm font-medium">Lugar</label>
                            <Input id="lugar" value={data.lugar} onChange={(e) => setData('lugar', e.target.value)} placeholder="Ej. Plaza Bolívar de Barcelona" disabled={processing} />
                            {errors.lugar && <p className="text-sm text-red-600">{errors.lugar}</p>}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="descripcion_corta" className="text-sm font-medium">Descripción corta <span className="text-red-500">*</span></label>
                                <span className="text-xs text-muted-foreground">{data.descripcion_corta.length}/100</span>
                            </div>
                            <Input id="descripcion_corta" value={data.descripcion_corta} onChange={(e) => setData('descripcion_corta', e.target.value)} placeholder="Resumen breve del evento" maxLength={100} disabled={processing} />
                            {errors.descripcion_corta && <p className="text-sm text-red-600">{errors.descripcion_corta}</p>}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="descripcion" className="text-sm font-medium">Descripción <span className="text-red-500">*</span></label>
                            <Textarea id="descripcion" value={data.descripcion} onChange={(e) => setData('descripcion', e.target.value)} placeholder="Describe el evento, actividades, participantes, objetivos, etc." rows={9} disabled={processing} className="resize-none" />
                            {errors.descripcion && <p className="text-sm text-red-600">{errors.descripcion}</p>}
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">Detalles</h2>
                        <p className="text-sm text-muted-foreground">Fecha, horario y publicación.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-sm font-medium">Fecha y hora de inicio <span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-[1fr_auto] gap-2">
                                <DatePicker
                                    value={fechaInicio}
                                    onChange={(value) => {
                                        setFechaInicio(value);
                                        const fecha = formatDateForInput(value);
                                        setData('fecha_inicio', fecha ? `${fecha}T${convertirHora(horaInicio12, minutoInicio, periodoInicio)}` : '');
                                        if (value && fechaFin && fechaFin < value) {
                                            setFechaFin(undefined);
                                            setData('fecha_fin', '');
                                        }
                                    }}
                                    disabled={processing}
                                />
                                <SelectorHora
                                    hora={horaInicio12}
                                    minuto={minutoInicio}
                                    periodo={periodoInicio}
                                    onChange={actualizarHoraInicio}
                                    disabled={processing}
                                />
                            </div>
                            {errors.fecha_inicio && <p className="text-sm text-red-600">{errors.fecha_inicio}</p>}
                        </div>

                        <div className="space-y-3 border-t pt-5">
                            <label className="text-sm font-medium">Fecha y hora de finalización</label>
                            <div className="grid grid-cols-[1fr_auto] gap-2">
                                <DatePicker
                                    value={fechaFin}
                                    onChange={(value) => {
                                        setFechaFin(value);
                                        const fecha = formatDateForInput(value);
                                        setData('fecha_fin', fecha ? `${fecha}T${convertirHora(horaFin12, minutoFin, periodoFin)}` : '');
                                    }}
                                    minDate={fechaInicio}
                                    disabled={processing}
                                />
                                <SelectorHora
                                    hora={horaFin12}
                                    minuto={minutoFin}
                                    periodo={periodoFin}
                                    onChange={actualizarHoraFin}
                                    disabled={processing || !fechaFin}
                                />
                            </div>
                            {errors.fecha_fin && <p className="text-sm text-red-600">{errors.fecha_fin}</p>}
                        </div>

                        <div className="border-t pt-5">
                            <p className="text-sm font-medium">Estado de publicación</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {data.publicado ? 'El evento será visible públicamente.' : 'El evento permanecerá oculto en la web.'}
                            </p>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="pr-4">
                                <p className="text-sm font-medium">Publicación en la web</p>
                                <p className="mt-1 text-xs text-muted-foreground">Permitir que el evento aparezca públicamente.</p>
                            </div>
                            <Switch checked={data.publicado} onCheckedChange={(checked) => setData('publicado', checked)} disabled={processing} />
                        </div>

                        {errors.publicado && <p className="text-sm text-red-600">{errors.publicado}</p>}
                    </div>
                </div>
            </div>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* Imágenes */}
            <div className="rounded-xl border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">Imágenes del evento</h2>
                        <p className="text-sm text-muted-foreground">
                            Selecciona una imagen de portada y agrega hasta 100 imágenes adicionales.
                        </p>
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{totalImagenes}/100</span>
                </div>

                <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                    {/* Portada */}
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium">Imagen de portada</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Será la imagen principal del evento en la página web.
                            </p>
                        </div>

                        <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                            {portadaPreview ? (
                                <img src={portadaPreview} alt="Nueva portada" className="h-full w-full object-cover" />
                            ) : evento?.imagen_portada ? (
                                <img src={`/storage/${evento.imagen_portada}`} alt="Portada actual" className="h-full w-full object-cover" />
                            ) : (
                                <div className="flex h-full flex-col items-center justify-center text-muted-foreground">
                                    <ImagePlus className="mb-2 h-10 w-10" />
                                    <span className="text-sm">Sin imagen de portada</span>
                                </div>
                            )}
                        </div>

                        <input
                            ref={portadaRef}
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            className="hidden"
                            onChange={(e) => setData('imagen_portada', e.target.files?.[0] ?? null)}
                            disabled={processing}
                        />

                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => portadaRef.current?.click()}
                            disabled={processing}
                        >
                            <ImagePlus className="mr-2 h-4 w-4" />
                            {evento?.imagen_portada ? 'Cambiar portada' : 'Seleccionar portada'}
                        </Button>

                        <p className="text-xs text-muted-foreground">JPG, PNG o WebP · máximo 5 MB</p>
                        {errors.imagen_portada && <p className="text-sm text-red-600">{errors.imagen_portada}</p>}
                    </div>

                    {/* Galería */}
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium">Galería de imágenes</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Agrega imágenes adicionales del evento. Puedes seleccionar varias a la vez.
                            </p>
                        </div>

                        {(imagenesExistentes.length > 0 || data.imagenes.length > 0) && (
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                                {imagenesExistentes.map((imagen) => (
                                    <div key={imagen.id} className="group relative overflow-hidden rounded-xl border bg-muted">
                                        <div className="aspect-square">
                                            <img
                                                src={`/storage/${imagen.archivo}`}
                                                alt={imagen.alt_text || imagen.nombre_original}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-8">
                                            <p className="truncate text-xs font-medium text-white">{imagen.nombre_original}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveExistingImage(imagen.id)}
                                            disabled={processing}
                                            title="Eliminar imagen"
                                            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}

                                {data.imagenes.map((file, index) => (
                                    <div key={`${file.name}-${index}`} className="group relative overflow-hidden rounded-xl border bg-muted">
                                        <div className="aspect-square">
                                            <img src={previews[index]} alt={file.name} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-8">
                                            <p className="truncate text-xs font-medium text-white">{file.name}</p>
                                        </div>
                                        <span className="absolute left-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-[10px] font-medium text-white">
                                            Nueva
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => removeNewImage(index)}
                                            disabled={processing}
                                            title="Eliminar imagen"
                                            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
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

                                    <p className="mt-3 text-xs text-muted-foreground">
                                        {100 - totalImagenes} espacios disponibles
                                    </p>
                                </div>
                            </div>
                        )}

                        {totalImagenes === 0 && (
                            <p className="text-center text-sm text-muted-foreground">
                                Todavía no has agregado imágenes a la galería.
                            </p>
                        )}

                        {!puedeAgregarImagenes && (
                            <p className="text-center text-sm font-medium text-muted-foreground">
                                Has alcanzado el máximo de 100 imágenes.
                            </p>
                        )}

                        {errors.imagenes && <p className="text-sm text-red-600">{errors.imagenes}</p>}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end gap-3">
                <Link href={route('eventos.index')}>
                    <Button type="button" variant="outline" disabled={processing}>
                        Cancelar
                    </Button>
                </Link>

                <Button type="submit" disabled={processing}>
                    {processing ? 'Guardando...' : isEditing ? 'Actualizar evento' : 'Guardar evento'}
                </Button>
            </div>
        </form>
    );
}
