import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { contacts } from "@/content/contacts";
import { navLinks } from "@/lib/nav";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-sich-ink text-sich-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Бренд + опис */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl">{siteConfig.name}</h2>
            <p className="max-w-xs text-sm leading-relaxed text-sich-cream/70">
              {siteConfig.description}
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={contacts.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram: ${contacts.social.instagram.handle}`}
                className="rounded-full border border-sich-cream/30 p-2 transition-colors hover:bg-sich-cream/10"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={contacts.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-sich-cream/30 p-2 transition-colors hover:bg-sich-cream/10"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Контакти */}
          <div className="space-y-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-sich-cream/60">
              Контакти
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 opacity-60" />
                <a href={contacts.phoneHref} className="hover:text-sich-gold">
                  {contacts.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 opacity-60" />
                <a href={contacts.emailHref} className="hover:text-sich-gold">
                  {contacts.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 opacity-60" />
                <a
                  href={contacts.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sich-gold"
                >
                  {contacts.address.full}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 opacity-60" />
                <span>{contacts.hours.label}</span>
              </li>
            </ul>
          </div>

          {/* Навігація */}
          <div className="space-y-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-sich-cream/60">
              Розділи
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-sich-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-sich-cream/15 pt-6 text-xs text-sich-cream/50 sm:flex-row">
          <span>© {year} {siteConfig.name}. Усі права захищені.</span>
          <span>о. Хортиця · Запоріжжя · Україна</span>
        </div>
      </div>
    </footer>
  );
}
