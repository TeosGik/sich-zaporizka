// Свята у Січі — 4 річні свята, які реально відмічаються в ресторані.

export type AfishaItem = {
  id: string;
  day: string;
  title: string;
  description: string;
  /** Якщо задано — рендеримо <Image> з parallax, інакше — gradient як fallback */
  src?: string;
  gradient: { from: string; via: string; to: string };
};

export const afisha: readonly AfishaItem[] = [
  {
    id: "valentines",
    day: "14 лютого",
    title: "День Закоханих",
    description:
      "Романтичний вечір зі святковим меню для двох, келихом ігристого від закладу та живою інструментальною музикою. Бронюємо тихі столики біля каміна.",
    src: "/images/afisha/valentines.jpg",
    gradient: { from: "#7a1f1f", via: "#b8893d", to: "#1f1a14" },
  },
  {
    id: "maslyana",
    day: "Останній тиждень перед Великим постом",
    title: "Масляна",
    description:
      "Тиждень млинців: з сьомгою та зеленню, з печінкою індички, із сиром та мʼясом, солодкі з ягодами. Усі — на топленому маслі, як годиться.",
    src: "/images/afisha/maslyana.jpg",
    gradient: { from: "#b8893d", via: "#3c4a2a", to: "#1f1a14" },
  },
  {
    id: "easter",
    day: "Великодня неділя",
    title: "Свято Великодня",
    description:
      "Святкове меню в колі рідних: свячена паска, шинка з хроном, сирні бабки, паски на горіховій муці. Великодній вогонь надворі — за традицією.",
    src: "/images/afisha/easter.jpg",
    gradient: { from: "#1f1a14", via: "#7a1f1f", to: "#b8893d" },
  },
  {
    id: "pokrova",
    day: "14 жовтня",
    title: "Свято Покрови",
    description:
      "День козацької слави. Вечеря з борщем на бичачих кістках, кулешем на дровах і козацькими піснями від запрошеного гурту.",
    src: "/images/gallery/rushnyk.jpg",
    gradient: { from: "#3c4a2a", via: "#7a1f1f", to: "#1f1a14" },
  },
];
