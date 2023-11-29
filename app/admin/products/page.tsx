import { AdminDashboardHeader } from "@/components/admin-dashboard-header";
import AdminDashboardTableCategories from "@/components/admin-dashboard-table-categories";
import AdminDashboardTableProducts from "@/components/admin-dashboard-table-products";

export default async function AdminProducts({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    return (
        <div className="space-y-10">
            <AdminDashboardHeader title="Painel de Produtos" description="Gerencie os produtos e categorias" />
            <AdminDashboardTableProducts query={query} currentPage={currentPage} />
            <AdminDashboardTableCategories/>
        </div>
    )
}