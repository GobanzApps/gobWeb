import { Head } from '@inertiajs/react';
import WebLayout from '@/layouts/WebLayout';
import GobernacionNav from '@/components/Web/GobernacionNav';
import { Building2, Facebook, Instagram, ExternalLink } from 'lucide-react';

const entes = [
    {
        siglas: 'SALUDANZ',
        nombre: 'Instituto Anzoatiguense de la Salud',
        descripcion: [
            'Es el órgano operativo del sistema de salud en el estado Anzoátegui, en su carácter político, administrativo y asistencial, basado en los principios de igualdad, equidad, solidaridad, gratuidad, universalidad, integridad y participación ciudadana para alcanzar la justicia social en el marco de las líneas estratégicas del Plan de Desarrollo Social de la Nación, bajo la rectoría de la Gobernación del estado Anzoátegui y el Ministerio del Poder Popular para la Salud (MPPS).',
        ],
        redes: {
            facebook: 'https://www.facebook.com/Saludanz',
            instagram: 'https://www.instagram.com/saludanzoficial/?hl=es-la',
        },
    },
    {
        siglas: 'CORANZTUR',
        nombre: 'Corporación de Turismo del estado Anzoátegui',
        descripcion: [
            'Es el ente rector de las actividades turísticas en el estado Anzoátegui que tiene como propósito planificar, organizar, integrar y promover la innovación en el sector, además de gestionar la calidad de los servicios y competitividad del turismo regional, aplicando métodos que permitan el uso consciente del patrimonio natural, cultural e histórico.',
        ],
        redes: {
            facebook: 'https://www.facebook.com/search/top?q=coranztur',
            instagram: 'https://www.instagram.com/coranztur/?hl=es-la',
        },
    },
    {
        siglas: 'IASPI',
        nombre: 'Instituto Autónomo de la Secretaría de los Pueblos Indígenas',
        descripcion: [
            'Es el órgano rector de las políticas gubernamentales para el ámbito indígena que facilita la formulación y ejecución de planes y programas destinados a la restitución de los derechos específicos de los pueblos y comunidades originarias del estado Anzoátegui.',
            'Dentro de su misión está garantizar los derechos fundamentales a la pervivencia genética y cultural, a la salud, a la educación, a la seguridad alimentaria, al hábitat en territorios ocupados ancestralmente, bajo la rectoría de la Gobernación del estado Anzoátegui y el Ministerio del Poder Popular para los Pueblos Indígenas (MINPPPI).',
        ],
        redes: {
            facebook: 'https://www.facebook.com/iaspi.anzoategui.7',
            instagram: 'https://www.instagram.com/iaspi_anz/',
        },
    },
    {
        siglas: 'IDANZ',
        nombre: 'Instituto de Deportes y Actividad Física del Estado Anzoátegui',
        descripcion: [
            'Es el ente rector de la política deportiva del estado, está encargado de planificar, coordinar, supervisar, fomentar, difundir y proteger las actividades deportivas, desarrollar planes de inversión en coordinación con organismos municipales, regionales, nacionales e internacionales, para la promoción del deporte en el estado, de igual forma, se ocupa de brindar asistencia integral a los atletas de alto rendimiento que representan a la entidad.',
            'Dentro de las funciones de esta institución también se incluye programar actividades deportivas, administrar y supervisar el mantenimiento de la infraestructura para la práctica de diversas disciplinas en la región, todo en pro de consolidar la masificación del deporte y fomentarlo en los diferentes espacios que conforman el territorio.',
        ],
        redes: {
            facebook: null,
            instagram: 'https://www.instagram.com/institutodeporteanz/',
        },
    },
    {
        siglas: 'CREANZSA',
        nombre: 'Corporación Regional de Abastecimiento del estado Anzoátegui S.A.',
        descripcion: [
            'Es el ente encargado de garantizar el abastecimiento de productos de consumo masivo a todos los habitantes del estado Anzoátegui, sin distingo político, social, cultural o religioso. Entre sus objetivos destacan:',
        ],
        objetivos: [
            'Abastecer en forma continua y organizada a la población del Estado Anzoátegui, de productos alimenticios de la canasta básica a precios justos.',
            'Incentivar a los emprendedores, pequeños y medianos productores a la producción efectiva de rubros alimenticios con el fin de ser adquiridos, distribuidos y comercializados por la corporación.',
            'Establecer políticas de acercamiento con el sector privado de la región y de toda la nación para que ofrezcan sus productos a precios justos y razonables.',
            'Contribuir a la renovación e impulso de los valores Bolivarianos y Socialistas como la mejor forma de convivencia social que permita el desarrollo sustentable de la región.',
            'Ejercer la dirección y dictar las políticas orientadas a garantizar el cumplimiento de las funciones que la Constitución y las Leyes atribuyen.',
            'Establecer convenios nacionales e internacionales con las diferentes organizaciones a fin de lograr adquirir los productos que la corporación requiera para garantizar el abastecimiento del pueblo de Anzoátegui.',
        ],
        redes: {
            facebook: null,
            instagram: 'https://www.instagram.com/creanzsa/',
        },
    },
    {
        siglas: 'SEVIGEA',
        nombre: 'Secretaría de Vivienda de la Gobernación del Estado Anzoátegui',
        descripcion: [
            'Es el órgano encargado de ejecutar obras de urbanismo y construcción de viviendas de interés social para la comunidad, brindando asesoría técnica en el proceso de planificación y ejecución de programas y proyectos, con un capital humano calificado y una cultura positiva capaz de optimizar los recursos disponibles dando respuesta a los requerimientos exigidos de acuerdo a la dinámica social que plantea el ejecutivo nacional hacia las comunas.',
        ],
        redes: {
            facebook: null,
            instagram: 'https://www.instagram.com/sevigeaanzoateguioficial/',
        },
    },
    {
        siglas: 'SAT-ANZOÁTEGUI',
        nombre: 'Servicio de Administración Tributaria del Estado Anzoátegui',
        descripcion: [
            'Es el órgano competente del ejecutivo regional para realizar la recaudación de los tributos y el control de los timbres fiscales reservados al estado Anzoátegui. Ejecuta, entre sus funciones, los procedimientos de administración, verificación y fiscalización para constatar el cumplimiento de las disposiciones de la Ley de Tasas Administrativas y Timbre Fiscal de la entidad, la Ley de Minerales No Metálicos, por parte de los contribuyentes ordinarios, agentes de retención y agentes de percepción ubicados dentro del territorio regional.',
        ],
        redes: {
            facebook: null,
            instagram: 'https://www.instagram.com/sat.anzoategui/',
        },
    },
    {
        siglas: 'CORPOMINAS',
        nombre: 'Corporación de Minas',
        descripcion: [
            'Es una entidad pública del sector minero, caracterizada por ejercer la competencia exclusiva de la organización, administración y ejecución de las políticas para el aprovechamiento sustentable de los recursos minerales no metálicos en el estado Anzoátegui, no reservados al poder nacional, garantizando la permisología necesaria para tales fines con servicio de calidad que satisfagan al interesado.',
        ],
        redes: {
            facebook: 'https://www.facebook.com/corpominas.anzoategui',
            instagram: 'https://www.instagram.com/corpominasanz/',
        },
    },
    {
        siglas: 'CORDAGRO',
        nombre: 'Corporación para el Desarrollo Rural Sustentable de Anzoátegui',
        descripcion: [
            'Es el ente encargado de gerenciar la ejecución de programas, proyectos y políticas para generar el desarrollo rural sustentable dentro de una justa distribución de la riqueza, implementando una estrategia de democratización y participación del poder popular a fin de procurar la paz social en el campo, además de garantizar la seguridad agroalimentaria y la vigencia efectiva de los derechos de protección ambiental, procurando que los recursos públicos, privados, nacionales e internacionales estén orientados a ejecutar actividades orientadas a acrecentar la producción, infraestructura, servicio, gestión social y ambiental de las comunidades rurales.',
        ],
        redes: {
            facebook: 'https://www.facebook.com/profile.php?id=100011426683085',
            instagram: 'https://www.instagram.com/cordagroanz/',
        },
    },
    {
        siglas: 'IEMA',
        nombre: 'Instituto Estadal de la Mujer',
        descripcion: [
            'Es el ente encargado de planificar y ejecutar planes, programas y proyectos dirigidos a las mujeres en coordinación con el Instituto Nacional de la Mujer que impulsa la participación del Poder Popular, garantizando la igualdad de oportunidades y promoviendo la participación protagónica de las féminas en los ámbitos político, económico y social del estado Anzoátegui.',
            'El IEMA tiene la obligación de intervenir en la formulación de las políticas públicas que afecten a la mujer, así como velar por la garantía de su salud, educación, formación, capacitación, empleo, ingreso, seguridad social, además de velar porque éstas tengan una vida libre de violencia.',
            'Asimismo, garantiza la prestación de los servicios necesarios en materia jurídica, socioeconómica, sociocultural y sociopolítica, en los términos contemplados en la ley de igualdad de oportunidades para la mujer.',
        ],
        redes: {
            facebook: null,
            instagram: null,
        },
    },
    {
        siglas: 'FASGANZ',
        nombre: 'Fondo Administrado de Salud para la Gobernación del Estado Anzoátegui',
        descripcion: [
            'Es la institución encargada de coadyuvar a garantizar el derecho a un sistema de salud a los funcionarios, empleados, obreros, educadores, jubilados y pensionados, sobrevivientes, familiares, tanto de la Gobernación del estado Anzoátegui como de sus entes descentralizados, teniendo como fin la efectiva asistencia médica.',
            'De igual forma, debe elaborar, coordinar y supervisar planes y programas de salud asegurando respuestas oportunas y eficientes, así como establecer vínculos directos y mantener una relación respetuosa receptiva y justa con las clínicas y centros de salud dependientes del Estado, para fortalecer el Sistema Público Nacional de Salud, que redunden en beneficios para la población.',
        ],
        redes: {
            facebook: null,
            instagram: null,
        },
    },
    {
        siglas: 'SIGRAED',
        nombre: 'Sistema Integrado de Gestión de Riesgos Administración de Emergencias de Carácter Civil y Desastres',
        descripcion: [
            'Tiene como función principal la prevención, mitigación de riesgos socio naturales y tecnológicos, además de la administración de emergencias de carácter civil y desastres en el estado a través de políticas públicas enmarcadas en el Plan de Seguridad de la Nación, que deriven en estrategias para la prevención y atención de eventos adversos a fin de preservar la vida como valor supremo de todas y todos en el territorio anzoatiguense con la atención de todo lo que represente amenaza, vulnerabilidad o riesgo para el desarrollo sustentable del estado.',
        ],
        redes: {
            facebook: 'https://www.facebook.com/Sigraed-Anzo%C3%A1tegui-2844844732223468',
            instagram: null,
        },
    },
    {
        siglas: 'COVINEA',
        nombre: 'Corporación de Vialidad e Infraestructura del Estado Anzoátegui (COVINEA) S.A',
        descripcion: [
            'La Corporación De Vialidad e Infraestructura del Estado Anzoátegui es un organismo gubernamental encargado de la ejecución de obras públicas de interés estadal, así como la conservación, administración y aprovechamiento de las carreteras, puentes y autopistas, incluyendo las vialidades agrícolas que se encuentren en el territorio regional, alcanzando las necesidades de los sectores de salud, educación, cultura, deporte, turismo, seguridad, entre otras.',
            'Además, tiene como misión construir, mantener y dotar obras orientadas a mejorar la calidad de vida de los habitantes del estado, bajo un modelo socialista de participación e inclusión, apoyados en la responsabilidad, capacidad y desarrollo integral de nuestro talento humano, garantizando el uso racional de los recursos mediante la planificación, ejecución, seguimiento y control de obras y proyectos dirigidos a solucionar las necesidades en materia de servicios públicos de las comunidades.',
            'La visión de Covinea es lograr ser modelo de administración pública estadal, generando obras y prestación de servicios de calidad, en cooperación y consenso con los Poderes Públicos nacionales, regionales y comunales a objeto de consolidar la infraestructura en el estado, apoyados en los lineamientos de desarrollo y planes nacionales para el bienestar de la población.',
        ],
        redes: {
            facebook: null,
            instagram: 'https://www.instagram.com/covineaa/',
        },
    },
    {
        siglas: 'EGIDSA',
        nombre: 'Empresa de Gestión Integral de los Desechos Sólidos Anzoátegui (EGIDSA)',
        descripcion: [
            'La Empresa de Gestión Integral de los Desechos Sólidos de Anzoátegui tiene como finalidad crear una unidad de trabajo colectiva destinada a la prestación del servicio de disposición final de los desechos sólido que satisfaga las necesidades de las comunidades a través de la reinversión social de sus excedentes; cuya propiedad es ejercida por el estado en nombre de la comunidad y en beneficio del colectivo.',
        ],
        redes: {
            facebook: null,
            instagram: null,
        },
    },
    {
        siglas: 'IAPANZ',
        nombre: 'Instituto Autónomo de Policía del estado Anzoátegui (IAPANZ)',
        descripcion: [
            'Es el ente encargado de garantizar la seguridad ciudadana en todo el territorio del estado Anzoátegui, proteger el libre ejercicio de los derechos y libertades de las personas, prevenir y combatir toda clase de delito, así como también mantener la paz interna, la tranquilidad y el orden público en estricto respeto a los derechos humanos y las libertades fundamentales en la jurisdicción de su competencia.',
        ],
        redes: {
            facebook: null,
            instagram: null,
        },
    },
    {
        siglas: 'CORPAVANZ',
        nombre: 'Corporación Avícola de Anzoátegui',
        descripcion: null,
        redes: {
            facebook: null,
            instagram: 'https://www.instagram.com/corpavanz_/',
        },
    },
    {
        siglas: 'INSOTRANZ',
        nombre: null,
        descripcion: null,
        redes: {
            facebook: null,
            instagram: 'https://www.instagram.com/insotranz/',
        },
    },
    {
        siglas: 'PROCURADURÍA GENERAL DEL ESTADO',
        nombre: null,
        descripcion: null,
        redes: {
            facebook: null,
            instagram: 'https://www.instagram.com/procuraduria_anzoategui/',
        },
    },
];

export default function EntesAdscritos() {
    return (
        <>
            <Head title="Entes Adscritos" />
            <WebLayout>
                <GobernacionNav activo="entesAdscritos" />

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
                                    Entes Adscritos
                                </h1>
                                <p className="mt-5 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Conoce los organismos, institutos y entidades que forman parte
                                    de la estructura institucional del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-50 py-16">
                        <div className="mx-auto max-w-6xl px-6 lg:px-8">
                            <div className="mb-12 max-w-3xl">
                                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                                    Estructura institucional
                                </p>
                                <h2 className="mt-2 text-3xl font-bold text-blue-950 sm:text-4xl">
                                    Organismos adscritos a la Gobernación
                                </h2>
                                <p className="mt-4 leading-7 text-slate-600">
                                    Información de los principales entes e instituciones vinculados
                                    a la administración pública estadal.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {entes.map((ente) => (
                                    <article
                                        key={ente.siglas}
                                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="border-b border-slate-100 bg-blue-950 px-6 py-5">
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-yellow-300">
                                                    <Building2 className="h-6 w-6" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-xs font-bold uppercase tracking-widest text-yellow-300">
                                                        {ente.siglas}
                                                    </p>
                                                    {ente.nombre ? (
                                                        <h3 className="mt-1 text-lg font-bold leading-6 text-white">
                                                            {ente.nombre}
                                                        </h3>
                                                    ) : (
                                                        <p className="mt-1 text-sm font-bold text-red-400">
                                                            FALTA NOMBRE COMPLETO
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-6 py-6">
                                            {ente.descripcion ? (
                                                <div className="space-y-4 text-sm leading-7 text-slate-600">
                                                    {ente.descripcion.map((parrafo) => (
                                                        <p key={parrafo}>{parrafo}</p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-sm font-semibold leading-7 text-red-600">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit. Sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </p>
                                            )}

                                            {ente.objetivos && (
                                                <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-600">
                                                    {ente.objetivos.map((objetivo) => (
                                                        <li key={objetivo}>{objetivo}</li>
                                                    ))}
                                                </ol>
                                            )}

                                            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                                                {ente.redes.facebook ? (
                                                    <a
                                                        href={ente.redes.facebook}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                                                    >
                                                        <Facebook className="h-4 w-4" />
                                                        Facebook
                                                        <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                ) : (
                                                    <span className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                                                        <Facebook className="h-4 w-4" />
                                                        Facebook: FALTA ENLACE
                                                    </span>
                                                )}

                                                {ente.redes.instagram ? (
                                                    <a
                                                        href={ente.redes.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
                                                    >
                                                        <Instagram className="h-4 w-4" />
                                                        Instagram
                                                        <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                ) : (
                                                    <span className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                                                        <Instagram className="h-4 w-4" />
                                                        Instagram: FALTA ENLACE
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
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
                                    Instituciones al servicio del estado
                                </h2>
                                <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-100">
                                    Conoce la estructura institucional y los organismos que
                                    contribuyen al desarrollo y atención de las comunidades
                                    anzoatiguenses.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
