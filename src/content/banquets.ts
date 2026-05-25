// 3 типи банкетів — плейсхолдери.

export type Banquet = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  capacity: string;
  /** Якщо задано — рендеримо <Image>, інакше — gradient як fallback */
  src?: string;
  gradient: { from: string; via: string; to: string };
};

export const banquets: readonly Banquet[] = [
  {
    id: "wedding",
    name: "Весілля",
    description:
      "Окрема банкетна світлиця з власною сценою. Український каравай від місцевої пекарні, козачка під ніч, феєрверк над Дніпром.",
    highlights: [
      "До 120 гостей",
      "Власний вхід і гардероб",
      "Координатор + звукотехнік",
      "Меню погоджуємо особисто",
    ],
    capacity: "До 120 осіб",
    src: "/images/banquets/wedding.jpg",
    gradient: { from: "#7a1f1f", via: "#b8893d", to: "#1f1a14" },
  },
  {
    id: "corporate",
    name: "Корпоратив",
    description:
      "Тематичний козацький вечір з майстер-класами, дегустацією медовух та живою музикою. Робить навіть фінансистів веселішими.",
    highlights: [
      "Від 30 осіб",
      "Тематичні активності",
      "Дегустація медовух",
      "Прозоре ціноутворення",
    ],
    capacity: "Від 30 до 120 осіб",
    src: "/images/banquets/corporate.jpg",
    gradient: { from: "#3c4a2a", via: "#1f1a14", to: "#7a1f1f" },
  },
  {
    id: "anniversary",
    name: "Ювілей",
    description:
      "Камерне святкування у Шинку або Головній залі. Без зайвих гостей — лише найрідніші, спогади й добре вино.",
    highlights: [
      "Від 10 осіб",
      "Камерна атмосфера",
      "Поіменні запрошення",
      "Особистий торт від кондитера",
    ],
    capacity: "Від 10 до 80 осіб",
    src: "/images/banquets/anniversary.jpg",
    gradient: { from: "#1f1a14", via: "#5a1414", to: "#3d3328" },
  },
];
