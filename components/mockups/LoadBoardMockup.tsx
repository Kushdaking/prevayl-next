// LoadBoardMockup.tsx — Linear/Stripe-style SVG product mockup
// Depicts the PREVAYL live dispatch load board: cards with status, lanes, ETAs, margin pills

export default function LoadBoardMockup() {
  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL load board interface"
      role="img"
    >
      <defs>
        <linearGradient id="lbBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="lbCardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="lbTopBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141c2b" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="lbHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d2d42" />
          <stop offset="100%" stopColor="#162236" />
        </linearGradient>
        <filter id="lbShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.4)" />
        </filter>
        <clipPath id="lbRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
      </defs>

      {/* Main bg */}
      <rect width="1200" height="700" fill="url(#lbBg)" clipPath="url(#lbRound)" />

      {/* Top bar */}
      <rect width="1200" height="52" fill="url(#lbTopBar)" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />

      {/* Logo area */}
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#9a9894" fontSize="12" fontWeight="400">Dispatch</text>

      {/* Top nav items */}
      <text x="220" y="32" fill="#9a9894" fontSize="12">Overview</text>
      <text x="292" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">Load Board</text>
      <rect x="288" y="45" width="62" height="2" fill="#C9A84C" rx="1" />
      <text x="372" y="32" fill="#9a9894" fontSize="12">Carriers</text>
      <text x="430" y="32" fill="#9a9894" fontSize="12">Accounting</text>
      <text x="512" y="32" fill="#9a9894" fontSize="12">Reports</text>

      {/* Top-right controls */}
      <rect x="1050" y="14" width="88" height="26" rx="5" fill="#C9A84C" />
      <text x="1094" y="31" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">+ New Load</text>
      <circle cx="1028" cy="27" r="10" fill="#1e2d40" />
      <text x="1028" y="31" fill="#9a9894" fontSize="10" textAnchor="middle">⌘</text>
      <circle cx="1004" cy="27" r="10" fill="#1e2d40" />
      <text x="1004" y="31" fill="#9a9894" fontSize="9" textAnchor="middle">KR</text>

      {/* Left sidebar */}
      <rect x="0" y="52" width="200" height="648" fill="#0d121e" />
      <line x1="200" y1="52" x2="200" y2="700" stroke="#1e2d40" strokeWidth="1" />

      {/* Sidebar items */}
      {[
        { y: 84, label: 'Dashboard', icon: '▣', active: false },
        { y: 116, label: 'Load Board', icon: '≡', active: true },
        { y: 148, label: 'Orders', icon: '◫', active: false },
        { y: 180, label: 'Carriers', icon: '◈', active: false },
        { y: 212, label: 'Customers', icon: '◎', active: false },
        { y: 244, label: 'Invoices', icon: '◧', active: false },
        { y: 276, label: 'Compliance', icon: '◉', active: false },
        { y: 308, label: 'AI Insights', icon: '◆', active: false },
        { y: 340, label: 'Reports', icon: '▤', active: false },
      ].map((item) => (
        <g key={item.y}>
          {item.active && (
            <rect x="0" y={item.y - 14} width="200" height="28" fill="#162236" />
          )}
          {item.active && (
            <rect x="0" y={item.y - 14} width="3" height="28" fill="#C9A84C" />
          )}
          <text x="24" y={item.y + 4} fill={item.active ? '#C9A84C' : '#3D5470'} fontSize="11">
            {item.icon}
          </text>
          <text
            x="44"
            y={item.y + 4}
            fill={item.active ? '#f0f4f8' : '#9a9894'}
            fontSize="12"
            fontWeight={item.active ? '600' : '400'}
          >
            {item.label}
          </text>
        </g>
      ))}

      {/* Sidebar footer */}
      <rect x="12" y="630" width="176" height="44" rx="6" fill="#111827" />
      <circle cx="32" cy="652" r="11" fill="#1e2d40" />
      <text x="32" y="656" fill="#C9A84C" fontSize="9" textAnchor="middle" fontWeight="700">KR</text>
      <text x="52" y="647" fill="#f0f4f8" fontSize="11" fontWeight="600">Kenny R.</text>
      <text x="52" y="661" fill="#9a9894" fontSize="10">Owner · Cars2go LLC</text>

      {/* Main content area */}
      {/* Page header */}
      <text x="226" y="88" fill="#f0f4f8" fontSize="18" fontWeight="700">Load Board</text>
      <text x="226" y="107" fill="#9a9894" fontSize="12">47 active loads · 6 pending assignment · Updated just now</text>

      {/* Filter bar */}
      <rect x="218" y="118" width="970" height="34" rx="6" fill="#111827" stroke="#1e2d40" strokeWidth="1" />
      <text x="238" y="138" fill="#3D5470" fontSize="12">🔍</text>
      <text x="258" y="138" fill="#9a9894" fontSize="12">Filter by carrier, lane, status…</text>
      <rect x="958" y="124" width="70" height="22" rx="4" fill="#1e2d40" />
      <text x="993" y="138" fill="#c8d8e8" fontSize="11" textAnchor="middle">All Status</text>
      <rect x="1036" y="124" width="68" height="22" rx="4" fill="#1e2d40" />
      <text x="1070" y="138" fill="#c8d8e8" fontSize="11" textAnchor="middle">This Week</text>
      <rect x="1112" y="124" width="64" height="22" rx="4" fill="#1e2d40" />
      <text x="1144" y="138" fill="#c8d8e8" fontSize="11" textAnchor="middle">Export ↓</text>

      {/* Column headers */}
      <rect x="218" y="160" width="970" height="28" rx="4" fill="#0d121e" />
      {[
        { x: 234, label: 'LOAD #' },
        { x: 316, label: 'LANE' },
        { x: 548, label: 'CARRIER' },
        { x: 700, label: 'STATUS' },
        { x: 820, label: 'ETA' },
        { x: 908, label: 'VEHICLES' },
        { x: 998, label: 'RATE' },
        { x: 1100, label: 'MARGIN' },
      ].map((col) => (
        <text key={col.x} x={col.x} y="178" fill="#3D5470" fontSize="10" fontWeight="600" letterSpacing="0.8">
          {col.label}
        </text>
      ))}

      {/* Load rows — 5 rows */}
      {[
        {
          id: 'LX-4821',
          origin: 'Detroit, MI',
          dest: 'Atlanta, GA',
          carrier: 'Demo Carrier Alpha',
          status: 'IN TRANSIT',
          statusColor: '#C9A84C',
          statusBg: '#1d2510',
          eta: 'May 3, 14:30',
          vehicles: 4,
          rate: '$2,140',
          margin: '$387',
          marginPct: '18.1%',
          marginColor: '#10b981',
          highlight: true,
        },
        {
          id: 'LX-4820',
          origin: 'Chicago, IL',
          dest: 'Miami, FL',
          carrier: 'Demo Carrier Foxtrot',
          status: 'DISPATCHED',
          statusColor: '#60a5fa',
          statusBg: '#0f1d2e',
          eta: 'May 4, 09:00',
          vehicles: 6,
          rate: '$3,840',
          margin: '$610',
          marginPct: '15.9%',
          marginColor: '#10b981',
          highlight: false,
        },
        {
          id: 'LX-4819',
          origin: 'Dallas, TX',
          dest: 'Phoenix, AZ',
          carrier: 'Demo Carrier Beta',
          status: 'DELIVERED',
          statusColor: '#10b981',
          statusBg: '#0a1f14',
          eta: 'May 1, 11:15',
          vehicles: 2,
          rate: '$1,240',
          margin: '$195',
          marginPct: '15.7%',
          marginColor: '#10b981',
          highlight: false,
        },
        {
          id: 'LX-4818',
          origin: 'Los Angeles, CA',
          dest: 'Seattle, WA',
          carrier: '— Unassigned —',
          status: 'PENDING',
          statusColor: '#f59e0b',
          statusBg: '#1a1506',
          eta: '—',
          vehicles: 3,
          rate: '$1,850',
          margin: '—',
          marginPct: '',
          marginColor: '#9a9894',
          highlight: false,
        },
        {
          id: 'LX-4817',
          origin: 'Nashville, TN',
          dest: 'Columbus, OH',
          carrier: 'Demo Carrier Gamma',
          status: 'IN TRANSIT',
          statusColor: '#C9A84C',
          statusBg: '#1d2510',
          eta: 'May 2, 16:00',
          vehicles: 5,
          rate: '$2,680',
          margin: '$442',
          marginPct: '16.5%',
          marginColor: '#10b981',
          highlight: false,
        },
      ].map((row, i) => {
        const y = 196 + i * 54;
        return (
          <g key={row.id}>
            <rect
              x="218"
              y={y - 2}
              width="970"
              height="50"
              rx="4"
              fill={row.highlight ? 'url(#lbHighlight)' : i % 2 === 0 ? '#111827' : '#0f1823'}
              stroke={row.highlight ? '#2a3d56' : '#1e2d40'}
              strokeWidth="1"
            />
            {row.highlight && <rect x="218" y={y - 2} width="3" height="50" fill="#C9A84C" rx="1" />}
            {/* Load ID */}
            <text x="234" y={y + 18} fill="#C9A84C" fontSize="12" fontWeight="600">{row.id}</text>
            <text x="234" y={y + 33} fill="#3D5470" fontSize="10">Auto Transport</text>
            {/* Lane */}
            <text x="316" y={y + 18} fill="#f0f4f8" fontSize="12" fontWeight="500">{row.origin}</text>
            <text x="316" y={y + 33} fill="#9a9894" fontSize="10">→ {row.dest}</text>
            {/* Carrier */}
            <text x="548" y={y + 18} fill={row.carrier.startsWith('—') ? '#3D5470' : '#c8d8e8'} fontSize="12">{row.carrier}</text>
            {/* Status badge */}
            <rect x="700" y={y + 8} width={row.status.length * 6.8 + 14} height="20" rx="10" fill={row.statusBg} stroke={row.statusColor} strokeWidth="1" />
            <circle cx="713" cy="18" r="3" fill={row.statusColor} />
            <text x="720" y={y + 21} fill={row.statusColor} fontSize="10" fontWeight="600">{row.status}</text>
            {/* ETA */}
            <text x="820" y={y + 18} fill="#c8d8e8" fontSize="12">{row.eta}</text>
            {/* Vehicles */}
            <text x="908" y={y + 18} fill="#c8d8e8" fontSize="12" textAnchor="middle">{row.vehicles}</text>
            {/* Rate */}
            <text x="998" y={y + 18} fill="#f0f4f8" fontSize="12" fontWeight="600">{row.rate}</text>
            {/* Margin */}
            {row.margin !== '—' ? (
              <>
                <rect x="1090" y={y + 6} width="88" height="22" rx="4" fill="#0a1f14" />
                <text x="1134" y={y + 21} fill={row.marginColor} fontSize="11" fontWeight="600" textAnchor="middle">
                  {row.margin} · {row.marginPct}
                </text>
              </>
            ) : (
              <text x="1100" y={y + 18} fill="#3D5470" fontSize="12">—</text>
            )}
          </g>
        );
      })}

      {/* Bottom status bar */}
      <rect x="0" y="468" width="1200" height="1" fill="#1e2d40" />
      <rect x="218" y="476" width="970" height="40" rx="6" fill="#0d121e" stroke="#1e2d40" strokeWidth="1" />
      <text x="234" y="500" fill="#9a9894" fontSize="11">
        Showing 5 of 47 loads · Page 1 of 10
      </text>
      <rect x="1040" y="483" width="60" height="22" rx="4" fill="#1e2d40" />
      <text x="1070" y="498" fill="#c8d8e8" fontSize="11" textAnchor="middle">← Prev</text>
      <rect x="1108" y="483" width="68" height="22" rx="4" fill="#1e2d40" />
      <text x="1142" y="498" fill="#c8d8e8" fontSize="11" textAnchor="middle">Next →</text>

      {/* Right detail panel */}
      <rect x="218" y="530" width="970" height="150" rx="6" fill="#111827" stroke="#1e2d40" strokeWidth="1" />
      <rect x="218" y="530" width="970" height="3" fill="#C9A84C" rx="1" />
      <text x="236" y="553" fill="#C9A84C" fontSize="11" fontWeight="700" letterSpacing="0.5">SELECTED · LX-4821</text>
      <text x="780" y="553" fill="#9a9894" fontSize="11">VIN: 1HGCM82633A004352 · 2023 Honda CR-V EX</text>

      {/* Mini timeline */}
      {[
        { x: 248, label: 'Order Created', time: 'Apr 29 · 09:14', done: true },
        { x: 430, label: 'Carrier Assigned', time: 'Apr 29 · 11:32', done: true },
        { x: 612, label: 'Picked Up', time: 'May 1 · 07:45', done: true },
        { x: 794, label: 'In Transit', time: 'Est. May 3', done: false, active: true },
        { x: 976, label: 'Delivered', time: 'Est. May 3 · 14:30', done: false },
      ].map((step, i) => (
        <g key={i}>
          <circle cx={step.x + 8} cy="582" r="7" fill={step.done ? '#C9A84C' : step.active ? '#1d2d40' : '#1e2d40'}
            stroke={step.active ? '#C9A84C' : 'none'} strokeWidth="2" />
          {step.done && (
            <text x={step.x + 8} y="586" fill="#0a0f1a" fontSize="8" textAnchor="middle" fontWeight="700">✓</text>
          )}
          {step.active && (
            <circle cx={step.x + 8} cy="582" r="4" fill="#C9A84C" />
          )}
          {i < 4 && (
            <line
              x1={step.x + 16}
              y1="582"
              x2={step.x + 174}
              y2="582"
              stroke={step.done ? '#C9A84C' : '#1e2d40'}
              strokeWidth="2"
              strokeDasharray={step.done ? 'none' : '4 3'}
            />
          )}
          <text x={step.x + 8} y="600" fill={step.active ? '#f0f4f8' : step.done ? '#c8d8e8' : '#3D5470'} fontSize="10" textAnchor="middle">{step.label}</text>
          <text x={step.x + 8} y="614" fill={step.done || step.active ? '#9a9894' : '#2a3a4a'} fontSize="9" textAnchor="middle">{step.time}</text>
        </g>
      ))}

      {/* Stats row */}
      {[
        { x: 248, label: 'Carrier', value: 'Demo Carrier Alpha' },
        { x: 500, label: 'Driver', value: 'Marcus T. · (313) 555-0182' },
        { x: 750, label: 'Rate Confirmed', value: '$2,140 · May 1' },
        { x: 976, label: 'Margin', value: '$387 · 18.1%' },
      ].map((stat) => (
        <g key={stat.x}>
          <text x={stat.x} y="645" fill="#9a9894" fontSize="10">{stat.label}</text>
          <text x={stat.x} y="661" fill="#f0f4f8" fontSize="12" fontWeight="500">{stat.value}</text>
        </g>
      ))}
    </svg>
  );
}
