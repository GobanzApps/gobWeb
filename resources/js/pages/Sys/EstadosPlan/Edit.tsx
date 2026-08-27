import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import Form from './Form';

interface EstadoPlan {
    id: number;
    nombre: string;
    descripcion: string | null;
    activo: boolean;
}

interface Props {
    estadoPlan: EstadoPlan;
}

export default function Edit({ estadoPlan }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Estados de Plan',
            href: route('estados-plan.index'),
        },
        {
            title: estadoPlan.nombre,
            href: route('estados-plan.show', estadoPlan.id),
        },
        {
            title: 'Editar',
            href: route('estados-plan.edit', estadoPlan.id),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Editar ${estadoPlan.nombre}`} />

            <div className="p-6 space-y-4">

                <div>
                    <h1 className="text-xl font-semibold">
                        Editar Estado de Plan
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Modifica la información del estado de plan.
                    </p>
                </div>

                <Form estadoPlan={estadoPlan} />

            </div>
        </AppLayout>
    );
}