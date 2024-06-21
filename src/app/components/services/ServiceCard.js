import { ServiceHeader } from "./ServiceHeader";
import leagueLagend from '../../../../public/game-logo/league-lagend.png';
import leagueLagendLogo from '../../../../public/icons/league-legend.svg';
import overWatchLogo from '../../../../public/icons/overwatch.svg';
import Image from "next/image";

export const ServiceCard = ({children}) => {
    return (
        <>
        <div className="border-border-light green-radial-gradient-45 border rounded-xl p-6 max-w-96 max-h-96 overflow-hidden">
            {children}
        </div>
        </>
    )
}