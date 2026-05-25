// Галерея — 9 квадратів. Усі однакові за форматом, чисто й рівно.

export type GalleryItem = {
  id: string;
  alt: string;
  /** Якщо задано — рендеримо <Image>, інакше — градієнт як fallback */
  src?: string;
  gradient: { from: string; via: string; to: string };
};

export const gallery: readonly GalleryItem[] = [
  {
    id: "g1",
    alt: "Деталі автентичної української культури в інтер'єрі Січі",
    src: "/images/gallery/details.jpg",
    gradient: { from: "#7a1f1f", via: "#1f1a14", to: "#3c4a2a" },
  },
  {
    id: "g2",
    alt: "Страва дня — українська кухня в ресторані Запорозька Січ",
    src: "/images/gallery/dish-1.jpg",
    gradient: { from: "#b8893d", via: "#7a1f1f", to: "#1f1a14" },
  },
  {
    id: "g3",
    alt: "Острів Хортиця — пейзаж біля ресторану",
    src: "/images/gallery/khortytsia.jpg",
    gradient: { from: "#3c4a2a", via: "#b8893d", to: "#1f1a14" },
  },
  {
    id: "g4",
    alt: "Весільне оформлення банкетної зали",
    src: "/images/gallery/wedding.jpg",
    gradient: { from: "#1f1a14", via: "#7a1f1f", to: "#b8893d" },
  },
  {
    id: "g5",
    alt: "Українські напої та домашні хреновухи",
    src: "/images/gallery/drinks.jpg",
    gradient: { from: "#1f1a14", via: "#5a1414", to: "#3d3328" },
  },
  {
    id: "g6",
    alt: "Скульптура козака — деталь подвір'я ресторану",
    src: "/images/gallery/cossack.jpg",
    gradient: { from: "#b8893d", via: "#3c4a2a", to: "#1f1a14" },
  },
  {
    id: "g7",
    alt: "Вечір у Січі — затишок до пізньої ночі",
    src: "/images/gallery/evening.jpg",
    gradient: { from: "#5a1414", via: "#1f1a14", to: "#b8893d" },
  },
  {
    id: "g8",
    alt: "Авторська страва з льодом — секретний рецепт шефа",
    src: "/images/gallery/dish-2.jpg",
    gradient: { from: "#3c4a2a", via: "#1f1a14", to: "#7a1f1f" },
  },
  {
    id: "g9",
    alt: "Український орнаментальний рушник — деталь інтер'єру",
    src: "/images/gallery/rushnyk.jpg",
    gradient: { from: "#7a1f1f", via: "#b8893d", to: "#3c4a2a" },
  },
];
