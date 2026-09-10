import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, MapPin, Share2 } from 'lucide-react';

interface Evento {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string | null;
    lugar: string | null;
    imagen_portada: string | null;
}

const evento: Evento = {
    id: 1,
    titulo: 'El Puerto Fest',
    descripcion:
        'Una jornada cultural y recreativa para toda la comunidad del estado Anzoátegui. El evento reunirá actividades culturales, deportivas y recreativas para el disfrute de las familias, además de espacios destinados a promover el talento y la identidad de nuestro estado.',
    fecha_inicio: '2026-09-18T09:00:00',
    fecha_fin: '2026-09-18T17:00:00',
    lugar: 'Plaza Bolívar, Barcelona',
    imagen_portada:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85',
};

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

const esFinalizado = (evento: Evento) => {
    const fechaFin = evento.fecha_fin ? new Date(evento.fecha_fin) : new Date(evento.fecha_inicio);
    return fechaFin < new Date();
};

export default function Show() {
    const finalizado = esFinalizado(evento);

    const compartir = async () => {
        if (navigator.share) {
            await navigator.share({
                title: evento.titulo,
                text: evento.descripcion,
                url: window.location.href,
            });
        } else {
            await navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <>
            <Head title={evento.titulo} />
            <WebLayout>
                <article className="bg-slate-50">
                    <div className="mx-auto max-w-6xl px-5 pt-8 lg:px-8">
                        <Link
                            href="/eventos"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Volver a eventos
                        </Link>
                    </div>

                    <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8 lg:py-10">
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                            <div className="relative h-72 overflow-hidden bg-slate-200 sm:h-96 lg:h-[500px]">
                                {evento.imagen_portada ? (
                                    <img
                                        src={evento.imagen_portada}
                                        alt={evento.titulo}
                                        className={`h-full w-full object-cover ${finalizado ? 'grayscale' : ''}`}
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-slate-400">
                                        <CalendarDays className="h-20 w-20" />
                                    </div>
                                )}

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-24 sm:p-10 sm:pt-32">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="rounded-full bg-blue-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                                            Evento
                                        </span>

                                        {finalizado && (
                                            <span className="flex items-center gap-2 rounded-full bg-slate-900/85 px-4 py-1.5 text-xs font-semibold text-white">
                                                <CheckCircle2 className="h-4 w-4" />
                                                Finalizado
                                            </span>
                                        )}
                                    </div>

                                    <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                        {evento.titulo}
                                    </h1>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-[1fr_300px]">
                                <div className="p-7 sm:p-10 lg:p-12">
                                    <div className="mb-8">
                                        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                                            Información del evento
                                        </p>
                                        <h2 className="mt-2 text-2xl font-bold text-slate-900">
                                            Sobre el evento
                                        </h2>
                                    </div>

                                    <div className="max-w-3xl text-base leading-8 text-slate-600">
                                        {evento.descripcion.split('\n').map((parrafo, index) => (
                                            <p key={index} className={index > 0 ? 'mt-5' : ''}>
                                                {parrafo}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="mt-10 border-t border-slate-200 pt-7">
                                        <button
                                            type="button"
                                            onClick={compartir}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                                        >
                                            <Share2 className="h-4 w-4" />
                                            Compartir evento
                                        </button>
                                    </div>
                                </div>

                                <aside className="border-t bg-slate-50 p-7 lg:border-l lg:border-t-0 lg:p-8">
                                    <h2 className="text-lg font-bold text-slate-900">
                                        Detalles
                                    </h2>

                                    <div className="mt-6 space-y-6">
                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                                                <CalendarDays className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                    Fecha
                                                </p>
                                                <p className="mt-1 text-sm font-medium leading-6 text-slate-700">
                                                    {formatearFecha(evento.fecha_inicio)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                                                <Clock3 className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                    Horario
                                                </p>
                                                <p className="mt-1 text-sm font-medium leading-6 text-slate-700">
                                                    {formatearHora(evento.fecha_inicio)}
                                                    {evento.fecha_fin && (
                                                        <> - {formatearHora(evento.fecha_fin)}</>
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        {evento.lugar && (
                                            <div className="flex gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                                                    <MapPin className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                        Lugar
                                                    </p>
                                                    <p className="mt-1 text-sm font-medium leading-6 text-slate-700">
                                                        {evento.lugar}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {finalizado && (
                                        <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                                            <div>
                                                <p className="text-sm font-semibold text-slate-800">
                                                    Evento finalizado
                                                </p>
                                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                                    Este evento ya culminó y forma parte del historial de actividades.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </aside>
                            </div>
                        </div>
                    </div>
                </article>
            </WebLayout>
        </>
    );
}
