# Installed Skills Report

Дата: 2026-07-25

## Итог

Design / site / SEO / marketing skills скачаны и установлены в:

```text
C:\Users\555\.codex\skills
```

После установки Codex нужно перезапустить, чтобы новые skills появились в активном списке skills текущего чата.

## Установлено

### Design / frontend

- `frontend-design`  
  Source: `anthropics/claude-code`, path `plugins/frontend-design/skills/frontend-design`

- `distinctive-frontend`  
  Source: `Koomook/claude-frontend-skills`, file `skills/distinctive-frontend.md`  
  Note: repo был не в стандартном формате Codex, поэтому установлен как локальный `SKILL.md`.

- `frontend-design-principles`  
  Source: `joshuadavidthomas/agent-skills`, path `frontend-design-principles`

- `claude-design-skill`  
  Source: `jiji262/claude-design-skill`, root `SKILL.md`

- `website-builder-workflow`  
  Source: gist `16ae7a2e34fade513f5a6593c40dc88f`  
  Note: gist был установлен как локальный `SKILL.md` с добавленным описанием.

### Site workflow / landing pages

- `design-loop`  
  Source: `jezweb/claude-skills`, path `plugins/frontend/skills/design-loop`

- `landing-page`  
  Source: `jezweb/claude-skills`, path `plugins/frontend/skills/landing-page`

- `design-review`  
  Source: `jezweb/claude-skills`, path `plugins/frontend/skills/design-review`

- `design-system`  
  Source: `jezweb/claude-skills`, path `plugins/frontend/skills/design-system`

- `image-processing`  
  Source: `jezweb/claude-skills`, path `plugins/design-assets/skills/image-processing`

- `seo-local-business`  
  Source: `jezweb/claude-skills`, path `plugins/web-design/skills/seo-local-business`

### SEO / CRO / copy

- `keyword-research`  
  Source: `robertbstillwell/marketing-skills`, path `keyword-research`

- `write-landing`  
  Source: `robertbstillwell/marketing-skills`, path `write-landing`

- `copywriting`  
  Source: `robertbstillwell/marketing-skills`, path `copywriting`

- `page-cro`  
  Source: `robertbstillwell/marketing-skills`, path `page-cro`

- `seo-audit`  
  Source: `robertbstillwell/marketing-skills`, path `seo-audit`

- `schema-markup`  
  Source: `robertbstillwell/marketing-skills`, path `schema-markup`

- `programmatic-seo`  
  Source: `robertbstillwell/marketing-skills`, path `programmatic-seo`

### Positioning / ads / messaging

- `product-positioning`  
  Source: `realjaymes/marketingagentskills`, path `skills/product-positioning`

- `product-messaging`  
  Source: `realjaymes/marketingagentskills`, path `skills/product-messaging`

- `customer-segments`  
  Source: `realjaymes/marketingagentskills`, path `skills/customer-segments`

- `icp-persona`  
  Source: `realjaymes/marketingagentskills`, path `skills/icp-persona`

- `copy-anatomy`  
  Source: `realjaymes/marketingagentskills`, path `skills/copy-anatomy`

- `performance-marketing`  
  Source: `realjaymes/marketingagentskills`, path `skills/performance-marketing`

- `ad-creative`  
  Source: `realjaymes/marketingagentskills`, path `skills/ad-creative`

## Не установлено как skill

- `wilwaldon/Claude-Code-Frontend-Design-Toolkit`  
  Причина: в репозитории нет `SKILL.md`, только `README.md`. Репозиторий скачан в `work/`, но как Codex skill не установлен, чтобы не делать фальшивую установку.

## Проверка

Проверено наличие `SKILL.md` у каждого установленного skill:

```text
frontend-design: true
distinctive-frontend: true
design-loop: true
landing-page: true
design-review: true
design-system: true
image-processing: true
seo-local-business: true
keyword-research: true
write-landing: true
copywriting: true
page-cro: true
seo-audit: true
schema-markup: true
programmatic-seo: true
product-positioning: true
product-messaging: true
customer-segments: true
icp-persona: true
copy-anatomy: true
performance-marketing: true
ad-creative: true
claude-design-skill: true
website-builder-workflow: true
frontend-design-principles: true
```

