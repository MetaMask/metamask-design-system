# Tailwind v4 PR Split Plan

This document is the source of truth for breaking the Tailwind v4 migration into smaller, reviewable PRs.

It exists because the current migration branch mixes foundation work, tooling changes, package contract changes, and component adoption. That makes review difficult and increases the chance that behavior changes, tooling changes, and migration mechanics get conflated.

This file should stay in the source-of-truth PR while we split the work into follow-up PRs. Once the migration has been fully broken out and merged, this file can be removed or the source-of-truth PR can be closed.

## Goals

- Reduce review surface area
- Separate platform changes from consumer adoption
- Keep each PR focused on one primary risk area
- Preserve a shippable, incremental migration path
- Make it clear which PRs are compatibility steps versus cutover steps

## Review Principles

Each PR should answer one primary question:

- Are the new Tailwind v4 design-token artifacts correct?
- Can the repo tooling safely support Tailwind v3 and v4 during migration?
- Can a real web consumer adopt `theme.css` successfully?
- Does a given component family preserve behavior while moving to Tailwind v4?
- Are cleanup and contract-removal steps safe after adoption is complete?

Each PR should avoid mixing:

- token generation with component churn
- lint/tooling enablement with behavioral component changes
- web Tailwind v4 adoption with unrelated React Native changes
- migration mechanics with unrelated cleanup

## Recommended Phases

### Phase 1: `design-tokens` Tailwind v4 Foundation

Goal: introduce the Tailwind v4 token surface as a stable foundation for downstream adoption.

Scope:

- add and build `packages/design-tokens/src/tailwind/theme.css`
- export the built `tailwind/theme.css` artifact
- add or refine parity validation against the v3 preset
- document consumer migration for token usage

Should prove:

- Tailwind v4 token output exists
- token output is sufficiently compatible with the v3 preset
- known deltas are explicitly documented

Should not include:

- `design-system-react` component migrations
- Storybook wiring
- broad repo-wide lint or package contract changes

### Phase 2: Tooling and Dual-Support Infrastructure

Goal: make the repo capable of understanding and validating Tailwind v4 without forcing immediate cutover everywhere.

Scope:

- ESLint support for web Tailwind v4 class validation
- any required dual-support configuration across packages
- build or config changes needed so v3 and v4 can coexist during migration

Should prove:

- the repo can lint and build Tailwind v4 consumers safely
- migration work can land incrementally without breaking unrelated packages

Should not include:

- broad component family migrations
- unrelated refactors

### Phase 3: Canary Consumer Adoption

Goal: wire one real web consumer to Tailwind v4 as proof that the foundation is usable end to end.

Recommended first consumer:

- `apps/storybook-react`

Scope:

- Tailwind v4 CSS entrypoint wiring
- PostCSS or Vite integration updates as needed
- `@source` scanning updates for Storybook and package consumption

Should prove:

- a real consumer can use `@metamask/design-tokens/tailwind/theme.css`
- the migration path works outside of isolated parity tests

Should not include:

- broad React component migration
- peer dependency removal unless strictly required

### Phase 4: `design-system-react` Package Contract

Goal: update the consumer-facing contract for web package adoption.

Scope:

- remove the v3 preset peer dependency from `@metamask/design-system-react`
- update package metadata and migration docs
- clarify the expected Tailwind v4 consumer setup

Should prove:

- consumers have a clear, documented adoption contract
- the package no longer signals the old preset as the expected integration path

Should not include:

- large component churn
- unrelated styling rewrites

### Phase 5: Component Migration by Family

Goal: migrate component implementations in small, reviewable groups.

Recommended grouping:

- typography primitives: `Text`, `Input`, typography mappings
- buttons: `Button`, `ButtonIcon`, `TextButton`
- form controls: `Checkbox`, `Radio`, related controls
- utility/config follow-ups where required

Rules:

- keep each PR focused on one component family
- preserve runtime behavior where possible
- isolate intentional behavior changes and call them out explicitly
- keep tests close to the migrated surface

Should prove:

- the migrated family behaves the same under Tailwind v4
- reviewers can reason about behavior without reading unrelated migration noise

### Phase 6: Cleanup and Compatibility Removal

Goal: remove temporary compatibility paths once adoption is complete.

Scope:

- remove transitional docs or config
- remove temporary dual-support behavior no longer needed
- tighten remaining lint or package expectations

Should prove:

- the repo has completed the cutover
- no migration-only scaffolding remains

## Compatibility vs. Cutover

This migration should distinguish clearly between compatibility work and cutover work.

Compatibility work:

- introduces `theme.css`
- allows v3 and v4 to coexist
- validates parity
- proves early adoption in a low-risk consumer

Cutover work:

- removes the old preset from the expected package contract
- migrates component families
- removes temporary compatibility scaffolding

This distinction matters because compatibility steps should leave the repo flexible, while cutover steps intentionally narrow the supported path.

## Suggested PR Sequence

1. `design-tokens`: Tailwind v4 foundation
2. Tooling: dual-support lint/build/config support
3. Storybook React: canary consumer adoption
4. `design-system-react`: package contract and migration docs
5. Component family PRs
6. Cleanup and removal of temporary compatibility paths

## Open Questions

- Should `design-system-react` package contract changes land before or after Storybook adoption?
- Which component family is the best first migration candidate after the canary consumer is stable?
- Are any React Native-adjacent changes truly required for the web Tailwind v4 rollout, or should they be split completely?
- Which known parity exceptions are acceptable and permanent versus temporary?

## Working Notes

- Initial leaning: start with `design-tokens` foundation, including the stylesheet, parity check, and migration docs.
- Strong preference: do not mix `twMerge` behavior changes, component-family migration, and tooling churn in the same PR unless one change is mechanically required by another.
