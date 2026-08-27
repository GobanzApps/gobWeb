import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import Form from './Form';

interface EstadoPlan {
    id: number;
    nombre: string;
    activo?: boolean;
}

interface Imagen {
    id: number;
    nombre_original: string;
    archivo: string;
    alt_text: string | null;
    orden: number;
}

interface Plan {
    id: number;
    titulo: string;
    descripcion: string;
    estado_id: number;
    fecha_inicio: string | null;
    fecha_estimada_finalizacion: string | null;
    ubicacion: string | null;
    publicado: boolean;
    imagenes: Imagen[];
}

interface Props {
    estadosPlan: EstadoPlan[];
    plan: Plan;
}

export default function Edit({ estadosPlan, plan }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Planes',
            href: route('planes.index'),
        },
        {
            title: plan.titulo,
            href: route('planes.show', plan.id),
        },
        {
            title: 'Editar',
            href: route('planes.edit', plan.id),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Editar - ${plan.titulo}`} />

            <div className="space-y-4 p-6">
                <div>
                    <h1 className="text-xl font-semibold">Editar Plan</h1>
                    <p className="text-sm text-muted-foreground">
                        Modifica la información del plan.
                    </p>
                </div>

                <Form
                    estadosPlan={estadosPlan}
                    plan={plan}
                />
            </div>
        </AppLayout>
    );
}