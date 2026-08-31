// AIMatchMockup.tsx — AI carrier matching panel for Load #LX-3847
// Shows top-3 ranked carriers with on-time %, lane score, location, rate

export default function AIMatchMockup() {
  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL AI carrier matching interface"
      role="img"
    >
      <defs>
        <linearGradient id="aiBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="aiCard1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2535" />
          <stop offset="100%" stopColor="#141e2e" />
        </linearGradient>
        <linearGradient id="aiCard2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="aiScoreBar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A67C32" />
          <stop offset="100%" stopColor="#E2C47A" />
        </linearGradient>
        <linearGradient id="aiScoreBar2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a2a" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="aiPanelBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141c2b" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <clipPath id="aiRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="700" fill="url(#aiBg)" clipPath="url(#aiRound)" />

      {/* Top chrome */}
      <rect width="1200" height="52" fill="url(#aiPanelBg)" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#9a9894" fontSize="12">AI Insights</text>
      <text x="220" y="32" fill="#9a9894" fontSize="12">Load Board</text>
      <text x="300" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">AI Matching</text>
      <rect x="296" y="45" width="72" height="2" fill="#C9A84C" rx="1" />
      <text x="390" y="32" fill="#9a9894" fontSize="12">History</text>
      <text x="446" y="32" fill="#9a9894" fontSize="12">Settings</text>

      {/* Load context header */}
      <rect x="0" y="52" width="1200" height="72" fill="#0d121e" />
      <line x1="0" y1="124" x2="1200" y2="124" stroke="#1e2d40" strokeWidth="1" />

      <rect x="24" y="66" width="56" height="20" rx="4" fill="#0a1f14" stroke="#10b981" strokeWidth="1" />
      <circle cx="36" cy="76" r="3" fill="#10b981" />
      <text x="43" y="80" fill="#10b981" fontSize="10" fontWeight="600">LIVE</text>

      <text x="92" y="74" fill="#f0f4f8" fontSize="16" fontWeight="700">AI Carrier Match — Load #LX-3847</text>
      <text x="92" y="94" fill="#9a9894" fontSize="12">Detroit, MI → Atlanta, GA  ·  3 vehicles  ·  Est. 782 miles  ·  Rate ceiling $2,400  ·  Pickup window May 3–4</text>

      <rect x="1040" y="62" width="136" height="44" rx="6" fill="#1a2535" stroke="#2a3d56" strokeWidth="1" />
      <text x="1056" y="79" fill="#9a9894" fontSize="10">Model confidence</text>
      <text x="1056" y="97" fill="#C9A84C" fontSize="18" fontWeight="700">94.2%</text>
      <text x="1128" y="97" fill="#9a9894" fontSize="11">↑ 2.1%</text>

      {/* Ranking tag */}
      <text x="24" y="153" fill="#9a9894" fontSize="12">Ranked by composite lane score · On-time weight 40%, rate fit 30%, lane history 20%, proximity 10%</text>
      <rect x="1092" y="136" width="84" height="24" rx="4" fill="#1e2d40" />
      <text x="1134" y="151" fill="#c8d8e8" fontSize="11" textAnchor="middle">Assign →</text>

      {/* Card 1 — TOP PICK (highlighted) */}
      <rect x="24" y="168" width="1152" height="152" rx="8" fill="url(#aiCard1)" stroke="#C9A84C" strokeWidth="1.5" filter="url(#lbShadow)" />
      <rect x="24" y="168" width="4" height="152" fill="#C9A84C" rx="2" />

      {/* Rank badge */}
      <rect x="36" y="180" width="80" height="22" rx="4" fill="#C9A84C" />
      <text x="76" y="195" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">#1 · TOP PICK</text>

      <text x="36" y="226" fill="#f0f4f8" fontSize="16" fontWeight="700">Demo Carrier Alpha</text>
      <text x="36" y="244" fill="#9a9894" fontSize="12">MC-0000004 · DOT 0000004 · Based in Detroit, MI</text>

      {/* Stats row */}
      {[
        { x: 36, label: 'On-Time Rate', value: '97.3%', color: '#10b981' },
        { x: 200, label: 'Lane Score', value: '9.4 / 10', color: '#C9A84C' },
        { x: 364, label: 'This Lane (90d)', value: '14 loads', color: '#c8d8e8' },
        { x: 508, label: 'Avg Rate', value: '$2,180', color: '#c8d8e8' },
        { x: 652, label: 'Current Location', value: 'Toledo, OH', color: '#c8d8e8' },
        { x: 796, label: 'Avail. Capacity', value: '4–6 vehicles', color: '#c8d8e8' },
        { x: 940, label: 'Last Claim', value: 'None (18 mo)', color: '#10b981' },
      ].map((stat) => (
        <g key={stat.x}>
          <text x={stat.x} y="272" fill="#9a9894" fontSize="10">{stat.label}</text>
          <text x={stat.x} y="289" fill={stat.color} fontSize="13" fontWeight="600">{stat.value}</text>
        </g>
      ))}

      {/* Score bar */}
      <text x="36" y="310" fill="#9a9894" fontSize="10">Composite Score</text>
      <rect x="36" y="314" width="820" height="6" rx="3" fill="#1e2d40" />
      <rect x="36" y="314" width="773" height="6" rx="3" fill="url(#aiScoreBar)" />
      <text x="866" y="321" fill="#E2C47A" fontSize="11" fontWeight="700">94.2 / 100</text>

      {/* Suggested rate */}
      <rect x="1020" y="186" width="144" height="64" rx="6" fill="#0d121e" stroke="#2a3d56" strokeWidth="1" />
      <text x="1092" y="206" fill="#9a9894" fontSize="10" textAnchor="middle">Suggested Rate</text>
      <text x="1092" y="230" fill="#C9A84C" fontSize="22" fontWeight="700" textAnchor="middle">$2,140</text>
      <text x="1092" y="244" fill="#9a9894" fontSize="10" textAnchor="middle">$260 under ceiling</text>

      <rect x="1020" y="258" width="144" height="30" rx="5" fill="#C9A84C" />
      <text x="1092" y="277" fill="#0a0f1a" fontSize="12" fontWeight="700" textAnchor="middle">Assign Carrier →</text>

      {/* Card 2 */}
      <rect x="24" y="332" width="1152" height="130" rx="8" fill="url(#aiCard2)" stroke="#1e2d40" strokeWidth="1" />
      <rect x="24" y="332" width="4" height="130" fill="#3D5470" rx="2" />

      <rect x="36" y="344" width="48" height="20" rx="4" fill="#1e2d40" />
      <text x="60" y="358" fill="#9a9894" fontSize="11" fontWeight="600" textAnchor="middle">#2</text>

      <text x="36" y="386" fill="#f0f4f8" fontSize="15" fontWeight="600">Demo Carrier Foxtrot</text>
      <text x="36" y="403" fill="#9a9894" fontSize="12">MC-0000001 · DOT 0000001 · Based in Columbus, OH</text>

      {[
        { x: 36, label: 'On-Time Rate', value: '93.8%', color: '#10b981' },
        { x: 200, label: 'Lane Score', value: '8.7 / 10', color: '#C9A84C' },
        { x: 364, label: 'This Lane (90d)', value: '9 loads', color: '#c8d8e8' },
        { x: 508, label: 'Avg Rate', value: '$2,310', color: '#c8d8e8' },
        { x: 652, label: 'Current Location', value: 'Columbus, OH', color: '#c8d8e8' },
        { x: 796, label: 'Avail. Capacity', value: '3–5 vehicles', color: '#c8d8e8' },
        { x: 940, label: 'Last Claim', value: '8 months ago', color: '#f59e0b' },
      ].map((stat) => (
        <g key={stat.x}>
          <text x={stat.x} y="424" fill="#9a9894" fontSize="10">{stat.label}</text>
          <text x={stat.x} y="440" fill={stat.color} fontSize="12" fontWeight="600">{stat.value}</text>
        </g>
      ))}

      <rect x="36" y="449" width="760" height="5" rx="2.5" fill="#1e2d40" />
      <rect x="36" y="449" width="660" height="5" rx="2.5" fill="#3D5470" />
      <text x="806" y="455" fill="#9a9894" fontSize="11" fontWeight="600">87.4 / 100</text>

      <rect x="1092" y="355" width="72" height="26" rx="4" fill="#1e2d40" />
      <text x="1128" y="372" fill="#c8d8e8" fontSize="11" textAnchor="middle">Assign</text>

      {/* Card 3 */}
      <rect x="24" y="474" width="1152" height="130" rx="8" fill="url(#aiCard2)" stroke="#1e2d40" strokeWidth="1" />
      <rect x="24" y="474" width="4" height="130" fill="#2a3d56" rx="2" />

      <rect x="36" y="486" width="48" height="20" rx="4" fill="#1e2d40" />
      <text x="60" y="500" fill="#9a9894" fontSize="11" fontWeight="600" textAnchor="middle">#3</text>

      <text x="36" y="528" fill="#f0f4f8" fontSize="15" fontWeight="600">Demo Carrier Beta</text>
      <text x="36" y="545" fill="#9a9894" fontSize="12">MC-0000003 · DOT 0000003 · Based in Cincinnati, OH</text>

      {[
        { x: 36, label: 'On-Time Rate', value: '91.2%', color: '#10b981' },
        { x: 200, label: 'Lane Score', value: '8.1 / 10', color: '#f59e0b' },
        { x: 364, label: 'This Lane (90d)', value: '5 loads', color: '#c8d8e8' },
        { x: 508, label: 'Avg Rate', value: '$2,240', color: '#c8d8e8' },
        { x: 652, label: 'Current Location', value: 'Cincinnati, OH', color: '#c8d8e8' },
        { x: 796, label: 'Avail. Capacity', value: '2–4 vehicles', color: '#c8d8e8' },
        { x: 940, label: 'Last Claim', value: '4 months ago', color: '#f59e0b' },
      ].map((stat) => (
        <g key={stat.x}>
          <text x={stat.x} y="566" fill="#9a9894" fontSize="10">{stat.label}</text>
          <text x={stat.x} y="582" fill={stat.color} fontSize="12" fontWeight="600">{stat.value}</text>
        </g>
      ))}

      <rect x="36" y="592" width="760" height="5" rx="2.5" fill="#1e2d40" />
      <rect x="36" y="592" width="604" height="5" rx="2.5" fill="#2a3d56" />
      <text x="806" y="598" fill="#9a9894" fontSize="11" fontWeight="600">79.5 / 100</text>

      <rect x="1092" y="497" width="72" height="26" rx="4" fill="#1e2d40" />
      <text x="1128" y="514" fill="#c8d8e8" fontSize="11" textAnchor="middle">Assign</text>

      {/* Post-board network option */}
      <rect x="24" y="616" width="1152" height="60" rx="6" fill="#0d121e" stroke="#1e2d40" strokeWidth="1" strokeDasharray="5 3" />
      <text x="48" y="641" fill="#3D5470" fontSize="13" fontWeight="500">No match? Post to open network →</text>
      <text x="48" y="658" fill="#3D5470" fontSize="11">Broadcast to 12,000+ verified FMCSA carriers. AI auto-screens responses by compliance score before surfacing.</text>
      <rect x="1060" y="626" width="104" height="28" rx="4" fill="#1e2d40" />
      <text x="1112" y="644" fill="#c8d8e8" fontSize="11" textAnchor="middle">Post to Network</text>
    </svg>
  );
}
