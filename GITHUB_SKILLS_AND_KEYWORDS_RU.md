# GitHub Skills And Keyword Research

Дата: 2026-07-25

Цель: найти на GitHub скилы / workflows / подходы для нормального построения сайта и дизайна страницы Atelier Sweet Home, а также собрать первичный keyword/content research по теме реконструкции старых домов.

## Исправление бренда

Рабочее название проекта:

```text
Atelier Sweet Home
```

Старые варианты названия считаются закрытыми. В новых текстах, макетах, SEO и коде пишем только `Atelier Sweet Home`.

## GitHub Skills / Workflows

### 1. Anthropic `frontend-design`

Source:

https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md

Что это:

официальный skill для создания distinctive, production-grade frontend interfaces.

Что важно:

- до кода нужно выбрать четкое aesthetic direction;
- дизайн должен иметь одну сильную идею;
- нельзя делать generic AI aesthetics;
- типографика, цвет, пространство и композиция должны быть намеренными;
- refined minimalism работает только если spacing, typography и детали выполнены точно.

Как применить:

Перед новой версткой Atelier Sweet Home фиксируем одну концепцию:

```text
не строительный сайт;
не лендинг по чеклисту;
страница-мастерская: реальные фото, короткий текст, ясное действие.
```

### 2. Koomook `claude-frontend-skills`

Source:

https://github.com/Koomook/claude-frontend-skills

Что это:

plugin с frontend skills против generic "AI slop".

Что важно:

- типографика должна быть выбранной, а не дефолтной;
- цвета должны идти от культурного/визуального контекста;
- фон и композиция не должны быть плоской серой кашей;
- skill предлагает четыре рычага: typography, color/theme, motion, backgrounds.

Как применить:

Для нас motion почти не нужен. Берем:

- типографику;
- композицию;
- цвет из реальных фото: теплый фон, угольный текст, красно-глиняный акцент, камень/дерево.

Не берем:

- cyberpunk;
- vaporwave;
- декоративные эффекты;
- анимации ради анимаций.

### 3. Jezweb `design-loop`

Source:

https://github.com/jezweb/claude-skills/blob/main/plugins/frontend/skills/design-loop/SKILL.md

Что это:

workflow для проектирования сайта через `.design/` память:

```text
.design/SITE.md
.design/DESIGN.md
.design/next-prompt.md
```

Что важно:

- сначала vision / sitemap / roadmap;
- потом visual design system;
- потом конкретный prompt на одну страницу;
- новые страницы не строятся вслепую, а читают SITE.md и DESIGN.md.

Как применить:

Нужно создать в проекте:

```text
.design/SITE.md
.design/DESIGN.md
.design/RECONSTRUCTION_PAGE.md
```

И только потом делать новый визуал.

### 4. Jezweb `landing-page`

Source:

https://github.com/jezweb/claude-skills

Что это:

skill из frontend-плагина для "landing page", "marketing page", "one-page site".

Что важно:

- landing page должен производить результат, а не быть знанием в пустоту;
- в их списке рядом есть `design-review`, `seo-local-business`, `image-processing`;
- правильная цепочка для нас: landing-page + design-review + seo-local-business + image-processing.

Как применить:

Наша цепочка:

1. content skeleton;
2. visual direction;
3. image selection/cropping;
4. landing page;
5. design review;
6. local SEO/schema.

### 5. Marketing skills: `write-landing`, `copywriting`, `page-cro`, `keyword-research`

Sources:

https://github.com/robertbstillwell/marketing-skills
https://github.com/realjaymes/marketingagentskills

Что это:

marketing skill packs для landing copy, SEO, CRO и keyword research.

Что важно:

- landing copy не равно "много текста";
- нужен conversion path;
- page-cro смотрит, где страница теряет внимание;
- keyword research нужен не для набивки ключей, а для группировки запросов.

Как применить:

Для `/reconstruction` делаем не простыню, а:

- узнавание ситуации;
- доказательство через фото;
- что можно понять по фото;
- что нельзя понять без осмотра;
- одно действие: прислать фото.

### 6. Design skill by jiji262

Source:

https://github.com/jiji262/claude-design-skill

Что это:

portable design skill для HTML artifacts, landing pages, prototypes.

Что важно:

- Fact Verification first;
- Core Asset Protocol;
- сначала собрать реальные assets;
- logo/product shots/screenshots treated as first-class, not "colors and fonts only";
- если brief vague, skill предлагает 3 directions и ждет выбор.

Как применить:

Для нас главное:

```text
assets first
```

Сначала реальные фото, потом layout.

Не рисовать дизайн вокруг placeholder. Это уже нас подвело.

### 7. Claude + Figma Website Builder workflow

Source:

https://gist.github.com/stricher05/16ae7a2e34fade513f5a6593c40dc88f

Что это:

10-step workflow for high-converting landing pages.

Философия:

```text
Strategy -> Structure -> Copy -> Style -> Layout -> Hero -> Offer -> Microcopy -> Dev Handoff -> Variations
```

Как применить:

Мы прыгнули сразу в code/layout и получили плохую страницу. Новый порядок:

1. Strategy.
2. Structure.
3. Copy.
4. Photo selection.
5. Style.
6. Layout.
7. Code.

## Вывод по skills

Нам нужен не один magic skill, а цепочка:

```text
research -> content strategy -> visual direction -> asset protocol -> landing page -> design review -> SEO/local business
```

Внутри проекта это лучше оформить как свои локальные инструкции:

```text
.design/SITE.md
.design/DESIGN.md
.design/CONTENT_RULES.md
.design/RECONSTRUCTION_PAGE.md
```

## Keyword / Content Research

### Русские запросы

Главная группа:

```text
реконструкция старого дома
ремонт старого дома
реновация старого дома
восстановление старого дома
реконструкция частного дома
ремонт частного дома
```

Грузия / региональная привязка:

```text
реконструкция старого дома в Грузии
ремонт старого дома в Грузии
реконструкция дома в Кахетии
ремонт дома в Кахетии
реконструкция дома в Тбилиси
ремонт частного дома в Тбилиси
```

Проблемные запросы:

```text
купить старый дом что проверить
старый дом перед покупкой осмотр
оценка старого дома перед покупкой
что проверить в старом доме
старая крыша ремонт
замена крыши старого дома
усиление стен старого дома
ремонт деревянных перекрытий
```

Комфорт / инженерка:

```text
как сделать старый дом теплым
утепление старого дома
отопление в старом доме
санузел в старом доме
вода канализация старый дом
```

### Английские запросы

```text
old house renovation Georgia
old house reconstruction Georgia
old house restoration Georgia
renovate old house Georgia
historic house renovation Georgia
old stone house renovation Georgia
house renovation Kakheti
old house inspection before purchase Georgia
roof repair old house Georgia
```

### Georgian draft terms to verify

Не публиковать как финальные без проверки носителем:

```text
ძველი სახლის რემონტი
სახლის რეკონსტრუქცია
ძველი სახლის რეკონსტრუქცია
სახლის რემონტი
სახურავის რემონტი
კახეთი
თბილისი
```

## Что показывают существующие статьи

### Dombobra: "Реконструкция старого дома"

Source:

https://dombobra.ru/articles/rekonstruktsiya-starogo-doma/

Что полезно:

- реконструкция включает разные операции;
- состояние дома определяет состав работ;
- крыша, фасад, перепланировка, конструктивные элементы.

Что не берем:

- "штат компании";
- "под ключ";
- бюрократический большой подрядчик.

### TechnoNIKOL: "Реконструкция старого дома"

Source:

https://www.tn.ru/journal/rekonstruktsiya-starogo-doma-kak-obnovit-svoe-zhilishche/

Что полезно:

- люди ищут признаки проблем: крыша, сырость, отопление, электрика, вода, окна;
- "оценить текущее состояние" — важный поисковый мотив;
- реконструкция часто про комфорт, безопасность, энергоэффективность и внешний облик.

Что взять:

Группировать страницу по вопросам:

- что видно;
- что проверить;
- что сохранить;
- что заменить;
- что сделать для жизни.

## Структура новой страницы, основанная на research

Максимум 7 блоков.

### 1. First screen

Фраза владельца:

```text
Старый дом может стать тёплым, светлым и удобным, сохранив свой характер.
```

Подзаголовок:

```text
Atelier Sweet Home помогает владельцам и покупателям старых домов в Грузии понять, что можно сохранить, что нужно усилить и какие работы нужны, чтобы дом стал пригодным для жизни.
```

CTA:

```text
Прислать фото дома
```

### 2. Реальные дома, не рендеры

Фото-полоса из реальных кадров.

Никаких "наши работы" без доказательств.

### 3. Когда это нужно

4 ситуации:

- купили старый дом;
- смотрите дом перед покупкой;
- крыша/дерево/стены вызывают вопросы;
- хочется сохранить характер, но жить нормально.

### 4. Что смотрим в первую очередь

4 группы:

- крыша и влага;
- стены и проемы;
- дерево и перекрытия;
- жизнь внутри: свет, тепло, вода, санузел.

### 5. Две реальные ситуации

Очень коротко:

- частично восстановленный дом, где живут;
- выезд на оценку перед покупкой.

### 6. Что человек получит после первого обращения

Не "смету по фото", а:

- что видно по фото;
- какие есть риски;
- какие вопросы надо уточнить;
- нужен ли осмотр.

### 7. Форма / Telegram

Минимально:

- фото;
- место;
- что хотите сделать;
- контакт;
- Telegram bot planned;
- email backup.

## Правило для следующего шага

Не писать новый код сразу.

Сначала сделать:

```text
.design/SITE.md
.design/DESIGN.md
.design/RECONSTRUCTION_PAGE.md
```

Там зафиксировать структуру и визуальный подход.

Только после этого делать новую версию страницы.
