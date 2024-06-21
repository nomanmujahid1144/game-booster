import Image from "next/image"

export const GameLink = ({gameName, gameIcon, gameLink, bgColor, alt, key}) => {
    return (
        <a href={gameLink} key={key} className="font-semibold text-lg pb-4 flex items-center gap-3 tracking-tighter">
            <div className={`rounded-md p-2 ${bgColor}`}>
                <Image
                    src={gameIcon}
                    className="w-5 h-5"
                    alt={alt}
                />
            </div>
            {gameName}
        </a>
    )
}