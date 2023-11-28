'use client'

import { deleteCategorie } from "@/lib/categories/action"
import { deleteProduct } from "@/lib/products/actions"
import Link from "next/link"

export const AdminViewProductButton = ({ id }: { id: string }) => {
    return (
        <>
            <Link href={`/admin/products/view/${id}`}>
                <button className="font-medium text-green-600 dark:text-green-500 hover:underline">Visualizar</button>
            </Link>
        </>
    )
}

export const AdminEditProductButton = ({ id }: { id: string }) => {
    return (
        <>
            <Link href={`/admin/products/edit/${id}`}>
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
            </Link>
        </>
    )
}

export const AdminDeleteProductButton = ({ id }: { id: string }) => {
    return (
        <>
            <button onClick={() => deleteProduct(id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Deletar</button>
        </>
    )
}

export const AdminEditCategorieButton = ({ id }: { id: string }) => {
    return (
        <>
            <Link href={`/admin/categories/edit/${id}`}>
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
            </Link>
        </>
    )
}

export const AdminDeleteCategorieButton = ({ id }: { id: string }) => {
    return (
        <>
            <button onClick={() => deleteCategorie(id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Deletar</button>
        </>
    )
}