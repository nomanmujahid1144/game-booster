'use client';
import Link from "next/link";
import Logo from '../../../../public/logo.png';
import Image from "next/image";
import leagueOfLegends from '../../../../public/games/league-of-legends.svg';
import teamfightTactics from '../../../../public/games/teamfight-tactics.svg';
import valorant from '../../../../public/games/valorant.svg';
import overwatch2 from '../../../../public/games/overwatch2.svg';
import worldOfWarcraft from '../../../../public/games/world-of-warcraft.svg';
import { GameLink } from "./GameLink";
import { useState } from "react";
import { DiscordBtn } from "../buttons/DiscordBtn";

const navlinks = [
    {linkName: 'Home', linkTo: '#'},
    {linkName: 'Jobs', linkTo: '#'},
    {linkName: 'Loyalty Program', linkTo: '#'},
]

const gameLinks = [
    {gameName: 'League of Legends', alt: 'League of Legends Icon', gameLink: '#', bgColor: 'bg-[#DFAE56]', gameIcon: leagueOfLegends},
    {gameName: 'Teamfight Tactics', alt: 'Teamfight Tactics Icon', gameLink: '#', bgColor: 'bg-white', gameIcon: teamfightTactics},
    {gameName: 'Valorant', alt: 'Valorant Icon', gameLink: '#', bgColor: 'bg-[#FB3646]', gameIcon: valorant},
    {gameName: 'Overwatch 2', alt: 'Overwatch 2 Icon', gameLink: '#', bgColor: 'bg-[#EF8313]', gameIcon: overwatch2},
    {gameName: 'World of Warcraft', alt: 'World of Warcraft Icon', gameLink: '#', bgColor: 'bg-[#1B232F]', gameIcon: worldOfWarcraft}
]

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <nav className="pt-6 px-24 grid grid-cols-3 items-center">
                <div className="flex justify-self-start items-center gap-5">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-32"
                    />
                    <div className="relative inline-block text-left w-fit">
                        <button type="button" onClick={handleToggleMenu} className="flex justify-between items-center border px-3 py-3 gap-3 rounded-full font-normal text-sm border-border-light bg-[#FFFFFF05] text-[#FFFFFFE5]" >
                            <img
                                src='/icons/game-control.svg'
                                className="w-5 h-5"
                                alt="Game Controller Icon"
                            />
                            Select Game
                            <img src="/icons/angle-down.svg"/>
                        </button>
                        {openMenu && (
                            <div className="absolute w-64 mt-3 bg-[#FFFFFF21] rounded-xl px-4 py-4 -right-1/4">
                                <div className="">
                                    {gameLinks.map((gameLink, index) => (
                                        <GameLink
                                            key={index}
                                            gameName={gameLink.gameName}
                                            gameIcon={gameLink.gameIcon}
                                            gameLink={gameLink.gameLink}
                                            bgColor={gameLink.bgColor}
                                            alt={gameLink.alt}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex border justify-self-center px-3 py-3 w-fit rounded-full font-normal text-sm border-border-light bg-[#FFFFFF05] text-[#FFFFFFE5]">
                    {navlinks.map((navLink, index) => (
                        <Link href={navLink.linkTo}>
                            <p key={index} className="px-3">
                                {navLink.linkName}
                            </p>
                        </Link>
                    ))}
                </div>
                <DiscordBtn
                    btnText={'Join Our Discord'}
                    icon={'/icons/discord.svg'}
                    additionClass={'w-fit justify-self-end'}
                    alt={"Discord Icon"}
                />
            </nav>
            <hr className="horizontal-line border-none" />
        </>
    )
}