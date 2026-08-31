import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import Form from './Form';

interface Imagen {
    id: number;
    nombre_original: string;
    archivo: string;
    alt_text: string | null;
    orden: number;
}

interface Evento {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string | null;
    lugar: string | null;
    publicado: boolean;
    imagenes: Imagen[];
}

interface Props {
    evento: Evento;
}

export default function Edit({ evento }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Eventos',
            href: route('eventos.index'),
        },
        {
            title: evento.titulo,
            href: route('eventos.show', evento.id),
        },
        {
            title: 'Editar',
            href: route('eventos.edit', evento.id),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Editar - ${evento.titulo}`} />

            <div className="space-y-4 p-6">
                <div>
                    <h1 className="text-xl font-semibold">Editar Evento</h1>
                    <p className="text-sm text-muted-foreground">
                        Modifica la información del evento.
                    </p>
                </div>

                <Form evento={evento} />
            </div>
        </AppLayout>
    );
}
