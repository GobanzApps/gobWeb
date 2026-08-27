import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Can } from '@/components/can';
import { Button } from '@/components/ui/button';
import { Pencil, ArrowLeft } from 'lucide-react';

interface EstadoPlan {
    id: number;
    nombre: string;
    descripcion: string | null;
    activo: boolean;
    planes_count: number;
}

interface Props {
    estadoPlan: EstadoPlan;
}

export default function Show({ estadoPlan }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Estados de Plan',
            href: route('estados-plan.index'),
        },
        {
            title: estadoPlan.nombre,
            href: route('estados-plan.show', estadoPlan.id),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={estadoPlan.nombre} />

            <div className="p-6 space-y-6">

                {/* Encabezado */}
                <div className="flex items-center justify-between">

                    <div>
                        <h1 className="text-xl font-semibold">
                            {estadoPlan.nombre}
                        </h1>

                        <p className="text-sm text-muted-foreground">
                            Información del estado de plan.
                        </p>
                    </div>

                    <Can permission="estados-plan.edit">
                        <Link
                            href={route(
                                'estados-plan.edit',
                                estadoPlan.id
                            )}
                        >
                            <Button>
                                <Pencil className="h-4 w-4 mr-2" />
                                Editar
                            </Button>
                        </Link>
                    </Can>

                </div>

                {/* Información */}
                <div className="rounded-lg border bg-background">

                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Nombre */}
                        <div className="border-b p-4 md:border-r">
                            <p className="text-sm text-muted-foreground">
                                Nombre
                            </p>

                            <p className="mt-1 font-medium">
                                {estadoPlan.nombre}
                            </p>
                        </div>

                        {/* Estado */}
                        <div className="border-b p-4">
                            <p className="text-sm text-muted-foreground">
                                Estado
                            </p>

                            <div className="mt-1">
                                <span
                                    className={`inline-flex px-2 py-1 rounded text-xs ${
                                        estadoPlan.activo
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                    }`}
                                >
                                    {estadoPlan.activo
                                        ? 'Activo'
                                        : 'Inactivo'}
                                </span>
                            </div>
                        </div>

                        {/* Descripción */}
                        <div className="border-b p-4 md:col-span-2">
                            <p className="text-sm text-muted-foreground">
                                Descripción
                            </p>

                            <p className="mt-1">
                                {estadoPlan.descripcion ||
                                    'Sin descripción'}
                            </p>
                        </div>

                        {/* Planes asociados */}
                        <div className="p-4 md:col-span-2">
                            <p className="text-sm text-muted-foreground">
                                Planes asociados
                            </p>

                            <p className="mt-1 text-2xl font-semibold">
                                {estadoPlan.planes_count}
                            </p>

                            <p className="text-sm text-muted-foreground">
                                {estadoPlan.planes_count === 1
                                    ? 'plan utiliza este estado'
                                    : 'planes utilizan este estado'}
                            </p>
                        </div>

                    </div>

                </div>

                {/* Volver */}
                <div>
                    <Link
                        href={route('estados-plan.index')}
                    >
                        <Button variant="outline">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Volver
                        </Button>
                    </Link>
                </div>

            </div>
        </AppLayout>
    );
}