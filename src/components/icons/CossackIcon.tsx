import type { SVGProps } from "react";

/**
 * Логотип-герб «Запорозька Січ» — стилізована голова козака
 * з оселедцем, вусами, трубкою та хмаринкою диму.
 * Виглядає чисто на маленьких розмірах (32px+) і добре масштабується.
 */
export function CossackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Фон-кружок (пергаментно-кремовий) */}
      <circle cx="50" cy="50" r="48" fill="#f5efe3" />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#b8893d" strokeWidth="1.2" />

      {/* Голова — еліпс кольору шкіри */}
      <ellipse cx="48" cy="50" rx="20" ry="22" fill="#e0bd91" />

      {/* Оселедець (козацький чуб) — довгий локон, що звисає */}
      <path
        d="M48 30 Q52 26 58 28 Q66 34 64 44 Q60 50 56 48 Q54 44 52 38 Q50 34 48 32 Z"
        fill="#2a1f14"
      />
      {/* Маленький хвостик зверху */}
      <path
        d="M50 30 Q56 22 62 26"
        stroke="#2a1f14"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Брови */}
      <path
        d="M38 47 L44 45 M52 45 L58 47"
        stroke="#2a1f14"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Очі (примружені, як у досвідченого козака) */}
      <path
        d="M40 51 L44 51 M52 51 L56 51"
        stroke="#2a1f14"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Ніс — невеликий */}
      <path
        d="M48 53 Q47 57 49 59"
        fill="none"
        stroke="#a07050"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Вуса — довгі, що звисають донизу (головна риса) */}
      <path
        d="M40 62 Q44 64 48 63 Q52 64 56 62 Q60 64 60 70 Q56 76 50 76 Q44 76 40 70 Q40 64 40 62 Z"
        fill="#3d2818"
      />
      <path
        d="M44 64 Q48 65 52 64"
        stroke="#2a1f14"
        strokeWidth="0.6"
        fill="none"
      />

      {/* Трубка — довга, виглядає з-під вусів */}
      <line
        x1="58"
        y1="71"
        x2="78"
        y2="76"
        stroke="#2a1f14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Чашка трубки */}
      <ellipse
        cx="80"
        cy="75"
        rx="4"
        ry="5"
        fill="#5a3a1a"
        transform="rotate(20 80 75)"
      />
      <ellipse
        cx="80"
        cy="74"
        rx="2.5"
        ry="3"
        fill="#7a1f1f"
        transform="rotate(20 80 75)"
      />
      <circle cx="81" cy="73" r="1" fill="#ffa040" />

      {/* Хмаринки диму */}
      <circle cx="83" cy="65" r="2.5" fill="#cccccc" opacity="0.55" />
      <circle cx="86" cy="58" r="3" fill="#cccccc" opacity="0.45" />
      <circle cx="89" cy="50" r="3.5" fill="#cccccc" opacity="0.35" />

      {/* Шия / коси сорочки внизу */}
      <path
        d="M36 80 Q48 76 60 80 L60 95 Q48 92 36 95 Z"
        fill="#7a1f1f"
      />
      {/* Декоративна полоска на сорочці */}
      <path
        d="M40 86 L60 86"
        stroke="#b8893d"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="48" cy="83" r="0.6" fill="#b8893d" />
    </svg>
  );
}
