import { updateProduct } from "@/lib/products/actions";
import { Categorie } from "@/types/categories";
import { Product } from "@/types/products";

export default async function EditProduct({
    product,
    categories,
}: {
    product: Product;
    categories: Categorie[];
}) {

    const updateProductWithId = updateProduct.bind(null, product.id);

    return (
        <div className="w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col gap-4" action={updateProductWithId}>
                <input type="hidden" name="id" value={product.id} />

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Título do produto</label>
                    <input defaultValue={product?.title} className="border-2 p-2 rounded-md" name="title" placeholder="Título" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Descrição do produto</label>
                    <textarea defaultValue={product?.content} className="border-2 p-2 rounded-md resize-none" name="content" rows={5} placeholder="Descrição" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">URL externa da imagem do produto</label>
                    <input defaultValue={product?.image} className="border-2 p-2 rounded-md" name="image" placeholder="Imagem" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Preço do produto</label>
                    <input defaultValue={product?.price} className="border-2 p-2 rounded-md" name="price" placeholder="Preço" type="number" required />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Destaque?</label>
                    <div className="relative">
                        <select name="isFeatured" className="w-full border-2 p-2 rounded-md">
                            <option value="Sim" selected={product.featured}>Sim</option>
                            <option value="Nao" selected={!product.featured}>Não</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <label className="text-gray-500">Categorias do produto</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                        {categories.map((category) => (
                            <div key={category?.id} className="flex gap-2 justify-start items-center">
                            <input
                                    type="checkbox"
                                    name="categories"
                                    value={category?.id}
                                    defaultChecked={product.categories.some((categorie) => categorie?.id === category?.id)}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="ml-2">{category?.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex justify-end">
                    <button className="w-3/12 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2">Salvar</button>
                </div>
            </form>
        </div>
    )
}