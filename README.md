# Atelier Sweet Home

Working landing pages for Atelier Sweet Home.

Current scope:

- standalone landing page: `/reconstruction`;
- standalone landing page: `/roof`;
- standalone landing page: `/summer-kitchen`;
- compact direction-selection home page: `/`;
- compact contact page: `/contacts`;
- no portfolio page;
- no blog;
- no fake projects, reviews, awards, counters or stock images.

The root `/` is a compact direction-selection page.

## Run

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000/reconstruction
http://localhost:3000/roof
http://localhost:3000/summer-kitchen
http://localhost:3000/contacts
http://localhost:3000/
```

Build:

```bash
npm run build
```

## Main Files

Page:

```text
/app/reconstruction/page.tsx
/app/roof/page.tsx
/app/summer-kitchen/page.tsx
/app/contacts/page.tsx
/app/page.tsx
```

Russian content:

```text
/content/ru/reconstruction.json
```

English placeholder:

```text
/content/en/reconstruction.json
```

Georgian placeholder:

```text
/content/ka/reconstruction.json
```

Contacts:

```text
/data/contacts.ts
```

Project cases:

```text
/data/projects.ts
```

Image instructions:

```text
/public/images/README.md
```

Owner questions in plain Russian:

```text
/OWNER_QUESTIONS_RU.md
```

Fillable owner answers template:

```text
/OWNER_ANSWERS_TEMPLATE_RU.md
```

Current photo inventory:

```text
/PHOTO_INVENTORY_RU.md
```

Photo slots for future incoming images:

```text
/PHOTO_SLOTS_RU.md
```

Template for describing new photo batches:

```text
/NEW_PHOTO_INTAKE_RU.md
```

Content and SEO architecture for reconstruction, roof and summer kitchen:

```text
/CONTENT_ARCHITECTURE_RU.md
```

Summer kitchen photo inventory:

```text
/SUMMER_KITCHEN_PHOTO_INVENTORY_RU.md
```

Summer kitchen landing draft:

```text
/SUMMER_KITCHEN_LANDING_DRAFT_RU.md
```

Summer kitchen structured draft content:

```text
/content/ru/summer-kitchen.draft.json
```

Roof photo inventory:

```text
/ROOF_PHOTO_INVENTORY_RU.md
```

Roof landing draft:

```text
/ROOF_LANDING_DRAFT_RU.md
```

Roof structured draft content:

```text
/content/ru/roof.draft.json
```

Styles:

```text
/app/globals.css
```

Form endpoint:

```text
/app/api/inquiries/route.ts
```

SEO:

```text
/app/reconstruction/page.tsx
/app/sitemap.ts
/app/robots.ts
```

## Content Editing

Most page text is edited in:

```text
/content/ru/reconstruction.json
```

Do not edit React components for ordinary copy changes.

Sections in the JSON:

- `hero`;
- `situations`;
- `inspection`;
- `decisionLogic`;
- `scope`;
- `cases`;
- `workshop`;
- `start`;
- `faq`;
- `form`;
- `footer`.

## Contacts

Current public contacts:

```ts
export const contactConfig = {
  phone: "+995555128231",
  whatsapp: "https://wa.me/995555128231",
  telegram: "",
  email: "AI7695-98@gmail.com",
  instagram: ""
};
```

Add only real contact data.

If a field is empty, the matching button is not shown.

Planned inquiry flow:

- receive applications through a Telegram bot;
- keep email as a backup public contact;
- keep WhatsApp as a direct public contact.

## Form Status

The form validates required fields and file count.

The endpoint is prepared at:

```text
/app/api/inquiries/route.ts
```

Current mode:

- if `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set, the form sends the inquiry text and up to 10 photos to Telegram;
- if those variables are empty, the endpoint returns `501` and the UI shows that sending is not configured.

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Fill:

```text
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

Then restart `npm run dev`.

How to get Telegram data:

1. Open Telegram and write to `@BotFather`.
2. Send `/newbot`.
3. Choose bot name and username.
4. Copy the token into `TELEGRAM_BOT_TOKEN`.
5. Create a group for site inquiries, for example `Atelier Sweet Home заявки`.
6. Add the bot to the group.
7. Send any message to the group.
8. Get the group chat id and put it into `TELEGRAM_CHAT_ID`.

What is still not done:

- automatic reply from Telegram back to WhatsApp/email;
- CRM;
- database storage;
- WhatsApp API automation.

Note: file uploads through `mailto:` do not work reliably, so `mailto:` is not used for the upload form.

## Images

Current reconstruction images are real local photos copied into:

```text
/public/images/reconstruction/hero/
/public/images/reconstruction/projects/
```

The profile photo is still a placeholder:

```text
/public/images/reconstruction/profile/placeholder.svg
```

Production should use only real photographs.

Do not use:

- internet stock images;
- AI images;
- renders;
- fake project photos.

Read:

```text
/public/images/README.md
```

## SEO Included

Included:

- title;
- description;
- canonical;
- Open Graph;
- one H1;
- semantic headings;
- human alt text;
- `robots.txt`;
- `sitemap.xml`;
- ProfessionalService schema;
- Service schema;
- FAQ schema for visible FAQ items.

Not included yet:

- production domain;
- final hreflang URLs for EN and GE;
- real LocalBusiness phone/address;
- real case images.

Set the production URL later:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.ge
```

## Future Routes

The structure can later add:

```text
/roof
```

Do not create empty pages before content exists.

## Data Needed From Owner

[ ] окончательное название мастерской
[x] публичный телефон: +995555128231
[ ] Telegram-бот для заявок: нужен token
[x] WhatsApp: https://wa.me/995555128231
[x] email: AI7695-98@gmail.com
[ ] главное фото первого блока: реальный кадр старого дома или объекта, который можно публично показать
[ ] фотографии первого объекта: фасад, стены, крыша, детали, интерьер, двор
[ ] описание первого объекта: что это за дом, в каком состоянии, что хотели получить
[ ] роль мастерской на объекте: что именно делали или за что отвечали
[ ] фото мастера в работе: реальный кадр процесса, если хотим такой блок
[ ] география работ для сайта: какие регионы честно указывать как обычные, а какие только для хорошего объекта
[ ] условия первичного осмотра: фото сначала, когда ехать, платно или бесплатно, что с дальними регионами
[ ] способ получения заявок: нужен `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`
