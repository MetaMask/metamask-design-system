#!/usr/bin/env bash
set -euo pipefail

if [ -n "${FIGMA_ACCESS_TOKEN:-}" ]; then
  yarn figma:connect:publish:dry-run
else
  echo "::warning::FIGMA_ACCESS_TOKEN is not configured. Running parse-only Code Connect validation. Add the repository secret to enable full Figma API validation."
  yarn figma:connect:parse
fi
