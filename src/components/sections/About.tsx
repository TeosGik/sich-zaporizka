import Image from "next/image";

import { about } from "@/content/about";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative bg-linen py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16 lg:px-8 lg:gap-24">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/about/main.jpg"
            alt="Інтер'єр ресторану Запорозька Січ — дух минулого й смак сьогодення"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            {about.eyebrow}
          </p>
          <h2
            id="about-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
          >
            {about.title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-sich-ink-soft sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-sich-gold/60 pl-4 font-serif text-lg italic text-sich-ink/70">
            {about.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
