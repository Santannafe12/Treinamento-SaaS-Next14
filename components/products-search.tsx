'use client'

import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import React, { useState, useEffect } from 'react';

export default function ProductsSearch({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [searchTerm, setSearchTerm] = useState<string | null>(searchParams.get('query') || null);

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputValue = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value;
        setSearchTerm(inputValue);
        handleSearch(inputValue);
    };

    useEffect(() => {
        setSearchTerm(searchParams.get('query') || null);
    }, [searchParams]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative min-w-[400px]">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <input
                    id="search"
                    name="search"
                    className="peer block w-full rounded-md border border-gray-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder={placeholder}
                    value={searchTerm || ''}
                    onChange={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
                />
                <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
        </form>
    );
}
