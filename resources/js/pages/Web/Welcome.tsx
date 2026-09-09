import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Header from '@/components/Web/Header';
import Footer from '@/components/Web/Footer';
import {
    ArrowRight,
    CalendarDays,
    ChevronDown,
    Clock3,
    Facebook,
    Instagram,
    MapPin,
    Menu,
    X,
} from 'lucide-react';

const planes = [
    {
        titulo: 'Rehabilitación de la Vía Principal Barcelona – Lechería',
        estado: 'En ejecución',
        ubicacion: 'Barcelona, Anzoátegui',
        fecha: '15 de marzo de 2025',
        imagen: '/images/plan-1.jpeg',
    },
    {
        titulo: 'Construcción del Centro de Salud Integral',
        estado: 'En ejecución',
        ubicacion: 'Barcelona, Anzoátegui',
        fecha: '20 de abril de 2025',
        imagen: '/images/plan-2.jpeg',
    },
    {
        titulo: 'Recuperación de la U.E. José Antonio Anzoátegui',
        estado: 'Planificado',
        ubicacion: 'Anzoátegui',
        fecha: 'Próximamente',
        imagen: '/images/plan-3.jpeg',
    },
];

const noticias = [
    {
        categoria: 'Gobernación',
        titulo: 'Gobernador entrega equipos a comunidades de Barcelona',
        descripcion:
            'Más de 20 comunidades fueron beneficiadas con la entrega de equipos para mejorar sus servicios.',
        fecha: '12 de septiembre de 2026',
        imagen: '/images/noticia-1.jpg',
    },
    {
        categoria: 'Infraestructura',
        titulo: 'Avanzan trabajos de recuperación del Malecón de Lechería',
        descripcion:
            'La obra forma parte del plan de embellecimiento y fortalecimiento turístico del estado.',
        fecha: '10 de septiembre de 2026',
        imagen: '/images/noticia-2.jpg',
    },
    {
        categoria: 'Social',
        titulo: 'Jornadas de atención integral en el municipio Bolívar',
        descripcion:
            'Se brindaron servicios médicos, sociales y asistenciales a más de 400 familias.',
        fecha: '08 de septiembre de 2026',
        imagen: '/images/noticia-3.jpg',
    },
];

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

export default function Welcome() {
    const [menuAbierto, setMenuAbierto] = useState<string | null>(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [heroSlide, setHeroSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => { setHeroSlide((current) => (current + 1) % 3); }, 5000);
        return () => clearInterval(interval);
    }, []);

    const toggleMenu = (menu: string) => {
        setMenuAbierto(menuAbierto === menu ? null : menu);
    };

    return (
        <>
            <Head title="Gobernación del Estado Anzoátegui" />

            <Header />

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

                    <div className="absolute right-0 top-0 h-2 w-1/3 bg-yellow-400" />
                    <div className="absolute right-0 top-2 h-2 w-1/4 bg-green-600" />
                </section>

                {/* PLANES */}
                <section id="planes" className="relative overflow-hidden bg-slate-50 py-24">
                    <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div>
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="h-1 w-10 rounded-full bg-yellow-400" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                        Gestión
                                    </span>
                                </div>

                                <h2 className="text-4xl font-bold tracking-tight text-blue-950">
                                    Planes y proyectos
                                </h2>

                                <p className="mt-3 max-w-2xl text-slate-600">
                                    Impulsamos el desarrollo de nuestro estado con obras y proyectos que mejoran la calidad de vida de nuestra gente.
                                </p>
                            </div>

                            <Link href="planes" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                                Ver todos los planes
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-3">
                            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
                                <div className="grid md:grid-cols-2">
                                    <div className="h-72 md:h-full">
                                        <img
                                            src={planes[0].imagen}
                                            alt={planes[0].titulo}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="p-7">
                                        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                                            {planes[0].estado}
                                        </span>

                                        <h3 className="mt-4 text-2xl font-bold text-blue-950">
                                            {planes[0].titulo}
                                        </h3>

                                        <div className="mt-5 space-y-2 text-sm text-slate-500">
                                            <p className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-blue-600" />
                                                {planes[0].ubicacion}
                                            </p>

                                            <p className="flex items-center gap-2">
                                                <CalendarDays className="h-4 w-4 text-blue-600" />
                                                Inicio: {planes[0].fecha}
                                            </p>
                                        </div>

                                        <p className="mt-5 text-sm leading-relaxed text-slate-600">
                                            Mejora de la vialidad para garantizar una mejor conectividad y seguridad vial en la región.
                                        </p>

                                        <Link href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                                            Ver proyecto
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>

                            <div className="space-y-4">
                                {planes.slice(1).map((plan) => (
                                    <article
                                        key={plan.titulo}
                                        className="group flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <img
                                            src={plan.imagen}
                                            alt={plan.titulo}
                                            className="h-32 w-32 shrink-0 object-cover"
                                        />

                                        <div className="flex flex-1 flex-col justify-center p-4">
                                            <span
                                                className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold ${
                                                    plan.estado ===
                                                    'En ejecución'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                            >
                                                {plan.estado}
                                            </span>

                                            <h3 className="mt-2 line-clamp-2 text-sm font-bold text-blue-950">
                                                {plan.titulo}
                                            </h3>

                                            <span className="mt-2 text-xs text-blue-700">
                                                Ver proyecto →
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NOTICIAS */}
                <section id="noticias" className="bg-white py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-10 flex items-end justify-between">
                            <div>
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="h-1 w-10 rounded-full bg-green-600" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                        Información
                                    </span>
                                </div>

                                <h2 className="text-4xl font-bold text-blue-950">
                                    Últimas noticias
                                </h2>

                                <p className="mt-2 max-w-xl text-sm text-slate-500">
                                    Mantente informado sobre las novedades más importantes de nuestra gestión y del estado.
                                </p>
                            </div>

                            <Link href="#" className="hidden items-center gap-2 text-sm font-bold text-blue-700 sm:flex">
                                Ver todas las noticias
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {noticias.map((noticia) => (
                                <article
                                    key={noticia.titulo}
                                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={noticia.imagen}
                                            alt={noticia.titulo}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        <span className="absolute left-3 top-3 rounded-full bg-blue-700 px-3 py-1 text-[10px] font-bold text-white">
                                            {noticia.categoria}
                                        </span>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-xs text-slate-400">
                                            {noticia.fecha}
                                        </p>

                                        <h3 className="mt-2 line-clamp-2 font-bold text-blue-950">
                                            {noticia.titulo}
                                        </h3>

                                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">
                                            {noticia.descripcion}
                                        </p>

                                        <Link href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                                            Leer más
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

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

                            <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700">
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

                <Footer />
            </div>
        </>
    );
}