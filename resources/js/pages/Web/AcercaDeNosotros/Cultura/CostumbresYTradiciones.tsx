import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { Church, Heart, Music, ShoppingBasket, Sparkles } from 'lucide-react';

export default function CostumbresTradiciones() {
    return (
        <>
            <Head title="Costumbres y Tradiciones" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="cultura" activo="costumbresTradiciones" />

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
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Costumbres y Tradiciones</h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Manifestaciones religiosas, culturales y populares que forman parte de la identidad del pueblo anzoatiguense.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* INTRODUCCIÓN */}
                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                    <Music className="h-5 w-5" />
                                </div>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Patrimonio cultural</p>
                            </div>
                            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">Tradiciones de Anzoátegui</h2>
                            <div className="mt-5 h-1 w-16 bg-yellow-400" />
                            <p className="mt-7 text-base leading-8 text-slate-600">
                                Las costumbres y tradiciones del Estado Anzoátegui reflejan la profunda relación entre la fe, la cultura popular, las comunidades y las expresiones que han pasado de generación en generación.
                            </p>
                        </div>
                    </section>

                    {/* VIRGEN DEL VALLE */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Heart className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">8 de septiembre</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Devoción a la Virgen del Valle
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Cada 8 de septiembre, en cada rincón del estado Anzoátegui se venera a la Virgen del Valle, con galeros, actos culturales y reuniones fraternales entre vecinos para rendir tributo a la patrona de los pescadores. Su presencia invoca la fe que motiva a sus devotos a la hermandad y a la solidaridad.
                                        </p>
                                        <p>
                                            Como tradición se llevan a cabo ceremonias eclesiásticas para agradecer su protección por parte de los fieles de la Madre de Dios, quienes muestran sus actos de fe con oraciones, procesiones y cantos.
                                        </p>
                                        <p>
                                            Como parte de las festividades, los creyentes recrean la aparición de “Vallita”, como es comúnmente conocida, en la orilla de la playa para luego cantarle hermosas canciones y pasear la imagen por el mar.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/CostumbresTradiciones/VirgenDelValle1.jpg" alt="Devoción a la Virgen del Valle" className="h-[460px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/CostumbresTradiciones/VirgenDelValle2.jpg" alt="Virgen del Valle 2" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/CostumbresTradiciones/VirgenDelValle3.jpg" alt="Virgen del Valle 3" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/CostumbresTradiciones/VirgenDelValle4.jpg" alt="Virgen del Valle 4" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img src="/images/CostumbresTradiciones/VirgenDelValle5.jpg" alt="Virgen del Valle 5" className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* VIRGEN DE LA CANDELARIA */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Church className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">2 de febrero</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Festividad en honor a la Virgen de la Candelaria, patrona de Anzoátegui
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            El 2 de febrero de cada año, miles de devotos se dan cita en el Paseo Culto Recreacional Virgen de Cantaura, en el municipio Freites del estado Anzoátegui, para rendir homenaje a la Virgen de La Candelaria, Patrona de la región.
                                        </p>
                                        <p>
                                            La festividad, que es un acto de profundo respeto y veneración, congrega cada año a los habitantes de la región y a miles de visitantes que se unen en oración y celebración.
                                        </p>
                                        <p>
                                            Con su imponente atuendo, la Virgen de La Candelaria se erige cada año como un símbolo de protección y amor para todos los creyentes. Su presencia en la festividad invita a los asistentes a unirse en un momento de reflexión y devoción, recordando la luz que ella aporta a los corazones de quienes la veneran.
                                        </p>
                                        <p>
                                            En Cantaura es una tradición celebrar y honrar a la Virgen de la Candelaria. Sin embargo, el acto de la bajada de la imagen comenzó en el año 2015, por iniciativa de un grupo de jóvenes, entre ellos el hoy presbítero Fernando Milano y el seminarista Carlos Guacare.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {/* PRINCIPAL */}
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img
                                            src="/images/CostumbresTradiciones/VirgenDeLaCandelaria7.jpg"
                                            alt="Festividad de la Virgen de la Candelaria"
                                            className="h-[430px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* TODAS UNA AL LADO DE LA OTRA */}
                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img
                                            src="/images/CostumbresTradiciones/VirgenDeLaCandelaria1.jpg"
                                            alt="Virgen de la Candelaria"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img
                                            src="/images/CostumbresTradiciones/VirgenDeLaCandelaria5.jpg"
                                            alt="Celebración de la Virgen de la Candelaria al atardecer"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    {/* <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img
                                            src="/images/CostumbresTradiciones/VirgenDeLaCandelaria3.jpg"
                                            alt="Devotos durante la festividad"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img
                                            src="/images/CostumbresTradiciones/VirgenDeLaCandelaria2.jpg"
                                            alt="Celebración de la Virgen de la Candelaria"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div> */}

                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img
                                            src="/images/CostumbresTradiciones/VirgenDeLaCandelaria6.jpg"
                                            alt="Procesión de la Virgen de la Candelaria"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                                        <img
                                            src="/images/CostumbresTradiciones/VirgenDeLaCandelaria4.jpg"
                                            alt="Devotos durante la celebración de la Virgen de la Candelaria"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SAN ANTONIO DE PADUA */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Church className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">13 al 18 de junio</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Festividad en honor a San Antonio de Padua
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Las fiestas patronales de Clarines, municipio Bruzual, en honor a San Antonio de Padua son una celebración significativa que incluye una misa solemne, la bajada del altar mayor y una novena organizada por la Cofradía San Antonio de Padua.
                                        </p>
                                        <p>
                                            Las actividades religiosas se llevan a cabo en el marco de una novena que se inicia en diferentes sectores de la comunidad y culmina en la plaza El Mango.
                                        </p>
                                        <p>
                                            La programación incluye misas, bautizos y un recorrido por nueve sectores donde se oficiarán actos religiosos. Las festividades se celebran entre el 13 y el 18 de junio, con actividades protocolares, recreativas, deportivas, exposición ganadera y agrícola, espectáculos musicales y una ruta gastronómica.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-6">
                                    {/* ESTATUA - FOTO HORIZONTAL */}
                                    <div className="overflow-hidden rounded-2xl sm:col-span-6">
                                        <img
                                            src="/images/CostumbresTradiciones/SanAntonioDePadua6.jpg"
                                            alt="Estatua de San Antonio de Padua"
                                            className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* FOTOS VERTICALES */}
                                    <div className="overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2">
                                        <img
                                            src="/images/CostumbresTradiciones/SanAntonioDePadua1.jpg"
                                            alt="San Antonio de Padua"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2">
                                        <img
                                            src="/images/CostumbresTradiciones/SanAntonioDePadua2.jpg"
                                            alt="San Antonio de Padua"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2">
                                        <img
                                            src="/images/CostumbresTradiciones/SanAntonioDePadua4.jpg"
                                            alt="Interior de la iglesia de San Antonio de Padua"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2">
                                        <img
                                            src="/images/CostumbresTradiciones/SanAntonioDePadua3.jpg"
                                            alt="Altar de San Antonio de Padua"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2">
                                        <img
                                            src="/images/CostumbresTradiciones/SanAntonioDePadua5.jpg"
                                            alt="Celebración de San Antonio de Padua"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2">
                                        <img
                                            src="/images/CostumbresTradiciones/SanAntonioDePadua7.jpg"
                                            alt="Celebración de San Antonio de Padua"
                                            className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CRUZ DE MAYO */}
                    <section className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Sparkles className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">3 de mayo</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Velorio de la Cruz de Mayo
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            Esta fiesta presenta ligeras variantes en la mayor parte del territorio. Generalmente se hace para rendirle culto a la Cruz de Mayo, pero en el oriente del país se celebra para pagar alguna promesa o por simple diversión.
                                        </p>
                                        <p>
                                            Durante la fiesta que se realiza el 3 de mayo, se cantan polos y galerones y se recitan décimas al son de la bandola, el cuatro y la guitarra.
                                        </p>
                                        <p>
                                            En la región de oriente se acostumbra a designar padrinos del velorio de cruz, quienes contribuyen en la compra de lo que se requiere para la fiesta. La cruz se coloca en un altar y se decora con flores.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/CostumbresTradiciones/VelorioCruzDeMayo1.jpg" alt="Velorio de la Cruz de Mayo" className="h-[430px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/CostumbresTradiciones/VelorioCruzDeMayo2.jpg" alt="Cruz de Mayo decorada con flores" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/CostumbresTradiciones/VelorioCruzDeMayo3.jpg" alt="Altar del Velorio de la Cruz de Mayo" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FERIA DE LA CIRUELA */}
                    <section>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                <div className="lg:sticky lg:top-28">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <ShoppingBasket className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">9 al 11 de mayo</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        Feria de la Ciruela
                                    </h2>
                                    <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                    <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                                        <p>
                                            La comunidad indígena de Capachal, en el municipio Píritu del estado Anzoátegui, celebra cada año la Feria de la Ciruela, un evento gastronómico que aprovecha la producción de la ciruela de huesito, conocida también como jocote en otras regiones.
                                        </p>
                                        <p>
                                            Entre el 9 y el 11 de mayo, productores y emprendedores reciben a cientos de visitantes, que disfrutan de exhibiciones, degustaciones de recetas dulces y saladas, estands de ventas, actividades recreativas y espectáculos musicales.
                                        </p>
                                        <p>
                                            Más de 60 hombres y mujeres procesadores preparan dulces criollos como mermeladas, bocadillos, caratos, quesillos, tortas, brazos gitanos, ponquesitos, tartaletas y bienmesabe, así como antipastos, minestrone, ensaladas, guasacacas, salsas barbacoa y picante, entre otras preparaciones.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/CostumbresTradiciones/FeriaDeLaCiruela1.jpg" alt="Feria de la Ciruela" className="h-[430px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/CostumbresTradiciones/FeriaDeLaCiruela4.jpg" alt="Feria de la Ciruela 2" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src="/images/CostumbresTradiciones/FeriaDeLaCiruela2.jpg" alt="Feria de la Ciruela 3" className="h-[300px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl sm:col-span-2">
                                        <img src="/images/CostumbresTradiciones/FeriaDeLaCiruela3.jpg" alt="Productos de la Feria de la Ciruela" className="h-[380px] w-full object-cover transition duration-500 hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center shadow-sm sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">Patrimonio cultural</p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                Las costumbres y tradiciones mantienen viva la memoria colectiva del Estado Anzoátegui y fortalecen los vínculos entre sus comunidades, su historia y su <strong className="font-semibold text-white">identidad cultural</strong>.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
