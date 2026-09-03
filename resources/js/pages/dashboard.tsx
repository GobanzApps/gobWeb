import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Can } from '@/components/can';
import {
    ArrowRight,
    CalendarDays,
    ClipboardList,
    FileText,
    Globe,
    GlobeLock,
    MapPin,
    Newspaper,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/sys/dashboard',
    },
];

interface Estadisticas {
    noticias: number;
    gacetas: number;
    eventos: number;
    planes: number;
}

interface Noticia {
    id: number;
    titulo: string;
    publicado: boolean;
    created_at: string;
}

interface Gaceta {
    id: number;
    titulo: string;
    publicado: boolean;
    created_at: string;
}

interface Evento {
    id: number;
    titulo: string;
    fecha_inicio: string;
    fecha_fin: string | null;
    lugar: string | null;
}

interface Plan {
    id: number;
    titulo: string;
    estado_id: number;
    fecha_inicio: string | null;
    fecha_estimada_finalizacion: string | null;
    publicado: boolean;
    estado?: {
        id: number;
        nombre: string;
    };
}

interface Props {
    estadisticas: Estadisticas;
    noticiasRecientes: Noticia[];
    gacetasRecientes: Gaceta[];
    proximosEventos: Evento[];
    planes: Plan[];
}

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('es-VE', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

const formatDateTime = (date: string) =>
    new Date(date).toLocaleString('es-VE', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
    });

export default function Dashboard({
    estadisticas,
    noticiasRecientes,
    gacetasRecientes,
    proximosEventos,
    planes,
}: Props) {
    const tarjetas = [
        {
            titulo: 'Noticias',
            cantidad: estadisticas.noticias,
            descripcion: 'Noticias registradas',
            icono: Newspaper,
            href: route('noticias.index'),
            permiso: 'noticias.view',
            color: 'blue',
            iconBg: 'bg-blue-100 dark:bg-blue-950/50',
            iconColor: 'text-blue-600 dark:text-blue-400',
            numberColor: 'text-blue-600 dark:text-blue-400',
        },
        {
            titulo: 'Gacetas',
            cantidad: estadisticas.gacetas,
            descripcion: 'Gacetas registradas',
            icono: FileText,
            href: route('gacetas.index'),
            permiso: 'gacetas.view',
            color: 'violet',
            iconBg: 'bg-violet-100 dark:bg-violet-950/50',
            iconColor: 'text-violet-600 dark:text-violet-400',
            numberColor: 'text-violet-600 dark:text-violet-400',
        },
        {
            titulo: 'Eventos',
            cantidad: estadisticas.eventos,
            descripcion: 'Eventos registrados',
            icono: CalendarDays,
            href: route('eventos.index'),
            permiso: 'eventos.view',
            color: 'emerald',
            iconBg: 'bg-emerald-100 dark:bg-emerald-950/50',
            iconColor: 'text-emerald-600 dark:text-emerald-400',
            numberColor: 'text-emerald-600 dark:text-emerald-400',
        },
        {
            titulo: 'Planes',
            cantidad: estadisticas.planes,
            descripcion: 'Planes registrados',
            icono: ClipboardList,
            href: route('planes.index'),
            permiso: 'planes.view',
            color: 'amber',
            iconBg: 'bg-amber-100 dark:bg-amber-950/50',
            iconColor: 'text-amber-600 dark:text-amber-400',
            numberColor: 'text-amber-600 dark:text-amber-400',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
                {/* Encabezado */}
                <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950/30">
                    <div className="relative z-10">
                        <p className="mb-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                            Panel de administración
                        </p>
                        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                            Bienvenido al Dashboard
                        </h1>
                        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                            Consulta rápidamente el contenido y la actividad
                            del sitio web de la Gobernación.
                        </p>
                    </div>

                    <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
                </div>

                {/* Estadísticas */}
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {tarjetas.map((tarjeta) => {
                        const Icon = tarjeta.icono;

                        return (
                            <Can
                                key={tarjeta.titulo}
                                permission={tarjeta.permiso}
                            >
                                <Link href={tarjeta.href} className="group">
                                    <div className="relative overflow-hidden rounded-2xl border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                                        <div
                                            className={`absolute left-0 top-0 h-1 w-full ${
                                                tarjeta.color === 'blue'
                                                    ? 'bg-blue-500'
                                                    : tarjeta.color === 'violet'
                                                      ? 'bg-violet-500'
                                                      : tarjeta.color === 'emerald'
                                                        ? 'bg-emerald-500'
                                                        : 'bg-amber-500'
                                            }`}
                                        />

                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">
                                                    {tarjeta.titulo}
                                                </p>
                                                <p
                                                    className={`mt-2 text-4xl font-bold tracking-tight ${tarjeta.numberColor}`}
                                                >
                                                    {tarjeta.cantidad}
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {tarjeta.descripcion}
                                                </p>
                                            </div>

                                            <div
                                                className={`rounded-xl p-3 ${tarjeta.iconBg}`}
                                            >
                                                <Icon
                                                    className={`h-6 w-6 ${tarjeta.iconColor}`}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-5 flex items-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                                            Ver módulo
                                            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </Can>
                        );
                    })}
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                    {/* Noticias */}
                    <Can permission="noticias.view">
                        <div className="overflow-hidden rounded-2xl border bg-card">
                            <div className="flex items-center justify-between border-b p-5">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-xl bg-blue-100 p-2.5 dark:bg-blue-950/50">
                                        <Newspaper className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">
                                            Noticias recientes
                                        </h2>
                                        <p className="text-xs text-muted-foreground">
                                            Últimas noticias registradas
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href={route('noticias.index')}
                                    className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    Ver todas
                                </Link>
                            </div>

                            <div className="divide-y">
                                {noticiasRecientes.length > 0 ? (
                                    noticiasRecientes.map((noticia) => (
                                        <Link
                                            key={noticia.id}
                                            href={route(
                                                'noticias.show',
                                                noticia.id,
                                            )}
                                            className="group flex items-center justify-between gap-4 p-4 transition-colors hover:bg-blue-50/50 dark:hover:bg-blue-950/20"
                                        >
                                            <div className="min-w-0">
                                                <p className="truncate text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                    {noticia.titulo}
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {formatDate(
                                                        noticia.created_at,
                                                    )}
                                                </p>
                                            </div>

                                            {noticia.publicado ? (
                                                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                                                    <Globe className="h-3 w-3" />
                                                    Publicada
                                                </span>
                                            ) : (
                                                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                                    <GlobeLock className="h-3 w-3" />
                                                    No publicada
                                                </span>
                                            )}
                                        </Link>
                                    ))
                                ) : (
                                    <p className="p-5 text-sm text-muted-foreground">
                                        No hay noticias registradas.
                                    </p>
                                )}
                            </div>
                        </div>
                    </Can>

                    {/* Gacetas */}
                    <Can permission="gacetas.view">
                        <div className="overflow-hidden rounded-2xl border bg-card">
                            <div className="flex items-center justify-between border-b p-5">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-xl bg-violet-100 p-2.5 dark:bg-violet-950/50">
                                        <FileText className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">
                                            Gacetas recientes
                                        </h2>
                                        <p className="text-xs text-muted-foreground">
                                            Últimas gacetas registradas
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href={route('gacetas.index')}
                                    className="text-xs font-medium text-violet-600 hover:underline dark:text-violet-400"
                                >
                                    Ver todas
                                </Link>
                            </div>

                            <div className="divide-y">
                                {gacetasRecientes.length > 0 ? (
                                    gacetasRecientes.map((gaceta) => (
                                        <Link
                                            key={gaceta.id}
                                            href={route(
                                                'gacetas.show',
                                                gaceta.id,
                                            )}
                                            className="group flex items-center justify-between gap-4 p-4 transition-colors hover:bg-violet-50/50 dark:hover:bg-violet-950/20"
                                        >
                                            <div className="min-w-0">
                                                <p className="truncate text-sm font-medium group-hover:text-violet-600 dark:group-hover:text-violet-400">
                                                    {gaceta.titulo}
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {formatDate(
                                                        gaceta.created_at,
                                                    )}
                                                </p>
                                            </div>

                                            {gaceta.publicado ? (
                                                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                                                    <Globe className="h-3 w-3" />
                                                    Publicada
                                                </span>
                                            ) : (
                                                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                                    <GlobeLock className="h-3 w-3" />
                                                    No publicada
                                                </span>
                                            )}
                                        </Link>
                                    ))
                                ) : (
                                    <p className="p-5 text-sm text-muted-foreground">
                                        No hay gacetas registradas.
                                    </p>
                                )}
                            </div>
                        </div>
                    </Can>

                    {/* Eventos */}
                    <Can permission="eventos.view">
                        <div className="overflow-hidden rounded-2xl border bg-card">
                            <div className="flex items-center justify-between border-b p-5">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-xl bg-emerald-100 p-2.5 dark:bg-emerald-950/50">
                                        <CalendarDays className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">
                                            Próximos eventos
                                        </h2>
                                        <p className="text-xs text-muted-foreground">
                                            Eventos próximos publicados
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href={route('eventos.index')}
                                    className="text-xs font-medium text-emerald-600 hover:underline dark:text-emerald-400"
                                >
                                    Ver todos
                                </Link>
                            </div>

                            <div className="divide-y">
                                {proximosEventos.length > 0 ? (
                                    proximosEventos.map((evento) => (
                                        <Link
                                            key={evento.id}
                                            href={route(
                                                'eventos.show',
                                                evento.id,
                                            )}
                                            className="group flex gap-4 p-4 transition-colors hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                                                <CalendarDays className="h-4 w-4" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="truncate text-sm font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                                                    {evento.titulo}
                                                </p>

                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {formatDateTime(
                                                        evento.fecha_inicio,
                                                    )}
                                                </p>

                                                {evento.lugar && (
                                                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                                        <MapPin className="h-3 w-3" />
                                                        {evento.lugar}
                                                    </p>
                                                )}
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="p-5 text-sm text-muted-foreground">
                                        No hay próximos eventos.
                                    </p>
                                )}
                            </div>
                        </div>
                    </Can>

                    {/* Planes */}
                    <Can permission="planes.view">
                        <div className="overflow-hidden rounded-2xl border bg-card">
                            <div className="flex items-center justify-between border-b p-5">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-xl bg-amber-100 p-2.5 dark:bg-amber-950/50">
                                        <ClipboardList className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">
                                            Planes recientes
                                        </h2>
                                        <p className="text-xs text-muted-foreground">
                                            Últimos planes registrados
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href={route('planes.index')}
                                    className="text-xs font-medium text-amber-600 hover:underline dark:text-amber-400"
                                >
                                    Ver todos
                                </Link>
                            </div>

                            <div className="divide-y">
                                {planes.length > 0 ? (
                                    planes.map((plan) => (
                                        <Link
                                            key={plan.id}
                                            href={route(
                                                'planes.show',
                                                plan.id,
                                            )}
                                            className="group block p-4 transition-colors hover:bg-amber-50/50 dark:hover:bg-amber-950/20"
                                        >
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="min-w-0">
                                                    <p className="truncate text-sm font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400">
                                                        {plan.titulo}
                                                    </p>

                                                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                                        {plan.estado && (
                                                            <span className="rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
                                                                {
                                                                    plan.estado
                                                                        .nombre
                                                                }
                                                            </span>
                                                        )}

                                                        {plan.fecha_inicio && (
                                                            <span>
                                                                Inicio:{' '}
                                                                {formatDate(
                                                                    plan.fecha_inicio,
                                                                )}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {plan.publicado ? (
                                                    <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                                                        <Globe className="h-3 w-3" />
                                                        Publicado
                                                    </span>
                                                ) : (
                                                    <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                                        <GlobeLock className="h-3 w-3" />
                                                        No publicado
                                                    </span>
                                                )}
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="p-5 text-sm text-muted-foreground">
                                        No hay planes registrados.
                                    </p>
                                )}
                            </div>
                        </div>
                    </Can>
                </div>
            </div>
        </AppLayout>
    );
}
