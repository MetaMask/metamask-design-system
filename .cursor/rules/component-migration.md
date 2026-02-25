# Component Migration

Guide for migrating components from MetaMask Extension and Mobile component-library folders into the design system monorepo.

## Purpose

**This is the PRIMARY workflow** for bringing components from consumer codebases into the monorepo.

When components exist in:

- Extension: https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library
- Mobile: https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library

They need to be migrated into this monorepo with:

- ✅ Unified cross-platform API
- ✅ ADR-0003/0004 architectural patterns
- ✅ Monorepo design token conventions
- ✅ Storybook documentation for both platforms

## When to Use This Workflow

Use this workflow when:

- ✅ Component exists in extension component-library folder
- ✅ Component exists in mobile component-library folder
- ✅ Component needs to be consolidated into monorepo
- ✅ APIs need to be audited and aligned

**NOT for:**

- Internal monorepo component refactoring → @.cursor/rules/component-enum-union-migration.md
- Brand new components from scratch → @.cursor/rules/component-creation.md

## Migration Workflow

### Phase 1: Audit

#### Step 1: Locate Component in Extension

**Extension component-library location:**
https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library

```bash
# Find the component
# Example: ButtonPrimary
# Location: ui/components/component-library/button-primary/
```

**Document:**

- Component name and location
- File structure (index.tsx, types.ts, etc.)
- Current prop API
- TypeScript types used
- Dependencies
- Storybook stories

#### Step 2: Locate Component in Mobile

**Mobile component-library location:**
https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library

```bash
# Find the component
# Example: ButtonPrimary
# Location: app/component-library/components/Buttons/ButtonPrimary/
```

**Document:**

- Component name and location
- File structure
- Current prop API
- TypeScript types used
- Dependencies
- Storybook stories (if any)

#### Step 3: Compare APIs

Create comparison table:

| Concern        | Extension API        | Mobile API             | Decision                  |
| -------------- | -------------------- | ---------------------- | ------------------------- |
| Prop: variant  | `variant?: string`   | `type?: ButtonType`    | Use `variant`             |
| Prop: size     | `size?: Size`        | Not present            | Add to both               |
| Prop: disabled | `disabled?: boolean` | `isDisabled?: boolean` | Use `isDisabled`          |
| Prop: onPress  | `onClick`            | `onPress`              | Keep both (platform)      |
| Styling        | className            | style object           | Use className/twClassName |

**Key questions to answer:**

1. Which props are truly cross-platform? (status, variant, size, isDisabled)
2. Which props are platform-specific? (onClick/onPress, className/twClassName)
3. Are there naming conflicts? (disabled vs isDisabled)
4. Are there behavioral differences? (document in comments)
5. What's the unified API that serves both platforms?

### Phase 2: API Alignment

#### Step 1: Design Unified API

Based on audit, design the shared API using @.cursor/rules/component-architecture.md decision tree.

**Reference the golden path:** See how BadgeStatus implements the layered architecture:

- @packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts (Shared types)
- @packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts (React extension)
- @packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts (React Native extension)

**Pattern structure:**

**Shared package** (design system concerns only):

- Const objects with derived union types (variant, size, status)
- Shared props type with "Shared" suffix
- Platform-independent properties only
- Use `type` not `interface`

**Platform packages** (platform-specific extensions):

- Re-export all shared types
- Extend with `ComponentProps<'element'>` (React) or `ViewProps`/`PressableProps` (React Native)
- Add `className?: string` (React) or `twClassName?: string` (React Native)
- Event handlers come from base types (onClick/onPress)

#### Step 2: Document Decisions

Create alignment decisions document:

```markdown
## Button Migration Decisions

### Prop Naming

- ✅ Use `isDisabled` (not `disabled`) - aligns with boolean prop conventions
- ✅ Use `variant` (not `type`) - more semantic for visual variants
- ✅ Use `children` for label - standard React pattern

### Platform Differences

- React: onClick from ComponentProps<'button'>
- React Native: onPress from PressableProps
- Styling: className (React) vs twClassName (React Native)

### New Features

- Added `isLoading` state (not in extension/mobile)
- Added `loadingText` for accessible loading state
- Unified icon props: `startIconName` and `endIconName`

### Behavioral Alignment

- Both platforms now support danger variant
- Both platforms support disabled state
- Loading state prevents interaction on both platforms
```

### Phase 3: Creation

Use @.cursor/rules/component-creation.md to scaffold the component:

```bash
# Create component scaffolding for BOTH platforms
yarn create-component:react --name Button --description "Interactive button component"
yarn create-component:react-native --name Button --description "Interactive button component"
```

**Then immediately apply ADR patterns:**

1. **Create shared types** in `packages/design-system-shared/src/types/Button/`
2. **Update platform type files** to re-export and extend shared types
3. **Follow** @.cursor/rules/component-architecture.md for all type patterns

### Phase 4: Implementation

#### Step 1: Port Extension Logic

Adapt extension component to use monorepo patterns:

**Key adaptations:**

- Replace raw HTML elements (div/span) with Box/Text primitives
- Use design token enums (see @.cursor/rules/styling.md)
- Follow component-first approach (Box props over className)

**Example patterns:** See complete implementations at:

- @apps/storybook-react/stories/WalletHome.stories.tsx (React Web)
- @.cursor/rules/styling.md (Styling patterns and rules)

#### Step 2: Port Mobile Logic

Adapt mobile component to use monorepo patterns:

**Key adaptations:**

- Replace raw React Native elements (View/Text) with Box/Text primitives
- Use design token enums
- Use twClassName for unsupported props (not StyleSheet.create)

**Example patterns:** See complete implementations at:

- @apps/storybook-react-native/stories/WalletHome.stories.tsx (React Native)
- @.cursor/rules/styling.md (Styling patterns and rules)

#### Step 3: Ensure Cross-Platform Consistency

Verify both implementations:

- ✅ Use same shared types (`ButtonPropsShared`)
- ✅ Same variant/size/state behavior
- ✅ Same design tokens applied
- ✅ Same visual appearance (within platform constraints)
- ✅ Platform differences ONLY in extension layer

### Phase 5: Documentation

Follow @.cursor/rules/component-documentation.md:

#### Step 1: Create Storybook Stories

**Both platforms need:**

1. Default story with all controls
2. Story per major prop (Variant, Size, IsDisabled, IsLoading)
3. Complex usage examples

**React** - Interactive Canvas blocks in README.mdx
**React Native** - Comprehensive code examples in README.md

#### Step 2: Write Tests

Create tests for both platforms:

- Props render correctly
- Variants apply correct styling
- Interactive states work (disabled, loading)
- Accessibility requirements met

#### Step 3: Add Figma Code Connect (if applicable)

Follow @.cursor/rules/figma-integration.md to link to Figma designs.

## Common Migration Scenarios

### Scenario 1: Component in Extension Only

If component doesn't exist in mobile:

1. Audit extension component
2. Design cross-platform API (think ahead for mobile use cases)
3. Create shared types
4. Implement React version from extension
5. Implement React Native version (adapt for mobile patterns)
6. Document both platforms

### Scenario 2: Component in Mobile Only

If component doesn't exist in extension:

1. Audit mobile component
2. Design cross-platform API (think ahead for web use cases)
3. Create shared types
4. Implement React Native version from mobile
5. Implement React version (adapt for web patterns)
6. Document both platforms

### Scenario 3: Different Names in Extension/Mobile

Example: `ButtonPrimary` (extension) vs `Button` (mobile)

1. Choose unified name (usually simpler: `Button`)
2. Use `variant` prop to represent differences (`variant="primary"`)
3. Migrate both to unified API
4. Update consumer codebases to use new unified component

### Scenario 4: Significantly Different APIs

If extension and mobile have very different APIs:

1. Document both APIs thoroughly
2. Identify which API better fits design system
3. Design new unified API that serves both platforms
4. May require breaking changes - document migration path
5. Plan consumer codebase updates

## Anti-Patterns to Avoid

### ❌ Copying Extension Code Directly

```tsx
// ❌ Wrong - Direct copy from extension
export const Button = ({ className, children }) => (
  <div className={className}>
    <span>{children}</span>
  </div>
);
```

**Why wrong:** Doesn't use monorepo patterns (Box/Text, design tokens)

### ❌ Copying Mobile StyleSheet Directly

```tsx
// ❌ Wrong - Direct copy from mobile
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#037DD6',
    padding: 16,
  },
});
```

**Why wrong:** Hardcoded values instead of design tokens

### ❌ Platform-Specific Props in Shared

```tsx
// ❌ Wrong - className in shared package
export type ButtonPropsShared = {
  variant?: ButtonVariant;
  className?: string; // Platform-specific!
};
```

**Why wrong:** Violates layered architecture

### ❌ Not Auditing Mobile Version

**Why wrong:** May miss important mobile-specific requirements or APIs

### ❌ Not Aligning APIs

```tsx
// ❌ Wrong - Different prop names across platforms
// React
export type ButtonProps = { disabled?: boolean };

// React Native
export type ButtonProps = { isDisabled?: boolean };
```

**Why wrong:** Breaks cross-platform consistency

## Verification Checklist

### Audit Phase

- [ ] Located component in extension component-library
- [ ] Located component in mobile component-library (if exists)
- [ ] Documented both APIs in comparison table
- [ ] Identified shared vs platform-specific concerns
- [ ] Documented alignment decisions

### API Design

- [ ] Designed unified API using architecture decision tree
- [ ] Shared interface uses `ComponentNamePropsShared` suffix
- [ ] Platform-specific props in extension layer only
- [ ] Event handlers use idiomatic names (onClick/onPress)
- [ ] No className/twClassName in shared package

### Implementation

- [ ] Used `@.cursor/rules/component-creation.md` to scaffold
- [ ] Created shared types in `@metamask/design-system-shared`
- [ ] Platform packages re-export and extend shared types
- [ ] React implementation uses Box/Text primitives
- [ ] React Native implementation uses Box/Text primitives
- [ ] Design tokens used (not hardcoded values)
- [ ] Cross-platform consistency verified

### Documentation

- [ ] Storybook stories for both platforms
- [ ] README.mdx (React) with Canvas blocks
- [ ] README.md (React Native) with code examples
- [ ] Tests written for both platforms
- [ ] Figma Code Connect added (if applicable)

### Build Verification

- [ ] Build succeeds: `yarn build`
- [ ] Tests pass: `yarn test`
- [ ] Lint passes: `yarn lint`
- [ ] Storybook builds: `yarn build-storybook`

## Example Migration: ButtonPrimary → Button

**Audit findings:**

- Extension: ButtonPrimary component with className prop
- Mobile: Button component with type="primary" prop
- Decision: Unify as Button with variant="primary"

**API alignment pattern (see BadgeStatus for real implementation):**

**Shared types** (@metamask/design-system-shared):

- Const objects: `ButtonVariant`, `ButtonSize`
- Shared props: `ButtonPropsShared` (with "Shared" suffix)
- Platform-independent properties only

**Platform extensions:**

- React: Re-exports + `ComponentProps<'button'>` + `className?: string`
- React Native: Re-exports + `PressableProps` + `twClassName?: string`

See complete golden path: @packages/design-system-shared/src/types/BadgeStatus/

**Implementation:**

- Ported extension button styling to Box props
- Ported mobile pressable behavior to React Native Button
- Both use same design tokens
- Both support same variants

## References

### Required Reading

- @.cursor/rules/component-architecture.md - Architectural patterns foundation
- @.cursor/rules/component-creation.md - HOW-TO create components with proper conventions
- @.cursor/rules/styling.md - Design tokens, Box/Text primitives
- @.cursor/rules/component-documentation.md - Storybook and README requirements

### Source Repositories

- [Extension component-library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
- [Mobile component-library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/pull/128)

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
