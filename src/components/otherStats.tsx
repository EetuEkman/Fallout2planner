import React from "react";
import { IPerk, ITrait, PerkNames } from "../models";

interface IOtherStatsProps {
    perks: IPerk[],
    traits: ITrait[]
}

export default function OtherStats({ perks }: IOtherStatsProps): JSX.Element {
    return (
        <>
            <div className="derived-stat" style={{ "color": "orange" }}>Other stats</div>
            {
                perks.map((perk, index) => {

                    let jsx: JSX.Element | undefined;

                    if (perk.ranks > 0) {
                        switch (perk.name) {
                            case PerkNames.bonusMove:
                                if (perk.ranks === 1) {
                                    jsx = <div key={index} className="derived-stat">+2 free action points for movement per turn</div>
                                } else if (perk.ranks === 2) {
                                    jsx = <div key={index} className="derived-stat">+4 free action points for movement per turn</div>
                                }

                                break;
                            case PerkNames.adrenalineRush:
                                jsx = <div key={index} className="derived-stat">+1 to strength when at half hit points</div>

                                break;
                            case PerkNames.awareness:
                                jsx = <div key={index} className="derived-stat">Able to see enemy hit points, weapon and available ammunition</div>
                            
                                break;
                            case PerkNames.bonusHthAttacks:
                                jsx = <div key={index} className="derived-stat">All action point costs with unarmed and melee weapons are reduced by 1</div>

                                break;
                            case PerkNames.bonusRateOfFire:
                                jsx = <div key={index} className="derived-stat">All action point costs with ranged weapons are reduced by 1</div>

                                break;
                            case PerkNames.bonusRangedDamage:
                                if (perk.ranks === 1) {
                                    jsx = <div key={index} className="derived-stat">+2 damage with ranged weapons per round</div>
                                } else if (perk.ranks === 2) {
                                    jsx = <div key={index} className="derived-stat">+4 damage with ranged weapons per round</div>
                                }

                                break;
                        }
                    }

                    return jsx;
                })
            }
        </>
    )
}