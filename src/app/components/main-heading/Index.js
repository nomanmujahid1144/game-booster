import { LounchBtnPrimary } from "../buttons/LounchBtnPrimary"

export const MainHeading = ({btnIcon, btnText, btnAlt, beforeGradintText, withInGradientText, description, descriptionFontSize, additionClass, alignText}) => {
    return (
        <div className={`${alignText}`}>
            <LounchBtnPrimary
                    btnText={btnText}
                    icon={btnIcon}
                    additionClass={additionClass}
                    alt={btnAlt}
            />
            <h1 className="text-4xl leading-[73px] tracking-[-1.6px] font-bold">
                {beforeGradintText} <span className="green-gradient-light">{withInGradientText}</span>
            </h1>
            <p className={`font-normal ${descriptionFontSize} leading-8 mt-3`}>{description}</p>
        </div>
    )
}