import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import Form from './Form';

interface Noticia {
    id: number;
    titulo: string;
    descripcion: string;
    publicado: boolean;
    imagenes: {
        id: number;
        archivo: string;
        nombre_original: string;
        alt_text: string | null;
        orden: number;
    }[];
}

interface Props {
    noticia: Noticia;
}

export default function Edit({ noticia }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Noticias', href: route('noticias.index') },
        { title: 'Editar', href: route('noticias.edit', noticia.id) },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Editar noticia: ${noticia.titulo}`} />
            <div className="p-4">
                <Form noticia={noticia} />
            </div>
        </AppLayout>
    );
}
