import { DiscordBtn } from "../buttons/DiscordBtn"
import { ServiceCard } from "./ServiceCard"
import { ServiceHeader } from "./ServiceHeader"
import { ServiceInnerCard } from "./serviceInnerCard"
import leagueLagend from '../../../../public/game-logo/league-lagend.png';
import overwatch from '../../../../public/game-logo/overwatch.png';
import leagueLagendLogo from '../../../../public/icons/league-legend.svg';
import overWatchLogo from '../../../../public/icons/overwatch.svg';
import coachingStaff1 from '../../../../public/staff/1.png'
import coachingStaff2 from '../../../../public/staff/2.png'
import coachingStaff3 from '../../../../public/staff/3.png'
import greenCircle from '../../../../public/icons/circle.svg'
import star from '../../../../public/icons/star.svg'
import Image from "next/image";
import { MainHeading } from "../main-heading/Index"


const boostingGames = [
    { heading: 'Promoted to Challenger', alt: 'leagure logo', logo: leagueLagendLogo, monoGram: leagueLagend },
    { heading: 'Promoted to Top 500', alt: 'overwatch logo', logo: overWatchLogo, monoGram: overwatch }
];

const coachingStaff = [
    { personName: 'FrostByte', personImage: coachingStaff1, designation: 'Ex-Pro' },
    { personName: 'MysticFury', personImage: coachingStaff2, designation: 'Veteran' },
    { personName: 'IronClad', personImage: coachingStaff3, designation: 'Master' },
];



export const Services = () => {
    return (
        <div className="mt-32 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            <div className="w-full">
                <MainHeading
                    btnText={'Unlock Your Potential'}
                    btnIcon={'/icons/un-lock.svg'}
                    additionClass={'mb-2'}
                    btnAlt={"Lock Icon"}
                    beforeGradintText={'Our'}
                    withInGradientText={'Services'}
                    description={'AIO Boosting is an All-In-One Game Boosting Platform that provides extraordinary boosting and coaching services.'}
                    descriptionFontSize={'text-sm'}
                />
                <DiscordBtn
                    btnText={'Coming Soon'}
                    additionClass={'bg-[#00B43E] mt-8 w-1/2 shadow-green-light'}
                />
            </div>
            <ServiceCard>
                <ServiceHeader
                    heading={'Boosting'}
                    description={'Climb the competitive ranks and  reach your desired rank swiftly and efficiently.'}
                    icon={'/icons/booster.svg'}
                    alt={'Booster Icon'}
                />
                <div className="inline-flex gap-2 mt-5">
                    {boostingGames.map((boostgame, index) => (
                        <ServiceInnerCard key={index} additionClass={'w-48'}>
                            <Image
                                key={index}
                                src={boostgame.logo}
                                className="w-24 mb-2 mt-3"
                                alt={boostgame.alt}
                            />
                            <div key={index} className="border-border-light border green-radial-gradient-15 font-semibold text-xs text-center rounded px-3 py-1">
                                {boostgame.heading}
                            </div>
                            <Image
                                key={index}
                                src={boostgame.monoGram}
                                className="w-40 h-40 -mt-6"
                                alt={'League Lagends Logo'}
                            />
                        </ServiceInnerCard>
                    ))}
                </div>
            </ServiceCard>
            <ServiceCard>
                <ServiceHeader
                    heading={'Coaching'}
                    description={'Learn strategies, tips, and techniques from expert players.'}
                    icon={'/icons/coaching.svg'}
                    alt={'Coaching Icon'}
                />
                <div className="grid grid-row-3 gap-2 mt-5 w-96">
                    {coachingStaff.map((staff, index) => (
                        <ServiceInnerCard key={index} additionClass={'w-96 pl-4 pr-8 py-3 my-1'}>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex gap-3">
                                    <Image
                                        src={staff.personImage}
                                        className="w-12 h-12 object-cover rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-xl leading-6 tracking-[-0.43px]">{staff.personName}</span>
                                        <span className="mt-1 flex gap-1">
                                            {Array(5).fill(0).map((_, index) => (
                                                <Image
                                                    key={index}
                                                    src={star}
                                                    className="w-4 h-4"
                                                    alt="star icon"
                                                />
                                            ))}
                                        </span>
                                    </div>
                                </div>
                                <div className="py-1 px-2 bg-[#01FF5833] flex justify-between items-center gap-1 rounded-full">
                                    <Image
                                        src={greenCircle}
                                        className="w-2 h-2"
                                        alt="circle icon"
                                    />
                                    {staff.designation}
                                </div>
                            </div>
                        </ServiceInnerCard>
                    ))}
                </div>
            </ServiceCard>
        </div>
    )
}