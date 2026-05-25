"use client";

import { useEffect, useRef } from "react";

/**
 * Легкий parallax-хук: оновлює CSS-змінну --parallax-y на елементі залежно
 * від його позиції у viewport. Без бібліотек.
 *
 *  - strength: множник зсуву (0.3 = повільніше за scroll на 70%)
 *  - вимикається повністю при prefers-reduced-motion: reduce
 *  - rAF-throttled, passive scroll listener
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Прогрес: -1 (елемент тільки-но з'явився знизу) → +1 (виходить зверху)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = -progress * strength * 100; // px
      el.style.setProperty("--parallax-y", `${offset}px`);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}
