import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import { ArrowLeft, ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Newspaper, Share2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Imagen {
    url: string;
    alt: string;
}

interface Noticia {
    id: number;
    titulo: string;
    descripcion_corta: string;
    descripcion: string;
    fecha: string;
    imagen_portada: string | null;
    imagenes: Imagen[];
}

export default function Show({ noticia }: { noticia: Noticia }) {
    const imagenes = [
        ...(noticia.imagen_portada ? [{ url: noticia.imagen_portada, alt: noticia.titulo }] : []),
        ...noticia.imagenes,
    ];
    const [imagenActual, setImagenActual] = useState(0);
    const [galeriaAbierta, setGaleriaAbierta] = useState(false);

    const siguienteImagen = () => {
        setImagenActual((actual) => (actual + 1) % imagenes.length);
    };

    const anteriorImagen = () => {
        setImagenActual((actual) => (actual - 1 + imagenes.length) % imagenes.length);
    };

    useEffect(() => {
        if (!galeriaAbierta) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setGaleriaAbierta(false);
            if (event.key === 'ArrowRight' && imagenes.length > 1) siguienteImagen();
            if (event.key === 'ArrowLeft' && imagenes.length > 1) anteriorImagen();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [galeriaAbierta, imagenes.length]);

    return (
        <>
            <Head title={noticia.titulo} />

            <WebLayout>
                <article className="bg-white">
                    <div className="mx-auto max-w-5xl px-5 pt-10 lg:px-8">
                        <Link
                            href={route('web.noticias')}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Volver a noticias
                        </Link>

                        <div className="mt-10">
                            <div className="flex items-center gap-3 text-blue-700">
                                <Newspaper className="h-5 w-5" />
                                <span className="text-sm font-bold uppercase tracking-widest">Actualidad</span>
                            </div>

                            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
                                {noticia.titulo}
                            </h1>

                            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                                <CalendarDays className="h-4 w-4 text-blue-600" />
                                {noticia.fecha}
                            </div>
                        </div>

                        {/* IMAGEN PRINCIPAL */}
                        {imagenes.length > 0 && (
                            <div className="mt-10 overflow-hidden rounded-2xl bg-slate-950">
                                <button
                                    type="button"
                                    onClick={() => setGaleriaAbierta(true)}
                                    className="block h-[300px] w-full cursor-zoom-in md:h-[500px]"
                                >
                                    <img
                                        src={imagenes[imagenActual].url}
                                        alt={imagenes[imagenActual].alt}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                                    />
                                </button>
                            </div>
                        )}

                        {/* GALERÍA */}
                        {imagenes.length > 1 && (
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-700">
                                        Galería · {imagenActual + 1} / {imagenes.length}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setGaleriaAbierta(true)}
                                        className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                                    >
                                        Ver galería
                                    </button>
                                </div>

                                <div className="mt-3 grid grid-cols-5 gap-2 md:grid-cols-6 lg:grid-cols-10">
                                    {imagenes.map((imagen, index) => (
                                        <button
                                            key={`${imagen.url}-${index}`}
                                            type="button"
                                            onClick={() => setImagenActual(index)}
                                            className={`aspect-square overflow-hidden rounded-lg border-2 transition ${
                                                imagenActual === index ? 'border-blue-600' : 'border-transparent'
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
                            </div>
                        )}

                        {/* CONTENIDO */}
                        <div className="mx-auto max-w-3xl py-12">
                            <p className="text-xl font-medium leading-8 text-slate-700">
                                {noticia.descripcion_corta}
                            </p>

                            <div className="my-8 h-px bg-slate-200" />

                            <div className="whitespace-pre-line text-base leading-8 text-slate-600">
                                {noticia.descripcion}
                            </div>

                            <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6">
                                <Link
                                    href={route('web.noticias')}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Volver a noticias
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => navigator.share?.({ title: noticia.titulo, url: window.location.href })}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
                                >
                                    <Share2 className="h-4 w-4" />
                                    Compartir
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* GALERÍA EN PANTALLA COMPLETA */}
                {galeriaAbierta && imagenes.length > 0 && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4"
                        onMouseDown={(event) => event.target === event.currentTarget && setGaleriaAbierta(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setGaleriaAbierta(false)}
                            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                            aria-label="Cerrar"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <img
                            src={imagenes[imagenActual].url}
                            alt={imagenes[imagenActual].alt}
                            className="max-h-[85vh] max-w-[90vw] object-contain"
                        />

                        {imagenes.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={anteriorImagen}
                                    className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                                    aria-label="Imagen anterior"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>

                                <button
                                    type="button"
                                    onClick={siguienteImagen}
                                    className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                                    aria-label="Imagen siguiente"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>

                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white">
                                    {imagenActual + 1} / {imagenes.length}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </WebLayout>
        </>
    );
}