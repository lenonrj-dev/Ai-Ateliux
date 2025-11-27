import { GlobeHero } from "../components/sections/GlobeHero";
import { Features } from "../components/sections/Features";
import { Hero } from "../components/sections/Hero";
import { Integrations } from "../components/sections/Integrations";
import { Testimonials } from "../components/sections/Testimonials";
import { Workflow } from "../components/sections/Workflow";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-black">
      <Hero />
      <GlobeHero />
      <Features />
      <Workflow />
      <Testimonials />
      <Integrations />
    </div>
  );
}
