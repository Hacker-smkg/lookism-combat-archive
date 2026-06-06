import type { TrainingLevel, TrainingProgram } from "./types";

function levels(topic: string, stat: string): TrainingLevel[] {
  return [
    {
      id: "very-beginner",
      label: "Very Beginner",
      weeks: "Week 1-4",
      schedule: [`${topic} stance or base pattern 3x/week`, "Mobility before every session", "One video review per week"],
      precision: ["Move slowly enough to correct yourself", "Keep breathing calm", "Stop before pain"],
      mistakes: ["Chasing intensity too early", "Skipping warm-up"],
      unlockTest: `Complete 12 clean ${topic.toLowerCase()} practice sessions.`,
      xpReward: 120
    },
    {
      id: "beginner",
      label: "Beginner",
      weeks: "Week 5-8",
      schedule: [`${topic} fundamentals 4x/week`, `${stat} accessory block 2x/week`, "One recovery day"],
      precision: ["Stable base before speed", "Reset after each rep"],
      mistakes: ["Letting fatigue change alignment"],
      unlockTest: "Finish a clean 20-minute precision session.",
      xpReward: 180
    },
    {
      id: "intermediate",
      label: "Intermediate",
      weeks: "Week 9-14",
      schedule: ["Two skill days", "Two conditioning days", "One assessment day"],
      precision: ["Film one round", "Track one measurable cue"],
      mistakes: ["Adding complexity before consistency"],
      unlockTest: "Pass the selected style benchmark twice.",
      xpReward: 260
    },
    {
      id: "advanced",
      label: "Advanced",
      weeks: "Week 15-22",
      schedule: ["Skill under fatigue", "Benchmark repeats", "Deload every fourth week"],
      precision: ["Clean output while tired", "No ego reps"],
      mistakes: ["Turning practice into punishment"],
      unlockTest: "Hold technique quality in three controlled rounds.",
      xpReward: 360
    },
    {
      id: "expert",
      label: "Expert",
      weeks: "Week 23+",
      schedule: ["Specialist block", "Weakness correction", "Recovery audit"],
      precision: ["Small errors become the target", "Recovery decides progression"],
      mistakes: ["Ignoring recovery debt"],
      unlockTest: "Complete a clean boss-test week.",
      xpReward: 500
    },
    {
      id: "mastery",
      label: "Technique / Mastery",
      weeks: "Open-ended",
      schedule: ["Personal path practice", "Monthly benchmark", "Coach or video review"],
      precision: ["Repeatable under pressure", "Personal style emerges from basics"],
      mistakes: ["Mistaking fiction for real powers"],
      unlockTest: "Maintain progress for 12 weeks with no preventable injury.",
      xpReward: 720
    }
  ];
}

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  { id: "boxing", type: "art", title: "Boxing / Iron Boxing", subtitle: "Guard, jab line, slip-line, counter timing, iron-body base.", linkedFighters: ["Zack Lee", "Gongseob Ji"], statFocus: ["technique", "endurance"], levels: levels("Boxing", "endurance") },
  { id: "kyokushin", type: "art", title: "Yamazaki Kyokushin Karate", subtitle: "Kata, bracing, low kicks, body conditioning without reckless contact.", linkedFighters: ["Gun Park", "Yamazaki Head"], statFocus: ["power", "endurance"], levels: levels("Kyokushin", "power") },
  { id: "copy-adaptive-mma", type: "art", title: "Copy-Adaptive MMA", subtitle: "Observe, replicate, simplify, and safely adapt technique trees.", linkedFighters: ["Daniel Park", "Johan Seong"], statFocus: ["technique", "sense"], levels: levels("Copy-Adaptive MMA", "technique") },
  { id: "strength", type: "mastery", title: "Strength Mastery", subtitle: "Progressive overload, clean compounds, and single-lane power.", linkedFighters: ["Taesoo Ma", "Hudson Ahn"], statFocus: ["power", "conviction"], levels: levels("Strength", "power") },
  { id: "speed", type: "mastery", title: "Speed Mastery", subtitle: "Footwork, reaction starts, and clean acceleration.", linkedFighters: ["James Lee", "Sinu Han"], statFocus: ["speed", "sense"], levels: levels("Speed", "speed") },
  { id: "copy-ui-engine", type: "fighter", title: "Copy + UI Engine", subtitle: "Daniel-style observation, recovery, technical density, and calm response.", linkedFighters: ["UI Big Daniel", "OG Daniel Park", "Gun Park"], statFocus: ["technique", "sense", "conviction"], levels: levels("Copy UI", "technique") },
  { id: "iron-boxing", type: "fighter", title: "Iron Boxing", subtitle: "Boxing base plus endurance, recovery discipline, and counter-only rounds.", linkedFighters: ["Zack Lee", "Gongseob Ji"], statFocus: ["endurance", "technique"], levels: levels("Iron Boxing", "endurance") }
];

export function trainingProgramById(id: string): TrainingProgram | undefined {
  return TRAINING_PROGRAMS.find((program) => program.id === id);
}
