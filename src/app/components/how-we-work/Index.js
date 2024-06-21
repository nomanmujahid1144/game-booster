import { MainHeading } from "../main-heading/Index"

export const OurWorking = () => {
    return (
        <div className="my-16">
            <MainHeading
                btnText={'Seamless Boosting Experience'}
                btnIcon={'/icons/points.svg'}
                additionClass={'mb-2 '}
                btnAlt={"Lock Icon"}
                alignText={'text-center-webkit'}
                beforeGradintText={'How it'}
                withInGradientText={'Works'}
                description={<>Boosting with us is easy, just follow the three steps below. Get rewarded with<br /> points and cashback on every purchase.</>}
                descriptionFontSize={'text-lg'}
            />
        </div>
    )
}