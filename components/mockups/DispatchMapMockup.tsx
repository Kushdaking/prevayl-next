// DispatchMapMockup.tsx — Live dispatch map with active carrier GPS pins
// Shows dark road-map aesthetic, active load overlays, carrier position dots, route lines

export default function DispatchMapMockup() {
  // Simplified US road network as SVG paths (stylized, not geographic-accurate)
  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL live dispatch map"
      role="img"
    >
      <defs>
        <linearGradient id="dmBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0f1a" />
          <stop offset="100%" stopColor="#070c15" />
        </linearGradient>
        <linearGradient id="dmPanel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141c2b" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="dmRoute1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E2C47A" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="dmRoute2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
        </linearGradient>
        <filter id="dmGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="dmPinGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="dmRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="700" fill="url(#dmBg)" clipPath="url(#dmRound)" />

      {/* ── Stylized road network ── */}
      {/* Major east-west highways */}
      <path d="M 0 380 Q 300 370 600 375 Q 900 380 1200 372" fill="none" stroke="#131e2e" strokeWidth="3" />
      <path d="M 0 290 Q 200 285 500 292 Q 800 298 1200 288" fill="none" stroke="#131e2e" strokeWidth="2.5" />
      <path d="M 0 460 Q 250 455 600 458 Q 900 462 1200 455" fill="none" stroke="#131e2e" strokeWidth="2.5" />
      <path d="M 0 200 Q 300 195 700 202 Q 950 206 1200 198" fill="none" stroke="#111827" strokeWidth="2" />
      <path d="M 0 540 Q 400 536 800 540 Q 1000 543 1200 537" fill="none" stroke="#111827" strokeWidth="2" />
      <path d="M 0 620 Q 350 616 700 620 Q 950 623 1200 617" fill="none" stroke="#0f1823" strokeWidth="1.5" />
      <path d="M 0 140 Q 300 136 700 140 Q 950 143 1200 137" fill="none" stroke="#0f1823" strokeWidth="1.5" />

      {/* Major north-south highways */}
      <path d="M 240 0 Q 238 200 240 400 Q 242 580 240 700" fill="none" stroke="#131e2e" strokeWidth="3" />
      <path d="M 480 0 Q 478 180 480 380 Q 482 560 480 700" fill="none" stroke="#131e2e" strokeWidth="2.5" />
      <path d="M 720 0 Q 718 200 720 400 Q 722 580 720 700" fill="none" stroke="#131e2e" strokeWidth="2.5" />
      <path d="M 960 0 Q 958 180 960 380 Q 962 560 960 700" fill="none" stroke="#131e2e" strokeWidth="2" />
      <path d="M 140 0 Q 138 200 140 400 Q 142 580 140 700" fill="none" stroke="#111827" strokeWidth="2" />
      <path d="M 840 0 Q 838 200 840 400 Q 842 580 840 700" fill="none" stroke="#111827" strokeWidth="2" />
      <path d="M 1080 0 Q 1078 200 1080 400 Q 1082 580 1080 700" fill="none" stroke="#111827" strokeWidth="1.5" />

      {/* Diagonal / interstate curves */}
      <path d="M 0 600 Q 200 480 400 380 Q 560 300 700 220 Q 820 160 960 100 Q 1080 50 1200 20"
        fill="none" stroke="#0f1823" strokeWidth="2" />
      <path d="M 0 100 Q 150 200 300 340 Q 420 460 540 530 Q 680 600 800 650 Q 960 700 1100 700"
        fill="none" stroke="#0f1823" strokeWidth="2" />

      {/* City dots */}
      {[
        { x: 385, y: 202, name: 'Detroit, MI' },
        { x: 842, y: 490, name: 'Atlanta, GA' },
        { x: 252, y: 375, name: 'Chicago, IL' },
        { x: 562, y: 560, name: 'Nashville, TN' },
        { x: 148, y: 510, name: 'Dallas, TX' },
        { x: 74, y: 280, name: 'Denver, CO' },
        { x: 942, y: 380, name: 'Columbus, OH' },
        { x: 1048, y: 220, name: 'Pittsburgh, PA' },
        { x: 1140, y: 300, name: 'Philadelphia, PA' },
        { x: 680, y: 425, name: 'Louisville, KY' },
        { x: 468, y: 290, name: 'Indianapolis, IN' },
        { x: 78, y: 150, name: 'Salt Lake City' },
        { x: 44, y: 420, name: 'Albuquerque' },
        { x: 142, y: 620, name: 'Houston, TX' },
        { x: 370, y: 640, name: 'New Orleans' },
        { x: 1050, y: 580, name: 'Charlotte, NC' },
        { x: 1150, y: 460, name: 'Washington DC' },
      ].map((city) => (
        <g key={city.name}>
          <circle cx={city.x} cy={city.y} r="3" fill="#1e2d40" stroke="#2a3d56" strokeWidth="1" />
          <text x={city.x + 7} y={city.y + 4} fill="#2a3d56" fontSize="9">{city.name}</text>
        </g>
      ))}

      {/* ── Active route lines (road-following segmented paths) ── */}
      {/* Route 1: Detroit → Atlanta (Load LX-4821, gold, completed segments solid)
          Path: Detroit (385,202) → I-75 south corridor (480,290) → segment along I-75 (480→720)
                → angle southeast (720,460) → highway east to Atlanta (842,490) */}
      <path d="M 385 202 L 385 240 L 480 290 L 480 380 L 600 460 L 720 460 L 760 475 L 842 490"
        fill="none" stroke="url(#dmRoute1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dashed remaining segment (carrier hasn't reached yet) */}
      <path d="M 720 460 L 760 475 L 842 490"
        fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round"
        strokeLinejoin="round" opacity="0.85" />

      {/* Route 2: Chicago → Miami (Load LX-4820, blue, in progress)
          Path: Chicago (252,375) → I-65 south (240,460) → continue down I-65 (240→540)
                → cut southeast through Atlanta region → I-95 south to Miami corridor */}
      <path d="M 252 375 L 240 460 L 240 540 L 360 620 L 540 620 L 720 620 L 900 660 L 1080 700"
        fill="none" stroke="url(#dmRoute2)" strokeWidth="2.5" strokeDasharray="8 4" strokeLinecap="round"
        strokeLinejoin="round" />

      {/* Route 3: Nashville → Columbus (Load LX-4823, purple, just dispatched)
          Path: Nashville (562,560) → I-65 north (480,460) → I-70 east corridor → Columbus (942,380) */}
      <path d="M 562 560 L 480 460 L 480 380 L 720 380 L 840 380 L 942 380"
        fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.65" strokeDasharray="5 5"
        strokeLinecap="round" strokeLinejoin="round" />

      {/* ── Carrier GPS pins (on the road-following routes) ── */}
      {/* Demo Carrier Alpha — LX-4821 — Detroit→Atlanta, ~68% along I-75 corridor */}
      <g filter="url(#dmPinGlow)">
        <circle cx="680" cy="460" r="12" fill="#C9A84C" opacity="0.2" />
        <circle cx="680" cy="460" r="7" fill="#C9A84C" />
        <circle cx="680" cy="460" r="3" fill="#0a0f1a" />
      </g>

      {/* Demo Carrier Foxtrot — LX-4820 — Chicago→Miami, ~20% along route, on I-65 south */}
      <g filter="url(#dmPinGlow)">
        <circle cx="240" cy="540" r="10" fill="#60a5fa" opacity="0.2" />
        <circle cx="240" cy="540" r="6" fill="#60a5fa" />
        <circle cx="240" cy="540" r="2.5" fill="#0a0f1a" />
      </g>

      {/* Demo Carrier Gamma — LX-4823 — Nashville→Columbus, halfway on I-70 east */}
      <g>
        <circle cx="780" cy="380" r="6" fill="#a78bfa" />
        <circle cx="780" cy="380" r="2.5" fill="#0a0f1a" />
      </g>

      {/* ── Carrier callout cards ── */}
      {/* Card for Demo Carrier Alpha — anchored to pin at 680,460 */}
      <line x1="680" y1="452" x2="740" y2="400" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
      <rect x="742" y="368" width="218" height="76" rx="6" fill="#141c2b" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="742" y="368" width="218" height="3" fill="#C9A84C" rx="1" />
      <text x="758" y="387" fill="#C9A84C" fontSize="10" fontWeight="700">DEMO CARRIER ALPHA · LX-4821</text>
      <text x="758" y="402" fill="#f0f4f8" fontSize="11" fontWeight="600">Detroit → Atlanta</text>
      <text x="758" y="416" fill="#9a9894" fontSize="10">Driver: Marcus T. · 4 vehicles</text>
      <text x="758" y="429" fill="#9a9894" fontSize="10">ETA: May 3, 14:30 · 68% complete</text>
      <rect x="888" y="422" width="60" height="16" rx="8" fill="#C9A84C" />
      <text x="918" y="433" fill="#0a0f1a" fontSize="9" fontWeight="700" textAnchor="middle">Track →</text>

      {/* Card for Demo Carrier Foxtrot — anchored at 240,540 */}
      <line x1="252" y1="540" x2="320" y2="510" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
      <rect x="322" y="478" width="194" height="64" rx="6" fill="#141c2b" stroke="#60a5fa" strokeWidth="1.2" />
      <text x="338" y="495" fill="#60a5fa" fontSize="10" fontWeight="700">DEMO CARRIER FOXTROT · LX-4820</text>
      <text x="338" y="510" fill="#f0f4f8" fontSize="11" fontWeight="600">Chicago → Miami</text>
      <text x="338" y="524" fill="#9a9894" fontSize="10">ETA: May 4, 09:00 · 20% complete</text>
      <text x="338" y="536" fill="#9a9894" fontSize="10">Driver: Derrick W. · 6 vehicles</text>

      {/* ── Top chrome (rendered on top of map) ── */}
      <rect x="0" y="0" width="1200" height="52" fill="#141c2b" fillOpacity="0.96" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#9a9894" fontSize="12">Dispatch</text>
      <text x="164" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">Live Map</text>
      <rect x="160" y="45" width="58" height="2" fill="#C9A84C" rx="1" />
      <text x="238" y="32" fill="#9a9894" fontSize="12">Load Board</text>
      <text x="318" y="32" fill="#9a9894" fontSize="12">Carriers</text>

      {/* Live indicator */}
      <circle cx="1052" cy="27" r="5" fill="#10b981" />
      <circle cx="1052" cy="27" r="9" fill="#10b981" opacity="0.2" />
      <text x="1064" y="31" fill="#10b981" fontSize="11" fontWeight="600">LIVE</text>
      <text x="1104" y="31" fill="#9a9894" fontSize="11">· 47 loads</text>
      <text x="1164" y="31" fill="#9a9894" fontSize="11">18 carriers</text>

      {/* ── Bottom legend panel ── */}
      <rect x="0" y="650" width="1200" height="50" fill="#141c2b" fillOpacity="0.96" />
      <line x1="0" y1="650" x2="1200" y2="650" stroke="#1e2d40" strokeWidth="1" />

      <circle cx="44" cy="675" r="5" fill="#C9A84C" />
      <text x="56" y="679" fill="#9a9894" fontSize="11">In Transit</text>
      <circle cx="144" cy="675" r="5" fill="#60a5fa" />
      <text x="156" y="679" fill="#9a9894" fontSize="11">Dispatched</text>
      <circle cx="244" cy="675" r="5" fill="#a78bfa" />
      <text x="256" y="679" fill="#9a9894" fontSize="11">Picked Up</text>
      <circle cx="344" cy="675" r="5" fill="#10b981" />
      <text x="356" y="679" fill="#9a9894" fontSize="11">Delivered</text>

      <rect x="480" y="669" width="1" height="12" fill="#1e2d40" />
      <text x="500" y="679" fill="#9a9894" fontSize="11">Active loads: <tspan fill="#C9A84C" fontWeight="600">14 in transit</tspan> · 6 dispatched · 5 picked up · 22 delivered</text>

      {/* Map controls */}
      <rect x="1140" y="608" width="44" height="36" rx="6" fill="#141c2b" stroke="#1e2d40" strokeWidth="1" />
      <text x="1162" y="625" fill="#9a9894" fontSize="14" textAnchor="middle">+</text>
      <line x1="1148" y1="632" x2="1176" y2="632" stroke="#1e2d40" strokeWidth="1" />
      <text x="1162" y="642" fill="#9a9894" fontSize="14" textAnchor="middle">–</text>
    </svg>
  );
}
