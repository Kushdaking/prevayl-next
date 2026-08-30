import { LinkButton } from "@/components/ui/Button";
import { hero } from "@/content/site";

const toneClass = {
  gold: "text-prevayl-gold",
  blue: "text-prevayl-info",
  green: "text-prevayl-success",
} as const;

/** Hero — edit lines, CTAs, liveLoads in content/site.ts → hero */
export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-radial-glow">
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-prevayl-gold/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-4">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
            {hero.lines.map((line, i) => (
              <span key={line}>
                {i === hero.gradientLine ? (
                  <span className="text-gold-gradient">{line}</span>
                ) : (
                  line
                )}
                {i < hero.lines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-prevayl-soft/80 text-lg max-w-lg mb-8 leading-relaxed">
            {hero.sub.split(hero.highlightInSub).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-prevayl-gold font-medium">{hero.highlightInSub}</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
          <div className="flex flex-wrap gap-4">
            <LinkButton href={hero.primaryCta.href} size="md">
              {hero.primaryCta.label}
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </LinkButton>
            <LinkButton href={hero.secondaryCta.href} variant="ghost" size="md">
              {hero.secondaryCta.label}
            </LinkButton>
          </div>
          <p className="mt-6 text-sm text-prevayl-muted">{hero.note}</p>
        </div>

        <div className="relative">
          <div className="glass rounded-2xl p-1 shadow-gold-sm overflow-hidden">
            <div className="bg-prevayl-navy-2 rounded-xl p-4 border border-prevayl-navy-4">
              <div className="flex items-center gap-2 mb-4 text-xs text-prevayl-muted">
                <span className="text-prevayl-gold font-semibold tracking-wider">PREVAYL</span>
                <span className="text-prevayl-slate">|</span>
                <span>Dispatch</span>
                <span className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-prevayl-success" />
                  <span className="text-prevayl-success">Live</span>
                </span>
              </div>

              <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-prevayl-navy-3 to-prevayl-navy relative overflow-hidden border border-prevayl-navy-4">
                <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 400 250" fill="none" aria-hidden>
                  <path d="M40 120 Q100 80 160 100 T280 90 T360 110" stroke="#C9A84C" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 4" />
                  <path d="M60 160 Q140 140 200 150 T340 140" stroke="#C9A84C" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="80" cy="130" r="4" fill="#C9A84C" />
                  <circle cx="180" cy="105" r="4" fill="#60a5fa" />
                  <circle cx="300" cy="95" r="4" fill="#C9A84C" />
                  <circle cx="340" cy="145" r="4" fill="#10b981" />
                  <text x="70" y="150" fill="#9a9894" fontSize="8">Detroit</text>
                  <text x="290" y="85" fill="#9a9894" fontSize="8">Atlanta</text>
                  <text x="320" y="165" fill="#9a9894" fontSize="8">Miami</text>
                </svg>
                <div className="absolute top-3 left-3 glass px-3 py-1.5 rounded-lg text-xs">
                  <span className="text-prevayl-gold font-mono">{hero.liveStats.activeLoads}</span> active loads
                </div>
                <div className="absolute bottom-3 right-3 glass px-3 py-1.5 rounded-lg text-xs">
                  AI Match <span className="text-prevayl-success font-mono">{hero.liveStats.aiMatch}</span>
                </div>
              </div>

              <div className="mt-3 space-y-1.5 text-xs font-mono">
                {hero.liveLoads.map((load) => (
                  <div key={load.lane} className="flex justify-between text-prevayl-muted px-1">
                    <span>{load.lane}</span>
                    <span className={toneClass[load.tone]}>{load.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
