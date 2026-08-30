type Item = { title: string; body: string; n?: string };

type FeatureGridProps = { items: Item[]; cols?: 2 | 3 | 4 };

export function FeatureGrid({ items, cols = 3 }: FeatureGridProps) {
  const grid =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <div className={`grid gap-5 ${grid}`}>
      {items.map((item) => (
        <div key={item.title} className="glass module-card rounded-2xl p-6">
          {item.n && (
            <div className="text-prevayl-gold text-xs font-mono tracking-widest mb-2">{item.n}</div>
          )}
          <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-prevayl-muted text-sm leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
