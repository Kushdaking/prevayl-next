export function StoreBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "pvl-store-badges pvl-store-badges-compact" : "pvl-store-badges"} aria-label="Download Prevayl Carrier">
      <a href="https://apps.apple.com/us/app/prevayl-carrier/id6766701996" target="_blank" rel="noopener noreferrer" aria-label="Download Prevayl Carrier on the App Store">
        <img src="https://prevayl-web.pages.dev/store-badges/app-store.svg" width="120" height="40" alt="Download on the App Store" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.prevaylos.carrier" target="_blank" rel="noopener noreferrer" aria-label="Get Prevayl Carrier on Google Play">
        <img src="https://prevayl-web.pages.dev/store-badges/google-play.png" width="155" height="60" alt="Get it on Google Play" />
      </a>
    </div>
  );
}
