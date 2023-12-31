import { CategorieProps } from "@/types/categories";
import Link from "next/link";

export const CategoriesCard = ({ categorie }: CategorieProps) => {
    return (
        <div className="group">
            <Link href={`/products/categories/${categorie?.id}`}>
                <div className="w-full h-32 px-4 py-2 flex flex-col justify-center">
                    <h1 className="text-xl uppercase font-extrabold line-clamp-1 text-center transition-all group-hover:underline group-hover:line-clamp-none">
                        {categorie?.name}
                    </h1>
                </div>
            </Link>
        </div>
    );
};