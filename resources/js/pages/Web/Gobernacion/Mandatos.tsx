import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import GobernacionNav from '@/components/Web/GobernacionNav';
import { CalendarDays, Landmark, UserRound } from 'lucide-react';

const eventos = [
    {
        periodo: '1989 — 1992',
        titulo: 'El primer Gobernador',
        imagenes: [
            { src: '/images/ovido1.jpg', alt: 'Ovidio Alejandro González', tipo: 'cuadrada' },
            { src: '/images/ovido2.jpg', alt: 'Ovidio Alejandro González', tipo: 'cuadrada' },
        ],
        texto: (
            <>
                <p>
                    El primer Gobernador del estado Anzoátegui en ser electo por votación popular,
                    para el período 1989-1992, fue Ovidio Alejandro González, un político
                    venezolano, nacido en Porlamar, estado Nueva Esparta.
                </p>
                <p>
                    En 1994, desde la Asamblea Legislativa Estadal, acordaron improbar la memoria
                    y cuenta de su gestión, lo que conllevó a su destitución por parte de ese ente,
                    como Gobernador del estado.
                </p>
                <p>
                    Tras la destitución del entonces gobernador Ovidio González, es designado
                    Dennis Balza Ron para culminar su período, luego éste decide ir a la contienda
                    de 1996 para la reelección por el partido Acción Democrática (AD).
                </p>
                <p>
                    Alexis Rosas, tercer Gobernador, asume el poder por el partido Patria Para
                    Todos (PPT) en el mes de enero del año 1999.
                </p>
            </>
        ),
    },
    {
        periodo: '2000',
        titulo: 'Relegitimación de poderes',
        imagenes: [
            { src: '/images/chavez.jpg', alt: 'Hugo Rafael Chávez Frías', tipo: 'horizontal' },
            { src: '/images/DavidDeLima.jpg', alt: 'David De Lima', tipo: 'horizontal' },
        ],
        texto: (
            <>
                <p>
                    En el 2000 se impulsó la relegitimación de poderes, ordenado por el presidente
                    Hugo Rafael Chávez Frías, lo que llevó a realizar elecciones generales
                    adelantadas debido a la aprobación de la Constitución de 1999, triunfo
                    obtenido por el abogado David de Lima, por el partido Movimiento Al
                    Socialismo (MAS).
                </p>
                <p>
                    Tras relevar de su cargo a David de Lima, para el 2004 Tarek William Saab,
                    abogado, político y poeta, asume el poder por el partido Movimiento V
                    República (MVR), en las elecciones del 31 de octubre, convirtiéndose en el
                    quinto gobernador de Anzoátegui.
                </p>
            </>
        ),
    },
    {
        periodo: '2004 — 2008',
        titulo: 'Tarek William Saab',
        imagenes: [
            { src: '/images/TarekWilliamSaab.jpg', alt: 'Tarek William Saab', tipo: 'horizontal' },
        ],
        texto: (
            <>
                <p>
                    Tarek William Saab, abogado, político y poeta, asume el poder por el partido
                    Movimiento V República (MVR) en las elecciones del 31 de octubre de 2004,
                    convirtiéndose en el quinto gobernador de Anzoátegui.
                </p>
                <p>
                    En junio del 2008, ganó las elecciones internas de su partido para aspirar a
                    la reelección. En estos comicios, realizados el 23 de noviembre de ese mismo
                    año, fue reelecto para el cargo regional.
                </p>
            </>
        ),
    },
    {
        periodo: '2012 — 2016',
        titulo: 'Aristóbulo Istúriz',
        imagenes: [
            { src: '/images/aristobulo.jpg', alt: 'Aristóbulo Istúriz', tipo: 'horizontal' },
        ],
        texto: (
            <>
                <p>
                    El 12 de octubre de 2012 Aristóbulo Istúriz inscribe su candidatura a la
                    Gobernación de Anzoátegui por el Partido Socialista Unido de Venezuela (PSUV)
                    para el período 2012-2016, siendo el sexto hombre en llevar las riendas de
                    la entidad.
                </p>
                <p>
                    El 6 de enero de 2016, el presidente Nicolás Maduro designa a Aristóbulo
                    Istúriz como nuevo vicepresidente de Venezuela, sustituyendo a Jorge Arreaza.
                </p>
            </>
        ),
    },
    {
        periodo: '2016',
        titulo: 'Transición del Gobierno Regional',
        imagenes: [
            { src: '/images/JorgeArreaza.jpg', alt: 'Jorge Arreaza', tipo: 'horizontal' },
            { src: '/images/NelsonMoreno.jpg', alt: 'Nelson Moreno', tipo: 'horizontal' },
        ],
        texto: (
            <>
                <p>
                    El 6 de enero de 2016, el presidente Nicolás Maduro designa a Aristóbulo
                    Istúriz como nuevo vicepresidente de Venezuela, sustituyendo a Jorge Arreaza.
                </p>
                <p>
                    Ante esta situación, asume la responsabilidad regional Nelson Moreno como
                    gobernador interino, ya que era el presidente del Consejo Legislativo Estadal
                    para el momento.
                </p>
            </>
        ),
    },
    {
        periodo: '2017 — 2021',
        titulo: 'Antonio Barreto Sira',
        imagenes: [
            {
                src: '/images/AntonioBarretoSira.jpg',
                alt: 'Antonio Barreto Sira',
                tipo: 'horizontal',
            },
        ],
        texto: (
            <>
                <p>
                    En octubre de 2017 se llevan a cabo elecciones regionales, adjudicándose la
                    responsabilidad al ciudadano Antonio Barreto Sira, por el partido AD.
                </p>
                <p>
                    Barreto Sira buscó la reelección en el 2021, pero no prosperó en sus
                    aspiraciones.
                </p>
            </>
        ),
    },
    {
        periodo: '2021 — 2029',
        titulo: 'Luis José Marcano llega a la Gobernación',
        imagenes: [
            { src: '/images/LuisMarcano.jpg', alt: 'Luis José Marcano', tipo: 'vertical' },
            { src: '/images/LuisMarcano2.jpg', alt: 'Luis José Marcano', tipo: 'vertical' },
        ],
        texto: (
            <>
                <p>
                    La contienda electoral fue ganada por el candidato del Partido Socialista
                    Unido de Venezuela (PSUV) Luis José Marcano para el período constitucional
                    2021-2025.
                </p>
                <p>
                    Marcano fue reelecto por el pueblo en las elecciones del 25 de mayo de 2025
                    y asumirá las riendas del estado hasta el año 2029.
                </p>
            </>
        ),
    },
];

export default function Mandatos() {
    return (
        <>
            <Head title="Mandatos" />
            <WebLayout>
                <GobernacionNav activo="mandatos" />

                <div className="page-enter">
                    <section className="relative overflow-hidden bg-blue-950">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,64,175,0.3),transparent_50%)]" />
                        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
                            <div className="max-w-4xl">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-1 w-10 rounded-full bg-yellow-400" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                                        Gobernación
                                    </span>
                                </div>
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                                    Mandatos
                                </h1>
                                <p className="mt-5 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Conoce la evolución del Poder Ejecutivo del Estado Anzoátegui
                                    y los gobernantes que han dirigido la entidad a través de su
                                    historia contemporánea.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-5xl px-6 lg:px-8">
                            <div className="mb-12 flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                    <Landmark className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                        Poder Ejecutivo
                                    </p>
                                    <h2 className="text-3xl font-bold text-blue-950">
                                        Gobierno del Estado Anzoátegui
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-6 text-base leading-8 text-slate-600">
                                <p>
                                    El Poder Ejecutivo del estado está compuesto por el Gobernador
                                    de Anzoátegui, elegido mediante el voto directo, y un grupo de
                                    secretarios estadales, nombrados por él. Siendo el encargado de
                                    la administración estadal, ejerce el poder durante un período
                                    de cuatro años y con posibilidad de reelección inmediata para
                                    nuevos períodos iguales.
                                </p>
                                <p>
                                    La sede de la Gobernación se encuentra en el Edificio de Gobierno
                                    General de División José Antonio Anzoátegui, de Barcelona, que
                                    es la capital del estado Anzoátegui. El actual gobernador es
                                    Luis José Marcano, quien milita en el Partido Socialista Unido
                                    de Venezuela (PSUV).
                                </p>
                                <p>
                                    Hasta 1989 los Gobernadores de las Entidades Federales de
                                    Venezuela eran designados por el Presidente de la República,
                                    pero desde ese año se permitió su elección directa por el pueblo.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="border-y border-slate-100 bg-slate-50 py-20">
                        <div className="mx-auto max-w-6xl px-6 lg:px-8">
                            <div className="mb-20 text-center">
                                <div className="mb-3 flex items-center justify-center gap-3">
                                    <span className="h-1 w-10 rounded-full bg-yellow-400" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                        Historia política
                                    </span>
                                    <span className="h-1 w-10 rounded-full bg-yellow-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl">
                                    Los mandatos del Estado Anzoátegui
                                </h2>
                                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                                    Una mirada cronológica a los principales acontecimientos de la
                                    Gobernación desde la elección popular de sus autoridades.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute left-4 top-0 hidden h-full w-px bg-blue-200 md:left-1/2 md:block" />

                                <div className="space-y-24">
                                    {eventos.map((evento, index) => {
                                        const izquierda = index % 2 === 0;

                                        return (
                                            <article key={evento.titulo} className="relative">
                                                <div className="mb-6 flex items-center gap-3 md:absolute md:left-1/2 md:top-0 md:z-10 md:-translate-x-1/2">
                                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-700 text-white shadow-sm">
                                                        <CalendarDays className="h-4 w-4" />
                                                    </span>
                                                    <span className="rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm md:hidden">
                                                        {evento.periodo}
                                                    </span>
                                                </div>

                                                <div className={`grid items-center gap-8 md:grid-cols-2 md:gap-20 ${!izquierda ? 'md:[&>div:first-child]:order-2' : ''}`}>
                                                    <div className={izquierda ? 'md:pr-6' : 'md:pl-6'}>
                                                        <div className="mb-3 hidden items-center gap-2 md:flex">
                                                            <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                                                {evento.periodo}
                                                            </span>
                                                        </div>

                                                        <h3 className="text-2xl font-bold text-blue-950 sm:text-3xl">
                                                            {evento.titulo}
                                                        </h3>

                                                        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                                                            {evento.texto}
                                                        </div>
                                                    </div>

                                                    <div className={`flex gap-4 ${evento.imagenes.length > 1 ? 'items-center' : 'justify-center'}`}>
                                                        {evento.imagenes.map((imagen) => (
                                                            <div
                                                                key={imagen.src}
                                                                className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md ${
                                                                    imagen.tipo === 'horizontal'
                                                                        ? 'w-full'
                                                                        : imagen.tipo === 'cuadrada'
                                                                            ? 'w-64 shrink-0'
                                                                            : 'w-56 shrink-0'
                                                                }`}
                                                            >
                                                                <img
                                                                    src={imagen.src}
                                                                    alt={imagen.alt}
                                                                    className={`w-full object-cover transition duration-500 hover:scale-105 ${
                                                                        imagen.tipo === 'horizontal'
                                                                            ? 'h-64 sm:h-72'
                                                                            : imagen.tipo === 'cuadrada'
                                                                                ? 'aspect-square'
                                                                                : 'h-80 sm:h-96'
                                                                    }`}
                                                                />
                                                                <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3">
                                                                    <UserRound className="h-4 w-4 shrink-0 text-blue-600" />
                                                                    <span className="text-sm font-semibold text-slate-600">
                                                                        {imagen.alt}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="rounded-2xl bg-blue-950 px-8 py-10 sm:px-12">
                                <p className="text-sm font-bold uppercase tracking-wider text-yellow-300">
                                    Gobernación del Estado Anzoátegui
                                </p>
                                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                    Una historia construida a través de sus mandatos
                                </h2>
                                <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-100">
                                    Conoce también nuestra historia, las Gacetas Oficiales y demás
                                    información institucional de la Gobernación.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
