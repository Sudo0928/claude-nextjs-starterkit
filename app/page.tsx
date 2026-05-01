import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
