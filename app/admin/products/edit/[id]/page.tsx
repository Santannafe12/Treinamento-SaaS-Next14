import { AdminDashboardHeader } from "@/components/admin-dashboard-header";
import EditProduct from "@/components/admin-edit-product";
import { getCategories } from "@/lib/categories/action";
import { getProductById } from "@/lib/products/actions";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id

    const [product, categories] = await Promise.all([
        getProductById(id),
        getCategories()
    ])

    return (
        <div className="space-y-10">
            <AdminDashboardHeader title="Edite um produto" description="Insira as informações" />
            <EditProduct product={product} categories={categories} />
        </div>
    )
}