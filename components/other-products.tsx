import { OtherProductsProps } from "@/types/featured";
import { Card } from "./card";

export const OtherProducts = ({ otherProducts }: OtherProductsProps) => {
    return (
        <div className='w-11/12 m-auto gap-10 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {otherProducts.map((item, index) => (
                <Card key={index} product={item} />
            ))}
        </div>
    )
}