import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

import { Button } from '@/components/ui/button';
import Form from './Form';

interface Gaceta {
    id: number;
    titulo: string;
    descripcion: string | null;
    archivo: string | null;
    publicado: boolean;
}

interface Props {
    gaceta: Gaceta;
}

export default function Edit({ gaceta }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Gacetas',
            href: '/gacetas',
        },
        {
            title: 'Editar gaceta',
            href: `/gacetas/${gaceta.id}/edit`,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editar gaceta" />

            <div className="p-6 space-y-6">

                {/* Encabezado */}
                <div>
                    <h1 className="text-xl font-semibold">
                        Editar gaceta
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Modifica la información de la gaceta oficial.
                    </p>
                </div>

                {/* Formulario */}
                <div className="rounded-lg border bg-background p-6">
                    <Form
                        gaceta={gaceta}
                        submitUrl={route('gacetas.update', gaceta.id)}
                        method="put"
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