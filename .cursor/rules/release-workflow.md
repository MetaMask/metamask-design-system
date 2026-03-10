# Release Workflow

Guide for creating and reviewing releases in the MetaMask Design System monorepo.

## Purpose

AI-first workflow for creating release PRs with proper version bumps, changelogs, and breaking change documentation.

**For detailed reviewer guidance:** @docs/reviewing-release-prs.md

## Critical Rules

### Release Strategy

- ✅ **Release often** for non-breaking changes
- ✅ **Isolate large breaking changes** to single releases (design tokens, major component API changes)
- ✅ **Use `yarn create-release-branch`** (documented in @docs/contributing.md)
- ✅ **Run `yarn constraints --fix && yarn && yarn dedupe`** after release spec
- ❌ **NO manual peer dependency updates** - handled automatically by yarn workspaces (causes errors)

### Changelog Quality

- ❌ **NO commit message regurgitation**
- ❌ **NO dev dependencies or developer-only changes** - consumers don't care about internal tooling
- ✅ **Consumer-facing only** - API changes (props, methods, exports, runtime deps)
- ✅ **Include PR references** `([#123](...))`
- ✅ **Link to MIGRATION.md** for breaking changes

### MIGRATION.md Documentation

- ✅ **Update for ANY breaking change** - prop renames, removals, type changes, behavior changes
- ✅ **Update BOTH platforms** if change affects both
- ✅ **Realistic examples** - not "foo", "example", or "0x123"
- ✅ **Update table of contents**
- ✅ **Show exact imports** needed

## Workflow Steps

### Step 1: Create Release Branch

```bash
yarn create-release-branch
```

Creates `release/<version>` branch and generates release spec YAML.

### Step 2: Edit Release Spec

1. Review/edit release spec for package versions
2. Verify version bumps follow semver (pre-1.0: minor can include breaking changes)
3. Save and close to proceed
4. Run dependency updates:

```bash
yarn constraints --fix && yarn && yarn dedupe
```

**CRITICAL:** Do NOT manually update peer dependencies - yarn workspaces handles this automatically. Manual updates cause build errors.

### Step 3: Update Changelogs

Transform auto-generated entries into consumer-facing descriptions.

**Remove:**

- Dev dependencies (prettier, eslint, typescript)
- Internal tooling changes
- Contributor-only documentation

**Keep:**

- API changes (props, methods, exports)
- Behavior changes
- Runtime dependency additions/upgrades
- Breaking changes

**Example:**

```markdown
### Changed

- **BREAKING:** Updated `ButtonIcon` to use `variant` prop instead of `isInverse` and `isFloating` ([#948](...))
  - Removed `isInverse` and `isFloating` props
  - Added `variant` prop: `Default`, `Filled`, `Floating`
  - See [Migration Guide](./MIGRATION.md#from-version-0100-to-0110)
```

### Step 4: Update MIGRATION.md (Breaking Changes Only)

**When to update:**

- Prop renamed/removed/type changed
- Required prop added
- Export removed/renamed
- TypeScript types narrowed
- Surprising behavior changes

**Structure:**

```markdown
## From version 0.X.0 to 0.Y.0

### Component Name Breaking Change

**What Changed:**

- Old vs new API
- Rationale

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
- What breaks
```

**Update table of contents:**

```markdown
## Table of Contents

- [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
```

### Step 5: Create Pull Request

Use release PR template: `?template=release.md` or copy from @.github/PULL_REQUEST_TEMPLATE/release.md

### Step 6: Verify

```bash
yarn changelog:validate
yarn build && yarn test && yarn lint
```

## Verification Checklist

- [ ] Version bumps follow semver (pre-1.0: minor = breaking allowed)
- [ ] Changelogs: consumer-facing, no dev deps, PR references included
- [ ] Breaking changes documented in MIGRATION.md (both platforms if applicable)
- [ ] MIGRATION.md table of contents updated
- [ ] Realistic examples (not placeholders)
- [ ] `yarn changelog:validate` passes
- [ ] `yarn build && yarn test && yarn lint` passes

## Anti-Patterns

### ❌ Dev Dependencies in Changelogs

```markdown
# ❌ Wrong - Internal tooling

- Updated prettier from 3.0.0 to 3.1.0
- Bumped @typescript-eslint/parser

# ✅ Correct - Consumer-facing only

- Added `ButtonFilter` component ([#964](...))
- Fixed `Input` iOS placeholder alignment ([#960](...))
```

### ❌ Manual Peer Dependency Updates

```bash
# ❌ Wrong - Causes build errors
# Manually editing package.json peerDependencies

# ✅ Correct - Automatic via yarn workspaces
yarn constraints --fix && yarn && yarn dedupe
```

### ❌ Placeholder Examples in MIGRATION.md

```tsx
// ❌ Wrong
<AvatarAccount address="0x123" />

// ✅ Correct
<AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
```

### ❌ Breaking Changes Without Migration Docs

```markdown
# ❌ Wrong - Changelog only

- **BREAKING:** Renamed `disabled` to `isDisabled`

# ✅ Correct - Also in MIGRATION.md with examples

- **BREAKING:** Renamed `disabled` to `isDisabled` ([#123](...))
  - See [Migration Guide](./MIGRATION.md#from-version-010-to-020)
```

## Commands

```bash
yarn create-release-branch        # Create release
yarn constraints --fix && yarn && yarn dedupe  # Update dependencies
yarn changelog:validate            # Validate format
yarn build && yarn test && yarn lint  # Verify release
```

## Version Bump Guide

**Semantic Versioning (Pre-1.0):**

- **Major (X.0.0)**: Breaking changes (post-1.0 only)
- **Minor (0.X.0)**: New features, breaking changes (pre-1.0), API additions
- **Patch (0.0.X)**: Bug fixes, internal improvements

Pre-1.0 packages: Minor versions MAY contain breaking changes.

## Golden Path Examples

**Complete release:** PR #972 (breaking changes, migration docs, changelog format)

**Changelogs:**

- @packages/design-system-react/CHANGELOG.md
- @packages/design-system-react-native/CHANGELOG.md
- @packages/design-system-shared/CHANGELOG.md

**Migration docs:**

- @packages/design-tokens/MIGRATION.md
- @packages/design-system-react/MIGRATION.md
- @packages/design-system-react-native/MIGRATION.md

**PR template:** @.github/PULL_REQUEST_TEMPLATE/release.md

## References

- @docs/reviewing-release-prs.md - Detailed reviewer guide
- @docs/contributing.md#releasing - Release process
- @.cursor/rules/component-migration.md - References MIGRATION.md patterns
- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
