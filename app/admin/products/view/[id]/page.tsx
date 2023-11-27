import { AdminDashboardHeader } from "@/components/admin-dashboard-header";
import ViewProduct from "@/components/admin-view-product";
import { getCategories, getProductById } from "@/lib/product/actions";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id

    const [product, categories] = await Promise.all([
        getProductById(id),
        getCategories()
    ])

    return (
        <div className="space-y-10">
            <AdminDashboardHeader title="Visualizando um produto" description={product?.title} />
            <ViewProduct product={product} categories={categories} />
        </div>
    )
}