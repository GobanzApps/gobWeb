import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

import { Button } from '@/components/ui/button';
import { Can } from '@/components/can';
import {
    ArrowLeft,
    Pencil,
    FileText,
    CalendarDays,
    User,
} from 'lucide-react';

interface Gaceta {
    id: number;
    titulo: string;
    descripcion: string | null;
    archivo: string;
    publicado: boolean;
    created_at: string;
    updated_at: string;
    creador?: {
        id: number;
        name: string;
    } | null;
    editor?: {
        id: number;
        name: string;
    } | null;
}

interface Props {
    gaceta: Gaceta;
}

function formatDate(date: string | null) {
    if (!date) return '—';

    const [datePart, timePart] = date.split('T');

    if (!datePart) return '—';

    const [year, month, day] = datePart.split('-');

    if (!timePart) {
        return `${day}/${month}/${year}`;
    }

    const time = timePart.substring(0, 5);

    return `${day}/${month}/${year} ${time}`;
}

export default function Show({ gaceta }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Gacetas',
            href: '/gacetas',
        },
        {
            title: gaceta.titulo,
            href: `/gacetas/${gaceta.id}`,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={gaceta.titulo} />

            <div className="p-6 space-y-6">

                {/* Encabezado */}
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-semibold">
                            {gaceta.titulo}
                        </h1>

                        <p className="text-sm text-muted-foreground">
                            Información de la gaceta oficial.
                        </p>
                    </div>

                    <Can permission="gacetas.edit">
                        <Link href={route('gacetas.edit', gaceta.id)}>
                            <Button>
                                <Pencil className="mr-2 h-4 w-4" />
                                Editar
                            </Button>
                        </Link>
                    </Can>
                </div>

                {/* Información principal */}
                <div className="rounded-lg border bg-background">

                    <div className="border-b p-6">
                        <h2 className="font-semibold">
                            Información de la gaceta
                        </h2>
                    </div>

                    <div className="grid gap-6 p-6 md:grid-cols-2">

                        {/* Título */}
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">
                                Título
                            </p>

                            <p className="font-medium">
                                {gaceta.titulo}
                            </p>
                        </div>

                        {/* Estado */}
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">
                                Estado
                            </p>

                            <div>
                                <span
                                    className={`inline-flex rounded px-2 py-1 text-xs ${
                                        gaceta.publicado
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-700'
                                    }`}
                                >
                                    {gaceta.publicado
                                        ? 'Publicado'
                                        : 'No publicado'}
                                </span>
                            </div>
                        </div>

                        {/* Descripción */}
                        <div className="space-y-1 md:col-span-2">
                            <p className="text-sm text-muted-foreground">
                                Descripción
                            </p>

                            <p className="whitespace-pre-wrap">
                                {gaceta.descripcion || 'Sin descripción.'}
                            </p>
                        </div>

                        {/* Archivo */}
                        <div className="space-y-3 md:col-span-2">
                            <p className="text-sm text-muted-foreground">
                                Documento
                            </p>

                            <a
                                href={`/storage/${gaceta.archivo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline">
                                    <FileText className="mr-2 h-4 w-4" />
                                    Ver PDF
                                </Button>
                            </a>
                        </div>

                    </div>
                </div>

                {/* Información de auditoría */}
                <div className="rounded-lg border bg-background">

                    <div className="border-b p-6">
                        <h2 className="font-semibold">
                            Información de registro
                        </h2>
                    </div>

                    <div className="grid gap-6 p-6 md:grid-cols-2">

                        {/* Creado por */}
                        <div className="flex items-start gap-3">
                            <User className="mt-0.5 h-4 w-4 text-muted-foreground" />

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Creado por
                                </p>

                                <p className="font-medium">
                                    {gaceta.creador?.name || '—'}
                                </p>
                            </div>
                        </div>

                        {/* Fecha de creación */}
                        <div className="flex items-start gap-3">
                            <CalendarDays className="mt-0.5 h-4 w-4 text-muted-foreground" />

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Fecha de creación
                                </p>

                                <p className="font-medium">
                                    {formatDate(gaceta.created_at)}
                                </p>
                            </div>
                        </div>

                        {/* Editado por */}
                        <div className="flex items-start gap-3">
                            <User className="mt-0.5 h-4 w-4 text-muted-foreground" />

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Última modificación por
                                </p>

                                <p className="font-medium">
                                    {gaceta.editor?.name || '—'}
                                </p>
                            </div>
                        </div>

                        {/* Fecha de actualización */}
                        <div className="flex items-start gap-3">
                            <CalendarDays className="mt-0.5 h-4 w-4 text-muted-foreground" />

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Última modificación
                                </p>

                                <p className="font-medium">
                                    {formatDate(gaceta.updated_at)}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Volver */}
                <div>
                    <Link href={route('gacetas.index')}>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver a gacetas
                        </Button>
                    </Link>
                </div>

            </div>
        </AppLayout>
    );
}