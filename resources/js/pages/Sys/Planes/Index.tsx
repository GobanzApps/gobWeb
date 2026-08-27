import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { useState } from 'react';

import { Can } from '@/components/can';
import { DataTable } from '@/components/data-table';
import { columns, Plan } from './columns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pagination } from '@/components/pagination';
import { Search } from 'lucide-react';

interface PaginatedPlans {
    data: Plan[];
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
}

interface Props {
    planes: PaginatedPlans;
    filters: {
        search?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Planes',
        href: '/sys/planes',
    },
];

export default function Index({ planes, filters }: Props) {
    const [search, setSearch] = useState(filters.search ?? '');

    const handleSearch = () => {
        router.get(
            route('planes.index'),
            { search },
            { preserveState: true, replace: true }
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Planes" />

            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold">Planes</h1>
                        <p className="text-sm text-muted-foreground">
                            Gestiona los planes y proyectos de la Gobernación.
                        </p>
                    </div>

                    <Can permission="planes.create">
                        <Link href={route('planes.create')}>
                            <Button>Nuevo plan</Button>
                        </Link>
                    </Can>
                </div>

                <div className="flex max-w-sm">
                    <Input
                        placeholder="Buscar planes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSearch();
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

                <DataTable columns={columns} data={planes.data} />

                <Pagination links={planes.links} />
            </div>
        </AppLayout>
    );
}