import { ColumnDef } from '@tanstack/react-table';
import { Eye, Pencil, Trash2, ToggleRight, ToggleLeft } from 'lucide-react';
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

export type EstadoPlan = {
    id: number;
    nombre: string;
    descripcion: string | null;
    activo: boolean;
    planes_count: number;
};

export const columns: ColumnDef<EstadoPlan>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },

    {
        accessorKey: 'nombre',
        header: 'Nombre',
    },

    {
        accessorKey: 'descripcion',
        header: 'Descripción',
        cell: ({ row }) => {
            const descripcion = row.original.descripcion;
            return descripcion || 'Sin descripción';
        },
    },

    {
        accessorKey: 'planes_count',
        header: () => (
            <div className="text-center">
                Planes
            </div>
        ),
        cell: ({ row }) => {
            const cantidad = row.original.planes_count;
            return (
                <div className="text-center">
                    {cantidad}
                </div>
            );
        },
    },

    {
        accessorKey: 'activo',
        header: () => (
            <div className="text-right">
                Estado
            </div>
        ),

        cell: ({ row }) => {
            const activo = row.original.activo;

            return (
                <div className="flex justify-end">
                    <span className={`px-2 py-1 rounded text-xs ${ activo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {activo ? 'Activo' : 'Inactivo'}
                    </span>
                </div>
            );
        },
    },

    {
        id: 'actions',

        header: () => (
            <div className="text-right">
                Acciones
            </div>
        ),

        cell: ({ row }) => {
            const estadoPlan = row.original;

            return (
                <div className="flex justify-end items-center gap-2">

                    {/* Ver */}
                    <a
                        href={route('estados-plan.show', estadoPlan.id)}
                        title="Ver"
                        className="
                            inline-flex h-9 w-9 items-center justify-center
                            rounded-md border bg-background
                            text-blue-600
                            hover:border-blue-300
                            hover:bg-blue-50
                            hover:text-blue-700
                            transition-colors
                        "
                    >
                        <Eye className="h-4 w-4" />
                    </a>

                    {/* Editar */}
                    <Can permission="estados-plan.edit">
                        <a
                            href={route('estados-plan.edit', estadoPlan.id)}
                            title="Editar"
                            className="
                                inline-flex h-9 w-9 items-center justify-center
                                rounded-md border bg-background
                                text-yellow-600
                                hover:border-yellow-300
                                hover:bg-yellow-50
                                hover:text-yellow-700
                                transition-colors
                            "
                        >
                            <Pencil className="h-4 w-4" />
                        </a>
                    </Can>

                    {/* Activar / Desactivar */}
                    <Can permission="estados-plan.toggle-status">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    title={estadoPlan.activo ? 'Desactivar estado' : 'Activar estado'}
                                    className={`
                                        group inline-flex h-9 w-9 items-center justify-center
                                        rounded-md border bg-background transition-colors
                                        ${
                                            estadoPlan.activo
                                                ? `
                                                    text-green-600
                                                    hover:text-red-600
                                                    hover:border-red-300
                                                    hover:bg-red-50
                                                `
                                                : `
                                                    text-red-600
                                                    hover:text-green-600
                                                    hover:border-green-300
                                                    hover:bg-green-50
                                                `
                                        }
                                    `}
                                >
                                    {estadoPlan.activo ? (
                                        <>
                                            <ToggleRight className="h-4 w-4 group-hover:hidden" />
                                            <ToggleLeft className="hidden h-4 w-4 group-hover:block" />
                                        </>
                                    ) : (
                                        <>
                                            <ToggleLeft className="h-4 w-4 group-hover:hidden" />
                                            <ToggleRight className="hidden h-4 w-4 group-hover:block" />
                                        </>
                                    )}
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>

                                    <AlertDialogTitle>
                                        {estadoPlan.activo
                                            ? '¿Desactivar estado de plan?'
                                            : '¿Activar estado de plan?'}
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        {estadoPlan.activo
                                            ? 'Al desactivar este estado no podrá seleccionarse para nuevos planes. Los planes que ya utilizan este estado no serán modificados.'
                                            : 'Al activar este estado volverá a estar disponible para asignarlo a los planes.'}
                                    </AlertDialogDescription>

                                </AlertDialogHeader>

                                <AlertDialogFooter>

                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={() => {
                                            router.patch(
                                                route(
                                                    'estados-plan.toggle-status',
                                                    estadoPlan.id
                                                ),
                                                {},
                                                {
                                                    preserveScroll: true,

                                                    onSuccess: () => {
                                                        notify.success(
                                                            estadoPlan.activo
                                                                ? 'Estado de plan desactivado correctamente.'
                                                                : 'Estado de plan activado correctamente.'
                                                        );
                                                    },

                                                    onError: () => {
                                                        notify.error(
                                                            'No se pudo cambiar el estado del plan.'
                                                        );
                                                    },
                                                }
                                            );
                                        }}
                                    >
                                        {estadoPlan.activo
                                            ? 'Desactivar estado'
                                            : 'Activar estado'}
                                    </AlertDialogAction>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </Can>

                    {/* Eliminar */}
                    <Can permission="estados-plan.delete">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    title="Eliminar"
                                    className="
                                        inline-flex h-9 w-9 items-center justify-center
                                        rounded-md border bg-background
                                        text-red-600
                                        hover:border-red-300
                                        hover:bg-red-50
                                        hover:text-red-700
                                        transition-colors
                                    "
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>

                                    <AlertDialogTitle>
                                        ¿Eliminar estado de plan?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Esta acción eliminará permanentemente
                                        el estado "{estadoPlan.nombre}". Si el
                                        estado está siendo utilizado por algún
                                        plan, no podrá ser eliminado.
                                    </AlertDialogDescription>

                                </AlertDialogHeader>

                                <AlertDialogFooter>

                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={() => {
                                            router.delete(
                                                route('estados-plan.destroy', estadoPlan.id),
                                                {
                                                    preserveScroll: true,
                                                    onSuccess: () => {notify.success('Estado de plan eliminado correctamente.');},
                                                    onError: () => {notify.error( 'No se puede eliminar este estado porque está siendo utilizado por uno o más planes actualmente.');},
                                                }
                                            );
                                        }}
                                    >
                                        Eliminar
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