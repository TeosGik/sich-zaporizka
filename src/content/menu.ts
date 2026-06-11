// Повне меню Національного клубу «Запорозька Січ».
// Згруповано в 7 великих категорій із підрозділами.

export type Dish = {
  name: string;
  desc?: string;
  weight?: string;
  /** null = ціна за домовленістю / не вказано */
  price: number | null;
  /** Велика порція (зазвичай 1л проти 330мл) */
  priceLarge?: number;
  /** Ціна за пляшку (для вин) */
  priceBottle?: number;
  highlight?: boolean;
};

export type SubCategory = {
  id: string;
  title: string;
  dishes: Dish[];
};

export type MenuCategory = {
  id: string;
  name: string;
  subCategories: SubCategory[];
};

export const menu: readonly MenuCategory[] = [
  // ─── 1. ЗАКУСКИ ───────────────────────────────────────────────────
  {
    id: "appetizers",
    name: "Закуски",
    subCategories: [
      {
        id: "cold-appetizers",
        title: "Холодні закуски",
        dishes: [
          { name: "Домашні соління власного виробництва", weight: "500", price: 220, highlight: true },
          { name: "Городина з квашених овочів", weight: "400", price: 330 },
          { name: "Городина з натуральних овочів", weight: "150", price: 240 },
          { name: "Грибочки з бочки (маслюки або опеньки)", weight: "300", price: 250 },
          { name: "Ікра заморська баклажанна", weight: "250", price: 550 },
          { name: "Сирна завірюха", desc: "камамбер, дор блю, голандець, пармезан, козячий, соус ягідний, горіх", weight: "200", price: 680 },
          { name: "Рибна усяка всячина", desc: "сьомга слабосолона, риба масляна, вугор копчений", weight: "250", price: 370 },
          { name: "Млинці з сьомгою та зеленню", weight: "100/30/150", price: 160 },
          { name: "Оселедець з цибулею або з картоплею", weight: "500", price: 570 },
          { name: "Закуска «Щирий кум»", desc: "буженина, ростбіф, рулет курячий, паштет в омлеті", weight: "100/30", price: 180 },
          { name: "Сало з цибулею", weight: "300/30", price: 400, highlight: true },
          { name: "Сало як сало", desc: "сало солоне, сало запечене, сало копчене, цибуля", price: null },
          { name: "Брускети з хамоном", weight: "150", price: 200 },
          { name: "Брускети з сьомгою", price: null },
          { name: "Брускети з креветками", price: null },
          { name: "Карпаччо з телятини", weight: "180", price: 500 },
          { name: "Тар-тар з сьомги", weight: "180", price: 360 },
          { name: "Тар-тар з телятини", weight: "220", price: 500 },
        ],
      },
      {
        id: "salads",
        title: "Салати",
        dishes: [
          { name: "Хортиця", desc: "томати, перець солодкий, печериці смажені, яйце перепелине, пармезан, олія", weight: "200", price: 220, highlight: true },
          { name: "Теплий з фалафелем та хумусом", desc: "авокадо, томати, мікс зелені, фалафель, хумус, соус горіховий", weight: "270", price: 270 },
          { name: "Панський", desc: "авокадо, томати, цибуля, Фета, мікс зелені, кунжут, олія оливкова", weight: "200", price: 220 },
          { name: "Заморська примха", desc: "креветки, кальмари, мідії, морські гребінці, огірки свіжі, заправа", weight: "220", price: 480 },
          { name: "Сьомгушка", desc: "сьомга с/с, томати, перець, авокадо, мікс зелені, олія оливкова", weight: "200", price: 350 },
          { name: "Креветковий з апельсином", desc: "креветки, мікс зелені, авокадо, апельсин, пармезан, заправа", weight: "230", price: 420 },
          { name: "Зелений з індичкою та грушами", desc: "індича філе, груша, Дор блю, мікс зелені, заправа, мигдаль", weight: "220", price: 280 },
          { name: "Буковина", desc: "язик яловичий, огірки свіжі, перець печений, опеньки, мікс зелені, сир, соус Цезар", weight: "200", price: 350 },
          { name: "Теплий з яловичиною, овочами та пармезаном", weight: "250", price: 370 },
          { name: "Маричка", desc: "куряче філе, мікс зелені, перець печений, бринза смажена, черрі, олія", weight: "220", price: 260 },
          { name: "Від Цезаря з курячим філе", weight: "220", price: 260 },
          { name: "З хамоном та овочами", desc: "хамон, авокадо, томати черрі, мікс зелені, Фета, мигдаль, олія оливкова", weight: "200", price: 330 },
          { name: "З качиною грудкою та манго", desc: "качине філе, манго, камамбер, мікс зелені, салатна заправа", weight: "200", price: 330 },
          { name: "Теплий з індичою печінкою та печерицями", desc: "печінка індича смажена, печериці, томати, мікс зелені, пармезан, олія", weight: "200", price: 240 },
        ],
      },
      {
        id: "hot-appetizers",
        title: "Гарячі закуски",
        dishes: [
          { name: "Млинці з мʼясом та сметаною", weight: "250", price: 250 },
          { name: "Млинці з курячим філе та печерицями", price: null },
          { name: "Млинці з судаком та шпинатом", price: null },
          { name: "Деруни картопляні зі сметаною", weight: "200/50", price: 180 },
          { name: "Деруни з мʼясом та сметаною", weight: "200/50", price: 220 },
          { name: "Один метр ковбаси", desc: "ковбаса домашня, кровʼяна, куряча, соуси", weight: "1000", price: 1350, highlight: true },
          { name: "Ковбаса домашня та потрошки на сковороді", desc: "ковбаса домашня, кровʼяна, куряча, потрошки курячі, цибуля", weight: "350", price: 550 },
          { name: "Голубці телячі", desc: "в сметанковому або томатному соусі", weight: "200/100", price: 250 },
          { name: "Рибна сковорода", desc: "судак, мідії, кальмари, креветки", weight: "300", price: 590 },
          { name: "Креветкові хвости у кунжутному соусі", weight: "120", price: 490 },
          { name: "Мідії Гігант з креветками у сирному соусі", weight: "220", price: 420 },
          { name: "Сир Брі запечений з грушами", weight: "250", price: 360 },
        ],
      },
    ],
  },

  // ─── 2. ПЕРШІ СТРАВИ ──────────────────────────────────────────────
  {
    id: "first-courses",
    name: "Перші страви",
    subCategories: [
      {
        id: "soups",
        title: "Перші страви",
        dishes: [
          { name: "Борщ з пампушками та сметаною", desc: "Варимо 7 годин на яловичих ребрах. Пасеровка на сирому буряку, 2 пухкі пампушки з часниковою олією.", weight: "300/100/30", price: 220, highlight: true },
          { name: "Борщ зелений з пампушками та сметаною", weight: "300/100/30", price: 220 },
          { name: "Бульйон з куркою та локшиною", weight: "300", price: 170 },
          { name: "Суп з лісовими грибами", weight: "300", price: 190 },
          { name: "Солянка мʼясна", weight: "300", price: 260 },
          { name: "Шурпа з ягнятини", weight: "300", price: 260 },
          { name: "Юшка Панська з трьох риб", weight: "300", price: 250 },
          { name: "Окрошка на квасі або кефірі", weight: "300", price: 220 },
        ],
      },
      {
        id: "pot-dishes",
        title: "Українські страви у горщиках",
        dishes: [
          { name: "Деруни в сметані з печерицями", weight: "350", price: 260 },
          { name: "Домашні потрошки у сметані", weight: "350", price: 290 },
          { name: "Печеня теляча з овочами", weight: "350", price: 370, highlight: true },
          { name: "«Язиката хвеська»", desc: "язик, печериці, цибуля, сметана", weight: "350", price: 390 },
        ],
      },
      {
        id: "pirizhky",
        title: "Пиріжки смажені тільки з пательні",
        dishes: [
          { name: "З картоплею", weight: "60", price: 70 },
          { name: "З картоплею та грибами", weight: "60", price: 80 },
          { name: "З картоплею та печінкою", weight: "60", price: 80 },
          { name: "З капустою", weight: "60", price: 70 },
          { name: "З грибами", weight: "60", price: 90 },
          { name: "З мʼясом — дуже соковиті", weight: "60", price: 100, highlight: true },
          { name: "З печінкою", weight: "60", price: 90 },
          { name: "З яйцями та зеленою цибулею", weight: "60", price: 80 },
          { name: "З сиром фета та шпинатом", weight: "60", price: 90 },
          { name: "З вишнями", weight: "60", price: 90 },
        ],
      },
      {
        id: "varenyky",
        title: "Посмакуйте варенички",
        dishes: [
          { name: "З картоплею, шкварками та сметаною", weight: "250/50", price: 160 },
          { name: "З капустою, цибулею та сметаною", weight: "250/50", price: 160 },
          { name: "З картоплею, печерицями та сметаною", weight: "250/50", price: 190 },
          { name: "З мʼясом свинини та сметаною", weight: "250/50", price: 230 },
          { name: "З сиром та сметаною (солоні або солодкі)", weight: "250/50", price: 170 },
          { name: "З сиром сулугуні та томатами", weight: "250/50", price: 230 },
          { name: "З вишнею та киселиком", weight: "250/250", price: 220, highlight: true },
        ],
      },
    ],
  },

  // ─── 3. ГАРЯЧІ ────────────────────────────────────────────────────
  {
    id: "main-courses",
    name: "Гарячі страви",
    subCategories: [
      {
        id: "fish-dishes",
        title: "Страви з риби",
        dishes: [
          { name: "Котлетки з судака або зі щуки", weight: "150", price: 280 },
          { name: "Ікряники з соусом", weight: "200/50", price: 200 },
          { name: "Судак смажений з цибулею", weight: "150", price: 330 },
          { name: "Сом смажений з цибулею", weight: "150", price: 300, highlight: true },
          { name: "Судак запечений з овочами у фользі", weight: "250", price: 400 },
          { name: "Судак з сирною скоринкою та брокколі", weight: "250", price: 400 },
          { name: "Судак з крем-сиром та овочами", weight: "300", price: 490 },
          { name: "Сьомга з овочами та моцарелою", weight: "200", price: 530 },
          { name: "Сьомга з креветками у вершковому соусі", weight: "250", price: 560 },
          { name: "Дорадо з томатами та моцарелою", weight: "350", price: 600 },
          { name: "Реберця коропа смажені з цибулею", weight: "200", price: 330 },
          { name: "Карась в сметані", weight: "250", price: 240 },
        ],
      },
      {
        id: "meat-poultry",
        title: "Страви з мʼяса та птиці",
        dishes: [
          { name: "Свіжина поросяча з цибулею", weight: "250", price: 330 },
          { name: "Свинина смажена з картоплею на сковороді", weight: "350", price: 300 },
          { name: "Медальйони зі свинини в беконі з квасолею", weight: "200/100", price: 450 },
          { name: "Реберця свинячі у соусі барбекю", weight: "250", price: 300 },
          { name: "Телятина запечена у пряних травах", weight: "150", price: 650 },
          { name: "Медальйони з телятини з журавлиним соусом", weight: "250", price: 650, highlight: true },
          { name: "Медальйони з телятини з сирним соусом", weight: "250", price: 650 },
          { name: "Бефстроганов з печерицями та картопляним пюре", weight: "250/150", price: 540 },
          { name: "Котлета по-київськи", weight: "150", price: 290 },
          { name: "Крученики курячі з печерицями", weight: "200", price: 320 },
          { name: "Куряче філе у вершково-сирному соусі", weight: "220", price: 300 },
          { name: "Куряче філе «Розкішна Ципа»", desc: "куряче філе, томати, бекон, моцарела, соус Песто", weight: "250", price: 300 },
          { name: "Курка з печерицями та картоплею на сковороді", weight: "350", price: 290 },
          { name: "Котлети з індички", weight: "150", price: 220 },
          { name: "Качина грудка з малиновим соусом", weight: "150/100", price: 460 },
          { name: "Качина ніжка з чорносливом", weight: "150/100", price: 480 },
        ],
      },
      {
        id: "sides",
        title: "Гарніри",
        dishes: [
          { name: "Картопля смажена по-домашньому", weight: "200", price: 110 },
          { name: "Картопля по-селянськи", weight: "200", price: 110 },
          { name: "Картопля смажена з печерицями", weight: "250", price: 160 },
          { name: "Картопля Хрустка", weight: "200", price: 120 },
          { name: "Картопляне пюре", weight: "200", price: 110 },
          { name: "Картопля запечена з салом", weight: "250", price: 160 },
          { name: "Морква молода запечена з травами", weight: "200", price: 100 },
        ],
      },
      {
        id: "sauces",
        title: "Соуси",
        dishes: [
          { name: "Сметана", weight: "100", price: 70 },
          { name: "Соус аджика", weight: "100", price: 70 },
          { name: "Соус гриль", weight: "100", price: 60 },
          { name: "Соус татарський", weight: "100", price: 60 },
          { name: "Соус сливовий", weight: "100", price: 60 },
          { name: "Гірчиця", weight: "50", price: 40 },
          { name: "Хрін домашній", weight: "50", price: 40 },
        ],
      },
      {
        id: "bread",
        title: "Хліб домашній",
        dishes: [
          { name: "Хліб білий домашній", weight: "50", price: 20 },
          { name: "Хліб ржаний", weight: "50", price: 20 },
          { name: "Паляниця", weight: "200", price: 90 },
          { name: "Потапці (грінки)", weight: "50", price: 50 },
        ],
      },
    ],
  },

  // ─── 4. ГРИЛЬ ─────────────────────────────────────────────────────
  {
    id: "grill",
    name: "Гриль",
    subCategories: [
      {
        id: "grill-meat",
        title: "Страви гриль з мʼяса",
        dishes: [
          { name: "Шашлик асорті мʼясний", desc: "свинина, телятина, куряче філе, печінка, бекон, аджика, сливовий, гриль", weight: "1000/300", price: 2500, highlight: true },
          { name: "Шашлик асорті поросячий", desc: "свинина, реберця свинячі, люля-кебаб свинячий, гриль, аджика", weight: "1200/200", price: 2000 },
          { name: "Стейк або шашлик зі свинини", weight: "200", price: 330 },
          { name: "Стейк або шашлик з філейки телятини", weight: "200", price: 780 },
          { name: "Стейк яловичий Ріб-ай (на вагу)", weight: "100", price: 250 },
          { name: "Стейк або шашлик курячий", weight: "200", price: 280 },
          { name: "Шашлик із філе індички", weight: "200", price: 330 },
          { name: "Шашлик із печінки з беконом та яблуками", weight: "200", price: 360 },
          { name: "Люля-кебаб курячий", weight: "200", price: 240 },
          { name: "Люля-кебаб з телятини", weight: "200", price: 300 },
          { name: "Люля-кебаб баранячий", weight: "200", price: 330 },
          { name: "Перепілка гриль", weight: "1 шт", price: 300 },
          { name: "Ягня на реберці", weight: "200", price: 650 },
          { name: "Реберця зі свинини", weight: "200", price: 280 },
          { name: "Язик яловичий гриль", weight: "150", price: 470 },
        ],
      },
      {
        id: "grill-fish",
        title: "Рибні страви гриль",
        dishes: [
          { name: "Шашлик асорті рибний", desc: "судак, сом, сьомга, татарський, до риби", weight: "500/200", price: 2200 },
          { name: "Дорадо барбекю", weight: "1 шт/300", price: 550, highlight: true },
          { name: "Стейк сьомги", weight: "100", price: 450 },
          { name: "Стейк сома", weight: "100", price: 330 },
          { name: "Стейк судака", weight: "100", price: 350 },
          { name: "Люля-кебаб рибний з судака", weight: "200", price: 330 },
        ],
      },
      {
        id: "grill-seafood",
        title: "Страви гриль з морепродуктів",
        dishes: [
          { name: "Шашлик асорті з морепродуктів", desc: "мідії гігант, кальмари, креветка тигрова, гребінці, кабаякі, Цезар", weight: "500/100", price: 2600 },
          { name: "Кальмари гриль (на вагу)", weight: "100", price: 350 },
          { name: "Креветки тигрові гриль (на вагу)", weight: "100", price: 470 },
        ],
      },
      {
        id: "grill-vegetables",
        title: "Овочі печені",
        dishes: [
          { name: "Овочі гриль", desc: "томати, перець, цукіні, печериці, кукурудза, цибуля", weight: "600", price: 370 },
          { name: "Сир на мангалі", weight: "200", price: 200 },
        ],
      },
    ],
  },

  // ─── 5. ДЕСЕРТИ ───────────────────────────────────────────────────
  {
    id: "desserts",
    name: "Десерти",
    subCategories: [
      {
        id: "desserts",
        title: "Солодке",
        dishes: [
          { name: "Морозиво з солоденьким соусом", desc: "фруктові, карамель, шоколад на Ваш смак", weight: "150/30", price: 150 },
          { name: "Морозиво з тертим шоколадом", weight: "150/30", price: 170 },
          { name: "Морозиво «Горішок»", desc: "морозиво, фундук, мигдаль, кешью, горіховий соус", weight: "150/60", price: 180 },
          { name: "Морозиво з ягодами", weight: "150/50", price: 160 },
          { name: "Млинці з сиром", weight: "200/50", price: 200 },
          { name: "Млинці шоколадні з вишнями", weight: "250", price: 240 },
          { name: "Сирники домашні", weight: "200/50", price: 210, highlight: true },
          { name: "Налисники з маком", weight: "200/50", price: 160 },
          { name: "Штрудель з яблуками та горіхами", weight: "200", price: 150 },
          { name: "Штрудель з вишнями", weight: "200", price: 180 },
          { name: "Фондан шоколадний", weight: "120/50/30", price: 220 },
          { name: "Крем брюле", weight: "130", price: 150, highlight: true },
          { name: "Чіз-кейк (на вагу)", weight: "100", price: 150 },
          { name: "Рулет меренговий (на вагу)", weight: "100", price: 150 },
        ],
      },
    ],
  },

  // ─── 6. НАПОЇ ─────────────────────────────────────────────────────
  {
    id: "drinks",
    name: "Напої",
    subCategories: [
      {
        id: "signature-drinks",
        title: "Фірмові напої (100 мл)",
        dishes: [
          { name: "Хріновуха", price: 100, highlight: true },
          { name: "Вишнівка", price: 100 },
          { name: "Малинівка", price: 130 },
          { name: "Самогон Пшеничний Ексклюзивний", price: 140 },
          { name: "Самогон Полтавський", price: 80 },
        ],
      },
      {
        id: "juices",
        title: "Соки, фреші та напої власного виробництва",
        dishes: [
          { name: "Сік в асортименті (ананас, апельсин, грейпфрут, мультивітамін, вишня, яблуко)", weight: "330 / 1л", price: 80, priceLarge: 240 },
          { name: "Фреш апельсин", weight: "100", price: 80 },
          { name: "Фреш грейпфрут", weight: "100", price: 90 },
          { name: "Фреш морква", weight: "100", price: 60 },
          { name: "Фреш яблуко", weight: "100", price: 40 },
          { name: "Компот ягідний", weight: "330 / 1л", price: 60, priceLarge: 180 },
          { name: "Узвар по-козацьки", weight: "330 / 1л", price: 50, priceLarge: 150 },
          { name: "Квас домашній", weight: "330 / 1л", price: 50, priceLarge: 150 },
          { name: "Сік домашній томатний", weight: "330 / 1л", price: 80, priceLarge: 240 },
        ],
      },
      {
        id: "water-soft",
        title: "Вода та газовані напої",
        dishes: [
          { name: "Вода «Моршинська» газ.", weight: "330", price: 80 },
          { name: "Вода «Моршинська» б/г", weight: "330", price: 80 },
          { name: "Вода «Боржомі»", weight: "500", price: 140 },
          { name: "Кока-кола", weight: "250", price: 80 },
          { name: "Тонік", weight: "250", price: 80 },
        ],
      },
      {
        id: "tea",
        title: "Чай",
        dishes: [
          { name: "«Зелений равлик» (зелений чай з бруньок)", price: 80 },
          { name: "«Альпійський луг» (ромашка, лимонна трава, мʼята, цедра, шипшина)", price: 80 },
          { name: "«Гордість Цейлону»", price: 80 },
          { name: "Манго-апельсин", price: 180 },
          { name: "Зелене яблуко", price: 180 },
          { name: "Каркаде-маракуйя", price: 180 },
          { name: "Чорна смородина", price: 160 },
          { name: "Обліпиха та малина", price: 160 },
          { name: "Ягідний (з малиною та смородиною)", price: 160 },
          { name: "Збірний травʼяний (мʼята, ромашка, меліса)", price: 130 },
        ],
      },
      {
        id: "coffee",
        title: "Кава",
        dishes: [
          { name: "Еспресо", price: 80 },
          { name: "Еспресо без кофеїну", price: 80 },
          { name: "Лате", price: 90 },
          { name: "Капучіно", price: 90 },
          { name: "Фрапучіно", price: 110 },
          { name: "Гляссе", price: 120 },
          { name: "Флет Уайт", price: 140 },
          { name: "Айріш Бейліс", price: 150 },
          { name: "Вершки до кави", price: 15 },
        ],
      },
      {
        id: "cocktails-nonalco",
        title: "Коктейлі безалкогольні",
        dishes: [
          { name: "Лимонад на Ваш смак (манго, маракуйя, чорна смородина, тархун, журавлина, яблуко)", weight: "1000", price: 200 },
          { name: "Молочний шейк", weight: "280", price: 120 },
          { name: "Крем-сода", weight: "470", price: 120 },
        ],
      },
      {
        id: "cocktails-hot",
        title: "Гарячі коктейлі",
        dishes: [
          { name: "Глінтвейн", weight: "250", price: 150 },
          { name: "Глінтвейн Південнобережний", weight: "250", price: 150 },
          { name: "Глінтвейн Полуничний", weight: "250", price: 150 },
          { name: "Глінтвейн Білий ромашковий", weight: "250", price: 150 },
          { name: "Глінтвейн Чеський", weight: "300", price: 180 },
          { name: "Грог Вечірній", weight: "250", price: 170 },
          { name: "Грог Малиновий", weight: "250", price: 170 },
        ],
      },
      {
        id: "cocktails-signature",
        title: "Фірмові коктейлі",
        dishes: [
          { name: "Тіффані (ром, лікер апельсиновий, сік, фреш лимон)", weight: "250", price: 150 },
          { name: "Груша Сауер", weight: "100", price: 200 },
          { name: "Дайкірі-Персик", weight: "110", price: 180 },
          { name: "Малібу-Маракуйя", weight: "200", price: 150 },
          { name: "Маргарита Карибська", weight: "160", price: 200 },
          { name: "Ром Рожевий", weight: "230", price: 170 },
          { name: "Бейліс-Ананас", weight: "200", price: 200 },
          { name: "Біттер-Джин", weight: "260", price: 190 },
          { name: "Дюварс (віскі, фреш лимон, сік)", weight: "260", price: 180 },
          { name: "Паризька зелень (джин, абсент, фреш лимон, сік)", weight: "260", price: 180 },
          { name: "Міссісіпі Мул (джин, лікер чорна смородина, фреш лимон, сік)", weight: "210", price: 190 },
        ],
      },
      {
        id: "cocktails-long",
        title: "Довгі коктейлі",
        dishes: [
          { name: "Мартіні-тонік", weight: "340", price: 160 },
          { name: "Мартіні-біттер-лимон", weight: "340", price: 160 },
          { name: "Мартіні Фієро-тонік", weight: "300", price: 160 },
          { name: "Богемія (бехеровка, сироп, фреш лимон, сік)", weight: "190", price: 180 },
          { name: "Гірка Диня (лікер диня, фреш лимон, тонік)", weight: "340", price: 160 },
          { name: "Мармелад (лікер диня, горілка, фреш лимон, сік)", weight: "270", price: 160 },
          { name: "Апероль Шпритц", weight: "280", price: 160 },
        ],
      },
      {
        id: "cocktails-shot",
        title: "Коктейлі-шот",
        dishes: [
          { name: "«Б-52» (калуа, бейліс, куантро)", weight: "60", price: 120 },
          { name: "«Зелений мексиканець» (лікер, текіла, абсент)", weight: "65", price: 120 },
          { name: "«Хіросіма» (бейліс, самбука, абсент, гренадін)", weight: "60", price: 150 },
        ],
      },
      {
        id: "vodka-ukr",
        title: "Горілочка українська (100 мл)",
        dishes: [
          { name: "Nemiroff Де Люкс", price: 100 },
          { name: "Nemiroff Де Люкс медова з перцем", price: 100 },
          { name: "Nemiroff Де Люкс Резерв", price: 120 },
        ],
      },
      {
        id: "vodka-import",
        title: "Горілочка закордонна (100 мл)",
        dishes: [
          { name: "Finlandia", price: 140 },
          { name: "Absolut", price: 120 },
          { name: "Grey Goose", price: 270 },
          { name: "Reyka", price: 300 },
        ],
      },
      {
        id: "tequila",
        title: "Текіла (100 мл)",
        dishes: [
          { name: "Olmeca Silver", price: 170 },
          { name: "Хосе Куерво Еспесіаль Сільвер", price: 180 },
          { name: "Хосе Куерво Еспесіаль Репосадо", price: 190 },
          { name: "Мескаль", price: 500 },
        ],
      },
      {
        id: "whiskey",
        title: "Віскі (100 мл)",
        dishes: [
          { name: "Балантайнс", price: 150 },
          { name: "Джек Деніелс", price: 240 },
          { name: "Джек Деніелс медовий", price: 240 },
          { name: "Джемісон", price: 200 },
          { name: "Манкі Шолдер", price: 400 },
          { name: "Гленморанж 12 років", price: 580 },
          { name: "Чівас Рігал 12 років", price: 350 },
          { name: "Чівас Рігал 18 років", price: 760 },
        ],
      },
      {
        id: "bitters",
        title: "Біттери (100 мл)",
        dishes: [
          { name: "Єгермайстер", price: 150 },
          { name: "Ксента Абсента", price: 230 },
          { name: "Бехеровка", price: 150 },
        ],
      },
      {
        id: "rum",
        title: "Ром (100 мл)",
        dishes: [
          { name: "Бакарді бланка", price: 120 },
          { name: "Бакарді блек", price: 140 },
          { name: "Lambs Spiced", price: 150 },
        ],
      },
      {
        id: "gin",
        title: "Джин (100 мл)",
        dishes: [
          { name: "Гордонс", price: 150 },
          { name: "Бомбей Сапфір", price: 220 },
        ],
      },
      {
        id: "cognac",
        title: "Коньяк (100 мл)",
        dishes: [
          { name: "«Хеннессі VS»", price: 500 },
          { name: "«Хеннессі VSOP»", price: 900 },
          { name: "«Хеннессі XO»", price: 2600 },
          { name: "«Карпати» 8 років", price: 340 },
          { name: "«Тиса» 6 років", price: 300 },
          { name: "«Закарпатський» 4 роки", price: 120 },
          { name: "«Старий Кахеті» 5 років", price: 120 },
        ],
      },
      {
        id: "liqueurs",
        title: "Лікери (100 мл)",
        dishes: [
          { name: "Бейліс Оріджинал", price: 180 },
          { name: "Малібу", price: 150 },
          { name: "Самбука", price: 140 },
          { name: "Апероль", price: 140 },
          { name: "Брендбар лікер в асортименті", price: 120 },
        ],
      },
      {
        id: "aperitifs",
        title: "Аперетиви (100 мл)",
        dishes: [
          { name: "«Мартіні Біанка»", price: 100 },
          { name: "«Мартіні Россо»", price: 100 },
          { name: "«Мартіні Фієро»", price: 100 },
          { name: "«Кампарі»", price: 160 },
        ],
      },
      {
        id: "beer",
        title: "Пиво",
        dishes: [
          { name: "«Карлсберг» (кегове) 0,33", price: 70 },
          { name: "«Карлсберг» (кегове) 0,5", price: 90 },
          { name: "«Корона» (бут.) 0,33", price: 140 },
          { name: "«Карлсберг» (бут.) безалкогольне 0,5", price: 90 },
        ],
      },
      {
        id: "beer-snacks",
        title: "До пива",
        dishes: [
          { name: "Балик сьомги", weight: "100", price: 350 },
          { name: "Бастурма", weight: "100", price: 250 },
          { name: "Хамон від Вакули", weight: "50", price: 200 },
        ],
      },
      {
        id: "wine-georgia",
        title: "Вина Грузії (150 мл / пляшка)",
        dishes: [
          { name: "«Цинандалі» (біле сухе)", price: 120, priceBottle: 600 },
          { name: "«Алазанська долина» (біле напівсолодке)", price: 120, priceBottle: 600 },
          { name: "«Сапераві» (червоне сухе)", price: 120, priceBottle: 600 },
          { name: "«Алазанська долина» (червоне напівсолодке)", price: 120, priceBottle: 600 },
          { name: "«Кіндзмараулі» (червоне напівсолодке)", price: 225, priceBottle: 1125 },
          { name: "«Хванчкара» (червоне напівсолодке)", price: 330, priceBottle: 1650 },
        ],
      },
      {
        id: "wine-world",
        title: "Карта вин (150 мл / пляшка)",
        dishes: [
          { name: "Prosecco Spumante extra dry (Vigna Docarino, 2023)", price: null, priceBottle: 1050 },
          { name: "Prosecco Spumante rose extra dry (Vigna Docarino, 2022)", price: null, priceBottle: 1275 },
          { name: "Prosecco Spumante extra dry (Stocco, 2024)", price: 135, priceBottle: 675 },
          { name: "Pinot Grigio (Fabiano, 2022)", price: 150, priceBottle: 750 },
          { name: "Pinot Grigio rose (Fabiano, 2021)", price: 150, priceBottle: 750 },
          { name: "Le Coste Soave (Fabiano, 2022)", price: 150, priceBottle: 750 },
          { name: "Chianti (Contepassi, 2020)", price: 165, priceBottle: 825 },
          { name: "Primitivo (Feudis, 2020)", price: 165, priceBottle: 825 },
          { name: "Martini Asti DOGG", price: null, priceBottle: 975 },
          { name: "Mondoro Asti", price: null, priceBottle: 1050 },
          { name: "Cava Banda Azul rose (Paternina, 2019)", price: 165, priceBottle: 825 },
          { name: "Cava Brut", price: 135, priceBottle: 675 },
          { name: "Tempranillo (Paternina, 2020)", price: null, priceBottle: 600 },
          { name: "Pinot Noir La Veilante (Domaine Lapo, 2020)", price: null, priceBottle: 1050 },
          { name: "Chablis (Emile Durand, 2021)", price: null, priceBottle: 1350 },
          { name: "White Zinfandel (Compass Point, 2021)", price: 150, priceBottle: 750 },
          { name: "Sauvignon Blanc (Waipapa Bay, 2021)", price: 195, priceBottle: 975 },
        ],
      },
    ],
  },

  // ─── 7. БАНКЕТНЕ МЕНЮ ─────────────────────────────────────────────
  {
    id: "banquet",
    name: "Банкетне меню",
    subCategories: [
      {
        id: "banquet-signature",
        title: "Фірмові банкетні страви",
        dishes: [
          { name: "Риба фарширована (судак або щука)", weight: "1000", price: 1500, highlight: true },
          { name: "Короп фарширований", weight: "1000", price: 900 },
          { name: "Качка запечена з яблуками", weight: "1000", price: 950 },
          { name: "Стегно індички з грушами", weight: "1000", price: 1700 },
          { name: "Бараняча ніжка запечена", weight: "1000", price: 1900 },
          { name: "Боковина поросяча на вертелі", weight: "1000", price: 1500 },
          { name: "«На заздрість сусідам»", desc: "реберця свинячі, реберця яловичі, ягнятина, качині ніжки, качина грудка, печериці, корнішони, гриль, аджика", weight: "2200/500/200", price: 3800 },
        ],
      },
      {
        id: "banquet-cold",
        title: "Холодні банкетні страви",
        dishes: [
          { name: "Лісова галявина (асорті з грибів)", weight: "300/50", price: 440 },
          { name: "Рулетики з кабачків або баклажанів", weight: "200", price: 300 },
          { name: "Рулетики з хамоном та авокадо", weight: "150", price: 330 },
          { name: "Млинці шпинатні з сиром", weight: "200", price: 220 },
          { name: "Закуска рибна з сьомгою та моцарелою", weight: "150", price: 550 },
          { name: "Закуска «Українська щедрість»", desc: "Фета в кунжуті з виноградом, моцарела з томатами черрі, камамбер з каперсами", weight: "250", price: 450 },
        ],
      },
      {
        id: "banquet-hot",
        title: "Гарячі банкетні страви",
        dishes: [
          { name: "Холодець з язиком", weight: "1000", price: 1500 },
          { name: "Студенець з язиком", weight: "1000", price: 1000 },
          { name: "Рибні кульки", weight: "200", price: 300 },
          { name: "Крученики з курятини з сиром", weight: "200", price: 300 },
          { name: "Мʼясні бочонки з курячого філе", weight: "150", price: 330 },
          { name: "Поросяча вежа з овочами або з печерицями", weight: "250", price: 370 },
        ],
      },
    ],
  },
];
