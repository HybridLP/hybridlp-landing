#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
export PATH="$HOME/.bun/bin:$PATH"

git pull --ff-only
bun install --frozen-lockfile
bun run build

WEBROOT=/var/www/hybridlp/landing
if [ -d "$WEBROOT" ]; then
  rm -rf "${WEBROOT}.prev"
  mv "$WEBROOT" "${WEBROOT}.prev"
fi
mkdir -p "$WEBROOT"
rsync -a --delete dist/ "$WEBROOT/"
echo "landing deployed to $WEBROOT"
