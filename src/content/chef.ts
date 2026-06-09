// "Шеф рекомендує" — 4 фірмові страви з кухні Запорозької Січі.
// Лише ті, що мають реальні фото. Описи з характером шефа.

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
    category: "Класика",
    description:
      "Готуємо 7 годин на бичачих кістках, з пасеровкою на сирому буряку. Чотири пухкі пампушки з часниковою олією — обовʼязково. Подається зі сметаною.",
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
