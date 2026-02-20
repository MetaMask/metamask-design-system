# Component Migration Strategy

**Status:** Active
**Epic:** [DSYS-272](https://consensyssoftware.atlassian.net/browse/DSYS-272) - Migrate Legacy Mobile Components to MMDS Monorepo
**Last Updated:** 2026-02-19

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current State Analysis](#current-state-analysis)
3. [Migration Strategy: Speed vs. Alignment](#migration-strategy-speed-vs-alignment)
4. [Trade-offs Analysis](#trade-offs-analysis)
5. [Architectural Decisions](#architectural-decisions)
6. [Migration Phases](#migration-phases)
7. [Breaking Changes Strategy](#breaking-changes-strategy)
8. [Success Metrics](#success-metrics)

---

## Executive Summary

We are migrating **~80 mobile components** and **~47 extension components** from consumer codebases into the MetaMask Design System (MMDS) monorepo. This document outlines our **two-phase strategy** prioritizing **speed over immediate alignment**, with a planned polish phase to restore cross-platform consistency.

### Strategic Shift

**Previous Approach (Audit-First):**
- ✅ Ensured components met both extension and mobile needs upfront
- ✅ Aligned naming, APIs, and properties across React, React Native, and Figma
- ✅ Connected components via Code Connect and Figma MCP
- ❌ Slower migration velocity
- ❌ More breaking changes during migration

**New Approach (Migrate-First):**
- ✅ Maximize migration velocity
- ✅ Minimize breaking changes for consumers during migration
- ✅ Get components under MMDS governance quickly
- ❌ Temporary misalignment across platforms
- ❌ Deferred polish work to Phase 2

### Core Principle Tension

The MMDS core principle is **"Consistent across libraries with as much code sharing as possible"**. This migration strategy **temporarily deprioritizes** this principle to achieve rapid consolidation, with a commitment to restore consistency in Phase 2.

---

## Current State Analysis

### MMDS Baseline (February 2026)

#### Component Inventory

| Package | Components | Temp Components | Total |
|---------|------------|-----------------|-------|
| `@metamask/design-system-react` | 22 | 3 | 25 |
| `@metamask/design-system-react-native` | 23 | 7 | 30 |
| `@metamask/design-system-shared` | 0 components | - | 0 |

**Cross-Platform Coverage:**
- **21 components** exist in both React and React Native
- **1 React-only:** ButtonHero
- **2 React Native-only:** BottomSheetOverlay, (1 additional variant difference)

#### Type Architecture

**Current State (Pre-ADR Implementation):**
- ~900 lines of types duplicated in each platform package (~1,800 total)
- **No shared types** in `@metamask/design-system-shared` (only CAIP address utilities)
- Platform-specific enum values (appropriate for different styling systems):
  - React: Tailwind class names (`'xs'`, `'font-bold'`)
  - React Native: Numeric/standard values (`'16'`, `'700'`)

**Key Misalignments:**
- Enum value differences (intentional for platform styling needs)
- Missing platform-specific enums (TextAlign, OverflowWrap in React only)
- React Native has additional color variants (PrimaryAlternative)
- Button.types.ts structure differs (discriminated unions vs. simple unions)

### Source Component Libraries

#### MetaMask Extension
**Location:** [`ui/components/component-library`](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
**Total Components:** ~47

**Categories:**
- Avatar (5), Banner (3), Button (6), Modal (7), Form (9), Select (3), Popover (2), Tag (2), Picker (1), Layout (4), Typography (2), Utility (3)

**Architecture:**
- Flat directory structure
- Hierarchical base components (button-base → button-primary/secondary)
- Built 1:1 with Figma DS Components UI kit
- Accept Box component props for layout flexibility

#### MetaMask Mobile
**Location:** [`app/component-library`](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)
**Total Components:** ~80

**Categories:**
- Main components: 48
- Base components: 1 (TagBase)
- Temporary staging: 31 (awaiting DS team review)

**Architecture:**
- Organized by category (Avatars/, Buttons/, Forms/, etc.)
- Variant system (Avatar with 5 variants, Cell with 3 variants)
- Foundation pattern (AvatarBase, CellBase subdirectories)
- Built 1:1 with Figma DS Components UI kit

### Migration Scale

| Source | Components to Migrate | Notes |
|--------|----------------------|-------|
| Extension | ~47 | Flat structure, hierarchical variants |
| Mobile (main) | ~48 | Organized categories, variant system |
| Mobile (temp) | ~31 | Staging area, may need additional review |
| **Total** | **~126** | Significant consolidation effort |

**Deduplication Expected:** Many components already exist in MMDS (21 cross-platform), so actual net-new components will be lower.

---

## Migration Strategy: Speed vs. Alignment

### Strategy Overview

**Phase 1: Rapid Migration (Current)**
- **Objective:** Move all components into MMDS monorepo as quickly as possible
- **Acceptance:** Temporary misalignment across React/React Native/Figma is acceptable
- **Priority:** Minimize breaking changes for extension and mobile consumers
- **Outcome:** All components under MMDS governance, even if not perfectly aligned

**Phase 2: Polish & Alignment (Future)**
- **Objective:** Restore cross-platform consistency (core MMDS principle)
- **Priority:** Align naming, APIs, properties across React, React Native, and Figma
- **Priority:** Consolidate shared types into `@metamask/design-system-shared`
- **Outcome:** Full cross-platform alignment with code sharing maximized

### Rationale for Speed-First Approach

1. **Minimize Consumer Breaking Changes**
   - Consumers (extension/mobile) are already using components with specific APIs
   - Migrating "as-is" reduces immediate churn in consumer codebases
   - Breaking changes consolidated into Phase 2 (planned deprecation cycle)

2. **Faster Time to MMDS Governance**
   - Components under MMDS ownership sooner
   - Unified versioning and release process
   - Centralized documentation and testing standards

3. **Iterative Improvement Enabled**
   - Get working components into monorepo first
   - Iterate on alignment incrementally
   - Easier to refactor when all code is in one repository

4. **Reduced Migration Risk**
   - Smaller individual PRs (per-component vs. aligned-bundles)
   - Easier to test and validate each migration
   - Less coordination overhead between extension and mobile teams

### What This Means in Practice

**Phase 1 Migration (Speed):**
```
Extension Component → MMDS React Package (as-is, minimal API changes)
Mobile Component → MMDS React Native Package (as-is, minimal API changes)
```

**Temporary Outcomes:**
- Same component may have different prop names across platforms
- Some components may only exist on one platform initially
- Figma alignment deferred to Phase 2
- Type duplication continues temporarily

**Phase 2 Polish (Alignment):**
```
Misaligned Components → Audit → Align APIs → Deprecate Old APIs → Update Consumers
Duplicated Types → Consolidate into design-system-shared → Re-export in platform packages
Figma Components → Update Code Connect → Align property names
```

---

## Trade-offs Analysis

### Benefits of Speed-First Approach

#### 1. Reduced Breaking Changes During Migration

**Benefit:** Consumer codebases (extension/mobile) experience minimal disruption during initial migration.

**Why It Matters:**
- Extension and mobile can continue shipping features without blocked on design system alignment
- Reduces coordination overhead between teams
- Smaller, incremental PRs in consumer codebases

**Example:**
```tsx
// Extension continues using familiar API during migration
import { Button } from '@metamask/design-system-react';
<Button variant="primary" size="md" /> // No changes required

// Mobile continues using familiar API during migration
import { Button } from '@metamask/design-system-react-native';
<Button variant={ButtonVariant.Primary} size={ButtonSize.Md} /> // No changes required
```

#### 2. Faster Consolidation Under MMDS Ownership

**Benefit:** All components under single governance, versioning, and release process sooner.

**Why It Matters:**
- Unified documentation standards (Storybook, READMEs)
- Consistent testing and accessibility standards
- Centralized issue tracking and component requests
- Easier to enforce design system patterns

**Metrics:**
- **Current:** ~126 components across 2 consumer repos
- **Phase 1 Complete:** ~126 components in MMDS monorepo
- **Phase 2 Complete:** Aligned, deduplicated component set

#### 3. Enables Iterative Improvement

**Benefit:** Components can be improved incrementally after migration rather than requiring upfront perfection.

**Why It Matters:**
- Easier to refactor when all code is in one repository
- Can identify alignment opportunities through usage patterns
- Can prioritize alignment work based on actual consumer needs

**Example Evolution:**
```
Phase 1: Button (React) + Button (React Native) → Both in monorepo, different APIs
Phase 2a: Audit both implementations, identify common patterns
Phase 2b: Propose unified API, deprecate old APIs with migration guide
Phase 2c: Update consumers using codemod or manual migration
```

#### 4. Lower Migration Risk Per Component

**Benefit:** Smaller, focused PRs with less surface area for bugs.

**Why It Matters:**
- Each component migration is independently testable
- Rollback is easier if issues are discovered
- Reduces coordination complexity (don't need both platforms aligned upfront)

**PR Size Comparison:**
- **Speed-first:** 1 PR per component per platform (~200 PRs total)
- **Alignment-first:** 1 PR per aligned component bundle (~80 PRs, but larger and more complex)

### Costs of Speed-First Approach

#### 1. Temporary Violation of Core Principle

**Cost:** Temporarily violates MMDS core principle: "Consistent across libraries with as much code sharing as possible"

**Impact:**
- Developers may see different APIs for same component across platforms
- Increased cognitive load during cross-platform work
- Potential for confusion in documentation and training

**Mitigation:**
- Document known inconsistencies clearly
- Phase 2 roadmap published upfront (commitment to alignment)
- Clear migration guides for Phase 2 breaking changes

#### 2. Increased Maintenance Burden (Temporary)

**Cost:** Maintaining misaligned components requires more effort.

**Impact:**
- Bug fixes may need to be applied separately to each platform
- Feature additions require considering platform differences
- Harder to share utility functions and patterns

**Mitigation:**
- Prioritize high-usage components for Phase 2 alignment
- Use `design-system-shared` for utilities even during Phase 1
- Document known differences in component READMEs

#### 3. Larger Phase 2 Breaking Changes

**Cost:** Consolidating breaking changes into Phase 2 creates a larger coordination effort later.

**Impact:**
- Consumers (extension/mobile) will need to update many components at once
- Requires comprehensive deprecation cycle and migration guides
- May require codemods to automate updates

**Mitigation:**
- Use TypeScript deprecation warnings (`@deprecated` JSDoc)
- Provide codemods where possible for mechanical refactors
- Phase 2 can be broken into smaller incremental releases
- ADR-0003 (Enum → String Union) enables backwards compatibility

#### 4. Type Duplication Continues

**Cost:** Duplicated type definitions remain across React and React Native packages during Phase 1.

**Impact:**
- ~1,800 lines of duplicated code (temporary)
- Risk of type drift between platforms
- Manual synchronization required for new components

**Mitigation:**
- Strict PR review process for new components
- Automated linting/testing for type consistency (where possible)
- Prioritize ADR-0004 implementation early in Phase 2

### Trade-off Decision Matrix

| Factor | Speed-First (Chosen) | Alignment-First (Rejected) |
|--------|----------------------|----------------------------|
| **Consumer Breaking Changes** | ✅ Minimal during migration | ❌ Significant during migration |
| **Time to MMDS Ownership** | ✅ Fast (~6 months) | ❌ Slow (~12 months) |
| **Type Duplication** | ❌ Continues temporarily | ✅ Eliminated during migration |
| **Cross-Platform Consistency** | ❌ Deferred to Phase 2 | ✅ Maintained throughout |
| **PR Complexity** | ✅ Small, focused PRs | ❌ Large, coordinated PRs |
| **Phase 2 Breaking Changes** | ❌ Larger consolidation effort | ✅ Smaller, incremental changes |
| **Developer Confusion** | ❌ Temporary inconsistencies | ✅ Always consistent |
| **Risk of Migration Failure** | ✅ Lower (incremental) | ❌ Higher (all-or-nothing) |

**Decision:** Speed-first approach chosen due to:
1. **High priority** on minimizing consumer disruption (extension/mobile teams actively shipping)
2. **High confidence** in Phase 2 execution (ADR-0003/0004 enable backwards compatibility)
3. **High value** of rapid consolidation (governance, testing, documentation benefits)

---

## Architectural Decisions

Two key architectural decisions enable this migration strategy:

### ADR-0003: Enum to String Union Migration

**GitHub:** [MetaMask/decisions#127](https://github.com/MetaMask/decisions/pull/127)

**Problem:** TypeScript enums in component APIs create tight coupling that blocks incremental migration.

**Example Problem (MenuItem):**
```tsx
// Extension code using enum
import { MenuItem, MenuItemVariant } from 'legacy-location';
<MenuItem variant={MenuItemVariant.Primary} />

// After migration, this breaks:
import { MenuItem, MenuItemVariant } from '@metamask/design-system-react';
<MenuItem variant={MenuItemVariant.Primary} /> // MenuItemVariant is incompatible type
```

**Solution:** Migrate enums to string unions with const objects (Option 3).

**Benefits:**
- **Backwards Compatibility:** Old enum values work with new string union types
- **Enables CVA:** Modern styling solution (Class Variance Authority)
- **Better Tree-Shaking:** Eliminates enum runtime overhead
- **Solves Type Exposure:** Works across monorepo boundaries

**Implementation Pattern:**
```tsx
// Before (Enum)
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

// After (String Union + Const Object)
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

// Both work identically in consumer code:
<Button variant={ButtonVariant.Primary} />
<Button variant="primary" />
```

**Migration Enablement:**
- Phase 1: New components can use string unions immediately
- Phase 2: Migrate existing components incrementally (backwards compatible)
- Consumers: Can migrate at their own pace (no breaking change)

**Related:** [Issue #904](https://github.com/MetaMask/metamask-design-system/issues/904), [PR #39810](https://github.com/MetaMask/metamask-extension/pull/39810)

### ADR-0004: Centralized Types Architecture

**GitHub:** [MetaMask/decisions#128](https://github.com/MetaMask/decisions/pull/128)

**Problem:** Duplicated type definitions (~1,800 lines) violate core principle of cross-platform consistency.

**Current State:**
```
packages/design-system-react/src/types/index.ts         (~900 lines)
packages/design-system-react-native/src/types/index.ts  (~900 lines)
packages/design-system-shared/src/                      (0 component types)
```

**Solution:** Centralize shared types in `@metamask/design-system-shared` package.

**Benefits:**
- **Guarantees Consistency:** Single source of truth for shared types
- **Reduces Duplication:** ~900 lines consolidated
- **Simplifies Maintenance:** Changes only need to be made once
- **Enables Code Sharing:** Shared utilities can use shared types

**Implementation Pattern:**
```typescript
// @metamask/design-system-shared/src/types/button.ts
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
} as const;

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

// @metamask/design-system-react/src/types/index.ts
export { ButtonVariant } from '@metamask/design-system-shared';
export type { ButtonVariant as ButtonVariantType } from '@metamask/design-system-shared';

// @metamask/design-system-react-native/src/types/index.ts
export { ButtonVariant } from '@metamask/design-system-shared';
export type { ButtonVariant as ButtonVariantType } from '@metamask/design-system-shared';
```

**Backwards Compatibility:**
- Platform packages re-export shared types
- Consumer imports continue to work unchanged
- No breaking changes required

**Migration Enablement:**
- Phase 1: Continue using duplicated types (acceptable temporarily)
- Phase 2: Migrate types to `design-system-shared` incrementally
- Consumers: No changes required (re-exports maintain compatibility)

**Related:** [Issue #123](https://github.com/MetaMask/decisions/issues/123)

### Combined Impact

**These ADRs enable the speed-first strategy by:**

1. **Removing Type Coupling Blockers:** String unions don't break consumer code during migration
2. **Providing Phase 2 Roadmap:** Clear path to consolidate types after migration
3. **Maintaining Backwards Compatibility:** Consumers can migrate at their own pace
4. **Enabling Incremental Refactoring:** Can align types one component at a time

**Without these ADRs:**
- Every migrated component would break consumer imports (enum incompatibility)
- Phase 2 alignment would require simultaneous consumer updates (coordination nightmare)
- Type consolidation would require breaking changes (violates speed-first principle)

---

## Migration Phases

### Phase 1: Rapid Migration (6 months)

**Objective:** Move all extension and mobile components into MMDS monorepo.

**Acceptance Criteria:**
- All ~47 extension components migrated to `@metamask/design-system-react`
- All ~48 mobile main components migrated to `@metamask/design-system-react-native`
- Mobile temp components reviewed and migrated or archived
- All tests passing in new locations
- All Storybook stories functional
- Consumer imports updated to use MMDS packages
- Legacy component files removed from extension/mobile repos

**Migration Process Per Component:**

1. **Identify Component**
   - Check if component already exists in MMDS (deduplicate)
   - Review component usage in source repository
   - Identify dependencies and related utilities

2. **Migrate Files**
   - Copy component implementation to MMDS package
   - Copy tests (adapt to MMDS testing patterns)
   - Copy/create Storybook stories (adapt to MMDS structure)
   - Copy/create README (adapt to MMDS documentation standards)

3. **Update Component**
   - Ensure component follows MMDS structural patterns
   - Update imports to use MMDS packages where dependencies exist
   - Add exports to package `index.ts`
   - Verify tests pass

4. **Document Known Issues**
   - Document API differences from other platform (if applicable)
   - Add notes to README about planned alignment (Phase 2)
   - Update migration tracker

5. **Update Consumers**
   - Create PR in extension/mobile to update imports
   - Test functionality in consumer context
   - Merge consumer PR after MMDS release

6. **Clean Up**
   - Remove legacy component files from source repository
   - Update source repository documentation

**Tooling & Automation:**
- Migration tracker spreadsheet (already exists)
- Scripts for bulk import updates (planned)
- Automated testing in MMDS CI/CD
- Storybook build validation

**Checkpoints:**
- **Month 2:** 25% of components migrated (~32 components)
- **Month 4:** 50% of components migrated (~63 components)
- **Month 6:** 100% of components migrated (~126 components)

### Phase 2: Polish & Alignment (6-12 months)

**Objective:** Restore cross-platform consistency and implement architectural improvements.

**Sub-Phases:**

#### 2a. Type Consolidation (Implements ADR-0004)

**Goal:** Move shared types to `@metamask/design-system-shared`.

**Process:**
1. Identify truly shared types (same across React/React Native)
2. Move shared types to `design-system-shared/src/types/`
3. Update platform packages to re-export from shared
4. Verify consumer imports still work (backwards compatible)

**Example:**
```typescript
// Before
packages/design-system-react/src/types/index.ts         (ButtonVariant defined)
packages/design-system-react-native/src/types/index.ts  (ButtonVariant defined)

// After
packages/design-system-shared/src/types/button.ts       (ButtonVariant defined)
packages/design-system-react/src/types/index.ts         (export { ButtonVariant } from '@metamask/design-system-shared')
packages/design-system-react-native/src/types/index.ts  (export { ButtonVariant } from '@metamask/design-system-shared')
```

#### 2b. Enum to String Union Migration (Implements ADR-0003)

**Goal:** Migrate existing enum-based components to string unions.

**Process:**
1. Identify components using enum props
2. Migrate enum to string union + const object pattern
3. Add deprecation warnings to old enum imports (if needed)
4. Update component documentation with new pattern

**Backwards Compatibility:**
```tsx
// Old code continues to work
<Button variant={ButtonVariant.Primary} />

// New code also works
<Button variant="primary" />
```

#### 2c. Cross-Platform API Alignment

**Goal:** Align component APIs across React and React Native.

**Process:**
1. **Audit:** Compare component APIs across platforms
2. **Propose:** Design unified API (consider both platform constraints)
3. **Deprecate:** Mark old APIs as deprecated with migration guide
4. **Migrate:** Provide codemods or manual migration instructions
5. **Remove:** After deprecation period, remove old APIs

**Example Timeline:**
- **Version N:** Add unified API, deprecate old API (both work)
- **Version N+1:** Remove old API (breaking change)

**Prioritization:**
- High-usage components first (Button, Text, Box, Avatar, etc.)
- Low-usage components later or on-demand
- Platform-specific components may remain divergent (acceptable)

#### 2d. Figma Alignment

**Goal:** Ensure Figma components match MMDS APIs and provide Code Connect.

**Process:**
1. Audit Figma component properties vs. MMDS props
2. Align property names and values
3. Update/create Code Connect files (`.figma.tsx`)
4. Verify correct code snippets in Figma Dev Mode

**Cross-Reference:** See `.cursor/rules/figma-integration.md` for implementation details.

#### 2e. Documentation Standardization

**Goal:** Ensure all components have comprehensive, consistent documentation.

**Process:**
1. Audit existing READMEs against templates
2. Update READMEs to follow standards
3. Ensure cross-platform documentation is parallel
4. Add examples and usage guidance

**Cross-Reference:** See `.cursor/rules/component-documentation.md` for standards.

---

## Breaking Changes Strategy

### Phase 1: Minimal Breaking Changes

**Goal:** Minimize disruption to extension and mobile during migration.

**Acceptable Changes:**
- Import path changes (old location → MMDS package)
  ```tsx
  // Before
  import { Button } from 'ui/components/component-library/button';

  // After
  import { Button } from '@metamask/design-system-react';
  ```

**Unacceptable Changes (Deferred to Phase 2):**
- Component API changes (prop renames, new required props)
- Behavior changes (styling, functionality)
- Type changes that break consumer code

**Migration Support:**
- Provide import mapping documentation
- Automated import updates via scripts (where possible)
- Gradual migration allowed (extension and mobile can migrate components independently)

### Phase 2: Consolidated Breaking Changes

**Goal:** Align APIs, consolidate types, and restore consistency.

**Breaking Change Categories:**

#### 1. Enum to String Union (ADR-0003)

**Change:**
```tsx
// Old (Enum)
export enum ButtonVariant {
  Primary = 'primary',
}

// New (String Union)
export const ButtonVariant = {
  Primary: 'primary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];
```

**Consumer Impact:** ✅ **Zero** (backwards compatible)

#### 2. Type Centralization (ADR-0004)

**Change:**
```tsx
// Old
import { ButtonVariant } from '@metamask/design-system-react';

// New (same, but now re-exported from shared)
import { ButtonVariant } from '@metamask/design-system-react';
// Internally: export { ButtonVariant } from '@metamask/design-system-shared';
```

**Consumer Impact:** ✅ **Zero** (backwards compatible via re-exports)

#### 3. API Alignment

**Change:**
```tsx
// React (before)
<Button variant="primary" size="md" />

// React Native (before, different API)
<Button variant={ButtonVariant.Primary} size={ButtonSize.Md} />

// After Phase 2 alignment (unified API)
<Button variant="primary" size="md" /> // Both platforms
```

**Consumer Impact:** ⚠️ **Breaking** (requires consumer updates)

**Mitigation:**
- Deprecation warnings in Version N
- Migration guide with examples
- Codemod for mechanical changes
- Breaking change in Version N+1 (follows semver)

### Deprecation Cycle

**Standard Process:**
1. **Version N (Deprecation):**
   - Add new API
   - Mark old API as `@deprecated` in JSDoc
   - TypeScript shows warnings in consumer IDEs
   - Runtime warnings in development mode
   - Documentation updated with migration guide

2. **Version N (Support Period):**
   - Both old and new APIs work (minimum 3 months)
   - Give consumers time to migrate
   - Track usage via telemetry (if available)

3. **Version N+1 (Removal):**
   - Remove old API (breaking change)
   - Major version bump (semver)
   - Clear release notes with migration guide
   - Update consumer codebases before release

**Example Deprecation:**
```tsx
/**
 * @deprecated Use `variant` prop instead. Will be removed in v2.0.0.
 *
 * Migration guide: https://github.com/MetaMask/metamask-design-system/docs/migrations/button-variant.md
 */
export type ButtonPrimaryProps = ButtonBaseProps & {
  variant?: 'primary';
};
```

### Version Strategy

**Phase 1 (Migration):**
- Minor version bumps (e.g., 1.x.x → 1.y.x)
- Each component migration is additive (no breaking changes)
- Frequent releases (weekly or bi-weekly)

**Phase 2 (Alignment):**
- **Deprecations:** Minor version bumps (e.g., 1.y.x → 1.z.x)
- **Removals:** Major version bumps (e.g., 1.z.x → 2.0.0)
- Coordinate with extension/mobile release cycles

---

## Success Metrics

### Phase 1 Metrics (Migration)

**Completion Metrics:**
- ✅ **100% component migration** (~126 components in MMDS monorepo)
- ✅ **0 legacy components** remaining in extension/mobile repos
- ✅ **100% test coverage** maintained (all tests passing in new location)
- ✅ **100% Storybook stories** migrated and functional

**Quality Metrics:**
- ✅ **Zero production bugs** introduced by migration
- ✅ **Zero consumer breaking changes** (import paths only)
- ✅ **<1 week** average time from MMDS migration to consumer update

**Process Metrics:**
- ✅ **<3 days** average time to merge component migration PR
- ✅ **<1 week** average time to merge consumer import update PR
- ✅ **100% CI/CD passing** for all migrated components

### Phase 2 Metrics (Alignment)

**Consistency Metrics:**
- ✅ **100% shared types** moved to `design-system-shared`
- ✅ **0 duplicated type definitions** across platform packages
- ✅ **100% cross-platform components** have aligned APIs
- ✅ **100% components** have Figma Code Connect

**Breaking Change Metrics:**
- ✅ **<10 breaking changes** per major version release
- ✅ **100% migration guides** published before breaking change release
- ✅ **>90% consumer adoption** of new APIs before deprecation removal

**Adoption Metrics:**
- ✅ **100% extension components** using MMDS packages
- ✅ **100% mobile components** using MMDS packages
- ✅ **Zero legacy design system code** in consumer repos

### Long-Term Health Metrics

**Maintenance Metrics:**
- ✅ **<1 day** average bug fix time (across all components)
- ✅ **<1 week** average feature request time (minor enhancements)
- ✅ **>95% test coverage** across all MMDS packages

**Developer Experience Metrics:**
- ✅ **>4.0/5.0** developer satisfaction score (quarterly survey)
- ✅ **<30 minutes** average time to find and use component (new developers)
- ✅ **<5 minutes** average time to integrate component (experienced developers)

**Governance Metrics:**
- ✅ **100% components** follow MMDS documentation standards
- ✅ **100% components** follow MMDS testing standards
- ✅ **100% components** follow MMDS accessibility standards
- ✅ **Weekly releases** with clear changelogs

---

## References

### Internal Documentation
- [DSYS-272 Epic](https://consensyssoftware.atlassian.net/browse/DSYS-272) - Migrate Legacy Mobile Components
- [Migration Tracker Spreadsheet](https://docs.google.com/spreadsheets/d/1obwyYd-F84gt6JkxtosE5YnNQ7bksWv7B56YC3CJLfE/edit?gid=1980142657#gid=1980142657)
- [CLAUDE.md](../CLAUDE.md) - Monorepo structure and commands
- [.cursor/rules/styling.md](../.cursor/rules/styling.md) - Component styling patterns
- [.cursor/rules/component-documentation.md](../.cursor/rules/component-documentation.md) - Documentation standards
- [.cursor/rules/figma-integration.md](../.cursor/rules/figma-integration.md) - Figma Code Connect

### Architectural Decisions
- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/pull/128)

### Source Repositories
- [MetaMask Extension Component Library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
- [MetaMask Mobile Component Library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)
- [MMDS Monorepo](https://github.com/MetaMask/metamask-design-system)

### Related Issues
- [#904: Type Exposure / Enum Issues](https://github.com/MetaMask/metamask-design-system/issues/904)
- [#123: Type Architecture Discussion](https://github.com/MetaMask/decisions/issues/123)
- [#39810: MenuItem Migration Example](https://github.com/MetaMask/metamask-extension/pull/39810)

---

## Document Maintenance

**Owner:** Design System Team
**Review Cycle:** Monthly during Phase 1, Quarterly during Phase 2
**Last Review:** 2026-02-19
**Next Review:** 2026-03-19
