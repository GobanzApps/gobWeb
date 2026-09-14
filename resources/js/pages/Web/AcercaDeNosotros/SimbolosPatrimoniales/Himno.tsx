import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { ExternalLink, Music2, ScrollText } from 'lucide-react';

export default function Himno() {
    return (
        <>
            <Head title="Himno del Estado" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="simbolosPatrimoniales" activo="himno" />

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
                                    Símbolos Patrimoniales
                                </p>
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                                    Himno
                                </h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    El canto que recoge en sus versos el espíritu heroico, la historia y la identidad del pueblo anzoatiguense.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* PRESENTACIÓN */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Music2 className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Himno del Estado Anzoátegui
                                    </p>
                                </div>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                                    Una voz que cuenta nuestra historia
                                </h2>

                                <div className="mt-5 h-1 w-16 bg-yellow-400" />

                                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
                                    El Himno del estado Anzoátegui fue adoptado oficialmente
                                    el <strong className="font-semibold text-slate-900">14 de noviembre de 1910</strong>.
                                    Sus versos evocan el heroísmo de los hijos y guerreros que
                                    participaron en las luchas de independencia y exaltan la
                                    grandeza del territorio y de quienes lo habitan.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-8 border-t border-slate-200 pt-7">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                            Letra
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-900">
                                            Enrique Pérez Valencia
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                            Música
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-900">
                                            Ángel Mottola Martucci
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                            Adopción
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-900">
                                            14 de noviembre de 1910
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-3 rounded-3xl border border-yellow-200" />
                                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
                                    <img
                                        src="/images/Himno/PartituraHimnoAnzoategui.png"
                                        alt="Partitura del Himno del Estado Anzoátegui"
                                        className="h-auto w-full"
                                    />
                                    <div className="border-t border-slate-100 px-2 pt-5">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Documento musical
                                        </p>
                                        <a
                                            href="/pdfs/PartituraHimnoAnzoategui.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                                        >
                                            Ver partitura
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* LETRA */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
                            <div className="text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                                    <ScrollText className="h-5 w-5" />
                                </div>
                                <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                    Letra
                                </p>
                                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                    Himno del Estado Anzoátegui
                                </h2>
                                <div className="mx-auto mt-5 h-1 w-16 bg-yellow-400" />
                            </div>

                            <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                                <div className="border-b border-yellow-200 bg-yellow-50 px-8 py-6 text-center sm:px-12">
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-800">
                                        Coro
                                    </p>
                                    <p className="mx-auto mt-6 max-w-2xl text-lg font-medium italic leading-9 text-slate-700">
                                        Ayer fuiste pujante y altiva,<br />
                                        En la lucha sangrienta y tenaz;<br />
                                        más ya, patria te ciñes la oliva;<br />
                                        y hoy tu gloria se funda en la paz.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2">
                                    <div className="border-b border-slate-200 p-8 sm:p-10 md:border-b-0 md:border-r">
                                        <div className="flex items-center gap-4">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                                                I
                                            </span>
                                            <h3 className="text-xl font-bold text-slate-900">
                                                Primera estrofa
                                            </h3>
                                        </div>

                                        <p className="mt-7 text-base italic leading-8 text-slate-600">
                                            ¡Patria ilustre! tus hijos recuerdan<br />
                                            con orgullo la trágica lucha:<br />
                                            ¡aun parece que en torno se escucha<br />
                                            el tremendo rugir del cañón!<br />
                                            Fue la prueba temible tan larga,<br />
                                            que la sangre a torrentes vertiste,<br />
                                            y en la homérica lid te creciste,<br />
                                            esforzando el marcial corazón.
                                        </p>
                                    </div>

                                    <div className="p-8 sm:p-10">
                                        <div className="flex items-center gap-4">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                                                II
                                            </span>
                                            <h3 className="text-xl font-bold text-slate-900">
                                                Segunda estrofa
                                            </h3>
                                        </div>

                                        <p className="mt-7 text-base italic leading-8 text-slate-600">
                                            En los brazos de insignes guerreros,<br />
                                            Con Anzoátegui, Freites, Monagas,<br />
                                            arrasaste las bélicas plagas<br />
                                            y te erguiste triunfante doquier;<br />
                                            En la liza feral y gloriosa,<br />
                                            contra Iberia de heroica porfía,<br />
                                            tuya fue la postrer bizarría,<br />
                                            tuya fue la victoria postrer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* AUTORES */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                Sus autores
                            </p>
                            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                                La letra y la música
                            </h2>
                            <div className="mt-5 h-1 w-16 bg-yellow-400" />
                            <p className="mt-6 text-base leading-8 text-slate-600">
                                El himno nació de la colaboración entre el poeta Enrique
                                Pérez Valencia, autor de las estrofas, y el músico italiano
                                Ángel Mottola Martucci, responsable de su composición musical.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-8 md:grid-cols-2">
                            <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <div className="grid sm:grid-cols-[180px_1fr]">
                                    <div className="h-64 overflow-hidden bg-slate-100 sm:h-full">
                                        <img
                                            src="/images/Himno/EnriquePerezValencia.jpg"
                                            alt="Dr. Enrique Pérez Valencia"
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                                            Autor de la letra
                                        </p>
                                        <h3 className="mt-3 text-2xl font-bold text-slate-900">
                                            Dr. Enrique Pérez Valencia
                                        </h3>
                                        <div className="mt-4 h-1 w-12 bg-yellow-400" />
                                        <p className="mt-6 text-base leading-7 text-slate-600">
                                            Poeta de la ciudad de Barcelona y autor de las
                                            estrofas seleccionadas para el Himno del Estado
                                            Anzoátegui.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <div className="grid sm:grid-cols-[180px_1fr]">
                                    <div className="h-64 overflow-hidden bg-slate-100 sm:h-full">
                                        <img
                                            src="/images/Himno/AngelMottolaMartucci.jpg"
                                            alt="Ángel Mottola Martucci"
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                                            Autor de la música
                                        </p>
                                        <h3 className="mt-3 text-2xl font-bold text-slate-900">
                                            Ángel Mottola Martucci
                                        </h3>
                                        <div className="mt-4 h-1 w-12 bg-yellow-400" />
                                        <p className="mt-6 text-base leading-7 text-slate-600">
                                            Músico italiano ganador del concurso convocado
                                            para seleccionar la composición musical del
                                            himno.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>

                    {/* HISTORIA */}
                    <section className="border-y  border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="grid gap-14 lg:grid-cols-[280px_1fr]">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Historia
                                    </p>
                                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                                        El origen del Himno
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <p className="mt-6 text-base leading-7 text-slate-600">
                                        El proceso que llevó a la creación y adopción del himno oficial del Estado Anzoátegui.
                                    </p>
                                </div>

                                <div className="relative space-y-10 border-l-2 border-slate-400 pl-8 sm:pl-10">
                                    <div className="relative">
                                        <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full border-4 border-slate-200 bg-blue-700 shadow-sm sm:-left-[50px]" />
                                        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                                            1910
                                        </p>
                                        <p className="mt-3 text-base leading-8 text-slate-600">
                                            Con motivo de la conmemoración del primer centenario del 19 de abril de 1810,
                                            inicio de la Independencia de Venezuela, se abrieron concursos en distintas
                                            entidades del país para seleccionar las letras y músicas de sus himnos oficiales.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full border-4 border-slate-200 bg-yellow-400 shadow-sm sm:-left-[50px]" />
                                        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                                            2 de julio de 1910
                                        </p>
                                        <p className="mt-3 text-base leading-8 text-slate-600">
                                            El entonces gobernador, General Armando Rolando, había abierto un concurso para
                                            elegir el himno del estado. El 2 de julio se dio a conocer el veredicto que
                                            seleccionó las estrofas escritas por el poeta barcelonés Enrique Pérez Valencia.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full border-4 border-slate-200 bg-green-600 shadow-sm sm:-left-[50px]" />
                                        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                                            13 de noviembre de 1910
                                        </p>
                                        <p className="mt-3 text-base leading-8 text-slate-600">
                                            El concurso destinado a seleccionar la música fue ganado por el músico italiano
                                            Ángel Mottola Martucci, según consta en el acta del jurado integrado por F. R.
                                            Lyón, Tomás Castillo Rengel, José Lino Lárez y Giuseppe Marcheti.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full border-4 border-slate-200 bg-blue-700 shadow-sm sm:-left-[50px]" />
                                        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                                            14 de noviembre de 1910
                                        </p>
                                        <p className="mt-3 text-base leading-8 text-slate-600">
                                            La decisión del jurado fue anunciada oficialmente en documento firmado por el
                                            Secretario General de Gobierno de Anzoátegui, José Antonio Godoy. Ese mismo día
                                            quedó adoptado oficialmente el Himno del Estado.
                                        </p>
                                    </div>
                                </div>
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
                                El Himno del Estado Anzoátegui constituye una expresión de <strong className="font-semibold text-white">memoria histórica, orgullo e identidad</strong>, conservando en sus versos el espíritu heroico de quienes participaron en las luchas de independencia y el legado del pueblo anzoatiguense.
                            </p>
                        </div>
                    </section>

                </div>
            </WebLayout>
        </>
    );
}