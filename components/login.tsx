export const Login = () => {
    return (
        <div className="flex gap-12 w-full h-screen items-center justify-center m-auto">
            <h1 className="text-5xl w-3/12">Faça seu login na loja</h1>
            <div className="flex flex-col w-4/12 min-h-[500px] justify-between gap-4 p-6 bg-yellow-100">
                <div className="flex flex-col gap-4">
                <input className="p-3 w-full rounded-lg" placeholder="E-mail" />
                <input className="p-3 w-full rounded-lg" placeholder="Senha" />
                </div>


                <div className="w-full flex items-center justify-center">
                    <button className="w-5/12 py-2 px-4 rounded-md bg-blue-500 text-white font-extrabold">ENTRAR</button>
                </div>
                <span>Não tem uma conta? <span>Registre-se</span></span>
                <div className="h-[1px] bg-black/60" />
                <div className="flex gap-3">
                    <span>Ou entre com </span>
                    <button>GOOGLE</button>
                </div>
            </div>
        </div>
    )
}