type ProductProps = {
    id: string;
    title: string;
    content: string;
    image: string;
    price: number;
    featured: boolean;
    createdAt: Date;
    authorId: string | null;
    categories: CategoriaProps[]
}

type CategoriaProps = {
    id: string;
    name: string;
}

export default async function ViewProduct({
    product,
    categories,
}: {
    product: ProductProps;
    categories: CategoriaProps[];
}) {

    return (
        <div className="w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <div className="flex flex-col gap-4">

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Título do produto</label>
                    <input value={product.title} className="border-2 p-2 rounded-md cursor-not-allowed" readOnly />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Descrição do produto</label>
                    <textarea value={product.content} className="border-2 p-2 rounded-md resize-none cursor-not-allowed" readOnly rows={5} />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">URL externa da imagem do produto</label>
                    <input value={product.image} className="border-2 p-2 rounded-md cursor-not-allowed" readOnly />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Preço do produto</label>
                    <input value={product.price} className="border-2 p-2 rounded-md cursor-not-allowed" readOnly type="number" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Destaque?</label>
                    <div className="relative">
                        <select className="w-full border-2 p-2 rounded-md cursor-not-allowed" disabled>
                            <option value="true" selected={product.featured}>Sim</option>
                            <option value="false" selected={!product.featured}>Não</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Categorias do produto</label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <div key={category.id} className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="categories"
                                    value={category.id}
                                    checked={product.categories.some((cat) => cat.id === category.id)}
                                    className="form-checkbox h-5 w-5 text-blue-600 cursor-not-allowed"
                                    readOnly
                                />
                                <span className="ml-2">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}