import { usersProps } from "@/types/featured"
import Link from "next/link"
import { AdminDeleteButton } from "./admin-buttons"
import { countAllUsers, fetchFilteredUsers, fetchUsersPages } from "@/lib/user/actions"
import AdminSearch from "./admin-search"
import Pagination from "./pagination"

export default async function AdminUsersDashboardTable({ query, currentPage }: usersProps) {

    const users = await fetchFilteredUsers(query, currentPage)
    const totalPages = await fetchUsersPages(query)
    const count = await countAllUsers()

    return (
        <div className="w-full p-4 border-2 rounded-md flex flex-col gap-6">
            <div className="flex items-center w-full justify-between">
                <h1 className="text-xl">
                    {count}{" "}
                    {count === 1 ? "usuário encontrado " : "usuários encontrados..."}
                </h1>

                <AdminSearch placeholder="Pesquise por usuários" />
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nome do usuário
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contato
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <Link href="/admin/users/edit/1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</Link>
                                    <AdminDeleteButton id={item.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination totalPages={totalPages} item="usuários" count={count} />
            </div>
        </div>
    )
}