#!/usr/bin/env bash
# Container startup for the dockerised dev environment (see DOCKER-DEV.md).
# Ensures dependencies are present in the node_modules volume, then starts the
# Docusaurus dev server bound to all interfaces so it is reachable from the host
# at http://localhost:3000.
set -euo pipefail

cd /workspace

# node_modules lives on a named Docker volume (isolated from the host). The image
# bakes it in, but self-heal if the volume is empty (e.g. first run on a fresh volume).
if [ ! -x node_modules/.bin/docusaurus ]; then
  echo "[entrypoint] node_modules not found in volume — running 'npm ci'..."
  npm ci
fi

echo "[entrypoint] Starting Docusaurus dev server on http://0.0.0.0:3000 (hot reload, polling)"
exec npm start -- --host 0.0.0.0 --port 3000 --poll 1000 --no-open
