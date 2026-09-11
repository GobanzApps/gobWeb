import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import GobernacionNav from '@/components/Web/GobernacionNav';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Historia() {
    return (
        <>
            <Head title="Historia" />
            <WebLayout>
                <GobernacionNav activo="historia" />

                <div className="page-enter">
                    <section className="relative overflow-hidden bg-blue-950">
                        <div className="absolute inset-0">
                            <img
                                src="/images/historia-barcelona.jpg"
                                alt="Historia de Barcelona"
                                className="h-full w-full object-cover opacity-30"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/40" />
                        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
                            <div className="max-w-3xl">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-1 w-10 rounded-full bg-yellow-400" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                                        Gobernación
                                    </span>
                                </div>
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                                    Historia
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Conoce los acontecimientos y procesos históricos que dieron origen al actual Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-5xl px-6 lg:px-8">
                            <div className="mb-12 flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                        Nuestra historia
                                    </p>
                                    <h2 className="text-3xl font-bold text-blue-950">
                                        Estado Anzoátegui
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-6 text-base leading-8 text-slate-600">
                                <p>
                                    Con su nombre se rinde honor al prócer de la independencia
                                    venezolana, José Antonio Anzoátegui. Este estado fue llamado
                                    originalmente Provincia de Barcelona recibiendo esa denominación
                                    por la provincia de Barcelona en la actual España y mantuvo ese
                                    nombre desde principios del siglo XVIII hasta el año 1821. Luego
                                    entre 1830 y 1864, su nombre es reemplazado por el de «Estado
                                    Barcelona» nombre que mantuvo hasta 1909.
                                </p>
                                <p>
                                    La ciudad de Barcelona, que es la capital del estado, fue fundada
                                    por los colonos españoles en 1677 como “Nueva Barcelona del Cerro
                                    Santo” acortado después simplemente a Barcelona.
                                </p>
                                <p>
                                    El actual Estado Anzoátegui estuvo incluido también a la Provincia
                                    de Cumaná, que a su vez formaba parte de la Capitanía General de
                                    Venezuela, junto con otras provincias (Guayana, Maracaibo, Caracas,
                                    Margarita y Trinidad). En 1810 se separó de la provincia y fue en
                                    1909 cuando adquirió la actual distribución política.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="border-y border-slate-100 bg-slate-50 py-20">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mb-10">
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="h-1 w-10 rounded-full bg-green-600" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                        Patrimonio
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold text-blue-950">
                                    Huellas de nuestra historia
                                </h2>
                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                    Lugares emblemáticos que forman parte de la memoria histórica del Estado Anzoátegui.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <img
                                        src="/images/historia-barcelona.jpg"
                                        alt="Barcelona"
                                        className="h-56 w-full object-cover"
                                    />
                                    <div className="p-5">
                                        <h3 className="font-bold text-blue-950">Barcelona</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Capital del Estado Anzoátegui y ciudad fundada como Nueva Barcelona del Cerro Santo.
                                        </p>
                                    </div>
                                </article>

                                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <img
                                        src="/images/casa-fuerte-scaled.jpg"
                                        alt="La Casa Fuerte"
                                        className="h-56 w-full object-cover"
                                    />
                                    <div className="p-5">
                                        <h3 className="font-bold text-blue-950">La Casa Fuerte</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Uno de los espacios históricos más representativos de Barcelona.
                                        </p>
                                    </div>
                                </article>

                                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <img
                                        src="/images/casa-fuerte-2-scaled.jpg"
                                        alt="Patrimonio histórico"
                                        className="h-56 w-full object-cover"
                                    />
                                    <div className="p-5">
                                        <h3 className="font-bold text-blue-950">Patrimonio histórico</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Espacios que conservan parte de la memoria y el patrimonio del estado.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-16">
                        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 sm:flex-row sm:items-center lg:px-8">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                    Gobernación
                                </p>
                                <h2 className="mt-1 text-2xl font-bold text-blue-950">
                                    Explora nuestra información institucional
                                </h2>
                            </div>
                            <Link
                                href="/gobernacion/gacetas"
                                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
                            >
                                Explorar Gacetas
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
