import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
    const [menuAbierto, setMenuAbierto] = useState<string | null>(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const toggleMenu = (menu: string) => setMenuAbierto(prev => prev === menu ? null : menu);
    const cerrarMenus = () => {
        setMenuAbierto(null);
        setMobileMenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) setMenuAbierto(null);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
                <Link href="/" onClick={cerrarMenus} className="shrink-0">
                    <img src="/images/logo-anzoategui.png" alt="Gobernación del Estado Anzoátegui" className="h-16 w-auto" />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden items-center gap-1 lg:flex">
                    <a href="/" onClick={cerrarMenus} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700">Inicio</a>

                    <div className="relative">
                        <button onClick={() => toggleMenu('gobernacion')} className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${menuAbierto === 'gobernacion' ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}>
                            Gobernación <ChevronDown className="h-4 w-4" />
                        </button>
                        {menuAbierto === 'gobernacion' && (
                            <div className="absolute left-0 top-full mt-2 w-70 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                                <Link href={route('web.historia')} onClick={cerrarMenus} className="block rounded-lg px-4 py-3 text-sm hover:bg-blue-50"><span className="font-semibold">Historia</span><span className="mt-1 block text-xs text-slate-500">Conoce la historia de nuestra Gobernación</span></Link>
                                <Link href={route('web.mandatos')} onClick={cerrarMenus} className="block rounded-lg px-4 py-3 text-sm hover:bg-blue-50"><span className="font-semibold">Mandatos</span><span className="mt-1 block text-xs text-slate-500">Gobernantes del Estado Anzoátegui</span></Link>
                                <Link href="/gobernacion/entes-adscritos" onClick={cerrarMenus} className="block rounded-lg px-4 py-3 text-sm hover:bg-blue-50"><span className="font-semibold">Entes Adscritos</span><span className="mt-1 block text-xs text-slate-500">Instituciones y organismos</span></Link>
                                <Link href="/gobernacion/gabinetes" onClick={cerrarMenus} className="block rounded-lg px-4 py-3 text-sm hover:bg-blue-50"><span className="font-semibold">Gabinetes</span><span className="mt-1 block text-xs text-slate-500">Conoce nuestros gabinetes</span></Link>
                                <Link href={route('web.gacetas')} onClick={cerrarMenus} className="block rounded-lg px-4 py-3 text-sm hover:bg-blue-50"><span className="font-semibold">Gacetas</span><span className="mt-1 block text-xs text-slate-500">Gacetas oficiales del Estado Anzoátegui</span></Link>                                
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button onClick={() => toggleMenu('acerca')} className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${menuAbierto === 'acerca' ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}>
                            Acerca de nosotros <ChevronDown className="h-4 w-4" />
                        </button>
                        {menuAbierto === 'acerca' && (
                            <div className="absolute left-1/2 top-full mt-2 w-[620px] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <p className="mb-3 border-b border-yellow-400 pb-2 text-xs font-bold uppercase tracking-wider text-blue-800">El Estado</p>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Historia</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Geografía</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Efemérides</Link>
                                    </div>

                                    <div>
                                        <p className="mb-3 border-b border-yellow-400 pb-2 text-xs font-bold uppercase tracking-wider text-blue-800">Identidad</p>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Símbolos Patrimoniales</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Bandera</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Escudo</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Himno</Link>
                                    </div>

                                    <div>
                                        <p className="mb-3 border-b border-yellow-400 pb-2 text-xs font-bold uppercase tracking-wider text-blue-800">Naturaleza</p>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Vegetación</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Flora</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Recursos Minerales</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Lagunas y Ríos</Link>
                                        <Link href="#" onClick={cerrarMenus} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700">Islas y Bahías</Link>
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-6 border-t pt-4">
                                    <div>
                                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-800">Cultura</p>
                                        <div className="flex flex-wrap gap-x-5 gap-y-1">
                                            <Link href="#" onClick={cerrarMenus} className="text-sm text-slate-600 hover:text-blue-700">Costumbres y Tradiciones</Link>
                                            <Link href="#" onClick={cerrarMenus} className="text-sm text-slate-600 hover:text-blue-700">Bailes</Link>
                                            <Link href="#" onClick={cerrarMenus} className="text-sm text-slate-600 hover:text-blue-700">Plazas</Link>
                                            <Link href="#" onClick={cerrarMenus} className="text-sm text-slate-600 hover:text-blue-700">Sitios Históricos</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                    <a href="/planes" onClick={cerrarMenus} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700">Planes</a>
                    <a href="/noticias" onClick={cerrarMenus} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700">Noticias</a>
                    <a href="/eventos" onClick={cerrarMenus} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700">Eventos</a>
                </nav>

                <div className="flex items-center gap-3">
                    <Link href={route('login')} className="hidden rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 lg:block">Ingresar</Link>
                    <button onClick={() => { setMobileMenu(!mobileMenu); setMenuAbierto(null); }} className="rounded-lg p-2 text-slate-700 lg:hidden">
                        {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenu && (
                <div className="border-t bg-white px-5 py-4 lg:hidden">
                    <div className="flex flex-col gap-1">
                        <a href="/" onClick={cerrarMenus} className="rounded-lg px-3 py-3 text-sm font-medium">Inicio</a>

                        <button onClick={() => toggleMenu('mobileGob')} className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium">Gobernación <ChevronDown className="h-4 w-4" /></button>
                        {menuAbierto === 'mobileGob' && (
                            <div className="mb-2 rounded-lg bg-slate-50 px-4 py-2">
                                <Link href="/gobernacion/historia" onClick={cerrarMenus} className="block py-2 text-sm">Historia</Link>
                                <Link href="/gobernacion/mandatos" onClick={cerrarMenus} className="block py-2 text-sm">Mandatos</Link>
                                <Link href="/gobernacion/entes-adscritos" onClick={cerrarMenus} className="block py-2 text-sm">Entes Adscritos</Link>
                                <Link href="/gobernacion/gabinetes" onClick={cerrarMenus} className="block py-2 text-sm">Gabinetes</Link>
                            </div>
                        )}

                        <button onClick={() => toggleMenu('mobileAcerca')} className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium">Acerca de nosotros <ChevronDown className="h-4 w-4" /></button>
                        {menuAbierto === 'mobileAcerca' && (
                            <div className="mb-2 rounded-lg bg-slate-50 px-4 py-2">
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Historia</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Geografía</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Efemérides</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Símbolos Patrimoniales</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Bandera</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Escudo</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Himno</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Vegetación</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Flora</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Recursos Minerales</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Lagunas y Ríos</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Islas y Bahías</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Patrimonio Natural</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Costumbres y Tradiciones</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Bailes</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Plazas</Link>
                                <Link href="#" onClick={cerrarMenus} className="block py-2 text-sm">Sitios Históricos</Link>
                            </div>
                        )}

                        <a href="/planes" onClick={cerrarMenus} className="rounded-lg px-3 py-3 text-sm font-medium">Planes</a>
                        <a href="/noticias" onClick={cerrarMenus} className="rounded-lg px-3 py-3 text-sm font-medium">Noticias</a>
                        <a href="/eventos" onClick={cerrarMenus} className="rounded-lg px-3 py-3 text-sm font-medium">Eventos</a>
                        <Link href={route('login')} className="mt-2 rounded-lg bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white">Ingresar al sistema</Link>
                    </div>
                </div>
            )}
        </header>
    );
}