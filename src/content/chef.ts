// "Шеф рекомендує" — 6 фірмових страв з кухні Запорозької Січі.

export type ChefDish = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  /** Якщо задано — рендеримо <Image>, інакше — gradient як fallback */
  src?: string;
  gradient: { from: string; via: string; to: string };
};

export const chefRecommends: readonly ChefDish[] = [
  {
    id: "borshch",
    name: "Борщ з пампушками",
    category: "Перші страви",
    description:
      "Готуємо 7 годин на бичачих кістках, з пасеровкою на сирому буряку. Чотири пухкі пампушки з часниковою олією — обовʼязково.",
    price: 220,
    src: "/images/gallery/dish-1.jpg",
    gradient: { from: "#7a1f1f", via: "#5a1414", to: "#1f1a14" },
  },
  {
    id: "mlyntsi",
    name: "Млинці з сьомгою та зеленню",
    category: "Українська класика",
    description:
      "Тонкі ажурні млинці з охолодженою сьомгою, кропом, цибулькою і вершковою заправкою. Подаємо з ложкою ікри щуки зверху.",
    price: 250,
    src: "/images/chef/mlyntsi.jpg",
    gradient: { from: "#b8893d", via: "#3c4a2a", to: "#1f1a14" },
  },
  {
    id: "kulesh",
    name: "Кулеш козацький на багатті",
    category: "На відкритому вогні",
    description:
      "Пшоно томлене над дровами, копчене сало, печена цибуля, зелень. Готуємо у чавунці — так, як готували козаки в походах на Туреччину.",
    price: 190,
    gradient: { from: "#3c4a2a", via: "#1f1a14", to: "#b8893d" },
  },
  {
    id: "som",
    name: "Сом у глиняній печі",
    category: "Хіт від шефа",
    description:
      "Дніпровський сом запікаємо цілою тушкою з лимоном, кропом і чебрецем. До нього — печена на жирі картопля та маринований часник.",
    price: 420,
    src: "/images/gallery/dish-2.jpg",
    gradient: { from: "#1f1a14", via: "#7a1f1f", to: "#b8893d" },
  },
  {
    id: "rebra",
    name: "Реберця ягняти на вугіллі",
    category: "Гриль",
    description:
      "Молоді реберця натираємо чебрецем, розмарином і часником, повільно томимо над дубовим вугіллям. Соус — ткемалі з нашої сливи.",
    price: 390,
    gradient: { from: "#5a1414", via: "#b8893d", to: "#1f1a14" },
  },
  {
    id: "krem-brule",
    name: "Крем-Брюле з природою",
    category: "Десерти",
    description:
      "Класичне ванільне крем-брюле з хрусткою карамельною скоринкою. Подаємо на терасі — серед дерев, з ароматом весняного саду.",
    price: 150,
    src: "/images/chef/krem-brule.jpg",
    gradient: { from: "#b8893d", via: "#7a1f1f", to: "#3c4a2a" },
  },
];
