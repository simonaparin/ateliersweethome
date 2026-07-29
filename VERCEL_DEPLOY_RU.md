# Запуск Atelier Sweet Home на Vercel

Домен: `ateliersweethome.ge`

## 1. GitHub

На GitHub нужен пустой репозиторий:

```text
atelier-sweet-home
```

В него загружается проект:

```text
C:\Users\555\Documents\Codex\2026-07-25\new-chat\outputs\atelier-old-house
```

Файл `.env.local` не загружать. Он закрыт через `.gitignore`.

## 2. Vercel Project

1. Открыть `https://vercel.com/dashboard`.
2. Нажать `Add New...`.
3. Выбрать `Project`.
4. Выбрать GitHub-репозиторий `atelier-sweet-home`.
5. Framework: `Next.js`.
6. Остальное оставить стандартным:

```text
Build Command: npm run build
Install Command: npm install
Output Directory: пусто
Root Directory: корень проекта
```

## 3. Environment Variables

В проекте Vercel открыть:

```text
Settings -> Environment Variables
```

Добавить:

```text
NEXT_PUBLIC_SITE_URL=https://ateliersweethome.ge
TELEGRAM_BOT_TOKEN=взять из локального .env.local
TELEGRAM_CHAT_ID=взять из локального .env.local
```

Выбрать окружения `Production`, `Preview`, `Development`.

## 4. Deploy

Нажать `Deploy`.

Сначала проверить временный адрес:

```text
*.vercel.app
```

Проверить страницы:

```text
/
/reconstruction
/roof
/summer-kitchen
/contacts
```

Проверить отправку формы в Telegram.

## 5. Domain

В проекте Vercel:

```text
Settings -> Domains
```

Добавить:

```text
ateliersweethome.ge
www.ateliersweethome.ge
```

Vercel покажет DNS-записи. Обычно:

```text
Type: A
Name: @
Value: 76.76.21.21
```

```text
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Если Vercel показывает другие значения, брать значения из Vercel.

## 6. Registrar DNS

В панели регистратора открыть:

```text
DNS Records / DNS Management / Zone Editor
```

Добавить записи из Vercel.

После этого ждать обновления DNS. Обычно 5-30 минут, иногда дольше.
