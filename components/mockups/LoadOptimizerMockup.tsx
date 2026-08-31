/**
 * LoadOptimizerMockup.tsx — Load Optimizer screenshot
 *
 * Shows the visual experience of building a load on a 9-car transporter from a
 * VIN queue. Vocabulary: VINs (the vehicles), load (the carrier assignment).
 * "Bin" / "slot" / "bin packing" are engineering jargon and never appear in
 * customer-facing copy.
 *
 * Intentionally does NOT expose: capacity-weight values, scoring weights, inop
 * penalty magnitude, rebuild timing, or any formula details. Algorithm is
 * proprietary.
 *
 * Conveys the OUTCOME (utilization meter, packed/skipped state, deck
 * visualization, KPI strip) without revealing HOW the optimizer reaches it.
 */

export default function LoadOptimizerMockup() {
  // Vehicle queue — categories are publicly known auto-transport terms.
  // Specific capacity values, sizing math, and order are deliberately abstracted.
  const vehicles = [
    { id: 'V01', vin: '1HGCV1F30M', make: 'Honda',   model: 'Civic',     class: 'Sedan',         color: '#10b981', inop: false, packed: true },
    { id: 'V02', vin: '5TFAW5F1XM', make: 'Toyota',  model: 'Tundra',    class: 'Pickup',        color: '#60a5fa', inop: false, packed: true },
    { id: 'V03', vin: '1FT8W3DT0L', make: 'Ford',    model: 'F-350',     class: 'HD Pickup',     color: '#f97316', inop: false, packed: true },
    { id: 'V04', vin: 'WBA8E9G50J', make: 'BMW',     model: '330i',      class: 'Sedan',         color: '#10b981', inop: false, packed: true },
    { id: 'V05', vin: '1GNSKFKD8N', make: 'Chevy',   model: 'Suburban',  class: 'Full-size SUV', color: '#a78bfa', inop: false, packed: false },
    { id: 'V06', vin: '5XYZH4AG0L', make: 'Hyundai', model: 'Elantra',   class: 'Sedan (INOP)',  color: '#ef4444', inop: true,  packed: false },
    { id: 'V07', vin: 'JTEBU5JR8K', make: 'Toyota',  model: '4Runner',   class: 'Mid-size SUV',  color: '#a78bfa', inop: false, packed: true },
  ];

  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL Load Optimizer — load building from VIN queue"
      role="img"
    >
      <defs>
        <linearGradient id="loBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1823" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="loSlotFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="loGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#E2C47A" />
        </linearGradient>
        <clipPath id="loRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="700" fill="url(#loBg)" clipPath="url(#loRound)" />

      {/* Top chrome */}
      <rect x="0" y="0" width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#9a9894" fontSize="12">Load Optimizer</text>
      <text x="226" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">Build #LOAD-2241</text>
      <text x="1080" y="32" fill="#10b981" fontSize="11" fontWeight="600" textAnchor="end">● ENGINE READY</text>

      {/* === LEFT PANEL: Vehicle queue === */}
      <text x="24" y="84" fill="#C9A84C" fontSize="10" fontWeight="700" letterSpacing="2">01 · VEHICLE QUEUE</text>
      <text x="24" y="104" fill="#f0f4f8" fontSize="14" fontWeight="600">7 vehicles awaiting dispatch</text>
      <text x="24" y="120" fill="#9a9894" fontSize="11">Detroit, MI → Atlanta, GA · Pickup window: May 2-3</text>

      {vehicles.map((v, i) => {
        const y = 144 + i * 58;
        return (
          <g key={v.id}>
            <rect x="24" y={y} width="370" height="48" rx="6"
              fill={v.packed ? '#141c2b' : '#1a0e0e'}
              stroke={v.packed ? '#1e2d40' : '#7f1d1d'}
              strokeWidth="1" />
            <rect x="24" y={y} width="3" height="48" fill={v.color} />
            <text x="38" y={y + 16} fill="#f0f4f8" fontSize="11" fontWeight="700">{v.make} {v.model}</text>
            <text x="38" y={y + 30} fill="#9a9894" fontSize="10">{v.vin}··· · {v.class}</text>
            <text x="38" y={y + 42} fill={v.inop ? '#ef4444' : '#9a9894'} fontSize="10">
              {v.inop ? '⚠ INOPERABLE — needs dolly' : 'Operable'}
            </text>
            {v.packed ? (
              <>
                <rect x="320" y={y + 14} width="56" height="20" rx="4" fill="#0a1f14" stroke="#10b981" strokeWidth="1" />
                <text x="348" y={y + 28} fill="#10b981" fontSize="10" fontWeight="700" textAnchor="middle">PACKED</text>
              </>
            ) : (
              <>
                <rect x="320" y={y + 14} width="56" height="20" rx="4" fill="#1a0e0e" stroke="#ef4444" strokeWidth="1" />
                <text x="348" y={y + 28} fill="#ef4444" fontSize="10" fontWeight="700" textAnchor="middle">SKIPPED</text>
              </>
            )}
          </g>
        );
      })}

      {/* === CENTER: Carrier truck visualization === */}
      <text x="430" y="84" fill="#C9A84C" fontSize="10" fontWeight="700" letterSpacing="2">02 · CARRIER PACKING</text>
      <text x="430" y="104" fill="#f0f4f8" fontSize="14" fontWeight="600">9-car transporter · Optimal build</text>
      <text x="430" y="120" fill="#9a9894" fontSize="11">5 of 7 vehicles fitted — 2 deferred to next build</text>

      {/* Truck body silhouette */}
      <g transform="translate(430, 144)">
        {/* Cab */}
        <rect x="0" y="40" width="60" height="80" rx="4" fill="#1f2937" stroke="#3D5470" strokeWidth="1.5" />
        <rect x="6" y="50" width="48" height="22" rx="2" fill="#0a0f1a" />
        <circle cx="14" cy="120" r="8" fill="#0a0f1a" stroke="#3D5470" strokeWidth="1" />
        <circle cx="46" cy="120" r="8" fill="#0a0f1a" stroke="#3D5470" strokeWidth="1" />

        {/* Trailer base */}
        <rect x="64" y="20" width="380" height="100" rx="3" fill="#141c2b" stroke="#3D5470" strokeWidth="1.5" />

        {/* Lower deck */}
        <rect x="68" y="80" width="372" height="36" rx="2" fill="url(#loSlotFill)" />
        <text x="74" y="74" fill="#3D5470" fontSize="9" letterSpacing="1">LOWER DECK</text>

        {/* Upper deck */}
        <rect x="68" y="40" width="372" height="36" rx="2" fill="url(#loSlotFill)" />
        <text x="74" y="36" fill="#3D5470" fontSize="9" letterSpacing="1">UPPER DECK</text>

        {/* Trailer wheels */}
        <circle cx="100" cy="120" r="8" fill="#0a0f1a" stroke="#3D5470" strokeWidth="1" />
        <circle cx="124" cy="120" r="8" fill="#0a0f1a" stroke="#3D5470" strokeWidth="1" />
        <circle cx="380" cy="120" r="8" fill="#0a0f1a" stroke="#3D5470" strokeWidth="1" />
        <circle cx="404" cy="120" r="8" fill="#0a0f1a" stroke="#3D5470" strokeWidth="1" />

        {/* Vehicles packed on lower deck — shown as visual blocks, no capacity numbers */}
        <rect x="74" y="84" width="110" height="28" rx="3" fill="#f97316" opacity="0.85" />
        <text x="129" y="101" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">F-350</text>

        <rect x="188" y="84" width="76" height="28" rx="3" fill="#60a5fa" opacity="0.85" />
        <text x="226" y="101" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">Tundra</text>

        <rect x="268" y="84" width="62" height="28" rx="3" fill="#a78bfa" opacity="0.85" />
        <text x="299" y="101" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">4Runner</text>

        {/* Empty space lower deck */}
        <rect x="334" y="86" width="104" height="24" rx="2" fill="#0a0f1a" stroke="#3D5470" strokeWidth="1" strokeDasharray="3 3" />
        <text x="386" y="102" fill="#3D5470" fontSize="10" textAnchor="middle">Available</text>

        {/* Vehicles on upper deck (compacts) */}
        <rect x="74" y="44" width="50" height="28" rx="3" fill="#10b981" opacity="0.85" />
        <text x="99" y="61" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">Civic</text>

        <rect x="128" y="44" width="50" height="28" rx="3" fill="#10b981" opacity="0.85" />
        <text x="153" y="61" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">BMW</text>

        {/* Empty upper deck */}
        <rect x="182" y="46" width="256" height="24" rx="2" fill="#0a0f1a" stroke="#3D5470" strokeWidth="1" strokeDasharray="3 3" />
        <text x="310" y="62" fill="#3D5470" fontSize="10" textAnchor="middle">Available · height-limited</text>
      </g>

      {/* Utilization meter — abstract bar, no numerical capacity disclosure */}
      <g transform="translate(430, 320)">
        <text x="0" y="0" fill="#9a9894" fontSize="10" fontWeight="600" letterSpacing="1">CAPACITY UTILIZATION</text>
        <rect x="0" y="10" width="446" height="22" rx="4" fill="#141c2b" stroke="#1e2d40" strokeWidth="1" />
        <rect x="2" y="12" width="392" height="18" rx="3" fill="url(#loGold)" />
        <text x="223" y="26" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">88% utilization · margin protected</text>
      </g>

      {/* === RIGHT PANEL: Optimizer decisions — outcomes only === */}
      <text x="900" y="84" fill="#C9A84C" fontSize="10" fontWeight="700" letterSpacing="2">03 · OPTIMIZER DECISIONS</text>
      <text x="900" y="104" fill="#f0f4f8" fontSize="14" fontWeight="600">Why this build?</text>

      {[
        { title: '✓ Heavy vehicles placed first',  body: 'Lower deck reserved for HD pickups and full-size SUVs.',         color: '#10b981' },
        { title: '✓ Deck physics respected',        body: 'Compacts on upper, height-limited vehicles on lower.',           color: '#10b981' },
        { title: '✓ Carrier rate re-priced',        body: 'Lane mileage + class mix → updated carrier confirmation.',       color: '#10b981' },
        { title: '⚠ Inoperable Hyundai skipped',    body: 'Reserved space + dolly room not available in this build.',       color: '#f59e0b' },
        { title: '⚠ Suburban deferred',             body: 'Adding it would force a deck conflict. Held for next build.',    color: '#f59e0b' },
        { title: '→ Suggested next action',         body: 'Combine the 2 skipped vehicles + 3 inbound for build #LOAD-2242.', color: '#C9A84C' },
      ].map((row, i) => (
        <g key={i} transform={`translate(900, ${130 + i * 58})`}>
          <rect x="0" y="0" width="280" height="48" rx="6" fill="#141c2b" stroke="#1e2d40" strokeWidth="1" />
          <rect x="0" y="0" width="3" height="48" fill={row.color} />
          <text x="14" y="20" fill={row.color} fontSize="11" fontWeight="700">{row.title}</text>
          <text x="14" y="36" fill="#9a9894" fontSize="10">{row.body}</text>
        </g>
      ))}

      {/* === BOTTOM BAR: KPIs (outcome metrics only — no algorithm leakage) === */}
      <line x1="24" y1="608" x2="1176" y2="608" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="632" fill="#3D5470" fontSize="10" fontWeight="600" letterSpacing="1">BUILD METRICS</text>
      {[
        { label: 'EST. REVENUE',     value: '$3,840',  color: '#10b981' },
        { label: 'CARRIER COST',     value: '$2,610',  color: '#9a9894' },
        { label: 'GROSS MARGIN',     value: '32.0%',   color: '#C9A84C' },
        { label: 'LANE EFFICIENCY',  value: '88%',     color: '#60a5fa' },
        { label: 'UTILIZATION',      value: '88%',     color: '#a78bfa' },
        { label: 'STATUS',           value: 'READY',   color: '#10b981' },
      ].map((kpi, i) => (
        <g key={kpi.label} transform={`translate(${24 + i * 195}, 648)`}>
          <text x="0" y="14" fill={kpi.color} fontSize="22" fontWeight="700" fontFamily="Bebas Neue, sans-serif" letterSpacing="1">{kpi.value}</text>
          <text x="0" y="32" fill="#3D5470" fontSize="9" letterSpacing="1">{kpi.label}</text>
        </g>
      ))}

      <rect x="0" y="0" width="1200" height="700" rx="10" ry="10" fill="none" stroke="#1e2d40" strokeWidth="1" />
    </svg>
  );
}
