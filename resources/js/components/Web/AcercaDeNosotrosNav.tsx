import { Link } from '@inertiajs/react';
import { Landmark } from 'lucide-react';

interface Props {
    seccion: 'elEstado' | 'simbolosPatrimoniales' | 'naturaleza' | 'cultura';
    activo: string;
}

const secciones = {
    elEstado: {
        titulo: 'El Estado',
        descripcion: 'Historia, territorio y acontecimientos del Estado Anzoátegui',
        enlaces: [
            { id: 'historia', nombre: 'Historia', ruta: 'web.acerca.historia' },
            { id: 'mandatos', nombre: 'Mandatos', ruta: 'web.acerca.mandatos' },
            { id: 'geografia', nombre: 'Geografía', ruta: 'web.acerca.geografia' },
            { id: 'efemerides', nombre: 'Efemérides', ruta: 'web.acerca.efemerides' },
        ],
    },
    simbolosPatrimoniales: {
        titulo: 'Símbolos Patrimoniales',
        descripcion: 'Símbolos y elementos representativos del Estado Anzoátegui',
        enlaces: [
            { id: 'bandera', nombre: 'Bandera', ruta: 'web.acerca.bandera' },
            { id: 'escudo', nombre: 'Escudo', ruta: 'web.acerca.escudo' },
            { id: 'himno', nombre: 'Himno', ruta: 'web.acerca.himno' },
        ],
    },
    naturaleza: {
        titulo: 'Naturaleza',
        descripcion: 'Riquezas naturales y paisajes del Estado Anzoátegui',
        enlaces: [
            { id: 'floraVegetacion', nombre: 'Flora y Vegetación', ruta: 'web.acerca.flora-vegetacion' },
            { id: 'recursosMinerales', nombre: 'Recursos Minerales', ruta: 'web.acerca.recursos-minerales' },
            { id: 'lagunasRios', nombre: 'Lagunas y Ríos', ruta: 'web.acerca.lagunas-rios' },
            { id: 'islasBahias', nombre: 'Islas y Bahías', ruta: 'web.acerca.islas-bahias' },
        ],
    },
    cultura: {
        titulo: 'Cultura',
        descripcion: 'Tradiciones, lugares y expresiones culturales',
        enlaces: [
            { id: 'costumbresTradiciones', nombre: 'Costumbres y Tradiciones', ruta: 'web.acerca.costumbres-tradiciones' },
            { id: 'bailes', nombre: 'Bailes', ruta: 'web.acerca.bailes' },
            { id: 'plazas', nombre: 'Plazas', ruta: 'web.acerca.plazas' },
            { id: 'sitiosHistoricos', nombre: 'Sitios Historicos', ruta: 'web.acerca.sitios-historicos' },
        ],
    },
};

export default function AcercaDeNosotrosNav({ seccion, activo }: Props) {
    const contenido = secciones[seccion];

    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center gap-3 border-b border-slate-100 py-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                        <Landmark className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Acerca de nosotros</p>
                        <p className="text-sm text-slate-500">{contenido.descripcion}</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 overflow-x-auto">
                    {contenido.enlaces.map((enlace) => {
                        const seleccionado = activo === enlace.id;

                        return (
                            <Link
                                key={enlace.id}
                                href={route(enlace.ruta)}
                                className={`relative whitespace-nowrap px-4 py-4 text-sm font-semibold transition ${seleccionado ? 'text-blue-700' : 'text-slate-500 hover:text-blue-700'}`}
                            >
                                {enlace.nombre}
                                {seleccionado && <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-yellow-400" />}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}