# Configuração da API do Google Calendar

A página **Eventos** do site consome a **Google Calendar API** para exibir os eventos do calendário da igreja. Siga os passos abaixo para configurar.

---

## 1. Criar projeto no Google Cloud Console

1. Acesse [Google Cloud Console](https://console.cloud.google.com/).
2. Faça login com a conta Google que usará o calendário (ex.: `adbelemjales@gmail.com`).
3. No topo, clique no seletor de projeto → **Novo projeto**.
4. Nome (ex.: "Site Ad Belem Jales") → **Criar**.

---

## 2. Ativar a Google Calendar API

1. No menu lateral: **APIs e serviços** → **Biblioteca**.
2. Pesquise por **Google Calendar API**.
3. Clique na API → **Ativar**.

---

## 3. Criar chave de API (API Key)

1. **APIs e serviços** → **Credenciais**.
2. **+ Criar credenciais** → **Chave de API**.
3. A chave será exibida; copie e guarde em local seguro.
4. (Recomendado) Clique em **Restringir chave**:
   - **Restrição de aplicativo**: "Referenciadores HTTP (sites)".
   - Adicione os domínios onde o site vai rodar, por exemplo:
     - `http://localhost:*` (desenvolvimento)
     - `https://seudominio.com.br`
     - `https://*.vercel.app` (se publicar na Vercel)
   - **Restrição de API**: marque apenas **Google Calendar API**.
5. **Salvar**.

---

## 4. Obter o ID do calendário

1. Acesse [Google Calendar](https://calendar.google.com/) com a mesma conta.
2. No lateral esquerdo, ao lado do calendário que você quer usar, clique nos **três pontinhos** → **Configurações e compartilhamento**.
3. Role até **Integrar calendário**.
4. Copie o **ID do calendário** (ex.: `adbelemjales@gmail.com` ou `xxxxx@group.calendar.google.com`).

Para usar o calendário principal da conta, o ID costuma ser o e-mail da conta (ex.: `adbelemjales@gmail.com`) ou a opção **primary** em alguns contextos.

---

## 5. Configurar o projeto

1. Na raiz do projeto, copie o arquivo de exemplo:
   ```bash
   cp .env.example .env
   ```
2. Abra `.env` e preencha:
   ```env
   # Google Calendar — página de Eventos
   VITE_GOOGLE_CALENDAR_API_KEY=sua_chave_aqui
   VITE_GOOGLE_CALENDAR_ID=adbelemjales@gmail.com
   ```
3. Salve o arquivo. **Nunca faça commit do `.env`** (ele já está no `.gitignore`).

---

## 6. Compartilhar o calendário (se necessário)

Para a API Key poder ler os eventos:

- Se o calendário for da **mesma conta** da chave de API, não é preciso compartilhar.
- Se for um **calendário de outra conta ou compartilhado**, ele precisa estar **compartilhado** com a conta que possui a API Key (com permissão "Ver todos os detalhes do evento" ou superior).

---

## 7. Testar

1. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
2. Acesse a página **Eventos** no site.
3. Se aparecer "Calendário ainda não configurado", confira se o `.env` está preenchido e se o servidor foi iniciado depois de salvar o `.env`.
4. Se aparecer erro da API (ex.: 403), verifique:
   - Se a Google Calendar API está ativada no projeto.
   - Se a API Key está restrita apenas à Calendar API e aos domínios corretos.
   - Se o ID do calendário está correto e o calendário tem eventos no mês/ano selecionado.

---

## Variáveis usadas no código

| Variável | Descrição |
|----------|-----------|
| `VITE_GOOGLE_CALENDAR_API_KEY` | Chave de API do Google Cloud. |
| `VITE_GOOGLE_CALENDAR_ID` | ID do calendário (e-mail ou `primary`). |

O prefixo `VITE_` foi mantido para compatibilidade; o Parcel também lê essas variáveis a partir do `.env`.
