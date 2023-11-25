import Link from "next/link"

export const AdminDashboardLayout = () => {
    return (
        <div className="w-7/12 flex flex-col gap-12">
            <div>
                <h2 className="text-3xl">Bem vindo novamente, <span className="font-extrabold text-blue-600">Felipe!</span></h2>
                <span className="text-md text-black/50">Aqui você encontrará as informações sobre sua conta</span>
            </div>
            <div className="w-full p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <h3 className="text-3xl">Minha Conta</h3>
                        <span className="text-black/60">Desde Novembro de 2023</span>
                    </div>
                    <Link href={'/admin/users/edit/1'}><span className="cursor-pointer hover:underline text-blue-700">Editar minha conta</span></Link>
                </div>

                <div className="h-[1px] bg-black/30" />

                <div className="flex justify-between min-h-[150px]">
                    <h3 className="text-2xl text-black/60">Informações Básicas</h3>
                    <section className="w-8/12">
                        <div className="font-extrabold">
                            <span>santannafe12@gmail.com</span>
                        </div>
                        <div className="text-black/60">
                            <span>Senha: </span>
                            <span>*********</span>
                        </div>
                        <div className="text-black/60">
                            <span>Nome: </span>
                            <span>Felipe Sant&#39;Anna</span>
                        </div>
                        <div className="text-black/60">
                            <span>Contato: </span>
                            <span>(24)99238-2730</span>
                        </div>
                    </section>
                </div>

                <div className="h-[1px] bg-black/30" />

                <div className="flex justify-between min-h-[150px]">
                    <h3 className="text-2xl text-black/60">Configurações</h3>
                    <div className="w-8/12">
                        <button className="text-red-600 hover:underline">Excluir minha conta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}