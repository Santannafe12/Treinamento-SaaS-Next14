import { fetchFilteredProducts, fetchProductPages } from "@/lib/products/actions"
import Link from "next/link"
import AdminSearch from "./admin-search"
import { AdminDeleteProductButton, AdminEditProductButton, AdminViewProductButton } from "./admin-buttons"
import { QueryAndCurrentPage } from "@/types/utils"
import AdminPagination from "./admin-pagination"

export default async function AdminDashboardTableProducts({ query, currentPage }: QueryAndCurrentPage) {
    const itensPerPage = 10

    const { products, count } = await fetchFilteredProducts(query, currentPage, itensPerPage);
    const totalPages = await fetchProductPages(query, itensPerPage)

    return (
        <div className="w-full p-4 border-2 rounded-md flex flex-col gap-6">
            <div className="flex items-center w-full justify-between">
                <h1 className="text-xl">
                    {count}{" "}
                    {count === 1 ? "produto encontrado" : "produtos encontrados..."}
                </h1>

                <AdminSearch placeholder="Pesquise por produtos" />

                <Link href={'/admin/products/create'}>
                    <button className="py-2 w-52 px-6 border-2 rounded-md text-white bg-sky-800 transition-all hover:bg-opacity-70">+ Criar Produto</button>
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nome do produto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Preço
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Conteúdo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.title}
                                </th>
                                <td className="px-6 py-4">
                                    R$ {item.price}
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    {item.content}
                                </td>
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <AdminViewProductButton id={item.id} />
                                    <AdminEditProductButton id={item.id} />
                                    <AdminDeleteProductButton id={item.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AdminPagination totalPages={totalPages} count={count} item={count === 1 ? "produto" : "produtos"} itensPerPage={itensPerPage} />
            </div>
        </div>
    )
}