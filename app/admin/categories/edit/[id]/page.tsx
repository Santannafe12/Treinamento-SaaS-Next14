import { AdminDashboardHeader } from "@/components/admin-dashboard-header";
import EditCategorie from "@/components/admin-edit-categorie";
import { getCategorieById } from "@/lib/categories/action";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id

    const categorie = await getCategorieById(id)

    return (
        <div className="space-y-10">
            <AdminDashboardHeader title="Edite uma categoria" description="Insira as informações" />
            <EditCategorie categorie={categorie} />
        </div>
    )
}