import Link from "next/link"

export const Footer = () => {
    return (
        <div className="text-center w-full mt-24 py-8 border-t-2 min-h-[250px] flex flex-col items-center justify-center">
            <Link href="/" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                summitStore
            </Link>

            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 - 2025 summitStore™. All Rights Reserved.</span>
        </div>
    )
}