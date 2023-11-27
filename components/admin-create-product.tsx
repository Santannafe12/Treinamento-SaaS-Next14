import { createProduct } from "@/lib/product/actions"
import { categoria } from "@/types/featured"

type AdminManageProductProps = {
    categories: categoria[]
}

export const AdminManageProduct = ({ categories }: AdminManageProductProps) => {

    return (
        <div className="w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col gap-4" action={createProduct}>

                <div className="flex flex-col gap-1">
                    <label>Título do produto</label>
                    <input className="border-2 p-2 rounded-md" name="title" placeholder="Título" />
                </div>

                <div className="flex flex-col gap-1">
                    <label>Descrição do produto</label>
                    <textarea className="border-2 p-2 rounded-md resize-none" name="content" rows={5} placeholder="Descrição" />
                </div>

                <div className="flex flex-col gap-1">
                    <label>Preço do produto</label>
                    <input className="border-2 p-2 rounded-md" name="price" placeholder="Preço" type="number" required />
                </div>

                <div className="flex flex-col gap-1">
                    <label>Imagem do produto</label>
                    <input className="border-2 p-2 rounded-md" name="image" placeholder="Imagem" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Destaque?</label>
                    <div className="relative">
                        <select name="isFeatured" className="w-full border-2 p-2 rounded-md">
                            <option value="Sim">Sim</option>
                            <option value="Nao">Não</option>
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
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="ml-2">{category.name}</span>
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