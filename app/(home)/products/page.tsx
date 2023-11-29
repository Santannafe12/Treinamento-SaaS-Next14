import ProductsGrid from "@/components/products-grid";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
        order?: string
        itemsPerPage?: number
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    const order = searchParams?.order || ''
    const itemsPerPage = Number(searchParams?.itemsPerPage) || 12

    return (
        <div className="space-y-12">
            <ProductsGrid query={query} currentPage={currentPage} order={order} itemsPerPage={itemsPerPage} />
        </div>
    )
}