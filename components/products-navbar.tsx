'use client'

import { ArrowDownUp } from "lucide-react"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export const ProductsNavbar = ({ productCount }: { productCount: number }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [selectedOrder, setSelectedOrder] = useState<string | null>(searchParams.get('order') || null);
    const [selectedItemsPerPage, setSelectedItemsPerPage] = useState<string | null>(searchParams.get('itemsPerPage') || null);

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOrder = event.target.value;
        setSelectedOrder(newOrder);

        const params = new URLSearchParams(searchParams);
        if (newOrder) {
            params.set('order', newOrder);
        } else {
            params.delete('order');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newItemsPerPage = event.target.value;
        setSelectedItemsPerPage(newItemsPerPage);

        const params = new URLSearchParams(searchParams);
        if (newItemsPerPage) {
            params.set('itemsPerPage', newItemsPerPage);
        } else {
            params.delete('itemsPerPage');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="w-11/12 m-auto flex justify-between items-end pb-4 border-b-[1px] border-black/50">
            <div className="flex gap-8">
                <div className="flex items-center gap-2">
                    <ArrowDownUp className="w-5 h-5 inline-block mr-2 text-red-500" />
                    <label className="font-extrabold">Ordenar:</label>
                    <select
                        id="order"
                        name="order"
                        className="border border-gray-200 rounded-md py-2 px-12 text-md"
                        onChange={handleOrderChange}
                        value={selectedOrder || ''}
                    >
                        <option value="asc">Padrão</option>
                        <option value="asc">Nome</option>
                        <option value="asc">Tipo</option>
                        <option value="desc">Preço crescente</option>
                        <option value="desc">Preço decrescente</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label className="font-extrabold">Exibir:</label>
                    <select
                        id="itemsPerPage"
                        name="itemsPerPage"
                        className="border border-gray-200 rounded-md py-2 px-12 text-md"
                        onChange={handleItemsPerPageChange}
                        value={selectedItemsPerPage || ''}
                    >
                        <option value="12">12 por página</option>
                        <option value="24">24 por página</option>
                        <option value="36">36 por página</option>
                    </select>
                </div>
            </div>
            <div>
                <span><span className="font-extrabold">{productCount}</span> produtos</span>
            </div>
        </div>
    )
}