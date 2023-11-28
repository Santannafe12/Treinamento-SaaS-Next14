import Link from "next/link"

type LesserBillboardProps = { imageUrl: string, annoucement: string, sale: string }

export const LesserBillboard = ({ imageUrl, annoucement, sale }: LesserBillboardProps) => {
    return (
        <div className="w-11/12 m-auto overflow-hidden mb-16">
            <div className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center' }}
            >
                <div className="h-full w-full flex flex-col gap-8 justify-center items-center text-center">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-7xl sm:max-w-xl max-w-sx">
                        <span className="text-white">{annoucement}</span>
                    </div>
                    <div>
                        <Link href={'/products'}><button className="py-4 px-8 bg-black/70 rounded-md text-white text-2xl font-extrabold duration-200 hover:bg-black">{sale}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}