# Component Migration Strategy

**Status:** Active  
**Owners:** Design System Team, Platform Engineering (`metamask-mobile`, `metamask-extension`)  
**Epics:** [DSYS-272](https://consensyssoftware.atlassian.net/browse/DSYS-272), [DSYS-302](https://consensyssoftware.atlassian.net/browse/DSYS-302)  
**Last Updated:** 2026-03-03

## Goal

Consolidate extension and mobile components into MMDS using a **migrate-first, align-second** approach.

- **Phase 1 (Migration):** maximize migration velocity and minimize consumer disruption
- **Phase 2 (Alignment):** restore full cross-platform consistency across React, React Native, and Figma

## Scope

- Extension source: ~47 components (`ui/components/component-library`)
- Mobile source: ~48 main + ~31 temp components (`app/component-library`)
- Migration surface: ~126 components before deduplication

## Strategy

1. Migrate components in small, component-scoped PRs.
2. Prefer compatibility over broad API redesign during migration.
3. Track deferred alignment gaps for Phase 2.
4. Use a deprecation cycle for breaking changes (add new API, support window, remove old API in major release).

## Roles and Responsibilities

### Design Support Engineer (Platform Integration)

- Build and iterate components in platform `components-temp`
- Propagate usage and stabilize API/behavior in platform repos
- Move stabilized components into official platform directories
- Adopt MMDS components in platform repos and deprecate local versions

### Migration Engineer (MMDS Integration)

- Port stabilized platform components into MMDS
- Align implementation to MMDS architecture and token patterns
- Ensure reuse readiness across React and React Native

## Standard Lifecycle

1. Design creates/updates component spec
2. Design Support Engineer implements in `components-temp`
3. Design Support Engineer propagates and stabilizes in platform usage
4. Component moves to official platform directory
5. Migration Engineer migrates component into MMDS
6. Design Support Engineer replaces platform-local usage with MMDS component

## Cursor Rules (Implementation Source of Truth)

- [`component-architecture.md`](../.cursor/rules/component-architecture.md)
- [`component-creation.md`](../.cursor/rules/component-creation.md)
- [`component-enum-union-migration.md`](../.cursor/rules/component-enum-union-migration.md)
- [`component-documentation.md`](../.cursor/rules/component-documentation.md)
- [`styling.md`](../.cursor/rules/styling.md)
- [`figma-integration.md`](../.cursor/rules/figma-integration.md)
- [`pr.mdc`](../.cursor/rules/pr.mdc)

## References

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)
- [MetaMask Extension Component Library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
- [MetaMask Mobile Component Library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)
- [MMDS Monorepo](https://github.com/MetaMask/metamask-design-system)
