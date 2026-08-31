import { ColumnDef } from '@tanstack/react-table';
import { Eye, Pencil, FileCheck, FileX, Trash2 } from 'lucide-react';
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

export type Plan = {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_inicio: string | null;
    fecha_estimada_finalizacion: string | null;
    ubicacion: string | null;
    publicado: boolean;
    estado: {
        id: number;
        nombre: string;
    };
    imagenes_count: number;
};

function formatDate(date: string | null) {
    if (!date) return '—';

    const [year, month, day] = date.substring(0, 10).split('-');
    return `${day}/${month}/${year}`;
}

export const columns: ColumnDef<Plan>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'titulo',
        header: 'Título',
        cell: ({ row }) => (
            <div className="max-w-[280px] truncate">{row.original.titulo}</div>
        ),
    },
    {
        accessorFn: (row) => row.estado?.nombre ?? '',
        header: 'Estado',
        cell: ({ row }) => (
            <span className="inline-flex rounded px-2 py-1 text-xs bg-blue-100 text-blue-700">
                {row.original.estado?.nombre ?? 'Sin estado'}
            </span>
        ),
    },
    {
        accessorKey: 'fecha_inicio',
        header: 'Inicio',
        cell: ({ row }) => formatDate(row.original.fecha_inicio),
    },
    {
        accessorKey: 'fecha_estimada_finalizacion',
        header: 'Finalización',
        cell: ({ row }) => formatDate(row.original.fecha_estimada_finalizacion),
    },
    {
        accessorKey: 'ubicacion',
        header: 'Ubicación',
        cell: ({ row }) => (
            <div className="max-w-[220px] truncate">{row.original.ubicacion || '—'}</div>
        ),
    },
    {
        accessorKey: 'publicado',
        header: () => <div className="text-right">Publicado</div>,
        cell: ({ row }) => {
            const publicado = row.original.publicado;

            return (
                <div className="flex justify-end">
                    <span className={`rounded px-2 py-1 text-xs ${
                        publicado
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                    }`}>
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
            <div className="text-center">{row.original.imagenes_count}</div>
        ),
    },
    {
        id: 'actions',
        header: () => <div className="text-right">Acciones</div>,
        cell: ({ row }) => {
            const plan = row.original;

            const togglePublication = () => {
                router.patch(
                    route('planes.toggle-status', plan.id),
                    {},
                    {
                        preserveScroll: true,
                        onSuccess: () => {
                            notify.success(
                                plan.publicado
                                    ? 'Plan despublicado correctamente.'
                                    : 'Plan publicado correctamente.'
                            );
                        },
                        onError: () => {
                            notify.error(
                                'No se pudo cambiar el estado de publicación del plan.'
                            );
                        },
                    }
                );
            };

            const deletePlan = () => {
                router.delete(
                    route('planes.destroy', plan.id),
                    {
                        preserveScroll: true,
                        onSuccess: () => {
                            notify.success('Plan eliminado correctamente.');
                        },
                        onError: () => {
                            notify.error('No se pudo eliminar el plan.');
                        },
                    }
                );
            };

            return (
                <div className="flex items-center justify-end gap-2">

                    {/* Ver */}
                    <a
                        href={route('planes.show', plan.id)}
                        title="Ver"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                        <Eye className="h-4 w-4" />
                    </a>

                    {/* Editar */}
                    <Can permission="planes.edit">
                        <a
                            href={route('planes.edit', plan.id)}
                            title="Editar"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-yellow-600 transition-colors hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
                        >
                            <Pencil className="h-4 w-4" />
                        </a>
                    </Can>

                    {/* Publicar / Despublicar */}
                    <Can permission="planes.toggle-status">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    title={plan.publicado ? 'Despublicar plan' : 'Publicar plan'}
                                    className={`group inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background transition-colors ${
                                        plan.publicado
                                            ? 'text-green-600 hover:border-red-300 hover:bg-red-50 hover:text-red-600'
                                            : 'text-red-600 hover:border-green-300 hover:bg-green-50 hover:text-green-600'
                                    }`}
                                >
                                    {plan.publicado ? (
                                        <>
                                            <FileCheck className="h-4 w-4 group-hover:hidden" />
                                            <FileX className="hidden h-4 w-4 group-hover:block" />
                                        </>
                                    ) : (
                                        <>
                                            <FileX className="h-4 w-4 group-hover:hidden" />
                                            <FileCheck className="hidden h-4 w-4 group-hover:block" />
                                        </>
                                    )}
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        {plan.publicado ? '¿Despublicar plan?' : '¿Publicar plan?'}
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        {plan.publicado
                                            ? 'Al despublicar este plan dejará de estar disponible públicamente en el sitio web.'
                                            : 'Al publicar este plan estará disponible públicamente en el sitio web de la Gobernación.'}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                    <AlertDialogAction onClick={togglePublication}>
                                        {plan.publicado ? 'Despublicar plan' : 'Publicar plan'}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </Can>

                    {/* Eliminar */}
                    <Can permission="planes.delete">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    title="Eliminar plan"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-red-600 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        ¿Eliminar plan?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Esta acción eliminará permanentemente el plan "{plan.titulo}" y todas sus imágenes. Esta acción no se puede deshacer.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancelar</AlertDialogCancel>

                                    <AlertDialogAction onClick={deletePlan}>
                                        Eliminar plan
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