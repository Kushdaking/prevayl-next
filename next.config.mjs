/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for Cloudflare Pages. This site has no API routes and no
  // server rendering — everything is content from content/site.ts — so a
  // static build is the correct target and deploys in seconds rather than
  // going through the platform's 15-minute gated build.
  output: 'export',
  // The export target has no Next image optimizer at runtime.
  images: { unoptimized: true },
  // Pages serves /path/ as a directory; trailing slashes avoid 308 chains.
  trailingSlash: true,
  // Served on prevaylos.com behind a Worker that splits marketing (Pages) from
  // the platform (droplet). Both are Next apps, so both would claim /_next/*.
  // Pointing assets at the pages.dev origin removes that collision entirely —
  // same pattern already running on cars2godelivers.com.
  assetPrefix: process.env.ASSET_PREFIX || undefined,
};

export default nextConfig;
