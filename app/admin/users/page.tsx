import { AdminDashboardHeader } from "@/components/admin-dashboard-header";
import AdminUsersDashboardTable from "@/components/admin-dashboard-table-users";

export default async function AdminUsers({
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
        <div className="space-y-12">
            <AdminDashboardHeader title="Painel de Usuários" description="Gerencie os usuários"/>
            <AdminUsersDashboardTable query={query} currentPage={currentPage} />
        </div>
    )
}