import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Facts } from "@/components/sections/Facts";
import { Afisha } from "@/components/sections/Afisha";
import { Zones } from "@/components/sections/Zones";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Banquets } from "@/components/sections/Banquets";
import { Location } from "@/components/sections/Location";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { Divider } from "@/components/shared/Divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider className="my-16" />
      <About />
      <Facts />
      <Afisha />
      <Zones />
      <Menu />
      <Gallery />
      <Banquets />
      <Location />
      <CtaBlock />
    </>
  );
}
