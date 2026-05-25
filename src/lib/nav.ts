export const navLinks = [
  { href: "#about", label: "Січ" },
  { href: "#afisha", label: "Афіша" },
  { href: "#zones", label: "Зони" },
  { href: "#menu", label: "Меню" },
  { href: "#location", label: "Як доїхати" },
] as const;

export type NavLink = (typeof navLinks)[number];
