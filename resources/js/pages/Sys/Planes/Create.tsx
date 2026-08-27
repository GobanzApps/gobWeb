import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import Form from './Form';

interface EstadoPlan {
    id: number;
    nombre: string;
}

interface Props {
    estadosPlan: EstadoPlan[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Planes',
        href: route('planes.index'),
    },
    {
        title: 'Nuevo Plan',
        href: route('planes.create'),
    },
];

export default function Create({ estadosPlan }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Nuevo Plan" />

            <div className="space-y-4 p-6">
                <div>
                    <h1 className="text-xl font-semibold">Nuevo Plan</h1>
                    <p className="text-sm text-muted-foreground">
                        Registra un nuevo plan o proyecto de la Gobernación.
                    </p>
                </div>

                <Form estadosPlan={estadosPlan} />
            </div>
        </AppLayout>
    );
}