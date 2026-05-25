# Запорозька Січ — лендінг ресторану

Односторінковий сайт ресторану "Запорозька Січ" на о. Хортиця, Запоріжжя.
Next.js 16 (App Router) + TypeScript strict + Tailwind v4 + shadcn/ui.

## Запуск локально

```bash
# Один раз — додайте Node у PATH вашого shell:
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Далі — щоразу:
cd ~/Desktop/sich-zaporizka
pnpm dev
# → відкривайте http://localhost:3000
```

Production-білд:

```bash
pnpm build && pnpm start
```

## Що де лежить

```
src/
├── app/
│   ├── layout.tsx          # шрифти, метатеги, JsonLd, Header/Footer
│   ├── page.tsx            # головна — імпортує всі секції
│   ├── globals.css         # палітра, типографіка, анімації
│   ├── sitemap.ts          # /sitemap.xml
│   └── robots.ts           # /robots.txt
├── components/
│   ├── layout/             # Header, Footer, MobileMenu, StickyCallBar, Logo
│   ├── sections/           # Hero, About, Afisha, Zones, Menu, Gallery, Banquets, Location, CtaBlock
│   ├── shared/             # AfishaRow, ZoneCard, Divider
│   ├── icons/              # SocialIcons (Instagram/Facebook/Telegram SVG)
│   ├── ui/                 # shadcn (Button, Sheet, Tabs, Dialog)
│   └── JsonLd.tsx          # schema.org Restaurant
├── content/                # ВЕСЬ редагований контент
│   ├── contacts.ts         # телефон, адреса, GPS, графік, соцмережі
│   ├── about.ts            # текст "Про Січ"
│   ├── afisha.ts           # 4 тижневі ритуали
│   ├── zones.ts            # 4 зони ресторану
│   ├── menu.ts             # 5 категорій страв з цінами
│   ├── banquets.ts         # 3 типи банкетів
│   └── gallery.ts          # 9 елементів галереї
└── lib/
    ├── site.ts             # назва, URL, опис сайту
    ├── nav.ts              # пункти меню
    ├── utils.ts            # cn() — Tailwind class merger
    └── useParallax.ts      # CSS-parallax хук
```

## Що змінити перед запуском

### 1. Контакти (`src/content/contacts.ts`)
Замініть плейсхолдери на реальні:
- `phone` / `phoneHref` — номер ресторану
- `telegram.url`, `viber.url` — справжні посилання
- `address.geo` — справжні координати GPS
- `address.mapsUrl` — посилання на Google Maps

### 2. URL і назва сайту (`src/lib/site.ts`)
- `url` — змініть на реальний домен перед деплоєм

### 3. Фото
Зараз скрізь градієнти-плейсхолдери. Реальні фото покладіть в:
```
public/images/hero/         — для Hero (1-3 шт.)
public/images/about/        — для About
public/images/afisha/       — для 4 рядків афіші
public/images/zones/        — для 4 зон
public/images/gallery/      — для 9 фото галереї
public/images/banquets/     — для 3 типів банкетів
```

Потім замініть `<div style={{ backgroundImage: ... }}>` плейсхолдери на:

```tsx
import Image from "next/image";
<Image src="/images/hero/main.jpg" alt="..." fill priority />
```

### 4. Меню (`src/content/menu.ts`)
Тут плейсхолдер-страви — замініть на ваші. Структура:
```ts
{ id, name, description, price, highlight?: boolean }
```

### 5. Тижневі ритуали (`src/content/afisha.ts`)
4 події — замініть або додайте свої.

### 6. OG image
Створіть `src/app/opengraph-image.jpg` (1200×630) — це буде у Facebook/Twitter при шарингу.

## Деплой на Vercel

1. Створіть акаунт на https://vercel.com
2. `Add New Project` → `Import` репозиторій GitHub
3. Vercel автоматично визначить Next.js — нічого не треба налаштовувати
4. Натисніть Deploy
5. Після першого деплою — підключіть свій домен у Project Settings

## Технічні нотатки

- **Tailwind v4**: конфіг живе в `src/app/globals.css` (через `@theme inline`), не в JS-файлі
- **shadcn/ui (base-nova)**: на базі Base UI, а не Radix. Компоненти приймають `render` prop замість `asChild`. Для кастомних анкорів використовуємо `buttonVariants()` напряму
- **Parallax**: без бібліотек — `useParallax` хук оновлює CSS-змінну, `prefers-reduced-motion` повністю вимикає ефект
- **Lighthouse-цілі**: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95
- **JSON-LD schema.org Restaurant** валідується на https://search.google.com/test/rich-results

## Скрипти

```bash
pnpm dev      # dev сервер на http://localhost:3000
pnpm build    # production білд
pnpm start    # production сервер (треба спочатку build)
pnpm lint     # ESLint
```
