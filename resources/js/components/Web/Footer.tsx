import { Link } from '@inertiajs/react';
import { ArrowRight, Clock3, Facebook, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <img
                            src="/images/logo-anzoategui.png"
                            alt="Gobernación del Estado Anzoátegui"
                            className="h-20 w-auto"
                        />

                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                            Portal institucional de la Gobernación del Estado Anzoátegui.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-blue-950">
                            Información
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-slate-500">
                            <p className="flex gap-2">
                                <MapPin className="h-4 w-4 shrink-0 text-blue-700" />
                                Av. 5 de Julio, Barcelona 6001, Anzoátegui
                            </p>

                            <p className="flex gap-2">
                                <Clock3 className="h-4 w-4 shrink-0 text-blue-700" />
                                Lunes – Viernes, 8:00 am – 3:00 pm
                            </p>
                        </div>
                    </div>

                    <div className="md:text-right">
                        <h3 className="font-bold text-blue-950">
                            ¿Necesitas contactarnos?
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            Estamos disponibles para atender tus consultas y solicitudes.
                        </p>

                        <Link
                            href="#"
                            className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-700 px-6 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                        >
                            Contáctanos
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <div className="mt-6 flex gap-2 md:justify-end">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-blue-700 transition hover:bg-blue-700 hover:text-white"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>

                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-blue-700 transition hover:bg-blue-700 hover:text-white"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col justify-between gap-3 border-t pt-6 text-xs text-slate-400 sm:flex-row">
                    <p>
                        © 2026 Gobernación del Estado Anzoátegui. Todos los derechos reservados.
                    </p>

                    <div className="flex items-center gap-1">
                        <span className="h-1 w-7 rounded-full bg-blue-600" />
                        <span className="h-1 w-7 rounded-full bg-yellow-400" />
                        <span className="h-1 w-7 rounded-full bg-green-600" />
                    </div>
                </div>
            </div>
        </footer>
    );
}