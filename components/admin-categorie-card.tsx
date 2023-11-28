"use client"

import { deleteCategorie } from "@/lib/categories/action"
import { CategorieProps } from "@/types/categories"
import { PencilIcon, TrashIcon } from "lucide-react"
import Link from "next/link"

export const AdminCategorieCard = ({ categorie }: CategorieProps) => {
    return (
        <div className="flex flex-col p-4 w-52 justify-between bg-white border-2 gap-6">
            <h1 className="text-xl cursor-default line-clamp-2">{categorie?.name}</h1>
            <div className="flex gap-2">
                <Link href={`/admin/categories/edit/${categorie?.id}`}><PencilIcon className="text-blue-700 w-5 h-5 cursor-pointer transition-all hover:scale-105" /></Link>
                <button onClick={() => deleteCategorie(categorie?.id)}><TrashIcon className="text-red-700 w-5 h-5 cursor-pointer transition-all hover:scale-105" /></button>
            </div>
        </div>
    )
}