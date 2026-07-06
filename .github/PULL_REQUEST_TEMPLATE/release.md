<!--
Release PR Template

Use this template for release PRs by creating your PR with:
https://github.com/MetaMask/metamask-design-system/compare/main...release/VERSION?template=release.md

Or use the default PR template and manually copy this structure.
-->

## Release VERSION

<!--
Brief summary of this release. Example:
"This release includes new components migrated from Extension and Mobile, breaking API improvements to ButtonIcon and Input components, and continued ADR-0003/0004 type migrations."
-->

### 📦 Package Versions

<!-- List all packages being published with their new versions -->

- `@metamask/design-system-shared`: **X.Y.Z**
- `@metamask/design-system-react`: **X.Y.Z**
- `@metamask/design-system-react-native`: **X.Y.Z**

### 🔄 Shared Type Updates (X.Y.Z)

<!-- If design-system-shared is being updated, document the changes -->

#### Component Type Additions (#PR-numbers)

**What Changed:**

<!-- Detailed description of shared type additions/changes -->

- Added `ComponentName` shared types with `ComponentVariant` const object and `ComponentPropsShared`

**Impact:**

<!-- Consumer impact -->

- Enables consistent ComponentName implementations across React and React Native
- Continues ADR-0003/0004 const-object + string-union pattern adoption

### 🌐 React Web Updates (X.Y.Z)

<!-- If design-system-react is being updated, document the changes -->

#### Added

<!-- New features, components, props, exports -->

- Added `ComponentName` component for [purpose] (#PR-number)

#### Changed

<!-- Non-breaking changes and breaking changes -->

- **BREAKING:** [Description of breaking change] (#PR-number)
  - [Details of what changed]
  - Migration: [Brief migration example or link to migration guide]

#### Fixed

<!-- Bug fixes -->

- Fixed [issue description] (#PR-number)

### 📱 React Native Updates (X.Y.Z)

<!-- If design-system-react-native is being updated, document the changes -->

#### Added

<!-- New features, components, props, exports -->

- Added `ComponentName` component for [purpose] (#PR-number)

#### Changed

<!-- Non-breaking changes and breaking changes -->

- **BREAKING:** [Description of breaking change] (#PR-number)
  - [Details of what changed]
  - Migration: [Brief migration example or link to migration guide]

#### Fixed

<!-- Bug fixes -->

- Fixed [issue description] (#PR-number)

### ⚠️ Breaking Changes

<!--
If this release contains breaking changes, document them here with migration examples.
Each breaking change should include:
1. Platform affected (Both Platforms, React Web Only, React Native Only)
2. What changed (old vs new API)
3. Migration example (before/after code)
4. Link to migration guide
-->

#### Breaking Change Name (Platform)

**What Changed:**

- Removed `oldProp` prop
- Added `newProp` prop with new behavior

**Migration:**

```tsx
// Before (X.Y.Z)
<Component oldProp={value} />;

// After (X.Y.Z)
import {
  Component,
  NewEnum,
} from '@metamask/design-system-[react|react-native]';
<Component newProp={NewEnum.Value} />;
```

**Impact:**

- Affects all Component usage with `oldProp`
- [Additional impact details]

See migration guides for complete instructions:

- [React Migration Guide](./packages/design-system-react/MIGRATION.md#from-version-xyz-to-abc)
- [React Native Migration Guide](./packages/design-system-react-native/MIGRATION.md#from-version-xyz-to-abc)

### ✅ Checklist

<!-- Verify all items before requesting review -->

- [ ] Changelogs updated with human-readable descriptions
- [ ] Changelog validation passed (`yarn changelog:validate`)
- [ ] Version bumps follow semantic versioning
  - [ ] design-system-shared: [major|minor|patch] (X.Y.Z → X.Y.Z) - [reason]
  - [ ] design-system-react: [major|minor|patch] (X.Y.Z → X.Y.Z) - [reason]
  - [ ] design-system-react-native: [major|minor|patch] (X.Y.Z → X.Y.Z) - [reason]
- [ ] Breaking changes documented with migration guidance
- [ ] Migration guides updated with before/after examples (if breaking changes)
- [ ] PR references included in changelog entries

## **Pre-merge author checklist**

- [ ] I've followed [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs)
- [ ] I've reviewed the [Release Workflow](./.cursor/rules/release-workflow.md) cursor rule
- [ ] All tests pass (`yarn build && yarn test && yarn lint`)
- [ ] Changelog validation passes (`yarn changelog:validate`)

## **Pre-merge reviewer checklist**

- [ ] I've reviewed the [Reviewing Release PRs](./docs/reviewing-release-prs.md) guide
- [ ] Package versions follow semantic versioning
- [ ] Changelog entries are consumer-facing (not commit message regurgitation)
- [ ] Breaking changes are documented in MIGRATION.md with examples
- [ ] All unreleased changes are accounted for in changelogs
