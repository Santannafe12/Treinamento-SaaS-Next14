import Image from "next/image";
import Link from "next/link";
interface ProductArray {
    product: {
        id: string;
        title: string;
        content: string;
        image: string;
        price: number;
        featured: boolean;
        createdAt: Date;
        authorId: string | null;
    };
}

export const Card = ({ product }: ProductArray) => {
    return (
        <div className="relative group">
            <Link href={`/product/${product.id}`}>
                <Image
                    className="aspect-square object-cover overflow-hidden"
                    loading="lazy"
                    src="/fleece.jpg"
                    alt="Sunset in the mountains"
                    width={1000}
                    height={1200}
                />
                <div className="w-full px-4 py-2 flex flex-col items-center">
                    <h1 className="group-hover:underline uppercase font-extrabold line-clamp-1 text-center">
                        {product.title}
                    </h1>
                    <div className="flex gap-2 items-center">
                        <span className="text-md line-through text-black/60">R$ 599,00</span>
                        <span className="text-lg">R$ {product.price}</span>

                    </div>
                    <span className="text-black/60 text-sm">ou 10x de R$ 100,00</span>
                </div>
            </Link>

            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 m-auto transition-all opacity-0 group-hover:opacity-100">
                <Link href={"/"} className="w-full">
                    <button className="w-full text-sm font-semibold rounded-md p-2 text-white bg-black hover:scale-105 transition-all truncate">
                        ADICIONAR AO CARRINHO
                    </button>
                </Link>
            </div>
        </div>
    );
};