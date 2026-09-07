# Technology page evidence — September 7, 2026
Production source inspected at cd0af48ce3807707f60cb8d21b4f05e1f3fe2efb.
Scope: read-only source and authenticated UI inspection; private marketing review. No bot run, approval, PIN release, order creation, message submission or Central Dispatch posting was performed.

## Grounded capabilities
- lib/dispatch/policy.ts: eight stages, organization enabled switch, suggest/auto per stage.
- lib/dispatch/review-handoff.ts: carrier match, geofence, timing, carrier record, history and available negotiation context.
- lib/ai/personas.ts: eight defined personas. UI captured COO Assistant in current signed-in session. All eight roles were not separately authenticated or tested.
- lib/automations/registry.ts: 28 non-utility automation definitions. This is not 28 enabled or verified successful bots.
- lib/ai/agent-registry.ts: proactive dispatch/accounting/carrier proposal agents.
- lib/pin-gate.ts: shared document gate implementation; not an end-to-end security verification.

## Captures and limitations
- workflow.png: selected populated Smart Order Pipeline draft. AI Workflows dispatch switch OFF; graph extends horizontally. Existing audit draft rows remain in UI. No rows created or deleted.
- dispatch.png: deployed Dispatcher Bot panel ON, mixed ACTS/PROPOSES. Actual displayed counts are 38 waiting, 40 proposed, 2 approved, 0 rejected. Separate page header says 0 ACTIVE. Counts were not independently reconciled.
- assistant.png: deployed COO Assistant greeting and role label; no question sent.
- pin.png: pre-existing QA-AUG28-PINLOCK record. Contains test-fixture and operational contact context; keep owner-private pending public marketing asset review. No authorization completed or data changed.

## Issues found during this marketing inspection
1. AI Workflows initially selects an empty audit draft, creating a blank canvas impression.
2. Smart Order Pipeline diagram extends beyond its visible canvas; the first capture shows only its initial nodes.
3. AI Workflows switch OFF and Dispatcher Bot ON refer to separate controls. Do not describe the entire system as fully enabled.
4. Automation header shows 0 ACTIVE beside an ON dispatcher card.
5. Agents page contains numerous duplicate agent entries.
6. PIN record displays locked notice alongside signed-BOL links. No endpoint bypass test was performed this turn; prior audit findings require fresh verification.
7. Handoff implementation treats absent expiry dates as passing expiry checks, absent pickup dates as passing timing, and history as contextual. Avoid claims of independently verified insurance or impossible-to-fake handoffs.
8. No claims of production readiness, success rates, ROI or universal authorization enforcement have been independently verified here.

Homepage hero and production application were not changed. No test fixtures were created; none required purging.
