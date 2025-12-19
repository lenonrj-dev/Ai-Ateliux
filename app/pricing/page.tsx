import { PricingHero } from "../../components/sections/PricingHero";
import { LogoBanner } from "../../components/sections/LogoBanner";
import { PricingFAQ } from "../../components/sections/PricingFAQ";
import { PricingFooter } from "../../components/layout/PricingFooter";

export default function PricingPage() {
  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.08),transparent_35%)]" />
      <PricingHero />
      <LogoBanner />
      <PricingFAQ />
      
    </div>
  );
}
