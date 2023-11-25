import { createUser } from "@/lib/user/actions"

export const AdminManageUser = () => {
    return (
        <div className="w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col gap-4" action={createUser}>

                <div className="flex flex-col gap-1">
                    <label>Nome do usuário</label>
                    <input className="border-2 p-2 rounded-md" name="name" placeholder="Nome" />
                </div>

                <div className="flex flex-col gap-1">
                    <label>Email do usuário</label>
                    <input className="border-2 p-2 rounded-md" name="email" type="email" placeholder="E-mail" />
                </div>

                <div className="flex flex-col gap-1">
                    <label>Senha do usuário</label>
                    <input className="border-2 p-2 rounded-md" name="password" placeholder="*******" type="password"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label>Contato do usuário</label>
                    <input className="border-2 p-2 rounded-md" name="contact" placeholder="Contato"/>
                </div>

                <div className="w-full flex justify-end">
                    <button className="w-3/12 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2">Salvar</button>
                </div>
            </form>
        </div>
    )
}