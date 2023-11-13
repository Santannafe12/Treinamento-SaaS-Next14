import { HorizontalCard } from "./horizontal-card"

export const Similar = () => { 
    return(
        <div className="w-11/12 m-auto">
            <h1 className="text-2xl font-extrabold w-full text-center mb-8">ITENS SIMILARES</h1>
            <div className="w-full justify-center flex flex-wrap gap-6">
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            </div>
        </div>
    )
}