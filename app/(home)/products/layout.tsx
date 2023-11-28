import { SecondaryProductsHeader } from "@/components/secondary-products-header"

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <SecondaryProductsHeader />
            {children}
        </section>
    )
}