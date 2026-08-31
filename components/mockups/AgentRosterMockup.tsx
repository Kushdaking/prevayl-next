// AgentRosterMockup.tsx — five real agents, each with the actual logic behind them
// Margin Guard, Status Bot, Reengagement, Carrier Match, Pricer (connector)

export default function AgentRosterMockup() {
  const agents = [
    { name: 'Margin Guard', role: 'Checks profit the moment a rate is set', color: '#f59e0b', detail: '< 0% critical  ·  < 10% warning  ·  else silent' },
    { name: 'Status Bot', role: 'Tells the customer, dispatcher-free', color: '#10b981', detail: '4 notifiable statuses  ·  email + SMS via Twilio' },
    { name: 'Reengagement', role: 'Wins back carriers who went quiet', color: '#2DD4BF', detail: '30-day inactivity  ·  7-day cooldown, logged' },
    { name: 'Carrier Match', role: 'A rule engine, not a black box', color: '#60a5fa', detail: 'rate + equipment + lane + min score  ·  confirm-first' },
    { name: 'Pricer', role: 'Never guesses a rate', color: '#C9A84C', detail: 'median/p25/p75 from real history  ·  confidence-tiered' },
  ];

  return (
    <svg
      viewBox="0 0 1200 640"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', display: 'block' }}
      aria-label="PREVAYL agent roster — five real agents and their actual logic"
      role="img"
    >
      <defs>
        <linearGradient id="arBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </linearGradient>
        <linearGradient id="arCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131e2e" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <clipPath id="arRound">
          <rect width="1200" height="640" rx="10" ry="10" />
        </clipPath>
      </defs>

      <rect width="1200" height="640" fill="url(#arBg)" clipPath="url(#arRound)" />

      <rect width="1200" height="52" fill="#141c2b" />
      <line x1="0" y1="52" x2="1200" y2="52" stroke="#1e2d40" strokeWidth="1" />
      <text x="24" y="32" fill="#C9A84C" fontSize="13" fontWeight="700" letterSpacing="2">PREVAYL</text>
      <text x="90" y="32" fill="#3D5470" fontSize="13">|</text>
      <text x="100" y="32" fill="#f0f4f8" fontSize="12" fontWeight="500">AI Control Center · Agent Roster</text>
      <rect x="96" y="45" width="230" height="2" fill="#C9A84C" rx="1" />

      <text x="24" y="94" fill="#C9A84C" fontSize="11" fontWeight="700" letterSpacing="1.5">NOT JUST NAMES AND COLORED DOTS &mdash; FIVE REAL AGENTS, EACH ONE EXPLAINED</text>

      {agents.map((a, i) => {
        const y = 116 + i * 100;
        return (
          <g key={i}>
            <rect x="24" y={y} width="1152" height="86" rx="8" fill="url(#arCard)" stroke="#1e2d40" strokeWidth="1" />
            <rect x="44" y={y + 18} width="50" height="50" rx="12" fill={a.color} opacity="0.15" />
            <circle cx="69" cy={y + 43} r="6" fill={a.color} />
            <text x="112" y={y + 34} fill="#f0f4f8" fontSize="16" fontWeight="700">{a.name}</text>
            <text x="112" y={y + 53} fill="#c8d8e8" fontSize="12">{a.role}</text>
            <text x="112" y={y + 71} fill="#3D5470" fontSize="10.5">{a.detail}</text>
            <circle cx="1140" cy={y + 43} r="5" fill="#10b981" />
          </g>
        );
      })}

      <text x="24" y="616" fill="#3D5470" fontSize="10.5">Reconstructed from the real automation routes behind each agent &mdash; margin-monitor, order-status-bot, carrier-reengagement, auto-dispatch, and the lane-pricing tool shared with Agentic AI.</text>
    </svg>
  );
}
