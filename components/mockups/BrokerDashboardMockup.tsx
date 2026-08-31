/**
 * Broker dashboard mockup — KPI strip + active loads + recent revenue chart
 * Used on /solutions/brokers and similar broker-targeted pages
 */
export default function BrokerDashboardMockup() {
  const kpis = [
    { label: 'ACTIVE LOADS',   value: '847',   delta: '+12 today', color: '#C9A84C' },
    { label: 'GROSS MARGIN',   value: '18.4%', delta: '+1.2 pts',  color: '#10b981' },
    { label: 'AVG DAYS TO PAY', value: '23',    delta: '-3 days',  color: '#60a5fa' },
    { label: 'CARRIER RETAIN',  value: '94%',   delta: 'flat',     color: '#a78bfa' },
  ];

  const lanes = [
    { route: 'Detroit → Atlanta',   margin: 18.2, loads: 42, revenue: 184200 },
    { route: 'Phoenix → Los Angeles', margin: 22.1, loads: 38, revenue: 152400 },
    { route: 'Newark → Charlotte',  margin: 14.8, loads: 31, revenue: 124800 },
    { route: 'Chicago → Dallas',    margin: 19.5, loads: 28, revenue: 119200 },
    { route: 'Miami → Orlando',     margin: 11.2, loads: 24, revenue:  72400 },
  ];

  return (
    <svg viewBox="0 0 800 540" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="bd-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0f1a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="bd-rev" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="800" height="540" rx="14" fill="url(#bd-bg)" />

      {/* Top bar */}
      <rect x="0" y="0" width="800" height="44" rx="14" fill="#0a0f1a" />
      <rect x="0" y="32" width="800" height="12" fill="#0a0f1a" />
      <text x="22" y="28" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL · BROKER DASHBOARD</text>
      <text x="660" y="28" fill="#9a9894" fontSize="11" fontFamily="monospace">YTD · As of May 2, 9:42 AM</text>

      {/* KPI cards */}
      {kpis.map((k, i) => (
        <g key={k.label}>
          <rect x={24 + i * 192} y="60" width="180" height="86" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
          <text x={36 + i * 192} y="80" fill="#9a9894" fontSize="9" fontWeight="700" letterSpacing="1.5">{k.label}</text>
          <text x={36 + i * 192} y="115" fill="#f0f4f8" fontSize="24" fontWeight="800">{k.value}</text>
          <text x={36 + i * 192} y="135" fill={k.color} fontSize="11" fontWeight="600">{k.delta}</text>
        </g>
      ))}

      {/* Revenue chart panel (left) */}
      <rect x="24" y="166" width="468" height="220" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
      <text x="38" y="188" fill="#f0f4f8" fontSize="13" fontWeight="700">REVENUE — Last 30 Days</text>
      <text x="38" y="206" fill="#9a9894" fontSize="11">$847,200 booked · $612,400 collected</text>

      {/* Faux line chart */}
      {(() => {
        const points = [40, 55, 48, 62, 78, 70, 88, 92, 85, 98, 112, 108, 118, 125, 132];
        const maxY = 140;
        const baseY = 360;
        const baseX = 50;
        const stepX = 28;
        const path = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${baseX + i * stepX} ${baseY - v}`).join(' ');
        const area = `${path} L ${baseX + (points.length - 1) * stepX} ${baseY} L ${baseX} ${baseY} Z`;
        return (
          <>
            <path d={area} fill="url(#bd-rev)" />
            <path d={path} stroke="#10b981" strokeWidth="2" fill="none" />
            {points.map((v, i) => (
              <circle key={i} cx={baseX + i * stepX} cy={baseY - v} r="2.5" fill="#10b981" />
            ))}
          </>
        );
      })()}

      {/* Top lanes panel (right) */}
      <rect x="500" y="166" width="276" height="220" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
      <text x="514" y="188" fill="#f0f4f8" fontSize="13" fontWeight="700">TOP LANES BY REVENUE</text>
      <text x="514" y="206" fill="#9a9894" fontSize="11">Last 30 days, sorted by revenue</text>
      {lanes.map((l, i) => (
        <g key={l.route}>
          <text x="514" y={236 + i * 28} fill="#c8d8e8" fontSize="11" fontWeight="600">{l.route}</text>
          <text x="514" y={250 + i * 28} fill="#9a9894" fontSize="10" fontFamily="monospace">{l.loads} loads · {l.margin}% margin</text>
          <text x="760" y={236 + i * 28} fill="#10b981" fontSize="11" fontWeight="700" textAnchor="end">${(l.revenue / 1000).toFixed(0)}K</text>
        </g>
      ))}

      {/* Carrier health panel */}
      <rect x="24" y="406" width="752" height="106" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
      <text x="38" y="428" fill="#f0f4f8" fontSize="13" fontWeight="700">CARRIER HEALTH — 422 active</text>
      <text x="38" y="444" fill="#9a9894" fontSize="11">Vetting + insurance + on-time performance, last 90 days</text>

      {/* Health pills */}
      {[
        { label: 'Vetted',           pct: 100, color: '#10b981' },
        { label: 'COI current',      pct: 96,  color: '#10b981' },
        { label: 'On-time delivery', pct: 91,  color: '#C9A84C' },
        { label: 'BOL compliance',   pct: 88,  color: '#C9A84C' },
        { label: 'Damage rate',      pct: 2.1, color: '#ef4444', invert: true },
      ].map((h, i) => (
        <g key={h.label}>
          <text x={48 + i * 144} y="478" fill="#9a9894" fontSize="10">{h.label}</text>
          <text x={48 + i * 144} y="500" fill={h.color} fontSize="20" fontWeight="800">{h.pct}{h.invert ? '%' : '%'}</text>
        </g>
      ))}
    </svg>
  );
}
