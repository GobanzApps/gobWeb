import { Link } from '@inertiajs/react';
import { Building2 } from 'lucide-react';

interface Props {
    activo: 'entesAdscritos' | 'gacetas';
}

const enlaces = [
    { id: 'entesAdscritos', nombre: 'Entes Adscritos', ruta: 'web.entes-adscritos' },
    { id: 'gacetas', nombre: 'Gacetas', ruta: 'web.gacetas' },
] as const;

export default function GobernacionNav({ activo }: Props) {
    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center gap-3 border-b border-slate-100 py-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                        <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Gobernación</p>
                        <p className="text-sm text-slate-500">Información institucional del Estado Anzoátegui</p>
                    </div>
                </div>

                <nav className="flex gap-1 overflow-x-auto">
                    {enlaces.map((enlace) => {
                        const seleccionado = activo === enlace.id;

                        return (
                            <Link
                                key={enlace.id}
                                href={route(enlace.ruta)}
                                className={`relative whitespace-nowrap px-4 py-4 text-sm font-semibold transition ${
                                    seleccionado ? 'text-blue-700' : 'text-slate-500 hover:text-blue-700'
                                }`}
                            >
                                {enlace.nombre}
                                {seleccionado && <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-yellow-400" />}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </section>
    );
}