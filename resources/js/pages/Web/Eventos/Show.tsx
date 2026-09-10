import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock3, MapPin, Share2, X } from 'lucide-react';

interface Imagen {
    url: string;
    alt: string;
}

interface Evento {
    id: number;
    titulo: string;
    descripcion_corta: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string | null;
    lugar: string | null;
    imagen_portada: string | null;
    imagenes: Imagen[];
}

interface Props {
    evento: Evento;
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

export default function Show({ evento }: Props) {
    const estado = obtenerEstado(evento);
    const finalizado = estado === 'finalizado';
    const enCurso = estado === 'en-curso';

    const imagenes = [
        ...(evento.imagen_portada ? [{ url: evento.imagen_portada, alt: evento.titulo }] : []),
        ...evento.imagenes,
    ];

    const [imagenSeleccionada, setImagenSeleccionada] = useState<number | null>(null);

    const compartir = async () => {
        if (navigator.share) {
            await navigator.share({
                title: evento.titulo,
                text: evento.descripcion_corta,
                url: window.location.href,
            });
        } else {
            await navigator.clipboard.writeText(window.location.href);
        }
    };

    const imagenAnterior = () => {
        if (imagenSeleccionada === null || imagenes.length === 0) return;
        setImagenSeleccionada((imagenSeleccionada - 1 + imagenes.length) % imagenes.length);
    };

    const imagenSiguiente = () => {
        if (imagenSeleccionada === null || imagenes.length === 0) return;
        setImagenSeleccionada((imagenSeleccionada + 1) % imagenes.length);
    };

    useEffect(() => {
        if (imagenSeleccionada === null) return;

        const manejarTeclado = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setImagenSeleccionada(null);
            if (e.key === 'ArrowLeft') imagenAnterior();
            if (e.key === 'ArrowRight') imagenSiguiente();
        };

        document.addEventListener('keydown', manejarTeclado);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', manejarTeclado);
            document.body.style.overflow = '';
        };
    }, [imagenSeleccionada]);

    return (
        <>
            <Head title={evento.titulo} />
            <WebLayout>
                <article className="bg-slate-50">
                    <div className="mx-auto max-w-6xl px-5 pt-8 lg:px-8">
                        <Link
                            href={route('web.eventos')}
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

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 pt-24 sm:p-10 sm:pt-32">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="rounded-full bg-blue-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                                            Evento
                                        </span>

                                        {enCurso && (
                                            <span className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white">
                                                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                                                En curso
                                            </span>
                                        )}

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

                                    <p className="mb-6 text-lg font-medium leading-8 text-slate-700">
                                        {evento.descripcion_corta}
                                    </p>

                                    <div className="max-w-3xl text-base leading-8 text-slate-600">
                                        {evento.descripcion.split('\n').map((parrafo, index) => (
                                            <p key={index} className={index > 0 ? 'mt-5' : ''}>
                                                {parrafo}
                                            </p>
                                        ))}
                                    </div>

                                    {evento.imagenes.length > 0 && (
                                        <div className="mt-12 border-t border-slate-200 pt-8">
                                            <div className="mb-5">
                                                <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                                                    Galería
                                                </p>
                                                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                                                    Imágenes del evento
                                                </h2>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                                {evento.imagenes.map((imagen, index) => {
                                                    const indice = evento.imagen_portada ? index + 1 : index;

                                                    return (
                                                        <button
                                                            key={`${imagen.url}-${index}`}
                                                            type="button"
                                                            onClick={() => setImagenSeleccionada(indice)}
                                                            className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200"
                                                        >
                                                            <img
                                                                src={imagen.url}
                                                                alt={imagen.alt}
                                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

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
                                                    {evento.fecha_fin && <> - {formatearHora(evento.fecha_fin)}</>}
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

                                    {enCurso && (
                                        <div className="mt-8 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                                            <span className="mt-1 h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />
                                            <div>
                                                <p className="text-sm font-semibold text-emerald-800">
                                                    Evento en curso
                                                </p>
                                                <p className="mt-1 text-xs leading-5 text-emerald-700">
                                                    Esta actividad se encuentra actualmente en desarrollo.
                                                </p>
                                            </div>
                                        </div>
                                    )}

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

                {imagenSeleccionada !== null && imagenes[imagenSeleccionada] && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
                        onClick={() => setImagenSeleccionada(null)}
                    >
                        <button
                            type="button"
                            onClick={() => setImagenSeleccionada(null)}
                            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                            aria-label="Cerrar galería"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {imagenes.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        imagenAnterior();
                                    }}
                                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                                    aria-label="Imagen anterior"
                                >
                                    <ArrowLeft className="h-6 w-6" />
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        imagenSiguiente();
                                    }}
                                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                                    aria-label="Imagen siguiente"
                                >
                                    <ArrowRight className="h-6 w-6" />
                                </button>
                            </>
                        )}

                        <div
                            className="flex max-h-full max-w-6xl flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={imagenes[imagenSeleccionada].url}
                                alt={imagenes[imagenSeleccionada].alt}
                                className="max-h-[80vh] max-w-full rounded-lg object-contain"
                            />

                            {imagenes.length > 1 && (
                                <div className="mt-4 flex max-w-full gap-2 overflow-x-auto pb-2">
                                    {imagenes.map((imagen, index) => (
                                        <button
                                            key={`${imagen.url}-thumb-${index}`}
                                            type="button"
                                            onClick={() => setImagenSeleccionada(index)}
                                            className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${
                                                index === imagenSeleccionada
                                                    ? 'border-white'
                                                    : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                        >
                                            <img
                                                src={imagen.url}
                                                alt={imagen.alt}
                                                className="h-full w-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </WebLayout>
        </>
    );
}