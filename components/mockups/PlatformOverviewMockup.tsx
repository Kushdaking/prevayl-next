/**
 * Platform Overview mockup — shows the 7 pillars in one composite view
 * Used on /platform main page to anchor the "what is Prevayl" narrative
 */
export default function PlatformOverviewMockup() {
  const pillars = [
    { id: 'dispatch',   icon: '🚛', label: 'Dispatch',     metric: '847 active', color: '#C9A84C' },
    { id: 'orders',     icon: '🚗', label: 'Orders',       metric: '12,304 VINs MTD', color: '#10b981' },
    { id: 'accounting', icon: '💰', label: 'Accounting',   metric: '$2.4M MTD',  color: '#60a5fa' },
    { id: 'compliance', icon: '🛡️', label: 'Compliance',   metric: '100% current', color: '#f59e0b' },
    { id: 'carriers',   icon: '🤝', label: 'Carriers',     metric: '422 active',  color: '#a78bfa' },
    { id: 'dealers',    icon: '🏢', label: 'Dealer Portal', metric: '38 dealers',  color: '#34d399' },
    { id: 'ai',         icon: '⚡', label: 'AI Match',     metric: '94% accept',  color: '#ef4444' },
  ];

  return (
    <svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="po-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0f1a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="po-accent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="800" height="520" rx="14" fill="url(#po-bg)" />
      <rect x="0" y="0" width="800" height="520" rx="14" fill="url(#po-accent)" />

      {/* Top bar */}
      <rect x="0" y="0" width="800" height="48" rx="14" fill="#0a0f1a" />
      <rect x="0" y="34" width="800" height="14" fill="#0a0f1a" />
      <text x="22" y="30" fill="#C9A84C" fontSize="14" fontWeight="700" letterSpacing="2.5">PREVAYL · PLATFORM OVERVIEW</text>
      <text x="690" y="30" fill="#9a9894" fontSize="11" fontFamily="monospace">May 2 · 09:42 ET</text>

      {/* Header / page title */}
      <text x="32" y="92" fill="#f0f4f8" fontSize="20" fontWeight="700">One platform. Seven modules. Zero context-switching.</text>
      <text x="32" y="116" fill="#9a9894" fontSize="13">Live operational view across dispatch, accounting, compliance, AI matching, and customer-facing portals.</text>

      {/* 7 pillar cards in 2-row grid */}
      {pillars.slice(0, 4).map((p, i) => (
        <g key={p.id}>
          <rect x={32 + i * 188} y="148" width="172" height="148" rx="10" fill="#0a0f1a" stroke={p.color} strokeOpacity="0.4" />
          <text x={50 + i * 188} y="180" fontSize="28">{p.icon}</text>
          <text x={50 + i * 188} y="220" fill="#f0f4f8" fontSize="14" fontWeight="700">{p.label}</text>
          <text x={50 + i * 188} y="240" fill={p.color} fontSize="13" fontWeight="600">{p.metric}</text>
          <rect x={50 + i * 188} y="260" width="120" height="2" fill={p.color} opacity="0.5" />
          <rect x={50 + i * 188} y="270" width={60 + i * 12} height="6" rx="3" fill={p.color} opacity="0.7" />
        </g>
      ))}

      {pillars.slice(4).map((p, i) => (
        <g key={p.id}>
          <rect x={32 + i * 188 + 94} y="316" width="172" height="148" rx="10" fill="#0a0f1a" stroke={p.color} strokeOpacity="0.4" />
          <text x={50 + i * 188 + 94} y="348" fontSize="28">{p.icon}</text>
          <text x={50 + i * 188 + 94} y="388" fill="#f0f4f8" fontSize="14" fontWeight="700">{p.label}</text>
          <text x={50 + i * 188 + 94} y="408" fill={p.color} fontSize="13" fontWeight="600">{p.metric}</text>
          <rect x={50 + i * 188 + 94} y="428" width="120" height="2" fill={p.color} opacity="0.5" />
          <rect x={50 + i * 188 + 94} y="438" width={70 + i * 14} height="6" rx="3" fill={p.color} opacity="0.7" />
        </g>
      ))}

      {/* Footer status strip */}
      <rect x="32" y="486" width="736" height="20" rx="5" fill="#0a0f1a" stroke="#1e2d40" />
      <circle cx="48" cy="496" r="4" fill="#10b981" />
      <text x="60" y="500" fill="#10b981" fontSize="11" fontFamily="monospace">All modules operational</text>
      <text x="220" y="500" fill="#9a9894" fontSize="11" fontFamily="monospace">·</text>
      <text x="232" y="500" fill="#c8d8e8" fontSize="11" fontFamily="monospace">847 active loads</text>
      <text x="358" y="500" fill="#9a9894" fontSize="11" fontFamily="monospace">·</text>
      <text x="370" y="500" fill="#c8d8e8" fontSize="11" fontFamily="monospace">$2.4M MTD revenue</text>
      <text x="510" y="500" fill="#9a9894" fontSize="11" fontFamily="monospace">·</text>
      <text x="522" y="500" fill="#c8d8e8" fontSize="11" fontFamily="monospace">94% AI match accept rate</text>
      <text x="690" y="500" fill="#9a9894" fontSize="11" fontFamily="monospace">·</text>
      <text x="702" y="500" fill="#c8d8e8" fontSize="11" fontFamily="monospace">12 alerts</text>
    </svg>
  );
}
