import { Code2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./admin-header-item"

const NAV_LINKS = [
    {
        label: "Voltar ao site",
        href: "/",
    },
    {
        label: "Gerenciar Produtos",
        href: "/admin/products",
    },
    {
        label: "Gerenciar Usuários",
        href: "/admin/users",
    },
]

export const AdminHeader = () => {

    return (
        <div className="w-full bg-white mb-12">
            <nav className="sm:gap-6 py-3 w-11/12 m-auto flex gap-3 items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/admin/user/felipe" className="text-2xl transition-all duration-300 hover:text-purple-500">
                        summitStore | Admin
                    </Link>
                    <Code2 className="h-10 w-10" />
                    <div className="flex gap-10">
                        {NAV_LINKS.map((link) => (
                            <NavItem {...link} key={link.label} />
                        ))}
                    </div>
                </div>
                <div>
                    <Link href="/admin/user/felipe">
                        <Image
                            src="https://github.com/santannafe12.png"
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full"
                            alt="avatar" />
                    </Link>
                </div>
            </nav >
        </div>
    )
}