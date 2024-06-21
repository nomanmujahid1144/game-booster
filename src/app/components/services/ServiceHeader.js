export const ServiceHeader = ({icon, alt, heading, description}) => {
    return (
        <div className="">
            <div className="flex items-center gap-2">
                <img
                    src={icon}
                    className="w-5 h-5"
                    alt={alt}
                />
                <h2 className="font-semibold text-2xl leading-7 tracking-[-1.6px]">{heading}</h2>
            </div>
            <p className="font-normal text-xs mt-5 leading-5 w-3/4">
                {description}
            </p>
        </div>

    )
}