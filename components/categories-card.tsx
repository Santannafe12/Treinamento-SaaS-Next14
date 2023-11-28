import Link from "next/link";

export const CategoriesCard = () => {
    return (
        <div className="group">
            {/* <Link href={`/product/${product.id}`}> */}
                <div className="w-full h-32 px-4 py-2 flex flex-col justify-center">
                    <h1 className="uppercase font-extrabold line-clamp-1 text-center transition-all group-hover:underline">
                        {/* {product.title} */}
                    </h1>
                </div>
            {/* </Link> */}
        </div>
    );
};