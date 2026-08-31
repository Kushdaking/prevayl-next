// AccountingDashMockup.tsx — Revenue / AR / GL summary dashboard
// Shows P&L summary strip, AR aging buckets, recent GL entries, revenue sparkline

export default function AccountingDashMockup() {
  const sparklinePoints = [
    [0, 88], [40, 72], [80, 80], [120, 60], [160, 44], [200, 52],
    [240, 38], [280, 28], [320, 34], [360, 16], [400, 22], [440, 8],
  ];
  const sparkPath = sparklinePoints.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');
  const sparkFill = sparkPath + ` L 440 100 L 0 100 Z`;

  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL accounting dashboard"
      role="img"
    >
      <defs>
        <linearGradient id="acBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="acCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="acSparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(201,168,76,0.25)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
        </linearGradient>
        <linearGradient id="acBarRevenue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#A67C32" />
        </linearGradient>
        <linearGradient id="acBarCost" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a3d56" />
          <stop offset="100%" stopColor="#1e2d40" />
        </linearGradient>
        <clipPath id="acRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
        <clipPath id="acSparkClip">
          <rect x="0" y="0" width="440" height="100" />
        </clipPath>
      </defs>

      <rect width="1200" height="700" fill="url(#acBg)" clipPath="url(#acRound)" />

      {/* Top chrome */}
      <rect width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#9a9894" fontSize="12">Accounting</text>
      <text x="194" y="32" fill="#9a9894" fontSize="12">Dashboard</text>
      <text x="278" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">Reports</text>
      <rect x="274" y="45" width="48" height="2" fill="#C9A84C" rx="1" />
      <text x="342" y="32" fill="#9a9894" fontSize="12">Invoices</text>
      <text x="404" y="32" fill="#9a9894" fontSize="12">GL Entries</text>
      <text x="482" y="32" fill="#9a9894" fontSize="12">AR Aging</text>
      <text x="546" y="32" fill="#9a9894" fontSize="12">Payables</text>

      {/* Period selector */}
      <rect x="1034" y="14" width="80" height="26" rx="4" fill="#1e2d40" stroke="#2a3d56" strokeWidth="1" />
      <text x="1074" y="31" fill="#c8d8e8" fontSize="11" textAnchor="middle">April 2026 ▾</text>
      <rect x="1122" y="14" width="56" height="26" rx="4" fill="#C9A84C" />
      <text x="1150" y="31" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">Export</text>

      {/* Page header */}
      <text x="24" y="83" fill="#f0f4f8" fontSize="18" fontWeight="700">Financial Overview — April 2026</text>
      <text x="24" y="101" fill="#9a9894" fontSize="12">Cars2go LLC · Accrual basis · UTC−5 · 47 shipments closed this period</text>

      {/* KPI strip — 4 cards */}
      {[
        { x: 24, label: 'Gross Revenue', value: '$84,320', sub: '+12.4% vs Mar', subColor: '#10b981', border: '#C9A84C' },
        { x: 316, label: 'Carrier Costs', value: '$67,140', sub: '79.6% of revenue', subColor: '#9a9894', border: '#1e2d40' },
        { x: 608, label: 'Gross Profit', value: '$17,180', sub: '20.4% margin', subColor: '#C9A84C', border: '#C9A84C' },
        { x: 900, label: 'Outstanding AR', value: '$23,440', sub: '11 open invoices', subColor: '#f59e0b', border: '#1e2d40' },
      ].map((kpi) => (
        <g key={kpi.x}>
          <rect x={kpi.x} y={112} width="276" height="84" rx="8" fill="url(#acCard)" stroke={kpi.border} strokeWidth="1" />
          <text x={kpi.x + 18} y={140} fill="#9a9894" fontSize="11">{kpi.label}</text>
          <text x={kpi.x + 18} y={171} fill="#f0f4f8" fontSize="24" fontWeight="700">{kpi.value}</text>
          <text x={kpi.x + 18} y={187} fill={kpi.subColor} fontSize="11">{kpi.sub}</text>
        </g>
      ))}

      {/* Revenue chart (left, large) */}
      <rect x="24" y="212" width="580" height="248" rx="8" fill="url(#acCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="44" y="238" fill="#f0f4f8" fontSize="14" fontWeight="600">Revenue vs Carrier Cost — Last 12 Months</text>
      <text x="44" y="254" fill="#9a9894" fontSize="11">Monthly gross · USD</text>

      {/* Bar chart */}
      {[
        { label: 'May', rev: 62, cost: 50 },
        { label: 'Jun', rev: 68, cost: 54 },
        { label: 'Jul', rev: 58, cost: 48 },
        { label: 'Aug', rev: 74, cost: 59 },
        { label: 'Sep', rev: 70, cost: 56 },
        { label: 'Oct', rev: 76, cost: 60 },
        { label: 'Nov', rev: 80, cost: 63 },
        { label: 'Dec', rev: 72, cost: 58 },
        { label: 'Jan', rev: 65, cost: 53 },
        { label: 'Feb', rev: 78, cost: 62 },
        { label: 'Mar', rev: 75, cost: 60 },
        { label: 'Apr', rev: 84, cost: 67, active: true },
      ].map((bar, i) => {
        const x = 44 + i * 44;
        const maxH = 120;
        const revH = Math.round((bar.rev / 90) * maxH);
        const costH = Math.round((bar.cost / 90) * maxH);
        const baseY = 420;
        return (
          <g key={bar.label}>
            <rect x={x} y={baseY - revH} width="18" height={revH} rx="2"
              fill={bar.active ? '#C9A84C' : '#1e2d40'} stroke={bar.active ? '#E2C47A' : 'none'} strokeWidth="1" />
            <rect x={x + 20} y={baseY - costH} width="18" height={costH} rx="2" fill="#2a3d56" />
            <text x={x + 9} y={baseY + 14} fill={bar.active ? '#C9A84C' : '#3D5470'} fontSize="9" textAnchor="middle">{bar.label}</text>
          </g>
        );
      })}
      {/* Y-axis labels */}
      {['$90k', '$60k', '$30k', '$0'].map((label, i) => (
        <g key={label}>
          <text x="36" y={300 + i * 40} fill="#3D5470" fontSize="9" textAnchor="end">{label}</text>
          <line x1="44" y1={296 + i * 40} x2="572" y2={296 + i * 40} stroke="#1e2d40" strokeWidth="1" />
        </g>
      ))}
      {/* Legend */}
      <rect x="44" y="440" width="10" height="10" rx="2" fill="#C9A84C" />
      <text x="58" y="449" fill="#9a9894" fontSize="10">Revenue</text>
      <rect x="120" y="440" width="10" height="10" rx="2" fill="#2a3d56" />
      <text x="134" y="449" fill="#9a9894" fontSize="10">Carrier Cost</text>

      {/* Sparkline card (right top) */}
      <rect x="624" y="212" width="552" height="120" rx="8" fill="url(#acCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="644" y="238" fill="#f0f4f8" fontSize="14" fontWeight="600">Gross Profit Trend</text>
      <text x="644" y="254" fill="#9a9894" fontSize="11">Rolling 12-month · Improving</text>
      <text x="1092" y="238" fill="#10b981" fontSize="14" fontWeight="700" textAnchor="end">+34.2%</text>
      <text x="1092" y="254" fill="#9a9894" fontSize="11" textAnchor="end">YoY</text>
      <g transform="translate(644, 262) scale(0.9, 1)" clipPath="url(#acSparkClip)">
        <path d={sparkFill} fill="url(#acSparkFill)" />
        <path d={sparkPath} fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="440" cy="8" r="4" fill="#C9A84C" />
      </g>

      {/* AR Aging (right middle) */}
      <rect x="624" y="344" width="552" height="116" rx="8" fill="url(#acCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="644" y="370" fill="#f0f4f8" fontSize="14" fontWeight="600">AR Aging</text>
      <text x="644" y="386" fill="#9a9894" fontSize="11">Open invoices by age bucket</text>

      {[
        { label: 'Current (0–30d)', amount: '$9,840', pct: 42, color: '#10b981' },
        { label: '31–60 days', amount: '$7,200', pct: 31, color: '#C9A84C' },
        { label: '61–90 days', amount: '$4,160', pct: 18, color: '#f59e0b' },
        { label: '90+ days', amount: '$2,240', pct: 9, color: '#ef4444' },
      ].map((bucket, i) => (
        <g key={bucket.label}>
          <text x="644" y={404 + i * 19} fill="#9a9894" fontSize="10">{bucket.label}</text>
          <rect x="800" y={394 + i * 19} width="260" height="10" rx="5" fill="#1e2d40" />
          <rect x="800" y={394 + i * 19} width={Math.round(260 * bucket.pct / 100)} height="10" rx="5" fill={bucket.color} />
          <text x="1072" y={404 + i * 19} fill={bucket.color} fontSize="10" fontWeight="600">{bucket.amount}</text>
          <text x="1150" y={404 + i * 19} fill="#3D5470" fontSize="10" textAnchor="end">{bucket.pct}%</text>
        </g>
      ))}

      {/* GL Entries table */}
      <rect x="24" y="472" width="1152" height="204" rx="8" fill="url(#acCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="44" y="498" fill="#f0f4f8" fontSize="14" fontWeight="600">Recent GL Entries</text>
      <rect x="1038" y="480" width="120" height="24" rx="4" fill="#1e2d40" />
      <text x="1098" y="496" fill="#c8d8e8" fontSize="11" textAnchor="middle">View All Entries →</text>

      {/* Table header */}
      <rect x="24" y="506" width="1152" height="24" rx="0" fill="#0d121e" />
      {[
        { x: 44, label: 'DATE' },
        { x: 136, label: 'DESCRIPTION' },
        { x: 560, label: 'ACCOUNT' },
        { x: 740, label: 'DEBIT' },
        { x: 860, label: 'CREDIT' },
        { x: 1000, label: 'REF' },
        { x: 1100, label: 'STATUS' },
      ].map((col) => (
        <text key={col.x} x={col.x} y={522} fill="#3D5470" fontSize="10" fontWeight="600" letterSpacing="0.5">{col.label}</text>
      ))}

      {[
        { date: 'May 1', desc: 'Carrier payout — Demo Carrier Foxtrot · LX-4820', acct: '2100 · AP — Carrier', debit: '$3,230', credit: '—', ref: 'AP-8842', status: 'POSTED' },
        { date: 'May 1', desc: 'Revenue recognition — Load LX-4821 delivered', acct: '4000 · Transport Revenue', debit: '—', credit: '$2,140', ref: 'GL-2241', status: 'POSTED' },
        { date: 'Apr 30', desc: 'Invoice issued — Demo Dealer #INV-1194', acct: '1200 · AR — Dealers', debit: '$4,840', credit: '—', ref: 'INV-1194', status: 'POSTED' },
        { date: 'Apr 30', desc: 'Cash receipt — Demo Wholesale Buyer wire transfer', acct: '1000 · Cash — Checking', debit: '$6,100', credit: '—', ref: 'PMT-0441', status: 'CLEARED' },
        { date: 'Apr 29', desc: 'Fuel surcharge adj — Load LX-4817', acct: '5200 · COGS — Fuel Surcharge', debit: '$124', credit: '—', ref: 'ADJ-0088', status: 'POSTED' },
      ].map((row, i) => (
        <g key={row.ref}>
          <rect x="24" y={530 + i * 28} width="1152" height="28" rx="0"
            fill={i % 2 === 0 ? '#111827' : '#0f1823'} />
          <text x="44" y={548 + i * 28} fill="#9a9894" fontSize="11">{row.date}</text>
          <text x="136" y={548 + i * 28} fill="#c8d8e8" fontSize="11">{row.desc}</text>
          <text x="560" y={548 + i * 28} fill="#9a9894" fontSize="11">{row.acct}</text>
          <text x="740" y={548 + i * 28} fill={row.debit === '—' ? '#3D5470' : '#f0f4f8'} fontSize="11" fontWeight={row.debit !== '—' ? '500' : '400'}>{row.debit}</text>
          <text x="860" y={548 + i * 28} fill={row.credit === '—' ? '#3D5470' : '#10b981'} fontSize="11" fontWeight={row.credit !== '—' ? '500' : '400'}>{row.credit}</text>
          <text x="1000" y={548 + i * 28} fill="#3D5470" fontSize="11">{row.ref}</text>
          <rect x="1100" y={534 + i * 28} width={row.status === 'CLEARED' ? 58 : 50} height="16" rx="8"
            fill={row.status === 'CLEARED' ? '#0a1f14' : '#111827'}
            stroke={row.status === 'CLEARED' ? '#10b981' : '#2a3d56'} strokeWidth="1" />
          <text x={1129 + (row.status === 'CLEARED' ? 0 : -4)} y={546 + i * 28}
            fill={row.status === 'CLEARED' ? '#10b981' : '#9a9894'} fontSize="9" fontWeight="600" textAnchor="middle">{row.status}</text>
        </g>
      ))}
    </svg>
  );
}
