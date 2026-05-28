# Supabase Cloud Save Setup

The app now supports optional Supabase cloud saving. Local browser progress still works if Supabase is not configured.

## 1. Run The Schema

Open Supabase SQL Editor and run:

```sql
-- File in this repo:
-- supabase/schema.sql
```

This creates:

- `profiles`
- `progress`
- `quest_completions`
- `diagnosis_reports`
- `training_logs`

Row Level Security is enabled so authenticated users can only read/write their own records.

## 2. Add Vercel Environment Variables

In Vercel project settings, add:

```text
SUPABASE_URL
SUPABASE_ANON_KEY
GEMINI_API_KEY
GEMINI_MODEL
```

`SUPABASE_ANON_KEY` is the public anon key from Supabase Project Settings -> API. Do not use the service role key in the browser.

## 3. Deploy

After env vars are added, redeploy production. The app reads `/api/config`, initializes Supabase in the browser, and shows `Cloud Save` on the System/Profile pages.

## 4. What Syncs

- XP, level, stats, streak, selected path
- completed quest IDs
- profile diagnosis inputs
- latest analysis and applied journey
- quest completion history
- diagnosis report history
- training log events
