export const LounchBtnPrimary = ({btnText, icon, alt, additionClass}) => {
    return (
        <a href="#" className={`flex w-max gap-2 ${additionClass} border-border-light bg-[#FFFFFF1A] rounded-full border px-3 py-1`}>
            <img
                src={icon}
                className="w-4"
                alt={alt}
            />
            <span className="white-gradient-light font-medium text-xs leading-7">
                {btnText}
            </span>
        </a>
    )
}