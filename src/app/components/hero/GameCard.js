

export const GameCard = ({ gameName, gameImage }) => {
    return (
        <div className="text-center">
            <div className="mb-7 w-full relative">
                <img
                    src={gameImage}
                    className="rounded-xl w-full"
                    alt="Game image"
                />
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full comming-soon-blur">
                    <a href="#" className="px-3 py-1 border rounded-full flex justify-between gap-2 comming-soon-border">
                        <img
                            src='/icons/lock.svg'
                            className="w-3"
                            alt="lock icon"
                        />
                        <span className="text-sm">Coming Soon</span>
                    </a>
                </div>
            </div>
            <span className="text-xl font-bold leading-7 tracking-[-1.6px] items-center white-gradient-light">
                {gameName}
            </span>
        </div>
    )
}