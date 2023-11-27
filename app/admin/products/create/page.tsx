import { AdminManageProduct } from "@/components/admin-create-product";
import { AdminDashboardHeader } from "@/components/admin-dashboard-header";
import { getCategories } from "@/lib/product/actions";

export default async function CreateProduct() {
    const categories = await getCategories()

    return (
        <div className="space-y-10">
            <AdminDashboardHeader title="Crie um produto" description="Insira as informações" />
            <AdminManageProduct categories={categories} />
        </div>
    )
}