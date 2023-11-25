import { AdminDashboardHeader } from "@/components/admin-dashboard-header";
import { AdminManageUser } from "@/components/admin-create-user";

export default function EditUser() {
    return (
        <div className="space-y-10">
            <AdminDashboardHeader title="Edite um usuário" description="Insira as informações" />
            <AdminManageUser />
        </div>
    )
}