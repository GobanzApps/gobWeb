import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import Form from './Form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Eventos',
        href: route('eventos.index'),
    },
    {
        title: 'Nuevo Evento',
        href: route('eventos.create'),
    },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Nuevo Evento" />

            <div className="space-y-4 p-6">
                <div>
                    <h1 className="text-xl font-semibold">Nuevo Evento</h1>
                    <p className="text-sm text-muted-foreground">
                        Registra un nuevo evento de la Gobernación.
                    </p>
                </div>

                <Form />
            </div>
        </AppLayout>
    );
}
