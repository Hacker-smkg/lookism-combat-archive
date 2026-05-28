# Lookism Combat Archive

A web-first fan-made combat archive and fitness system inspired by the
Lookism manhwa, its characters, power scaling, masteries, paths, intense
fighting styles, and brutal training arcs.

Live app: https://lookism-vercel.vercel.app

## What This App Is

Lookism Combat Archive is a dark neon "System" style web app that mixes a
character archive with a training progression dashboard. It is built around the
idea of starting like weak Daniel Park and leveling up through XP, quests,
stats, martial-art practice, mastery fields, and fighter-type programs.

The app uses Lookism-inspired concepts such as Ultra Instinct, Path, mastery,
copy-adaptive fighting, Iron Boxing, King-level strength, speed legends,
wildness, grappling, weapon specialists, and conviction-based growth. These are
used as fictional motivation and training themes, not as real combat promises.

## Why I Made It

I made this project because Lookism has some of the most exciting character
growth, power-level debates, fighting styles, and training inspiration in
manhwa. I wanted one place where fans can explore top fighters, see their visual
references, compare archetypes, and turn that energy into a structured
fitness/game-like level-up system.

Instead of only reading about characters like Daniel, Gun, James Lee, Zack,
Vasco, Johan, Tom Lee, and other top fighters, the app turns their themes into
safe, progressive training routes: strength, speed, endurance, technique,
sense, conviction, martial arts, and personal path building.

## Features

- Top-50 Lookism fighter roster with local cached character images.
- Visual Vault for character, mode, mastery, and path references.
- System dashboard with XP, levels, ranks, stats, quests, streaks, and progress.
- Solo-Leveling-style rank journey from Weak Daniel to Pinnacle Legend.
- Profile diagnosis with offline AI-style category analysis.
- Personalized journey with next category, blockers, weekly schedule, and XP goals.
- Lookism stats: Power, Speed, Endurance, Technique, Sense, and Conviction.
- Checkable daily, weekly, and boss quests.
- Fighter-type programs: Copy + UI Engine, Speed Legend, Wild Wall, Weapon
  Specialist, King Strength, Iron Boxing, Conviction Brawler, Grappler,
  Technical Striker, and Crew Enforcer.
- Martial-art programs from very beginner to technique mastery.
- Mastery-field programs for Strength, Speed, Endurance, Technique, and
  Conviction.
- Resource links and YouTube tutorial search links for training levels.
- Optional Gemini coaching through `/api/coach` on Vercel or a local proxy.
- Optional Supabase cloud saving with auth, synced profile/progress, quest
  history, diagnosis reports, and training logs.

## Training Disclaimer

This is a fiction-inspired fitness app. Lookism powers, Ultra Instinct, Path,
and mastery are used as motivational labels. Train safely, progress gradually,
and use proper coaching for sparring, contact drills, grappling, or weapons.

## Data Storage

User progress always starts in browser `localStorage` so the app works offline.
When Supabase is configured and the user signs in, XP, levels, stats, profile
diagnosis, quests, reports, and logs sync to the project database.

See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) and
[supabase/schema.sql](./supabase/schema.sql).

## Gemini

For production, set `GEMINI_API_KEY` in Vercel environment variables. Do not paste a production key into the browser.
