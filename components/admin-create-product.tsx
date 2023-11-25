import { createProduct } from "@/lib/product/actions"

export const AdminManageProduct = () => {
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

                {/* <div className="flex flex-col gap-1">
                    <label>Imagem do produto</label>
                    <input className="border-2 p-2 rounded-md" name="image" placeholder="Imagem" type="file" />
                </div> */}
                
                <div className="flex gap-1">
                    <label>Categorias do produto</label>
                    <select className="text-md text-black/60">
                        <option>Categoria 1</option>
                        <option>Categoria 2</option>
                        <option>Categoria 3</option>
                        <option>Categoria 4</option>
                        <option>Categoria 5</option>
                    </select>
                </div>

                <div className="w-full flex justify-end">
                    <button className="w-3/12 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2">Salvar</button>
                </div>
            </form>
        </div>
    )
}