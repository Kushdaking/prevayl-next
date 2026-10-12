import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell, DocH2, DocH3, DocNote } from "@/components/docs/DocsShell";

export const metadata: Metadata = {
  title: "Carrier onboarding and driver app guide | Prevayl",
  description: "Join Prevayl as a carrier, invite drivers, and complete the first pickup and delivery with the right photos and signed BOLs.",
};

const visualGuide = "https://app.prevaylos.com/resources/docs/carrier-onboarding";

export default function Page() {
  return <DocsShell title="Carrier onboarding and driver app" description="The practical guide for carrier owners and drivers, from invitation to signed delivery.">
    <DocNote><strong>Just received an invitation?</strong> Accept it with the email address shown in the message. If you already have a Prevayl login, sign in and join the invited carrier. Drivers should not create a second carrier company.</DocNote>
    <p><Link className="pvl-text-link" href={visualGuide}>Open the illustrated step-by-step guide →</Link></p>

    <DocH2>For carrier owners</DocH2>
    <ol>
      <li><strong>Apply once for your company.</strong> Use the legal carrier name and a business email. Add your MC and USDOT numbers, insurance details, and requested documents.</li>
      <li><strong>Activate your approved account.</strong> Watch that email for the review decision. Sign in to the carrier console after approval.</li>
      <li><strong>Invite your drivers.</strong> Open Team → Invite Driver. Send the invitation to the exact email each driver uses to sign in. They join your carrier account.</li>
      <li><strong>Assign and follow loads.</strong> Make sure the driver and carrier are assigned to the LD or CARS load. The driver can then see its vehicles, stops, and tasks.</li>
    </ol>
    <p><Link className="pvl-text-link" href="https://app.prevaylos.com/carrier/apply">Apply as a carrier →</Link> &nbsp; <Link className="pvl-text-link" href="https://app.prevaylos.com/carrier/login">Sign in to the carrier console →</Link></p>

    <DocH2>For drivers</DocH2>
    <ol>
      <li><strong>Accept the invitation.</strong> Confirm the carrier name and use the invited email. If you already have a login, sign in and join.</li>
      <li><strong>Upload your driver ID.</strong> In the installed Prevayl Carrier app, open Profile and upload a readable ID image. Dispatch must review it before protected trip actions are available.</li>
      <li><strong>Review the assigned load.</strong> Check the LD or CARS number, every VIN, each stop, appointment, and special instruction.</li>
      <li><strong>Request pickup authorization when required.</strong> After approval, the PIN appears masked. Tap to reveal it for the pickup handoff. You do not type it into the app. The PIN is required before pickup documents unlock; delivery has no second PIN.</li>
      <li><strong>Document pickup.</strong> Match the VIN, save six required inspection angles, and add up to 20 optional detail photos. Record existing damage and get the pickup BOL signed.</li>
      <li><strong>Move the load.</strong> Follow the next stop in the itinerary and keep dispatch informed when plans change.</li>
      <li><strong>Document delivery.</strong> Take the required delivery photos, collect the receiver’s signature, and submit the delivery BOL. Wait for confirmation that the record saved.</li>
    </ol>

    <DocH3>What the app looks like</DocH3>
    <p>These screens were captured in the Android carrier app with a test load. The invitation and pickup PIN screens are described in text until current captures are available.</p>
    <div style={{display:"flex",flexWrap:"wrap",gap:20,margin:"20px 0 30px"}}>
      <figure style={{margin:0,width:200}}><img src="https://app.prevaylos.com/guides/carrier/parent-load.webp" alt="Prevayl carrier app parent load showing assigned vehicles" style={{width:"100%",borderRadius:12,border:"1px solid #1E2D3D"}}/><figcaption style={{fontSize:12}}>Review the parent load and VINs.</figcaption></figure>
      <figure style={{margin:0,width:200}}><img src="https://app.prevaylos.com/guides/carrier/required-angles.webp" alt="Prevayl carrier app required inspection photo angles" style={{width:"100%",borderRadius:12,border:"1px solid #1E2D3D"}}/><figcaption style={{fontSize:12}}>Complete the required angles.</figcaption></figure>
      <figure style={{margin:0,width:200}}><img src="https://app.prevaylos.com/guides/carrier/delivery-signature.webp" alt="Prevayl carrier app delivery signature step" style={{width:"100%",borderRadius:12,border:"1px solid #1E2D3D"}}/><figcaption style={{fontSize:12}}>Get the delivery BOL signed.</figcaption></figure>
    </div>
    <p><Link className="pvl-text-link" href={visualGuide}>See every captured screen and the full walkthrough →</Link></p>

    <DocH2>If a step is blocked</DocH2>
    <p>Send dispatch your carrier name, driver email, LD or CARS number, VIN, the step that stopped, and a screenshot of the exact error. Keep the same load open so existing photos and documents stay tied to the right record.</p>
  </DocsShell>;
}
