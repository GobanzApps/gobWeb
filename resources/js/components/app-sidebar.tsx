import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { User, BookUser, Tag, LayoutGrid, Shield, SearchCheckIcon, ClipboardCheck, CalendarCheck, Megaphone, ScrollText } from 'lucide-react';
import AppLogo from './app-logo';
import { useCan } from '@/lib/useCan';
import { Settings } from 'lucide-react';

const platformItems: NavItem[] = [
    {
        title: 'Panel Principal',
        url: '/sys/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Gacetas',
        url: '/sys/gacetas',
        icon: Megaphone,
    },
    {
        title: 'Planes',
        url: '/sys/planes',
        icon: ClipboardCheck,
    },
    {
        title: 'Noticias',
        url: '/sys/noticias',
        icon: ScrollText,
    },
    {
        title: 'Eventos',
        url: '/sys/eventos',
        icon: CalendarCheck,
    },
];

const adminItems: NavItem[] = [
    {
        title: 'Estado de Planes',
        url: '/sys/estados-plan',
        icon: SearchCheckIcon,
        permission: 'estados-plan.view',
    },
    {
        title: 'Personal',
        url: '/sys/personnel',
        icon: BookUser,
        permission: 'personnel.view',
    },
    {
        title: 'Cargos',
        url: '/sys/positions',
        icon: Tag,
        permission: 'positions.view',
    },
    {
        title: 'Usuarios',
        url: '/sys/users',
        icon: User,
        permission: 'users.view',
    },
    {
        title: 'Roles y Permisos',
        url: '/sys/roles',
        icon: Shield,
        permission: 'roles.view',
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     url: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     url: 'https://laravel.com/docs/starter-kits',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    const { can } = useCan();

    const filteredAdminItems = adminItems.filter(item => {
        if (!item.permission) return true;
        return can(item.permission);
    });

    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain
                    platformItems={platformItems}
                    adminGroup={{
                        title: 'Configuración',
                        icon: Settings,
                        items: filteredAdminItems,
                    }}
                />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
