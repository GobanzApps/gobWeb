import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

import { Button } from '@/components/ui/button';
import Form from './Form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gacetas',
        href: '/gacetas',
    },
    {
        title: 'Nueva gaceta',
        href: '/gacetas/create',
    },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Nueva gaceta" />

            <div className="p-6 space-y-6">

                {/* Encabezado */}
                <div>
                    <h1 className="text-xl font-semibold">
                        Nueva gaceta
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Registra una nueva gaceta oficial.
                    </p>
                </div>

                {/* Formulario */}
                <div className="rounded-lg border bg-background p-6">
                    <Form
                        submitUrl={route('gacetas.store')}
                    />
                </div>

                {/* Volver */}
                <div>
                    <Link href={route('gacetas.index')}>
                        <Button variant="outline">
                            Cancelar
                        </Button>
                    </Link>
                </div>

            </div>
        </AppLayout>
    );
}