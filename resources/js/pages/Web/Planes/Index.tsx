import WebLayout from '@/layouts/WebLayout';
import { Head, Link } from '@inertiajs/react';
import { CalendarDays, MapPin, ArrowRight, ClipboardList } from 'lucide-react';

interface Plan {
    id: number;
    titulo: string;
    descripcion: string;
    ubicacion: string;
    estado: string;
    fecha_inicio: string;
    fecha_estimada_finalizacion: string;
    imagen: string;
}

interface Props {
    planes: Plan[];
}

const estadoClasses: Record<string, string> = {
    'En ejecución': 'bg-blue-100 text-blue-700',
    'En planificación': 'bg-yellow-100 text-yellow-700',
    'Finalizado': 'bg-green-100 text-green-700',
};

const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString('es-VE', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

export default function Index({ planes }: Props) {
    return (
        <WebLayout>
            <Head title="Planes" />

            <section className="bg-slate-50 py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <div className="mb-4 flex items-center gap-3 text-blue-700">
                            <ClipboardList className="h-6 w-6" />
                            <span className="text-sm font-semibold uppercase tracking-wider">
                                Gestión gubernamental
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                            Planes y proyectos
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Conoce los principales proyectos impulsados por la
                            Gobernación del Estado Anzoátegui para el desarrollo
                            y bienestar de nuestras comunidades.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {planes.map((plan) => (
                            <article
                                key={plan.id}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative h-56 overflow-hidden bg-slate-200">
                                    <img
                                        src={plan.imagen}
                                        alt={plan.titulo}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <span
                                        className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold ${estadoClasses[plan.estado] ?? 'bg-slate-100 text-slate-700'}`}
                                    >
                                        {plan.estado}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl font-bold leading-snug text-slate-900">
                                        {plan.titulo}
                                    </h2>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                        {plan.descripcion}
                                    </p>

                                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <MapPin className="h-4 w-4 shrink-0 text-blue-600" />
                                            <span>{plan.ubicacion}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <CalendarDays className="h-4 w-4 shrink-0 text-blue-600" />
                                            <span>
                                                {formatDate(plan.fecha_inicio)}
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/planes/${plan.id}`}
                                        className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3"
                                    >
                                        Ver proyecto
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {planes.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
                            <ClipboardList className="mx-auto h-10 w-10 text-slate-400" />
                            <h2 className="mt-4 text-xl font-semibold text-slate-800">
                                No hay planes disponibles
                            </h2>
                            <p className="mt-2 text-slate-500">
                                Actualmente no existen proyectos publicados.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </WebLayout>
    );
}