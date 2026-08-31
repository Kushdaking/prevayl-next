import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Band } from "@/components/shared/Band";
import { layouts } from "@/content/layouts";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get started with Prevayl. Pricing built around your volume.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get started in under 10 minutes."
        lead="Tell us your volume and your worst lane. We'll show you what Prevayl does with them."
      />
      <Band height="md" image={layouts["contact"].band}>
        <form className="glass rounded-2xl p-8 max-w-lg" action="/api/contact" method="post">
          <div className="mb-5">
            <label className="block text-sm text-prevayl-muted mb-1.5" htmlFor="name">Name</label>
            <input id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-prevayl-navy-4 bg-prevayl-navy text-prevayl-soft" />
          </div>
          <div className="mb-5">
            <label className="block text-sm text-prevayl-muted mb-1.5" htmlFor="email">Work email</label>
            <input id="email" type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-prevayl-navy-4 bg-prevayl-navy text-prevayl-soft" />
          </div>
          <div className="mb-5">
            <label className="block text-sm text-prevayl-muted mb-1.5" htmlFor="role">Role</label>
            <select id="role" name="role" className="w-full px-4 py-3 rounded-lg border border-prevayl-navy-4 bg-prevayl-navy text-prevayl-soft">
              <option>Broker</option>
              <option>Carrier / Owner-operator</option>
              <option>Dealer</option>
              <option>Auction / Wholesale</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm text-prevayl-muted mb-1.5" htmlFor="volume">Monthly volume (cars)</label>
            <input id="volume" name="volume" placeholder="e.g. 50" className="w-full px-4 py-3 rounded-lg border border-prevayl-navy-4 bg-prevayl-navy text-prevayl-soft" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold">
            Request access / Book demo
          </button>
          <p className="mt-4 text-xs text-prevayl-muted text-center">No card required. Free for carriers. Always.</p>
        </form>
      </Band>
    </main>
  );
}
