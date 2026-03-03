# Component Migration Strategy

**Status:** Active  
**Epics:**

- [DSYS-272](https://consensyssoftware.atlassian.net/browse/DSYS-272) - Migrate Legacy Mobile Components to MMDS Monorepo
- [DSYS-302](https://consensyssoftware.atlassian.net/browse/DSYS-302) - Migrate Legacy Extension Components to MMDS Monorepo

**Last Updated:** 2026-03-03

## Executive Summary

We are consolidating extension and mobile component libraries into the MMDS monorepo using a **migrate-first, align-second** model.

- **Phase 1 (Migration):** prioritize velocity and low consumer disruption
- **Phase 2 (Alignment):** restore full cross-platform consistency and shared-type architecture

This is intentionally a strategy document. Detailed implementation standards now live in Cursor rules.

## Scope and Baseline

### MMDS baseline (February 2026)

| Package                                | Components | Temp Components | Total |
| -------------------------------------- | ---------- | --------------- | ----- |
| `@metamask/design-system-react`        | 22         | 3               | 25    |
| `@metamask/design-system-react-native` | 23         | 7               | 30    |

### Source libraries

- Extension: ~47 components (`ui/components/component-library`)
- Mobile main: ~48 components (`app/component-library`)
- Mobile temp: ~31 components (staging)
- Total migration surface: ~126 components before deduplication

## Strategy

### Why migrate-first

1. Minimize disruption for extension and mobile teams actively shipping.
2. Move ownership, releases, tests, and docs into one monorepo quickly.
3. Reduce per-PR risk by migrating in smaller units.
4. Defer high-coordination API harmonization to a dedicated phase.

### Trade-off we are accepting

We temporarily relax the core principle of strict cross-platform consistency during migration. That consistency is explicitly restored in Phase 2.

## Cursor Rules: Source of Truth

Use this document for strategy and sequencing. Use the rules below for day-to-day implementation details.

| Rule | Purpose |
| ---- | ------- |
| [`component-architecture.md`](../.cursor/rules/component-architecture.md) | ADR-0003/0004 architecture, shared-vs-platform boundaries, export patterns |
| [`component-creation.md`](../.cursor/rules/component-creation.md) | Practical scaffolding and implementation flow when creating or porting components |
| [`component-enum-union-migration.md`](../.cursor/rules/component-enum-union-migration.md) | Internal refactors of existing components to const-object unions and centralized shared types |
| [`component-documentation.md`](../.cursor/rules/component-documentation.md) | Storybook and README standards |
| [`styling.md`](../.cursor/rules/styling.md) | Box/Text-first styling and token usage patterns |
| [`figma-integration.md`](../.cursor/rules/figma-integration.md) | Figma Code Connect requirements |
| [`pr.mdc`](../.cursor/rules/pr.mdc) | PR description and drafting workflow |

> Note: Older references to `component-migration.md` are obsolete in this repo. Use the rules above.

## Phase Plan

### Phase 1: Rapid Migration

**Goal:** Move component ownership into MMDS with minimal API churn.

**Definition of done:**

- Components migrated from source repos into MMDS packages (or explicitly archived)
- Tests and Storybook pass in MMDS
- Consumer imports updated to MMDS packages
- Legacy copies removed from consumer repos after migration
- Known cross-platform mismatches documented for Phase 2 backlog

**Delivery shape:**

- Small, component-scoped PRs
- Favor compatibility over refactors
- Track each migrated component and any deferred alignment items

### Phase 2: Alignment and Consolidation

**Goal:** Restore full consistency across React, React Native, and Figma.

**Workstreams:**

1. ADR-0004 rollout: centralize shared types in `@metamask/design-system-shared`
2. ADR-0003 rollout: replace legacy enums/patterns with const-object string unions
3. API alignment: converge prop names/behavior where cross-platform parity is expected
4. Figma parity: update Code Connect and property mappings
5. Documentation standardization: ensure both platforms stay in sync

## Breaking Changes Policy

### Phase 1 policy

Allowed:

- Import path changes into MMDS packages
- Minimal compatibility-preserving prop renames or shims when necessary

Avoid:

- Broad API redesign during migration
- Multi-component breaking bundles

### Phase 2 policy

Use a structured deprecation cycle:

1. Add new API and mark old API as deprecated.
2. Run a support window where both APIs work.
3. Remove deprecated API in the next major release.

Mitigation requirements for breaking changes:

- Migration guide with before/after examples
- Codemod for mechanical updates where feasible
- Explicit release-note callouts

## Governance and Maintenance

- **Owner:** Design System Team
- **Review cycle:** Monthly during active migration; quarterly after stabilization
- **Last review:** 2026-03-03
- **Next review:** 2026-04-03

## References

### Internal

- [DSYS-272 Epic](https://consensyssoftware.atlassian.net/browse/DSYS-272)
- [DSYS-302 Epic](https://consensyssoftware.atlassian.net/browse/DSYS-302)
- [Design System Metrics](https://georgewrmarshall.github.io/design-system-metrics/)
- [CLAUDE.md](../CLAUDE.md)

### ADRs

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

### Source repositories

- [MetaMask Extension Component Library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
- [MetaMask Mobile Component Library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)
- [MMDS Monorepo](https://github.com/MetaMask/metamask-design-system)
