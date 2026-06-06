# Lookism System V4

V4 is the parallel Next.js + Expo monorepo for the Lookism-inspired System app.
The current V3 root app remains live and unchanged while V4 is built and tested.

## Apps

- `apps/web`: Next.js App Router MVP with login/guest, awakening, diagnosis, dashboard, training, reports, profile, and Gemini coach API.
- `apps/mobile`: Expo Router Android-first MVP with tabs for System, Train, Reports, and Profile.

## Shared Packages

- `packages/core`: fighters, rank ladder, XP, quests, diagnosis, journey, training programs, promotion review.
- `packages/data`: Zod contracts, Supabase payload helpers, V3 localStorage migration, coach API contract.
- `packages/design`: shared colors, typography, rank palette, mastery palette.

## Storage

No new database or object storage is required for the MVP.

- Guest web data uses `localStorage`.
- Guest Expo data uses the Expo SQLite localStorage polyfill.
- Signed-in cloud data reuses the existing Supabase tables from V3.
- Gemini stays server-side in `apps/web/app/api/coach/route.ts`.

## Commands

```bash
pnpm install
pnpm check
pnpm test
pnpm --filter web dev
pnpm --filter mobile start
```

## Rollout

Deploy V4 web from `v4/apps/web` to a Vercel preview project first. Do not promote
it over the current V3 production URL until web and Android QA pass.
