import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import Form from './Form';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Noticias', href: route('noticias.index') },
    { title: 'Crear', href: route('noticias.create') },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Crear noticia" />
            <div className="p-4">
                <Form />
            </div>
        </AppLayout>
    );
}
