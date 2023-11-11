import { FeaturedProps } from "@/types/featured"
import Image from "next/image"

export const Featured = ({ featured }: FeaturedProps) => {
    return (
        <div className="w-11/12 m-auto">
            <div className="flex justify-between gap-4">
                {featured.map((item, index) => (
                    <div key={index} className="w-[300px]">
                        <Image src={"/produto-generico.jpg"} alt={"Produto"} width={300} height={200} />
                        <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span>{item.content}</span>
                            <span>{item.price}</span>
                            {/* <span>Imagem</span> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

