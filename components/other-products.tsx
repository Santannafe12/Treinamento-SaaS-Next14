import { OtherProductsProps } from "@/types/featured";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./card";

export const OtherProducts = ({ otherProducts }: OtherProductsProps) => {
    return (
        <div className='w-11/12 m-auto gap-10 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {otherProducts.map((item, index) => (
                <Card key={index} product={item} />
                // <div key={index} className="cursor-pointer hover:scale-105 transition-all">
                //     <Link className="max-w-max" href={"/"}>
                //         <Image
                //             src={"/produto-generico.jpg"}
                //             alt={""}
                //             width={1920}
                //             height={1080}
                //             className='aspect-square rounded-t-xl'
                //         />
                //         <div className="flex flex-col justify-between min-h-[240px] bg-white text-black p-4 gap-2" >
                //             <h1 className="font-bold text-2xl">{item.title}</h1>
                //             <p className="leading-relaxed text-lg text-gray-500">{item.content.length > 200 ? `${item.content.slice(0, 200)}...` : item.content}</p>
                //             <span className="text-2xl font-extrabold text-orange-500">R$ {item.price}</span>
                //         </div>
                //     </Link>
                //     <div className="flex items-center justify-center text-xl w-full bg-orange-500 text-white rounded-b-xl p-2">
                //         <button className="flex gap-3 font-bold"><ShoppingCart className="w-6 h-6" /> Comprar</button>
                //     </div>
                // </div>
            ))}
        </div>
    )
}