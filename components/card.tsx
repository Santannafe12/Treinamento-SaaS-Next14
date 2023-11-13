import { CardProps } from "@/types/featured"
import Image from "next/image"
import Link from "next/link"

export const Card = ({ product }: CardProps) => {
    return (
        <div className="bg-white max-w-xs rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="group">
                <Link href={"/"}>
                    <Image className="w-full aspect-square object-cover overflow-hidden" src="/fleece.jpg" alt="Sunset in the mountains" width={1200} height={1200} />
                    <div className="px-4 py-2 flex justify-between">
                        <h1 className="group-hover:underline">{product.title}</h1>
                        <span className="text-lg">${product.price}</span>
                    </div>
                    <div className="px-4 pb-2 max-w-full line-clamp-3">
                        <p className="opacity-60 text-sm text-justify line-clamp-3">
                            {product.content}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="w-11/12 m-auto flex justify-center mt-4 mb-4">
                <Link href={"/"} className="w-full">
                    <button className="w-full text-sm font-semibold rounded-md p-2 bg-black/20 hover:scale-105 transition-all truncate">
                        ADICIONAR AO CARRINHO
                    </button>
                </Link>
            </div>
        </div>
    )
}