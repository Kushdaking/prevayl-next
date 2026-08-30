import { Hero } from "@/components/home/Hero";
import { ActuallyWorks } from "@/components/home/ActuallyWorks";
import { BuiltForEveryone } from "@/components/home/BuiltForEveryone";
import { PlatformModules } from "@/components/home/PlatformModules";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Homepage — composes all sections from content/site.ts
 * Edit copy in content/site.ts, not here.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ActuallyWorks />
      <BuiltForEveryone />
      <PlatformModules />
      <PricingTeaser />
      <FinalCTA />
    </main>
  );
}
