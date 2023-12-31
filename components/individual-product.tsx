import { CategoriesProps } from "@/types/categories";
import { Product } from "@/types/products";
import Image from "next/image"

export default async function IndividualProduct({
    product,
    categories,
}: {
    product: Product;
    categories: CategoriesProps;
}) {

    const calculateInstallment = (price: number, numberOfInstallments: number) => {
        const installmentValue = price / numberOfInstallments;
        return installmentValue.toFixed(2); // Arredondando para duas casas decimais
    };

    return (
        <div className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="aspect-square relative h-full w-full sm:w-10/12 md:w-8/12 lg:w-5/12 sm:rounded-lg overflow-hidden">
                <Image
                    src={product?.image}
                    alt={product?.title}
                    width={1000}
                    height={1000}
                    quality={100}
                />
            </div>
            <div className="w-11/12 lg:w-4/12 flex flex-col justify-center px-12">
                <h1 className="text-3xl font-extrabold mb-6">{product?.title}</h1>
                <div className="space-y-6">
                    <section>
                        <h2 className="text-lg font-medium">Descrição</h2>
                        <p className="text-md text-black/60">{product?.content}</p>
                    </section>
                    <section className="flex flex-col">
                        <span className="text-3xl font-extrabold">R$ {product?.price}</span>
                        ou 10x de R$ {calculateInstallment(product?.price || 0, 10)} sem juros
                    </section>
                    <section>
                        <h3 className="text-md font-medium">Tamanho</h3>
                        <div className="flex gap-2 mt-1">
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">PP</span>
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">P</span>
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">M</span>
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">G</span>
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">GG</span>
                        </div>
                    </section>
                    <div className="h-[1px] bg-black/50" />
                    <button className="w-full bg-black text-white text-2xl p-4 font-extrabold transition-all hover:bg-black/70">
                        COMPRAR
                    </button>
                </div>
            </div>
        </div>
    )
}