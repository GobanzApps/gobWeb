import { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import { ArrowLeft, ArrowRight, CalendarDays, ChevronDown, ClipboardList, Clock3, Facebook, Instagram, MapPin, Menu, X, Newspaper } from 'lucide-react';

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

interface Noticia {
    id: number;
    titulo: string;
    descripcion_corta: string;
    descripcion: string;
    imagen_portada: string | null;
    fecha: string;
}

const eventos = [
    {
        dia: '18',
        mes: 'SEP',
        titulo: 'El Puerto Fest',
        hora: '09:00 AM',
        lugar: 'Plaza Bolívar, Barcelona',
    },
    {
        dia: '22',
        mes: 'SEP',
        titulo: 'Expoferia Agroproductiva',
        hora: '10:00 AM',
        lugar: 'Parque Andrés Eloy Blanco, Lechería',
    },
    {
        dia: '27',
        mes: 'SEP',
        titulo: 'Festival Playero',
        hora: '08:30 AM',
        lugar: 'Municipio Simón Rodríguez',
    },
];

export default function Welcome({ planes, noticias }: { planes: Plan[]; noticias: Noticia[] }) {
    const [menuAbierto, setMenuAbierto] = useState<string | null>(null);
    const [planSeleccionado, setPlanSeleccionado] = useState<Plan | null>(null);
    const [imagenActual, setImagenActual] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [heroSlide, setHeroSlide] = useState(0);

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

    const abrirPlan = (plan: Plan) => {
        setPlanSeleccionado(plan);
        setImagenActual(0);
    };

    const cerrarPlan = () => {
        setPlanSeleccionado(null);
        setImagenActual(0);
    };

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
        const interval = setInterval(() => {
            setHeroSlide((current) => (current + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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

    const toggleMenu = (menu: string) => {
        setMenuAbierto(menuAbierto === menu ? null : menu);
    };

    return (
        <>
            <Head title="Gobernación del Estado Anzoátegui" />

            <WebLayout>
                
                <div className="min-h-screen bg-white text-slate-900">

                    {/* HERO */}
                    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            {[
                                '/images/anzoategui-nuestro.jpeg',
                                '/images/basilica.png',
                                '/images/pto-cruz.png',
                            ].map((imagen, index) => (
                                <img
                                    key={imagen}
                                    src={imagen}
                                    alt="Anzoátegui"
                                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                                        index === heroSlide
                                            ? 'translate-x-0 scale-100 opacity-100'
                                            : index < heroSlide
                                            ? '-translate-x-full scale-105 opacity-0'
                                            : 'translate-x-full scale-105 opacity-0'
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent" />

                        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
                            <div className="max-w-xl text-white">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-1 w-12 rounded-full bg-yellow-400" />
                                    <span className="text-sm font-bold uppercase tracking-[0.2em]">
                                        Gobierno del Estado Anzoátegui
                                    </span>
                                </div>

                                <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                                    Trabajando por el desarrollo de nuestro estado
                                </h1>

                                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 sm:text-xl">
                                    Construyendo bienestar, oportunidades y un mejor futuro para todos los anzoatiguenses.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <a href="#planes" className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-blue-950 transition hover:bg-yellow-300">
                                        Conoce nuestra gestión
                                        <ArrowRight className="h-4 w-4" />
                                    </a>

                                    <a href="#noticias" className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                                        Últimas noticias
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
                            {[0, 1, 2].map((index) => (
                                <button
                                    key={index}
                                    onClick={() => setHeroSlide(index)}
                                    className={`h-2.5 rounded-full transition-all ${
                                        heroSlide === index
                                            ? 'w-8 bg-white'
                                            : 'w-2.5 bg-white/50 hover:bg-white/80'
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="absolute right-0 top-0 h-2 w-1/5 bg-blue-600" />
                        <div className="absolute right-0 top-2 h-2 w-1/6 bg-yellow-400" />
                        <div className="absolute right-0 top-4 h-2 w-1/7 bg-green-600" />
                    </section>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* PLANES */}
                    <section id="planes" className="relative overflow-hidden bg-slate-50 py-24">
                        <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl" />
                        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                                <div>
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="h-1 w-10 rounded-full bg-yellow-400" />
                                        <span className="text-sm font-bold uppercase tracking-wider text-blue-700">Gestión</span>
                                    </div>
                                    <h2 className="text-4xl font-bold tracking-tight text-blue-950">Planes y proyectos</h2>
                                    <p className="mt-3 max-w-2xl text-slate-600">
                                        Impulsamos el desarrollo de nuestro estado con obras y proyectos que mejoran la calidad de vida de nuestra gente.
                                    </p>
                                </div>
                                <Link href={route('web.planes')} className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                                    Ver todos los planes
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            {planes.length > 0 ? (
                                <div className="grid gap-4 lg:grid-cols-3">
                                    {/* PLAN DESTACADO */}
                                    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
                                        <div className="grid h-full md:grid-cols-2">
                                            <div className="min-h-[360px]">
                                                {planes[0].imagen_portada ? (
                                                    <img
                                                        src={planes[0].imagen_portada}
                                                        alt={planes[0].titulo}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full min-h-[360px] items-center justify-center bg-slate-100 text-sm text-slate-400">
                                                        Sin imagen
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-col justify-center p-7">
                                                {planes[0].estado && (
                                                    <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${estadoClasses[planes[0].estado] ?? 'bg-slate-100 text-slate-700'}`}>
                                                        {planes[0].estado}
                                                    </span>
                                                )}

                                                <h3 className="mt-4 text-2xl font-bold text-blue-950">{planes[0].titulo}</h3>

                                                <div className="mt-5 space-y-2 text-sm text-slate-500">
                                                    {planes[0].ubicacion && (
                                                        <p className="flex items-center gap-2">
                                                            <MapPin className="h-4 w-4 text-blue-600" />
                                                            {planes[0].ubicacion}
                                                        </p>
                                                    )}
                                                    {planes[0].fecha_inicio && (
                                                        <p className="flex items-center gap-2">
                                                            <CalendarDays className="h-4 w-4 text-blue-600" />
                                                            Inicio: {formatDate(planes[0].fecha_inicio)}
                                                        </p>
                                                    )}
                                                </div>

                                                <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-slate-600">
                                                    {planes[0].descripcion_corta}
                                                </p>

                                                <button
                                                    type="button"
                                                    onClick={() => abrirPlan(planes[0])}
                                                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                                                >
                                                    Ver proyecto
                                                    <ArrowRight className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </article>

                                    {/* 3 PLANES SECUNDARIOS */}
                                    <div className="flex flex-col gap-5">
                                        {planes.slice(1, 4).map((plan) => (
                                            <article
                                                key={plan.id}
                                                className="group flex min-h-[120px] flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                            >
                                                {plan.imagen_portada ? (
                                                    <img
                                                        src={plan.imagen_portada}
                                                        alt={plan.titulo}
                                                        className="h-full min-h-[120px] w-32 shrink-0 object-cover"
                                                    />
                                                ) : (
                                                    <div className="h-full min-h-[120px] w-32 shrink-0 bg-slate-100" />
                                                )}

                                                <div className="flex flex-1 flex-col justify-center p-4">
                                                    {plan.estado && (
                                                        <span className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold ${estadoClasses[plan.estado] ?? 'bg-slate-100 text-slate-700'}`}>
                                                            {plan.estado}
                                                        </span>
                                                    )}

                                                    <h3 className="mt-2 line-clamp-2 text-sm font-bold text-blue-950">{plan.titulo}</h3>

                                                    {plan.ubicacion && (
                                                        <div className="mt-1 space-y-2 text-sm text-slate-500">
                                                            <p className="flex items-center gap-2">
                                                                <MapPin className="h-4 w-4 text-blue-600" />
                                                                {plan.ubicacion}
                                                            </p>
                                                        </div>
                                                    )}

                                                    <button
                                                        type="button"
                                                        onClick={() => abrirPlan(plan)}
                                                        className="mt-2 w-fit text-xs font-medium text-blue-700 transition group-hover:text-blue-900"
                                                    >
                                                        Ver proyecto →
                                                    </button>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500">
                                    No hay planes y proyectos publicados actualmente.
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
                                            <img src={imagenes[imagenActual].url} alt={imagenes[imagenActual].alt} className="h-full w-full object-contain" />

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

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* NOTICIAS */}
                    <section id="noticias" className="bg-white py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mb-10 flex items-end justify-between">
                                <div>
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="h-1 w-10 rounded-full bg-green-600" />
                                        <span className="text-sm font-bold uppercase tracking-wider text-blue-700">Información</span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-blue-950">Últimas noticias</h2>
                                    <p className="mt-2 max-w-xl text-sm text-slate-500">
                                        Mantente informado sobre las novedades más importantes de nuestra gestión y del estado.
                                    </p>
                                </div>

                                <Link href={route('web.noticias')} className="hidden items-center gap-2 text-sm font-bold text-blue-700 sm:flex">
                                    Ver todas las noticias
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                {noticias.map((noticia) => (
                                    <Link
                                        key={noticia.id}
                                        href={route('web.noticia', noticia.id)}
                                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <article>
                                            <div className="relative h-48 overflow-hidden bg-slate-100">
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
                                                <span className="absolute left-3 top-3 rounded-full bg-blue-700 px-3 py-1 text-[10px] font-bold text-white">
                                                    Actualidad
                                                </span>
                                            </div>

                                            <div className="p-5">
                                                <p className="text-xs text-slate-400">{noticia.fecha}</p>
                                                <h3 className="mt-2 line-clamp-2 font-bold text-blue-950 transition group-hover:text-blue-700">
                                                    {noticia.titulo}
                                                </h3>
                                                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">
                                                    {noticia.descripcion_corta}
                                                </p>
                                                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                                                    Leer más
                                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                                </span>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* EVENTOS */}
                    <section id="eventos" className="border-y border-slate-100 bg-slate-50 py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                                <div>
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="h-1 w-10 rounded-full bg-yellow-400" />
                                        <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                            Agenda
                                        </span>
                                    </div>

                                    <h2 className="text-4xl font-bold text-blue-950">
                                        Próximos eventos
                                    </h2>

                                    <p className="mt-2 max-w-xl text-sm text-slate-500">
                                        Conoce las actividades, encuentros y jornadas que se realizarán próximamente en nuestro estado.
                                    </p>
                                </div>

                                <Link href="/eventos" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                                    Ver todos los eventos
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                {eventos.map((evento, index) => (
                                    <article
                                        key={evento.titulo}
                                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={
                                                    index === 0
                                                        ? '/images/evento-1.jpg'
                                                        : index === 1
                                                        ? '/images/evento-2.jpeg'
                                                        : '/images/evento-3.jpeg'
                                                }
                                                alt={evento.titulo}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5">
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-blue-800">
                                                    <CalendarDays className="h-3 w-3" />
                                                    {evento.dia} {evento.mes}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-blue-950">
                                                {evento.titulo}
                                            </h3>

                                            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">
                                                Disfruta y participa en esta actividad organizada para nuestra comunidad y visitantes del estado Anzoátegui.
                                            </p>

                                            <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                                                <p className="flex items-center gap-2 text-xs text-slate-500">
                                                    <Clock3 className="h-4 w-4 text-blue-600" />
                                                    {evento.hora}
                                                </p>

                                                <p className="flex items-center gap-2 text-xs text-slate-500">
                                                    <MapPin className="h-4 w-4 text-green-600" />
                                                    {evento.lugar}
                                                </p>
                                            </div>

                                            <Link href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                                                Ver detalles
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:flex-row">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                                        <CalendarDays className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-blue-950">
                                            ¿Buscas eventos que ya pasaron?
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Consulta nuestra agenda para conocer actividades realizadas anteriormente.
                                        </p>
                                    </div>
                                </div>

                                <Link href="#" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-700">
                                    Ver eventos pasados
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* GOBERNADOR */}
                    <section className="px-6 py-16 lg:px-8">
                        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-50">
                            <div className="grid md:grid-cols-2">
                                <div className="h-[420px] md:h-auto">
                                    <img
                                        src="/images/gobernador.jpg"
                                        alt="Gobernador del Estado Anzoátegui"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="relative flex items-center p-10 md:p-14">
                                    <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-20">
                                        <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[20px] border-green-500" />
                                    </div>

                                    <div className="relative">
                                        <div className="text-7xl font-serif leading-none text-blue-600">
                                            “
                                        </div>

                                        <blockquote className="max-w-xl text-2xl font-bold italic leading-relaxed text-blue-950 md:text-3xl">
                                            La palabra tiene poder, pero nuestra gestión mucho más que palabras son obras de bienestar colectivo.
                                        </blockquote>

                                        <div className="mt-7">
                                            <p className="font-bold text-blue-900">
                                                Luis Marcano
                                            </p>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Gobernador del Estado Anzoátegui
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </WebLayout>
        </>
    );
}