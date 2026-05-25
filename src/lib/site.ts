export const siteConfig = {
  name: "Запорозька Січ",
  shortName: "ЗС",
  tagline: "Смак Хортиці. Душа Січі.",
  description:
    "Тематичний козацький ресторан на острові Хортиця у Запоріжжі. Українська кухня, банкети, весілля, корпоративи.",
  url: "https://sich-zaporizka.com.ua",
  locale: "uk_UA",
  keywords: [
    "ресторан Запоріжжя",
    "Хортиця",
    "козацька кухня",
    "українська кухня",
    "банкети Запоріжжя",
    "весілля Хортиця",
    "Запорозька Січ",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
