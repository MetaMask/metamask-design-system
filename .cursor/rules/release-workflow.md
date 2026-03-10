# Release Workflow

Guide for creating and reviewing releases in the MetaMask Design System monorepo.

## Purpose

This rule provides AI-first guidance for:

- Creating release PRs with proper version bumps and changelogs
- Documenting breaking changes in MIGRATION.md files
- Verifying release quality before merge

**For human reviewer guidance**, see @docs/reviewing-release-prs.md

## When to Create a Release

Create a release when:

- ✅ Unreleased changes have accumulated (10+ PRs or significant features)
- ✅ Breaking changes need to be published
- ✅ Security patches need distribution
- ✅ Major features are complete and tested

**Version bump criteria (Semantic Versioning):**

- **Major (X.0.0)**: Breaking changes (post-1.0 only)
- **Minor (0.X.0)**: New features, breaking changes (pre-1.0), or non-breaking API additions
- **Patch (0.0.X)**: Bug fixes and internal improvements

**Pre-1.0 convention**: Minor versions MAY contain breaking changes. This monorepo follows pre-1.0 semver where minor bumps (0.X.0) can include breaking changes.

## Release Creation Workflow

### Step 1: Create Release Branch

**CRITICAL:** Use `npx` directly - there is NO `yarn create-release-branch` script:

```bash
# ✅ Correct - Use npx
npx @metamask/create-release-branch

# ❌ Wrong - This script doesn't exist
yarn create-release-branch
```

The tool will:

1. Prompt for release type (ordinary/backport)
2. Create `release/<version>` branch
3. Generate release spec YAML for package selection
4. Auto-update changelogs with unreleased entries
5. Bump package versions

### Step 2: Edit Release Spec

Review and edit the generated release spec YAML:

```yaml
packages:
  '@metamask/design-system-react':
    newVersion: 0.11.0
    changelog:
      - Added new components
      - Fixed accessibility issues
  '@metamask/design-system-react-native':
    newVersion: 0.11.0
```

Verify:

- [ ] All packages that need updates are included
- [ ] Version bumps follow semver (breaking = major/minor, additions = minor, fixes = patch)
- [ ] No packages are accidentally included

### Step 3: Update Dependencies

After release spec, run dependency management:

```bash
yarn constraints --fix && yarn && yarn dedupe
```

This ensures workspace dependencies are correctly updated.

### Step 4: Update Changelogs

Review and enhance auto-generated changelog entries. Follow Keep a Changelog format.

#### Changelog Quality Standards

**Critical rules:**

- ❌ **NO commit message regurgitation** - "Fixed button bug" is insufficient
- ✅ **Consumer-facing descriptions** - What API changed, not how code changed
- ✅ **Specific interface details** - List classes, methods, props, types affected
- ✅ **Include PR references** - `([#123](https://github.com/MetaMask/metamask-design-system/pull/123))`
- ✅ **Breaking changes explain migration** - How consumers adapt to changes

**Categories:**

```markdown
## [0.11.0]

### Added

- New features, components, props, exports

### Changed

- **BREAKING:** API changes requiring consumer updates
- Non-breaking behavior modifications

### Fixed

- Bug fixes and corrections
```

**Example of good changelog entry:**

```markdown
### Changed

- **BREAKING:** Updated `ButtonIcon` API to use `variant` prop instead of `isInverse` and `isFloating` boolean props ([#948](https://github.com/MetaMask/metamask-design-system/pull/948))
  - Removed `isInverse` and `isFloating` props
  - Added `variant` prop with three options: `ButtonIconVariant.Default` (default), `ButtonIconVariant.Filled` (new muted background with rounded corners), and `ButtonIconVariant.Floating` (replaces `isFloating` behavior)
  - Migration: Replace `isFloating={true}` with `variant={ButtonIconVariant.Floating}`, and use `variant={ButtonIconVariant.Default}` for standard transparent background
  - See [Migration Guide](./MIGRATION.md#from-version-0100-to-0110) for complete migration instructions
```

**Golden path reference:** @packages/design-system-react/CHANGELOG.md, @packages/design-system-react-native/CHANGELOG.md

### Step 5: Update MIGRATION.md for Breaking Changes

**CRITICAL:** Any breaking change MUST be documented in platform MIGRATION.md files.

#### When to Update MIGRATION.md

Update MIGRATION.md when:

- ✅ Prop is renamed, removed, or type changes
- ✅ Component behavior changes in surprising way
- ✅ Required prop is added
- ✅ Function signature changes
- ✅ Export is removed or renamed
- ✅ TypeScript types are narrowed or changed
- ✅ Minimum Node version is bumped

Update BOTH platforms if change affects both:

- ✅ `packages/design-system-react/MIGRATION.md`
- ✅ `packages/design-system-react-native/MIGRATION.md`

#### MIGRATION.md Structure Pattern

**Add new version section at the top:**

```markdown
## From version 0.10.0 to 0.11.0

### Component Name Breaking Change

**What Changed:**

- Describe the old behavior/API
- Describe the new behavior/API
- Why the change was made (rationale)

**Migration:**

\`\`\`tsx
// Before (0.10.0)
<Component oldProp={value} deprecatedBehavior />

// After (0.11.0)
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

#### MIGRATION.md Critical Rules

- ❌ **NO breaking changes without migration docs**
- ✅ **Include realistic before/after code examples** (not "foo", "example", "test")
- ✅ **Show exact imports needed** (component + enums)
- ✅ **Update table of contents** with new section link
- ✅ **Document WHY change was made** (helps adoption)
- ✅ **Show all prop/API changes** in examples
- ✅ **Use actual addresses/values** in examples (e.g., real Ethereum addresses for AvatarAccount)

#### MIGRATION.md Examples

**Good ButtonIcon migration example:**

```markdown
## From version 0.10.0 to 0.11.0

### ButtonIcon Variant Prop

**What Changed:**

- Removed `isInverse` and `isFloating` boolean props
- Added `variant` prop with three options:
  - `ButtonIconVariant.Default` (transparent background - default)
  - `ButtonIconVariant.Filled` (muted background with rounded corners - new)
  - `ButtonIconVariant.Floating` (colored background with inverse icon - replaces `isFloating`)

**Migration:**

\`\`\`tsx
// Before (0.10.0)
import { ButtonIcon, IconName } from '@metamask/design-system-react';

<ButtonIcon name={IconName.Add} />
<ButtonIcon name={IconName.Add} isFloating />

// After (0.11.0)
import { ButtonIcon, ButtonIconVariant, IconName } from '@metamask/design-system-react';

<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Default} />
// or omit variant prop as Default is the default value
<ButtonIcon name={IconName.Add} />

<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Floating} />

// New filled variant option
<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Filled} />
\`\`\`

**Impact:**

- Affects all ButtonIcon usage with `isFloating` prop
- Default behavior unchanged (no migration needed for basic usage)
```

**Good Input controlled-only migration example:**

```markdown
### Input Controlled-Only Requirement

**What Changed:**

- Removed `defaultValue` prop
- `value` prop is now required
- All Input instances must be controlled with state management

**Migration:**

\`\`\`tsx
// Before (0.10.0)
<Input placeholder="Enter text" defaultValue="Initial" onChange={handleChange} />

// After (0.11.0)
import { useState } from 'react';

const [text, setText] = useState('Initial');
<Input placeholder="Enter text" value={text} onChange={setText} />
\`\`\`

**Why This Change?**

This change provides:

- **Consistent behavior**: All Input instances now behave predictably as controlled components
- **Better state management**: Forces explicit state management, reducing bugs from mixed controlled/uncontrolled usage
- **iOS placeholder fix**: Enables proper iOS-specific placeholder alignment without affecting typed text rendering

**Impact:**

- Affects all Input and TextField usage
- Requires adding state management (useState) for all inputs
```

**Golden path reference:** @packages/design-system-react/MIGRATION.md, @packages/design-system-react-native/MIGRATION.md

### Step 6: Create Pull Request

Create PR with title: `Release <version>`

**Use the release PR template:**

When creating the PR on GitHub, use the release template by appending `?template=release.md` to the compare URL:

```
https://github.com/MetaMask/metamask-design-system/compare/main...release/VERSION?template=release.md
```

Or manually copy the template from @.github/PULL_REQUEST_TEMPLATE/release.md

**PR description structure** (from template, based on PR #972):

```markdown
## Release <version>

This release includes [summary of major changes].

### 📦 Package Versions

- `@metamask/design-system-shared`: **X.Y.Z**
- `@metamask/design-system-react`: **X.Y.Z**
- `@metamask/design-system-react-native`: **X.Y.Z**

### 🔄 Shared Type Updates (X.Y.Z)

#### Component Type Additions (#PRs)

**What Changed:**

- [Detailed description]

**Impact:**

- [Consumer impact]

### 🌐 React Web Updates (X.Y.Z)

#### Added

- [New features with PR links]

#### Changed

- [Changes with PR links]
- **BREAKING:** [Breaking changes with migration snippets]

#### Fixed

- [Bug fixes with PR links]

### 📱 React Native Updates (X.Y.Z)

#### Added

- [New features with PR links]

#### Changed

- [Changes with PR links]
- **BREAKING:** [Breaking changes with migration snippets]

#### Fixed

- [Bug fixes with PR links]

### ⚠️ Breaking Changes

#### Breaking Change Name (Platform)

**What Changed:**

- [Description]

**Migration:**
\`\`\`tsx
// Before
<OldAPI />

// After
<NewAPI />
\`\`\`

See migration guides for complete instructions:

- [React Migration Guide](./packages/design-system-react/MIGRATION.md#from-version-xyz-to-abc)
- [React Native Migration Guide](./packages/design-system-react-native/MIGRATION.md#from-version-xyz-to-abc)

### ✅ Checklist

- [x] Changelogs updated with human-readable descriptions
- [x] Changelog validation passed (`yarn changelog:validate`)
- [x] Version bumps follow semantic versioning
- [x] Breaking changes documented with migration guidance
- [x] Migration guides updated with before/after examples
- [x] PR references included in changelog entries
```

**Golden path reference:** PR #972

### Step 7: Verify Release Quality

Before requesting review, verify:

```bash
# Validate changelog format
yarn changelog:validate

# Run all checks
yarn build
yarn test
yarn lint
```

All must pass without errors.

## Verification Checklist

Before requesting review, confirm:

### Version Bumps

- [ ] All packages that need updates are included
- [ ] Version bumps follow semver correctly
- [ ] Pre-1.0 convention followed (minor = breaking allowed)
- [ ] Root package.json version matches release

### Changelogs

- [ ] Follow Keep a Changelog format (Added, Changed, Fixed)
- [ ] Entries are consumer-facing (API changes, not implementation)
- [ ] Breaking changes clearly marked with "**BREAKING:**"
- [ ] All entries include PR references `([#123](...)`
- [ ] No commit message regurgitation
- [ ] `yarn changelog:validate` passes

### MIGRATION.md (if breaking changes)

- [ ] Breaking changes documented in platform MIGRATION.md files
- [ ] Table of contents updated with new section links
- [ ] Migration examples are realistic (not placeholders)
- [ ] Before/after code examples show exact imports and usage
- [ ] Impact and rationale explained
- [ ] Both platforms updated if change affects both

### Pull Request

- [ ] PR title: "Release \<version>"
- [ ] PR description follows template (package versions, categorized changes, breaking changes, checklist)
- [ ] Breaking changes section includes migration snippets
- [ ] Links to migration guides included

### Build Quality

- [ ] `yarn build` passes
- [ ] `yarn test` passes
- [ ] `yarn lint` passes
- [ ] No TypeScript errors

## Anti-Patterns

### ❌ Using Non-Existent Yarn Script

```bash
# ❌ Wrong - This script doesn't exist
yarn create-release-branch

# ✅ Correct
npx @metamask/create-release-branch
```

### ❌ Commit Message Regurgitation in Changelogs

```markdown
# ❌ Wrong - Not consumer-facing

- Fixed button component issue

# ✅ Correct - API-specific

- Fixed `Button` component `isDisabled` prop not applying `aria-disabled` attribute correctly ([#123](https://...))
```

### ❌ Breaking Changes Without Migration Docs

```markdown
# ❌ Wrong - Breaking change in changelog only

### Changed

- **BREAKING:** Renamed `disabled` prop to `isDisabled`

# ✅ Correct - Also in MIGRATION.md with examples

### Changed

- **BREAKING:** Renamed `disabled` prop to `isDisabled` ([#123](...))
  - See [Migration Guide](./MIGRATION.md#from-version-010-to-020)
```

### ❌ Placeholder Examples in Migration Docs

```tsx
// ❌ Wrong - Placeholder values
<AvatarAccount address="0x123" />
<Button onClick={() => console.log('example')} />

// ✅ Correct - Realistic values
<AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
<Button onClick={handleSubmit}>Submit</Button>
```

### ❌ Forgetting Table of Contents

```markdown
# ❌ Wrong - New section not in TOC

## Table of Contents

- [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## From version 0.10.0 to 0.11.0

[Breaking change docs...]

# ✅ Correct - TOC updated

## Table of Contents

- [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
- [From version 0.1.0 to 0.2.0](#from-version-010-to-020)
```

### ❌ Skipping Dependency Updates

```bash
# ❌ Wrong - Not updating workspace dependencies
npx @metamask/create-release-branch
# ... edit release spec ...
git commit && git push

# ✅ Correct - Run constraints and dedupe
npx @metamask/create-release-branch
# ... edit release spec ...
yarn constraints --fix && yarn && yarn dedupe
git commit && git push
```

## Commands Reference

```bash
# Create release branch
npx @metamask/create-release-branch

# Update workspace dependencies
yarn constraints --fix
yarn
yarn dedupe

# Validate changelog format
yarn changelog:validate

# Verify release quality
yarn build
yarn test
yarn lint

# View changes since last release (helpful for changelog review)
./scripts/since-latest-release.sh @metamask/design-system-react
```

## Golden Path Examples

**Complete release examples:**

- PR #972 - Release 25.0.0 (comprehensive release with breaking changes, migration docs, proper changelog format)

**Changelog examples:**

- @packages/design-system-react/CHANGELOG.md - Keep a Changelog format, consumer-facing descriptions
- @packages/design-system-react-native/CHANGELOG.md - Breaking changes with migration links
- @packages/design-system-shared/CHANGELOG.md - Shared type documentation

**Migration documentation examples:**

- @packages/design-system-react/MIGRATION.md - ButtonIcon variant prop migration
- @packages/design-system-react-native/MIGRATION.md - Input controlled-only migration with rationale

## References

### Documentation

- @docs/reviewing-release-prs.md - Detailed reviewer guide (human-focused)
- @docs/contributing.md#releasing - High-level release process
- [Keep a Changelog](https://keepachangelog.com/) - Changelog format specification
- [Semantic Versioning](https://semver.org/) - Version bump rules

### Related Cursor Rules

- @.cursor/rules/component-migration.md - Component migration from Extension/Mobile
- @.cursor/rules/testing.md - Test requirements before release
- @.cursor/rules/styling.md - Design token usage

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
