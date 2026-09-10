import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import { ArrowRight, CalendarDays, Newspaper } from 'lucide-react';

interface Noticia {
    id: number;
    titulo: string;
    descripcion_corta: string;
    descripcion: string;
    imagen_portada: string | null;
    fecha: string;
    imagenes: {
        url: string;
        alt: string;
    }[];
}

interface Props {
    noticias: Noticia[];
}

export default function Index({ noticias }: Props) {
    const noticiaPrincipal = noticias[0];
    const noticiasRestantes = noticias.slice(1);

    return (
        <>
            <Head title="Noticias" />
            <WebLayout>
                <section className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-6xl px-5 lg:px-8">
                        <div className="mb-12">
                            <div className="mb-4 flex items-center gap-3 text-blue-700">
                                <Newspaper className="h-6 w-6" />
                                <span className="text-sm font-semibold uppercase tracking-widest">Actualidad</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Noticias</h1>
                            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                                Conoce las últimas noticias, acciones y acontecimientos de la Gobernación del Estado Anzoátegui.
                            </p>
                        </div>

                        {noticias.length > 0 ? (
                            <>
                                {/* NOTICIA PRINCIPAL */}
                                <article className="mb-12 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                                    <div className="grid lg:grid-cols-2">
                                        <div className="h-72 overflow-hidden bg-slate-200 lg:h-[400px]">
                                            {noticiaPrincipal.imagen_portada ? (
                                                <img
                                                    src={noticiaPrincipal.imagen_portada}
                                                    alt={noticiaPrincipal.titulo}
                                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-slate-400">
                                                    <Newspaper className="h-16 w-16" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col justify-center p-8 lg:p-12">
                                            <span className="text-sm font-bold uppercase tracking-wider text-blue-700">Actualidad</span>
                                            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
                                                {noticiaPrincipal.titulo}
                                            </h2>
                                            <p className="mt-5 leading-7 text-slate-600">
                                                {noticiaPrincipal.descripcion_corta}
                                            </p>
                                            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                                                <CalendarDays className="h-4 w-4 text-blue-600" />
                                                {noticiaPrincipal.fecha}
                                            </div>
                                            <Link
                                                href={route('web.noticia', noticiaPrincipal.id)}
                                                className="mt-7 flex w-fit items-center gap-2 font-semibold text-blue-700 transition hover:gap-3 hover:text-blue-900"
                                            >
                                                Leer noticia
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>

                                {/* LISTADO */}
                                {noticiasRestantes.length > 0 && (
                                    <div className="border-t border-slate-200">
                                        {noticiasRestantes.map((noticia) => (
                                            <article
                                                key={noticia.id}
                                                className="group grid gap-6 border-b border-slate-200 py-8 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]"
                                            >
                                                <div className="h-52 overflow-hidden rounded-xl bg-slate-200 md:h-48">
                                                    {noticia.imagen_portada ? (
                                                        <img
                                                            src={noticia.imagen_portada}
                                                            alt={noticia.titulo}
                                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full items-center justify-center text-slate-400">
                                                            <Newspaper className="h-10 w-10" />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex flex-col justify-center">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Actualidad</span>
                                                    <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 transition group-hover:text-blue-800">
                                                        {noticia.titulo}
                                                    </h2>
                                                    <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                                                        {noticia.descripcion_corta}
                                                    </p>
                                                    <div className="mt-4 flex flex-wrap items-center gap-5">
                                                        <span className="flex items-center gap-2 text-sm text-slate-500">
                                                            <CalendarDays className="h-4 w-4 text-blue-600" />
                                                            {noticia.fecha}
                                                        </span>
                                                        <Link
                                                            href={route('web.noticia', noticia.id)}
                                                            className="flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3"
                                                        >
                                                            Leer noticia
                                                            <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="rounded-2xl border border-dashed bg-white px-6 py-16 text-center">
                                <Newspaper className="mx-auto mb-4 h-12 w-12 text-slate-400" />
                                <h2 className="text-lg font-semibold text-slate-900">No hay noticias disponibles</h2>
                                <p className="mt-2 text-sm text-slate-500">
                                    Actualmente no hay noticias publicadas.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </WebLayout>
        </>
    );
}
