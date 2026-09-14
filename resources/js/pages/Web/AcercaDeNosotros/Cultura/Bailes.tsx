import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Music, Users, Theater } from 'lucide-react';
import { useState } from 'react';

export default function Bailes() {

    const [imagenAbierta, setImagenAbierta] = useState<string | null>(null);

    return (
        <>
            <Head title="Bailes" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="cultura" activo="bailes" />

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
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Bailes</h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Expresiones musicales y dancísticas que forman parte de la tradición y la identidad cultural del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* INTRODUCCIÓN */}
                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                    <Music className="h-6 w-6" />
                                </div>
                                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Patrimonio cultural</p>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                    Bailes tradicionales de Anzoátegui
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />
                            </div>
                            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                                <p>
                                    Los bailes tradicionales del Estado Anzoátegui reúnen expresiones indígenas, populares y folklóricas que reflejan la historia, las costumbres y las formas de celebración de sus comunidades.
                                </p>
                                <p>
                                    A través de la música, la danza y la representación, estas manifestaciones mantienen vivas historias relacionadas con la naturaleza, la pesca, las tradiciones indígenas y la vida cotidiana del pueblo oriental.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* MAREMARE */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Tradición indígena</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Maremare Indígena
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Entre las comunidades de la Mesa de Guanipa quedan señales de la etnia kariña. Ellos conservan entre sus tradiciones la fiesta del Akaatompo, un ritual en memoria a los difuntos, porque existe la creencia que el 2 y 3 de noviembre los muertos regresan a visitar a sus familiares, quienes para recibirlos preparan reuniones con música, cantos y bailes.
                                        </p>
                                        <p>
                                            Los participantes, acompañados por cuatros y guitarras, realizan movimientos que forman parte de esta tradición. Originalmente se hacía con flautas de caña y danzando entrelazados por la cintura, con giros y movimientos hacia delante y hacia atrás.
                                        </p>
                                        <p>
                                            La danza que mejor define la cultura kariña es el Maremare, que se ejecuta para celebrar la reunión de las familias o marcar el final del luto por un muerto.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img
                                            src="/images/Bailes/Bailes8.jpg"
                                            alt="Presentación cultural de tradiciones indígenas"
                                            className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/Bailes/Bailes9.jpg"
                                            alt="Presentación de baile tradicional"
                                            className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/Bailes/Bailes10.jpg"
                                            alt="Grupo durante una presentación cultural"
                                            className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SEBUCÁN */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Music className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Danza tradicional</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Danzas del Sebucán
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Conocido como El Baile del Sebucán o el Baile de las Cintas, se trata de una de las expresiones culturales con mayor impacto en Venezuela. Es conocido a nivel nacional por ser un baile colorido cuya temática se centra en el utensilio del mismo nombre: el sebucán.
                                        </p>
                                        <p>
                                            El sebucán es una herramienta implementada en prácticas de agricultura, usada por los indígenas de la zona. La danza consiste en agrupar hombres y mujeres alrededor de un palo erigido en el centro de dicho grupo.
                                        </p>
                                        <p>
                                            Los participantes colocan cintas de colores alrededor del palo y, al son de la música, van enrollándolas alrededor de este. Posteriormente desenredan y vuelven a enredarlas hasta el final del baile.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {/* PRESENTACIONES REALES */}
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/Bailes/Bailes11.jpg"
                                            alt="Personas realizando el baile del Sebucán"
                                            className="h-[400px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/Bailes/Bailes13.jpg"
                                            alt="Presentación del baile del Sebucán"
                                            className="h-[400px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* ILUSTRACIÓN REPRESENTATIVA */}
                                    <div className="overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2">
                                        <img
                                            src="/images/Bailes/Bailes12.jpg"
                                            alt="Ilustración representativa del baile del Sebucán"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PÁJARO GUARANDOL */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Theater className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Baile y representación</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        El Pájaro Guarandol
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Una de las tradiciones más populares del estado Anzoátegui es este baile típico que narra la historia de un cazador y un ave. Es una historia trágica que muestra cómo el hombre, a causa de sus ambiciones, destruye la naturaleza.
                                        </p>
                                        <p>
                                            En medio de la tragedia aparece un tercer personaje: un brujo que resucita al pájaro. Cada escena del baile es narrada por estrofas, dando como resultado una combinación entre obra de teatro y musical.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {/* PRINCIPAL */}
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img
                                            src="/images/Bailes/Bailes14.jpg"
                                            alt="Representación del Pájaro Guarandol"
                                            className="h-[430px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* FOTOS SECUNDARIAS */}
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/Bailes/Bailes15.jpg"
                                            alt="Presentación del Pájaro Guarandol"
                                            className="h-[300px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/Bailes/Bailes16.jpg"
                                            alt="Representación cultural del Pájaro Guarandol"
                                            className="h-[300px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* EL CARITE */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Music className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Tradición oriental</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        El Carite
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            El Carite es el nombre que se le da al baile cuyas características principales están relacionadas con la pesca. En esta representación musical participan hombres y mujeres que hacen el papel de “pescadores”. El Carite, como principal protagonista, es pescado y llevado a las embarcaciones.
                                        </p>
                                        <p>
                                            En la etapa final del baile, las mujeres deben reunirse en dichas embarcaciones donde se ha llevado al pescado. Seguidamente, realizan donaciones monetarias a los pescadores.
                                        </p>
                                        <p>
                                            Es una obra que simboliza la lucha diaria del habitante nororiental.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/Bailes/Bailes1.jpg"
                                            alt="Bailarina durante una presentación tradicional"
                                            className="h-[400px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src="/images/Bailes/Bailes5.jpg"
                                            alt="Participante durante una actividad cultural"
                                            className="h-[400px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img
                                            src="/images/Bailes/Bailes4.jpg"
                                            alt="Grupo durante una presentación tradicional"
                                            className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* GALERÍA */}
                    <section className="border-t border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="mb-10 max-w-3xl">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">Expresión popular</p>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                    La danza como identidad
                                </h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                <p className="mt-6 text-base leading-8 text-slate-600">
                                    Las manifestaciones dancísticas continúan siendo espacios de encuentro, celebración y transmisión de conocimientos entre generaciones.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-4">
                                {/* FOTO 1 */}
                                <button type="button" onClick={() => setImagenAbierta('/images/Bailes/Bailes1.jpg')} className="group overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2">
                                    <img
                                        src="/images/Bailes/Bailes1.jpg"
                                        alt="Presentación de baile tradicional"
                                        className="h-[500px] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </button>

                                {/* FOTO 3 */}
                                <button type="button" onClick={() => setImagenAbierta('/images/Bailes/Bailes3.jpg')} className="group overflow-hidden rounded-2xl">
                                    <img
                                        src="/images/Bailes/Bailes3.jpg"
                                        alt="Presentación cultural"
                                        className="h-[245px] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </button>

                                {/* FOTO 11 */}
                                <button type="button" onClick={() => setImagenAbierta('/images/Bailes/Bailes11.jpg')} className="group overflow-hidden rounded-2xl">
                                    <img
                                        src="/images/Bailes/Bailes11.jpg"
                                        alt="Presentación de baile tradicional"
                                        className="h-[245px] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </button>

                                {/* FOTO 7 */}
                                <button type="button" onClick={() => setImagenAbierta('/images/Bailes/Bailes7.jpg')} className="group overflow-hidden rounded-2xl">
                                    <img
                                        src="/images/Bailes/Bailes7.jpg"
                                        alt="Representación del Pájaro Guarandol"
                                        className="h-[245px] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </button>

                                {/* FOTO 5 */}
                                <button type="button" onClick={() => setImagenAbierta('/images/Bailes/Bailes5.jpg')} className="group overflow-hidden rounded-2xl">
                                    <img
                                        src="/images/Bailes/Bailes5.jpg"
                                        alt="Bailarina durante una presentación tradicional"
                                        className="h-[245px] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </button>

                                {/* FOTO 14 */}
                                <button type="button" onClick={() => setImagenAbierta('/images/Bailes/Bailes14.jpg')} className="group overflow-hidden rounded-2xl sm:col-span-2">
                                    <img
                                        src="/images/Bailes/Bailes14.jpg"
                                        alt="Representación cultural tradicional"
                                        className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </button>

                                {/* FOTO 8 */}
                                <button type="button" onClick={() => setImagenAbierta('/images/Bailes/Bailes8.jpg')} className="group overflow-hidden rounded-2xl">
                                    <img
                                        src="/images/Bailes/Bailes8.jpg"
                                        alt="Bailarina durante una presentación cultural"
                                        className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </button>

                                {/* FOTO 2 */}
                                <button type="button" onClick={() => setImagenAbierta('/images/Bailes/Bailes2.jpg')} className="group overflow-hidden rounded-2xl">
                                    <img
                                        src="/images/Bailes/Bailes2.jpg"
                                        alt="Presentación cultural del Pájaro Guarandol"
                                        className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* VISOR DE IMAGEN */}
                        {imagenAbierta && (
                            <div
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
                                onClick={() => setImagenAbierta(null)}
                            >
                                <button
                                    type="button"
                                    onClick={() => setImagenAbierta(null)}
                                    className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
                                    aria-label="Cerrar imagen"
                                >
                                    ×
                                </button>

                                <img
                                    src={imagenAbierta}
                                    alt="Imagen ampliada"
                                    className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        )}
                    </section>

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center shadow-sm sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">Patrimonio cultural</p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                Los bailes tradicionales preservan historias, creencias y formas de expresión que mantienen viva la memoria colectiva del Estado Anzoátegui y fortalecen su <strong className="font-semibold text-white">identidad cultural</strong>.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
