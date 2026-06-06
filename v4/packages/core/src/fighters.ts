import type { FighterProfile } from "./types";

export const FIGHTERS: FighterProfile[] = [
  { id: "ui-big-daniel", rank: 1, name: "UI Big Daniel", aliases: ["Perfect Body", "Second Body Daniel"], tier: "Mythic Pinnacle", primaryTechniques: "All Martial Arts", uniqueSkill: "Infinite Copy", masteriesAchieved: "Perfect Hardware / Software", combatPath: "Absolute Neutrality", linkedPrograms: ["copy-adaptive-mma", "copy-ui-engine"] },
  { id: "gapryong-kim", rank: 2, name: "Gapryong Kim", aliases: ["Legend of Fist Gang"], tier: "Mythic Pinnacle", primaryTechniques: "Brawling / Boxing", uniqueSkill: "Hysterical Overcome", masteriesAchieved: "Conviction, Strength, Speed, Endurance, Technique", combatPath: "Path of Protection", linkedPrograms: ["conviction", "king-strength"] },
  { id: "james-lee", rank: 4, name: "James Lee", aliases: ["DG", "The Legend"], tier: "Mythic Pinnacle", primaryTechniques: "Capoeira / Taekwondo", uniqueSkill: "Invisible Attacks", masteriesAchieved: "Speed, Technique, Strength", combatPath: "One Man Generation", linkedPrograms: ["speed", "speed-legend"] },
  { id: "gun-park", rank: 7, name: "Gun Park", aliases: ["White Ghost"], tier: "Mythic Pinnacle", primaryTechniques: "Kyokushin / Aikido", uniqueSkill: "Unconscious UI", masteriesAchieved: "UI, Strength, Endurance, Technique", combatPath: "Yamazaki Shield", linkedPrograms: ["kyokushin", "copy-ui-engine"] },
  { id: "goo-kim", rank: 8, name: "Goo Kim", aliases: ["Secret Friend"], tier: "Transcendent Legend", primaryTechniques: "Weaponizing Objects", uniqueSkill: "Instant Lethality", masteriesAchieved: "Weapon, Technique, Speed", combatPath: "The Lethal Blade", linkedPrograms: ["weapon-specialist", "kali"] },
  { id: "og-daniel", rank: 19, name: "OG Daniel Park", aliases: ["Little Daniel", "Original Daniel"], tier: "King / High Mastery", primaryTechniques: "All Martial Arts", uniqueSkill: "Systema / Copy", masteriesAchieved: "Copy, Speed, Technique, Personal Path", combatPath: "Original UI Evolution", linkedPrograms: ["copy-adaptive-mma", "copy-ui-engine"] },
  { id: "zack-lee", rank: 27, name: "Zack Lee", aliases: ["Iron Fortress"], tier: "Crew-Head Apex", primaryTechniques: "In-Fighter Boxing", uniqueSkill: "Iron Fortress", masteriesAchieved: "Endurance, Speed", combatPath: "The Boxer's Path", linkedPrograms: ["boxing", "iron-boxing"] },
  { id: "vasco", rank: 28, name: "Vasco", aliases: ["Hero"], tier: "Crew-Head Apex", primaryTechniques: "Muay Thai", uniqueSkill: "Hero Mode", masteriesAchieved: "Strength, Endurance", combatPath: "Brekdak's Legacy", linkedPrograms: ["muay-thai", "conviction-brawler"] }
];

export function fighterById(id: string): FighterProfile | undefined {
  return FIGHTERS.find((fighter) => fighter.id === id);
}
