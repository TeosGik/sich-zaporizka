// Тижневі ритуали Січі.

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
    id: "cossack-sunday",
    day: "Щонеділі",
    title: "Козацька неділя",
    description:
      "Живий гурт з кобзою та сопілкою, козацькі думи й народні танці під аромат полум'я. Сімейний день з обідньою рибою на печі.",
    src: "/images/afisha/sunday.jpg",
    gradient: { from: "#3c4a2a", via: "#1f1a14", to: "#7a1f1f" },
  },
  {
    id: "khrenovukha-evening",
    day: "Щопʼятниці",
    title: "Вечір хреновухи",
    description:
      "Дегустація пʼяти видів домашніх хреновух від нашого бармена. До хреновухи — печена в дровах ковбаса й сало з часником.",
    src: "/images/afisha/horenovukha.jpg",
    gradient: { from: "#7a1f1f", via: "#5a1414", to: "#1f1a14" },
  },
  {
    id: "kulesh-class",
    day: "Друга субота місяця",
    title: "Майстер-клас з кулешу",
    description:
      "Готуємо кулеш на багатті разом з шеф-кухарем. Дізнаєтесь, як вибрати пшоно, чому додаємо сало пізно і де ховається секрет диму.",
    src: "/images/afisha/kulesh.jpg",
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
];
