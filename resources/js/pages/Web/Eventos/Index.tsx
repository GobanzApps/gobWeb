import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, MapPin } from 'lucide-react';

interface Evento {
    id: number;
    titulo: string;
    descripcion_corta: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string | null;
    lugar: string | null;
    imagen_portada: string | null;
    imagenes: {
        url: string;
        alt: string;
    }[];
}

interface Props {
    eventos: Evento[];
}

const formatearFecha = (fecha: string) =>
    new Intl.DateTimeFormat('es-VE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(fecha));

const formatearHora = (fecha: string) =>
    new Intl.DateTimeFormat('es-VE', {
        hour: 'numeric',
        minute: '2-digit',
    }).format(new Date(fecha));

const obtenerEstado = (evento: Evento) => {
    const ahora = new Date();
    const inicio = new Date(evento.fecha_inicio);
    const fin = evento.fecha_fin ? new Date(evento.fecha_fin) : inicio;

    if (inicio <= ahora && fin >= ahora) return 'en-curso';
    if (fin < ahora) return 'finalizado';
    return 'proximo';
};

export default function Index({ eventos }: Props) {
    const eventosEnCurso = eventos
        .filter((evento) => obtenerEstado(evento) === 'en-curso')
        .sort((a, b) => new Date(a.fecha_inicio).getTime() - new Date(b.fecha_inicio).getTime());

    const eventosProximos = eventos
        .filter((evento) => obtenerEstado(evento) === 'proximo')
        .sort((a, b) => new Date(a.fecha_inicio).getTime() - new Date(b.fecha_inicio).getTime());

    const eventosFinalizados = eventos
        .filter((evento) => obtenerEstado(evento) === 'finalizado')
        .sort((a, b) => {
            const fechaA = new Date(a.fecha_fin || a.fecha_inicio).getTime();
            const fechaB = new Date(b.fecha_fin || b.fecha_inicio).getTime();
            return fechaB - fechaA;
        });

    const hayEventos = eventosEnCurso.length > 0 || eventosProximos.length > 0 || eventosFinalizados.length > 0;

    return (
        <>
            <Head title="Eventos" />
            <WebLayout>
                <section className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-6xl px-5 lg:px-8">
                        <div className="mb-12">
                            <div className="mb-4 flex items-center gap-3 text-blue-700">
                                <CalendarDays className="h-6 w-6" />
                                <span className="text-sm font-semibold uppercase tracking-widest">Agenda</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Eventos</h1>
                            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                                Conoce las próximas actividades, jornadas y eventos de la Gobernación del Estado Anzoátegui.
                            </p>
                        </div>

                        {eventosEnCurso.length > 0 && (
                            <section className="mb-16">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="h-px flex-1 bg-slate-200" />
                                    <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-700">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                                        En curso
                                    </span>
                                    <div className="h-px flex-1 bg-slate-200" />
                                </div>

                                <div className="space-y-6">
                                    {eventosEnCurso.map((evento) => (
                                        <article key={evento.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                                            <div className="grid lg:grid-cols-[1.2fr_1fr]">
                                                <div className="h-72 overflow-hidden bg-slate-200 sm:h-96 lg:h-[440px]">
                                                    {evento.imagen_portada ? (
                                                        <img
                                                            src={evento.imagen_portada}
                                                            alt={evento.titulo}
                                                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full items-center justify-center text-slate-400">
                                                            <CalendarDays className="h-16 w-16" />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex flex-col justify-center p-8 lg:p-12">
                                                    <div className="mb-5 flex flex-wrap items-center gap-3">
                                                        <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                                                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                                                            En curso
                                                        </span>
                                                        <span className="flex items-center gap-2 text-sm font-medium text-slate-500">
                                                            <CalendarDays className="h-4 w-4 text-blue-600" />
                                                            {formatearFecha(evento.fecha_inicio)}
                                                        </span>
                                                    </div>

                                                    <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                                                        {evento.titulo}
                                                    </h2>

                                                    <p className="mt-5 leading-7 text-slate-600">
                                                        {evento.descripcion_corta}
                                                    </p>

                                                    <div className="mt-7 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
                                                        <div className="flex items-center gap-3">
                                                            <Clock3 className="h-5 w-5 shrink-0 text-blue-600" />
                                                            <span>
                                                                {formatearHora(evento.fecha_inicio)}
                                                                {evento.fecha_fin && ` - ${formatearHora(evento.fecha_fin)}`}
                                                            </span>
                                                        </div>

                                                        {evento.lugar && (
                                                            <div className="flex items-center gap-3">
                                                                <MapPin className="h-5 w-5 shrink-0 text-blue-600" />
                                                                <span>{evento.lugar}</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <Link
                                                        href={route('web.evento', evento.id)}
                                                        className="mt-8 flex w-fit items-center gap-2 font-semibold text-blue-700 transition hover:gap-3 hover:text-blue-900"
                                                    >
                                                        Ver evento
                                                        <ArrowRight className="h-4 w-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        )}

                        {eventosProximos.length > 0 && (
                            <section className="mb-16">
                                <div className="mb-7">
                                    <h2 className="text-2xl font-bold text-slate-900">Próximos eventos</h2>
                                    <p className="mt-2 text-slate-600">Actividades que se realizarán próximamente.</p>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {eventosProximos.map((evento) => (
                                        <article
                                            key={evento.id}
                                            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
                                        >
                                            <div className="h-52 overflow-hidden bg-slate-200">
                                                {evento.imagen_portada ? (
                                                    <img
                                                        src={evento.imagen_portada}
                                                        alt={evento.titulo}
                                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center text-slate-400">
                                                        <CalendarDays className="h-12 w-12" />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-6">
                                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                                                    <span className="flex items-center gap-2 font-medium text-blue-700">
                                                        <CalendarDays className="h-4 w-4" />
                                                        {formatearFecha(evento.fecha_inicio)}
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <Clock3 className="h-4 w-4" />
                                                        {formatearHora(evento.fecha_inicio)}
                                                        {evento.fecha_fin && ` - ${formatearHora(evento.fecha_fin)}`}
                                                    </span>
                                                </div>

                                                <h3 className="mt-3 text-xl font-bold leading-tight text-slate-900 transition group-hover:text-blue-800">
                                                    {evento.titulo}
                                                </h3>

                                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                                    {evento.descripcion_corta}
                                                </p>

                                                {evento.lugar && (
                                                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                                        <MapPin className="h-4 w-4 shrink-0 text-blue-600" />
                                                        <span className="truncate">{evento.lugar}</span>
                                                    </div>
                                                )}

                                                <Link
                                                    href={route('web.evento', evento.id)}
                                                    className="mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3 hover:text-blue-900"
                                                >
                                                    Ver evento
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        )}

                        {eventosFinalizados.length > 0 && (
                            <section>
                                <div className="mb-7 border-t border-slate-200 pt-12">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <h2 className="text-2xl font-bold text-slate-900">Eventos finalizados</h2>
                                        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                                            Historial
                                        </span>
                                    </div>
                                    <p className="mt-2 text-slate-600">
                                        Consulta las actividades y eventos que ya culminaron.
                                    </p>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {eventosFinalizados.map((evento) => (
                                        <article
                                            key={evento.id}
                                            className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-md"
                                        >
                                            <div className="relative h-48 overflow-hidden bg-slate-200">
                                                {evento.imagen_portada ? (
                                                    <img
                                                        src={evento.imagen_portada}
                                                        alt={evento.titulo}
                                                        className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center text-slate-400">
                                                        <CalendarDays className="h-12 w-12" />
                                                    </div>
                                                )}

                                                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-slate-900/85 px-3 py-1.5 text-xs font-semibold text-white">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                    Finalizado
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                                    <CalendarDays className="h-4 w-4 text-slate-400" />
                                                    {formatearFecha(evento.fecha_inicio)}
                                                </div>

                                                <h3 className="mt-3 text-xl font-bold leading-tight text-slate-900">
                                                    {evento.titulo}
                                                </h3>

                                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                                    {evento.descripcion_corta}
                                                </p>

                                                {evento.lugar && (
                                                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                                        <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                                                        <span className="truncate">{evento.lugar}</span>
                                                    </div>
                                                )}

                                                <Link
                                                    href={route('web.evento', evento.id)}
                                                    className="mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-slate-600 transition hover:gap-3 hover:text-blue-700"
                                                >
                                                    Ver evento
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        )}

                        {!hayEventos && (
                            <div className="rounded-2xl border border-dashed bg-white px-6 py-16 text-center">
                                <CalendarDays className="mx-auto mb-4 h-12 w-12 text-slate-400" />
                                <h2 className="text-lg font-semibold text-slate-900">No hay eventos disponibles</h2>
                                <p className="mt-2 text-sm text-slate-500">
                                    Actualmente no hay eventos publicados.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </WebLayout>
        </>
    );
}