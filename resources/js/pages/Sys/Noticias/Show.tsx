import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Can } from '@/components/can';
import {
    ArrowLeft,
    Pencil,
    CalendarDays,
    User,
    Image as ImageIcon,
    Globe,
    GlobeLock,
} from 'lucide-react';

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
    created_at: string;
    updated_at: string;
    creador?: {
        id: number;
        name: string;
    };
    editor?: {
        id: number;
        name: string;
    };
    imagenes: Imagen[];
}

interface Props {
    noticia: Noticia;
}

export default function Show({ noticia }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Noticias', href: route('noticias.index') },
        { title: noticia.titulo, href: route('noticias.show', noticia.id) },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={noticia.titulo} />

            <div className="space-y-6 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">{noticia.titulo}</h1>
                        <p className="text-sm text-muted-foreground">
                            Detalles de la noticia
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Link href={route('noticias.index')}>
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Volver
                            </Button>
                        </Link>

                        <Can permission="noticias.edit">
                            <Link href={route('noticias.edit', noticia.id)}>
                                <Button>
                                    <Pencil className="mr-2 h-4 w-4" />
                                    Editar
                                </Button>
                            </Link>
                        </Can>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-xl border bg-card p-6 lg:col-span-2">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="rounded-lg bg-muted p-2">
                                <Globe className="h-5 w-5" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Información de la noticia</h2>
                                <p className="text-sm text-muted-foreground">
                                    Contenido publicado en el sitio web.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="mb-2 text-sm font-medium text-muted-foreground">
                                    Título
                                </p>
                                <p className="text-lg font-medium">{noticia.titulo}</p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm font-medium text-muted-foreground">
                                    Descripción
                                </p>
                                <div className="whitespace-pre-wrap text-sm leading-6">
                                    {noticia.descripcion}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                        <h2 className="mb-4 font-semibold">Estado</h2>

                        <div className="flex items-center gap-3">
                            {noticia.publicado ? (
                                <>
                                    <div className="rounded-lg bg-muted p-2">
                                        <Globe className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Publicada</p>
                                        <p className="text-sm text-muted-foreground">
                                            Visible en el sitio web.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="rounded-lg bg-muted p-2">
                                        <GlobeLock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">No publicada</p>
                                        <p className="text-sm text-muted-foreground">
                                            No visible en el sitio web.
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="mt-6 space-y-4 border-t pt-4">
                            <div className="flex items-center gap-3">
                                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Creada
                                    </p>
                                    <p className="text-sm">
                                        {new Date(noticia.created_at).toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {noticia.creador && (
                                <div className="flex items-center gap-3">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Creada por
                                        </p>
                                        <p className="text-sm">
                                            {noticia.creador.name}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {noticia.editor && (
                                <div className="flex items-center gap-3">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Última modificación
                                        </p>
                                        <p className="text-sm">
                                            {new Date(noticia.updated_at).toLocaleString()}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            por {noticia.editor.name}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-6">
                    <div className="mb-6 flex items-center gap-2">
                        <div className="rounded-lg bg-muted p-2">
                            <ImageIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <h2 className="font-semibold">Imágenes</h2>
                            <p className="text-sm text-muted-foreground">
                                {noticia.imagenes.length} imagen
                                {noticia.imagenes.length !== 1 ? 'es' : ''} asociada
                                {noticia.imagenes.length !== 1 ? 's' : ''} a esta noticia.
                            </p>
                        </div>
                    </div>

                    {noticia.imagenes.length > 0 ? (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {noticia.imagenes.map((imagen) => (
                                <div
                                    key={imagen.id}
                                    className="overflow-hidden rounded-lg border"
                                >
                                    <img
                                        src={`/storage/${imagen.archivo}`}
                                        alt={imagen.alt_text ?? noticia.titulo}
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="p-3">
                                        <p className="truncate text-sm font-medium">
                                            {imagen.nombre_original}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
                            <ImageIcon className="mb-3 h-8 w-8 text-muted-foreground" />
                            <p className="text-sm font-medium">
                                No hay imágenes
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Esta noticia no tiene imágenes asociadas.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
