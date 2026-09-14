import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Building2, Landmark, Map, Waves } from 'lucide-react';

export default function SitiosHistoricos() {
    return (
        <>
            <Head title="Sitios Históricos" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="cultura" activo="sitiosHistoricos" />

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
                                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Cultura</p>
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Sitios Históricos</h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Espacios, monumentos y edificaciones que forman parte de la memoria histórica y cultural del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* INTRODUCCIÓN */}
                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="max-w-4xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Patrimonio histórico</p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Lugares que cuentan nuestra historia
                            </h2>
                            <div className="mt-5 h-1 w-16 bg-yellow-400" />
                            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                                El Estado Anzoátegui conserva espacios que permiten conocer distintos momentos de su historia, desde la época colonial y la gesta independentista hasta importantes expresiones arquitectónicas y culturales de la actualidad.
                            </p>
                        </div>
                    </section>

                    {/* CASA FUERTE */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Patrimonio histórico</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Casa Fuerte</h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            La Casa Fuerte de Barcelona fue originalmente un hospicio franciscano llamado Convento de San Francisco. A finales de 1816, las tropas republicanas lo ocuparon y fortificaron con cañones por orden de Simón Bolívar, quien consideraba a Barcelona de gran importancia estratégica por su conexión con el puerto y el suministro de provisiones. El lugar cambió de nombre tras ser ocupado por las tropas patriotas durante la toma de Barcelona, ocurrida el 7 de abril de 1817.
                                        </p>
                                        <p>
                                            En ese mismo año, el general Freites resistió hasta su muerte el asedio de las tropas realistas comandadas por el general español Juan de Aldama. Más de 1.600 hombres murieron en defensa de la posición, en un episodio conocido como la “Hecatombe de la Casa Fuerte”. Tras rechazar con grandes pérdidas un feroz ataque realista, Bolívar partió hacia Guayana un mes después, dejando como Gobernador a su edecán irlandés, el mayor Chamberlain, quien se encontraba herido.
                                        </p>
                                        <p>
                                            Las ruinas de la Casa Fuerte quedaron como monumento recordatorio de aquel desastre y nunca fueron reconstruidas. En 1960 fueron declaradas monumento histórico y se tomaron medidas para evitar su deterioro. Actualmente, las estatuas del general Freites y de Eulalia Buroz de Chamberlain se encuentran en las esquinas del parque, frente a la Plaza Bolívar, como parte de este importante sitio histórico de Barcelona.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/SitiosHistoricos/Casafuerte1.jpg" alt="Casa Fuerte de Barcelona" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/SitiosHistoricos/Casafuerte2.jpg" alt="Ruinas de la Casa Fuerte" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/SitiosHistoricos/Casafuerte3.jpg" alt="Monumento de la Casa Fuerte" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* MUSEO DIMITRIOS DEMU */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Building2 className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Patrimonio cultural</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Museo Dimitrios Demu</h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Es un museo ubicado en la ciudad de Lechería, municipio Urbaneja del estado Anzoátegui. Inaugurado en 1999, su construcción fue financiada por el empresario Nicolás Demu, hermano de Dimitrios, y diseñado por el arquitecto venezolano Fruto Vivas.
                                        </p>
                                        <p>
                                            El museo fue construido en honor al artista greco-rumano-venezolano Dimitrios Demu para exponer su obra y fomentar la cultura. El edificio tiene una forma poco convencional, similar a un ovni.
                                        </p>
                                        <p>
                                            Debido en parte a la obra del autor, el museo fue declarado patrimonio cultural de la ciudad.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/SitiosHistoricos/MuseoDimitriosDemu1.jpg" alt="Museo Dimitrios Demu" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/SitiosHistoricos/MuseoDimitriosDemu2.jpg" alt="Museo Dimitrios Demu en Lechería" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/SitiosHistoricos/MuseoDimitriosDemu3.jpg" alt="Arquitectura del Museo Dimitrios Demu" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PASEO DE LA CRUZ Y EL MAR */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Waves className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Patrimonio y recreación</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Paseo de la Cruz y el Mar</h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Gran paseo peatonal que bordea toda la playa de Puerto La Cruz. En sus espacios propios y visitantes disfrutan de exposiciones de artesanía y presentaciones artísticas.
                                        </p>
                                        <p>
                                            Este espacio constituye uno de los lugares de encuentro más representativos de la ciudad, donde el paisaje costero se combina con actividades culturales y recreativas.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/SitiosHistoricos/PaseoDeLaCruzYElMar3.jpg" alt="Paseo de la Cruz y el Mar" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/SitiosHistoricos/PaseoDeLaCruzYElMar2.jpg" alt="Paseo de la Cruz y el Mar" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/SitiosHistoricos/PaseoDeLaCruzYElMar1.jpg" alt="Paseo de la Cruz y el Mar" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PUENTE DE ANGOSTURA */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Map className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Obra de ingeniería</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Puente de Angostura</h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Este majestuoso puente se levanta sobre el río Orinoco comunicando los estados Anzoátegui y Bolívar.
                                        </p>
                                        <p>
                                            Fue construido durante el gobierno del extinto expresidente Dr. Raúl Leoni y constituye una de las obras de infraestructura más emblemáticas de la región.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/SitiosHistoricos/PuenteDeAngostura4.jpg" alt="Puente de Angostura sobre el río Orinoco" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/SitiosHistoricos/PuenteDeAngostura2.jpg" alt="Puente de Angostura" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/SitiosHistoricos/PuenteDeAngostura3.jpg" alt="Puente de Angostura" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* TEATRO CAJIGAL */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Building2 className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Arquitectura histórica</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Teatro Cajigal</h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Fue construido entre los años 1894 y 1895 e inaugurado el 21 de febrero de 1895, en honor al Mariscal de Ayacucho y bajo la administración del general Nicolás Rolando.
                                        </p>
                                        <p>
                                            El interior del edificio, de estructura neoclásica, fue decorado por el pintor caraqueño Sirit. Está ubicado en la calle Freites, frente a la Plaza Rolando de Barcelona.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/SitiosHistoricos/TeatroCajigal1.jpg" alt="Teatro Cajigal de Barcelona" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/SitiosHistoricos/TeatroCajigal2.jpg" alt="Teatro Cajigal" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/SitiosHistoricos/TeatroCajigal3.jpg" alt="Arquitectura del Teatro Cajigal" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center shadow-sm sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">Patrimonio histórico</p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                Los sitios históricos del Estado Anzoátegui preservan la memoria de sus pueblos y permiten reconocer en sus espacios la <strong className="font-semibold text-white">historia, cultura e identidad</strong> de nuestra región.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
