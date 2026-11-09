#!/usr/bin/env bash

set -euo pipefail

# This script prepares a package to be published as a preview build
# to GitHub Packages.

if [[ $# -lt 2 || -z "${1}" || -z "${2}" ]]; then
  echo "Usage: prepare-preview-builds.sh <npm-scope> <short-commit-hash>" >&2
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

echo "Updating source imports for workspace packages..."

# Rewrite imports of sibling workspace packages only. External packages such as
# `@metamask/utils` must keep the `@metamask` scope. Longer names are replaced
# first so `@metamask/design-system-react-native` is not partially rewritten
# as the shorter `@metamask/design-system-react` package.
workspace_package_names=()
for package_dir in packages/*/; do
  if [[ -f "${package_dir}package.json" ]]; then
    workspace_package_names+=("$(basename "$package_dir")")
  fi
done

if [[ ${#workspace_package_names[@]} -eq 0 ]]; then
  echo "No workspace packages found to rewrite imports for." >&2
  exit 1
fi

mapfile -t workspace_package_names < <(
  printf '%s\n' "${workspace_package_names[@]}" |
    awk '{ print length, $0 }' |
    sort -rn |
    cut -d' ' -f2-
)

sed_expressions=()
for package_name in "${workspace_package_names[@]}"; do
  sed_expressions+=(-e "s|@metamask/${package_name}|${npm_scope}/${package_name}|g")
done

while IFS= read -r -d '' source_file; do
  if [[ "$OSTYPE" == darwin* ]]; then
    sed -i '' "${sed_expressions[@]}" "$source_file"
  else
    sed -i "${sed_expressions[@]}" "$source_file"
  fi
done < <(
  find packages \
    \( -path '*/node_modules/*' -o -path '*/dist/*' -o -path '*/coverage/*' \) -prune \
    -o -type f \( \
      -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' -o \
      -name '*.mjs' -o -name '*.cjs' \
    \) -print0
)
