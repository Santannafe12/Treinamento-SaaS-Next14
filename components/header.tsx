import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export const Header = () => {
    return (
        <div className="w-full bg-white mb-6">
            <nav className="sm:gap-6 py-3 w-11/12 m-auto flex gap-3 items-center justify-between">
                <div className="flex items-center gap-5">
                    <Link href="/" className="text-2xl font-extrabold transition-all duration-300 hover:text-purple-500">
                        summitStore
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="w-6 h-6" />
                        <span>Carrinho (0)</span>
                    </div>

                    <div className="w-px h-4 bg-zinc-700" />

                    <Link href="/login" className="flex items-center gap-2 hover:underline">
                        <span>Login</span>
                    </Link>

                    <div className="w-px h-4 bg-zinc-700" />

                    <Link href="/admin/user/felipe" className="flex items-center gap-2 hover:underline">
                        <span>Account</span>
                    </Link>
                </div>
            </nav >
        </div>
    )
}