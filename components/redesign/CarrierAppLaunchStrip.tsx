import { StoreBadges } from "./StoreBadges";

export function CarrierAppLaunchStrip() {
  return (
    <section className="pvl-redesign pvl-carrier-launch" aria-label="Prevayl Carrier app is available now">
      <div className="pvl-carrier-launch-inner">
        <div className="pvl-carrier-launch-copy">
          <strong>PREVAYL CARRIER · NOW LIVE</strong>
          <span>Loads, inspections and BOLs in your pocket. Free on iPhone and Android.</span>
        </div>
        <StoreBadges compact />
        <a className="pvl-carrier-launch-more" href="/solutions/carriers/">Explore the app ↗</a>
      </div>
    </section>
  );
}
