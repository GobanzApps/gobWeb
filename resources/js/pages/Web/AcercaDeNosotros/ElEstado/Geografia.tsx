import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Droplets, Map, MapPin } from 'lucide-react';

export default function Geografia() {
    const rios = [
        'Amana',
        'Aragüita',
        'Caris',
        'Guanipa',
        'Güere',
        'Guario',
        'Morichal Largo',
        'Neverí',
        'Pao',
        'Tigre',
        'Unare',
        'Zuata',
        'Bajo Orinoco',
    ];

    return (
        <>
            <Head title="Geografía" />

            <WebLayout>
                <AcercaDeNosotrosNav seccion="elEstado" activo="geografia" />

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
                                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">El Estado</p>
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Geografía</h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Ubicación, territorio, división político-administrativa y principales recursos
                                    hidrográficos del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* UBICACIÓN Y TERRITORIO */}
                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Map className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Ubicación y territorio</p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    Un estado del nororiente venezolano
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                    <p>
                                        Anzoátegui es uno de los veintitrés estados que, junto con el Distrito Capital y las
                                        Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital y ciudad
                                        más poblada es Barcelona.
                                    </p>
                                    <p>
                                        Está ubicado en la región nororiental del país, limitando al norte con el mar Caribe
                                        (océano Atlántico), al noreste con Sucre, al este con Monagas, al sur con el río Orinoco
                                        que lo separa de Bolívar, al oeste con Guárico y al noroeste con Miranda.
                                    </p>
                                    <p>
                                        Con <strong className="font-semibold text-slate-800">43.300 km²</strong>, es el sexto
                                        estado con mayor superficie del país. Está localizado entre las coordenadas
                                        <strong className="font-semibold text-slate-800"> 10°08’40” norte y 64°40’38” oeste</strong>.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                                <img
                                    src="/images/Geografia/Mapa.jpeg"
                                    alt="Mapa del Estado Anzoátegui"
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* DATOS TERRITORIALES */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="mb-10 max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Datos territoriales</p>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                                    Organización del territorio
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-slate-900">21</p>
                                            <p className="text-sm text-slate-500">municipios</p>
                                        </div>
                                    </div>
                                    <p className="mt-5 text-sm leading-6 text-slate-600">
                                        El Estado Anzoátegui está dividido territorialmente en 21 municipios.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                            <Map className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-slate-900">57</p>
                                            <p className="text-sm text-slate-500">parroquias</p>
                                        </div>
                                    </div>
                                    <p className="mt-5 text-sm leading-6 text-slate-600">
                                        La división político-territorial comprende un total de 57 parroquias.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* HIDROGRAFÍA */}
                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Droplets className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Hidrografía</p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    Principales ríos
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600">
                                    El territorio anzoatiguense cuenta con diversos cursos de agua que forman parte de su
                                    geografía y contribuyen a la riqueza natural de la región.
                                </p>

                                <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                                    {rios.map((rio) => (
                                        <div key={rio} className="flex items-center gap-3 border-b border-slate-100 py-3">
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                                            <span className="text-sm font-medium text-slate-700">{rio}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl bg-blue-950 p-8 shadow-sm">
                                <Droplets className="h-8 w-8 text-yellow-400" />
                                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                                    Riqueza hidrográfica
                                </p>
                                <p className="mt-4 text-base leading-7 text-blue-100">
                                    Los ríos y cuerpos de agua forman parte esencial del paisaje y del patrimonio natural
                                    del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center shadow-sm sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">Territorio e identidad</p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                La geografía del Estado Anzoátegui reúne territorio, paisajes, recursos hídricos y una
                                diversidad de espacios que forman parte de su <strong className="font-semibold text-white">identidad natural y territorial</strong>.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
