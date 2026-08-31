// BIForecastMockup.tsx — real volume forecast, anomaly detection, and customer risk scoring
// Reconstructed from suggestions/volume-forecast, lib/anomaly-detection.ts, customer-risk-scorer

export default function BIForecastMockup() {
  return (
    <svg
      viewBox="0 0 1200 620"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL volume forecast, anomaly detection, and customer risk scoring"
      role="img"
    >
      <defs>
        <linearGradient id="fcBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="fcCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <clipPath id="fcRound"><rect width="1200" height="620" rx="10" ry="10" /></clipPath>
      </defs>

      <rect width="1200" height="620" fill="url(#fcBg)" clipPath="url(#fcRound)" />

      <rect width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">Beyond the Numbers — Predict, Flag, Explain</text>
      <rect x="96" y="45" width="330" height="2" fill="#C9A84C" rx="1" />

      {/* Volume forecast */}
      <rect x="24" y="72" width="562" height="230" rx="8" fill="url(#fcCard)" stroke="#C9A84C" strokeWidth="1" opacity="0.95" />
      <text x="44" y="100" fill="#C9A84C" fontSize="13" fontWeight="700">VOLUME FORECAST</text>
      <text x="44" y="118" fill="#3D5470" fontSize="10">Projected from this month's actual pace</text>
      <text x="44" y="164" fill="#f0f4f8" fontSize="42" fontWeight="700">312</text>
      <rect x="140" y="140" width="120" height="24" rx="12" fill="rgba(16,185,129,0.15)" />
      <text x="200" y="156" fill="#10b981" fontSize="11" fontWeight="700" textAnchor="middle">▲ TRENDING UP</text>
      <rect x="44" y="180" width="500" height="8" rx="4" fill="#0d1420" />
      <rect x="44" y="180" width="340" height="8" rx="4" fill="#C9A84C" />
      <text x="44" y="216" fill="#3D5470" fontSize="10">Trailing 3-mo avg</text>
      <text x="44" y="234" fill="#f0f4f8" fontSize="16" fontWeight="700">274</text>
      <text x="230" y="216" fill="#3D5470" fontSize="10">Same month last year</text>
      <text x="230" y="234" fill="#f0f4f8" fontSize="16" fontWeight="700">256</text>
      <text x="440" y="216" fill="#3D5470" fontSize="10">YoY change</text>
      <text x="440" y="234" fill="#10b981" fontSize="16" fontWeight="700">+22%</text>
      <text x="44" y="270" fill="#3D5470" fontSize="9.5">Projection = (orders so far ÷ days elapsed) × days in month, vs. trailing 3-mo avg.</text>
      <text x="44" y="284" fill="#3D5470" fontSize="9.5">A real pace-based forecast — not a black-box prediction.</text>

      {/* Anomaly feed */}
      <rect x="614" y="72" width="562" height="230" rx="8" fill="url(#fcCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="634" y="100" fill="#f0f4f8" fontSize="13" fontWeight="700">FLAGGED TONIGHT</text>
      <text x="634" y="118" fill="#3D5470" fontSize="10">7 rule checks, run nightly across every active order</text>
      {[
        ['HIGH', '#f87171', 'Order PRVL-4821 unassigned for 52h'],
        ['HIGH', '#f87171', 'Carrier no-show: PRVL-4790, no scan'],
        ['MED', '#f59e0b', '"NW Auto Haul" — 3 missed pickups in 30d'],
        ['LOW', '#8fa8bf', 'Order PRVL-4855 price is a lane outlier'],
      ].map((r, i) => {
        const y = 142 + i * 38;
        return (
          <g key={i}>
            <rect x="634" y={y - 14} width="46" height="18" rx="4" fill={`${r[1]}22`} />
            <text x="657" y={y - 1} fill={r[1]} fontSize="8.5" fontWeight="700" textAnchor="middle">{r[0]}</text>
            <text x="692" y={y} fill="#e2eaf2" fontSize="11">{r[2]}</text>
          </g>
        );
      })}

      {/* Customer risk scoring */}
      <rect x="24" y="318" width="1152" height="270" rx="8" fill="url(#fcCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="44" y="346" fill="#f0f4f8" fontSize="13" fontWeight="700">CUSTOMER RISK SCORING</text>
      <text x="44" y="364" fill="#3D5470" fontSize="10">What &quot;Risk Scorer&quot; in the agent roster actually does — flags who&apos;s becoming a collections problem, before they become one</text>

      {['Avg days to pay past due date', 'Payment ratio — paid vs. invoiced', 'Open claims or disputes on file'].map((s, i) => (
        <g key={i}>
          <rect x={44 + i * 380} y="382" width="360" height="56" rx="8" fill="#0d1420" stroke="#1e2d40" strokeWidth="1" />
          <text x={64 + i * 380} y="402" fill="#3D5470" fontSize="9" fontWeight="700">SIGNAL {i + 1}</text>
          <text x={64 + i * 380} y="422" fill="#e2eaf2" fontSize="11.5">{s}</text>
        </g>
      ))}

      <rect x="44" y="452" width="1112" height="52" rx="8" fill="rgba(239,68,68,0.1)" stroke="#f87171" strokeWidth="1" />
      <rect x="60" y="466" width="90" height="22" rx="11" fill="rgba(239,68,68,0.2)" />
      <text x="105" y="481" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle">HIGH RISK</text>
      <text x="164" y="481" fill="#f0f4f8" fontSize="12" fontWeight="600">Summit Motor Sales</text>
      <text x="164" y="497" fill="#c8d8e8" fontSize="10.5">Avg pay delay: 97 days · Payment ratio: 71% · Notified once, won't repeat for 30 days</text>

      <text x="44" y="530" fill="#3D5470" fontSize="10.5">Reconstructed from app/api/suggestions/volume-forecast, lib/anomaly-detection.ts (7 real rules), and</text>
      <text x="44" y="546" fill="#3D5470" fontSize="10.5">app/api/automations/customer-risk-scorer — real thresholds throughout, no black-box ML dressed up as magic.</text>
    </svg>
  );
}
