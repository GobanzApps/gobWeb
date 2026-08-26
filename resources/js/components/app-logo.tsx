import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className=" flex aspect-square size-16 items-center justify-center rounded-md">
                <img 
                    src="/assets/img/gobLogo.png" 
                    alt="Logo Gobierno" 
                    className="size-full object-contain" 
                />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">Página Principal</span>
            </div>
        </>
    );
}
