// 4 зони ресторану.

export type Zone = {
  id: string;
  name: string;
  description: string;
  capacity: string;
  bestFor: string;
  /** Якщо задано — рендеримо <Image>, інакше — gradient як fallback */
  src?: string;
  gradient: { from: string; via: string; to: string };
};

export const zones: readonly Zone[] = [
  {
    id: "main-hall",
    name: "Головна зала",
    description:
      "Просторий зал з тесаними балками й великим каміном. Серце Січі — звідси чути спів і пахне печеним м'ясом.",
    capacity: "до 80 осіб",
    bestFor: "Великі компанії · сімейні обіди",
    src: "/images/afisha/sunday.jpg",
    gradient: { from: "#3c4a2a", via: "#1f1a14", to: "#7a1f1f" },
  },
  {
    id: "shynok",
    name: "Шинок",
    description:
      "Камерний підвальний бар з барною стійкою з дубового зрубу. Сорок видів хреновухи, наливки на травах і дим від люльки.",
    capacity: "до 24 осіб",
    bestFor: "Камерні вечори · дегустації",
    src: "/images/gallery/drinks.jpg",
    gradient: { from: "#1f1a14", via: "#5a1414", to: "#3d3328" },
  },
  {
    id: "summer-terrace",
    name: "Літня тераса",
    description:
      "Дерев'яний настил під шатром з виглядом на Дніпро й острів. Краще місце Січі для тихого заходу сонця.",
    capacity: "до 60 осіб",
    bestFor: "Весна-літо · романтичні вечори",
    src: "/images/banquets/anniversary.jpg",
    gradient: { from: "#b8893d", via: "#3c4a2a", to: "#1f1a14" },
  },
  {
    id: "banquet-hall",
    name: "Банкетна світлиця",
    description:
      "Окрема зала з власним входом, гардеробом і сценою. Місце для весілля, корпоративу чи ювілею «під ключ».",
    capacity: "до 120 осіб",
    bestFor: "Весілля · корпоративи · ювілеї",
    src: "/images/banquets/wedding.jpg",
    gradient: { from: "#7a1f1f", via: "#b8893d", to: "#3c4a2a" },
  },
];
