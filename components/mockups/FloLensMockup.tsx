// FloLensMockup.tsx — real 6-step workflow funnel + adoption-gap suggestion card
// Shows: where the drop-off is worst, and the specific automation suggested for it

export default function FloLensMockup() {
  const steps = [
    { label: 'Create Order', count: 312, h: 132 },
    { label: 'Assign Driver', count: 268, h: 114 },
    { label: 'Build Load', count: 128, h: 54, hi: true },
    { label: 'Dispatch', count: 119, h: 50 },
    { label: 'Confirm Pickup', count: 104, h: 44 },
    { label: 'Deliver', count: 94, h: 40 },
  ];

  return (
    <svg
      viewBox="0 0 1200 720"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL FloLens workflow funnel and automation suggestion"
      role="img"
    >
      <defs>
        <linearGradient id="flBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="flCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="flBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2C47A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        <linearGradient id="flBarHi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <clipPath id="flRound">
          <rect width="1200" height="720" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="720" fill="url(#flBg)" clipPath="url(#flRound)" />

      {/* Top chrome */}
      <rect width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">FloLens · Adoption Gap Detection</text>
      <rect x="96" y="45" width="230" height="2" fill="#C9A84C" rx="1" />

      {/* Section label */}
      <text x="24" y="94" fill="#C9A84C" fontSize="11" fontWeight="700" letterSpacing="1.5">SIX REAL STEPS, START TO FINISH &mdash; ORDER TO DELIVERY</text>

      {/* Funnel card */}
      <rect x="24" y="110" width="1152" height="260" rx="8" fill="url(#flCard)" stroke="#1e2d40" strokeWidth="1" />

      {steps.map((s, i) => {
        const colW = 1152 / 6;
        const cx = 24 + colW * i + colW / 2;
        const barW = 64;
        const baseY = 320;
        return (
          <g key={i}>
            <rect x={cx - barW / 2} y={baseY - s.h} width={barW} height={s.h} rx="6" fill={s.hi ? 'url(#flBarHi)' : 'url(#flBar)'} />
            <text x={cx} y={baseY + 22} fill={s.hi ? '#f87171' : '#e2eaf2'} fontSize="11.5" fontWeight="600" textAnchor="middle">{s.label}</text>
            <text x={cx} y={baseY + 38} fill="#9a9894" fontSize="10" textAnchor="middle">{s.count} events{s.hi ? ' · worst drop-off' : ''}</text>
          </g>
        );
      })}

      <text x="600" y="352" fill="#3D5470" fontSize="10.5" textAnchor="middle">FloLens auto-highlights whichever step has the worst drop-off &mdash; the most actionable place to look, not just the busiest.</text>

      {/* Suggestion section */}
      <text x="24" y="410" fill="#C9A84C" fontSize="11" fontWeight="700" letterSpacing="1.5">THE SUGGESTION THIS PRODUCES</text>

      <rect x="24" y="426" width="560" height="200" rx="8" fill="url(#flCard)" stroke="#C9A84C" strokeWidth="1" opacity="0.95" />
      <rect x="46" y="446" width="34" height="34" rx="8" fill="rgba(201,168,76,0.15)" />
      <path d="M60 452 L52 466 L58 466 L56 476 L66 460 L60 460 Z" fill="#C9A84C" />
      <text x="92" y="468" fill="#f0f4f8" fontSize="15" fontWeight="700">AI Load Builder</text>
      <rect x="490" y="452" width="78" height="20" rx="10" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="0.5" />
      <text x="529" y="466" fill="#C9A84C" fontSize="9" fontWeight="700" textAnchor="middle">HIGH IMPACT</text>
      <text x="46" y="502" fill="#E2C47A" fontSize="12.5" fontWeight="700">Saves ~30 clicks/day</text>
      <text x="46" y="524" fill="#c8d8e8" fontSize="11.5">Building loads manually &mdash; AI Load Builder generates a</text>
      <text x="46" y="540" fill="#c8d8e8" fontSize="11.5">complete load from carrier profile, history &amp; live pricing.</text>
      <text x="46" y="564" fill="#9a9894" fontSize="10.5">Est. time saved: 20m/day per dispatcher</text>
      <rect x="46" y="580" width="100" height="30" rx="6" fill="#C9A84C" />
      <text x="96" y="600" fill="#0a0f1a" fontSize="11" fontWeight="700" textAnchor="middle">TURN ON</text>

      {/* consent card */}
      <rect x="608" y="426" width="568" height="200" rx="8" fill="url(#flCard)" stroke="#1e2d40" strokeWidth="1" />
      <rect x="628" y="446" width="34" height="34" rx="8" fill="rgba(96,165,250,0.15)" />
      <rect x="638" y="460" width="14" height="10" rx="2" fill="none" stroke="#60a5fa" strokeWidth="1.6" />
      <path d="M641 460 v-4 a3 3 0 0 1 6 0 v4" fill="none" stroke="#60a5fa" strokeWidth="1.6" />
      <text x="674" y="468" fill="#f0f4f8" fontSize="13" fontWeight="700">WORKFLOW ANALYTICS CONSENT</text>
      <text x="628" y="494" fill="#c8d8e8" fontSize="11.5">Nothing is tracked until an org admin says yes.</text>
      <text x="628" y="512" fill="#c8d8e8" fontSize="11.5">Off by default for every organization &mdash; can be</text>
      <text x="628" y="528" fill="#c8d8e8" fontSize="11.5">turned off again at any time.</text>
      <rect x="628" y="548" width="80" height="28" rx="6" fill="#C9A84C" />
      <text x="668" y="566" fill="#0a0f1a" fontSize="10.5" fontWeight="700" textAnchor="middle">TURN ON</text>
      <rect x="716" y="548" width="80" height="28" rx="6" fill="none" stroke="#3D5470" strokeWidth="1" />
      <text x="756" y="566" fill="#9a9894" fontSize="10.5" fontWeight="700" textAnchor="middle">NOT NOW</text>

      <text x="24" y="664" fill="#3D5470" fontSize="10.5">Reconstructed from lib/flolens/suggestions.ts and components/flolens/ &mdash; the real detection heuristic, thresholds, and card copy.</text>
    </svg>
  );
}
