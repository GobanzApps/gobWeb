import { ColumnDef } from '@tanstack/react-table';
import { Eye, Pencil, Trash2, Globe, GlobeLock } from 'lucide-react';
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

export type Evento = {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_inicio: string | null;
    fecha_fin: string | null;
    lugar: string | null;
    publicado: boolean;
    imagenes_count: number;
};

function formatDateTime(date: string | null) {
    if (!date) return '—';

    const [datePart, timePart] = date.split('T');

    if (!datePart) return '—';

    const [year, month, day] = datePart.split('-');

    if (!timePart) {
        return `${day}/${month}/${year}`;
    }

    const time = timePart.substring(0, 5);

    return `${day}/${month}/${year} ${time}`;
}

export const columns: ColumnDef<Evento>[] = [
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
        accessorKey: 'fecha_inicio',
        header: 'Inicio',
        cell: ({ row }) => (
            <div className="whitespace-nowrap">
                {formatDateTime(row.original.fecha_inicio)}
            </div>
        ),
    },

    {
        accessorKey: 'fecha_fin',
        header: 'Finalización',
        cell: ({ row }) => (
            <div className="whitespace-nowrap">
                {formatDateTime(row.original.fecha_fin)}
            </div>
        ),
    },

    {
        accessorKey: 'lugar',
        header: 'Lugar',
        cell: ({ row }) => (
            <div className="max-w-[220px] truncate">
                {row.original.lugar || '—'}
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
        accessorKey: 'imagenes_count',
        header: () => <div className="text-center">Imágenes</div>,
        cell: ({ row }) => (
            <div className="text-center">
                {row.original.imagenes_count}
            </div>
        ),
    },

    {
        id: 'actions',
        header: () => <div className="text-right">Acciones</div>,
        cell: ({ row }) => {
            const evento = row.original;

            const deleteEvento = () => {
                router.delete(
                    route('eventos.destroy', evento.id),
                    {
                        preserveScroll: true,
                        onSuccess: () => {notify.success('Evento eliminado correctamente.');},
                        onError: () => {notify.error('No se pudo eliminar el evento.');},
                    }
                );
            };

            const togglePublication = () => {
                router.patch(
                    route('eventos.toggle-status', evento.id),
                    {},
                    {
                        preserveScroll: true,
                        onSuccess: () => {notify.success(evento.publicado ? 'Evento despublicado correctamente.' : 'Evento publicado correctamente.');},
                        onError: () => {notify.error('No se pudo cambiar el estado de publicación del evento.');},
                    }
                );
            };

            return (
                <div className="flex items-center justify-end gap-2">

                    {/* Ver */}
                    <a
                        href={route('eventos.show', evento.id)}
                        title="Ver"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                        <Eye className="h-4 w-4" />
                    </a>

                    {/* Editar */}
                    <Can permission="eventos.edit">
                        <a
                            href={route('eventos.edit', evento.id)}
                            title="Editar"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-yellow-600 transition-colors hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
                        >
                            <Pencil className="h-4 w-4" />
                        </a>
                    </Can>

                    {/* Publicar / Despublicar */}
                    <Can permission="eventos.toggle-status">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    title={
                                        evento.publicado
                                            ? 'Despublicar evento'
                                            : 'Publicar evento'
                                    }
                                    className={`group inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background transition-colors ${
                                        evento.publicado
                                            ? 'text-green-600 hover:border-red-300 hover:bg-red-50 hover:text-red-600'
                                            : 'text-red-600 hover:border-green-300 hover:bg-green-50 hover:text-green-600'
                                    }`}
                                >
                                    {evento.publicado ? (
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
                                        {evento.publicado
                                            ? '¿Despublicar evento?'
                                            : '¿Publicar evento?'}
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        {evento.publicado
                                            ? 'Al despublicar este evento dejará de estar disponible públicamente en el sitio web.'
                                            : 'Al publicar este evento estará disponible públicamente en el sitio web de la Gobernación.'}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>

                                    <AlertDialogAction onClick={togglePublication}>
                                        {evento.publicado
                                            ? 'Despublicar evento'
                                            : 'Publicar evento'}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </Can>

                    {/* Eliminar */}
                    <Can permission="eventos.delete">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    title="Eliminar evento"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-red-600 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        ¿Eliminar evento?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Esta acción eliminará permanentemente
                                        el evento "{evento.titulo}". Esta
                                        acción no se puede deshacer.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteEvento}
                                    >
                                        Eliminar evento
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
