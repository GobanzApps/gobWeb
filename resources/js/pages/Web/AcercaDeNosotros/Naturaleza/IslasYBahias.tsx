import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Anchor, Map, Waves } from 'lucide-react';

export default function IslasYBahias() {
    const bahias = [
        {
            nombre: 'Bahía de Barcelona',
            imagenes: ['BahiaDeBarcelona1.jpg', 'BahiaDeBarcelona2.jpg'],
            descripcion: 'Uno de los paisajes costeros que forma parte del entorno natural y urbano de Barcelona.',
        },
        {
            nombre: 'Bahía de Pozuelos',
            imagenes: ['BahiaDePozuelos1.jpg', 'BahiaDePozuelos2.jpg'],
            descripcion: 'Espacio costero representativo del paisaje marino del Estado Anzoátegui.',
        },
    ];

    const islas = [
        {
            nombre: 'Isla de Plata',
            imagenes: ['IslaDePlata1.jpg', 'IslaDePlata2.jpg'],
        },
        {
            nombre: 'Isla El Faro',
            imagenes: ['IslaElFaro1.jpg', 'IslaElFaro2.jpg'],
        },
        {
            nombre: 'Isla El Saco',
            imagenes: ['IslaELSaco1.jpg', 'IslaELSaco2.jpg'],
        },
        {
            nombre: 'Isla Píritu',
            imagenes: ['IslaPuinare1.jpg', 'IslaPuinare2.jpg'],
        },
    ];

    return (
        <>
            <Head title="Islas y Bahías" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="naturaleza" activo="islasBahias" />

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
                                    Islas y Bahías
                                </h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Descubre algunos de los paisajes insulares y costeros que
                                    forman parte de la riqueza natural del Estado Anzoátegui.
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
                                        <Waves className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Paisaje costero
                                    </p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    Un territorio marcado por el mar
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                    <p>
                                        La ubicación costera del Estado Anzoátegui permite
                                        disfrutar de una gran variedad de paisajes vinculados
                                        al mar, entre los que destacan sus bahías e islas.
                                    </p>

                                    <p>
                                        Estos espacios forman parte de la diversidad
                                        paisajística de la entidad y ofrecen escenarios donde
                                        se encuentran el mar, las playas, la vegetación y
                                        diferentes formas de vida asociadas a los ambientes
                                        costeros.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <img
                                    src="/images/IslasYBahias/AtardecerFondo.png"
                                    alt="Paisaje costero del Estado Anzoátegui al atardecer"
                                    className="h-full w-full object-cover"
                                />
                                <div className="border-t border-slate-100 p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                                        Paisaje costero
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        Mar y territorio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BAHÍAS */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                    Bahías
                                </p>
                                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                    Paisajes de la costa anzoatiguense
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                <p className="mt-6 text-base leading-8 text-slate-600">
                                    Algunas de las bahías que forman parte del paisaje costero
                                    de la entidad.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-8 lg:grid-cols-2">
                                {bahias.map((bahia) => (
                                    <article
                                        key={bahia.nombre}
                                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                    >
                                        <div className="grid grid-cols-2">
                                            {bahia.imagenes.map((imagen) => (
                                                <img
                                                    key={imagen}
                                                    src={`/images/IslasYBahias/${imagen}`}
                                                    alt={bahia.nombre}
                                                    className="h-72 w-full object-cover"
                                                />
                                            ))}
                                        </div>

                                        <div className="p-7">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                                    <Anchor className="h-5 w-5" />
                                                </div>
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                                                    Bahía
                                                </p>
                                            </div>

                                            <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                                {bahia.nombre}
                                            </h3>

                                            <div className="mt-4 h-1 w-12 bg-yellow-400" />

                                            <p className="mt-5 text-base leading-8 text-slate-600">
                                                {bahia.descripcion}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ISLAS */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                Islas
                            </p>
                            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                Paisajes insulares
                            </h2>
                            <div className="mt-5 h-1 w-16 bg-yellow-400" />
                            <p className="mt-6 text-base leading-8 text-slate-600">
                                El territorio costero de Anzoátegui también reúne diferentes
                                espacios insulares que enriquecen sus paisajes y forman parte
                                de su identidad natural.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2">
                            {islas.map((isla) => (
                                <article
                                    key={isla.nombre}
                                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="grid grid-cols-2">
                                        {isla.imagenes.map((imagen) => (
                                            <div key={imagen} className="overflow-hidden">
                                                <img
                                                    src={`/images/IslasYBahias/${imagen}`}
                                                    alt={isla.nombre}
                                                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between border-t border-slate-100 px-6 py-5">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                                                Isla
                                            </p>
                                            <h3 className="mt-1 text-xl font-bold text-slate-900">
                                                {isla.nombre}
                                            </h3>
                                        </div>

                                        <Map className="h-5 w-5 text-blue-700" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* GALERÍA */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                    Galería
                                </p>
                                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                    Entre islas, bahías y mar
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                <p className="mt-6 text-base leading-8 text-slate-600">
                                    Una muestra visual de los paisajes costeros que forman
                                    parte del territorio anzoatiguense.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    ...bahias.flatMap((bahia) =>
                                        bahia.imagenes.map((imagen) => ({
                                            imagen,
                                            nombre: bahia.nombre,
                                        })),
                                    ),
                                    ...islas.flatMap((isla) =>
                                        isla.imagenes.map((imagen) => ({
                                            imagen,
                                            nombre: isla.nombre,
                                        })),
                                    ),
                                ].map((item, index) => (
                                    <div
                                        key={item.imagen}
                                        className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={`/images/IslasYBahias/${item.imagen}`}
                                                alt={item.nombre}
                                                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16">
                                                <p className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                                                    Paisaje costero
                                                </p>
                                                <p className="mt-1 text-sm font-semibold text-white">
                                                    {item.nombre}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ATARDECER */}
                    <section className="relative overflow-hidden">
                        <img
                            src="/images/IslasYBahias/AtardecerFondo.png"
                            alt="Atardecer sobre el paisaje costero de Anzoátegui"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-950/75" />

                        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
                            <div className="max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                                    Paisaje anzoatiguense
                                </p>

                                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                    Un territorio abierto al mar
                                </h2>

                                <div className="mt-6 h-1 w-16 bg-yellow-400" />

                                <p className="mt-7 text-base leading-8 text-blue-100 sm:text-lg">
                                    Las islas y bahías forman parte de la diversidad natural
                                    y paisajística que caracteriza al Estado Anzoátegui,
                                    convirtiendo su costa en uno de los elementos más
                                    representativos de su territorio.
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
                                Las islas y bahías del Estado Anzoátegui forman parte de su
                                <strong className="font-semibold text-white"> patrimonio natural y paisajístico</strong>,
                                reflejando la riqueza de un territorio estrechamente
                                vinculado con el mar y sus espacios costeros.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}