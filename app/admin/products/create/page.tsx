import { AdminManageProduct } from "@/components/admin-create-product";
import { AdminDashboardHeader } from "@/components/admin-dashboard-header";

export default function CreateProduct() {
    return (
        <div className="space-y-10">
            <AdminDashboardHeader title="Crie um produto" description="Insira as informações" />
            <AdminManageProduct />
        </div>
    )
}