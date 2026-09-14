import WebLayout from '@/layouts/WebLayout';
import { Head } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, CalendarDays, ClipboardList, MapPin, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Imagen {
    url: string;
    alt: string;
}

interface Plan {
    id: number;
    titulo: string;
    descripcion_corta: string;
    descripcion: string;
    ubicacion: string | null;
    estado: string | null;
    fecha_inicio: string | null;
    fecha_estimada_finalizacion: string | null;
    imagen_portada: string | null;
    imagenes: Imagen[];
}

interface Props { planes: Plan[]; }

const estadoClasses: Record<string, string> = {
    'En ejecución': 'bg-blue-100 text-blue-700',
    'En planificación': 'bg-yellow-100 text-yellow-700',
    'Finalizado': 'bg-green-100 text-green-700',
};

const formatDate = (date: string | null) =>
    date
        ? new Date(`${date}T00:00:00`).toLocaleDateString('es-VE', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
          })
        : 'No definida';

export default function Index({ planes }: Props) {
    const [planSeleccionado, setPlanSeleccionado] = useState<Plan | null>(null);
    const [imagenActual, setImagenActual] = useState(0);

    const abrirPlan = (plan: Plan) => {
        setPlanSeleccionado(plan);
        setImagenActual(0);
    };

    const cerrarPlan = () => {
        setPlanSeleccionado(null);
        setImagenActual(0);
    };

    // La portada ocupa la posición 0 y la galería continúa después.
    const imagenes = planSeleccionado
        ? [
              ...(planSeleccionado.imagen_portada
                  ? [{ url: planSeleccionado.imagen_portada, alt: planSeleccionado.titulo }]
                  : []),
              ...planSeleccionado.imagenes,
          ]
        : [];

    const siguienteImagen = () => {
        if (!imagenes.length) return;
        setImagenActual((actual) => (actual + 1) % imagenes.length);
    };

    const anteriorImagen = () => {
        if (!imagenes.length) return;
        setImagenActual((actual) => (actual - 1 + imagenes.length) % imagenes.length);
    };

    useEffect(() => {
        if (!planSeleccionado) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') cerrarPlan();
            if (event.key === 'ArrowRight') siguienteImagen();
            if (event.key === 'ArrowLeft') anteriorImagen();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [planSeleccionado, imagenes.length]);

    return (
        <WebLayout>
            <Head title="Planes y proyectos" />

            <section className="bg-slate-50 py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <div className="mb-4 flex items-center gap-3 text-blue-700">
                            <ClipboardList className="h-6 w-6" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Gestión gubernamental</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Planes y proyectos</h1>
                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Conoce los principales proyectos impulsados por la Gobernación del Estado Anzoátegui para el desarrollo y bienestar de nuestras comunidades.
                        </p>
                    </div>

                    {planes.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {planes.map((plan) => (
                                <article
                                    key={plan.id}
                                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="relative h-56 overflow-hidden bg-slate-200">
                                        {plan.imagen_portada ? (
                                            <img
                                                src={plan.imagen_portada}
                                                alt={plan.titulo}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-slate-400">
                                                <ClipboardList className="h-14 w-14" />
                                            </div>
                                        )}

                                        {plan.estado && (
                                            <span className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold ${estadoClasses[plan.estado] ?? 'bg-slate-100 text-slate-700'}`}>
                                                {plan.estado}
                                            </span>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <h2 className="text-xl font-bold leading-snug text-slate-900">{plan.titulo}</h2>

                                        <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
                                            {plan.descripcion_corta}
                                        </p>

                                        <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                                            {plan.ubicacion && (
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <MapPin className="h-4 w-4 shrink-0 text-blue-600" />
                                                    <span>{plan.ubicacion}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <CalendarDays className="h-4 w-4 shrink-0 text-blue-600" />
                                                <span>Inicio: {formatDate(plan.fecha_inicio)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <CalendarDays className="h-4 w-4 shrink-0 text-blue-600" />
                                                <span>Finalización: {formatDate(plan.fecha_estimada_finalizacion)}</span>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => abrirPlan(plan)}
                                            className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-700 transition-all group-hover:gap-3"
                                        >
                                            Ver proyecto <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
                            <ClipboardList className="mx-auto h-10 w-10 text-slate-400" />
                            <h2 className="mt-4 text-xl font-semibold text-slate-800">No hay planes disponibles</h2>
                            <p className="mt-2 text-slate-500">Actualmente no existen proyectos publicados.</p>
                        </div>
                    )}
                </div>
            </section>

            {planSeleccionado && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
                    onMouseDown={(event) => event.target === event.currentTarget && cerrarPlan()}
                >
                    <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl lg:flex-row">
                        <button
                            type="button"
                            onClick={cerrarPlan}
                            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                            aria-label="Cerrar"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="relative flex min-h-[280px] bg-slate-950 lg:min-h-[620px] lg:w-3/5">
                            {imagenes.length > 0 ? (
                                <>
                                    <img src={imagenes[imagenActual].url} alt={imagenes[imagenActual].alt} className="h-full w-full object-contain"/>

                                    {imagenes.length > 1 && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={anteriorImagen}
                                                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                                                aria-label="Imagen anterior"
                                            >
                                                <ArrowLeft className="h-5 w-5" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={siguienteImagen}
                                                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                                                aria-label="Imagen siguiente"
                                            >
                                                <ArrowRight className="h-5 w-5" />
                                            </button>
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                                                {imagenActual === 0 && planSeleccionado.imagen_portada ? 'Portada' : `${imagenActual + 1} / ${imagenes.length}`}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-slate-500">
                                    <ClipboardList className="h-20 w-20" />
                                </div>
                            )}
                        </div>

                        <div className="overflow-y-auto p-7 lg:w-2/5 lg:p-9">
                            <div className="pr-8">
                                {planSeleccionado.estado && (
                                    <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${estadoClasses[planSeleccionado.estado] ?? 'bg-slate-100 text-slate-700'}`}>
                                        {planSeleccionado.estado}
                                    </span>
                                )}

                                <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900">{planSeleccionado.titulo}</h2>

                                <div className="mt-6 space-y-4 border-y border-slate-200 py-6">
                                    {planSeleccionado.ubicacion && (
                                        <div className="flex gap-3">
                                            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Ubicación</p>
                                                <p className="mt-1 text-sm font-medium text-slate-700">{planSeleccionado.ubicacion}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex gap-3">
                                        <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Fecha de inicio</p>
                                            <p className="mt-1 text-sm font-medium text-slate-700">{formatDate(planSeleccionado.fecha_inicio)}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Finalización estimada</p>
                                            <p className="mt-1 text-sm font-medium text-slate-700">{formatDate(planSeleccionado.fecha_estimada_finalizacion)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">Descripción del proyecto</h3>
                                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{planSeleccionado.descripcion}</p>
                                </div>

                                {imagenes.length > 1 && (
                                    <div className="mt-7">
                                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-900">Galería</h3>
                                        <div className="grid grid-cols-4 gap-2">
                                            {imagenes.map((imagen, index) => (
                                                <button
                                                    key={`${imagen.url}-${index}`}
                                                    type="button"
                                                    onClick={() => setImagenActual(index)}
                                                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition ${imagenActual === index ? 'border-blue-600' : 'border-transparent'}`}
                                                >
                                                    <img src={imagen.url} alt={imagen.alt} className="h-full w-full object-cover" />
                                                    {index === 0 && planSeleccionado.imagen_portada && (
                                                        <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
                                                            Portada
                                                        </span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </WebLayout>
    );
}