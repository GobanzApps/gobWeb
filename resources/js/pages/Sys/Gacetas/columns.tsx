import { ColumnDef } from '@tanstack/react-table';
import { Eye, Pencil, Trash2, FileText, Globe, GlobeLock } from 'lucide-react';
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

export type Gaceta = {
    id: number;
    titulo: string;
    descripcion: string | null;
    archivo: string;
    publicado: boolean;
};

export const columns: ColumnDef<Gaceta>[] = [
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
        id: 'archivo',
        header: () => <div className="text-center">Archivo</div>,
        cell: ({ row }) => (
            <div className="flex justify-center">
                <a
                    href={`/storage/${row.original.archivo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver PDF"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-red-600 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                >
                    <FileText className="h-4 w-4" />
                </a>
            </div>
        ),
    },

    {
        id: 'actions',
        header: () => <div className="text-right">Acciones</div>,
        cell: ({ row }) => {
            const gaceta = row.original;

            const deleteGaceta = () => {
                router.delete(
                    route('gacetas.destroy', gaceta.id),
                    {
                        preserveScroll: true,
                        onSuccess: () => {notify.success('Gaceta eliminada correctamente.');},
                        onError: () => {notify.error('No se pudo eliminar la gaceta.');},
                    }
                );
            };

            const togglePublication = () => {
                router.patch(
                    route('gacetas.toggle-status', gaceta.id),
                    {},
                    {
                        preserveScroll: true,
                        onSuccess: () => {notify.success(gaceta.publicado ? 'Gaceta despublicada correctamente.' : 'Gaceta publicada correctamente.');},
                        onError: () => {notify.error('No se pudo cambiar el estado de publicación de la gaceta.');},
                    }
                );
            };

            return (
                <div className="flex items-center justify-end gap-2">

                    {/* Ver */}
                    <a
                        href={route('gacetas.show', gaceta.id)}
                        title="Ver"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                        <Eye className="h-4 w-4" />
                    </a>

                    {/* Editar */}
                    <Can permission="gacetas.edit">
                        <a
                            href={route('gacetas.edit', gaceta.id)}
                            title="Editar"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-yellow-600 transition-colors hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
                        >
                            <Pencil className="h-4 w-4" />
                        </a>
                    </Can>

                    {/* Publicar / Despublicar */}
                    <Can permission="gacetas.toggle-status">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    title={
                                        gaceta.publicado
                                            ? 'Despublicar gaceta'
                                            : 'Publicar gaceta'
                                    }
                                    className={`group inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background transition-colors ${
                                        gaceta.publicado
                                            ? 'text-green-600 hover:border-red-300 hover:bg-red-50 hover:text-red-600'
                                            : 'text-red-600 hover:border-green-300 hover:bg-green-50 hover:text-green-600'
                                    }`}
                                >
                                    {gaceta.publicado ? (
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
                                        {gaceta.publicado
                                            ? '¿Despublicar gaceta?'
                                            : '¿Publicar gaceta?'}
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        {gaceta.publicado
                                            ? 'Al despublicar esta gaceta dejará de estar disponible públicamente en el sitio web.'
                                            : 'Al publicar esta gaceta estará disponible públicamente en el sitio web de la Gobernación.'}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={togglePublication}
                                    >
                                        {gaceta.publicado
                                            ? 'Despublicar gaceta'
                                            : 'Publicar gaceta'}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </Can>

                    {/* Eliminar */}
                    <Can permission="gacetas.delete">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    title="Eliminar gaceta"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-red-600 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        ¿Eliminar gaceta?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Esta acción eliminará permanentemente
                                        la gaceta "{gaceta.titulo}". También se
                                        eliminará el archivo PDF asociado.
                                        Esta acción no se puede deshacer.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteGaceta}
                                    >
                                        Eliminar gaceta
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