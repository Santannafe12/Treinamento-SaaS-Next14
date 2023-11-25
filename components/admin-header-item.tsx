'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
    href: string
    label: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={cn(
                'text-header-base flex items-center gap-2 md:text-lg xl:text-2xl hover:scale-105 ease-in duration-200',
                isActive && 'underline underline-offset-2 hover:scale-100',
            )}
        >
            {label}
        </Link>
    )
}