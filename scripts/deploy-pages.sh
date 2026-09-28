#!/usr/bin/env bash
# The ONLY supported way to ship prevaylos.com marketing pages.
# Build -> prefix check -> deploy to Pages production -> verify through the
# live domain. Exits non-zero (and says how to roll back) if the live check fails.
set -euo pipefail
cd "$(dirname "$0")/.."
PROJECT=prevayl-web
SITE=https://prevaylos.com

[ -n "$(git status --porcelain)" ] && { echo "Working tree is dirty — commit first so the deploy maps to a commit."; exit 1; }
[ -z "$(git ls-remote --heads origin "$(git branch --show-current)")" ] && { echo "Branch is not on GitHub — push it first so the live site is never disk-only."; exit 1; }

rm -rf .next out
unset ASSET_PREFIX
npm run build            # postbuild runs scripts/check-asset-prefix.mjs

npx wrangler pages deploy out --project-name "$PROJECT" --branch main \
  --commit-hash "$(git rev-parse HEAD)" --commit-message "$(git log -1 --format=%s)"

echo "Verifying through $SITE ..."
sleep 5
html=$(curl -fsSL "$SITE/?deploycheck=$RANDOM")
if grep -qE '(href|src)="/_next/' <<<"$html"; then echo "LIVE FAIL: bare /_next/ refs on $SITE"; fail=1; fi
for u in $(grep -oE '(href|src)="https://prevayl-web\.pages\.dev/_next/static/[^"]+\.(css|js)"' <<<"$html" | sed -E 's/^[a-z]+="//;s/"$//' | sort -u); do
  code=$(curl -s -o /dev/null -w '%{http_code}' "$u"); [ "$code" = 200 ] || { echo "LIVE FAIL: $code $u"; fail=1; }
done
if [ "${fail:-0}" = 1 ]; then
  echo "Roll back: Cloudflare dashboard -> Pages -> $PROJECT -> Deployments -> previous -> Rollback"; exit 1
fi
echo "LIVE OK: $SITE styled, all assets 200"
