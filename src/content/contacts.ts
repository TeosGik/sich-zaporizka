// Реальні контакти ресторану.

export const contacts = {
  phone: "+38 (097) 724-79-79",
  phoneHref: "tel:+380977247979",

  telegram: {
    handle: "@sichzaporizka",
    url: "https://t.me/sichzaporizka",
  },

  viber: {
    display: "+38 097 724 79 79",
    url: "viber://chat?number=%2B380977247979",
  },

  email: "info@sich-zaporizka.com.ua",
  emailHref: "mailto:info@sich-zaporizka.com.ua",

  address: {
    short: "вул. Будинок Відпочинку, 42, Хортиця",
    full: "вул. Будинок Відпочинку, 42, острів Хортиця, м. Запоріжжя, 69000, Україна",
    street: "вул. Будинок Відпочинку, 42",
    mapsUrl:
      "https://maps.google.com/?q=вул.+Будинок+Відпочинку+42,+Хортиця,+Запоріжжя",
    geo: { lat: 47.8388, lng: 35.0814 },
  },

  hours: {
    label: "Щодня 11:00 – 23:00",
    open: "11:00",
    close: "23:00",
    days: "Mo-Su",
  },

  social: {
    instagram: {
      handle: "@sichzaporizka",
      url: "https://www.instagram.com/sichzaporizka",
    },
    facebook: {
      handle: "Запорозька Січ",
      url: "https://www.facebook.com/sichzaporizka",
    },
  },
} as const;
