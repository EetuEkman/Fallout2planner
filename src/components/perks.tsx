import React, { ReactNode, MouseEventHandler } from "react";
import { IPerk, IPlayerSkills, IPrimaryStats } from "../models";
import PlayersPerks from "./playersPerks";
import setAvailablePerks from "../setAvailablePerks";
import { calculateFinalSkills } from "../calculateFinalSkills";

interface IPerksProps {
    children?: ReactNode,
    playersPerks: IPerk[],
    availablePerks: IPerk[],
    perkPoints: number,
    playerLevel: number,
    primaryStats: IPrimaryStats,
    baseSkills: IPlayerSkills,
    raisedSkills: IPlayerSkills,
    handlePlayersPerkClick: MouseEventHandler<HTMLDivElement>,
    handleAvailablePerkClick: MouseEventHandler<HTMLDivElement>
}

export default function Perks({ playersPerks, availablePerks, perkPoints, playerLevel, primaryStats, baseSkills, raisedSkills, handlePlayersPerkClick, handleAvailablePerkClick }: IPerksProps): JSX.Element {
    const finalSkills = calculateFinalSkills(baseSkills, raisedSkills);

    const offeredPerks = setAvailablePerks(availablePerks, primaryStats, finalSkills, playerLevel);

    return (
        <div className="perks">
            <PlayersPerks playersPerks={playersPerks} handlePlayerPerkClick={handlePlayersPerkClick}></PlayersPerks>
            <div className="available-perks-header">Available perks</div>
            <div className="available-perks">
                {
                    offeredPerks.map((perk, index) => {
                        let jsx;

                        // Only render perks with ranks left

                        (perk.ranks > 0) ?

                            // Render perks where requirements are not met dark green and without an event handler

                            perk.requirementsMet ?
                                jsx = <div key={index} onClick={handleAvailablePerkClick} data-perk-name={perk.name}>{perk.name} {perk.ranks}</div>
                                :
                                jsx = <div key={index} style={{"color": "darkgreen"}} data-perk-name={perk.name}>{perk.name} {perk.ranks}</div>
                            :
                            jsx = null;

                        return jsx;
                    })
                }
            </div>
            <div className="perk-points-container">
                <div className="perk-points-header">Perk points</div>
                <div className="perk-points">{perkPoints.toString()}</div>
            </div>
        </div>
    )
}