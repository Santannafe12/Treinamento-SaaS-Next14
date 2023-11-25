export const Billboard = () => {
    return (
        <div className="overflow-hidden mb-16">
            <div className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                style={{ backgroundImage: `url(/background.jpg)`, backgroundPosition: 'center' }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-7xl sm:max-w-xl max-w-sx">
                        <span className="text-white">Explore a nova coleção!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}