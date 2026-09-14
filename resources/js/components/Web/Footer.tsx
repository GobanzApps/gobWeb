import { useState } from 'react';
import { ArrowRight, Clock3, Facebook, Instagram, MapPin, Mail, Phone, Send, X } from 'lucide-react';

const municipios = [
    'Anaco',
    'Aragua',
    'Diego Bautista Urbaneja',
    'Fernando de Peñalver',
    'Francisco del Carmen Carvajal',
    'Francisco de Miranda',
    'Guanta',
    'Independencia',
    'Juan Antonio Sotillo',
    'Juan Manuel Cajigal',
    'José Gregorio Monagas',
    'Libertad',
    'McGregor',
    'Pedro María Freites',
    'Píritu',
    'San José de Guanipa',
    'San Juan de Capistrano',
    'Santa Ana',
    'Simón Bolívar',
    'Simón Rodríguez',
];

export default function Footer() {
    const [contactoAbierto, setContactoAbierto] = useState(false);

    return (
        <>
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
                            <h3 className="font-bold text-blue-950">Información</h3>
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

                            <button
                                type="button"
                                onClick={() => setContactoAbierto(true)}
                                className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-700 px-6 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                            >
                                Contáctanos
                                <ArrowRight className="h-4 w-4" />
                            </button>

                            <div className="mt-6 flex gap-2 md:justify-end">
                                <a
                                    href="https://www.facebook.com/AnzoateguiGob/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-blue-700 transition hover:bg-blue-700 hover:text-white"
                                >
                                    <Facebook className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://www.instagram.com/anzoateguigob/"
                                    target="_blank"
                                    rel="noopener noreferrer"
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

            {contactoAbierto && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
                    onClick={() => setContactoAbierto(false)}
                >
                    <div
                        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setContactoAbierto(false)}
                            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
                            aria-label="Cerrar"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="border-b border-slate-100 px-7 py-7 sm:px-10">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                                Atención
                            </p>
                            <h2 className="mt-2 text-3xl font-bold text-blue-950">
                                Contáctanos
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                Envíanos tu consulta, sugerencia o solicitud de información y nos pondremos en contacto contigo.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                            <form className="space-y-5 p-7 sm:p-10">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Tu nombre"
                                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="correo@ejemplo.com"
                                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Teléfono <span className="font-normal text-slate-400">(opcional)</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="0414-0000000"
                                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Municipio
                                        </label>
                                        <select
                                            defaultValue=""
                                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                        >
                                            <option value="" disabled>
                                                Selecciona tu Municipio
                                            </option>
                                            {municipios.map((municipio) => (
                                                <option key={municipio} value={municipio}>
                                                    {municipio}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Dirección 1
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Calle, avenida, urbanización, sector..."
                                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Dirección 2 <span className="font-normal text-slate-400">(opcional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Apartamento, edificio, referencia..."
                                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Asunto
                                    </label>
                                    <select
                                        defaultValue=""
                                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option>Consulta general</option>
                                        <option>Solicitud de información</option>
                                        <option>Sugerencia</option>
                                        <option>Reporte</option>
                                        <option>Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Mensaje
                                    </label>
                                    <textarea
                                        rows={6}
                                        placeholder="Escribe aquí tu mensaje..."
                                        className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                                >
                                    <Send className="h-4 w-4" />
                                    Enviar mensaje
                                </button>
                            </form>

                            <aside className="border-t bg-slate-50 p-7 sm:p-10 lg:border-l lg:border-t-0">
                                <h3 className="text-lg font-bold text-blue-950">
                                    Gobernación del Estado Anzoátegui
                                </h3>

                                <div className="mt-6 space-y-5">
                                    <div className="flex gap-3">
                                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                                Dirección
                                            </p>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Av. 5 de Julio, Barcelona 6001, Estado Anzoátegui.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                                Horario
                                            </p>
                                            <p className="mt-1 text-sm text-slate-600">
                                                Lunes – Viernes<br />
                                                8:00 am – 3:00 pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                                Correo
                                            </p>
                                            <p className="mt-1 break-all text-sm text-slate-600">
                                                contacto@gobernacionanzoategui.gob.ve
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                                Teléfono
                                            </p>
                                            <p className="mt-1 text-sm text-slate-600">
                                                Información telefónica
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white">
                                    <iframe
                                        src="https://maps.google.com/maps?q=10.1389334,-64.6879109&z=17&output=embed"
                                        className="h-52 w-full border-0"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación de la Gobernación del Estado Anzoátegui"
                                    />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
