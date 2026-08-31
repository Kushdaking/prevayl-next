/**
 * PinProtocolMockup.tsx — PIN Protocol screenshot
 *
 * Shows the cryptographic handoff verification flow:
 * Driver requests handoff → Dispatcher approves → 6-digit PIN generated
 * Bound to (device + GPS ±110m + shipment + 5-min time bucket).
 * Driver shows PIN to receiver. Receiver enters. Server validates context.
 *
 * Mirrors lib/handoff-protocol.ts exactly.
 */

export default function PinProtocolMockup() {
  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL PIN Protocol — cryptographic handoff verification"
      role="img"
    >
      <defs>
        <linearGradient id="ppBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1823" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="ppGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#E2C47A" />
        </linearGradient>
        <linearGradient id="ppPanel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141c2b" />
          <stop offset="100%" stopColor="#0f1823" />
        </linearGradient>
        <filter id="ppGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="ppRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="700" fill="url(#ppBg)" clipPath="url(#ppRound)" />

      {/* Top chrome */}
      <rect x="0" y="0" width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#9a9894" fontSize="12">PIN Protocol · Handoff Verification</text>
      <text x="320" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">LX-4821 — Pickup at Detroit, MI</text>
      <text x="1080" y="32" fill="#10b981" fontSize="11" fontWeight="600" textAnchor="end">● ENCRYPTED</text>

      {/* === STEP 1 — Driver requests === */}
      <g transform="translate(40, 80)">
        <rect x="0" y="0" width="280" height="32" rx="16" fill="url(#ppGold)" />
        <text x="20" y="22" fill="#0a0f1a" fontSize="11" fontWeight="700" letterSpacing="1">STEP 1 · DRIVER REQUEST</text>
      </g>

      <rect x="40" y="124" width="280" height="412" rx="22" fill="url(#ppPanel)" stroke="#1e2d40" strokeWidth="2" />

      {/* Phone bezel */}
      <rect x="56" y="148" width="248" height="368" rx="18" fill="#0a0f1a" stroke="#1e2d40" strokeWidth="1" />
      <circle cx="180" cy="160" r="3" fill="#1e2d40" />

      {/* Phone screen content */}
      <g transform="translate(64, 174)">
        <text x="0" y="14" fill="#3D5470" fontSize="9" letterSpacing="1">PREVAYL CARRIER · LX-4821</text>
        <text x="0" y="38" fill="#f0f4f8" fontSize="14" fontWeight="700">Pickup Authorization</text>
        <text x="0" y="56" fill="#9a9894" fontSize="11">5 vehicles · Detroit, MI</text>

        {/* Map preview */}
        <rect x="0" y="72" width="232" height="100" rx="6" fill="#0a1320" stroke="#1e2d40" strokeWidth="1" />
        <circle cx="116" cy="122" r="20" fill="#C9A84C" opacity="0.2" />
        <circle cx="116" cy="122" r="10" fill="#C9A84C" />
        <text x="116" y="158" fill="#C9A84C" fontSize="10" fontWeight="700" textAnchor="middle">YOU ARE HERE</text>

        <text x="0" y="196" fill="#3D5470" fontSize="9" letterSpacing="1">GEOFENCE STATUS</text>
        <rect x="0" y="204" width="232" height="40" rx="6" fill="#0a1f14" stroke="#10b981" strokeWidth="1" />
        <text x="14" y="222" fill="#10b981" fontSize="11" fontWeight="700">✓ Within pickup geofence</text>
        <text x="14" y="236" fill="#9a9894" fontSize="10">142m from target · 0.5mi tolerance</text>

        <text x="0" y="266" fill="#3D5470" fontSize="9" letterSpacing="1">DEVICE FINGERPRINT</text>
        <text x="0" y="282" fill="#9a9894" fontSize="9" fontFamily="ui-monospace, monospace">a3f2:7c1e:9d44</text>

        <rect x="0" y="296" width="232" height="36" rx="6" fill="url(#ppGold)" />
        <text x="116" y="319" fill="#0a0f1a" fontSize="13" fontWeight="700" textAnchor="middle">Request authorization</text>
      </g>

      {/* === Arrow → STEP 2 === */}
      <g transform="translate(330, 290)">
        <path d="M 0 30 L 50 30 L 50 25 L 60 35 L 50 45 L 50 40 L 0 40 Z" fill="#C9A84C" opacity="0.6" />
      </g>

      {/* === STEP 2 — Dispatcher approves === */}
      <g transform="translate(400, 80)">
        <rect x="0" y="0" width="380" height="32" rx="16" fill="url(#ppGold)" />
        <text x="20" y="22" fill="#0a0f1a" fontSize="11" fontWeight="700" letterSpacing="1">STEP 2 · DISPATCHER APPROVES — PIN GENERATED</text>
      </g>

      <rect x="400" y="124" width="380" height="412" rx="14" fill="url(#ppPanel)" stroke="#C9A84C" strokeWidth="2" />
      <rect x="400" y="124" width="380" height="3" fill="url(#ppGold)" />

      {/* Dispatcher panel header */}
      <text x="420" y="160" fill="#C9A84C" fontSize="10" fontWeight="700" letterSpacing="2">DISPATCH CONSOLE</text>
      <text x="420" y="180" fill="#f0f4f8" fontSize="14" fontWeight="600">Driver request received</text>
      <text x="420" y="198" fill="#9a9894" fontSize="11">Demo Carrier Alpha · Marcus T. · 0:08 ago</text>

      {/* Approve check */}
      <rect x="420" y="216" width="340" height="62" rx="6" fill="#0a1f14" stroke="#10b981" strokeWidth="1" />
      <text x="436" y="240" fill="#10b981" fontSize="11" fontWeight="700">✓ Geofence valid (142m)</text>
      <text x="436" y="256" fill="#10b981" fontSize="11" fontWeight="700">✓ Carrier MC matches shipment</text>
      <text x="436" y="272" fill="#10b981" fontSize="11" fontWeight="700">✓ Device fingerprint registered</text>

      {/* The PIN itself */}
      <text x="590" y="312" fill="#3D5470" fontSize="10" letterSpacing="2" textAnchor="middle">GENERATED PIN — VALID 15 MIN</text>

      <g filter="url(#ppGlow)">
        <rect x="450" y="324" width="280" height="100" rx="14" fill="#0a0f1a" stroke="#C9A84C" strokeWidth="2" />
        {/* 6 digit cells */}
        {[
          { d: '4', x: 466 },
          { d: '7', x: 510 },
          { d: '2', x: 554 },
          { d: '8', x: 598 },
          { d: '3', x: 642 },
          { d: '9', x: 686 },
        ].map((cell, i) => (
          <g key={i}>
            <rect x={cell.x} y="340" width="36" height="68" rx="6" fill="#141c2b" stroke="#C9A84C" strokeWidth="1.5" />
            <text x={cell.x + 18} y="384" fill="#C9A84C" fontSize="32" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">{cell.d}</text>
          </g>
        ))}
      </g>

      {/* Cryptographic context */}
      <text x="420" y="448" fill="#3D5470" fontSize="10" letterSpacing="1">CRYPTOGRAPHIC CONTEXT BINDING</text>
      <rect x="420" y="456" width="340" height="68" rx="6" fill="#0a0f1a" stroke="#1e2d40" strokeWidth="1" />
      <text x="436" y="476" fill="#9a9894" fontSize="10" fontFamily="ui-monospace, monospace">SHA-256 hash of:</text>
      <text x="436" y="492" fill="#C9A84C" fontSize="10" fontFamily="ui-monospace, monospace">  device · GPS(±110m) · shipment · 5min</text>
      <text x="436" y="510" fill="#9a9894" fontSize="10" fontFamily="ui-monospace, monospace">→ a8b9c2…d4e1f7  (stored, plaintext PIN never persisted)</text>

      {/* === Arrow STEP 2 → STEP 3 === */}
      <g transform="translate(790, 290)">
        <path d="M 0 30 L 50 30 L 50 25 L 60 35 L 50 45 L 50 40 L 0 40 Z" fill="#C9A84C" opacity="0.6" />
      </g>

      {/* === STEP 3 — Receiver verifies === */}
      <g transform="translate(860, 80)">
        <rect x="0" y="0" width="300" height="32" rx="16" fill="url(#ppGold)" />
        <text x="20" y="22" fill="#0a0f1a" fontSize="11" fontWeight="700" letterSpacing="1">STEP 3 · RECEIVER VERIFIES</text>
      </g>

      <rect x="860" y="124" width="300" height="412" rx="22" fill="url(#ppPanel)" stroke="#1e2d40" strokeWidth="2" />

      {/* Tablet bezel */}
      <rect x="876" y="148" width="268" height="368" rx="14" fill="#0a0f1a" stroke="#1e2d40" strokeWidth="1" />

      <g transform="translate(884, 168)">
        <text x="0" y="14" fill="#3D5470" fontSize="9" letterSpacing="1">DEALER PORTAL · RECEIVING</text>
        <text x="0" y="38" fill="#f0f4f8" fontSize="14" fontWeight="700">Verify driver PIN</text>
        <text x="0" y="56" fill="#9a9894" fontSize="11">Marcus T. · LX-4821 · 5 vehicles</text>

        {/* PIN entry */}
        <text x="0" y="84" fill="#3D5470" fontSize="9" letterSpacing="1">ENTER 6-DIGIT PIN</text>
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={i * 42} y={92} width="36" height="46" rx="6"
              fill={i < 6 ? '#0a1f14' : '#141c2b'}
              stroke={i < 6 ? '#10b981' : '#3D5470'} strokeWidth="1.5" />
          ))}
          {/* Filled-in digits matching the PIN */}
          {['4', '7', '2', '8', '3', '9'].map((d, i) => (
            <text key={`d${i}`} x={i * 42 + 18} y={124} fill="#10b981"
              fontSize="22" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">{d}</text>
          ))}
        </g>

        <rect x="0" y="160" width="252" height="40" rx="6" fill="#0a1f14" stroke="#10b981" strokeWidth="1" />
        <text x="14" y="180" fill="#10b981" fontSize="11" fontWeight="700">✓ PIN matches</text>
        <text x="14" y="194" fill="#10b981" fontSize="10">Server validated context binding</text>

        <text x="0" y="222" fill="#3D5470" fontSize="9" letterSpacing="1">VEHICLE INSPECTION</text>
        <rect x="0" y="230" width="252" height="64" rx="6" fill="#141c2b" stroke="#1e2d40" strokeWidth="1" />
        <text x="14" y="248" fill="#9a9894" fontSize="10">5 vehicles · 18 photos captured</text>
        <text x="14" y="262" fill="#9a9894" fontSize="10">Damage report: clean (4) / noted (1)</text>
        <text x="14" y="278" fill="#9a9894" fontSize="10">eBOL: ready for signature</text>

        <rect x="0" y="306" width="252" height="36" rx="6" fill="url(#ppGold)" />
        <text x="126" y="329" fill="#0a0f1a" fontSize="13" fontWeight="700" textAnchor="middle">Confirm handoff</text>
      </g>

      {/* === Bottom bar — protocol guarantees === */}
      <line x1="40" y1="568" x2="1160" y2="568" stroke="#1e2d40" strokeWidth="1" />
      <text x="40" y="592" fill="#3D5470" fontSize="10" fontWeight="600" letterSpacing="1">PROTOCOL GUARANTEES</text>

      {[
        { title: 'NO PIN REUSE',     body: 'Bound to time bucket — PIN invalid 5 min after generation',  color: '#10b981' },
        { title: 'NO DEVICE SWAP',   body: 'Different phone shows PIN → server rejects on completion',    color: '#10b981' },
        { title: 'NO LOCATION FAKE', body: 'Driver lat/lng must match within 110m at handoff',           color: '#10b981' },
        { title: 'AUDIT TRAIL',      body: 'Every step logged: request, approve, view, complete',         color: '#C9A84C' },
        { title: 'AUTO-EXPIRE',      body: 'Unused PIN expires after 15 min — no stale codes in field',  color: '#C9A84C' },
      ].map((p, i) => (
        <g key={p.title} transform={`translate(${40 + i * 224}, 612)`}>
          <rect x="0" y="0" width="216" height="48" rx="6" fill="#141c2b" stroke={p.color} strokeWidth="1" />
          <rect x="0" y="0" width="3" height="48" fill={p.color} />
          <text x="14" y="20" fill={p.color} fontSize="10" fontWeight="700" letterSpacing="1">{p.title}</text>
          <text x="14" y="36" fill="#9a9894" fontSize="9">{p.body}</text>
        </g>
      ))}

      <rect x="0" y="0" width="1200" height="700" rx="10" ry="10" fill="none" stroke="#1e2d40" strokeWidth="1" />
    </svg>
  );
}
