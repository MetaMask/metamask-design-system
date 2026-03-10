# Release Workflow

Guide for creating and reviewing releases in the MetaMask Design System monorepo.

## Purpose

AI-first workflow for creating release PRs with proper version bumps, changelogs, and breaking change documentation.

**For detailed reviewer guidance:** @docs/reviewing-release-prs.md

## Critical Rules

### Release Creation

- ✅ **Use `npx @metamask/create-release-branch`** - there is NO yarn script
- ✅ **Run `yarn constraints --fix && yarn && yarn dedupe`** after release spec
- ✅ **Follow Keep a Changelog format** - consumer-facing descriptions, not commit messages
- ❌ **NO breaking changes without MIGRATION.md updates** - both platforms if applicable
- ✅ **Use release PR template** - `?template=release.md` or copy from @.github/PULL_REQUEST_TEMPLATE/release.md

### Changelog Quality

- ❌ **NO commit message regurgitation** - "Fixed button bug" is insufficient
- ✅ **Consumer-facing descriptions** - What API changed (props, methods, exports)
- ✅ **Include PR references** - `([#123](https://github.com/...))`
- ✅ **Breaking changes explain migration** - Link to MIGRATION.md

### MIGRATION.md Documentation (Critical Gap)

- ✅ **Update for ANY breaking change** - prop renames, removals, type changes, behavior changes
- ✅ **Update BOTH platforms** if change affects both
- ✅ **Include realistic before/after examples** - not "foo", "example", or "test"
- ✅ **Update table of contents** with new section link
- ❌ **NO placeholder values** - use real addresses, actual prop values

## Workflow Steps

### Step 1: Create Release Branch

```bash
# ✅ Correct - Use npx (NO yarn script exists)
npx @metamask/create-release-branch

# ❌ Wrong - This doesn't exist
yarn create-release-branch
```

The tool creates `release/<version>` branch and generates release spec YAML.

### Step 2: Edit Release Spec & Update Dependencies

1. Review/edit release spec YAML for package versions
2. Verify version bumps follow semver (pre-1.0: minor can include breaking changes)
3. Run dependency updates:

```bash
yarn constraints --fix && yarn && yarn dedupe
```

### Step 3: Update Changelogs

Transform auto-generated entries into consumer-facing descriptions:

**Categories:** Added, Changed, Fixed

**Good changelog entry example:**

```markdown
### Changed

- **BREAKING:** Updated `ButtonIcon` API to use `variant` prop instead of `isInverse` and `isFloating` boolean props ([#948](...))
  - Removed `isInverse` and `isFloating` props
  - Added `variant` prop with three options: `ButtonIconVariant.Default`, `ButtonIconVariant.Filled`, `ButtonIconVariant.Floating`
  - See [Migration Guide](./MIGRATION.md#from-version-0100-to-0110)
```

**Golden path:** @packages/design-system-react/CHANGELOG.md

### Step 4: Update MIGRATION.md for Breaking Changes

**When to update:**

- Prop renamed, removed, or type changed
- Required prop added
- Function signature changed
- Export removed/renamed
- TypeScript types narrowed
- Component behavior changes (surprising way)

**Structure pattern:**

```markdown
## From version 0.X.0 to 0.Y.0

### Component Name Breaking Change

**What Changed:**

- Old behavior/API description
- New behavior/API description
- Rationale (why the change)

**Migration:**

\`\`\`tsx
// Before (0.X.0)
import { Component } from '@metamask/design-system-react';
<Component oldProp={value} />

// After (0.Y.0)
import { Component, NewEnum } from '@metamask/design-system-react';
<Component newProp={NewEnum.Value} />
\`\`\`

**Impact:**

- Who is affected
- What breaks without migration
```

**Update table of contents:**

```markdown
## Table of Contents

- [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
- [From version 0.1.0 to 0.2.0](#from-version-010-to-020)
```

**Critical MIGRATION.md rules:**

- ✅ Realistic examples (real Ethereum addresses for AvatarAccount, actual values)
- ✅ Show exact imports needed (component + enums)
- ✅ Document WHY change was made
- ✅ Both platforms if change affects both
- ❌ NO placeholders ("foo", "example", "0x123")

**Golden path:** @packages/design-system-react-native/MIGRATION.md (Input controlled-only example with rationale)

### Step 5: Create Pull Request

Use release PR template by appending `?template=release.md` to compare URL:

```
https://github.com/MetaMask/metamask-design-system/compare/main...release/VERSION?template=release.md
```

Or copy from @.github/PULL_REQUEST_TEMPLATE/release.md

**Golden path:** PR #972 (complete release with breaking changes)

### Step 6: Verify Release Quality

```bash
yarn changelog:validate  # Changelog format
yarn build              # Build succeeds
yarn test               # Tests pass
yarn lint               # Lint passes
```

## Verification Checklist

### Version Bumps

- [ ] Version bumps follow semver (pre-1.0: minor = breaking allowed)
- [ ] Root package.json version matches release

### Changelogs

- [ ] Keep a Changelog format (Added, Changed, Fixed)
- [ ] Consumer-facing descriptions (API changes, not implementation)
- [ ] Breaking changes marked "**BREAKING:**"
- [ ] All entries include PR references
- [ ] `yarn changelog:validate` passes

### MIGRATION.md (if breaking changes)

- [ ] Breaking changes documented in platform MIGRATION.md
- [ ] Table of contents updated with new section
- [ ] Realistic before/after examples (not placeholders)
- [ ] Exact imports shown
- [ ] Impact and rationale explained
- [ ] Both platforms updated if applicable

### Build

- [ ] `yarn build && yarn test && yarn lint` passes

## Anti-Patterns

### ❌ Using Non-Existent Yarn Script

```bash
# ❌ Wrong
yarn create-release-branch

# ✅ Correct
npx @metamask/create-release-branch
```

### ❌ Commit Message Regurgitation

```markdown
# ❌ Wrong - Not consumer-facing

- Fixed button component issue

# ✅ Correct - API-specific

- Fixed `Button` `isDisabled` prop not applying `aria-disabled` attribute ([#123](...))
```

### ❌ Breaking Changes Without Migration Docs

```markdown
# ❌ Wrong - Changelog only

### Changed

- **BREAKING:** Renamed `disabled` to `isDisabled`

# ✅ Correct - Also in MIGRATION.md

### Changed

- **BREAKING:** Renamed `disabled` to `isDisabled` ([#123](...))
  - See [Migration Guide](./MIGRATION.md#from-version-010-to-020)
```

### ❌ Placeholder Examples

```tsx
// ❌ Wrong
<AvatarAccount address="0x123" />
<Input placeholder="example" />

// ✅ Correct
<AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
<Input placeholder="Enter wallet name" />
```

### ❌ Forgetting Table of Contents

```markdown
# ❌ Wrong - New section not in TOC

## Table of Contents

- [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## From version 0.10.0 to 0.11.0

...

# ✅ Correct - TOC updated

## Table of Contents

- [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
- [From version 0.1.0 to 0.2.0](#from-version-010-to-020)
```

### ❌ Skipping Dependency Updates

```bash
# ❌ Wrong
npx @metamask/create-release-branch
git commit && git push

# ✅ Correct
npx @metamask/create-release-branch
yarn constraints --fix && yarn && yarn dedupe
git commit && git push
```

## Commands

```bash
# Create release
npx @metamask/create-release-branch

# Update dependencies
yarn constraints --fix && yarn && yarn dedupe

# Validate and verify
yarn changelog:validate
yarn build && yarn test && yarn lint
```

## Version Bump Guide

**Semantic Versioning (Pre-1.0 convention):**

- **Major (X.0.0)**: Breaking changes (post-1.0 only)
- **Minor (0.X.0)**: New features, breaking changes (pre-1.0), API additions
- **Patch (0.0.X)**: Bug fixes, internal improvements

Pre-1.0 packages: Minor versions MAY contain breaking changes.

## Golden Path Examples

**Complete release:**

- PR #972 - Release 25.0.0 (breaking changes, migration docs, proper changelog format)

**Changelogs:**

- @packages/design-system-react/CHANGELOG.md - Keep a Changelog format, consumer-facing
- @packages/design-system-react-native/CHANGELOG.md - Breaking changes with migration links
- @packages/design-system-shared/CHANGELOG.md - Shared type documentation

**Migration docs:**

- @packages/design-system-react/MIGRATION.md - ButtonIcon variant prop migration
- @packages/design-system-react-native/MIGRATION.md - Input controlled-only with rationale

**PR template:**

- @.github/PULL_REQUEST_TEMPLATE/release.md - Standardized release PR structure

## References

### Documentation

- @docs/reviewing-release-prs.md - Detailed reviewer guide (human-focused, comprehensive)
- @docs/contributing.md#releasing - High-level release process
- [Keep a Changelog](https://keepachangelog.com/) - Changelog format specification
- [Semantic Versioning](https://semver.org/) - Version bump rules

### Related Cursor Rules

- @.cursor/rules/component-migration.md - Component migration patterns
- @.cursor/rules/testing.md - Test requirements
- @.cursor/rules/styling.md - Design token usage

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
