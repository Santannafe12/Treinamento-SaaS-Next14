import Link from "next/link"
import { AdminCategorieCard } from "./admin-categorie-card"
import { QueryAndCurrentPage } from "@/types/utils"
import { countAllCategories, getCategories } from "@/lib/categories/action"

export default async function AdminDashboardTableCategories({ query, currentPage }: QueryAndCurrentPage) {

    const categories = await getCategories()
    const count = await countAllCategories()

    return (
        <div className="w-full p-4 border-2 rounded-md flex flex-col gap-6">
            <div className="flex items-center w-full justify-between">
                <h1 className="text-xl">
                    {count}{" "}
                    {count === 1 ? "categoria encontrada" : "categorias encontradas..."}
                </h1>

                <Link href={'/admin/categories/create'}>
                    <button className="py-2 px-6 border-2 rounded-md text-white w-52 bg-sky-800 transition-all hover:bg-opacity-70">+ Criar Categoria</button>
                </Link>
            </div>
            <div className="flex flex-wrap gap-2">
                {categories.map((categorie) => (
                    <AdminCategorieCard key={categorie.id} categorie={categorie} />
                ))}
            </div>
        </div>
    )
}