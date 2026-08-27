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

interface EstadoPlan {
    id: number;
    nombre: string;
}

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

interface Plan {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_inicio: string | null;
    fecha_estimada_finalizacion: string | null;
    ubicacion: string | null;
    publicado: boolean;
    estado: EstadoPlan;
    creador: Usuario;
    editor: Usuario | null;
    imagenes: Imagen[];
}

interface Props {
    plan: Plan;
}

function formatDate(date: string | null) {
    if (!date) return 'No especificada';

    const [year, month, day] = date.substring(0, 10).split('-');
    return `${day}/${month}/${year}`;
}

export default function Show({ plan }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Planes', href: route('planes.index') },
        { title: plan.titulo, href: route('planes.show', plan.id) },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={plan.titulo} />

            <div className="space-y-6 p-6">

                {/* Encabezado */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="mb-1 text-sm text-muted-foreground">
                            Plan
                        </p>

                        <h1 className="text-2xl font-semibold tracking-tight">
                            {plan.titulo}
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Información detallada del plan.
                        </p>
                    </div>

                    <Can permission="planes.edit">
                        <Link href={route('planes.edit', plan.id)}>
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
                                Información general sobre el plan.
                            </p>
                        </div>

                        <div className="whitespace-pre-line text-sm leading-7 text-foreground">
                            {plan.descripcion}
                        </div>
                    </div>

                    {/* Cuadro lateral */}
                    <div className="rounded-xl border bg-background p-6 shadow-sm">
                        <h2 className="mb-5 text-base font-semibold">
                            Información del plan
                        </h2>

                        <div className="space-y-5">

                            {/* Estado */}
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-muted p-2">
                                    <Globe className="h-4 w-4 text-muted-foreground" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs text-muted-foreground">
                                        Estado
                                    </p>

                                    <p className="mt-1 font-medium">
                                        {plan.estado?.nombre ?? 'Sin estado'}
                                    </p>
                                </div>
                            </div>

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
                                        plan.publicado
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-muted text-muted-foreground'
                                    }`}>
                                        {plan.publicado
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
                                        Fecha de inicio
                                    </p>
                                    <p className="mt-1 font-medium">
                                        {formatDate(plan.fecha_inicio)}
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
                                        Fecha estimada de finalización
                                    </p>
                                    <p className="mt-1 font-medium">
                                        {formatDate(plan.fecha_estimada_finalizacion)}
                                    </p>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-muted p-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs text-muted-foreground">
                                        Ubicación
                                    </p>

                                    <p className="mt-1 font-medium break-words">
                                        {plan.ubicacion || 'No especificada'}
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
                                Imágenes asociadas al plan.
                            </p>
                        </div>

                        {plan.imagenes?.length > 0 && (
                            <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                                {plan.imagenes.length}{' '}
                                {plan.imagenes.length === 1
                                    ? 'imagen'
                                    : 'imágenes'}
                            </span>
                        )}
                    </div>

                    {plan.imagenes?.length ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {plan.imagenes.map((imagen) => (
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
                                Este plan todavía no tiene imágenes asociadas.
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
                            Registro de creación y modificación del plan.
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
                                    {plan.creador?.name ?? 'No disponible'}
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
                                    {plan.editor?.name ?? 'Sin modificaciones'}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Volver */}
                <div>
                    <Link href={route('planes.index')}>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver a planes
                        </Button>
                    </Link>
                </div>

            </div>
        </AppLayout>
    );
}