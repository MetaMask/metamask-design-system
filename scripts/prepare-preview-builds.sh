#!/usr/bin/env bash

set -euo pipefail

# This script prepares a package to be published as a preview build
# to GitHub Packages.

if [[ $# -eq 0 ]]; then
  echo "Missing commit hash."
  exit 1
fi

# We don't want to assume that preview builds will be published alongside
# "production" versions. There are security- and aesthetic-based advantages to
# keeping them separate.
npm_scope="$1"

# We use the short commit hash as the prerelease version. This ensures each
# preview build is unique and can be linked to a specific commit.
shorthash="$2"

prepare-preview-manifest() {
  local manifest_file="$1"

  # jq does not support in-place modification of files, so a temporary file is
  # used to store the result of the operation. The original file is then
  # overwritten with the temporary file.
  jq --raw-output --arg npm_scope "$npm_scope" --arg hash "$shorthash" --from-file scripts/prepare-preview-builds.jq "$manifest_file" > temp.json
  mv temp.json "$manifest_file"
}

echo "Preparing manifests..."
# First, update the root package.json
echo "- root package.json"
prepare-preview-manifest "package.json"

# Then update all workspace package.json files
while IFS=$'\t' read -r location name; do
  echo "- $name"
  prepare-preview-manifest "$location/package.json"
done < <(yarn workspaces list --json | jq --slurp --raw-output 'map(select(.location != ".")) | map([.location, .name]) | map(@tsv) | .[]')

echo "Installing dependencies..."
yarn install --no-immutable

echo "Updating TypeScript imports for React Native packages..."
for pkg in "design-system-react-native" "design-system-twrnc-preset"; do
  if [ -d "packages/$pkg/src" ]; then
    echo "- $pkg source files"
    # Use different sed syntax for Linux vs macOS
    if [[ "$OSTYPE" == "darwin"* ]]; then
      find "packages/$pkg/src" -type f -name "*.ts*" -exec sed -i '' "s/@metamask\//@metamask-previews\//g" {} +
    else
      find "packages/$pkg/src" -type f -name "*.ts*" -exec sed -i "s/@metamask\//@metamask-previews\//g" {} +
    fi
  fi
done
