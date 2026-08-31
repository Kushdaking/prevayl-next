// DealerPortalMockup.tsx — White-label dealer portal
// Shows branded header, VIN tracking grid, photo proof tiles, status timeline

export default function DealerPortalMockup() {
  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL white-label dealer portal interface"
      role="img"
    >
      <defs>
        <linearGradient id="dpBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="dpHeader" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f1e30" />
          <stop offset="100%" stopColor="#0a1624" />
        </linearGradient>
        <linearGradient id="dpCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="dpPhotoPlate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#162030" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <clipPath id="dpRound">
          <rect width="1200" height="700" rx="10" ry="10" />
        </clipPath>
        <clipPath id="dpPhotoClip1">
          <rect x="24" y="330" width="260" height="160" rx="6" />
        </clipPath>
        <clipPath id="dpPhotoClip2">
          <rect x="300" y="330" width="260" height="160" rx="6" />
        </clipPath>
        <clipPath id="dpPhotoClip3">
          <rect x="576" y="330" width="260" height="160" rx="6" />
        </clipPath>
      </defs>

      <rect width="1200" height="700" fill="url(#dpBg)" clipPath="url(#dpRound)" />

      {/* Branded dealer header — white-label example (generic placeholder) */}
      <rect x="0" y="0" width="1200" height="58" fill="url(#dpHeader)" />
      <line x1="0" y1="58" x2="1200" y2="58" stroke="#1e2d40" strokeWidth="1" />

      {/* Dealer brand mark (stylized, not real logo) */}
      <rect x="20" y="14" width="6" height="30" rx="2" fill="#C9A84C" />
      <rect x="30" y="14" width="6" height="22" rx="2" fill="#C9A84C" />
      <rect x="40" y="14" width="6" height="28" rx="2" fill="#C9A84C" />
      <text x="54" y="35" fill="#f0f4f8" fontSize="14" fontWeight="700" letterSpacing="1">Demo Dealer Group</text>
      <rect x="278" y="24" width="1" height="14" fill="#2a3d56" />
      <text x="288" y="35" fill="#9a9894" fontSize="12">Vehicle Transport Portal</text>
      <text x="288" y="35" fill="#9a9894" fontSize="12">Vehicle Transport Portal</text>

      {/* Powered-by tag */}
      <text x="1070" y="30" fill="#3D5470" fontSize="10">Powered by</text>
      <text x="1070" y="44" fill="#C9A84C" fontSize="11" fontWeight="700" letterSpacing="1">PREVAYL</text>

      {/* Dealer nav */}
      {[
        { x: 430, label: 'My Orders', active: false },
        { x: 514, label: 'Track Vehicles', active: true },
        { x: 618, label: 'New Shipment', active: false },
        { x: 718, label: 'Documents', active: false },
        { x: 804, label: 'Billing', active: false },
      ].map((item) => (
        <g key={item.x}>
          <text x={item.x} y="34" fill={item.active ? '#f0f4f8' : '#9a9894'} fontSize="12" fontWeight={item.active ? '600' : '400'}>{item.label}</text>
          {item.active && <rect x={item.x} y="52" width={item.label.length * 6.8} height="2" fill="#C9A84C" rx="1" />}
        </g>
      ))}

      {/* Profile */}
      <circle cx="1160" cy="29" r="14" fill="#1e2d40" />
      <text x="1160" y="34" fill="#C9A84C" fontSize="10" textAnchor="middle" fontWeight="700">JM</text>

      {/* Page title area */}
      <text x="24" y="88" fill="#f0f4f8" fontSize="17" fontWeight="700">Track Vehicles</text>
      <text x="24" y="107" fill="#9a9894" fontSize="12">14 active shipments · 3 pending pickup · Last updated 2 min ago</text>

      {/* Search + filter */}
      <rect x="24" y="116" width="420" height="32" rx="6" fill="#111827" stroke="#1e2d40" strokeWidth="1" />
      <text x="44" y="135" fill="#3D5470" fontSize="12">🔍</text>
      <text x="64" y="135" fill="#9a9894" fontSize="12">Search by VIN, make, model, or order…</text>
      <rect x="456" y="116" width="96" height="32" rx="6" fill="#111827" stroke="#1e2d40" strokeWidth="1" />
      <text x="504" y="135" fill="#c8d8e8" fontSize="12" textAnchor="middle">All Status ▾</text>
      <rect x="560" y="116" width="112" height="32" rx="6" fill="#111827" stroke="#1e2d40" strokeWidth="1" />
      <text x="616" y="135" fill="#c8d8e8" fontSize="12" textAnchor="middle">All Locations ▾</text>

      {/* VIN grid — 6 vehicle cards, 3×2 */}
      {[
        {
          col: 0, row: 0,
          vin: '1HGCM82633A004352',
          vehicle: '2023 Honda CR-V EX',
          from: 'Detroit, MI', to: 'Atlanta, GA',
          status: 'IN TRANSIT', statusColor: '#C9A84C', statusBg: '#1d2510',
          eta: 'May 3 · 14:30',
          progress: 68,
          orderId: 'LX-4821',
        },
        {
          col: 1, row: 0,
          vin: '2T1BURHE0JC036031',
          vehicle: '2018 Toyota Corolla LE',
          from: 'Chicago, IL', to: 'Miami, FL',
          status: 'DISPATCHED', statusColor: '#60a5fa', statusBg: '#0f1d2e',
          eta: 'May 4 · 09:00',
          progress: 20,
          orderId: 'LX-4820',
        },
        {
          col: 2, row: 0,
          vin: '5FNRL5H94KB076429',
          vehicle: '2019 Honda Odyssey EX-L',
          from: 'Dallas, TX', to: 'Phoenix, AZ',
          status: 'DELIVERED', statusColor: '#10b981', statusBg: '#0a1f14',
          eta: 'May 1 · 11:15',
          progress: 100,
          orderId: 'LX-4819',
        },
        {
          col: 0, row: 1,
          vin: '3VW1K7AJXHM232914',
          vehicle: '2017 Volkswagen Jetta SE',
          from: 'Phoenix, AZ', to: 'Los Angeles, CA',
          status: 'PICKED UP', statusColor: '#a78bfa', statusBg: '#1a1328',
          eta: 'May 2 · 16:45',
          progress: 45,
          orderId: 'LX-4816',
        },
        {
          col: 1, row: 1,
          vin: 'JM3KE4DY5F0441883',
          vehicle: '2015 Mazda CX-5 Grand',
          from: 'Nashville, TN', to: 'Columbus, OH',
          status: 'IN TRANSIT', statusColor: '#C9A84C', statusBg: '#1d2510',
          eta: 'May 2 · 08:00',
          progress: 72,
          orderId: 'LX-4815',
        },
        {
          col: 2, row: 1,
          vin: '1G1BE5SM1H7120836',
          vehicle: '2017 Chevrolet Cruze LT',
          from: 'Seattle, WA', to: 'Denver, CO',
          status: 'PENDING', statusColor: '#f59e0b', statusBg: '#1a1506',
          eta: 'TBD',
          progress: 0,
          orderId: 'LX-4814',
        },
      ].map((card) => {
        const x = 24 + card.col * 388;
        const y = 158 + card.row * 180;
        const barW = 296;
        const barFill = Math.round((card.progress / 100) * barW);
        return (
          <g key={card.orderId}>
            <rect x={x} y={y} width="372" height="164" rx="8" fill="url(#dpCard)" stroke="#1e2d40" strokeWidth="1" />
            {/* Status badge */}
            <rect x={x + 12} y={y + 12} width={card.status.length * 6.8 + 18} height="20" rx="10"
              fill={card.statusBg} stroke={card.statusColor} strokeWidth="1" />
            <circle cx={x + 22} cy={y + 22} r="3" fill={card.statusColor} />
            <text x={x + 29} y={y + 26} fill={card.statusColor} fontSize="9" fontWeight="700">{card.status}</text>

            {/* Order ID */}
            <text x={x + 352} y={y + 26} fill="#3D5470" fontSize="11" textAnchor="end">{card.orderId}</text>

            {/* Vehicle info */}
            <text x={x + 12} y={y + 56} fill="#f0f4f8" fontSize="13" fontWeight="600">{card.vehicle}</text>
            <text x={x + 12} y={y + 73} fill="#9a9894" fontSize="10">{card.vin}</text>

            {/* Lane */}
            <text x={x + 12} y={y + 96} fill="#c8d8e8" fontSize="12">{card.from}</text>
            <text x={x + 12} y={y + 112} fill="#9a9894" fontSize="11">→ {card.to}</text>

            {/* Progress bar */}
            <rect x={x + 12} y={y + 128} width={barW} height="4" rx="2" fill="#1e2d40" />
            {barFill > 0 && (
              <rect x={x + 12} y={y + 128} width={barFill} height="4" rx="2" fill={card.statusColor} />
            )}
            {barFill > 0 && barFill < barW && (
              <circle cx={x + 12 + barFill} cy={y + 130} r="5" fill={card.statusColor} />
            )}

            {/* ETA */}
            <text x={x + 12} y={y + 153} fill="#9a9894" fontSize="10">ETA</text>
            <text x={x + 36} y={y + 153} fill={card.eta === 'TBD' ? '#3D5470' : '#c8d8e8'} fontSize="11" fontWeight={card.progress === 100 ? '400' : '500'}>{card.eta}</text>
            <text x={x + 350} y={y + 153} fill="#C9A84C" fontSize="11" textAnchor="end">Track →</text>
          </g>
        );
      })}

      {/* Photo proof section */}
      <text x="24" y="540" fill="#f0f4f8" fontSize="14" fontWeight="600">Photo Proof — LX-4821 · 2023 Honda CR-V</text>
      <text x="24" y="558" fill="#9a9894" fontSize="11">Pickup inspection photos · May 1, 07:45 ET · Driver: Marcus T.</text>

      {/* Photo tiles */}
      {[
        { x: 24, label: 'Front — Pickup', check: true },
        { x: 300, label: 'Driver Side — Pickup', check: true },
        { x: 576, label: 'Rear — Pickup', check: true },
        { x: 852, label: 'Delivery — Pending', check: false },
      ].map((photo) => (
        <g key={photo.x}>
          <rect x={photo.x} y={566} width="260" height="120" rx="6" fill="url(#dpPhotoPlate)" stroke={photo.check ? '#1e2d40' : '#2a3d56'} strokeWidth="1" strokeDasharray={photo.check ? 'none' : '5 3'} />
          {photo.check ? (
            <>
              {/* Simulated photo: car silhouette grid lines */}
              <line x1={photo.x + 10} y1={600} x2={photo.x + 250} y2={600} stroke="#1e2d40" strokeWidth="1" />
              <line x1={photo.x + 10} y1={626} x2={photo.x + 250} y2={626} stroke="#1e2d40" strokeWidth="1" />
              <line x1={photo.x + 80} y1={572} x2={photo.x + 80} y2={680} stroke="#1e2d40" strokeWidth="1" />
              <line x1={photo.x + 180} y1={572} x2={photo.x + 180} y2={680} stroke="#1e2d40" strokeWidth="1" />
              {/* Car body silhouette */}
              <rect x={photo.x + 40} y={582} width="180" height="72" rx="16" fill="#1a2535" stroke="#2a3d56" strokeWidth="1" />
              <rect x={photo.x + 70} y={572} width="100" height="40" rx="8" fill="#162030" stroke="#2a3d56" strokeWidth="1" />
              <circle cx={photo.x + 75} cy={660} r="12" fill="#0d121e" stroke="#2a3d56" strokeWidth="2" />
              <circle cx={photo.x + 185} cy={660} r="12" fill="#0d121e" stroke="#2a3d56" strokeWidth="2" />
              <circle cx={photo.x + 75} cy={660} r="5" fill="#1e2d40" />
              <circle cx={photo.x + 185} cy={660} r="5" fill="#1e2d40" />
              {/* Verified stamp */}
              <rect x={photo.x + 180} y={572} width="68" height="20" rx="4" fill="#0a1f14" />
              <circle cx={photo.x + 191} cy={582} r="4" fill="#10b981" />
              <text x={photo.x + 198} y={586} fill="#10b981" fontSize="9" fontWeight="700">VERIFIED</text>
            </>
          ) : (
            <>
              <text x={photo.x + 130} y={618} fill="#2a3d56" fontSize="28" textAnchor="middle">+</text>
              <text x={photo.x + 130} y={644} fill="#3D5470" fontSize="11" textAnchor="middle">Awaiting Delivery</text>
            </>
          )}
          <text x={photo.x + 12} y={676} fill="#9a9894" fontSize="10">{photo.label}</text>
        </g>
      ))}

      {/* Bottom bar */}
      <rect x="0" y="694" width="1200" height="6" fill="#111827" />
    </svg>
  );
}
