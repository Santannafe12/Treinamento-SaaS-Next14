import Image from "next/image"

export const IndividualProduct = () => {
    return (
        <div className="w-10/12 bg-yellow-500 m-auto flex justify-center gap-8">
            <div className="w-2/5">
                <Image
                    src="/backpack.jpg"
                    width={1920}
                    height={1080}
                    className="object-cover aspect-square rounded-xl max-w-[500px]"
                    alt="Produto"
                />
            </div>
            <div className="w-2/5 px-4">
                <h1 className="text-2xl font-extrabold mb-3">Título do produto.</h1>
                <div className="space-y-6">
                    <section>
                        <h2 className="text-md font-medium">Descrição</h2>
                        <p className="text-sm text-black/75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos. Quisquam, quibusdam. Quae, voluptate. Quisquam, quibusdam. Quae, voluptate.</p>
                    </section>
                    <section className="flex flex-col">
                        <span className="text-3xl font-extrabold">R$ 100,00</span>
                        <span className="text-black/75">ou 10x de R$ 10,00 sem juros</span>
                    </section>
                    <section>
                        <h3 className="text-md font-medium">Tamanho</h3>
                        <div className="flex gap-2 mt-1">
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">PP</span>
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">P</span>
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">M</span>
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">G</span>
                            <span className="p-2 border-2 border-black cursor-pointer transition-all hover:bg-black hover:text-white">GG</span>
                        </div>
                    </section>
                    <div className="h-[1px] bg-black/50" />
                    <button className="w-full bg-black text-white p-4 text-xl font-extrabold">
                        COMPRAR
                    </button>
                </div>
            </div>
        </div>
    )
}