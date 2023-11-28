import { AdminCreateCategorie } from "@/components/admin-create-categorie";
import { AdminDashboardHeader } from "@/components/admin-dashboard-header";

export default async function CreateCategorie() {
    return (
        <div className="space-y-10">
            <AdminDashboardHeader title="Crie uma categoria" description="Insira as informações" />
            <AdminCreateCategorie />
        </div>
    )
}