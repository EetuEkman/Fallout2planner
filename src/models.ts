/**
 * Primary stats
 * 
 * Strength, perception, endurance, charisma, intelligence, agility and luck and unspent stat points
 */

export interface IPrimaryStats {
    strength: number,
    perception: number,
    endurance: number,
    charisma: number,
    intelligence: number,
    agility: number,
    luck: number,
    unspentPoints: number
}

/**
 * Define names for player skills
 */

export enum PlayerSkillNames {
    SmallGuns = "Small guns",
    BigGuns = "Big guns",
    EnergyWeapons = "Energy weapons",
    Unarmed = "Unarmed",
    MeleeWeapons = "Melee weapons",
    Throwing = "Throwing",
    FirstAid = "First aid",
    Doctor = "Doctor",
    Sneak = "Sneak",
    Lockpick = "Lockpick",
    Steal = "Steal",
    Traps = "Traps",
    Science = "Science",
    Repair = "Repair",
    Speech = "Speech",
    Barter = "Barter",
    Gambling = "Gambling",
    Outdoorsman = "Outdoorsman"
}

/**
 * Hold the values of player skills, such as small guns
 */

export interface IPlayerSkills {
    smallGuns: number,
    bigGuns: number,
    energyWeapons: number,
    unarmed: number,
    meleeWeapons: number,
    throwing: number,
    firstAid: number,
    doctor: number,
    sneak: number,
    lockpick: number,
    steal: number,
    traps: number,
    science: number,
    repair: number,
    speech: number,
    barter: number,
    gambling: number,
    outdoorsman: number
}

/**
 * Stats derived from primary stats, traits and perks.
 */

export interface IDerivedStats {
    hitPoints: number,
    armorClass: number,
    actionPoints: number,
    carryWeight: number,
    meleeDamage: number,
    damageResistance: number,
    poisonResistance: number,
    radiationResistance: number,
    sequence: number,
    healingRate: number,
    criticalChance: number,
    partyLimit: number,
    perkRate: number,
    skillRate: number,
    criticalDamageModifier: number,
    enemyDamageResistanceModifier: number,
    chemAddictionChance: number,
    chemDuration: number,
    chemAddictionRecovery: number,
    hitPointsPerLevel: number
}

/**
 * Represents a character trait
 */

export interface ITrait {
    name: string
}

export enum TraitNames {
    bloodyMess = "Bloody mess",
    bruiser = "Bruiser",
    chemReliant = "Chem reliant",
    chemResistant = "Chem resistant",
    fastMetabolism = "Fast metabolism",
    fastShot = "Fast shot",
    finesse = "Finesse",
    gifted = "Gifted",
    goodNatured = "Good natured",
    heavyHanded = "Heavy handed",
    jinxed = "Jinxed",
    kamikaze = "Kamikaze",
    oneHander = "One hander",
    sexAppeal = "Sex appeal",
    skilled = "Skilled",
    smallFrame = "Small frame"
}

/**
 * Holds all the available traits
 */

export const TRAITS: Array<ITrait> = [
    { name: "Bloody mess" },
    { name: "Bruiser" },
    { name: "Chem reliant" },
    { name: "Chem resistant" },
    { name: "Fast metabolism" },
    { name: "Fast shot" },
    { name: "Finesse" },
    { name: "Gifted" },
    { name: "Good natured" },
    { name: "Heavy handed" },
    { name: "Jinxed" },
    { name: "Kamikaze" },
    { name: "One hander" },
    { name: "Sex appeal" },
    { name: "Skilled" },
    { name: "Small frame" }
];

/**
 * Action for the primary stats reducer
 */
 export interface IPrimaryStatsAction {
    type: string,
    payload: string,
    traits: ITrait[],
    gainPrimaryStatPerk?: string
}

/**
 * Player's skills with 0 values
 */

export function getEmptyPlayerSkills(): IPlayerSkills {
    const emptyPlayerSkills: IPlayerSkills = {
        smallGuns: 0,
        bigGuns: 0,
        energyWeapons: 0,
        unarmed: 0,
        meleeWeapons: 0,
        throwing: 0,
        firstAid: 0,
        doctor: 0,
        sneak: 0,
        lockpick: 0,
        steal: 0,
        traps: 0,
        science: 0,
        repair: 0,
        speech: 0,
        barter: 0,
        gambling: 0,
        outdoorsman: 0
    }

    return emptyPlayerSkills;
}

/**
 * Default base skills calculated with 5-5-5-5-5-5-5 primary stats
 */

export function getDefaultPlayerSkills() : IPlayerSkills {
    const defaultPlayerSkills: IPlayerSkills = {
        smallGuns: 25,
        bigGuns: 10,
        energyWeapons: 15,
        unarmed: 50,
        meleeWeapons: 40,
        throwing: 20,
        firstAid: 50,
        doctor: 15,
        sneak: 20,
        lockpick: 20,
        steal: 15,
        traps: 20,
        science: 20,
        repair: 15,
        speech: 25,
        barter: 20,
        gambling: 25,
        outdoorsman: 20
    }

    return defaultPlayerSkills;
}

const emptyPlayerSkills: IPlayerSkills = {
    smallGuns: 0,
    bigGuns: 0,
    energyWeapons: 0,
    unarmed: 0,
    meleeWeapons: 0,
    throwing: 0,
    firstAid: 0,
    doctor: 0,
    sneak: 0,
    lockpick: 0,
    steal: 0,
    traps: 0,
    science: 0,
    repair: 0,
    speech: 0,
    barter: 0,
    gambling: 0,
    outdoorsman: 0
}

const emptyPrimaryStats: IPrimaryStats = {
    strength: 0,
    perception: 0,
    endurance: 0,
    charisma: 0, 
    intelligence: 0, 
    agility: 0, 
    luck: 0, 
    unspentPoints: 0
}

/**
 * Represents a perk
 * 
 * Perks have different ranks and a maximum rank
 * 
 * A rank represents how many times the perk has been selected
 * or how many times it can still be selected
 * 
 * A max rank represents how many times the perk can be selected
 * 
 * levelSelected holds the player levels the perk was selected
 * 
 * requirementsMet holds if the requirements for the perks are met
 */

 export interface IPerk {
    name: string,
    requirements: IPerkRequirements,
    ranks: number,
    maxRanks: number,
    levelSelected: number[],
    requirementsMet: boolean
}

/**
 * Represents perk requirements
 * 
 * Perks can require different levels, primary stats and skills
 */

export interface IPerkRequirements {
    level: number,
    primaryStats: IPrimaryStats,
    playerSkills: IPlayerSkills,
}

/**
 * All perk names
 */

export enum PerkNames {
    awareness = "Awareness",
    bonusHthDamage = "Bonus hth damage",
    cautiousNature = "Cautious nature", 
    comprehension = "Comprehension",
    earlierSequence = "Earlier sequence",
    fasterHealing = "Faster healing",
    healer = "Healer",
    hereAndNow = "Here and now",
    kamaSutraMaster = "Kama sutra master",
    nightVision = "Night vision",
    presence = "Presence",
    quickPockets = "Quick pockets",
    scout = "Scout",
    smoothTalker = "Smooth talker",
    stonewall = "Stonewall",
    strongBack = "Strong back",
    survivalist = "Survivalist",
    swiftLearner = "Swift learner",
    thief = "Thief",
    toughness = "Toughness",
    adrenalineRush = "Adrenaline rush",
    bonusMove = "Bonus move",
    bonusRangedDamage = "Bonus ranged damage",
    educated = "Educated",
    empathy = "Empathy",
    fortuneFinder = "Fortune finder",
    gambler = "Gambler",
    ghost = "Ghost",
    harmless = "Harmless",
    heaveHo = "Heave Ho!",
    magneticPersonality = "Magnetic personality",
    moreCriticals = "More criticals",
    negotiator = "Negotiator",
    packRat = "Pack rat",
    pathfinder = "Pathfinder",
    quickRecovery = "Quick recovery",
    radResistance = "Rad resistance",
    ranger = "Ranger",
    salesman = "Salesman",
    silentRunning = "Silent running",
    snakeater = "Snakeater",
    betterCriticals = "Better criticals",
    demolitionExpert = "Demolition expert",
    dodger = "Dodger",
    explorer = "Explorer",
    karmaBeacon = "Karma beacon",
    lightStep = "Light step",
    mutate = "Mutate!",
    mysteriousStranger = "Mysterious stranger",
    pyromaniac = "Pyromaniac",
    scrounger = "Scrounger",
    sharpshooter = "Sharpshooter",
    speaker = "Speaker",
    actionBoy = "Action boy",
    cultOfPersonality = "Cult of personality",
    hthEvade = "Hth evade",
    lifegiver = "Lifegiver",
    livingAnatomy = "Living anatomy",
    masterThief = "Master thief",
    masterTrader = "Master trader",
    nedic = "Medic",
    mrFixit = "Mr. Fixit",
    tag = "Tag!",
    weaponHandling = "Weapon handling",
    bonusHthAttacks = "Bonus hth attacks",
    bonusRateOfFire = "Bonus rate of fire",
    pickpocket = "Pickpocket",
    silentDeath = "Silent death",
    slayer = "Slayer",
    gainStrength = "Gain strength",
    gainPerception = "Gain perception",
    gainEndurance = "Gain endurance",
    gainCharisma = "Gain charisma",
    gainIntelligence = "Gain intelligence",
    gainAgility = "Gain agility",
    gainLuck = "Gain luck",
    medic = "Medic",
    sniper = "Sniper",
    dermalImpactArmor = "Dermal impact armor",
    dermalImpactAssaultEnhancement = "Dermal impact assault enhancement",
    expertExcrementExpeditor = "Expert excrement expeditor",
    phoenixArmorImplants = "Phoenix armor implants",
    phoenixAssaultEnhancement = "Phoenix assault enhancement",
    vaultCityTraining = "Vault city training",
    vaultCityInoculations = "Vault city inoculations"
}

export enum DerivedStatsNames {
    hitPoints = "Hit points",
    armorClass = "Armor class",
    actionPoints = "Action points",
    carryWeight = "Carry weight",
    meleeDamage = "Melee damage",
    damageResistance = "Damage resistance",
    poisonResistance = "Poison resistance",
    radiationResistance = "Radiation resistance",
    healingRate = "Healing rate",
    hitPointsPerLevel = "Hit points per level",
    criticalChance = "Critical chance",
    sequence = "Sequence",
    partyLimit = "Party limit",
    enemyDamageResistanceModifier = "Enemy damage resistance modifier",
    criticalDamageModifier = "Critical damage modifier",
    perkRate = "Perk rate"
}

/**
 * Contains all the perks
 */

 export const PERKS: IPerk[] = [
    {
        name: PerkNames.actionBoy,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, agility: 5 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 2,
        maxRanks: 2,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.adrenalineRush,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, strength: 10 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.awareness,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, perception: 5 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.betterCriticals,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats, perception: 6, agility: 4, luck: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.bonusHthAttacks,
        requirements: {
            level: 15,
            primaryStats: { ...emptyPrimaryStats, agility: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.bonusHthDamage,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, strength: 6, agility: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.bonusMove,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, agility: 5 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 2,
        maxRanks: 2,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.bonusRangedDamage,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, agility: 6, luck: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 2,
        maxRanks: 2,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.bonusRateOfFire,
        requirements: {
            level: 15,
            primaryStats: { ...emptyPrimaryStats, perception: 6, intelligence: 6, agility: 7 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.cautiousNature,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, perception: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.comprehension,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, intelligence: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.cultOfPersonality,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, charisma: 10 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.demolitionExpert,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats, agility: 4 },
            playerSkills: { ...emptyPlayerSkills, traps: 75 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.dodger,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats, agility: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.earlierSequence,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: emptyPlayerSkills
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.educated,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, intelligence: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.empathy,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, perception: 7, intelligence: 5 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.explorer,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.fasterHealing,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, endurance: 6 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.fortuneFinder,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, luck: 8 },
            playerSkills: emptyPlayerSkills
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.gambler,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, gambling: 50 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.ghost,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, sneak: 60 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.harmless,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, steal: 50 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.healer,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, perception: 7, intelligence: 5, agility: 6 },
            playerSkills: { ...emptyPlayerSkills, firstAid: 40 }
        },
        ranks: 2,
        maxRanks: 2,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.heaveHo,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, strength: 9 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.hereAndNow,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.hthEvade,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, unarmed: 75 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.kamaSutraMaster,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, endurance: 5, agility: 5 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.karmaBeacon,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats, charisma: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.lifegiver,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, endurance: 4 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 2,
        maxRanks: 2,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.lightStep,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats, agility: 5, luck: 5 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.livingAnatomy,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, doctor: 60 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.magneticPersonality,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, charisma: 10 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.masterThief,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, lockpick: 50, steal: 50 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.masterTrader,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, charisma: 7 },
            playerSkills: { ...emptyPlayerSkills, barter: 75 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.medic,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, firstAid: 40, doctor: 40 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.moreCriticals,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, luck: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.mrFixit,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, science: 40, repair: 40 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.mutate,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.mysteriousStranger,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats, luck: 40 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.negotiator,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, barter: 50, speech: 50 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.nightVision,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, perception: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.packRat,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.pathfinder,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, endurance: 6 },
            playerSkills: { ...emptyPlayerSkills, outdoorsman: 40 }
        },
        ranks: 2,
        maxRanks: 2,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.pickpocket,
        requirements: {
            level: 15,
            primaryStats: { ...emptyPrimaryStats, agility: 8 },
            playerSkills: { ...emptyPlayerSkills, steal: 80 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.presence,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, charisma: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.pyromaniac,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, bigGuns: 75 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.quickPockets,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, agility: 5 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.quickRecovery,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, agility: 5 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.radResistance,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, endurance: 6, intelligence: 4 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 2,
        maxRanks: 2,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.ranger,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, perception: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.salesman,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, barter: 50 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.scout,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, perception: 7 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.scrounger,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats, luck: 8 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.sharpshooter,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats, perception: 7, intelligence: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.silentDeath,
        requirements: {
            level: 18,
            primaryStats: { ...emptyPrimaryStats, agility: 10 },
            playerSkills: { ...emptyPlayerSkills, sneak: 80, unarmed: 80 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.silentRunning,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, agility: 6 },
            playerSkills: { ...emptyPlayerSkills, sneak: 50 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.slayer,
        requirements: {
            level: 24,
            primaryStats: { ...emptyPrimaryStats, strength: 8, agility: 8 },
            playerSkills: { ...emptyPlayerSkills, unarmed: 80 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.smoothTalker,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, intelligence: 4 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.snakeater,
        requirements: {
            level: 6,
            primaryStats: { ...emptyPrimaryStats, endurance: 3 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 2,
        maxRanks: 2,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.sniper,
        requirements: {
            level: 24,
            primaryStats: { ...emptyPrimaryStats, perception: 8, agility: 8 },
            playerSkills: { ...emptyPlayerSkills, smallGuns: 80 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.speaker,
        requirements: {
            level: 9,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills, speech: 50 }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.stonewall,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, strength: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.strongBack,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, strength: 6, endurance: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.survivalist,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, endurance: 6, intelligence: 6 },
            playerSkills: { ...emptyPlayerSkills, outdoorsman: 40}
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.swiftLearner,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, intelligence: 4 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.tag,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.thief,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.toughness,
        requirements: {
            level: 3,
            primaryStats: { ...emptyPrimaryStats, endurance: 6, luck: 6 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 3,
        maxRanks: 3,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.weaponHandling,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, strength: 7, agility: 5 },
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.gainStrength,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, strength: 10},
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.gainPerception,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, perception: 10},
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.gainEndurance,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, endurance: 10},
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.gainCharisma,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, charisma: 10},
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.gainIntelligence,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, intelligence: 10},
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.gainAgility,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, agility: 10},
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
    {
        name: PerkNames.gainLuck,
        requirements: {
            level: 12,
            primaryStats: { ...emptyPrimaryStats, luck: 10},
            playerSkills: { ...emptyPlayerSkills }
        },
        ranks: 1,
        maxRanks: 1,
        levelSelected: [],
        requirementsMet: false
    },
]

export enum PrimaryStatNames {
    strength = "Strength",
    perception = "Perception",
    endurance = "Endurance",
    charisma = "Charisma",
    intelligence = "Intelligence",
    agility = "Agility",
    luck = "Luck"
}

/**
 * Represents a tooltip for primary stat, trait, player skill or perk
 * 
 * Name is used for identification
 * 
 * Text contains the description
 */

export interface ITooltip {
    name: string,
    header: string,
    paragraph: string
}

export const emptyTooltip: ITooltip = {
    name: "",
    header: "",
    paragraph: ""
}

/**
 * Holds all the tooltips for primary stats, traits, player skills and perks
 */

export const TOOLTIPS: ITooltip[] = [
    { 
        name: PrimaryStatNames.strength,
        header: "Strength",
        paragraph: "Modifies: Hit Points, Melee Damage and Carry Weight.\n\nStrength is primarily relevant to two in-game mechanics: Carry Weight and satisfying the minimum Strength requirements on weapons. Each point of it grants 25 lbs. of Carry Weight (with the Small Frame trait, it is 15 instead). Not meeting a weapon's minimum Strength requirement penalizes aim accuracy with that weapon by -20% for each missing point in Strength. "
    },
    {
        name: PrimaryStatNames.perception,
        header: "Perception",
        paragraph: "Modifies: Sequence, ranged combat distance modifiers and the First Aid, Doctor, Lockpick and Traps skills.\n\nA player character with higher Perception may notice things that allow them to open up new dialogue options on occasion. It also determines how far away they start from hostilities in random encounters. A combination of the Traps skill and Perception is used to detect traps on the ground. Perception is required for many perks, such as PE 8 for Sniper."
    },
    {
        name: PrimaryStatNames.endurance,
        header: "Endurance",
        paragraph: "Modifies: Hit Points, Poison & Radiation Resistance, Healing Rate, and the additional Hit Points per level."
    },
    {
        name: PrimaryStatNames.charisma,
        header: "Charisma",
        paragraph: "Modifies non-player character reactions, prices, Speech, Barter, Party Limits."
    },
    {
        name: PrimaryStatNames.intelligence,
        header: "Intelligence",
        paragraph: "Modifies: the number of new skill points per level, numerous dialogue options, and many skills.\n\nOne of the unique qualities of Fallout 2 is the difference in gameplay caused by creating a low-Intelligence character. With a dimwitted player character, many non-player characters will simply shrug one off, while others will insult or even attack them. On the other hand, certain characters will take pity on the character's stumped intellect, and might treat them as innocent children. In some cases, where a character with normal vocabulary would need to persuade them or offer a service in exchange, these characters will often give the character gifts or allow them entrance in certain areas for free out of pity."
    },
    {
        name: PrimaryStatNames.agility,
        header: "Agility",
        paragraph: "Action point allocation is based on the AG stat. Therefore, a character that wishes to keep an enemy on its toes, or claws, needs to have a high Agility in order to have multiple combat moves. Additionally, it allows the character to dodge better. It is a critical stat for anyone interested in more mobile and visceral skills, such as unarmed and small guns.\n\nModifies Action Points, Armor Class, Small Guns, Big Guns, Energy Weapons, Melee Weapons, Unarmed, Throwing, Lockpick, Steal, Traps."
    },
    {
        name: PrimaryStatNames.luck,
        header: "Luck",
        paragraph: "In Fallout 2, Luck primarily affects the chances with the virtual dice of the game: a high Luck increases the likelihood to succeed a roll, while the opposite is also true. Luck also affects the chance to score a critical hit on a target, with the standard being that the Critical Chance is equal to the subject's Luck (keep in mind, standard means without perks, traits, or aimed shots). It also determines the initial level of the Gambling skill."
    },
    { name: "Bloody mess", header: "Bloody mess", paragraph: "This trait does not alter gameplay other than the fact that violent death animations are seen more often.\n\nBloody Mess has a positive impact if you plan to use the super sledge, or related heavy melee weapons. If someone dies, the death is instant instead of first sliding down half of the game screen. " },
    { name: "Bruiser", header: "Bruiser", paragraph: "Your Strength is increased by 2 points, but you lose 2 action points. The 2 stat points gained by this trait can be used on any SPECIAL stat, like with Small Frame and Gifted." },
    { name: "Chem reliant", header: "Chem reliant", paragraph: "You are more easily addicted to chems. Your chance to become addicted to chems is twice the norm, but you recover faster from their ill effects." },
    { name: "Chem resistant", header: "Chem resistant", paragraph: "The addiction chance of chems are halved, but so too is the effect duration of the chem." },
    { name: "Fast metabolism", header: "Fast metabolism", paragraph: "This trait adds +2 to your Healing Rate, but your radiation and poison resistances start at 0%." },
    { name: "Fast shot", header: "Fast shot", paragraph: "Action point costs for all ranged weapons are reduced by 1 AP. The player cannot make called shots to body parts." },
    { name: "Finesse", header: "Finesse", paragraph: "All of your attacks do -30% damage, but your critical chance is increased by 10%. Technically, this is done by adding a +30 DR modifier to all attacks, which is ignored by armor-bypassing criticals. Because criticals have a chance to kill an enemy instantly anyway, this is a very good trait." },
    { name: "Gifted", header: "Gifted", paragraph: "All seven primary statistics have a +1 modifier, but all skills are reduced by 10%. You also receive 5 less skill points per level. The 7 stat points received from this trait can be re-distributed, like with Small Frame and Bruiser." },
    { name: "Good natured", header: "Good natured", paragraph: "First Aid, Doctor, Speech, and Barter get a one-time +15% bonus. You get a -10% modifier to starting combat skills (Small Guns, Big Guns, Energy Weapons, Unarmed, Melee Weapons, and Throwing)." },
    { name: "Heavy handed", header: "Heavy handed", paragraph: "You get +4 points of melee damage, but your critical hits have a -30% modifier to the critical hit tables. " },
    { name: "Jinxed", header: "Jinxed", paragraph: "If you or a non-player character has a failure during combat, there is a greater likelihood that the failure will be upgraded (or is it downgraded?) to a critical failure. " },
    { name: "Kamikaze", header: "Kamikaze", paragraph: "With this trait, your sequence gets a +5 bonus, but your natural armor class is decreased to zero." },
    { name: "One hander", header: "One hander", paragraph: "With this trait you have -40% chance to hit with two-handed weapons, and +20% to hit with weapons that only require one hand." },
    { name: "Sex appeal", header: "Sex appeal", paragraph: "The trait increases the disposition of characters of the opposite sex and reduces it for characters of the same. It has a marginal effect in the game, resulting in slightly better prices from shopkeepers." },
    { name: "Skilled", header: "Skilled", paragraph: "You gain +5 skill points per level but gain a perk only every 4 levels instead of 3." },
    { name: "Small frame", header: "Small frame", paragraph: "You are not quite as big as other people, but that never slowed you down. You can't carry as much, but you are more agile. You get a +1 bonus to your Agility, but your carry weight is equal to 25 + (15 lbs. x Strength), instead of 25 + (25 lbs. x Strength). The extra stat point gained by this trait can be set on any other SPECIAL stat, like with Bruiser and Gifted. " },
    { name: PlayerSkillNames.SmallGuns, header: PlayerSkillNames.SmallGuns, paragraph: "Firearms covered by the use of this skill: pistols (both revolvers and autoloaders), sub-machineguns (SMGs), rifles, and shotguns. The skill level is your base percentage to hit. Modifiers include: weapon weight, range, darkness, and cover. This skill is used automatically in combat when you attack with the appropriate weapon."},
    { name: PlayerSkillNames.BigGuns, header: PlayerSkillNames.BigGuns, paragraph: "Similar to Small Guns, but this skill affects much bigger weapons: rocket launcher, mini-gun, flamer, and other large weapons. This skill is used automatically in cmbat when you attack with the appropriate weapon." },
    { name: PlayerSkillNames.EnergyWeapons, header: PlayerSkillNames.EnergyWeapons, paragraph: "Also like Small Guns, but it affects any ranged weapon that uses energy cells instead of conventional chemical propellants. This skill is used automatically in combat when you attack with the appropriate weapon." },
    { name: PlayerSkillNames.Unarmed, header: PlayerSkillNames.Unarmed, paragraph: "A combination of martial arts, boxing and other hand-to-hand martial arts. Combat with your hands and feet. " },
    { name: PlayerSkillNames.MeleeWeapons, header: PlayerSkillNames.MeleeWeapons, paragraph: "" },
    { name: PlayerSkillNames.Throwing, header: PlayerSkillNames.Throwing, paragraph: "" },
    { name: PlayerSkillNames.FirstAid, header: PlayerSkillNames.FirstAid, paragraph: "" },
    { name: PlayerSkillNames.Doctor, header: PlayerSkillNames.Doctor, paragraph: "" },
    { name: PlayerSkillNames.Steal, header: PlayerSkillNames.Steal, paragraph: "" },
    { name: PlayerSkillNames.Sneak, header: PlayerSkillNames.Sneak, paragraph: "" },
    { name: PlayerSkillNames.Lockpick, header: PlayerSkillNames.Lockpick, paragraph: "" },
    { name: PlayerSkillNames.Traps, header: PlayerSkillNames.Traps, paragraph: "" },
    { name: PlayerSkillNames.Repair, header: PlayerSkillNames.Repair, paragraph: "" },
    { name: PlayerSkillNames.Science, header: PlayerSkillNames.Science, paragraph: "" },
    { name: PlayerSkillNames.Gambling, header: PlayerSkillNames.Gambling, paragraph: "" },
    { name: PlayerSkillNames.Outdoorsman, header: PlayerSkillNames.Outdoorsman, paragraph: "" },
    { name: PlayerSkillNames.Speech, header: PlayerSkillNames.Speech, paragraph: "" },
    { name: DerivedStatsNames.hitPoints, header: DerivedStatsNames.hitPoints, paragraph: "" },
    { name: DerivedStatsNames.actionPoints, header: DerivedStatsNames.actionPoints, paragraph: "" },
    { name: DerivedStatsNames.armorClass, header: DerivedStatsNames.armorClass, paragraph: "" },
    { name: DerivedStatsNames.poisonResistance, header: DerivedStatsNames.poisonResistance, paragraph: "" },
    { name: DerivedStatsNames.radiationResistance, header: DerivedStatsNames.radiationResistance, paragraph: "" },
    { name: DerivedStatsNames.healingRate, header: DerivedStatsNames.healingRate, paragraph: "" },
    { name: DerivedStatsNames.hitPointsPerLevel, header: DerivedStatsNames.hitPointsPerLevel, paragraph: "" },
    { name: DerivedStatsNames.damageResistance, header: DerivedStatsNames.damageResistance, paragraph: "" },
    { name: DerivedStatsNames.criticalChance, header: DerivedStatsNames.criticalChance, paragraph: "" },
    { name: DerivedStatsNames.criticalDamageModifier, header: DerivedStatsNames.criticalDamageModifier, paragraph: "" },
    { name: DerivedStatsNames.perkRate, header: DerivedStatsNames.perkRate, paragraph: "" },
]