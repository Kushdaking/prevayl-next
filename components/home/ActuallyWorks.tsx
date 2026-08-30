import { features } from "@/content/site";

const icons = [
  <svg key="1" width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 17H7A5 5 0 017 7h2M15 7h2a5 5 0 010 10h-2M8 12h8" /></svg>,
  <svg key="2" width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  <svg key="3" width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
];

/** Edit title / items in content/site.ts → features */
export function ActuallyWorks() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-4xl sm:text-5xl text-prevayl-gold mb-4">
            {features.title}
          </h2>
          <p className="text-prevayl-soft/80 text-lg leading-relaxed">{features.lead}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.items.map((f, i) => (
            <div key={f.title} className="glass module-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-prevayl-gold/10 flex items-center justify-center mb-5 border border-prevayl-gold/20">
                {icons[i]}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-prevayl-muted text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
