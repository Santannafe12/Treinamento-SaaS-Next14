'use client'

import { Carousel } from "@/components/carousel";
import IndividualProduct from "@/components/individual-product";
import { useParams } from "next/navigation";

export default function Product() {
    // const similar = await GET({ limit: 4, page: 1, category: "fleece" });
    const params = useParams()
    console.log(params.id)

    return (
        <div className="w-full space-y-32">
            {/* <IndividualProduct params={params.id} /> */}
            {/* <Carousel title="ITENS SIMILARES" otherProducts={similar}/> */}
        </div>
    )
}