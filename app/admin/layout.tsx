import { AdminDeleteModal } from "@/components/admin-delete-modal"
import { AdminHeader } from "@/components/admin-header"
import { Footer } from "@/components/footer"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <AdminHeader />
            <section className="w-11/12 m-auto">
                {children}
            </section>
            <Footer />
        </section>
    )
}