import type { SVGProps } from "react";

/**
 * Логотип-герб «Запорозька Січ» — козак у стилі мультика «Як козаки...».
 * Сидить на лавці, курить трубку, з оселедцем-чубом і довгими вусами.
 * Векторний — чітко виглядає на 32px і масштабується без втрат.
 */
export function CossackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Фоновий кружок — пергаментно-кремовий з золотим обідком */}
      <circle cx="50" cy="50" r="48" fill="#f5efe3" />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#b8893d" strokeWidth="1.2" />

      {/* ─── Лавка з дерева, на якій він сидить ─── */}
      <rect x="18" y="69" width="64" height="5" rx="1.5" fill="#6b4221" />
      <line x1="18" y1="71.5" x2="82" y2="71.5" stroke="#3d2210" strokeWidth="0.6" />

      {/* ─── Ноги, що звисають з лавки ─── */}
      {/* Ліва нога (шаровари) */}
      <path
        d="M40 74 Q38 82 41 90"
        stroke="#7a1f1f"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="42" cy="93" rx="5" ry="3" fill="#1a0a05" />

      {/* Права нога */}
      <path
        d="M55 74 Q57 82 54 90"
        stroke="#7a1f1f"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="53" cy="93" rx="5" ry="3" fill="#1a0a05" />

      {/* ─── Тулуб — червона сорочка ─── */}
      <path
        d="M31 48 Q31 44 35 42 Q42 40 50 40 Q58 40 65 42 Q69 44 69 48 L70 69 L30 69 Z"
        fill="#a02828"
      />

      {/* ─── Темна жилетка зверху ─── */}
      <path
        d="M37 46 L37 68 L42 68 L42 51 Q50 49 58 51 L58 68 L63 68 L63 46 L54 42 L46 42 Z"
        fill="#2a1f14"
      />
      {/* Золота смужка на жилетці */}
      <line x1="50" y1="52" x2="50" y2="66" stroke="#b8893d" strokeWidth="0.7" />

      {/* ─── Ліва рука (на коліні) ─── */}
      <ellipse
        cx="28"
        cy="58"
        rx="4"
        ry="11"
        fill="#a02828"
        transform="rotate(-15 28 58)"
      />
      <circle cx="32" cy="68" r="3" fill="#e0bd91" />

      {/* ─── Права рука тримає трубку ─── */}
      <ellipse
        cx="66"
        cy="54"
        rx="4"
        ry="10"
        fill="#a02828"
        transform="rotate(35 66 54)"
      />
      <circle cx="71" cy="60" r="3" fill="#e0bd91" />

      {/* ─── Голова ─── */}
      <circle cx="50" cy="26" r="13" fill="#e8c89f" />

      {/* ─── Лиса маківка з оселедцем ─── */}
      {/* Темна шапочка волосся (показує що голова голена) */}
      <path
        d="M40 19 Q50 13 60 17 Q62 21 60 23 Q50 21 40 23 Q38 21 40 19 Z"
        fill="#1a0805"
      />
      {/* Оселедець (довгий чуб, що звисає на бік) */}
      <path
        d="M58 19 Q72 18 76 28 Q78 38 70 42 Q66 42 64 38"
        stroke="#1a0805"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M68 41 Q70 44 67 46"
        stroke="#1a0805"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* ─── Брови (товсті, козацькі) ─── */}
      <path
        d="M42 25 L46 24 M54 24 L58 25"
        stroke="#1a0805"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ─── Очі (примружені, усміхнені) ─── */}
      <path
        d="M43 29 Q45 31 47 29 M53 29 Q55 31 57 29"
        stroke="#1a0805"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* ─── Ніс ─── */}
      <path
        d="M50 30 Q48 34 50 36"
        stroke="#a07050"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* ─── Великі звисаючі вуса ─── */}
      <path
        d="M36 39 Q42 41 48 40 L50 39 L52 40 Q58 41 64 39 Q66 44 62 49 Q56 51 52 49 L50 47 L48 49 Q44 51 38 49 Q34 44 36 39 Z"
        fill="#1a0805"
      />

      {/* ─── Маленький усмішливий ротик під вусами ─── */}
      <path d="M47 45 Q50 47 53 45" stroke="#5a3010" strokeWidth="0.8" fill="none" />

      {/* ─── Трубка ─── */}
      {/* Цибух (довга паличка від рота до правої руки) */}
      <line
        x1="59"
        y1="44"
        x2="73"
        y2="58"
        stroke="#1a0805"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Чашка трубки (під кутом) */}
      <ellipse cx="75" cy="58" rx="4.5" ry="5" fill="#5a3a1a" transform="rotate(35 75 58)" />
      <ellipse cx="75" cy="57" rx="3" ry="3.5" fill="#7a1f1f" transform="rotate(35 75 58)" />
      {/* Жар у чашці */}
      <circle cx="76" cy="56" r="1.3" fill="#ff8040" />

      {/* ─── Хмаринки диму ─── */}
      <circle cx="80" cy="48" r="2.5" fill="#cccccc" opacity="0.6" />
      <circle cx="83" cy="40" r="3" fill="#cccccc" opacity="0.5" />
      <circle cx="86" cy="30" r="3.5" fill="#cccccc" opacity="0.4" />
      <circle cx="88" cy="20" r="4" fill="#cccccc" opacity="0.28" />
    </svg>
  );
}
