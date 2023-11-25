'use client'

import { deleteProduct } from "@/lib/product/actions"
import Link from "next/link"

export const AdminDeleteButton = ({ id }: { id: string }) => {
    return (
        <>
            <button onClick={() => deleteProduct(id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Deletar</button>
        </>
    )
}

export const AdminEditButton = ({ id }: { id: string }) => {
    return (
        <>
            <Link href={`/admin/products/edit/${id}`}>
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
            </Link>
        </>
    )
}