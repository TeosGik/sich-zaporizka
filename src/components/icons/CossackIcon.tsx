import type { SVGProps } from "react";

/**
 * Логотип-герб «Запорозька Січ» — козак у стилі мультика
 * «Як козаки...» (Грай): лиса голова, довжелезний чуб-оселедець,
 * вуса хвилями, біла вишиванка, червоні шаровари з поясом.
 */
export function CossackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* ─── Фон-кружок ───────────────────────────────────────── */}
      <circle cx="50" cy="50" r="48" fill="#f5efe3" />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#b8893d" strokeWidth="1.2" />

      {/* ─── ХВОСТ ЧУБА (oseledets) — звивається догори за головою ─ */}
      <path
        d="M55 20 Q62 8 75 6 Q86 8 84 18 Q82 26 73 28"
        stroke="#0a0a0a"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M72 12 Q82 14 84 22"
        stroke="#0a0a0a"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* ─── ШАРОВАРИ (червоні, широкі) ─────────────────────────── */}
      <path
        d="M32 60 Q30 72 33 86 Q36 90 42 90 Q47 86 48 78 Q50 76 52 78 Q53 86 58 90 Q64 90 67 86 Q70 72 68 60 Z"
        fill="#c41e3a"
      />

      {/* ─── ПОЯС (червоніший) з вузлом ─────────────────────────── */}
      <rect x="30" y="56" width="40" height="8" rx="2" fill="#8b1428" />
      <path d="M63 56 Q67 60 65 64 L70 65 L67 60 Z" fill="#5a0a18" />
      <path d="M63 60 Q66 62 65 65" stroke="#3d0612" strokeWidth="0.5" fill="none" />

      {/* ─── БІЛА ВИШИВАНКА (сорочка) ──────────────────────────── */}
      <path
        d="M30 36 Q30 33 33 31 L42 31 Q44 33 50 33 Q56 33 58 31 L67 31 Q70 33 70 36 L71 58 L29 58 Z"
        fill="#fffdf5"
      />

      {/* Декоративна вишивка червоним по вирізу */}
      <path
        d="M44 33 L46 36 L48 33 L50 36 L52 33 L54 36 L56 33"
        stroke="#a02828"
        strokeWidth="0.6"
        fill="none"
      />
      <path d="M44 36 L56 36" stroke="#a02828" strokeWidth="0.4" />

      {/* Вертикальна стрічка вишивки по центру */}
      <path
        d="M50 33 L50 56"
        stroke="#a02828"
        strokeWidth="0.6"
        strokeDasharray="0.8 1"
      />

      {/* ─── ЧОБОТИ (чорні) ───────────────────────────────────── */}
      <ellipse cx="40" cy="93" rx="6" ry="2.5" fill="#0a0a0a" />
      <ellipse cx="60" cy="93" rx="6" ry="2.5" fill="#0a0a0a" />
      <path d="M36 88 L36 93 L46 93 L46 88 Z" fill="#0a0a0a" />
      <path d="M54 88 L54 93 L64 93 L64 88 Z" fill="#0a0a0a" />

      {/* ─── РУКИ (з білими рукавами) ──────────────────────────── */}
      {/* Ліва рука вниз (на пояс) */}
      <ellipse
        cx="27"
        cy="44"
        rx="4"
        ry="11"
        fill="#fffdf5"
        transform="rotate(-15 27 44)"
      />
      <circle cx="24" cy="55" r="3.5" fill="#e8c89f" />

      {/* Права рука з трубкою */}
      <ellipse
        cx="73"
        cy="44"
        rx="4"
        ry="11"
        fill="#fffdf5"
        transform="rotate(15 73 44)"
      />
      <circle cx="76" cy="55" r="3.5" fill="#e8c89f" />

      {/* ─── ТРУБКА у правій руці ──────────────────────────────── */}
      <line
        x1="78"
        y1="53"
        x2="86"
        y2="46"
        stroke="#1a0805"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="86" cy="45" rx="3" ry="3.5" fill="#5a3a1a" transform="rotate(30 86 45)" />
      <ellipse cx="86" cy="44" rx="1.8" ry="2.3" fill="#7a1f1f" transform="rotate(30 86 45)" />
      <circle cx="86.5" cy="43.5" r="1" fill="#ff8040" />

      {/* Хмаринки диму над трубкою */}
      <circle cx="88" cy="38" r="2" fill="#aaa" opacity="0.6" />
      <circle cx="91" cy="32" r="2.5" fill="#aaa" opacity="0.45" />
      <circle cx="93" cy="25" r="2.8" fill="#aaa" opacity="0.32" />

      {/* ─── ГОЛОВА (лиса, кругла, кольору шкіри) ──────────────── */}
      <ellipse cx="50" cy="22" rx="11" ry="12" fill="#e8c89f" />

      {/* Підтемнення на маківці для лисини */}
      <ellipse cx="50" cy="14" rx="9" ry="3" fill="#c8a875" opacity="0.6" />

      {/* ─── ВЕЛИКІ ЧОРНІ БРОВИ ────────────────────────────────── */}
      <path
        d="M43 17 Q46 15 49 17"
        stroke="#0a0a0a"
        strokeWidth="2"
        fill="#0a0a0a"
        strokeLinecap="round"
      />
      <path
        d="M51 17 Q54 15 57 17"
        stroke="#0a0a0a"
        strokeWidth="2"
        fill="#0a0a0a"
        strokeLinecap="round"
      />

      {/* ─── ОЧІ ───────────────────────────────────────────────── */}
      <circle cx="46" cy="21" r="1.8" fill="white" />
      <circle cx="54" cy="21" r="1.8" fill="white" />
      <circle cx="46.5" cy="21.5" r="1" fill="#0a0a0a" />
      <circle cx="54.5" cy="21.5" r="1" fill="#0a0a0a" />

      {/* ─── НІС ─────────────────────────────────────────────── */}
      <ellipse cx="50" cy="24" rx="1.5" ry="2" fill="#d8a878" />

      {/* ─── УСМІШКА (відкритий рот, видно зуби) ───────────────── */}
      <path d="M46 28 Q50 32 54 28 L54 29.5 Q50 33 46 29.5 Z" fill="#7a1f1f" />
      <rect x="47" y="28.5" width="6" height="1.5" fill="#fffdf5" />

      {/* ─── ВЕЛИЧЕЗНІ ВУСА (хвилями, розхиляються в боки) ────── */}
      {/* Ліва частина вуса */}
      <path
        d="M44 30 Q40 33 36 34 Q30 35 24 32 Q18 28 14 22"
        stroke="#0a0a0a"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M44 32 Q41 36 36 38 Q30 39 24 36"
        stroke="#0a0a0a"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Права частина вуса */}
      <path
        d="M56 30 Q60 33 64 34 Q70 35 76 32 Q82 28 86 22"
        stroke="#0a0a0a"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M56 32 Q59 36 64 38 Q70 39 76 36"
        stroke="#0a0a0a"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
