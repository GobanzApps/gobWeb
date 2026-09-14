import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import GobernacionNav from '@/components/Web/GobernacionNav';
import { FileText, Search, CalendarDays, ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';

interface Gaceta {
    id: number;
    titulo: string;
    descripcion: string | null;
    archivo: string;
    fecha: string;
    anio: string;
}

interface Props {
    gacetas: Gaceta[];
}

export default function Gacetas({ gacetas }: Props) {
    const [busqueda, setBusqueda] = useState('');
    const [anio, setAnio] = useState('todos');

    const anios = useMemo(() => {
        return [...new Set(gacetas.map((gaceta) => gaceta.anio))]
            .sort((a, b) => Number(b) - Number(a));
    }, [gacetas]);

    const gacetasFiltradas = useMemo(() => {
        const texto = busqueda.toLowerCase().trim();

        return gacetas.filter((gaceta) => {
            const coincideTexto =
                !texto ||
                gaceta.titulo.toLowerCase().includes(texto) ||
                gaceta.descripcion?.toLowerCase().includes(texto);

            const coincideAnio = anio === 'todos' || gaceta.anio === anio;

            return coincideTexto && coincideAnio;
        });
    }, [gacetas, busqueda, anio]);

    return (
        <>
            <Head title="Gacetas" />
            <WebLayout>
                <GobernacionNav activo="gacetas" />

                <div className="page-enter">
                    <section className="relative overflow-hidden bg-blue-950">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,64,175,0.3),transparent_50%)]" />
                        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
                            <div className="max-w-4xl">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-1 w-10 rounded-full bg-yellow-400" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                                        Gobernación
                                    </span>
                                </div>
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                                    Gacetas Oficiales
                                </h1>
                                <p className="mt-5 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Consulta las publicaciones oficiales de la Gobernación del Estado
                                    Anzoátegui y accede a sus documentos en formato PDF.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        value={busqueda}
                                        onChange={(e) => setBusqueda(e.target.value)}
                                        placeholder="Buscar gaceta..."
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                    />
                                </div>

                                <select
                                    value={anio}
                                    onChange={(e) => setAnio(e.target.value)}
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                >
                                    <option value="todos">Todos los años</option>
                                    {anios.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-blue-950">
                                    Publicaciones oficiales
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    {gacetasFiltradas.length} publicación(es) encontradas
                                </p>
                            </div>

                            {gacetasFiltradas.length > 0 ? (
                                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
                                    {gacetasFiltradas.map((gaceta) => (
                                        <article
                                            key={gaceta.id}
                                            className="group flex flex-col gap-5 p-6 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            <div className="flex min-w-0 gap-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                                    <FileText className="h-6 w-6" />
                                                </div>

                                                <div className="min-w-0">
                                                    <div className="mb-1 flex flex-wrap items-center gap-2">
                                                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                                                            <CalendarDays className="h-3.5 w-3.5" />
                                                            {gaceta.fecha}
                                                        </span>
                                                    </div>

                                                    <h3 className="font-bold text-blue-950 transition group-hover:text-blue-700">
                                                        {gaceta.titulo}
                                                    </h3>

                                                    {gaceta.descripcion && (
                                                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
                                                            {gaceta.descripcion}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <a
                                                href={gaceta.archivo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800"
                                            >
                                                Ver gaceta
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
                                    <FileText className="mx-auto mb-4 h-12 w-12 text-slate-300" />
                                    <h3 className="font-semibold text-slate-700">
                                        No se encontraron gacetas
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500">
                                        {gacetas.length === 0
                                            ? 'Actualmente no hay gacetas oficiales publicadas.'
                                            : 'Prueba modificando los criterios de búsqueda.'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
