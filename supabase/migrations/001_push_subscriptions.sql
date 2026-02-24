-- Tabela para guardar inscrições de Web Push (lembretes 1h antes dos eventos)
-- Execute este SQL no Supabase (SQL Editor) se preferir não usar migrations.

create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  endpoint text not null,
  p256dh text not null,
  auth text not null,
  created_at timestamptz default now(),
  unique(endpoint)
);

create index if not exists idx_push_subscriptions_endpoint on public.push_subscriptions (endpoint);

alter table public.push_subscriptions enable row level security (rls);

create policy "Apenas service role"
  on public.push_subscriptions
  for all
  using (false)
  with check (false);
