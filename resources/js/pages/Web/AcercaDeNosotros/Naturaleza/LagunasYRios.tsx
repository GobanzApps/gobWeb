import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Droplets, Fish, Map, Waves } from 'lucide-react';

export default function LagunasRios() {
    const galeria = [
        { archivo: 'LagunasYRios1.jpg', tipo: 'Río', texto: 'Paisaje fluvial' },
        { archivo: 'LagunasYRios2.jpg', tipo: 'Laguna', texto: 'Ambiente acuático' },
        { archivo: 'LagunasYRios3.jpg', tipo: 'Laguna', texto: 'Ambiente acuático' },
        { archivo: 'LagunasYRios4.jpg', tipo: 'Río', texto: 'Paisaje fluvial al atardecer' },
        { archivo: 'LagunasYRios5.jpg', tipo: 'Río', texto: 'Paisaje fluvial' },
    ];

    return (
        <>
            <Head title="Lagunas y Ríos" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="naturaleza" activo="lagunasRios" />

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
                                    Lagunas y Ríos
                                </h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Conoce los principales espacios de agua que forman parte
                                    del paisaje natural y la riqueza ambiental del Estado
                                    Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* INTRODUCCIÓN */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Droplets className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Recursos hídricos
                                    </p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    Lagunas y cuerpos de agua
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                    <p>
                                        El Estado Anzoátegui cuenta con diversos cuerpos de
                                        agua que forman parte de sus paisajes naturales y
                                        contribuyen a la diversidad de ambientes presentes en
                                        la entidad.
                                    </p>

                                    <p>
                                        Entre sus principales lagunas destacan la
                                        <strong className="font-semibold text-slate-900"> Laguna de Unare</strong>
                                        y la <strong className="font-semibold text-slate-900">Laguna de Píritu</strong>,
                                        pertenecientes al sistema lagunar Unare-Píritu.
                                    </p>

                                    <p>
                                        Estos espacios poseen importancia ambiental y
                                        constituyen hábitats para distintas especies de fauna,
                                        especialmente aves asociadas a los ambientes
                                        acuáticos.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <img
                                    src="/images/LagunasYRios/LagunaUnare.jpg"
                                    alt="Laguna de Unare"
                                    className="h-[480px] w-full object-cover"
                                />
                                <div className="border-t border-slate-100 p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                                        Laguna destacada
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        Laguna de Unare
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* LAGUNAS DESTACADAS */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                    Lagunas destacadas
                                </p>
                                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                    Unare y Píritu
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                <p className="mt-6 text-base leading-8 text-slate-600">
                                    Dos de los cuerpos de agua más representativos del
                                    territorio anzoatiguense forman parte del sistema lagunar
                                    Unare-Píritu.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-6 lg:grid-cols-2">
                                {/* UNARE */}
                                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <div className="grid sm:grid-cols-2">
                                        <img
                                            src="/images/LagunasYRios/LagunaUnare.jpg"
                                            alt="Laguna de Unare"
                                            className="h-full min-h-[280px] w-full object-cover"
                                        />
                                        <img
                                            src="/images/LagunasYRios/LagunaUnareAnimales.jpg"
                                            alt="Fauna de la Laguna de Unare"
                                            className="h-full min-h-[280px] w-full object-cover"
                                        />
                                    </div>

                                    <div className="p-7">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                            <Waves className="h-5 w-5" />
                                        </div>

                                        <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                            Laguna de Unare
                                        </h3>

                                        <div className="mt-4 h-1 w-12 bg-yellow-400" />

                                        <p className="mt-5 text-base leading-8 text-slate-600">
                                            La Laguna de Unare forma parte del sistema lagunar
                                            Unare-Píritu y destaca por la diversidad de aves
                                            que encuentran en este ambiente un espacio de
                                            refugio y desarrollo.
                                        </p>

                                        <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                                            <Fish className="h-5 w-5 text-blue-700" />
                                            <p className="text-sm font-semibold text-slate-600">
                                                Ambiente natural y fauna silvestre
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                {/* PÍRITU */}
                                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <div className="grid sm:grid-cols-2">
                                        <img
                                            src="/images/LagunasYRios/LagunaPiritu.jpg"
                                            alt="Laguna de Píritu"
                                            className="h-full min-h-[280px] w-full object-cover"
                                        />
                                        <img
                                            src="/images/LagunasYRios/LagunaPirituAnimales.jpg"
                                            alt="Fauna de la Laguna de Píritu"
                                            className="h-full min-h-[280px] w-full object-cover"
                                        />
                                    </div>

                                    <div className="p-7">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-50 text-yellow-700">
                                            <Waves className="h-5 w-5" />
                                        </div>

                                        <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                            Laguna de Píritu
                                        </h3>

                                        <div className="mt-4 h-1 w-12 bg-yellow-400" />

                                        <p className="mt-5 text-base leading-8 text-slate-600">
                                            La Laguna de Píritu integra junto con la Laguna de
                                            Unare uno de los sistemas lagunares característicos
                                            del Estado Anzoátegui, formando parte de sus
                                            ambientes naturales y costeros.
                                        </p>

                                        <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                                            <Fish className="h-5 w-5 text-yellow-700" />
                                            <p className="text-sm font-semibold text-slate-600">
                                                Paisaje natural y fauna acuática
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* HUMEDALES Y FAUNA */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[420px_1fr] lg:items-center">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Fish className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Fauna y conservación
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <div className="border-l-4 border-blue-600 pl-4">
                                        <p className="font-bold text-slate-900">Aves</p>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Diversas especies encuentran refugio en estos
                                            ambientes acuáticos.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-yellow-400 pl-4">
                                        <p className="font-bold text-slate-900">Humedales</p>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Espacios naturales vinculados al equilibrio de
                                            los ecosistemas.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-green-600 pl-4">
                                        <p className="font-bold text-slate-900">Biodiversidad</p>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Ambientes donde interactúan diferentes especies
                                            de flora y fauna.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                    Ambientes acuáticos
                                </p>

                                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                    Espacios de vida y biodiversidad
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                    <p>
                                        Las lagunas y humedales del estado constituyen espacios
                                        donde interactúan diferentes elementos naturales,
                                        desde el agua y la vegetación hasta las especies de
                                        fauna que dependen de estos ambientes.
                                    </p>

                                    <p>
                                        Entre las especies que pueden observarse en estos
                                        espacios destacan diferentes aves acuáticas y
                                        migratorias, incluyendo la presencia de flamencos
                                        en determinados ambientes lagunares.
                                    </p>

                                    <p>
                                        El Parque Laguna Rómulo Gallegos, ubicado en Lechería,
                                        constituye además un espacio asociado a este tipo de
                                        ambiente natural y a la observación de fauna.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* GALERÍA */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                    Paisajes acuáticos
                                </p>

                                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                    Lagunas y Ríos de Anzoátegui
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <p className="mt-6 text-base leading-8 text-slate-600">
                                    Una selección de paisajes que muestra la diversidad de
                                    ambientes acuáticos presentes en el territorio
                                    anzoatiguense.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {galeria.map((imagen, index) => (
                                    <div
                                        key={imagen.archivo}
                                        className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${index === 0 || index === 4 ? 'lg:col-span-1' : ''}`}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={`/images/LagunasYRios/${imagen.archivo}`}
                                                alt={imagen.texto}
                                                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
                                                <p className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                                                    {imagen.tipo}
                                                </p>
                                                <p className="mt-1 text-sm font-semibold text-white">
                                                    {imagen.texto}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* RÍOS */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Map className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Ríos y territorio
                                    </p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    El agua como parte del territorio
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                    <p>
                                        Los ríos y cursos de agua forman parte de la
                                        configuración natural del Estado Anzoátegui y
                                        contribuyen a la diversidad de paisajes que se
                                        extienden desde las zonas interiores hasta el
                                        territorio costero.
                                    </p>

                                    <p>
                                        Estos cuerpos de agua mantienen una relación directa
                                        con los ecosistemas que atraviesan, aportando
                                        condiciones para el desarrollo de distintas especies
                                        de flora y fauna.
                                    </p>

                                    <p>
                                        Junto con las lagunas, los ríos representan una parte
                                        importante del patrimonio natural y paisajístico de
                                        la entidad.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                    <Droplets className="h-7 w-7" />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    Riqueza hídrica
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    Lagunas, ríos y otros cuerpos de agua conforman ambientes
                                    naturales que enriquecen el paisaje y la biodiversidad
                                    del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center shadow-sm sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                                Patrimonio natural
                            </p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                Las lagunas y ríos del Estado Anzoátegui forman parte de su
                                <strong className="font-semibold text-white"> patrimonio natural y paisajístico</strong>,
                                aportando espacios de valor ambiental y contribuyendo a la
                                diversidad de ecosistemas presentes en la entidad.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}