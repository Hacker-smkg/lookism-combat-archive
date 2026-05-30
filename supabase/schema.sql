-- Lookism Combat Archive cloud sync schema.
-- Run this in the Supabase SQL Editor for the lookism-combat-archive project.

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  profile_data jsonb not null default '{}'::jsonb,
  latest_analysis jsonb,
  applied_journey jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  total_xp integer not null default 0 check (total_xp >= 0),
  level integer not null default 1 check (level between 1 and 100),
  stats jsonb not null default '{}'::jsonb,
  completed_quest_ids jsonb not null default '[]'::jsonb,
  streak integer not null default 0 check (streak >= 0),
  selected_path text,
  penalty_debt boolean not null default false,
  last_active_date date,
  streak_awarded_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quest_completions (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  quest_id text not null,
  quest_type text not null check (quest_type in ('daily', 'weekly', 'boss', 'technique', 'mastery', 'fighter_type')),
  title text,
  xp_reward integer not null default 0 check (xp_reward >= 0),
  stat_key text,
  stat_gain integer not null default 0,
  completed_on date not null default current_date,
  completed_at timestamptz not null default now(),
  quest_payload jsonb not null default '{}'::jsonb,
  unique (user_id, quest_id, completed_on)
);

create table if not exists public.diagnosis_reports (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  input_profile jsonb not null default '{}'::jsonb,
  analysis jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.training_logs (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  log_type text not null,
  title text not null,
  detail jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.training_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  program_key text not null,
  program_type text not null check (program_type in ('art', 'mastery', 'fighter')),
  program_id text not null,
  xp integer not null default 0 check (xp >= 0),
  completed_level_ids jsonb not null default '[]'::jsonb,
  last_trained_at timestamptz,
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, program_key)
);

create table if not exists public.user_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null check (char_length(content) <= 4000),
  context_snapshot jsonb not null default '{}'::jsonb,
  suggestions jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists profiles_updated_at_idx on public.profiles (updated_at desc);
create index if not exists progress_updated_at_idx on public.progress (updated_at desc);
create index if not exists quest_completions_user_completed_idx on public.quest_completions (user_id, completed_at desc);
create index if not exists quest_completions_user_day_idx on public.quest_completions (user_id, completed_on desc);
create index if not exists diagnosis_reports_user_created_idx on public.diagnosis_reports (user_id, created_at desc);
create index if not exists training_logs_user_created_idx on public.training_logs (user_id, created_at desc);
create index if not exists training_progress_user_updated_idx on public.training_progress (user_id, updated_at desc);
create index if not exists user_settings_updated_at_idx on public.user_settings (updated_at desc);
create index if not exists chat_messages_user_created_idx on public.chat_messages (user_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists progress_set_updated_at on public.progress;
create trigger progress_set_updated_at
before update on public.progress
for each row execute function public.set_updated_at();

drop trigger if exists training_progress_set_updated_at on public.training_progress;
create trigger training_progress_set_updated_at
before update on public.training_progress
for each row execute function public.set_updated_at();

drop trigger if exists user_settings_set_updated_at on public.user_settings;
create trigger user_settings_set_updated_at
before update on public.user_settings
for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.quest_completions enable row level security;
alter table public.diagnosis_reports enable row level security;
alter table public.training_logs enable row level security;
alter table public.training_progress enable row level security;
alter table public.user_settings enable row level security;
alter table public.chat_messages enable row level security;

drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles
for select to authenticated
using (auth.uid() = user_id);

drop policy if exists profiles_insert_own on public.profiles;
create policy profiles_insert_own on public.profiles
for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists profiles_delete_own on public.profiles;
create policy profiles_delete_own on public.profiles
for delete to authenticated
using (auth.uid() = user_id);

drop policy if exists progress_select_own on public.progress;
create policy progress_select_own on public.progress
for select to authenticated
using (auth.uid() = user_id);

drop policy if exists progress_insert_own on public.progress;
create policy progress_insert_own on public.progress
for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists progress_update_own on public.progress;
create policy progress_update_own on public.progress
for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists progress_delete_own on public.progress;
create policy progress_delete_own on public.progress
for delete to authenticated
using (auth.uid() = user_id);

drop policy if exists quest_completions_select_own on public.quest_completions;
create policy quest_completions_select_own on public.quest_completions
for select to authenticated
using (auth.uid() = user_id);

drop policy if exists quest_completions_insert_own on public.quest_completions;
create policy quest_completions_insert_own on public.quest_completions
for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists quest_completions_delete_own on public.quest_completions;
create policy quest_completions_delete_own on public.quest_completions
for delete to authenticated
using (auth.uid() = user_id);

drop policy if exists diagnosis_reports_select_own on public.diagnosis_reports;
create policy diagnosis_reports_select_own on public.diagnosis_reports
for select to authenticated
using (auth.uid() = user_id);

drop policy if exists diagnosis_reports_insert_own on public.diagnosis_reports;
create policy diagnosis_reports_insert_own on public.diagnosis_reports
for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists diagnosis_reports_delete_own on public.diagnosis_reports;
create policy diagnosis_reports_delete_own on public.diagnosis_reports
for delete to authenticated
using (auth.uid() = user_id);

drop policy if exists training_logs_select_own on public.training_logs;
create policy training_logs_select_own on public.training_logs
for select to authenticated
using (auth.uid() = user_id);

drop policy if exists training_logs_insert_own on public.training_logs;
create policy training_logs_insert_own on public.training_logs
for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists training_logs_delete_own on public.training_logs;
create policy training_logs_delete_own on public.training_logs
for delete to authenticated
using (auth.uid() = user_id);

drop policy if exists training_progress_select_own on public.training_progress;
create policy training_progress_select_own on public.training_progress
for select to authenticated
using (auth.uid() = user_id);

drop policy if exists training_progress_insert_own on public.training_progress;
create policy training_progress_insert_own on public.training_progress
for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists training_progress_update_own on public.training_progress;
create policy training_progress_update_own on public.training_progress
for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists training_progress_delete_own on public.training_progress;
create policy training_progress_delete_own on public.training_progress
for delete to authenticated
using (auth.uid() = user_id);

drop policy if exists user_settings_select_own on public.user_settings;
create policy user_settings_select_own on public.user_settings
for select to authenticated
using (auth.uid() = user_id);

drop policy if exists user_settings_insert_own on public.user_settings;
create policy user_settings_insert_own on public.user_settings
for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists user_settings_update_own on public.user_settings;
create policy user_settings_update_own on public.user_settings
for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists user_settings_delete_own on public.user_settings;
create policy user_settings_delete_own on public.user_settings
for delete to authenticated
using (auth.uid() = user_id);

drop policy if exists chat_messages_select_own on public.chat_messages;
create policy chat_messages_select_own on public.chat_messages
for select to authenticated
using (auth.uid() = user_id);

drop policy if exists chat_messages_insert_own on public.chat_messages;
create policy chat_messages_insert_own on public.chat_messages
for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists chat_messages_update_own on public.chat_messages;
create policy chat_messages_update_own on public.chat_messages
for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists chat_messages_delete_own on public.chat_messages;
create policy chat_messages_delete_own on public.chat_messages
for delete to authenticated
using (auth.uid() = user_id);
