import { HorizontalCard } from "@/components/horizontal-card";
import { IndividualProduct } from "@/components/individual-product";
import { Similar } from "@/components/similar";

export default async function Product() {
    return (
        <div className="w-full space-y-32">
            <IndividualProduct />
            <Similar />
        </div>
    )
}