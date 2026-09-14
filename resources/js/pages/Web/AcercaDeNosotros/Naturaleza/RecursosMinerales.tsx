import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Factory, Gem, Pickaxe } from 'lucide-react';

export default function RecursosMinerales() {
    const recursos = [
        {
            nombre: 'Arenas silíceas',
            descripcion: 'Recurso mineral presente entre los recursos naturales identificados en el Estado Anzoátegui.',
        },
        {
            nombre: 'Caliza',
            descripcion: 'Roca de importancia dentro de los recursos minerales presentes en la entidad.',
        },
        {
            nombre: 'Carbón',
            descripcion: 'Recurso mineral que forma parte de la diversidad de recursos naturales del estado.',
        },
        {
            nombre: 'Petróleo',
            descripcion: 'Uno de los principales recursos energéticos asociados al territorio de Anzoátegui.',
        },
        {
            nombre: 'Gas natural',
            descripcion: 'Recurso energético que forma parte de la riqueza natural y productiva del estado.',
        },
    ];

    return (
        <>
            <Head title="Recursos Minerales" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="naturaleza" activo="recursosMinerales" />

                <div className="page-enter">
                    {/* HERO */}
                    <section className="relative overflow-hidden bg-blue-950">
                        <div className="absolute inset-x-0 bottom-0 flex h-2">
                            <div className="w-1/3 bg-blue-600" />
                            <div className="w-1/3 bg-yellow-400" />
                            <div className="w-1/3 bg-green-600" />
                        </div>

                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="relative max-w-4xl">
                                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                                    Naturaleza
                                </p>

                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                                    Recursos Minerales
                                </h1>

                                <div className="mt-7 h-1 w-24 bg-yellow-400" />

                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Conoce la diversidad de recursos naturales y energéticos
                                    presentes en el territorio del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* INTRODUCCIÓN */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-50 text-yellow-700">
                                        <Gem className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-700">
                                        Riqueza natural
                                    </p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    Diversidad de recursos en Anzoátegui
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                    <p>
                                        El Estado Anzoátegui se distingue por la diversidad de
                                        recursos naturales presentes en su territorio, entre
                                        los cuales se encuentran recursos minerales y energéticos
                                        de importancia para la entidad.
                                    </p>

                                    <p>
                                        Entre los recursos identificados se encuentran las
                                        <strong className="font-semibold text-slate-900"> arenas silíceas, caliza, carbón,
                                        petróleo y gas natural</strong>, elementos que forman
                                        parte de la riqueza natural del estado.
                                    </p>

                                    <p>
                                        Esta variedad refleja las características geológicas y
                                        territoriales de Anzoátegui, donde convergen diferentes
                                        paisajes y formaciones naturales.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <img
                                    src="/images/RecursosMinerales/RecursosMinerales1.jpeg"
                                    alt="Arena presente entre los recursos naturales de Anzoátegui"
                                    className="h-[480px] w-full object-cover"
                                />
                                <div className="border-t border-slate-100 p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                                        Recursos naturales
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        Arenas silíceas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* RECURSOS */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-700">
                                    Recursos identificados
                                </p>

                                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                    Riqueza mineral y energética
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <p className="mt-6 text-base leading-8 text-slate-600">
                                    La diversidad de recursos naturales de Anzoátegui comprende
                                    tanto materiales minerales como recursos energéticos.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                                {recursos.map((recurso, index) => (
                                    <article
                                        key={recurso.nombre}
                                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                            <span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                                        </div>

                                        <h3 className="mt-5 text-lg font-bold text-slate-900">
                                            {recurso.nombre}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            {recurso.descripcion}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ACTIVIDAD EXTRACTIVA */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[420px_1fr] lg:items-center">
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <img
                                    src="/images/RecursosMinerales/RecursosMinerales2.jpeg"
                                    alt="Maquinaria utilizada en actividades extractivas"
                                    className="h-[500px] w-full object-cover"
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Pickaxe className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Aprovechamiento de recursos
                                    </p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    Recursos y actividad productiva
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                    <p>
                                        Los recursos minerales y energéticos forman parte de
                                        las características naturales que distinguen al Estado
                                        Anzoátegui y se relacionan con distintas actividades
                                        productivas desarrolladas en su territorio.
                                    </p>

                                    <p>
                                        La presencia de petróleo y gas natural destaca dentro
                                        del conjunto de recursos energéticos, mientras que
                                        materiales como las arenas silíceas, la caliza y el
                                        carbón forman parte de los recursos minerales
                                        identificados en la entidad.
                                    </p>

                                    <p>
                                        La explotación y aprovechamiento de estos recursos
                                        requiere procesos técnicos y maquinaria especializada,
                                        dentro de las actividades asociadas al sector
                                        extractivo.
                                    </p>
                                </div>

                                <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
                                    <div className="flex items-start gap-4">
                                        <Factory className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                                        <p className="text-sm leading-7 text-slate-600">
                                            Los recursos naturales constituyen parte del
                                            patrimonio territorial de Anzoátegui y representan
                                            un elemento relevante de su realidad económica y
                                            productiva.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                                Riqueza natural
                            </p>

                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                Los recursos minerales y energéticos forman parte de la
                                diversidad natural del Estado Anzoátegui y de las
                                características que distinguen su territorio.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
