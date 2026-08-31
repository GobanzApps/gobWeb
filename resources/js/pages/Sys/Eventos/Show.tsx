import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Can } from '@/components/can';
import { Button } from '@/components/ui/button';
import {
    ArrowLeft,
    Pencil,
    MapPin,
    CalendarDays,
    Image as ImageIcon,
    User,
    Globe,
} from 'lucide-react';

interface Usuario {
    id: number;
    name: string;
}

interface Imagen {
    id: number;
    archivo: string;
    nombre_original: string;
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
    creador: Usuario;
    editor: Usuario | null;
    imagenes: Imagen[];
}

interface Props {
    evento: Evento;
}

function formatDateTime(date: string | null) {
    if (!date) return 'No especificada';

    const value = date.replace('T', ' ');
    const [datePart, timePart] = value.split(' ');

    if (!datePart) return 'No especificada';

    const [year, month, day] = datePart.substring(0, 10).split('-');

    if (!timePart) {
        return `${day}/${month}/${year}`;
    }

    const [hours, minutes] = timePart.substring(0, 5).split(':');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default function Show({ evento }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Eventos', href: route('eventos.index') },
        { title: evento.titulo, href: route('eventos.show', evento.id) },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={evento.titulo} />

            <div className="space-y-6 p-6">

                {/* Encabezado */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="mb-1 text-sm text-muted-foreground">
                            Evento
                        </p>

                        <h1 className="text-2xl font-semibold tracking-tight">
                            {evento.titulo}
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Información detallada del evento.
                        </p>
                    </div>

                    <Can permission="eventos.edit">
                        <Link href={route('eventos.edit', evento.id)}>
                            <Button>
                                <Pencil className="mr-2 h-4 w-4" />
                                Editar
                            </Button>
                        </Link>
                    </Can>
                </div>

                {/* Información principal */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.8fr)]">

                    {/* Cuadro principal */}
                    <div className="rounded-xl border bg-background p-6 shadow-sm">
                        <div className="mb-5">
                            <h2 className="text-base font-semibold">
                                Descripción
                            </h2>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Información general sobre el evento.
                            </p>
                        </div>

                        <div className="whitespace-pre-line text-sm leading-7 text-foreground">
                            {evento.descripcion}
                        </div>
                    </div>

                    {/* Cuadro lateral */}
                    <div className="rounded-xl border bg-background p-6 shadow-sm">
                        <h2 className="mb-5 text-base font-semibold">
                            Información del evento
                        </h2>

                        <div className="space-y-5">

                            {/* Publicación */}
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-muted p-2">
                                    <Globe className="h-4 w-4 text-muted-foreground" />
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Publicación en la web
                                    </p>

                                    <span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                                        evento.publicado
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-muted text-muted-foreground'
                                    }`}>
                                        {evento.publicado
                                            ? 'Publicado'
                                            : 'No publicado'}
                                    </span>
                                </div>
                            </div>

                            {/* Fecha inicio */}
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-muted p-2">
                                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Fecha y hora de inicio
                                    </p>

                                    <p className="mt-1 font-medium">
                                        {formatDateTime(evento.fecha_inicio)}
                                    </p>
                                </div>
                            </div>

                            {/* Fecha final */}
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-muted p-2">
                                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Fecha y hora de finalización
                                    </p>

                                    <p className="mt-1 font-medium">
                                        {formatDateTime(evento.fecha_fin)}
                                    </p>
                                </div>
                            </div>

                            {/* Lugar */}
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-muted p-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs text-muted-foreground">
                                        Lugar
                                    </p>

                                    <p className="mt-1 break-words font-medium">
                                        {evento.lugar || 'No especificado'}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Imágenes */}
                <div className="rounded-xl border bg-background p-6 shadow-sm">
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <ImageIcon className="h-5 w-5" />

                                <h2 className="text-base font-semibold">
                                    Imágenes
                                </h2>
                            </div>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Imágenes asociadas al evento.
                            </p>
                        </div>

                        {evento.imagenes?.length > 0 && (
                            <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                                {evento.imagenes.length}{' '}
                                {evento.imagenes.length === 1
                                    ? 'imagen'
                                    : 'imágenes'}
                            </span>
                        )}
                    </div>

                    {evento.imagenes?.length ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {evento.imagenes.map((imagen) => (
                                <div
                                    key={imagen.id}
                                    className="group overflow-hidden rounded-xl border bg-muted/30"
                                >
                                    <div className="flex h-64 items-center justify-center overflow-hidden bg-muted/40 p-2">
                                        <img
                                            src={`/storage/${imagen.archivo}`}
                                            alt={
                                                imagen.alt_text ||
                                                imagen.nombre_original
                                            }
                                            className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="border-t bg-background px-3 py-2.5">
                                        <p className="truncate text-xs font-medium">
                                            {imagen.nombre_original}
                                        </p>

                                        {imagen.alt_text && (
                                            <p className="mt-0.5 truncate text-xs text-muted-foreground">
                                                {imagen.alt_text}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
                            <ImageIcon className="mb-3 h-8 w-8 text-muted-foreground" />

                            <p className="text-sm font-medium">
                                No hay imágenes
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Este evento todavía no tiene imágenes asociadas.
                            </p>
                        </div>
                    )}
                </div>

                {/* Información administrativa */}
                <div className="rounded-xl border bg-background p-6 shadow-sm">
                    <div className="mb-5">
                        <h2 className="text-base font-semibold">
                            Información administrativa
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Registro de creación y modificación del evento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        <div className="flex items-center gap-3 rounded-lg border p-4">
                            <div className="rounded-lg bg-muted p-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Creado por
                                </p>

                                <p className="mt-1 font-medium">
                                    {evento.creador?.name ?? 'No disponible'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border p-4">
                            <div className="rounded-lg bg-muted p-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Última modificación por
                                </p>

                                <p className="mt-1 font-medium">
                                    {evento.editor?.name ?? 'Sin modificaciones'}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Volver */}
                <div>
                    <Link href={route('eventos.index')}>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver a eventos
                        </Button>
                    </Link>
                </div>

            </div>
        </AppLayout>
    );
}
