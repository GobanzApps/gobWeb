import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Leaf, Map, Trees } from 'lucide-react';

export default function FloraYVegetacion() {
    return (
        <>
            <Head title="Flora y Vegetación" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="naturaleza" activo="floraVegetacion" />

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
                                    Flora y Vegetación
                                </h1>

                                <div className="mt-7 h-1 w-24 bg-yellow-400" />

                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Conoce la diversidad vegetal que caracteriza los paisajes del Estado Anzoátegui y forma parte de su identidad natural.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FLORA */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
                                        <Leaf className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                                        Flora
                                    </p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    Una flora presente en cada rincón
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                    <p>
                                        Entre las especies de árboles madereros que más abundan
                                        en el Estado Anzoátegui se encuentran el aceite, pilón,
                                        algarrobo, roble, quebracho, puy, araguaney y apamate,
                                        entre otros.
                                    </p>
                                    <p>
                                        También se encuentran diversas especies frutales como
                                        el merey, mango, guácimo, sarrapia, merecure, querebero
                                        y maíz, que forman parte de la riqueza vegetal de la
                                        entidad.
                                    </p>
                                    <p>
                                        La flora característica del estado puede observarse en
                                        las calles y patios de muchas viviendas, así como en
                                        numerosas plazas, donde los árboles y plantas propios
                                        de la región forman parte del paisaje cotidiano.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <img
                                    src="/images/FloraYVegetacion/Apamate.jpg"
                                    alt="Apamate del Estado Anzoátegui"
                                    className="h-[460px] w-full object-cover"
                                />
                                <div className="border-t border-slate-100 p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                                        Especie característica
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        El Colorado o Apamate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* GALERÍA */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                                    Diversidad vegetal
                                </p>
                                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                    Flores y plantas de la región
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                <p className="mt-6 text-base leading-8 text-slate-600">
                                    Algunas de las especies y flores que forman parte de la
                                    diversidad vegetal presente en el Estado Anzoátegui.
                                </p>
                            </div>

                            <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                                <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
                                    <img src="/images/FloraYVegetacion/Garbancillo.jpg" alt="Garbancillo" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14">
                                        <p className="font-semibold text-white">Garbancillo</p>
                                    </div>
                                </div>

                                {[
                                    ['CopaDeOro.jpg', 'Copa de Oro'],
                                    ['Putica.jpg', 'Putica'],
                                    ['Cariaquito.jpg', 'Cariaquito'],
                                    ['Coralillo.jpg', 'Coralillo'],
                                    ['MirasolAmarillo.jpg', 'Mirasol Amarillo'],
                                    ['Atapaima.jpg', 'Atapaima'],
                                    ['AtapaimaBlanca.jpg', 'Atapaima Blanca'],
                                    ['Cayena.jpeg', 'Cayena'],
                                    ['Zinnia.jpg', 'Zinnia'],
                                    ['Orquidea.jpg', 'Orquídea'],
                                ].map(([imagen, nombre]) => (
                                    <div key={imagen} className="group relative overflow-hidden rounded-2xl">
                                        <img
                                            src={`/images/FloraYVegetacion/${imagen}`}
                                            alt={nombre}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                                            <p className="text-sm font-semibold text-white">{nombre}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ESPECIES DESTACADAS */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                                Especies representativas
                            </p>
                            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                Árboles que forman parte del paisaje
                            </h2>
                            <div className="mt-5 h-1 w-16 bg-yellow-400" />
                        </div>

                        <div className="mt-12 grid gap-8 md:grid-cols-2">
                            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="h-72 overflow-hidden">
                                    <img
                                        src="/images/FloraYVegetacion/Apamate.jpg"
                                        alt="Apamate"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                                        El Colorado
                                    </p>
                                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                        Apamate
                                    </h3>
                                    <p className="mt-5 text-base leading-8 text-slate-600">
                                        Es uno de los árboles más bellos, útiles y cultivados
                                        de la flora venezolana. Puede alcanzar hasta 30 metros
                                        de altura y tiene como hábitat el bosque deciduo.
                                        Sus flores pueden presentar tonalidades moradas,
                                        rosadas, lilas o blancas y llenan de color las calles
                                        principales de Barcelona.
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="h-72 overflow-hidden">
                                    <img
                                        src="/images/FloraYVegetacion/Cuji.jpg"
                                        alt="Cují"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <p className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                                        Árbol característico
                                    </p>
                                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                        Cují
                                    </h3>
                                    <p className="mt-5 text-base leading-8 text-slate-600">
                                        El Cují, <em>Prosopis juliflora</em>, se encuentra en
                                        numerosos pueblos del Estado Anzoátegui, especialmente
                                        en las zonas áridas. Puede alcanzar entre 10 y 15 metros
                                        de altura y se caracteriza por sus ramas flexibles,
                                        espinas largas y fuertes y flores amarillas.
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-8">
                            <p className="text-base leading-8 text-slate-700">
                                También destaca la <strong className="font-semibold text-slate-900">
                                Cayena
                                </strong>, presente en toda la región y reconocible por sus
                                flores de colores intensos y forma característica, que adornan
                                jardines, patios y espacios públicos.
                            </p>
                        </div>
                    </section>

                    {/* VEGETACIÓN */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
                                            <Trees className="h-5 w-5" />
                                        </div>
                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                                            Vegetación
                                        </p>
                                    </div>

                                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                        Paisajes definidos por su vegetación
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            La vegetación es principalmente de <strong className="font-semibold text-slate-900">
                                            sabana
                                            </strong>, tanto en el centro como en el sur del
                                            estado. En el norte, más seco, se encuentran plantas
                                            espinosas, matorrales y cardones.
                                        </p>
                                        <p>
                                            La mayor parte del estado Anzoátegui está ubicada
                                            en la región de <strong className="font-semibold text-slate-900">
                                            Los Llanos
                                            </strong>, particularmente en los llanos orientales.
                                            El extremo noroeste pertenece a la cordillera central
                                            y el extremo noreste, incluyendo Barcelona y Puerto
                                            La Cruz, pertenece a la cordillera oriental.
                                        </p>
                                        <p>
                                            En Anzoátegui predominan las llanuras, aunque también
                                            existen mesas, entre las que destaca la <strong className="font-semibold text-slate-900">
                                            Mesa de Guanipa
                                            </strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:row-span-2">
                                        <img
                                            src="/images/FloraYVegetacion/vegetacion1.jpg"
                                            alt="Vegetación del Estado Anzoátegui"
                                            className="h-full min-h-[420px] w-full object-cover"
                                        />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/FloraYVegetacion/vegetacion2.jpeg"
                                            alt="Paisaje natural del Estado Anzoátegui"
                                            className="h-48 w-full object-cover"
                                        />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/FloraYVegetacion/vegetacion3.jpg"
                                            alt="Vegetación natural del Estado Anzoátegui"
                                            className="h-48 w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* MESA DE GUANIPA */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                                    <img
                                        src="/images/FloraYVegetacion/MesaDeGuanipa.jpg"
                                        alt="Mesa de Guanipa"
                                        className="aspect-[4/3] h-auto w-full object-cover"
                                    />
                                    <div className="border-t border-slate-200 bg-white px-4 py-3">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Paisaje de la Mesa de Guanipa
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                                    <div className="flex flex-1 items-center justify-center p-5">
                                        <img
                                            src="/images/FloraYVegetacion/MesaDeGuanipaMapa.jpg"
                                            alt="Mapa de la Mesa de Guanipa"
                                            className="h-auto max-h-[360px] w-full object-contain"
                                        />
                                    </div>
                                    <div className="border-t border-slate-200 bg-white px-4 py-3">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Ubicación geográfica
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Map className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Paisaje y territorio
                                    </p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    La Mesa de Guanipa
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <p className="mt-7 text-base leading-8 text-slate-600">
                                    Las mesas constituyen una de las formas características
                                    del relieve de Anzoátegui. Entre ellas destaca la
                                    <strong className="font-semibold text-slate-900"> Mesa de Guanipa</strong>,
                                    vinculada al paisaje de los llanos orientales y a la
                                    diversidad natural que caracteriza buena parte del
                                    territorio estatal.
                                </p>

                                <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
                                    <p className="text-sm leading-7 text-slate-600">
                                        En la cordillera oriental se encuentra además el punto
                                        más alto del estado, el <strong className="font-semibold text-slate-900">
                                        Cerro Tristeza
                                        </strong>, con una altura de 2.660 metros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                                Patrimonio natural
                            </p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                La flora y vegetación del Estado Anzoátegui forman parte de
                                la riqueza natural de la entidad, reflejando la diversidad de
                                sus paisajes y acompañando la vida cotidiana de sus comunidades.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
