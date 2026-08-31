// OrdersMockup.tsx — Order creation / multi-vehicle booking flow
// Shows step progress, vehicle entry, lane picker, pricing summary

export default function OrdersMockup() {
  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL order creation interface"
      role="img"
    >
      <defs>
        <linearGradient id="omBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="omCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="omSummary" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2535" />
          <stop offset="100%" stopColor="#131e2e" />
        </linearGradient>
        <clipPath id="omRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="700" fill="url(#omBg)" clipPath="url(#omRound)" />

      {/* Top chrome */}
      <rect width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#9a9894" fontSize="12">Orders</text>
      <text x="160" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">New Order</text>
      <rect x="156" y="45" width="72" height="2" fill="#C9A84C" rx="1" />

      {/* Step progress bar */}
      <rect x="24" y="68" width="1152" height="52" rx="6" fill="#0d121e" />
      {[
        { step: 1, label: 'Customer & Lane', done: true },
        { step: 2, label: 'Vehicles', done: true },
        { step: 3, label: 'Schedule', active: true },
        { step: 4, label: 'Review & Price', done: false },
        { step: 5, label: 'Confirm', done: false },
      ].map((s, i) => {
        const x = 60 + i * 232;
        const done = s.done ?? false;
        const active = s.active ?? false;
        return (
          <g key={s.step}>
            {/* Connector line */}
            {i < 4 && (
              <line
                x1={x + 28} y1="94"
                x2={x + 204} y2="94"
                stroke={done ? '#C9A84C' : '#1e2d40'}
                strokeWidth="2"
                strokeDasharray={done ? 'none' : '4 3'}
              />
            )}
            {/* Circle */}
            <circle cx={x} cy="94" r="14"
              fill={active ? '#C9A84C' : done ? '#A67C32' : '#1e2d40'}
              stroke={active ? '#E2C47A' : done ? 'none' : '#2a3d56'}
              strokeWidth={active ? '2' : '1'} />
            {done && !active && (
              <text x={x} y="98" fill="#0a0f1a" fontSize="10" textAnchor="middle" fontWeight="700">✓</text>
            )}
            {active && (
              <text x={x} y="98" fill="#0a0f1a" fontSize="11" textAnchor="middle" fontWeight="700">{s.step}</text>
            )}
            {!done && !active && (
              <text x={x} y="98" fill="#3D5470" fontSize="11" textAnchor="middle">{s.step}</text>
            )}
            <text x={x} y="113" fill={active ? '#f0f4f8' : done ? '#9a9894' : '#3D5470'} fontSize="10"
              textAnchor="middle" fontWeight={active ? '600' : '400'}>{s.label}</text>
          </g>
        );
      })}

      {/* Left: main form panel */}
      <rect x="24" y="132" width="756" height="544" rx="8" fill="url(#omCard)" stroke="#1e2d40" strokeWidth="1" />

      {/* Step 3: Schedule header */}
      <text x="48" y="163" fill="#f0f4f8" fontSize="16" fontWeight="700">Step 3 — Schedule</text>
      <text x="48" y="181" fill="#9a9894" fontSize="12">Set pickup and delivery windows for this shipment</text>

      {/* Section: Pickup */}
      <text x="48" y="213" fill="#C9A84C" fontSize="11" fontWeight="600" letterSpacing="0.8">PICKUP</text>
      <line x1="48" y1="218" x2="756" y2="218" stroke="#1e2d40" strokeWidth="1" />

      {/* Location card — origin */}
      <rect x="48" y="228" width="340" height="80" rx="6" fill="#0d121e" stroke="#2a3d56" strokeWidth="1" />
      <text x="68" y="250" fill="#9a9894" fontSize="10" fontWeight="600" letterSpacing="0.5">ORIGIN</text>
      <text x="68" y="270" fill="#f0f4f8" fontSize="14" fontWeight="600">Detroit, MI 48201</text>
      <text x="68" y="287" fill="#9a9894" fontSize="11">Demo Auction Yard · 100 Sample Way</text>
      <text x="358" y="250" fill="#C9A84C" fontSize="11" textAnchor="end">Edit</text>

      {/* Pickup date */}
      <rect x="408" y="228" width="340" height="80" rx="6" fill="#0d121e" stroke="#2a3d56" strokeWidth="1" />
      <text x="428" y="250" fill="#9a9894" fontSize="10" fontWeight="600" letterSpacing="0.5">PICKUP WINDOW</text>
      <text x="428" y="270" fill="#f0f4f8" fontSize="14" fontWeight="600">May 3 – May 4, 2026</text>
      <text x="428" y="287" fill="#9a9894" fontSize="11">Flexible 2-day window · Driver will confirm</text>
      <text x="718" y="250" fill="#C9A84C" fontSize="11" textAnchor="end">Edit</text>

      {/* Section: Delivery */}
      <text x="48" y="330" fill="#C9A84C" fontSize="11" fontWeight="600" letterSpacing="0.8">DELIVERY</text>
      <line x1="48" y1="335" x2="756" y2="335" stroke="#1e2d40" strokeWidth="1" />

      <rect x="48" y="345" width="340" height="80" rx="6" fill="#0d121e" stroke="#2a3d56" strokeWidth="1" />
      <text x="68" y="367" fill="#9a9894" fontSize="10" fontWeight="600" letterSpacing="0.5">DESTINATION</text>
      <text x="68" y="387" fill="#f0f4f8" fontSize="14" fontWeight="600">Atlanta, GA 30309</text>
      <text x="68" y="404" fill="#9a9894" fontSize="11">Hennessy Honda · 3060 Peachtree Rd NW</text>
      <text x="358" y="367" fill="#C9A84C" fontSize="11" textAnchor="end">Edit</text>

      <rect x="408" y="345" width="340" height="80" rx="6" fill="#0d121e" stroke="#2a3d56" strokeWidth="1" />
      <text x="428" y="367" fill="#9a9894" fontSize="10" fontWeight="600" letterSpacing="0.5">DELIVERY WINDOW</text>
      <text x="428" y="387" fill="#f0f4f8" fontSize="14" fontWeight="600">May 5 – May 6, 2026</text>
      <text x="428" y="404" fill="#9a9894" fontSize="11">Est. 782 mi · 2-day standard transit</text>

      {/* Vehicle summary table */}
      <text x="48" y="448" fill="#C9A84C" fontSize="11" fontWeight="600" letterSpacing="0.8">VEHICLES (3)</text>
      <line x1="48" y1="453" x2="756" y2="453" stroke="#1e2d40" strokeWidth="1" />

      <rect x="48" y="460" width="692" height="24" rx="0" fill="#0d121e" />
      {[
        { x: 64, label: 'VIN' }, { x: 220, label: 'YEAR / MAKE / MODEL' },
        { x: 440, label: 'CONDITION' }, { x: 568, label: 'TYPE' },
      ].map((c) => (
        <text key={c.x} x={c.x} y={476} fill="#3D5470" fontSize="10" fontWeight="600" letterSpacing="0.5">{c.label}</text>
      ))}

      {[
        { vin: '1HGCM82633A004352', vehicle: '2023 Honda CR-V EX', cond: 'Operable', type: 'SUV / Operable' },
        { vin: '2T1BURHE0JC036031', vehicle: '2018 Toyota Corolla LE', cond: 'Operable', type: 'Sedan / Operable' },
        { vin: 'JM3KE4DY5F0441883', vehicle: '2015 Mazda CX-5 Grand', cond: 'Operable', type: 'SUV / Operable' },
      ].map((v, i) => (
        <g key={v.vin}>
          <rect x="48" y={484 + i * 32} width="692" height="32" rx="0"
            fill={i % 2 === 0 ? '#111827' : '#0f1823'} stroke="#1e2d40" strokeWidth="0.5" />
          <text x="64" y={504 + i * 32} fill="#9a9894" fontSize="11">{v.vin}</text>
          <text x="220" y={504 + i * 32} fill="#f0f4f8" fontSize="11">{v.vehicle}</text>
          <text x="440" y={504 + i * 32} fill="#10b981" fontSize="11">{v.cond}</text>
          <text x="568" y={504 + i * 32} fill="#c8d8e8" fontSize="11">{v.type}</text>
        </g>
      ))}

      {/* Nav buttons */}
      <rect x="48" y="624" width="120" height="36" rx="6" fill="#1e2d40" />
      <text x="108" y="646" fill="#c8d8e8" fontSize="12" textAnchor="middle">← Back</text>
      <rect x="620" y="624" width="120" height="36" rx="6" fill="#C9A84C" />
      <text x="680" y="646" fill="#0a0f1a" fontSize="12" fontWeight="700" textAnchor="middle">Continue →</text>

      {/* Right: Pricing summary panel */}
      <rect x="800" y="132" width="376" height="544" rx="8" fill="url(#omSummary)" stroke="#2a3d56" strokeWidth="1" />
      <rect x="800" y="132" width="376" height="4" fill="#C9A84C" rx="1" />

      <text x="824" y="163" fill="#f0f4f8" fontSize="14" fontWeight="600">Order Summary</text>
      <text x="824" y="180" fill="#9a9894" fontSize="11">Draft · Not yet submitted</text>

      {/* Lane summary */}
      <rect x="824" y="192" width="328" height="54" rx="6" fill="#0d121e" />
      <text x="844" y="212" fill="#9a9894" fontSize="10">Lane</text>
      <text x="844" y="229" fill="#f0f4f8" fontSize="13" fontWeight="600">Detroit, MI → Atlanta, GA</text>
      <text x="844" y="243" fill="#9a9894" fontSize="11">Est. 782 mi · Standard enclosed</text>

      {/* Pricing breakdown */}
      <text x="824" y="270" fill="#9a9894" fontSize="11" fontWeight="600" letterSpacing="0.5">PRICING BREAKDOWN</text>
      <line x1="824" y1="276" x2="1152" y2="276" stroke="#1e2d40" strokeWidth="1" />

      {[
        { label: 'Base transport (3 vehicles)', value: '$1,740', color: '#c8d8e8' },
        { label: 'Fuel surcharge (6.2%)', value: '$108', color: '#c8d8e8' },
        { label: 'Terminal fee — Atlanta', value: '$75', color: '#c8d8e8' },
        { label: 'Insurance coverage', value: '$48', color: '#c8d8e8' },
        { label: 'Platform fee (3%)', value: '$58', color: '#9a9894' },
      ].map((line, i) => (
        <g key={line.label}>
          <text x="824" y={296 + i * 26} fill="#9a9894" fontSize="12">{line.label}</text>
          <text x="1148" y={296 + i * 26} fill={line.color} fontSize="12" textAnchor="end">{line.value}</text>
        </g>
      ))}

      <line x1="824" y1="434" x2="1152" y2="434" stroke="#2a3d56" strokeWidth="1" />
      <text x="824" y="454" fill="#f0f4f8" fontSize="14" fontWeight="700">Total</text>
      <text x="1148" y="454" fill="#C9A84C" fontSize="18" fontWeight="700" textAnchor="end">$2,029</text>
      <text x="1148" y="470" fill="#9a9894" fontSize="11" textAnchor="end">+ tax where applicable</text>

      {/* Transit info */}
      <rect x="824" y="484" width="328" height="72" rx="6" fill="#0d121e" stroke="#1e2d40" strokeWidth="1" />
      <text x="844" y="506" fill="#9a9894" fontSize="11">Estimated Transit</text>
      <text x="844" y="524" fill="#f0f4f8" fontSize="14" fontWeight="600">May 5 – May 6, 2026</text>
      <text x="844" y="541" fill="#9a9894" fontSize="11">2-day standard · FMCSA-compliant carrier</text>
      <rect x="844" y="548" width="56" height="16" rx="8" fill="#0a1f14" stroke="#10b981" strokeWidth="1" />
      <text x="872" y="560" fill="#10b981" fontSize="9" fontWeight="700" textAnchor="middle">INSURED</text>

      {/* Submit CTA */}
      <rect x="824" y="572" width="328" height="44" rx="6" fill="#C9A84C" />
      <text x="988" y="599" fill="#0a0f1a" fontSize="14" fontWeight="700" textAnchor="middle">Confirm &amp; Submit Order</text>
      <text x="988" y="636" fill="#3D5470" fontSize="11" textAnchor="middle">You will be charged upon carrier assignment</text>
      <text x="988" y="654" fill="#3D5470" fontSize="10" textAnchor="middle">Cancellation free up to 24h before pickup</text>
    </svg>
  );
}
