import { StoreBadges } from "./StoreBadges";

export function FreeCarrierSignup() {
  return (
    <section className="pvl-wrap pvl-section pvl-carrier-app" aria-labelledby="free-carrier-title">
      <div className="pvl-section-heading">
        <div>
          <p className="pvl-eyebrow">Prevayl Carrier / iPhone + Android</p>
          <h2 id="free-carrier-title">The carrier app is live.<br/><em>Take the load with you.</em></h2>
        </div>
        <div className="pvl-carrier-app-copy">
          <p>Find loads, run truck-aware routes, inspect every VIN, capture BOLs, and review pay from the cab. Prevayl Carrier is free to download on the App Store and Google Play.</p>
          <StoreBadges />
          <a className="pvl-button" href="https://app.prevaylos.com/carrier/apply">Apply to haul loads →</a>
          <p className="pvl-carrier-app-note">Free download · Carrier approval required before hauling</p>
        </div>
      </div>
    </section>
  );
}
