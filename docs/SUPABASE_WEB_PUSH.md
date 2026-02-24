# Configurar Supabase + Vercel para Web Push

Este guia explica como conectar seu projeto **Supabase** ao **Vercel** e criar a tabela usada pelas notificações Web Push (lembretes 1 hora antes dos eventos).

---

## 1. No Supabase (painel e SQL)

### 1.1 Obter URL e chaves do projeto

1. Acesse [supabase.com](https://supabase.com) e faça login.
2. Abra o **projeto** que você usa para o site (ou crie um novo).
3. No menu lateral: **Project Settings** (ícone de engrenagem) → **API**.
4. Anote:
   - **Project URL** (ex.: `https://xxxxx.supabase.co`) → será a variável `SUPABASE_URL`.
   - **service_role** (em "Project API keys") → será a variável `SUPABASE_SERVICE_ROLE_KEY`.  
     ⚠️ **Não use a service_role no frontend.** Ela só deve ser usada nas APIs no Vercel.

### 1.2 Criar a tabela de inscrições push

1. No Supabase, vá em **SQL Editor**.
2. Clique em **New query**.
3. Cole o SQL abaixo e execute (**Run**):

```sql
-- Tabela para guardar inscrições de Web Push (lembretes 1h antes dos eventos)
create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  endpoint text not null,
  p256dh text not null,
  auth text not null,
  created_at timestamptz default now(),
  unique(endpoint)
);

-- Índice para buscar por endpoint (inscrição/cancelamento)
create index if not exists idx_push_subscriptions_endpoint on public.push_subscriptions (endpoint);

-- Permite que apenas o backend (com service_role) acesse; anon não precisa de acesso direto
alter table public.push_subscriptions enable row level security (rls);

-- Política: nenhum acesso via anon (nossa API usa service_role)
create policy "Apenas service role"
  on public.push_subscriptions
  for all
  using (false)
  with check (false);
```

4. Confirme que a tabela `push_subscriptions` aparece em **Table Editor**.

---

## 2. Na Vercel (variáveis de ambiente)

As funções serverless (APIs) do site precisam da **URL** e da **chave service_role** do Supabase. O **frontend** precisa da chave **pública** VAPID no build.

1. Acesse [vercel.com](https://vercel.com) → seu projeto do site.
2. Vá em **Settings** → **Environment Variables**.
3. Adicione:

| Nome | Valor | Ambiente |
|------|--------|-----------|
| `SUPABASE_URL` | A **Project URL** do Supabase (ex.: `https://xxxxx.supabase.co`) | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | A chave **service_role** do Supabase | Production, Preview, Development |

4. Para o **build do frontend** (Parcel) receber a chave pública de push, adicione também (use o **mesmo valor** da chave pública VAPID que você gera na seção “Gerar chaves VAPID” abaixo):

| Nome | Valor | Ambiente |
|------|--------|----------|
| `VITE_VAPID_PUBLIC_KEY` | A chave **pública** VAPID (ex.: `BEl62iUYgU...`) | Production, Preview, Development |

5. Salve e faça um **redeploy** do projeto para as variáveis passarem a valer.

### (Opcional) Integração Supabase no Vercel

Se na Vercel existir a integração **Supabase** (Settings → Integrations):

- Conecte o projeto Supabase; a Vercel pode preencher automaticamente `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`.
- Confira em **Environment Variables** se os nomes são exatamente os acima; se forem outros (ex.: `NEXT_PUBLIC_SUPABASE_URL`), você pode criar um alias ou ajustar o código das APIs para usar os nomes que a integração definir.

---

## 4. Variáveis necessárias para Web Push (resumo)

Além do Supabase, as APIs de push usam:

| Variável | Onde obter | Uso |
|----------|------------|-----|
| `VAPID_PUBLIC_KEY` | Gerar com `npx web-push generate-vapid-keys` (a chave **pública**) | Frontend: inscrição de push. No build do site use `VITE_VAPID_PUBLIC_KEY`. |
| `VAPID_PRIVATE_KEY` | O mesmo comando acima (a chave **privada**) | Backend: enviar notificações. Só nas APIs na Vercel. |
| `GOOGLE_CALENDAR_API_KEY` / `VITE_GOOGLE_CALENDAR_API_KEY` | Já configurado no projeto | Cron: buscar eventos do calendário. |
| `GOOGLE_CALENDAR_ID` / `VITE_GOOGLE_CALENDAR_ID` | Já configurado no projeto | Cron: calendário dos eventos. |
| `SITE_ORIGIN` ou `VITE_SITE_ORIGIN` | Ex.: `https://adbelemjales.com` | Opcional: usado em links no corpo da notificação. |

---

## 5. Gerar chaves VAPID (uma vez)

No seu computador, na pasta do projeto:

```bash
npx web-push generate-vapid-keys
```

Você verá algo como:

```
Public Key:  BEl62iUYgU...
Private Key: xYz123...
```

- **Public Key** → em Vercel: `VITE_VAPID_PUBLIC_KEY` (e no build do frontend).
- **Private Key** → em Vercel: `VAPID_PRIVATE_KEY` (apenas nas APIs, nunca no frontend).

---

## 6. Conferir se está tudo certo

- **Supabase**: tabela `push_subscriptions` existe e RLS está ativo.
- **Vercel**: variáveis `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY` (e as do Google Calendar) definidas.
- **Build**: o site usa `VITE_VAPID_PUBLIC_KEY` no build (o Parcel injeta variáveis que começam com `VITE_`).
- Depois de ativar os lembretes no site e rodar o cron (ou esperar o agendamento), confira em **Table Editor** no Supabase se apareceu uma linha em `push_subscriptions`.

Se algo falhar, veja os logs da função no Vercel (**Deployments** → último deploy → **Functions** → clique na função que deu erro).
