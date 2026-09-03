import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { ImagePlus, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

interface Noticia {
    id: number;
    titulo: string;
    descripcion: string;
    publicado: boolean;
    imagenes: Imagen[];
}

interface Props {
    noticia?: Noticia;
}

export default function Form({ noticia }: Props) {
    const isEditing = !!noticia;
    const inputRef = useRef<HTMLInputElement>(null);

    const [imagenesEliminadas, setImagenesEliminadas] = useState<number[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

    const { data, setData, post, transform, processing, errors } = useForm({
        titulo: noticia?.titulo ?? '',
        descripcion: noticia?.descripcion ?? '',
        publicado: noticia?.publicado ?? false,
        imagenes: [] as File[],
        imagenes_eliminar: [] as number[],
    });

    const imagenesExistentes = (noticia?.imagenes ?? []).filter(
        (imagen) => !imagenesEliminadas.includes(imagen.id)
    );

    useEffect(() => {
        const urls = data.imagenes.map((file) =>
            URL.createObjectURL(file)
        );

        setPreviews(urls);

        return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [data.imagenes]);

    const handleRemoveExistingImage = (id: number) => {
        if (imagenesEliminadas.includes(id)) return;

        const nuevas = [...imagenesEliminadas, id];
        setImagenesEliminadas(nuevas);
        setData('imagenes_eliminar', nuevas);
    };

    const removeNewImage = (index: number) => {
        setData(
            'imagenes',
            data.imagenes.filter((_, i) => i !== index)
        );
    };

    const handleFiles = (files: FileList | null) => {
        if (!files) return;

        const disponibles =
            10 -
            imagenesExistentes.length -
            data.imagenes.length;

        const nuevas = Array.from(files).slice(0, disponibles);

        if (nuevas.length) {
            setData('imagenes', [
                ...data.imagenes,
                ...nuevas,
            ]);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEditing) {
            transform((formData) => ({
                ...formData,
                _method: 'put',
            }));

            post(route('noticias.update', noticia.id), {
                forceFormData: true,
                onSuccess: () =>
                    notify.success(
                        'Noticia actualizada correctamente.'
                    ),
                onError: () =>
                    notify.error(
                        'No se pudo actualizar la noticia.'
                    ),
            });

            return;
        }

        post(route('noticias.store'), {
            forceFormData: true,
            onSuccess: () =>
                notify.success(
                    'Noticia creada correctamente.'
                ),
            onError: () =>
                notify.error(
                    'No se pudo crear la noticia.'
                ),
        });
    };

    const totalImagenes =
        imagenesExistentes.length +
        data.imagenes.length;

    const puedeAgregarImagenes = totalImagenes < 10;

    return (
        <form
            onSubmit={submit}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                {/* Cuadro 1 */}
                <div className="rounded-xl border bg-card p-6 lg:col-span-2">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">
                            Información de la noticia
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            Datos principales de la noticia.
                        </p>
                    </div>

                    <div className="space-y-5">

                        {/* Título */}
                        <div className="space-y-2">
                            <label
                                htmlFor="titulo"
                                className="text-sm font-medium"
                            >
                                Título{' '}
                                <span className="text-red-500">*</span>
                            </label>

                            <Input
                                id="titulo"
                                value={data.titulo}
                                onChange={(e) =>
                                    setData(
                                        'titulo',
                                        e.target.value
                                    )
                                }
                                placeholder="Ej. Gobernación inaugura nueva obra pública"
                                disabled={processing}
                            />

                            {errors.titulo && (
                                <p className="text-sm text-red-600">
                                    {errors.titulo}
                                </p>
                            )}
                        </div>

                        {/* Descripción */}
                        <div className="space-y-2">
                            <label
                                htmlFor="descripcion"
                                className="text-sm font-medium"
                            >
                                Descripción{' '}
                                <span className="text-red-500">*</span>
                            </label>

                            <Textarea
                                id="descripcion"
                                value={data.descripcion}
                                onChange={(e) =>
                                    setData(
                                        'descripcion',
                                        e.target.value
                                    )
                                }
                                placeholder="Escribe el contenido de la noticia..."
                                rows={12}
                                disabled={processing}
                                className="resize-none"
                            />

                            {errors.descripcion && (
                                <p className="text-sm text-red-600">
                                    {errors.descripcion}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Cuadro 2 */}
                <div className="rounded-xl border bg-card p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">
                            Publicación
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            Configura la visibilidad de la noticia.
                        </p>
                    </div>

                    <div className="space-y-5">

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="pr-4">
                                <p className="text-sm font-medium">
                                    Publicación en la web
                                </p>

                                <p className="mt-1 text-xs text-muted-foreground">
                                    Permitir que la noticia aparezca
                                    públicamente en el sitio web.
                                </p>
                            </div>

                            <Switch
                                checked={data.publicado}
                                onCheckedChange={(checked) =>
                                    setData(
                                        'publicado',
                                        checked
                                    )
                                }
                                disabled={processing}
                            />
                        </div>

                        <div className="border-t pt-5">
                            <p className="text-sm font-medium">
                                Estado actual
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                {data.publicado
                                    ? 'Publicado'
                                    : 'No publicado'}
                            </p>
                        </div>

                        {errors.publicado && (
                            <p className="text-sm text-red-600">
                                {errors.publicado}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Cuadro 3 */}
            <div className="rounded-xl border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Imágenes
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            Agrega hasta 10 imágenes a la noticia.
                        </p>
                    </div>

                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                        {totalImagenes}/10
                    </span>
                </div>

                <div className="space-y-5">

                    {/* Imágenes existentes */}
                    {imagenesExistentes.length > 0 && (
                        <div>
                            <p className="mb-3 text-sm font-medium">
                                Imágenes actuales
                            </p>

                            <AttachmentGroup className="flex-wrap overflow-visible">
                                {imagenesExistentes.map((imagen) => (
                                    <Attachment
                                        key={imagen.id}
                                        orientation="horizontal"
                                    >
                                        <AttachmentMedia variant="image">
                                            <img
                                                src={`/storage/${imagen.archivo}`}
                                                alt={
                                                    imagen.alt_text ||
                                                    imagen.nombre_original
                                                }
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
                                            >
                                                <X className="h-4 w-4" />
                                            </AttachmentAction>
                                        </AttachmentActions>
                                    </Attachment>
                                ))}
                            </AttachmentGroup>
                        </div>
                    )}

                    {/* Imágenes nuevas */}
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
                                                onClick={() =>
                                                    removeNewImage(index)
                                                }
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

                    {/* Agregar imágenes */}
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
                                        handleFiles(
                                            e.target.files
                                        );

                                        e.target.value = '';
                                    }}
                                    disabled={processing}
                                />

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() =>
                                        inputRef.current?.click()
                                    }
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

            {/* Botones */}
            <div className="flex items-center justify-end gap-3">
                <Link href={route('noticias.index')}>
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
                            ? 'Actualizar noticia'
                            : 'Guardar noticia'}
                </Button>
            </div>
        </form>
    );
}
