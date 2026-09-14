import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';

export default function Escudo() {
    return (
        <>
            <Head title="Escudo de Armas" />

            <WebLayout>
                <AcercaDeNosotrosNav seccion="simbolosPatrimoniales" activo="escudo" />

                <div className="page-enter">
                    <section className="relative overflow-hidden bg-blue-950">
                        <div className="absolute inset-x-0 bottom-0 flex h-2">
                            <div className="w-1/3 bg-blue-600" />
                            <div className="w-1/3 bg-yellow-400" />
                            <div className="w-1/3 bg-green-600" />
                        </div>

                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="relative max-w-4xl">
                                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                                    Símbolos Patrimoniales
                                </p>
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                                    Escudo de Armas
                                </h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Conoce los elementos que conforman el Escudo de Armas del Estado Anzoátegui y su significado histórico.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Escudo de Armas del Estado
                            </h2>
                            <div className="mt-4 h-1 w-16 bg-yellow-400" />
                            <p className="mt-6 text-base leading-8 text-slate-600">
                                El Escudo de Armas del Estado Anzoátegui fue adoptado oficialmente el 9 de septiembre de 1933 y constituye el emblema que sintetiza la historia, la identidad y los valores de la región.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8">
                                <img
                                    src="/images/Escudo/EscudoAnzoategui.png"
                                    alt="Escudo de Armas del Estado Anzoátegui"
                                    className="max-h-[520px] w-auto object-contain"
                                />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Elementos del escudo
                                </h2>
                                <div className="mt-3 h-1 w-12 bg-yellow-400" />

                                <div className="mt-8 space-y-8">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span className="h-3 w-3 shrink-0 rounded-full bg-yellow-400" />
                                            <h3 className="text-lg font-bold text-slate-900">
                                                Cuartel superior
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-base leading-7 text-slate-600">
                                            Sobre un campo de oro se alza una fortaleza, representación de la <strong className="font-semibold text-slate-900">Casa Fuerte de Barcelona</strong>, escenario de heroicas luchas por la independencia.
                                        </p>
                                        <p className="mt-3 text-base leading-7 text-slate-600">
                                            En su parte superior se posa un <strong className="font-semibold text-slate-900">ave fénix</strong>, emblema del renacimiento de la patria, mientras que a ambos lados se muestran <strong className="font-semibold text-slate-900">cadenas rotas</strong>, símbolo de la libertad conquistada y de la abolición de la esclavitud.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span className="h-3 w-3 shrink-0 rounded-full bg-blue-600" />
                                            <h3 className="text-lg font-bold text-slate-900">
                                                Cuartel inferior
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-base leading-7 text-slate-600">
                                            Sobre un campo de azur se representa un <strong className="font-semibold text-slate-900">toro de plata</strong> en actitud de avance, que simboliza la riqueza agropecuaria y el potencial productivo del estado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                                <h2 className="text-xl font-bold text-slate-900">
                                    Ornamentos exteriores
                                </h2>
                                <div className="mt-3 h-1 w-12 bg-yellow-400" />
                                <p className="mt-5 text-base leading-8 text-slate-600">
                                    El escudo está coronado por un <strong className="font-semibold text-slate-900">sol naciente de oro</strong>, expresión de la ubicación oriental de la entidad y de la esperanza en un porvenir próspero.
                                </p>
                                <p className="mt-5 text-base leading-8 text-slate-600">
                                    Detrás del escudo se cruzan <strong className="font-semibold text-slate-900">dos cañones de bronce</strong>, acompañados de ramas de laurel, que evocan las glorias militares y la victoria alcanzada en las luchas de independencia.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                                <h2 className="text-xl font-bold text-slate-900">
                                    Divisa
                                </h2>
                                <div className="mt-3 h-1 w-12 bg-yellow-400" />
                                <p className="mt-5 text-base leading-8 text-slate-600">
                                    En la parte inferior, una cinta de plata ostenta la inscripción:
                                </p>
                                <blockquote className="mt-6 border-l-4 border-yellow-400 pl-5 text-xl font-semibold italic text-blue-950">
                                    «Tumba de sus tiranos»
                                </blockquote>
                                <p className="mt-5 text-base leading-8 text-slate-600">
                                    Esta inscripción recuerda la <strong className="font-semibold text-slate-900">Batalla de Urica</strong>, donde cayó el jefe realista José Tomás Boves.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center shadow-sm sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                                Símbolo de identidad
                            </p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                La Bandera del Estado Anzoátegui constituye un <strong className="font-semibold text-white">
                                símbolo de identidad y pertenencia
                                </strong>, representando a través de sus colores y elementos las
                                características naturales, territoriales y culturales de la entidad.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
