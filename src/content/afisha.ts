// Тижневі ритуали Січі — плейсхолдер-копірайт, замініть на реальні події.

export type AfishaItem = {
  id: string;
  day: string;
  title: string;
  description: string;
  // Колір градієнт-плейсхолдера. Заміниться на справжнє фото з public/images/afisha/
  gradient: { from: string; via: string; to: string };
};

export const afisha: readonly AfishaItem[] = [
  {
    id: "cossack-sunday",
    day: "Щонеділі",
    title: "Козацька неділя",
    description:
      "Живий гурт з кобзою та сопілкою, козацькі думи й народні танці під аромат полум'я. Сімейний день з обідньою рибою на печі.",
    gradient: { from: "#3c4a2a", via: "#1f1a14", to: "#7a1f1f" },
  },
  {
    id: "honey-evening",
    day: "Щопʼятниці",
    title: "Вечір медовухи",
    description:
      "Дегустація п'яти видів домашніх медовух від місцевих пасічників. До медовухи — печена в дровах ковбаса й сало з часником.",
    gradient: { from: "#7a1f1f", via: "#5a1414", to: "#1f1a14" },
  },
  {
    id: "kulesh-class",
    day: "Друга субота місяця",
    title: "Майстер-клас з кулешу",
    description:
      "Готуємо кулеш на багатті разом з шеф-кухарем. Дізнаєтесь, як вибрати пшоно, чому додаємо сало пізно і де ховається секрет диму.",
    gradient: { from: "#b8893d", via: "#3c4a2a", to: "#1f1a14" },
  },
  {
    id: "pokrova",
    day: "14 жовтня",
    title: "Свято Покрови",
    description:
      "Щорічне велике свято — день козацької слави. Реконструкція, спільний борщ на 200 осіб, козачка під ніч і феєрверк над Дніпром.",
    gradient: { from: "#1f1a14", via: "#7a1f1f", to: "#b8893d" },
  },
];
