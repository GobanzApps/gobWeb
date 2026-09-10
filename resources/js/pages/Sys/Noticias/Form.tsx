import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { ImagePlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Attachment, AttachmentActions, AttachmentAction, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle } from '@/components/ui/attachment';
import { notify } from '@/lib/notify';

interface Imagen {
    id: number;
    archivo: string;
    nombre_original: string;
    alt_text: string | null;
    orden: number;
}

interface Noticia {
    id: number;
    titulo: string;
    descripcion_corta: string;
    descripcion: string;
    imagen_portada: string | null;
    publicado: boolean;
    imagenes: Imagen[];
}

interface Props {
    noticia?: Noticia;
}

export default function Form({ noticia }: Props) {
    const isEditing = !!noticia;
    const inputRef = useRef<HTMLInputElement>(null);
    const portadaRef = useRef<HTMLInputElement>(null);
    const [imagenesEliminadas, setImagenesEliminadas] = useState<number[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [portadaPreview, setPortadaPreview] = useState<string | null>(null);

    const { data, setData, post, transform, processing, errors } = useForm({
        titulo: noticia?.titulo ?? '',
        descripcion_corta: noticia?.descripcion_corta ?? '',
        descripcion: noticia?.descripcion ?? '',
        imagen_portada: null as File | null,
        publicado: noticia?.publicado ?? false,
        imagenes: [] as File[],
        imagenes_eliminar: [] as number[],
    });

    const imagenesExistentes = (noticia?.imagenes ?? []).filter((imagen) => !imagenesEliminadas.includes(imagen.id));
    const totalImagenes = imagenesExistentes.length + data.imagenes.length;
    const puedeAgregarImagenes = totalImagenes < 10;

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

    const handlePortada = (file: File | undefined) => {
        if (!file) return;
        setData('imagen_portada', file);
    };

    const removePortada = () => {
        setData('imagen_portada', null);
        if (portadaRef.current) portadaRef.current.value = '';
    };

    const handleRemoveExistingImage = (id: number) => {
        if (imagenesEliminadas.includes(id)) return;
        const nuevas = [...imagenesEliminadas, id];
        setImagenesEliminadas(nuevas);
        setData('imagenes_eliminar', nuevas);
    };

    const removeNewImage = (index: number) => {
        setData('imagenes', data.imagenes.filter((_, i) => i !== index));
    };

    const handleFiles = (files: FileList | null) => {
        if (!files) return;
        const disponibles = 10 - totalImagenes;
        const nuevas = Array.from(files).slice(0, disponibles);
        if (nuevas.length) setData('imagenes', [...data.imagenes, ...nuevas]);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEditing) {
            transform((formData) => ({ ...formData, _method: 'put' }));
            post(route('noticias.update', noticia.id), {
                forceFormData: true,
                onSuccess: () => notify.success('Noticia actualizada correctamente.'),
                onError: () => notify.error('No se pudo actualizar la noticia.'),
            });
            return;
        }

        post(route('noticias.store'), {
            forceFormData: true,
            onSuccess: () => notify.success('Noticia creada correctamente.'),
            onError: () => notify.error('No se pudo crear la noticia.'),
        });
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div className="rounded-xl border bg-card p-6">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">Información de la noticia</h2>
                    <p className="text-sm text-muted-foreground">Datos principales y configuración de publicación.</p>
                </div>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="titulo" className="text-sm font-medium">
                            Título <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="titulo"
                            value={data.titulo}
                            onChange={(e) => setData('titulo', e.target.value)}
                            placeholder="Ej. Gobernación inaugura nueva obra pública"
                            disabled={processing}
                        />
                        {errors.titulo && <p className="text-sm text-red-600">{errors.titulo}</p>}
                    </div>

                    <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="descripcion_corta" className="text-sm font-medium">
                                    Descripción corta <span className="text-red-500">*</span>
                                </label>
                                <span className={`text-xs ${data.descripcion_corta.length >= 100 ? 'text-red-600' : 'text-muted-foreground'}`}>
                                    {data.descripcion_corta.length}/100
                                </span>
                            </div>
                            <Textarea
                                id="descripcion_corta"
                                value={data.descripcion_corta}
                                onChange={(e) => setData('descripcion_corta', e.target.value.slice(0, 100))}
                                placeholder="Breve resumen de la noticia..."
                                rows={3}
                                disabled={processing}
                                className="resize-none"
                            />
                            {errors.descripcion_corta && <p className="text-sm text-red-600">{errors.descripcion_corta}</p>}
                        </div>

                        <div className="rounded-lg border bg-muted/30 p-4">
                            <div className="mb-3">
                                <p className="text-sm font-medium">Publicación</p>
                                <p className="text-xs text-muted-foreground">Visibilidad de la noticia en el sitio web.</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium">{data.publicado ? 'Publicado' : 'No publicado'}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {data.publicado ? 'Visible públicamente' : 'Solo disponible en administración'}
                                    </p>
                                </div>
                                <Switch
                                    checked={data.publicado}
                                    onCheckedChange={(checked) => setData('publicado', checked)}
                                    disabled={processing}
                                />
                            </div>

                            {errors.publicado && <p className="mt-2 text-sm text-red-600">{errors.publicado}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="descripcion" className="text-sm font-medium">
                            Contenido <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                            id="descripcion"
                            value={data.descripcion}
                            onChange={(e) => setData('descripcion', e.target.value)}
                            placeholder="Escribe el contenido completo de la noticia..."
                            rows={9}
                            disabled={processing}
                            className="resize-y"
                        />
                        {errors.descripcion && <p className="text-sm text-red-600">{errors.descripcion}</p>}
                    </div>
                </div>
            </div>

            {/* Imagenes */}
            <div className="rounded-xl border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">Imágenes de la noticia</h2>
                        <p className="text-sm text-muted-foreground">
                            Selecciona una imagen de portada y agrega hasta 10 imágenes adicionales.
                        </p>
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{totalImagenes}/10</span>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Portada */}
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium">Imagen de portada</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Será la imagen principal de la noticia en la página web.
                            </p>
                        </div>

                        <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                            {portadaPreview ? (
                                <img src={portadaPreview} alt="Nueva portada" className="h-full w-full object-cover" />
                            ) : noticia?.imagen_portada ? (
                                <img src={`/storage/${noticia.imagen_portada}`} alt="Portada actual" className="h-full w-full object-cover" />
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
                            {noticia?.imagen_portada ? 'Cambiar portada' : 'Seleccionar portada'}
                        </Button>

                        <p className="text-xs text-muted-foreground">JPG, PNG o WebP · máximo 5 MB</p>
                        {errors.imagen_portada && <p className="text-sm text-red-600">{errors.imagen_portada}</p>}
                    </div>

                    {/* Galería */}
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium">Galería de imágenes</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Agrega imágenes adicionales para mostrar en la noticia.
                            </p>
                        </div>

                        {imagenesExistentes.length > 0 && (
                            <AttachmentGroup className="flex-wrap overflow-visible">
                                {imagenesExistentes.map((imagen) => (
                                    <Attachment key={imagen.id} orientation="horizontal">
                                        <AttachmentMedia variant="image">
                                            <img src={`/storage/${imagen.archivo}`} alt={imagen.alt_text || imagen.nombre_original} />
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
                        )}

                        {data.imagenes.length > 0 && (
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
                                Todavía no has agregado imágenes a la galería.
                            </p>
                        )}

                        {errors.imagenes && <p className="text-sm text-red-600">{errors.imagenes}</p>}
                    </div>
                </div>
            </div>

            {/* BOTONES */}
            <div className="flex items-center justify-end gap-3">
                <Link href={route('noticias.index')}>
                    <Button type="button" variant="outline" disabled={processing}>Cancelar</Button>
                </Link>
                <Button type="submit" disabled={processing}>
                    {processing ? 'Guardando...' : isEditing ? 'Actualizar noticia' : 'Guardar noticia'}
                </Button>
            </div>
        </form>
    );
}
