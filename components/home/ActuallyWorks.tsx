import { Band } from "@/components/ui/Band";
import { features } from "@/content/site";

export function ActuallyWorks() {
  return (
    <Band image="/art/works.webp" align="left" height="tall">
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-prevayl-gold leading-[0.95] tracking-wide mb-6">
        {features.title}
      </h2>
      <p className="text-prevayl-soft/85 text-lg leading-relaxed mb-8">{features.lead}</p>
      <div className="space-y-5">
        {features.items.map((it) => (
          <div key={it.title} className="border-l-2 border-prevayl-gold/40 pl-5">
            <h3 className="text-white font-semibold text-lg mb-1">{it.title}</h3>
            <p className="text-prevayl-soft/70 text-[15px] leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </Band>
  );
}
