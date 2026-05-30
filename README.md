# Lookism Combat Archive

A web-first fan-made Lookism training and combat archive inspired by the
manhwa's character growth, power-level debates, brutal fights, mastery fields,
Path concepts, Ultra Instinct, and intense training arcs.

Live app: https://lookism-vercel.vercel.app

## What This App Is

Lookism Combat Archive is a dark neon "System" web app that combines a fighter
archive, visual vault, training library, XP dashboard, profile diagnosis, cloud
save, and Gemini-powered coaching assistant.

The core fantasy is simple: start like weak Daniel Park, then level up through
safe real-world training quests, martial-art practice, stat growth, mastery
programs, fighter-type routes, and boss tests until you climb toward a
Pinnacle Legend style rank.

The app uses Lookism-inspired concepts such as:

- Ultra Instinct and controlled response training
- Path and personal fighting identity
- Strength, Speed, Endurance, Technique, Sense, and Conviction stats
- Copy-adaptive fighting, Iron Boxing, Wildness, King Strength, Speed Legends,
  grappling, weapon handling, and conviction-based growth
- Top Lookism fighters, masteries, fighting styles, physiques, and training
  themes

These are used as fictional motivation and structured fitness themes. The app
does not claim that manhwa powers are real.

## Why I Made It

Lookism has some of the most exciting character transformations, fight scenes,
training arcs, and power-scaling discussions in manhwa. I wanted one place where
fans could explore top fighters, see character visuals, compare archetypes, and
turn that energy into a practical level-up system.

Instead of only reading about Daniel, Gun, James Lee, Tom Lee, Zack, Vasco,
Johan, Jake, Goo, Gapryong, Shingen, Mujin, and other elite fighters, this app
turns their themes into progressive training routes: strength, speed, endurance,
technique, martial skill, recovery, consistency, and personal growth.

## Current Features

- Desktop-first Lookism System UI with sticky top navigation and responsive
  mobile layout.
- Permanent background image collage using committed Lookism character images in
  `lookism-assets/backgrounds`.
- Real cached fighter images from `lookism-assets/characters`; no stickman or
  generated placeholder overlays.
- Top-50 fighter roster with search, tier details, fighting styles, masteries,
  physique notes, and Lookism-inspired training notes.
- Visual Vault for character, source, mode, mastery, and path references.
- Vault filters for `All`, `UI`, `Mastery`, `Path`, `Brutal Fights`, `Kings`,
  and `Pre-Gen`.
- System dashboard with XP, level, rank, streaks, stat meters, quests, and
  progress bars.
- First-run `Start Diagnosis` onboarding so users understand the System before
  Cloud Save.
- Clear separation between Profile `Diagnosis Score` and dashboard
  `System Stats`.
- Solo-Leveling-style rank ladder from `Weak Daniel` to `Pinnacle Legend`.
- Daily, weekly, technique, mastery, fighter-type, and boss quests.
- Safe Penalty Zone concept that adds recovery or mobility debt instead of
  harmful punishment.
- Profile diagnosis form for body data, training age, equipment, goals, injury
  limits, lift PRs, pull-ups, push-ups, plank, mile, and 5K time.
- Offline AI-style analysis that classifies users into starting categories and
  recommends the next climb.
- Higher Category Journey with blockers, weekly schedule, XP targets, stat
  priorities, recommended mastery, fighter type, and martial art route.
- Apply Journey flow that personalizes the System dashboard quests.
- Per-style progress tracking for martial arts, mastery fields, and fighter
  types, such as Boxing Lv, Kyokushin Lv, Iron Boxing Lv, and Strength Mastery.
- Training level completion buttons that award XP, update program progress,
  write logs, and sync when signed in.
- Progress history charts for XP, streak heat, stat growth, and boss-test PRs.
- Focus Mode to dim the manga background behind dense forms and dashboards.
- Profile input validation so impossible values do not distort scoring.
- Gemini-backed AI Coach output on the Profile page, with clean offline fallback
  when Gemini is unavailable.
- Floating System AI chatbot with a draggable neon orb that remembers its screen
  position.
- Chat drawer on web and responsive assistant behavior on smaller screens.
- Structured AI/chat cards for `Condition`, `Today's Quest`, `Recovery`, and
  `Next Rank`.
- Chatbot context reads profile, diagnosis, XP, rank, stats, quests, journey,
  and recent progress.
- Chatbot coaching categories: condition summary, next-rank checklist, training,
  martial-art focus, diet basics, sleep, recovery, motivation, and boss-test
  readiness.
- Deterministic promotion logic: AI can recommend a review, but XP, stats,
  quests, and benchmark rules decide rank progress.
- Animated home System orb with continuous glow/de-glow effect.
- Supabase cloud save for authenticated users.
- Account tools for sync, restore cloud save, export data, clear local save, and
  delete app data.
- Local browser storage fallback so the app works without login.

## Training Library

The Train page is split into deep clickable programs:

- Fighter Types
- Martial Arts
- Mastery Fields
- Learning Library

Each detail program includes six progression levels:

- Very Beginner
- Beginner
- Intermediate
- Advanced
- Expert
- Technique or Mastery level

Every level includes weekly schedule guidance, precision cues, common mistakes,
safety notes, XP rewards, unlock tests, doc/source links, and YouTube tutorial
search links.

Martial arts covered include:

- Boxing / Iron Boxing
- Muay Thai / Runner's High
- Yamazaki Kyokushin Karate
- Aikido / Joint Control
- Systema / Security Combat
- Kali / Weapon Handling
- Capoeira / Evasion Kicks
- Taekwondo / Kick Precision
- Judo / Kudo / Ssireum Grappling
- CQC / Jeet Kune Do
- Copy-Adaptive MMA
- Street Fighting / Wildness

Mastery programs cover:

- Strength
- Speed
- Endurance
- Technique
- Conviction

Fighter-type programs include:

- Copy + UI Engine
- Speed Legend
- Wild Wall
- Weapon Specialist
- King Strength
- Iron Boxing
- Conviction Brawler
- Grappler
- Technical Striker
- Crew Enforcer

## Level-Up System

The System dashboard tracks progress through XP and ranks:

- `Lv 1-5`: Weak Daniel
- `Lv 6-10`: Civilian Reset
- `Lv 11-20`: Fighter
- `Lv 21-35`: Crew Member
- `Lv 36-50`: Crew Head
- `Lv 51-65`: King Candidate
- `Lv 66-80`: First Gen King
- `Lv 81-90`: Ten Geniuses
- `Lv 91-99`: Path Walker
- `Lv 100`: Pinnacle Legend

Stats grow through completed quests:

- Power
- Speed
- Endurance
- Technique
- Sense
- Conviction

## AI + Cloud Data

The app uses three layers:

1. Local storage first
   - XP, profile, diagnosis, quest state, assistant position, user settings,
     training progress, logs, and chat history persist in browser
     `localStorage`.

2. Supabase cloud sync
   - When Supabase is configured and the user signs in, data syncs across
     devices.
   - Tables include `profiles`, `progress`, `quest_completions`,
     `diagnosis_reports`, `training_logs`, `training_progress`,
     `user_settings`, and `chat_messages`.
   - Row Level Security keeps each user's records isolated.

3. Gemini coaching
   - Production uses `/api/coach` with `GEMINI_API_KEY` stored server-side in
     Vercel environment variables.
   - Local development can use `gemini-local-proxy.js`.
   - No Gemini key is hardcoded in browser JavaScript.

## Setup

Run a local static server:

```bash
rtk python3 -m http.server 4173 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:4173/
```

Run syntax checks:

```bash
rtk npm run check
```

## Supabase Setup

Run the schema in the Supabase SQL Editor:

```sql
-- supabase/schema.sql
```

Then add these Vercel environment variables:

```text
SUPABASE_URL
SUPABASE_ANON_KEY
GEMINI_API_KEY
GEMINI_MODEL
```

See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md).

## Gemini Setup

For production, create or rotate a Google AI Studio key, then add it to Vercel
as:

```text
GEMINI_API_KEY
GEMINI_MODEL=gemini-2.5-flash
```

Do not paste production keys into browser code or public chat. See
[LOOKISM_AI_SETUP.md](./LOOKISM_AI_SETUP.md).

## Deployment

This project is deployed on Vercel.

```bash
rtk vercel deploy --prod --yes
```

Production URL:

```text
https://lookism-vercel.vercel.app
```

## Safety Disclaimer

This is a fiction-inspired fitness and fan archive project. Lookism powers,
Ultra Instinct, Path, and mastery are used as motivational labels. Training
plans should be scaled to the user's real ability. Use qualified coaching for
sparring, grappling, weapons, injuries, medical issues, or nutrition problems.
