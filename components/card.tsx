import { CardProps } from "@/types/featured"
import Image from "next/image"
import Link from "next/link"

export const Card = ({ product }: CardProps) => {
    return (
        <div>
            {/* <Link href={"/"} className="max-w-max"> */}
            <div className="w-96 bg-white rounded-xl text-black">
                <div className="h-96">
                    <Image
                        src={"/apple.png"}
                        alt={"Produto"}
                        width={1920} height={1080}
                        className="h-full w-full object-cover rounded-xl"
                    />
                </div>
                <div className="w-11/12 m-auto py-6">
                    <div className="mb-2 flex items-center justify-between font-extrabold text-lg">
                        <h1>{product.title}</h1>
                        <span>${product.price}</span>
                    </div>
                    <p className="mb-4 opacity-60 text-sm text-justify">
                        {product.content}
                    </p>
                    <div className="w-full m-auto flex justify-center">
                        <button className="w-full text-sm font-semibold rounded-md p-2 bg-black/20 hover:scale-105 transition-all">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}