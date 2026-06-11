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
      "https://www.google.com/maps/place/Запорозька+Січ/@47.8600937,35.0601531,15z/data=!4m6!3m5!1s0x40dc615282efc5b5:0x17ffb4975335f72!8m2!3d47.8591651!4d35.0641442",
    geo: { lat: 47.8591651, lng: 35.0641442 },
  },

  hours: {
    label: "Щодня 11:00 – 22:00",
    open: "11:00",
    close: "22:00",
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
