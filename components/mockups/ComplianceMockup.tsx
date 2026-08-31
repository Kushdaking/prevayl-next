// ComplianceMockup.tsx — FMCSA / DOT compliance dashboard
// Shows carrier compliance scorecard, authority status, insurance tracker, expiry alerts

export default function ComplianceMockup() {
  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL compliance dashboard"
      role="img"
    >
      <defs>
        <linearGradient id="coBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="coCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="coGaugeGood" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <clipPath id="coRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="700" fill="url(#coBg)" clipPath="url(#coRound)" />

      {/* Top chrome */}
      <rect width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#9a9894" fontSize="12">Carriers</text>
      <text x="164" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">Compliance</text>
      <rect x="160" y="45" width="76" height="2" fill="#C9A84C" rx="1" />
      <text x="258" y="32" fill="#9a9894" fontSize="12">Authority</text>
      <text x="324" y="32" fill="#9a9894" fontSize="12">Insurance</text>
      <text x="394" y="32" fill="#9a9894" fontSize="12">Certificates</text>
      <text x="476" y="32" fill="#9a9894" fontSize="12">Audit Log</text>

      {/* Alert banner */}
      <rect x="0" y="52" width="1200" height="36" fill="#1a0e06" />
      <line x1="0" y1="88" x2="1200" y2="88" stroke="#7c3d06" strokeWidth="1" />
      <rect x="24" y="60" width="8" height="20" rx="2" fill="#f59e0b" />
      <text x="42" y="74" fill="#f59e0b" fontSize="12" fontWeight="600">2 carriers have insurance expiring within 30 days — review before dispatching</text>
      <text x="1148" y="74" fill="#f59e0b" fontSize="12" textAnchor="end">Review →</text>

      {/* Page header */}
      <text x="24" y="114" fill="#f0f4f8" fontSize="17" fontWeight="700">Carrier Compliance Center</text>
      <text x="24" y="132" fill="#9a9894" fontSize="12">18 active carriers · 16 fully compliant · 2 expiring soon · FMCSA sync: 4 min ago</text>

      {/* Org compliance score — large card left */}
      <rect x="24" y="144" width="320" height="236" rx="8" fill="url(#coCard)" stroke="#C9A84C" strokeWidth="1" />
      <text x="44" y="170" fill="#f0f4f8" fontSize="14" fontWeight="600">Fleet Compliance Score</text>
      <text x="44" y="186" fill="#9a9894" fontSize="11">FMCSA safety + authority + insurance</text>

      {/* Circular gauge (SVG arc approximation) */}
      {/* Background ring */}
      <circle cx="184" cy="272" r="68" fill="none" stroke="#1e2d40" strokeWidth="12" />
      {/* Score arc — 94% of 251.2 = 236 */}
      <circle cx="184" cy="272" r="68" fill="none" stroke="#10b981" strokeWidth="12"
        strokeDasharray="236 15" strokeDashoffset="62" strokeLinecap="round" />
      <text x="184" y="266" fill="#f0f4f8" fontSize="28" fontWeight="700" textAnchor="middle">94</text>
      <text x="184" y="283" fill="#9a9894" fontSize="11" textAnchor="middle">out of 100</text>
      <text x="184" y="298" fill="#10b981" fontSize="11" textAnchor="middle" fontWeight="600">COMPLIANT</text>

      {/* Score breakdown */}
      {[
        { label: 'Authority Status', value: '100%', color: '#10b981' },
        { label: 'Insurance Coverage', value: '89%', color: '#C9A84C' },
        { label: 'FMCSA Safety Rating', value: '96%', color: '#10b981' },
        { label: 'Certificate Validity', value: '94%', color: '#10b981' },
      ].map((item, i) => (
        <g key={item.label}>
          <text x="44" y={350 + i * 18} fill="#9a9894" fontSize="11">{item.label}</text>
          <text x="296" y={350 + i * 18} fill={item.color} fontSize="11" fontWeight="600" textAnchor="end">{item.value}</text>
        </g>
      ))}

      {/* Carrier compliance table */}
      <rect x="360" y="144" width="816" height="236" rx="8" fill="url(#coCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="382" y="170" fill="#f0f4f8" fontSize="14" fontWeight="600">Carrier Compliance Status</text>

      {/* Table header */}
      <rect x="360" y="178" width="816" height="24" rx="0" fill="#0d121e" />
      {[
        { x: 380, label: 'CARRIER' },
        { x: 570, label: 'MC / DOT' },
        { x: 680, label: 'AUTHORITY' },
        { x: 790, label: 'INS. EXPIRY' },
        { x: 900, label: 'SAFETY RTG' },
        { x: 1020, label: 'SCORE' },
        { x: 1120, label: 'STATUS' },
      ].map((col) => (
        <text key={col.x} x={col.x} y={194} fill="#3D5470" fontSize="10" fontWeight="600" letterSpacing="0.5">{col.label}</text>
      ))}

      {[
        {
          name: 'Demo Carrier Alpha', mc: 'MC-0000004 · DOT 0000004',
          auth: 'ACTIVE', authColor: '#10b981', authBg: '#0a1f14',
          ins: 'Dec 15, 2026', insDays: 228, insColor: '#10b981',
          safety: 'SATISFACTORY', safetyColor: '#10b981',
          score: 98, scoreColor: '#10b981',
          status: 'COMPLIANT', statusColor: '#10b981', statusBg: '#0a1f14',
        },
        {
          name: 'Demo Carrier Foxtrot', mc: 'MC-0000001 · DOT 0000001',
          auth: 'ACTIVE', authColor: '#10b981', authBg: '#0a1f14',
          ins: 'Jun 1, 2026', insDays: 31, insColor: '#f59e0b',
          safety: 'SATISFACTORY', safetyColor: '#10b981',
          score: 87, scoreColor: '#f59e0b',
          status: 'EXPIRING', statusColor: '#f59e0b', statusBg: '#1a1506',
        },
        {
          name: 'Demo Carrier Beta', mc: 'MC-0000003 · DOT 0000003',
          auth: 'ACTIVE', authColor: '#10b981', authBg: '#0a1f14',
          ins: 'May 28, 2026', insDays: 27, insColor: '#ef4444',
          safety: 'SATISFACTORY', safetyColor: '#10b981',
          score: 82, scoreColor: '#ef4444',
          status: 'EXPIRING', statusColor: '#f59e0b', statusBg: '#1a1506',
        },
        {
          name: 'Demo Carrier Gamma', mc: 'MC-219883 · DOT 3021447',
          auth: 'ACTIVE', authColor: '#10b981', authBg: '#0a1f14',
          ins: 'Mar 8, 2027', insDays: 310, insColor: '#10b981',
          safety: 'SATISFACTORY', safetyColor: '#10b981',
          score: 96, scoreColor: '#10b981',
          status: 'COMPLIANT', statusColor: '#10b981', statusBg: '#0a1f14',
        },
        {
          name: 'Demo Carrier Echo', mc: 'MC-0000002 · DOT 0000002',
          auth: 'ACTIVE', authColor: '#10b981', authBg: '#0a1f14',
          ins: 'Nov 30, 2026', insDays: 213, insColor: '#10b981',
          safety: 'SATISFACTORY', safetyColor: '#10b981',
          score: 94, scoreColor: '#10b981',
          status: 'COMPLIANT', statusColor: '#10b981', statusBg: '#0a1f14',
        },
      ].map((row, i) => (
        <g key={row.mc}>
          <rect x="360" y={202 + i * 34} width="816" height="34" rx="0"
            fill={i % 2 === 0 ? '#111827' : '#0f1823'} />
          {row.status === 'EXPIRING' && (
            <rect x="360" y={202 + i * 34} width="3" height="34" fill="#f59e0b" />
          )}
          <text x="380" y={222 + i * 34} fill="#f0f4f8" fontSize="12" fontWeight="500">{row.name}</text>
          <text x="570" y={222 + i * 34} fill="#9a9894" fontSize="10">{row.mc}</text>

          <rect x="680" y={208 + i * 34} width="72" height="18" rx="9"
            fill={row.authBg} stroke={row.authColor} strokeWidth="1" />
          <text x="716" y={220 + i * 34} fill={row.authColor} fontSize="9" fontWeight="700" textAnchor="middle">{row.auth}</text>

          <text x="790" y={222 + i * 34} fill={row.insColor} fontSize="11">{row.ins}</text>
          {row.insDays < 35 && (
            <>
              <text x="790" y={234 + i * 34} fill={row.insColor} fontSize="9">{row.insDays}d remaining</text>
            </>
          )}

          <text x="900" y={222 + i * 34} fill={row.safetyColor} fontSize="11">{row.safety}</text>

          {/* Score pill */}
          <text x="1020" y={222 + i * 34} fill={row.scoreColor} fontSize="13" fontWeight="700">{row.score}</text>
          <text x="1044" y={222 + i * 34} fill="#3D5470" fontSize="11">/100</text>

          {/* Status badge */}
          <rect x="1110" y={210 + i * 34} width={row.status.length * 7 + 14} height="18" rx="9"
            fill={row.statusBg} stroke={row.statusColor} strokeWidth="1" />
          <text x={1117 + (row.status.length * 7 + 14) / 2} y={222 + i * 34}
            fill={row.statusColor} fontSize="9" fontWeight="700" textAnchor="middle">{row.status}</text>
        </g>
      ))}

      {/* Insurance expiry tracker */}
      <rect x="24" y="396" width="556" height="280" rx="8" fill="url(#coCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="44" y="422" fill="#f0f4f8" fontSize="14" fontWeight="600">Insurance Expiry Timeline</text>
      <text x="44" y="438" fill="#9a9894" fontSize="11">Next 12 months · 18 carriers</text>

      {[
        { carrier: 'Demo Carrier Beta', expiry: 'May 28', days: 27, color: '#ef4444', pct: 7 },
        { carrier: 'Demo Carrier Foxtrot', expiry: 'Jun 1', days: 31, color: '#f59e0b', pct: 8 },
        { carrier: 'Demo Carrier Hotel', expiry: 'Aug 14', days: 105, color: '#C9A84C', pct: 29 },
        { carrier: 'Demo Carrier Delta', expiry: 'Sep 22', days: 144, color: '#60a5fa', pct: 39 },
        { carrier: 'Demo Carrier Alpha', expiry: 'Dec 15', days: 228, color: '#10b981', pct: 62 },
        { carrier: 'Demo Carrier Echo', expiry: 'Nov 30', days: 213, color: '#10b981', pct: 58 },
      ].map((item, i) => (
        <g key={item.carrier}>
          <text x="44" y={458 + i * 36} fill="#c8d8e8" fontSize="11">{item.carrier}</text>
          <text x="540" y={458 + i * 36} fill={item.color} fontSize="11" textAnchor="end">{item.expiry}</text>
          <rect x="44" y={462 + i * 36} width="480" height="8" rx="4" fill="#1e2d40" />
          <rect x="44" y={462 + i * 36} width={Math.round(480 * item.pct / 100)} height="8" rx="4" fill={item.color} opacity="0.8" />
          <text x="44" y={482 + i * 36} fill={item.color} fontSize="9">{item.days}d remaining</text>
        </g>
      ))}

      {/* Right: FMCSA authority status + certificates */}
      <rect x="596" y="396" width="580" height="280" rx="8" fill="url(#coCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="620" y="422" fill="#f0f4f8" fontSize="14" fontWeight="600">Authority &amp; Certificates</text>
      <text x="620" y="438" fill="#9a9894" fontSize="11">FMCSA authority status + active certificates</text>

      {/* Authority summary strip */}
      {[
        { label: 'Common Auth.', count: '17 ACTIVE', color: '#10b981' },
        { label: 'Contract Auth.', count: '14 ACTIVE', color: '#10b981' },
        { label: 'Broker Auth.', count: '0 REVOKED', color: '#9a9894' },
        { label: 'HHG Auth.', count: '3 ACTIVE', color: '#10b981' },
      ].map((item, i) => (
        <g key={item.label}>
          <rect x={620 + i * 138} y={450} width="128" height="44" rx="6" fill="#0d121e" stroke="#1e2d40" strokeWidth="1" />
          <text x={684 + i * 138} y={470} fill="#9a9894" fontSize="10" textAnchor="middle">{item.label}</text>
          <text x={684 + i * 138} y={487} fill={item.color} fontSize="11" fontWeight="600" textAnchor="middle">{item.count}</text>
        </g>
      ))}

      {/* Certificate table */}
      <rect x="620" y="504" width="536" height="24" rx="0" fill="#0d121e" />
      {[{ x: 636, label: 'TYPE' }, { x: 780, label: 'CARRIER' }, { x: 980, label: 'EXPIRES' }, { x: 1100, label: 'STATUS' }].map((col) => (
        <text key={col.x} x={col.x} y={520} fill="#3D5470" fontSize="10" fontWeight="600" letterSpacing="0.5">{col.label}</text>
      ))}

      {[
        { type: 'Form E — Liability', carrier: 'Demo Carrier Alpha', exp: 'Dec 2026', status: 'VALID', color: '#10b981', bg: '#0a1f14' },
        { type: 'Form H — Cargo', carrier: 'Demo Carrier Foxtrot', exp: 'Jun 2026', status: 'EXPIRING', color: '#f59e0b', bg: '#1a1506' },
        { type: 'Form BMC-91X', carrier: 'Demo Carrier Beta', exp: 'May 2026', status: 'URGENT', color: '#ef4444', bg: '#1a0606' },
        { type: 'Form MCS-90', carrier: 'Demo Carrier Gamma', exp: 'Mar 2027', status: 'VALID', color: '#10b981', bg: '#0a1f14' },
        { type: 'Form E — Liability', carrier: 'Demo Carrier Echo', exp: 'Nov 2026', status: 'VALID', color: '#10b981', bg: '#0a1f14' },
      ].map((cert, i) => (
        <g key={`${cert.type}-${cert.carrier}`}>
          <rect x="620" y={528 + i * 28} width="536" height="28" rx="0"
            fill={i % 2 === 0 ? '#111827' : '#0f1823'} />
          {cert.status !== 'VALID' && <rect x="620" y={528 + i * 28} width="3" height="28" fill={cert.color} />}
          <text x="636" y={546 + i * 28} fill="#c8d8e8" fontSize="11">{cert.type}</text>
          <text x="780" y={546 + i * 28} fill="#9a9894" fontSize="11">{cert.carrier}</text>
          <text x="980" y={546 + i * 28} fill={cert.color} fontSize="11">{cert.exp}</text>
          <rect x="1090" y={532 + i * 28} width={cert.status.length * 6.5 + 16} height="18" rx="9" fill={cert.bg} stroke={cert.color} strokeWidth="1" />
          <text x={1098 + (cert.status.length * 6.5 + 16) / 2} y={544 + i * 28} fill={cert.color} fontSize="9" fontWeight="700" textAnchor="middle">{cert.status}</text>
        </g>
      ))}
    </svg>
  );
}
