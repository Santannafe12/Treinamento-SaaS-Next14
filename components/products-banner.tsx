export const ProductsBanner =({text}: {text: string}) => {
    return(
        <div className="w-11/12 m-auto bg-sky-950 flex items-center justify-center py-4 rounded-md">
            <h1 className="text-4xl font-bold text-white uppercase">{text}</h1>
        </div>
    )
}