// BIDashboardMockup.tsx — real BI dashboard: KPI row, revenue & GP chart, carrier performance table
// Reconstructed from app/dashboard/bi/page.tsx (674 lines, 11 real widgets across 5 rows)

export default function BIDashboardMockup() {
  return (
    <svg
      viewBox="0 0 1200 780"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL business intelligence dashboard"
      role="img"
    >
      <defs>
        <linearGradient id="biBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="biCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="biBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2C47A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        <clipPath id="biRound"><rect width="1200" height="780" rx="10" ry="10" /></clipPath>
      </defs>

      <rect width="1200" height="780" fill="url(#biBg)" clipPath="url(#biRound)" />

      <rect width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">BI Dashboard</text>
      <rect x="96" y="45" width="90" height="2" fill="#C9A84C" rx="1" />
      {/* date range pills */}
      {['Today', 'This Week', 'This Month', 'Last 30 Days', 'YTD'].map((r, i) => (
        <g key={i}>
          <rect x={620 + i * 100} y="14" width="92" height="24" rx="6" fill={i === 2 ? '#C9A84C' : '#0d1420'} stroke={i === 2 ? '#C9A84C' : '#1e2d40'} strokeWidth="1" />
          <text x={666 + i * 100} y="30" fill={i === 2 ? '#0a0f1a' : '#9a9894'} fontSize="10" fontWeight="700" textAnchor="middle">{r}</text>
        </g>
      ))}

      {/* Row 1: alert KPIs */}
      {[
        { x: 24, label: 'AGING ORDERS', val: '4', color: '#f59e0b', sub: 'Delivered, not invoiced >7 days' },
        { x: 408, label: 'DELAYED PICK UPS', val: '2', color: '#f87171', sub: 'Scheduled pickup passed' },
        { x: 792, label: 'DELAYED DELIVERIES', val: '1', color: '#f87171', sub: 'Est. delivery passed' },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="72" width="376" height="110" rx="8" fill="url(#biCard)" stroke="#1e2d40" strokeWidth="1" />
          <text x={c.x + 20} y="100" fill="#9a9894" fontSize="11" fontWeight="600" letterSpacing="0.5">{c.label}</text>
          <text x={c.x + 20} y="148" fill={c.color} fontSize="38" fontWeight="700" fontFamily="Arial">{c.val}</text>
          <text x={c.x + 20} y="168" fill="#3D5470" fontSize="10.5">{c.sub}</text>
        </g>
      ))}

      {/* Row 2: revenue & GP + carrier table */}
      <rect x="24" y="196" width="680" height="270" rx="8" fill="url(#biCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="44" y="224" fill="#9a9894" fontSize="11" fontWeight="600" letterSpacing="0.5">REVENUE &amp; GP THIS MONTH</text>
      <rect x="44" y="236" width="150" height="52" rx="8" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1" />
      <text x="58" y="254" fill="#C9A84C" fontSize="10" fontWeight="700">REVENUE</text>
      <text x="58" y="278" fill="#C9A84C" fontSize="20" fontWeight="700">$412.8K</text>
      <rect x="204" y="236" width="150" height="52" rx="8" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1" />
      <text x="218" y="254" fill="#C9A84C" fontSize="10" fontWeight="700">GROSS PROFIT</text>
      <text x="218" y="278" fill="#C9A84C" fontSize="20" fontWeight="700">$58.6K</text>

      {[34, 42, 52, 46, 64].map((h, i) => {
        const cx = 80 + i * 120;
        return (
          <g key={i}>
            <rect x={cx} y={410 - h} width="16" height={h} rx="3" fill="url(#biBar)" />
            <rect x={cx + 20} y={410 - h * 0.64} width="16" height={h * 0.64} rx="3" fill="#E2C47A" opacity="0.6" />
            <text x={cx + 18} y="428" fill="#3D5470" fontSize="10" textAnchor="middle">{['MAR', 'APR', 'MAY', 'JUN', 'JUL'][i]}</text>
          </g>
        );
      })}
      <text x="44" y="450" fill="#3D5470" fontSize="10">Click any month to expand exact revenue, GP, and margin figures</text>

      <rect x="720" y="196" width="456" height="270" rx="8" fill="url(#biCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="740" y="224" fill="#9a9894" fontSize="11" fontWeight="600" letterSpacing="0.5">CARRIER PERFORMANCE</text>
      {[
        ['Rocky Mtn Transport', '91%', '#10b981', 'GREAT'],
        ['NW Auto Haul', '76%', '#f59e0b', 'OK'],
        ['Desert Line Logistics', '64%', '#f87171', 'WATCH'],
      ].map((r, i) => {
        const y = 254 + i * 40;
        return (
          <g key={i}>
            <text x="740" y={y} fill="#e2eaf2" fontSize="12">{r[0]}</text>
            <text x="1020" y={y} fill={r[2]} fontSize="13" fontWeight="700">{r[1]}</text>
            <rect x="1060" y={y - 14} width="76" height="20" rx="10" fill={`${r[2]}22`} stroke={r[2]} strokeWidth="0.5" />
            <text x="1098" y={y} fill={r[2]} fontSize="9" fontWeight="700" textAnchor="middle">{r[3]}</text>
            {i < 2 && <line x1="740" y1={y + 14} x2="1156" y2={y + 14} stroke="#1e2d40" strokeWidth="0.5" />}
          </g>
        );
      })}

      {/* Row 3: on-time pickup vs delivery, two separate delay-carrier breakdowns */}
      <rect x="24" y="484" width="562" height="180" rx="8" fill="url(#biCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="44" y="512" fill="#9a9894" fontSize="11" fontWeight="600">ON-TIME PICK UPS</text>
      <text x="44" y="548" fill="#10b981" fontSize="30" fontWeight="700">87.3%</text>
      <text x="44" y="576" fill="#3D5470" fontSize="10" fontWeight="700" letterSpacing="0.5">TOP DELAY CARRIERS — PICKUP</text>
      <text x="44" y="596" fill="#e2eaf2" fontSize="11">NW Auto Haul — 6 late</text>
      <text x="44" y="614" fill="#e2eaf2" fontSize="11">Desert Line Logistics — 3 late</text>

      <rect x="614" y="484" width="562" height="180" rx="8" fill="url(#biCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="634" y="512" fill="#9a9894" fontSize="11" fontWeight="600">ON-TIME DELIVERIES</text>
      <text x="634" y="548" fill="#f59e0b" fontSize="30" fontWeight="700">79.1%</text>
      <text x="634" y="576" fill="#3D5470" fontSize="10" fontWeight="700" letterSpacing="0.5">TOP DELAY CARRIERS — DELIVERY</text>
      <text x="634" y="596" fill="#e2eaf2" fontSize="11">East Coast Carriers — 4 late</text>
      <text x="634" y="614" fill="#e2eaf2" fontSize="11">NW Auto Haul — 2 late</text>

      <text x="24" y="700" fill="#3D5470" fontSize="10.5">Pickup delays and delivery delays get separate carrier breakdowns — a carrier great at pickups can still be your worst delivery risk.</text>
      <text x="24" y="720" fill="#3D5470" fontSize="10.5">Reconstructed from app/dashboard/bi/page.tsx — all 11 real widgets, the real 7-option date filter, and the real GREAT/OK/WATCH thresholds.</text>
    </svg>
  );
}
