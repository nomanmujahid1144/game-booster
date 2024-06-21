import { LounchBtnPrimary } from "../buttons/LounchBtnPrimary"
import { GameCard } from "./GameCard"

const games = [
    { gameName: 'League of Legends', gameImage: '/games/league-of-legends.png' },
    { gameName: 'Valorant', gameImage: '/games/valorant.png' },
    { gameName: 'Overwatch 2', gameImage: '/games/overwatch2.png' },
    { gameName: 'Teamfight Tactics', gameImage: '/games/teamfight-tactics.png' },
    { gameName: 'World of Warcraft', gameImage: '/games/world-of-warcraft.png' }
]

export const Hero = () => {
    return (
        <div className="w-full mb-16">
            <div className="text-center-webkit mt-10">
                <LounchBtnPrimary
                    btnText={'Become A Better Gamer!'}
                    icon={'/icons/game-control.svg'}
                    additionClass={'mb-5'}
                    alt={"Game Controller Icon"}
                />
                <h1 className="text-7xl leading-[73px] tracking-[-1.6px] font-bold">
                    Your <span className="green-gradient-light">All-In-One</span><br />
                    Path to Victory
                </h1>
                <p className="text-xl leading-7 text-[#B4BCD0] font-normal mt-5">
                    Crush the competition and skyrocket your rank with our All-In-One Game<br /> Boosting Powerhouse.
                </p>
            </div>
            <div className="flex justify-between gap-5 mt-20 ">
                {games.map((game, index) => (
                    <GameCard
                        key={index}
                        gameName={game.gameName}
                        gameImage={game.gameImage}
                    />
                ))}
            </div>
        </div>
    )
}