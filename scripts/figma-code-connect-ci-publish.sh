#!/usr/bin/env bash
set -euo pipefail

if [ -z "${FIGMA_ACCESS_TOKEN:-}" ]; then
  echo "::error::FIGMA_ACCESS_TOKEN is required to publish Code Connect mappings to Figma."
  exit 1
fi

yarn figma:connect:publish
