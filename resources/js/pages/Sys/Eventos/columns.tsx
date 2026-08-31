import { ColumnDef } from '@tanstack/react-table';
import { Eye, Pencil, Trash2 } from 'lucide-react';
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
                        onSuccess: () => {
                            notify.success(
                                'Evento eliminado correctamente.'
                            );
                        },
                        onError: () => {
                            notify.error(
                                'No se pudo eliminar el evento.'
                            );
                        },
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
