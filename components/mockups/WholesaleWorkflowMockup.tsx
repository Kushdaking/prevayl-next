/**
 * Wholesale workflow mockup — Manheim/ADESA buyer lot to delivered VIN flow
 * Used on /solutions/wholesale page
 */
export default function WholesaleWorkflowMockup() {
  const stages = [
    { num: '01', label: 'Auction CSV',     desc: 'Manheim · ADESA · OVE',    detail: '47 VINs imported' },
    { num: '02', label: 'Auto-Match',      desc: 'AI carrier ranking',        detail: '3 carriers, 12min avg' },
    { num: '03', label: 'Dispatch',        desc: 'Multi-carrier coordination', detail: '47 VINs → 4 carriers' },
    { num: '04', label: 'In Transit',      desc: 'Real-time GPS + status',    detail: '38 in transit · 9 delivered' },
    { num: '05', label: 'Delivered',       desc: 'BOL + photos + signed',     detail: '$184K invoiced' },
  ];

  return (
    <svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="ww-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0f1a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="800" height="480" rx="14" fill="url(#ww-bg)" />

      {/* Top bar */}
      <rect x="0" y="0" width="800" height="44" rx="14" fill="#0a0f1a" />
      <rect x="0" y="32" width="800" height="12" fill="#0a0f1a" />
      <text x="22" y="28" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL · WHOLESALE WORKFLOW</text>
      <text x="640" y="28" fill="#9a9894" fontSize="11" fontFamily="monospace">Batch ID: WB-2026-0418-A</text>

      {/* Header */}
      <text x="32" y="78" fill="#f0f4f8" fontSize="18" fontWeight="700">Auction lot to buyer driveway — one workflow, no rekeying.</text>
      <text x="32" y="100" fill="#9a9894" fontSize="12">Drop the buyer CSV. Prevayl matches carriers, dispatches, tracks, BOLs, and invoices — all in one batch.</text>

      {/* Pipeline stages — 5 cards in horizontal flow */}
      {stages.map((s, i) => (
        <g key={s.num}>
          <rect x={32 + i * 150} y="130" width="138" height="120" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
          <text x={42 + i * 150} y="152" fill="#C9A84C" fontSize="11" fontWeight="800" letterSpacing="1.5">{s.num}</text>
          <text x={42 + i * 150} y="178" fill="#f0f4f8" fontSize="14" fontWeight="700">{s.label}</text>
          <text x={42 + i * 150} y="200" fill="#9a9894" fontSize="10">{s.desc}</text>
          <line x1={42 + i * 150} y1="212" x2={158 + i * 150} y2="212" stroke="#1e2d40" />
          <text x={42 + i * 150} y="232" fill="#10b981" fontSize="11" fontWeight="600">{s.detail}</text>
          {i < stages.length - 1 && (
            <text x={172 + i * 150} y="195" fill="#C9A84C" fontSize="20" fontWeight="700">→</text>
          )}
        </g>
      ))}

      {/* Active VIN map placeholder */}
      <rect x="32" y="270" width="468" height="180" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
      <text x="46" y="292" fill="#f0f4f8" fontSize="13" fontWeight="700">ACTIVE VINS — Live Status Map</text>
      <text x="46" y="308" fill="#9a9894" fontSize="11">38 in transit across 4 carriers · auto-refresh every 30s</text>

      {/* Map mock — gridlines + dots representing GPS pings */}
      <g opacity="0.3">
        {[40, 70, 100, 130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430].map(x => (
          <line key={`v-${x}`} x1={48 + x * 0.95} y1="320" x2={48 + x * 0.95} y2="436" stroke="#1e2d40" />
        ))}
        {[15, 35, 55, 75, 95].map(y => (
          <line key={`h-${y}`} x1="48" y1={320 + y} x2="490" y2={320 + y} stroke="#1e2d40" />
        ))}
      </g>

      {/* GPS dots */}
      {[
        { x: 80, y: 350, color: '#10b981' },
        { x: 145, y: 380, color: '#10b981' },
        { x: 210, y: 360, color: '#C9A84C' },
        { x: 280, y: 410, color: '#10b981' },
        { x: 340, y: 370, color: '#C9A84C' },
        { x: 400, y: 395, color: '#10b981' },
        { x: 460, y: 350, color: '#ef4444' },
      ].map((d, i) => (
        <g key={i}>
          <circle cx={d.x} cy={d.y} r="6" fill={d.color} opacity="0.3" />
          <circle cx={d.x} cy={d.y} r="3" fill={d.color} />
        </g>
      ))}

      {/* Right panel — status breakdown */}
      <rect x="508" y="270" width="268" height="180" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
      <text x="522" y="292" fill="#f0f4f8" fontSize="13" fontWeight="700">BATCH STATUS — 47 VINs</text>
      <text x="522" y="308" fill="#9a9894" fontSize="11">Multi-carrier coordination across 4 dispatched routes</text>

      {[
        { label: 'Picked up & delivered',        count: 9,  color: '#10b981', pct: 19 },
        { label: 'In transit (on time)',          count: 32, color: '#10b981', pct: 68 },
        { label: 'In transit (delayed)',          count: 5,  color: '#C9A84C', pct: 11 },
        { label: 'Exception — needs review',      count: 1,  color: '#ef4444', pct: 2 },
      ].map((row, i) => (
        <g key={row.label}>
          <text x="522" y={336 + i * 26} fill="#c8d8e8" fontSize="11">{row.label}</text>
          <text x="760" y={336 + i * 26} fill={row.color} fontSize="12" fontWeight="700" textAnchor="end">{row.count}</text>
          <rect x="522" y={342 + i * 26} width="220" height="3" rx="1.5" fill="#1e2d40" />
          <rect x="522" y={342 + i * 26} width={2.2 * row.pct} height="3" rx="1.5" fill={row.color} />
        </g>
      ))}
    </svg>
  );
}
