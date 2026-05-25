// Меню — плейсхолдер. Замініть на реальні страви + ціни.

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number; // у гривнях
  highlight?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  dishes: Dish[];
};

export const menu: readonly MenuCategory[] = [
  {
    id: "cold",
    name: "Холодні закуски",
    dishes: [
      {
        id: "salo",
        name: "Сало з часником на чорному хлібі",
        description: "Власної засолки, з тмином та свіжою цибулею.",
        price: 145,
        highlight: true,
      },
      {
        id: "herring",
        name: "Оселедець з печеною картоплею",
        description: "Чорноморський оселедець, олія холодного віджиму, кріп.",
        price: 220,
      },
      {
        id: "tomatoes",
        name: "Помідори з бринзою",
        description: "Літні рожеві помідори, овеча бринза, базилік, олія.",
        price: 195,
      },
      {
        id: "pickles",
        name: "Соління Січі",
        description: "Огірки, помідори, капуста, моркви на меду — асорті.",
        price: 175,
      },
    ],
  },
  {
    id: "soups",
    name: "Перші страви",
    dishes: [
      {
        id: "borshch",
        name: "Борщ з пампушками",
        description:
          "На бичачих кістках, з телятиною, із салом і часником. Подається з 4 пампушками.",
        price: 220,
        highlight: true,
      },
      {
        id: "kulesh",
        name: "Кулеш козацький",
        description: "Пшоно на багатті, копчене сало, цибуля, морквина, дим.",
        price: 190,
      },
      {
        id: "uha",
        name: "Юшка з дніпровської риби",
        description: "Сом, судак, окунь. Зварена в чавунці, з шафраном.",
        price: 245,
      },
    ],
  },
  {
    id: "hot",
    name: "Гарячі страви",
    dishes: [
      {
        id: "varenyky",
        name: "Вареники з вишнею",
        description: "Зі сметаною та медовою заливкою. Авжеж, з тіста на ряжанці.",
        price: 215,
      },
      {
        id: "deruny",
        name: "Деруни з білими грибами",
        description: "Підсмажені на смальці, у сметанному соусі з білими грибами.",
        price: 245,
      },
      {
        id: "holubtsi",
        name: "Голубці бабусині",
        description: "У капустяному листі, з гречаною кашею та свининою.",
        price: 230,
      },
    ],
  },
  {
    id: "grill",
    name: "Гриль на вогні",
    dishes: [
      {
        id: "kovbasa",
        name: "Домашня ковбаса на дровах",
        description: "Свинина, часник, чорний перець, гірчиця, печена цибуля.",
        price: 285,
        highlight: true,
      },
      {
        id: "shashlyk",
        name: "Шашлик зі свинячої шиї",
        description: "Маринований у цибулі та сухому червоному, з мочуною.",
        price: 320,
      },
      {
        id: "rebra",
        name: "Реберця ягняти",
        description: "Натерті чебрецем, повільно запечені на вугіллі.",
        price: 390,
      },
      {
        id: "som",
        name: "Сом, запечений у глиняній печі",
        description: "Цілою тушкою, з лимоном, кропом та смаженою картоплею.",
        price: 420,
      },
    ],
  },
  {
    id: "drinks",
    name: "Напої",
    dishes: [
      {
        id: "medovukha",
        name: "Медовуха домашня (300 мл)",
        description: "На липовому меду, з імбиром або шипшиною. Подається холодною.",
        price: 95,
        highlight: true,
      },
      {
        id: "uzvar",
        name: "Узвар з сухофруктів",
        description: "Яблука, груші, чорнослив. На липовому меду.",
        price: 70,
      },
      {
        id: "kvass",
        name: "Квас житній з изюмом",
        description: "Власного приготування, на дев'яти травах.",
        price: 55,
      },
      {
        id: "nalyvka",
        name: "Наливка вишнева (50 мл)",
        description: "На вишні з молодого саду, витримана 18 місяців.",
        price: 110,
      },
    ],
  },
];
