import Image from "next/image"
import Link from "next/link"

export const HorizontalCard = () => {
    return (
        <div className="group max-w-xs rounded overflow-hidden shadow-lg">
            <Link href={"/"}>
                <Image className="w-full aspect-square object-cover overflow-hidden" src="/fleece.jpg" alt="Sunset in the mountains" width={1200} height={1200} />
                <div className="px-6 py-4 flex justify-between">
                    <h1 className="font-bold text-xl group-hover:underline">The Coldest Sunset</h1>
                    <span className="text-lg">$200.00</span>
                </div>
                <div className="px-6 pb-2 max-w-full truncate">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vestuário</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#equipamento</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#segurança</span>
                </div>
            </Link>
        </div>
    )
}

