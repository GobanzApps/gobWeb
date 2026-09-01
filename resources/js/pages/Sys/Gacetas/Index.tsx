import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { useState } from 'react';

import { Can } from '@/components/can';
import { DataTable } from '@/components/data-table';
import { columns, Gaceta } from './columns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pagination } from '@/components/pagination';
import { Search } from 'lucide-react';

interface PaginatedGacetas {
    data: Gaceta[];
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
}

interface Props {
    gacetas: PaginatedGacetas;
    filters: {
        search?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gacetas',
        href: '/gacetas',
    },
];

export default function Index({ gacetas, filters }: Props) {
    const [search, setSearch] = useState(filters.search ?? '');

    const handleSearch = () => {
        router.get(
            route('gacetas.index'),
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gacetas" />

            <div className="p-6 space-y-4">

                {/* Encabezado */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold">
                            Gacetas
                        </h1>

                        <p className="text-sm text-muted-foreground">
                            Gestiona las gacetas oficiales.
                        </p>
                    </div>

                    <Can permission="gacetas.create">
                        <Link href={route('gacetas.create')}>
                            <Button>
                                Nueva gaceta
                            </Button>
                        </Link>
                    </Can>
                </div>

                {/* Buscador */}
                <div className="flex max-w-sm">
                    <Input
                        placeholder="Buscar gacetas..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        className="rounded-r-none"
                    />

                    <Button
                        size="icon"
                        onClick={handleSearch}
                        className="rounded-l-none"
                        title="Buscar"
                    >
                        <Search className="h-4 w-4" />
                    </Button>
                </div>

                {/* Tabla */}
                <DataTable
                    columns={columns}
                    data={gacetas.data}
                />

                {/* Paginación */}
                <Pagination links={gacetas.links} />

            </div>
        </AppLayout>
    );
}