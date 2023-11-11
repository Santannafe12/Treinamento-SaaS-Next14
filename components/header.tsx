import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"
import Image from "next/image"

export const Header = () => {
    return (
        <div className="w-full lg:fixed top-0 z-50">
            <nav className="sm:gap-6 py-3 w-11/12 m-auto flex gap-3 items-center justify-between">
                <div className="flex items-center gap-5">
                    <Link href="/" className="text-2xl font-extrabold transition-all duration-300 hover:text-purple-500">
                        summitStore
                    </Link>
                    <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3">
                        <Search className="w-5 h-5 text-white" />
                        <input placeholder="Buscar produtos..." className="flex-1 text-white bg-transparent text-sm outline-none" />
                    </form>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="w-6 h-6" />
                        <span>Carrinho (0)</span>
                    </div>

                    <div className="w-px h-4 bg-zinc-700" />

                    <Link href="/" className="flex items-center gap-2 hover:underline">
                        <span>Account</span>
                        <Image
                            src="https://github.com/santannafe12.png"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full"
                            alt="avatar" />
                    </Link>
                </div>
            </nav >
        </div>
    )
}