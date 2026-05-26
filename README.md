# Lookism Combat Archive

A standalone web-first Lookism-inspired combat archive and fitness system.

## Features

- Top-50 fighter roster with local cached character images.
- System dashboard with XP, levels, ranks, stats, quests, streaks, and local progress.
- Profile diagnosis with offline AI-style categorization.
- Fighter type, martial art, and mastery-field training programs from beginner to mastery.
- Optional Gemini coaching through `/api/coach` on Vercel or a local proxy.

## Data Storage

User progress is stored in browser `localStorage`. There is no account system or cloud database in this version.

## Gemini

For production, set `GEMINI_API_KEY` in Vercel environment variables. Do not paste a production key into the browser.
