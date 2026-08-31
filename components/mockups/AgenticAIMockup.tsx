// AgenticAIMockup.tsx — role-gated AI access matrix + confirm-first flow
// Shows: same question, three real roles, three real answers + the propose->confirm pattern

export default function AgenticAIMockup() {
  return (
    <svg
      viewBox="0 0 1200 760"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL agentic AI role-gated access matrix"
      role="img"
    >
      <defs>
        <linearGradient id="agBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="agCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <clipPath id="agRound">
          <rect width="1200" height="760" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="760" fill="url(#agBg)" clipPath="url(#agRound)" />

      {/* Top chrome */}
      <rect width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">Agentic AI · Layered by Trust</text>
      <rect x="96" y="45" width="220" height="2" fill="#C9A84C" rx="1" />

      {/* Section 1 label */}
      <text x="24" y="94" fill="#C9A84C" fontSize="11" fontWeight="700" letterSpacing="1.5">SAME QUESTION — &quot;WHAT&apos;S OUR REVENUE?&quot; — FOUR REAL ANSWERS</text>

      {/* Access matrix table */}
      <rect x="24" y="110" width="1152" height="220" rx="8" fill="url(#agCard)" stroke="#1e2d40" strokeWidth="1" />

      {/* header row */}
      <text x="48" y="142" fill="#9a9894" fontSize="12" fontWeight="600">Capability</text>
      <text x="620" y="142" fill="#C9A84C" fontSize="12" fontWeight="700" textAnchor="middle">Driver</text>
      <text x="780" y="142" fill="#C9A84C" fontSize="12" fontWeight="700" textAnchor="middle">Dispatcher</text>
      <text x="940" y="142" fill="#C9A84C" fontSize="12" fontWeight="700" textAnchor="middle">Management</text>
      <text x="1100" y="142" fill="#C9A84C" fontSize="12" fontWeight="700" textAnchor="middle">Owner</text>
      <line x1="48" y1="154" x2="1128" y2="154" stroke="#1e2d40" strokeWidth="1" />

      {/* rows data: [label, driver, dispatcher, management, owner] where c=check x=cross p=partial */}
      {[
        ['See company-wide revenue', 'x', 'c', 'c', 'c'],
        ['Assign a carrier to a load', 'x', 'c', 'x', 'c'],
        ['Finalize a write without review', 'x', 'p', 'p', 'p'],
        ['See every tool in the registry', 'x', 'p', 'p', 'c'],
      ].map((row, i) => {
        const y = 182 + i * 36;
        const cols = [620, 780, 940, 1100];
        return (
          <g key={i}>
            <text x="48" y={y + 5} fill="#e2eaf2" fontSize="12.5">{row[0]}</text>
            {cols.map((cx, j) => {
              const v = row[j + 1];
              const color = v === 'c' ? '#10b981' : v === 'x' ? '#f87171' : '#f59e0b';
              const bg = v === 'c' ? 'rgba(16,185,129,0.15)' : v === 'x' ? 'rgba(248,113,113,0.12)' : 'rgba(245,158,11,0.15)';
              const symbol = v === 'c' ? '\u2713' : v === 'x' ? '\u2715' : '!';
              return (
                <g key={j}>
                  <circle cx={cx} cy={y} r="11" fill={bg} />
                  <text x={cx} y={y + 4} fill={color} fontSize="11" fontWeight="700" textAnchor="middle">{symbol}</text>
                </g>
              );
            })}
            {i < 3 && <line x1="48" y1={y + 18} x2="1128" y2={y + 18} stroke="#1e2d40" strokeWidth="0.5" opacity="0.5" />}
          </g>
        );
      })}

      <text x="48" y="316" fill="#3D5470" fontSize="10.5">&#10003; full access &nbsp;&nbsp;&nbsp; ! propose only, confirm-first &nbsp;&nbsp;&nbsp; &#10007; never shown to the AI &mdash; not hidden, structurally absent</text>

      {/* Section 2 label */}
      <text x="24" y="368" fill="#C9A84C" fontSize="11" fontWeight="700" letterSpacing="1.5">NOTHING EXECUTES ON THE FIRST ASK</text>

      {/* Propose -> confirm flow: 3 cards */}
      {/* card 1 */}
      <rect x="24" y="384" width="360" height="200" rx="8" fill="url(#agCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="44" y="410" fill="#3D5470" fontSize="10" fontWeight="700" letterSpacing="1.5">STEP 1</text>
      <text x="44" y="432" fill="#f0f4f8" fontSize="13" fontWeight="600">Dispatcher asks</text>
      <rect x="44" y="448" width="300" height="100" rx="8" fill="#0d1420" stroke="#1e2d40" strokeWidth="1" />
      <rect x="60" y="462" width="240" height="28" rx="6" fill="#C9A84C" />
      <text x="72" y="480" fill="#0a0f1a" fontSize="11" fontWeight="600">assign Rocky Mtn to PRVL-4821</text>

      {/* arrow */}
      <path d="M394 484 L420 484" stroke="#C9A84C" strokeWidth="2" markerEnd="url(#agArrow)" />
      <defs>
        <marker id="agArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0L6 3L0 6Z" fill="#C9A84C" />
        </marker>
      </defs>

      {/* card 2 */}
      <rect x="420" y="384" width="360" height="200" rx="8" fill="url(#agCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="440" y="410" fill="#3D5470" fontSize="10" fontWeight="700" letterSpacing="1.5">STEP 2</text>
      <text x="440" y="432" fill="#f0f4f8" fontSize="13" fontWeight="600">A real proposal comes back</text>
      <rect x="440" y="448" width="300" height="118" rx="8" fill="#0d1420" stroke="#C9A84C" strokeWidth="1" opacity="0.9" />
      <text x="456" y="466" fill="#C9A84C" fontSize="9" fontWeight="700" letterSpacing="1">REVIEW BEFORE CONFIRMING</text>
      <text x="456" y="486" fill="#9a9894" fontSize="10.5">Load</text>
      <text x="724" y="486" fill="#f0f4f8" fontSize="10.5" textAnchor="end">PRVL-4821</text>
      <text x="456" y="504" fill="#9a9894" fontSize="10.5">Proposed carrier</text>
      <text x="724" y="504" fill="#f0f4f8" fontSize="10.5" textAnchor="end">Rocky Mtn Transport</text>
      <rect x="456" y="520" width="80" height="24" rx="5" fill="#C9A84C" />
      <text x="496" y="536" fill="#0a0f1a" fontSize="10" fontWeight="700" textAnchor="middle">CONFIRM</text>
      <rect x="544" y="520" width="70" height="24" rx="5" fill="none" stroke="#3D5470" strokeWidth="1" />
      <text x="579" y="536" fill="#9a9894" fontSize="10" fontWeight="700" textAnchor="middle">CANCEL</text>

      <path d="M790 484 L816 484" stroke="#C9A84C" strokeWidth="2" markerEnd="url(#agArrow)" />

      {/* card 3 */}
      <rect x="816" y="384" width="360" height="200" rx="8" fill="url(#agCard)" stroke="#1e2d40" strokeWidth="1" />
      <text x="836" y="410" fill="#3D5470" fontSize="10" fontWeight="700" letterSpacing="1.5">STEP 3</text>
      <text x="836" y="432" fill="#f0f4f8" fontSize="13" fontWeight="600">Only then, it executes</text>
      <rect x="836" y="452" width="300" height="46" rx="8" fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth="1" />
      <text x="854" y="480" fill="#10b981" fontSize="12" fontWeight="600">&#10003; Carrier assigned to PRVL-4821</text>
      <text x="836" y="516" fill="#3D5470" fontSize="10.5">Logged either way &mdash; proposed or executed</text>

      {/* footer note */}
      <text x="24" y="628" fill="#3D5470" fontSize="10.5">Reconstructed from lib/ai/personas.ts and lib/ai/build-tools.ts &mdash; the real 8-persona registry and the real confirm-first pattern used across every write tool.</text>
    </svg>
  );
}
