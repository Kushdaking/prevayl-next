/**
 * Customer success metrics mockup — what operators track in their first 90 days on the platform
 * Used on /customers page to anchor the "what success looks like" message
 */
export default function CustomerSuccessMockup() {
  return (
    <svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="cs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0f1a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="800" height="480" rx="14" fill="url(#cs-bg)" />

      {/* Top bar */}
      <rect x="0" y="0" width="800" height="44" rx="14" fill="#0a0f1a" />
      <rect x="0" y="32" width="800" height="12" fill="#0a0f1a" />
      <text x="22" y="28" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL · CUSTOMER SUCCESS</text>
      <text x="600" y="28" fill="#9a9894" fontSize="11" fontFamily="monospace">Operator cohort · First 90 days</text>

      {/* Headline */}
      <text x="32" y="80" fill="#f0f4f8" fontSize="18" fontWeight="700">What operators measure in their first quarter.</text>
      <text x="32" y="102" fill="#9a9894" fontSize="12">Aggregate metrics across brokerages running on Prevayl. Each metric self-reported by the operator.</text>

      {/* Big number tiles */}
      {[
        { num: '23%',  label: 'Avg gross margin lift',  color: '#10b981' },
        { num: '4.2x', label: 'Loads per dispatcher',   color: '#C9A84C' },
        { num: '-58%', label: 'Reduction in DSO',        color: '#60a5fa' },
        { num: '94%',  label: 'AI match accept rate',   color: '#a78bfa' },
      ].map((m, i) => (
        <g key={m.label}>
          <rect x={32 + i * 188} y="130" width="172" height="118" rx="8" fill="#0a0f1a" stroke={m.color} strokeOpacity="0.4" />
          <text x={50 + i * 188} y="184" fill={m.color} fontSize="34" fontWeight="800">{m.num}</text>
          <text x={50 + i * 188} y="216" fill="#c8d8e8" fontSize="11" fontWeight="600">{m.label}</text>
          <rect x={50 + i * 188} y="226" width="50" height="3" rx="1.5" fill={m.color} />
        </g>
      ))}

      {/* Operator quotes section — 2 narrow cards */}
      <rect x="32" y="268" width="370" height="180" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
      <text x="48" y="294" fill="#9a9894" fontSize="10" fontWeight="700" letterSpacing="1.5">DISPATCHER · 12-PERSON BROKER</text>
      <text x="48" y="320" fill="#f0f4f8" fontSize="13" fontWeight="600" fontStyle="italic">&quot;The AI matching saves us about 90 minutes per dispatcher per day. We re-deployed two seats to sales last quarter.&quot;</text>
      <line x1="48" y1="384" x2="382" y2="384" stroke="#1e2d40" />
      <text x="48" y="406" fill="#9a9894" fontSize="11">Pre-Prevayl: 7 carriers/dispatcher/day</text>
      <text x="48" y="424" fill="#10b981" fontSize="11" fontWeight="600">After: 24 carriers/dispatcher/day</text>

      <rect x="412" y="268" width="364" height="180" rx="8" fill="#0a0f1a" stroke="#1e2d40" />
      <text x="428" y="294" fill="#9a9894" fontSize="10" fontWeight="700" letterSpacing="1.5">CONTROLLER · WHOLESALE OPERATION</text>
      <text x="428" y="320" fill="#f0f4f8" fontSize="13" fontWeight="600" fontStyle="italic">&quot;QBO sync was the dealbreaker. We tried three other TMSes and the bookkeeper hated all of them. Prevayl just works.&quot;</text>
      <line x1="428" y1="384" x2="762" y2="384" stroke="#1e2d40" />
      <text x="428" y="406" fill="#9a9894" fontSize="11">Pre-Prevayl: 6 days to close month</text>
      <text x="428" y="424" fill="#10b981" fontSize="11" fontWeight="600">After: same-day close</text>
    </svg>
  );
}
