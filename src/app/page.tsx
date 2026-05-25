import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ChefRecommends } from "@/components/sections/ChefRecommends";
import { Afisha } from "@/components/sections/Afisha";
import { Zones } from "@/components/sections/Zones";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Banquets } from "@/components/sections/Banquets";
import { Location } from "@/components/sections/Location";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { Divider } from "@/components/shared/Divider";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export default function HomePage() {
  return (
    <>
      {/* Hero видимий одразу — без reveal */}
      <Hero />

      <RevealOnScroll>
        <Divider className="my-16" />
      </RevealOnScroll>

      <RevealOnScroll>
        <About />
      </RevealOnScroll>

      <RevealOnScroll>
        <ChefRecommends />
      </RevealOnScroll>

      <RevealOnScroll>
        <Afisha />
      </RevealOnScroll>

      <RevealOnScroll>
        <Zones />
      </RevealOnScroll>

      <RevealOnScroll>
        <Menu />
      </RevealOnScroll>

      <RevealOnScroll>
        <Gallery />
      </RevealOnScroll>

      <RevealOnScroll>
        <Banquets />
      </RevealOnScroll>

      <RevealOnScroll>
        <Location />
      </RevealOnScroll>

      <RevealOnScroll>
        <CtaBlock />
      </RevealOnScroll>
    </>
  );
}
