import Image from "next/image"
import { DiscordBtn } from "../buttons/DiscordBtn"
import { LounchBtnPrimary } from "../buttons/LounchBtnPrimary"
import { DefaultBtn } from "../buttons/DefaultBtn";
import LaunchImage from '../../../../public/games/launch-image.png';

export const JoinUs = () => {
    return (
        <div className="w-full overflow-hidden bg-join-us-background bg-cover bg-center relative join-us-container rounded-md">
            <div className="top-0 left-0 w-full h-full absolute rounded-md blur-effect"/>
            <div className="px-8 py-8 flex justify-between relative">
                <div className="w-3/5">
                    <LounchBtnPrimary
                        btnText={'Launching Soon'}
                        icon={'/icons/points.svg'}
                        additionClass={'mb-2'}
                        alt={"Launch Icon"}
                    />
                    <h1 className="text-4xl leading-[50px] tracking-[-1.6px] font-semibold">
                        <span className="green-gradient-light">AIO Boosting</span> is launching soon…
                    </h1>
                    <p className="font-normal text-lg leading-8 mt-3">
                        Please join our discord or enter your email to be notified on<br />
                        development updates and launch promotions. If you are a booster or a <br />
                        coach, check out our jobs page and apply early.
                    </p>
                    <div className="flex justify-between gap-4 mt-6">
                        <input
                            type="email"
                            name="email"
                            class="block py-4 w-full px-5 rounded-md border-border-light bg-[#000312] button-shadow"
                            placeholder="Enter your email"
                        />
                        <DefaultBtn />
                    </div>
                    <div className="flex justify-start gap-3 mt-8">
                        <DiscordBtn
                            btnText={'Join Our Discord'}
                            icon={'/icons/discord.svg'}
                            alt={"Discord Icon"}
                        />
                        <DiscordBtn
                            btnText={'View Job Postings'}
                            icon={'/icons/game-control.svg'}
                            additionClass={'green-linear-gradient shadow-green-light'}
                            alt={"Job Postings Icon"}
                        />
                    </div>
                </div>
                <Image 
                    src={LaunchImage}
                    className="absolute right-0 launch-image"
                />
            </div>
        </div>

    )
}