import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';

export default function Bandera() {
    return (
        <>
            <Head title="Bandera" />

            <WebLayout>
                <AcercaDeNosotrosNav seccion="simbolosPatrimoniales" activo="bandera" />

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
                                    Bandera
                                </h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Conoce la historia, diseño y significado de la bandera oficial del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Bandera del Estado
                            </h2>
                            <div className="mt-4 h-1 w-16 bg-yellow-400" />
                            <p className="mt-6 text-base leading-8 text-slate-600">
                                La Bandera del estado Anzoátegui es el pabellón oficial de la entidad. Su diseño fue expuesto el 19 de mayo de 1999 y oficialmente establecida mediante el Decreto Nº 138 del 16 de junio de 1999.
                            </p>
                        </div>

                        <div className="mt-16 max-w-5xl">
                            <h2 className="text-2xl font-bold text-slate-900">
                                Origen de la bandera
                            </h2>
                            <div className="mt-3 h-1 w-12 bg-yellow-400" />
                            <p className="mt-5 text-base leading-8 text-slate-600">
                                Fue producto de un concurso organizado por iniciativa del historiador Maximilian Kopp Marcano y realizado por la Dirección de Cultura del estado, bajo la dirección de Enrique Hidalgo el 25 de febrero de 1999.
                            </p>
                            <p className="mt-5 text-base leading-8 text-slate-600">
                                El jurado, integrado también por otros connotados representantes de la región, recolectó 152 proyectos, del cual resultó ganador la propuesta hecha por Lemarys del Valle Rincones, de Puerto La Cruz.
                            </p>
                            <p className="mt-5 text-base leading-8 text-slate-600">
                                El resultado fue hecho público el 19 de mayo de 1999 y la bandera del estado fue oficialmente establecida mediante el Decreto Nº 138, firmado por el entonces Gobernador, Alexis Rosas, el 16 de junio de 1999.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Diseño y construcción
                                </h2>
                                <div className="mt-3 h-1 w-12 bg-yellow-400" />

                                <p className="mt-5 text-base leading-8 text-slate-600">
                                    El diseño de la bandera del estado Anzoátegui, según Decreto Nº 138 del Ejecutivo Regional firmado por el Gobernador del estado, Alexis Rosas, el 16 de junio de 1999, consta de 3 franjas horizontales del mismo tamaño.
                                </p>

                                <div className="mt-8 space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Azul celeste</h4>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Representa nuestros cielos, mares y ríos.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Amarillo</h4>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Indica la calidez de nuestro clima y sus habitantes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-green-600" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Verde</h4>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Representa todas las riquezas de nuestra naturaleza.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
                                    <p className="text-sm leading-7 text-slate-600">
                                        En medio de las tres franjas está insertada una <strong className="font-semibold text-slate-900">silueta con la forma del Estado Anzoátegui</strong>, en marco negro, que simboliza las riquezas petroleras del subsuelo.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <img
                                    src="/images/Bandera/BanderaAnzoategui.jpg"
                                    alt="Bandera del Estado Anzoátegui"
                                    className="h-auto w-full object-cover"
                                />
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
                                El Escudo del Estado Anzoátegui constituye un <strong className="font-semibold text-white">
                                símbolo de identidad y representación
                                </strong>, reuniendo elementos que evocan la historia, las riquezas naturales y
                                el espíritu del pueblo anzoatiguense.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
