import { OtherProductsProps } from "@/types/featured";
import { Card } from "./card";

export const OtherProducts = ({ otherProducts }: OtherProductsProps) => {
    return (
        <div className='w-11/12 m-auto flex flex-wrap justify-around gap-8'>
            {otherProducts.map((item, index) => (
                <Card key={index} product={item} />
            ))}
        </div>
    )
}