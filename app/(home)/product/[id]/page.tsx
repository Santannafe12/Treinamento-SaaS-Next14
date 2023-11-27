import IndividualProduct from "@/components/individual-product"
import { getProductById } from "@/lib/product/actions"

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id

    const product = await getProductById(id)

    return (
        <div className="w-full space-y-32">
            <IndividualProduct product={product} />
        </div>
    )
}