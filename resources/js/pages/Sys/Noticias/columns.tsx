import { ColumnDef } from '@tanstack/react-table';
import {
    Eye,
    Pencil,
    Trash2,
    Globe,
    GlobeLock,
    Image as ImageIcon,
} from 'lucide-react';
import { router } from '@inertiajs/react';

import { Can } from '@/components/can';
import { notify } from '@/lib/notify';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from 'node_modules/@headlessui/react/dist/components/button/button';

export type Noticia = {
    id: number;
    titulo: string;
    descripcion: string;
    publicado: boolean;
    imagenes_count: number;
};

export const columns: ColumnDef<Noticia>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'titulo',
        header: 'Título',
        cell: ({ row }) => (
            <div className="max-w-[280px] truncate">
                {row.original.titulo}
            </div>
        ),
    },
    {
        accessorKey: 'descripcion',
        header: 'Descripción',
        cell: ({ row }) => (
            <div className="max-w-[350px] truncate">
                {row.original.descripcion || '—'}
            </div>
        ),
    },
    {
        accessorKey: 'publicado',
        header: () => <div className="text-right">Publicado</div>,
        cell: ({ row }) => {
            const publicado = row.original.publicado;

            return (
                <div className="flex justify-end">
                    <span
                        className={`rounded px-2 py-1 text-xs ${
                            publicado
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                        {publicado ? 'Publicado' : 'No publicado'}
                    </span>
                </div>
            );
        },
    },
    {
        id: 'imagenes',
        header: () => <div className="text-center">Imágenes</div>,
        cell: ({ row }) => (
            <div className="flex items-center justify-center gap-1">
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
                <span>{row.original.imagenes_count}</span>
            </div>
        ),
    },
    {
        id: 'actions',
        header: () => <div className="text-right">Acciones</div>,
        cell: ({ row }) => {
            const noticia = row.original;

            const togglePublication = () => {
                router.patch(
                    route('noticias.toggle-status', noticia.id),
                    {},
                    {
                        preserveScroll: true,
                        onSuccess: () => {
                            notify.success(
                                noticia.publicado
                                    ? 'Noticia despublicada correctamente.'
                                    : 'Noticia publicada correctamente.'
                            );
                        },
                        onError: () => {
                            notify.error(
                                'No se pudo cambiar el estado de publicación de la noticia.'
                            );
                        },
                    }
                );
            };

            const deleteNoticia = () => {
                router.delete(
                    route('noticias.destroy', noticia.id),
                    {
                        preserveScroll: true,
                        onSuccess: () => {
                            notify.success(
                                'Noticia eliminada correctamente.'
                            );
                        },
                        onError: () => {
                            notify.error(
                                'No se pudo eliminar la noticia.'
                            );
                        },
                    }
                );
            };

            return (
                <div className="flex items-center justify-end gap-2">
                    {/* Ver */}
                    <a
                        href={route('noticias.show', noticia.id)}
                        title="Ver"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                        <Eye className="h-4 w-4" />
                    </a>

                    {/* Editar */}
                    <Can permission="noticias.edit">
                        <a
                            href={route('noticias.edit', noticia.id)}
                            title="Editar"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-yellow-600 transition-colors hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
                        >
                            <Pencil className="h-4 w-4" />
                        </a>
                    </Can>

                    {/* Publicar / Despublicar */}
                    <Can permission="noticias.toggle-status">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    title={
                                        noticia.publicado
                                            ? 'Despublicar noticia'
                                            : 'Publicar noticia'
                                    }
                                    className={`group inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background transition-colors ${
                                        noticia.publicado
                                            ? 'text-green-600 hover:border-red-300 hover:bg-red-50 hover:text-red-600'
                                            : 'text-red-600 hover:border-green-300 hover:bg-green-50 hover:text-green-600'
                                    }`}
                                >
                                    {noticia.publicado ? (
                                        <>
                                            <Globe className="h-4 w-4 group-hover:hidden" />
                                            <GlobeLock className="hidden h-4 w-4 group-hover:block" />
                                        </>
                                    ) : (
                                        <>
                                            <GlobeLock className="h-4 w-4 group-hover:hidden" />
                                            <Globe className="hidden h-4 w-4 group-hover:block" />
                                        </>
                                    )}
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        {noticia.publicado
                                            ? '¿Despublicar noticia?'
                                            : '¿Publicar noticia?'}
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        {noticia.publicado
                                            ? 'Al despublicar esta noticia dejará de estar disponible públicamente en el sitio web.'
                                            : 'Al publicar esta noticia estará disponible públicamente en el sitio web de la Gobernación.'}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={togglePublication}
                                    >
                                        {noticia.publicado
                                            ? 'Despublicar noticia'
                                            : 'Publicar noticia'}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </Can>
    
                    {/* Eliminar */}
                    <Can permission="noticias.delete">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    title="Eliminar noticia"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-red-600 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        ¿Eliminar noticia?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Esta acción eliminará permanentemente
                                        la noticia "{noticia.titulo}" y sus
                                        imágenes asociadas. Esta acción no se
                                        puede deshacer.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteNoticia}
                                    >
                                        Eliminar noticia
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </Can>
                </div>
            );
        },
    },
];