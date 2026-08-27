import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import Form from './Form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Estados de Plan',
        href: '/sys/estados-plan',
    },
    {
        title: 'Nuevo Estado',
        href: '/sys/estados-plan/create',
    },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Nuevo Estado de Plan" />

            <div className="p-6 space-y-4">
                <div>
                    <h1 className="text-xl font-semibold">
                        Nuevo Estado de Plan
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Registra un nuevo estado que podrá ser utilizado en los planes.
                    </p>
                </div>

                <Form />
            </div>
        </AppLayout>
    );
}