# Configurar Google Calendar na página de Eventos

Para a página **Eventos** exibir a agenda do Google Calendar, você precisa enviar dois dados (e colocá-los no arquivo `.env` na raiz do projeto).

---

## 1. O que você precisa enviar

| Dado | Onde usar | Exemplo |
|------|------------|--------|
| **Chave da API (API Key)** | `VITE_GOOGLE_CALENDAR_API_KEY` | Uma chave longa gerada no Google Cloud |
| **ID do calendário (Calendar ID)** | `VITE_GOOGLE_CALENDAR_ID` | `primary` ou algo como `xxxxx@group.calendar.google.com` |

---

## 2. Como obter a Chave da API (API Key)

1. Acesse [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um projeto (ou escolha um existente).
3. No menu, vá em **APIs e serviços** → **Biblioteca**.
4. Pesquise por **Google Calendar API** e clique em **Ativar**.
5. Vá em **APIs e serviços** → **Credenciais**.
6. Clique em **+ Criar credenciais** → **Chave de API**.
7. Copie a chave gerada e use como `VITE_GOOGLE_CALENDAR_API_KEY`.

**Importante:** O calendário que você vai usar precisa estar **público** (ou “disponível para qualquer pessoa com o link”), senão a API com só a chave não consegue ler os eventos.  
Se quiser restringir a chave: em Credenciais → sua chave → **Restringir chave** → em “APIs” selecione apenas **Google Calendar API**.

---

## 3. Como obter o ID do calendário (Calendar ID)

1. Abra [Google Calendar](https://calendar.google.com).
2. No lado esquerdo, ao lado do calendário que você quer usar, clique nos **três pontinhos** (⋮).
3. Clique em **Configurações e compartilhamento**.
4. Role até a seção **Integrar calendário**.
5. Copie o **ID do calendário** (algo como `xxxxx@group.calendar.google.com` ou, para o calendário principal, use a palavra **primary**).

Use esse valor em `VITE_GOOGLE_CALENDAR_ID`.

---

## 4. Onde colocar no projeto

1. Na raiz do projeto, crie um arquivo chamado `.env` (se ainda não existir).
2. Adicione as linhas (trocando pelos seus valores):

```env
VITE_GOOGLE_CALENDAR_API_KEY=sua_chave_aqui
VITE_GOOGLE_CALENDAR_ID=primary
```

ou, se tiver um ID longo:

```env
VITE_GOOGLE_CALENDAR_ID=xxxxxxxx@group.calendar.google.com
```

3. **Não** commite o arquivo `.env` no Git (ele já costuma estar no `.gitignore`). O `.env.example` pode ser commitado sem os valores reais.

---

## 5. Configurar na Vercel (deploy em produção)

Se o site está hospedado na **Vercel**, as variáveis do `.env` **não** são enviadas automaticamente. É preciso configurá-las no painel:

1. Acesse o projeto na [Vercel](https://vercel.com) e abra **Settings** (Configurações).
2. No menu lateral, clique em **Environment Variables**.
3. Adicione duas variáveis (com os **mesmos nomes** e os valores reais que você usa no `.env`):

   | Nome | Valor |
   |------|--------|
   | `VITE_GOOGLE_CALENDAR_API_KEY` | sua chave da API do Google |
   | `VITE_GOOGLE_CALENDAR_ID` | `primary` ou o ID do calendário (ex.: `xxxxx@group.calendar.google.com`) |

4. Marque o ambiente **Production** (e, se quiser, Preview e Development).
5. Salve e faça um **novo deploy** (Redeploy) do projeto para as variáveis passarem a valer.

Depois disso, a página de Eventos no site publicado passará a carregar o calendário.

---

## 6. Resumo do que me passar

Se quiser que eu te ajude a conferir ou a colocar no código, me envie **apenas**:

- **API Key** (a chave longa que você copiou no passo 2).
- **Calendar ID** (a palavra `primary` ou o ID que você copiou no passo 3).

Com isso, a página de Eventos consegue exibir os eventos do mês em cards e o filtro por mês/ano funciona.
