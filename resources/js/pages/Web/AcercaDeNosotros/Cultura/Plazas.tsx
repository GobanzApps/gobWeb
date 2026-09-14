import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Landmark, MapPin } from 'lucide-react';

export default function Plazas() {
    return (
        <>
            <Head title="Plazas" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="cultura" activo="plazas" />

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
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Plazas</h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Espacios públicos que forman parte de la historia, identidad y vida cultural de las comunidades del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* INTRODUCCIÓN */}
                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="max-w-4xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Patrimonio urbano</p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Plazas de Anzoátegui
                            </h2>
                            <div className="mt-5 h-1 w-16 bg-yellow-400" />
                            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                                Las plazas del Estado Anzoátegui son espacios de encuentro que reúnen historia, arquitectura, monumentos y actividades culturales. En ellas se conservan símbolos dedicados a personajes fundamentales de la historia venezolana y regional.
                            </p>
                        </div>
                    </section>

                    {/* GRAN PLAZA LIBERTADORES */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Barcelona</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Gran Plaza Libertadores
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            La Gran Plaza Libertadores es un espacio conformado por 40 mil metros cuadrados, siendo la más grande de Venezuela y encontrándose entre las 10 más grandes de Latinoamérica y el Caribe.
                                        </p>
                                        <p>
                                            Está integrada por las plazas Bolívar, Miranda, Hugo Chávez, Cayaurima, Bicentenario de Carabobo y la Casa Fuerte de Barcelona.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/Plazas/GranPlazaLibertadores1.jpg" alt="Gran Plaza Libertadores" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/Plazas/GranPlazaLibertadores2.jpg" alt="Gran Plaza Libertadores de Barcelona" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/Plazas/GranPlazaLibertadores3.jpg" alt="Espacios de la Gran Plaza Libertadores" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PLAZA BOLÍVAR */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Barcelona</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Plaza Bolívar de Barcelona
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Ubicada en la Av. 5 de Julio, la Plaza Bolívar de Barcelona cuenta con un monumento al Libertador erigido el 17 de diciembre de 1930, en el primer centenario de su muerte.
                                        </p>
                                        <p>
                                            En el centro se encuentra una estatua ecuestre de Simón Bolívar realizada por Francisco Pigua. La plaza es de amplias dimensiones y cuenta con jardines y árboles.
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-2xl">
                                    <img src="/images/Plazas/PlazaBolivar1.jpg" alt="Plaza Bolívar de Barcelona" className="h-[500px] w-full object-cover transition duration-500 hover:scale-105" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PLAZA BOYACÁ */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Barcelona Colonial</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Plaza Boyacá de Barcelona
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Posee una estatua del general José Antonio Anzoátegui, héroe de la batalla de Boyacá y personaje en cuyo honor fue bautizado el estado Anzoátegui.
                                        </p>
                                        <p>
                                            Es conocida como la plaza mayor de la Barcelona Colonial y poco ha cambiado desde su construcción en 1671. Está ubicada frente a la Casa de Gobierno Municipal y la Iglesia Catedral de San Cristóbal, que se encuentran una frente a la otra a ambos lados de la plaza.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/Plazas/PlazaBoyaca1.jpg" alt="Estatua de José Antonio Anzoátegui en la Plaza Boyacá" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/Plazas/PlazaBoyaca2.jpg" alt="Detalle de la estatua de José Antonio Anzoátegui" className="h-auto w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/Plazas/PlazaBoyaca3.jpg" alt="Plaza Boyacá de Barcelona" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PLAZA MIRANDA */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Barcelona</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Plaza Miranda de Barcelona
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Hermosa plaza con cocoteros y jardines en sus alrededores. Cuenta con una pista central para retretas y otros espectáculos.
                                        </p>
                                        <p>
                                            En ella se encuentra una estatua de pie del general Francisco de Miranda, erigida en su honor en 1954 por el pueblo y gobierno del estado Anzoátegui.
                                        </p>
                                        <p>
                                            Está ubicada en la Av. 5 de Julio de Barcelona, frente a la sede de la Gobernación.
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-2xl bg-slate-100">
                                    <img src="/images/Plazas/PlazaMiranda1.jpg" alt="Plaza Miranda de Barcelona" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PLAZA ROLANDO */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Barcelona</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Plaza Rolando de Barcelona
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            De construcción moderna y amplias dimensiones, cuenta con jardines y árboles. Se encuentra ubicada en la calle La Marina, frente al Teatro Cajigal, en el centro de Barcelona.
                                        </p>
                                        <p>
                                            La plaza se encuentra además alrededor de la Iglesia Ermita El Carmen, formando parte del conjunto urbano y cultural del centro histórico de la ciudad.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/Plazas/PlazaRolando1.jpg" alt="Plaza Rolando de Barcelona" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/Plazas/PlazaRolando2.png" alt="Plaza Rolando de Barcelona" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PLAZA MONUMENTAL BOLÍVAR */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">El Tigre</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Plaza Monumental Bolívar de El Tigre
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Ubicada en las carreras 4 y 5 Sur, cruce con calle 1, este espacio urbano de amplias dimensiones presenta una superficie de forma trapezoidal.
                                        </p>
                                        <p>
                                            Está conformada por caminerías concéntricas que se unen en un área elevada, donde se ubica la estatua ecuestre del Libertador Simón Bolívar, circundada por dos pórticos curvos de trazado semicircular.
                                        </p>
                                        <p>
                                            Sus áreas verdes muestran abundante vegetación en árboles y arbustos con flores, además de bancos de concreto y faroles metálicos.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/Plazas/PlazaMonumentalBolivar1.jpg" alt="Plaza Monumental Bolívar de El Tigre" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/Plazas/PlazaMonumentalBolivar2.jpg" alt="Estatua de Simón Bolívar en la Plaza Monumental" className="h-[350px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PLAZA JOSÉ FÉLIX RIBAS */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">El Tigre</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Plaza José Félix Ribas o Plaza Revenga de El Tigre
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Ubicada en Pueblo Nuevo, carrera 5 Sur, es una de las plazas de mayor importancia del municipio Simón Rodríguez por estar consagrada a la memoria del héroe de la Batalla de La Victoria.
                                        </p>
                                        <p>
                                            En este espacio se realizan actividades culturales, recreativas, deportivas y juegos de mesa como ajedrez y dominó. Tiene un área aproximada de 3.000 m² y fue construida durante la década de 1960.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/Plazas/PlazaJoseFelixRibas1.jpg" alt="Plaza José Félix Ribas de El Tigre" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/Plazas/PlazaJoseFelixRibas2.png" alt="Estatua de José Félix Ribas en El Tigre" className="h-[400px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center shadow-sm sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">Patrimonio urbano</p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                Las plazas de Anzoátegui son espacios donde convergen la memoria histórica, el patrimonio arquitectónico y la vida cotidiana de sus comunidades, manteniendo viva nuestra <strong className="font-semibold text-white">identidad cultural</strong>.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
