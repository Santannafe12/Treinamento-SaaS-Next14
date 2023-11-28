import { updateCategorie } from "@/lib/categories/action";
import { CategorieProps } from "@/types/categories";

export default async function EditCategorie({categorie}: CategorieProps) {

    const updateCategorieWithId = updateCategorie.bind(null, categorie?.id);

    return (
        <div className="w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col gap-4" action={updateCategorieWithId}>
                <input type="hidden" name="id" value={categorie?.id} />

                <div className="flex flex-col gap-1">
                    <label className="text-gray-500">Título do produto</label>
                    <input defaultValue={categorie?.name} className="border-2 p-2 rounded-md" name="title" placeholder="Título" />
                </div>

                <div className="w-full flex justify-end">
                    <button className="w-3/12 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2">Salvar</button>
                </div>
            </form>
        </div>
    )
}