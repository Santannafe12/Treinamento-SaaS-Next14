import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QueryAndCurrentPage } from "@/types/utils";
import { fetchFilteredProductsSort, fetchProductPages } from "@/lib/products/actions";
import ProductsPagination from "./products-pagination";
import { ProductsNavbar } from "./products-navbar";
import { ProductsBanner } from "./products-banner";

export default async function ProductsGrid({ query, currentPage, order, itemsPerPage }: QueryAndCurrentPage) {
    console.log(order)
    console.log(itemsPerPage)

    const { products, count } = await fetchFilteredProductsSort(query, currentPage, itemsPerPage || 12, order || 'asc');
    const totalPages = await fetchProductPages(query, itemsPerPage || 12);

    const noProducts = products.length === 0;

    return (
        <div className="space-y-12">
            {noProducts ? (
                <div className="w-full flex flex-col justify-center">
                    <span className="text-2xl font-extrabold text-center">Nenhum produto encontrado.</span>
                    <span className="text-xl text-black/70 text-center">Tente procurar por outra coisa, ou volte a <Link href={'/products'} className="text-sky-600 underline">produtos</Link></span>
                </div>
            ) : (
                <>
                    <ProductsBanner text="produtos" />

                    <ProductsNavbar productCount={count} />

                    <section className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 my-12">
                        {products.map((product, index) => (
                            <div key={index} className="group w-72 bg-white shadow-md rounded-xl duration-200 hover:scale-105 hover:shadow-xl">
                                <Link href={`/product/${product.id}`}>
                                    <Image
                                        src={product.image}
                                        alt="Product"
                                        className="h-80 w-80 object-cover rounded-t-xl"
                                        width={1000}
                                        height={1000}
                                    />
                                    <div className="px-4 py-3 w-72">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                        <span className="text-lg font-bold text-black truncate block capitalize cursor-pointer">{product.title}</span>
                                        <div className="flex items-center">
                                            <span className="text-lg font-semibold text-black my-3 cursor-pointer">R$ {product.price}</span>
                                            <del>
                                                <span className="text-sm text-gray-600 ml-2 cursor-pointer">R$ 00,00</span>
                                            </del>
                                            <div className="ml-auto"><ShoppingBag className="w-5 h-5" /> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </section>
                </>
            )}

            <ProductsPagination totalPages={totalPages} />
        </div>
    );
}