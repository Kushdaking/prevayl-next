import type { Metadata } from "next";
import Link from "next/link";
import { ElementStage } from "@/components/ui/ElementStage";
import { Band } from "@/components/shared/Band";
import { layoutFor } from "@/content/layouts";

export const metadata: Metadata = {
  title: "The Dispatcher Bot — Every load, from order to paid",
  description:
    "Seven bot stages, five human touches. Verify, price, post, answer offers, book, release the PIN at pickup, chase, invoice — with rules deciding the money and models doing the reading and writing.",
};

const layout = layoutFor("platform/dispatcher-bot") ?? layoutFor("platform/dispatch")!;

// ─── content ────────────────────────────────────────────────────────────────

const WHY = [
  { k: "Verified before it's touched", h: "No guessing on price movers", p: "VIN decoded, vehicle classified, road miles measured, access and dates checked. Anything unknown becomes one message to the customer — never a guess." },
  { k: "Your margins, your clock", h: "Posts and negotiates by the numbers", p: "Carrier pay at your margin by load size. Counters in steps toward a line you set. Steps up on its own at 36 / 48 / 72 hours. Never books above the line without you." },
  { k: "No phone tag", h: "Carriers work from a link", p: "Rate confirmation, pickup details, documents and pay — on any phone, no login, no app. Counters and confirmations by text. A YES books the load." },
];

const AI = [
  { n: "1", h: "Deterministic where it counts", p: "Posted margins, negotiation steps, the escalation line, the decay clock, the PIN threshold, the geofence — all rows in a rules table, not model outputs. Same order, same offer, same answer, every time. Change a number and the bot changes with it." },
  { n: "2", h: "Models where language is", p: "A carrier's text, a customer's reply, a damage report photographed and emailed in — that's where the models work. They classify, extract and compose. A YES books because a rule says so; the model's job was to recognize the YES." },
  { n: "3", h: "Every action is a proposal", p: "Before the bot acts it writes what it would do and why — the offer, the margin at that number, the checks it ran. On suggest a person clicks. On auto it acts and the proposal is the record. Nothing happens that isn't explained." },
  { n: "4", h: "Private by design", p: "Your orders, rates and carrier relationships are the business. Routine inference runs on Prevayl's own hardware; only the hardest judgment calls go to a frontier model, and never with more of your data than the question needs." },
];

const LAYERS = [
  { s: "Layer 1 · on-prem GPU", h: "Bulk & routine", p: "Classification, extraction, triage, drafting. Runs on Prevayl-owned hardware. Your data doesn't leave." },
  { s: "Layer 2 · private cloud", h: "Agent loop", p: "The orchestrator that reads an order's state, picks the tool, and writes the proposal. Prevayl-hosted." },
  { s: "Layer 3 · frontier model", h: "Judgment calls", p: "The few decisions that need the strongest reasoning — ambiguous replies, unusual loads. Minimal context, no bulk data." },
];

type Leg = { n: string; h: string; p: string; who: "bot" | "you" | "carrier"; label: string; out: string };
type Stage = { r: string; name: string; line: string; who: string; whosub: string; ai: { b: string; t: string }[]; legs: Leg[] };

const STAGES: Stage[] = [
  { r: "I", name: "Intake", line: "The order becomes something the bot can trust.", who: "Bot", whosub: "no person needed",
    ai: [
      { b: "Extraction.", t: "A model reads whatever arrived — a form, a widget booking, a photographed damage report in an email — and turns it into a structured order." },
      { b: "Verification is rules.", t: "VIN registry, road router, geocoder, vehicle-class table, MSRP reference. If a fact can't be established, the bot asks — it never fills a gap with a guess." },
      { b: "One message, all the questions.", t: "The model composes the customer's message from the open items, in your voice, and the follow-up ladder chases it." },
    ],
    legs: [
      { n: "01", h: "The order arrives", p: "Widget, dispatcher form, or an emailed damage report. Contract customers get their matrix rate, stamped as contractual. Everyone else is priced per mile, by vehicle class, with multi-unit and full-load discounts.", who: "bot", label: "Bot", out: "Tariff set" },
      { n: "02", h: "Verified — and valued", p: "The VIN wins over what was typed. Road miles, not estimates. Access, dates and contacts checked; the customer gets one message for anything missing. High-value vehicles switch on the PIN protocol automatically, with the reason on the timeline.", who: "bot", label: "Bot", out: "Verified · PIN decided" },
    ] },
  { r: "II", name: "Market", line: "Pay is set, the load is posted, offers are answered.", who: "Bot · You above the line", whosub: "you decide the exceptions",
    ai: [
      { b: "Pure arithmetic.", t: "Posted pay = tariff × your margin for the load size. Steps, the line and the clock are numbers you set. No model touches a dollar figure." },
      { b: "The decision table.", t: "An offer is compared to the position and lands in one of five outcomes — accept, accept-close-enough, counter, escalate, decline. The bot can't improvise a sixth." },
      { b: "Models write the words.", t: "The counter text, the posting note, the reason on the escalation — composed from the numbers the rules produced." },
    ],
    legs: [
      { n: "03", h: "Carrier pay set at your margin", p: "Tariff × your posted margin by load size, rounded to five dollars. The bot records its whole position: step size, escalation line, decay clock, dispatch target.", who: "bot", label: "Bot", out: "Position recorded" },
      { n: "04", h: "Posted — your board and Central Dispatch", p: "Vehicle type from the class, your notes in the load terms, and a plain \"release code required\" on protected loads. No carrier is surprised.", who: "bot", label: "Bot", out: "Live to carriers" },
      { n: "05", h: "Offers answered by the rules", p: "Under posted — accept. Within a step — accept. Under the line — counter at the next step, never at their number. Above the line — you, with the margin shown. Nobody bites? The clock raises pay and reprices the listing.", who: "you", label: "You, above the line", out: "Accept · counter · escalate" },
      { n: "06", h: "The counter goes by text", p: "\"We can do $1,405 — reply YES and it's yours.\" A YES books. A number is a fresh offer. Anything else goes to a person with the reply attached.", who: "bot", label: "Bot", out: "YES = booked" },
    ] },
  { r: "III", name: "Booked", line: "A truck is committed, on paper, with a link in hand.", who: "You · Carrier", whosub: "booking is a person's click by default",
    ai: [
      { b: "Reading replies.", t: "The model classifies what came back — yes, no, a number, a milestone, or something a person needs to see. Only the first four trigger an action, and only the rule-defined one." },
      { b: "Documents from data.", t: "The rate confirmation is rendered from the order, never typed. What the carrier signs is exactly what the board showed." },
      { b: "Identity, not trust.", t: "The carrier is resolved against your file and the marketplace record; a new carrier is created from the record, not from a text message." },
    ],
    legs: [
      { n: "07", h: "Booked, papered, listed down", p: "Carrier on file, rate written, Central Dispatch dispatch created and the listing pulled. The rate confirmation is rendered from the order and emailed. The load link goes to whoever booked.", who: "you", label: "You, to book", out: "Rate con · load link" },
      { n: "08", h: "The carrier assigns the driver — no app", p: "From their link: driver's mobile, name, truck. The driver gets their own link. Two people, two phones, nothing to install.", who: "carrier", label: "Carrier", out: "Driver link sent" },
    ] },
  { r: "IV", name: "Pickup", line: "The theft control. No documents, no vehicle.", who: "Bot reviews · You release", whosub: "the PIN is never released by the bot alone by default",
    ai: [
      { b: "Five checks, written down.", t: "Right carrier (the driver's link came from the carrier's own booking link), distance from the pickup, timing against the window, insurance and authority, history. Each one pass or fail, with the evidence." },
      { b: "A recommendation, not an action.", t: "\"Recommend authorize\" or \"Recommend deny: 228 miles from the pickup.\" Your dispatcher sees the checks and the driver on the map, and clicks." },
      { b: "Bound to a phone.", t: "Verification recorded the number, the position and the device together. The code only works from that device, at that place." },
    ],
    legs: [
      { n: "09", h: "The driver requests the release code", p: "At the pickup. The phone is verified by one-time code, its location and device recorded. The bot reviews: right carrier, distance from the pickup, timing, insurance, history — and writes a recommendation.", who: "bot", label: "Bot reviews", out: "Recommendation in your inbox" },
      { n: "10", h: "Your dispatcher releases the PIN", p: "One click, with the checks in front of them. The code goes to the driver's phone. Entered from the same phone, at the same place — or refused.", who: "you", label: "You", out: "PIN to the driver" },
      { n: "11", h: "Documents unlock. No documents, no vehicle.", p: "BOL and dispatch sheet on the driver's phone. The pickup location releases against paperwork, as always. The security lived entirely in who authorized the code.", who: "bot", label: "Bot", out: "Vehicle released" },
    ] },
  { r: "V", name: "Delivery & money", line: "Nothing goes quiet, and the books close themselves.", who: "Bot", whosub: "exceptions to a person",
    ai: [
      { b: "Events, not phone calls.", t: "Pickup and delivery are written by the marketplace's events or the driver's link. The bot watches for silence — a slipped pickup, a missing POD — and chases by text before it asks a person." },
      { b: "Documents come home.", t: "What the carrier uploaded on the marketplace is pulled onto the order automatically, classified as POD or BOL. The chase never sends for something already done." },
      { b: "Accounting is rules.", t: "One invoice per delivery, the carrier cost booked against it, AR, revenue, cost and payable balanced — the same way every time, by code, not by a model." },
    ],
    legs: [
      { n: "12", h: "In transit, watched", p: "Pickup and delivery write themselves from Central Dispatch events or the driver's link. A slipped pickup is chased by text, then handed to a person. Nothing goes quiet.", who: "bot", label: "Bot", out: "Tracked · chased" },
      { n: "13", h: "Delivered — one invoice, balanced books", p: "Signed BOL from the driver's link, or pulled from Central Dispatch automatically. Invoice created. Carrier cost booked. AR, revenue, cost and payable, balanced.", who: "bot", label: "Bot", out: "Invoice · GL" },
      { n: "14", h: "Paid on the terms everyone saw", p: "Customer on their terms. Carrier on theirs — COD, Net 7, whatever was on the rate confirmation and the posting from the start.", who: "bot", label: "Bot", out: "Money moved" },
    ] },
];

const PIN_STEPS = [
  { b: "Driver at the pickup", t: "opens their link. Phone verified, location captured, device recorded. The bot checks carrier, distance, timing, insurance." },
  { b: "Your dispatcher", t: "sees the request with the checks — and the driver on the order's map — and authorizes. Or denies." },
  { b: "The PIN", t: "goes to the driver's phone. Entered from that phone, at that place. Wrong code refused. Right code from another device refused and revoked." },
  { b: "Documents unlock.", t: "BOL and dispatch sheet on the driver's phone. Every step on the timeline: who, when, where, which device." },
];

const CONTROL = [
  { h: "Above the escalation line", p: "A carrier wants more room than you allowed. The proposal shows the margin at their number." },
  { h: "Releasing the PIN", p: "The theft control. One click, with five checks and the driver's position in front of the dispatcher." },
  { h: "An unclear reply", p: "A sick driver, a new date, a photo. The bot acts on a clear yes, no, number or milestone — and only those." },
];

const tagClass: Record<Leg["who"], string> = {
  bot: "bg-prevayl-gold/15 text-prevayl-gold border-prevayl-gold/40",
  you: "bg-prevayl-slate text-white border-prevayl-slate",
  carrier: "bg-transparent text-prevayl-soft border-prevayl-navy-4",
};

// ─── page ───────────────────────────────────────────────────────────────────

export default function DispatcherBotPage() {
  return (
    <main>
      <ElementStage bandImage={layout.band} elements={layout.elements} height="hero">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">Platform · The Dispatcher Bot</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5 max-w-4xl">
          Every load, from order to paid.<br /><span className="text-prevayl-gold">One system. Your rules.</span>
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">
          The dispatcher bot works the parts of a load that don&apos;t need a person — verify, price, post, answer offers, book, chase, invoice — and puts the rest in front of your dispatcher with the evidence. Every step, on the order&apos;s record.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mb-8">
          {[["7", "bot stages"], ["72 h", "dispatch target"], ["0", "apps a carrier needs"], ["1", "timeline per load"]].map(([b, s]) => (
            <div key={s} className="rounded-xl border border-prevayl-navy-4 bg-prevayl-navy-2/60 px-4 py-3">
              <div className="font-display text-3xl text-prevayl-gold leading-none">{b}</div>
              <div className="text-[11px] tracking-widest uppercase text-prevayl-muted mt-1">{s}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110">Book a demo</Link>
          <Link href="/solutions/carriers" className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold border border-prevayl-gold/40 text-prevayl-gold transition hover:bg-prevayl-gold/10">Carriers: get started free</Link>
        </div>
      </ElementStage>

      {/* Why */}
      <Band height="md">
        <p className="text-prevayl-gold text-xs tracking-widest uppercase mb-2">Why it exists</p>
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">Dispatch is a hundred small decisions a day. Most of them have a rule.</h2>
        <p className="text-prevayl-soft/80 max-w-3xl mb-8">What&apos;s this vehicle? Is that offer worth taking? Did the truck actually show up? Where&apos;s the POD? A good dispatcher answers the same questions the same way every time. Prevayl-OS writes those rules down once and runs them — and hands the real decisions to you with everything you&apos;d have looked up anyway.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {WHY.map((c) => (
            <div key={c.h} className="rounded-2xl border border-prevayl-navy-4 bg-prevayl-navy-2/60 p-6">
              <div className="font-display text-2xl text-prevayl-gold leading-none mb-2">{c.k}</div>
              <h3 className="font-display text-xl text-white mb-2">{c.h}</h3>
              <p className="text-prevayl-soft/80 text-sm">{c.p}</p>
            </div>
          ))}
        </div>
      </Band>

      {/* How the AI works */}
      <Band height="md" alt>
        <p className="text-prevayl-gold text-xs tracking-widest uppercase mb-2">How the AI works</p>
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">Rules decide the money. Models do the reading and the writing.</h2>
        <p className="text-prevayl-soft/80 max-w-3xl mb-8">A dispatcher bot that &quot;uses its judgment&quot; on your margin is a liability. Prevayl&apos;s is built the other way round: every decision that moves money or a vehicle is a written rule you can read, change and audit. The language models sit around the rules — reading what carriers and customers say, writing what goes back, and explaining every proposal in plain English.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {AI.map((c) => (
            <div key={c.n} className="rounded-2xl border border-prevayl-navy-4 bg-prevayl-navy-2/60 p-6">
              <div className="font-display text-3xl text-prevayl-gold leading-none mb-2">{c.n}</div>
              <h3 className="font-display text-xl text-white mb-2">{c.h}</h3>
              <p className="text-prevayl-soft/80 text-sm">{c.p}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-3 mb-6">
          {LAYERS.map((l, i) => (
            <div key={l.h} className="relative rounded-xl border border-prevayl-navy-4 bg-prevayl-navy-2/60 p-5">
              <div className="text-[11px] tracking-widest uppercase text-prevayl-muted mb-1">{l.s}</div>
              <div className="font-display text-lg text-prevayl-gold">{l.h}</div>
              <p className="text-prevayl-soft/80 text-sm mt-1">{l.p}</p>
              {i < LAYERS.length - 1 && <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-prevayl-gold">→</span>}
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 rounded-xl border border-prevayl-navy-4 bg-prevayl-slate/20 p-6 text-sm text-prevayl-soft/80">
          <div><div className="font-display text-base tracking-widest text-white mb-1">IT NEVER</div>books above your escalation line, releases a PIN on a geofence failure, invents a price when it can&apos;t measure the miles, or acts on a reply it can&apos;t read as a clear yes, no, number or milestone.</div>
          <div><div className="font-display text-base tracking-widest text-white mb-1">IT ALWAYS</div>writes the reason, keeps the customer&apos;s tariff fixed, records who did what from which phone, and hands the exception to a person with the evidence attached.</div>
          <div><div className="font-display text-base tracking-widest text-white mb-1">YOU CONTROL</div>seven dials — one per stage — from suggest to auto, per organization. Plus the customer&apos;s own on/off switch. Turn one up when you&apos;ve watched it enough.</div>
        </div>
      </Band>

      {/* The flow */}
      <Band height="md">
        <p className="text-prevayl-gold text-xs tracking-widest uppercase mb-2">The flow</p>
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">Five stages. Fourteen steps. Your dispatcher touches five of them.</h2>
        <p className="text-prevayl-soft/80 max-w-3xl mb-8">A 2025 Porsche Cayenne, a dealer in Indianapolis, delivering to Nashville. Every step below is live in the platform.</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
          {STAGES.map((s) => (
            <div key={s.r} className="rounded-lg border border-prevayl-navy-4 bg-prevayl-navy-2/60 px-3 py-2">
              <div className="font-display text-sm tracking-widest text-prevayl-gold">{s.name.toUpperCase()}</div>
              <div className="text-[11px] text-prevayl-muted">{s.legs.length} steps · {s.who.toLowerCase()}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {STAGES.map((st) => (
            <div key={st.r} className="rounded-2xl border border-prevayl-navy-4 overflow-hidden bg-gradient-to-b from-prevayl-gold/5 to-transparent">
              <div className="flex flex-wrap items-center gap-4 px-6 py-5 border-b border-prevayl-navy-4">
                <div className="font-display text-5xl text-prevayl-gold leading-none">{st.r}</div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white leading-none mb-1">{st.name}</h3>
                  <p className="text-prevayl-soft/80 text-sm">{st.line}</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="font-display text-base tracking-widest text-white">{st.who.toUpperCase()}</div>
                  <div className="text-[11px] tracking-widest uppercase text-prevayl-muted">{st.whosub}</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 px-6 py-4 bg-prevayl-gold/5 border-b border-prevayl-navy-4">
                <div className="font-display text-sm tracking-widest text-prevayl-gold md:w-32 shrink-0 pt-0.5">AI IN THIS STAGE</div>
                <ul className="grid md:grid-cols-3 gap-4 flex-1">
                  {st.ai.map((a) => (
                    <li key={a.b} className="text-sm text-prevayl-soft/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-prevayl-gold">
                      <b className="text-white">{a.b}</b> {a.t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative pl-14 md:pl-16 pr-4 md:pr-6 py-5">
                <div className="absolute left-[27px] md:left-[35px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-prevayl-gold to-prevayl-gold/15" />
                <div className="space-y-3">
                  {st.legs.map((l) => (
                    <div key={l.n} className="relative rounded-xl border border-prevayl-navy-4 bg-prevayl-navy/80 p-5 flex gap-4 items-start">
                      <div className="absolute -left-14 md:-left-[50px] top-4 w-11 h-11 rounded-full bg-prevayl-navy border-2 border-prevayl-gold text-prevayl-gold font-display text-lg flex items-center justify-center shadow-[0_0_0_6px_#0a0f1a]">{l.n}</div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base mb-1">{l.h}</h4>
                        <p className="text-prevayl-soft/80 text-sm">{l.p}</p>
                      </div>
                      <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                        <span className={`font-display text-[11px] tracking-widest px-2.5 py-1 rounded-full border ${tagClass[l.who]}`}>{l.label.toUpperCase()}</span>
                        <span className="text-[11px] text-prevayl-muted text-right max-w-[170px]">{l.out}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Band>

      {/* PIN Protocol */}
      <Band height="md" alt>
        <p className="text-prevayl-gold text-xs tracking-widest uppercase mb-2">PIN Protocol</p>
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">Theft prevention that doesn&apos;t need the pickup contact.</h2>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-6 items-start">
          <div>
            <p className="text-prevayl-soft/80 mb-5">High-value vehicles are the ones that walk. Prevayl&apos;s control is simple: the documents that let a vehicle leave the lot don&apos;t exist until your dispatcher releases a code to a verified driver standing at the pickup. The dealership does what it always did — no paperwork, no car.</p>
            <ol className="space-y-3">
              {PIN_STEPS.map((s, i) => (
                <li key={s.b} className="flex gap-3 items-start text-sm text-prevayl-soft/80">
                  <span className="w-7 h-7 rounded-full border border-prevayl-gold text-prevayl-gold font-display text-sm flex items-center justify-center shrink-0">{i + 1}</span>
                  <span><b className="text-white">{s.b}</b> {s.t}</span>
                </li>
              ))}
            </ol>
          </div>
          <blockquote className="rounded-r-2xl border border-prevayl-navy-4 border-l-2 border-l-prevayl-gold bg-prevayl-navy-2/60 p-6">
            <p className="text-white text-lg leading-relaxed">&ldquo;The only time the documents should be locked is on the receiving end — not where the order originates, not the shipper. The security is in the PIN being authorized correctly.&rdquo;</p>
            <footer className="text-prevayl-muted text-[11px] tracking-widest uppercase mt-3">Kenny Rieberger · Founder, Prevayl · dispatched cars at two major auto transport companies</footer>
          </blockquote>
        </div>
      </Band>

      {/* Control */}
      <Band height="md">
        <p className="text-prevayl-gold text-xs tracking-widest uppercase mb-2">Control</p>
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">Every stage is a dial. Suggest, or auto.</h2>
        <p className="text-prevayl-soft/80 max-w-3xl mb-8">Out of the box the bot proposes and a person clicks on anything that touches money or a vehicle. Watch it. Move a dial to auto when you trust it. Every decision — the bot&apos;s and yours — is written as a proposal with its reasoning.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {CONTROL.map((c) => (
            <div key={c.h} className="rounded-2xl border border-prevayl-navy-4 bg-prevayl-navy-2/60 p-6">
              <h3 className="font-display text-xl text-white mb-2">{c.h}</h3>
              <p className="text-prevayl-soft/80 text-sm">{c.p}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band height="md" align="center" className="border-t border-prevayl-navy-4">
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">See it run on your lanes.</h2>
        <p className="text-prevayl-soft/80 max-w-xl mx-auto mb-6">A demo environment with your customers, your lanes and your rules takes minutes to set up. Bring a load that&apos;s giving you trouble.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/contact" className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110">Book a demo</Link>
          <Link href="/platform" className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold border border-prevayl-gold/40 text-prevayl-gold transition hover:bg-prevayl-gold/10">Tour the platform</Link>
        </div>
      </Band>
    </main>
  );
}
