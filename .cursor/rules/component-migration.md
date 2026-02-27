# Component Migration

Guide for migrating components from MetaMask Extension and Mobile component-library folders into the design system monorepo.

## Purpose

**This is the PRIMARY workflow** for bringing components from consumer codebases into the monorepo.

When components exist in:

- Extension: https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library
- Mobile: https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library

They need to be migrated into this monorepo with:

- ✅ **Shared types for matching props** (partial alignment acceptable)
- ✅ **ADR-0003/0004 architectural patterns** (const objects, centralized types)
- ✅ **Monorepo design token conventions** (Box/Text primitives, design tokens)
- ✅ **Storybook documentation** for both platforms
- ✅ **Documented alignment gaps** for Phase 2 cleanup (PR description + GitHub issues)

**Key principle:** Always apply ADR patterns and code transformations. Full API unification is NOT required - partial alignment is acceptable when differences are documented.

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

**For both Extension and Mobile component-library:**

1. **Locate component** and document:

   - Component name and location
   - File structure (index.tsx, types.ts, etc.)
   - Current prop API with TypeScript types
   - Dependencies and Storybook stories (if any)

2. **Create comparison table:**

| Concern        | Extension API | Mobile API   | Decision                  |
| -------------- | ------------- | ------------ | ------------------------- |
| Prop names     | Document      | Document     | Choose unified            |
| Types          | Document      | Document     | Align or unify            |
| Event handlers | `onClick`     | `onPress`    | Keep both (platform)      |
| Styling        | `className`   | style object | Use className/twClassName |

3. **Answer key questions:**
   - Which props are cross-platform? (variant, size, isDisabled)
   - Which props are platform-specific? (onClick/onPress, className/twClassName)
   - Are there naming conflicts? (disabled vs isDisabled)
   - What's the unified API that serves both platforms?

### Partial Alignment Strategy

**Key principle:** Create shared types for ANY matching props, even minimal overlap. Platform differences are acceptable when documented.

**When to create shared types:**

- ✅ **Any matching props** - Even if only `variant` and `size` match, create shared package types
- ✅ **Semantic alignment** - Props with same meaning but different names (document for Phase 2)
- ✅ **Future-proofing** - Props likely to align as platforms mature

**When to accept platform differences:**

- ✅ **Idiomatic platform patterns** - `onClick` (React) vs `onPress` (React Native)
- ✅ **Platform-specific styling** - `className` (React) vs `twClassName` (React Native)
- ✅ **Different use cases** - Extension needs `tooltip`, Mobile doesn't
- ✅ **Documented gaps** - Props that should align but differ now (create GitHub issue)

**Example - Partial Alignment:**

```tsx
// Extension has: variant, size, disabled, tooltip
// Mobile has: variant, size, isDisabled

// ✅ Shared package (matching + semantic alignment)
export type ButtonPropsShared = {
  variant?: ButtonVariant; // ✅ Matches
  size?: ButtonSize; // ✅ Matches
  // disabled vs isDisabled - document gap, unify in Phase 2
};

// React package (extension-specific)
export type ButtonProps = ComponentProps<'button'> &
  ButtonPropsShared & {
    className?: string;
    disabled?: boolean; // Extension API (gap documented)
    tooltip?: string; // Extension-only feature
  };

// React Native package (mobile-specific)
export type ButtonProps = ButtonPropsShared &
  PressableProps & {
    twClassName?: string;
    isDisabled?: boolean; // Mobile API (gap documented)
  };
```

### Phase 2: Shared Type Creation

**Create shared types for matching props. Full API unification is NOT required - partial alignment is acceptable.**

**Reference the golden path:** See how BadgeStatus implements the layered architecture:

- @packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts (Shared types)
- @packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts (React extension)
- @packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts (React Native extension)

**Shared package pattern:**

- Const objects with derived union types (ADR-0003)
- Shared props type with "Shared" suffix
- Platform-independent properties only
- Use `type` not `interface`

**Platform packages pattern:**

- Re-export all shared types
- Extend with `ComponentProps<'element'>` (React) or `ViewProps`/`PressableProps` (React Native)
- Add `className?: string` (React) or `twClassName?: string` (React Native)
- Event handlers from base types (onClick/onPress)

### Phase 2.5: Document Alignment Gaps

**Document known API differences for Phase 2 cleanup. Create GitHub issues to track alignment work.**

**In migration PR description:**

```markdown
## Migration Decisions

### Shared Props (in @metamask/design-system-shared)

- ✅ `variant` - Both platforms use ButtonVariant
- ✅ `size` - Both platforms use ButtonSize

### Platform-Specific Props

- React: `onClick`, `className`, `disabled`, `tooltip`
- React Native: `onPress`, `twClassName`, `isDisabled`

### Known Alignment Gaps (Phase 2)

- ❌ **disabled vs isDisabled** - Extension uses `disabled`, Mobile uses `isDisabled`. Standardize to `isDisabled` in Phase 2 [#XXX]
- ❌ **tooltip** - Extension-only feature. Evaluate Mobile tooltip support in Phase 2 [#XXX]

[#XXX] = Link to GitHub issues created for Phase 2 tracking
```

**Create GitHub issues:**

```markdown
Title: [Phase 2] Align Button disabled/isDisabled props

Description:
- Extension uses `disabled?: boolean`
- Mobile uses `isDisabled?: boolean`
- Standardize to `isDisabled` for consistency with other boolean props
- Update extension consumers in breaking change

Labels: phase-2, alignment, breaking-change
```

### Phase 3: Creation

Use @.cursor/rules/component-creation.md to scaffold:

```bash
# Create component scaffolding for BOTH platforms
yarn create-component:react --name ComponentName --description "Brief description"
yarn create-component:react-native --name ComponentName --description "Brief description"
```

**Then immediately:**

1. Create shared types in `packages/design-system-shared/src/types/ComponentName/`
2. Update platform type files to re-export and extend shared types
3. Follow @.cursor/rules/component-architecture.md for all type patterns

### Phase 4: Implementation

**Use monorepo patterns from @.cursor/rules/component-creation.md:**

**Key adaptations for both platforms:**

- ✅ Replace raw elements (div/View/span/Text) with Box/Text primitives
- ✅ Use design token enums (BoxBackgroundColor, TextVariant, etc.)
- ✅ Follow component-first approach (Box props over className)
- ✅ Use twClassName for React Native (not StyleSheet.create)

**Styling reference:** @.cursor/rules/styling.md

**Complete implementation examples:**

- @apps/storybook-react/stories/WalletHome.stories.tsx (React Web)
- @apps/storybook-react-native/stories/WalletHome.stories.tsx (React Native)

**Verify cross-platform consistency:**

- ✅ Same shared types (`ComponentPropsShared`)
- ✅ Same variant/size/state behavior
- ✅ Same design tokens applied
- ✅ Same visual appearance (within platform constraints)
- ✅ Platform differences ONLY in extension layer

### Phase 5: Documentation

Follow @.cursor/rules/component-documentation.md:

**Both platforms need:**

1. Default story with all controls wired up
2. Story per major prop (Variant, Size, IsDisabled)
3. Tests (props render, variants apply, interactive states work)
4. Figma Code Connect (if applicable) - see @.cursor/rules/figma-integration.md

**React:** README.mdx with Canvas blocks
**React Native:** README.md with code examples

## Decision Tree: When to Unify vs Accept Differences

Use this decision tree to determine whether to unify props or accept platform differences:

**Question 1: Do the props have the same semantic purpose?**

- ✅ **YES** → Go to Question 2
- ❌ **NO** (e.g., `tooltip` web-only, `hapticFeedback` mobile-only) → **Accept difference**, document as platform-specific feature

**Question 2: Are the prop names/types identical or near-identical?**

- ✅ **Identical** (e.g., both use `variant: ButtonVariant`) → **Add to shared types**
- ⚠️ **Near-identical** (e.g., `disabled` vs `isDisabled`, same boolean purpose) → Go to Question 3
- ❌ **Very different** (e.g., `action` object vs `onPress` callback) → Go to Question 3

**Question 3: Is this an idiomatic platform pattern?**

- ✅ **YES** (e.g., `onClick` vs `onPress`, `className` vs `twClassName`) → **Accept difference**, document as idiomatic platform pattern
- ❌ **NO** (e.g., `disabled` vs `isDisabled` - both are props, not event handlers) → **Document as gap**, create GitHub issue, accept difference for now, unify in Phase 2

**Summary:**

| Scenario | Action | Example |
|----------|--------|---------|
| Identical props | Add to shared types | Both use `variant: ButtonVariant` |
| Idiomatic platform difference | Accept, document as platform-specific | `onClick` (web) vs `onPress` (mobile) |
| Naming inconsistency | Document gap, accept for now, Phase 2 issue | `disabled` vs `isDisabled` |
| Platform-only feature | Accept, document as platform-specific | `tooltip` (web-only) |

## Migration Scenarios

### Component in Extension Only

1. Audit extension component
2. Design cross-platform API (think ahead for mobile use cases)
3. Follow creation workflow for both platforms
4. Implement React from extension
5. Implement React Native (adapt for mobile patterns)

### Component in Mobile Only

1. Audit mobile component
2. Design cross-platform API (think ahead for web use cases)
3. Follow creation workflow for both platforms
4. Implement React Native from mobile
5. Implement React (adapt for web patterns)

### Different Names (e.g., ButtonPrimary vs Button)

1. Choose unified name (usually simpler: `Button`)
2. Use `variant` prop to represent differences (`variant="primary"`)
3. Migrate both to unified API
4. Update consumer codebases

### Significantly Different APIs

1. Document both APIs thoroughly
2. Identify which better fits design system
3. Design new unified API serving both platforms
4. Plan breaking changes and consumer updates

## Anti-Patterns

### ❌ Copying Code Directly Without Transformation

```tsx
// ❌ Wrong - Direct copy from extension
export const Button = ({ className, children }) => (
  <div className={className}>
    <span>{children}</span>
  </div>
);

// ✅ Correct - Use Box/Text primitives + design tokens
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      as="button"
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      {...props}
    >
      <Text variant={TextVariant.BodyMd}>{children}</Text>
    </Box>
  ),
);
```

### ❌ Hardcoded Values Instead of Design Tokens

```tsx
// ❌ Wrong - Hardcoded from mobile
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#037DD6',
    padding: 16,
  },
});

// ✅ Correct - Design token enums
<Box
  backgroundColor={BoxBackgroundColor.PrimaryDefault}
  p={4}
>
```

### ❌ Platform-Specific Props in Shared Package

```tsx
// ❌ Wrong - className in shared (violates ADR-0004)
export type ButtonPropsShared = {
  variant?: ButtonVariant;
  className?: string; // Platform-specific!
};

// ✅ Correct - className only in platform package
export type ButtonPropsShared = {
  variant?: ButtonVariant;
};

export type ButtonProps = ComponentProps<'button'> &
  ButtonPropsShared & {
    className?: string; // Platform layer
  };
```

### ❌ Not Auditing Mobile Version

Always audit BOTH platforms to avoid missing mobile-specific requirements or APIs.

### ❌ Not Aligning APIs

```tsx
// ❌ Wrong - Different prop names break consistency
// React
export type ButtonProps = { disabled?: boolean };
// React Native
export type ButtonProps = { isDisabled?: boolean };

// ✅ Correct - Same shared props
export type ButtonPropsShared = { isDisabled?: boolean };
```

## Verification Checklist

### Audit Phase

- [ ] Located component in extension component-library
- [ ] Located component in mobile component-library (if exists)
- [ ] Documented both APIs in comparison table
- [ ] Identified shared vs platform-specific concerns
- [ ] Used decision tree to determine what to unify vs accept
- [ ] Documented alignment gaps in migration PR description
- [ ] Created GitHub issues for Phase 2 alignment work

### API Design

- [ ] Created shared types for matching props (even minimal overlap)
- [ ] Shared interface uses `ComponentNamePropsShared` suffix
- [ ] Platform-specific props in extension layer only
- [ ] Event handlers use idiomatic names (onClick/onPress)
- [ ] No className/twClassName in shared package
- [ ] Platform differences documented (idiomatic patterns vs alignment gaps)

### Implementation

- [ ] Used @.cursor/rules/component-creation.md to scaffold
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
- [ ] Coverage meets thresholds: `yarn test --coverage` (100% all metrics)
- [ ] Lint passes: `yarn lint`
- [ ] Storybook builds: `yarn build-storybook`

## References

### Required Reading

- @.cursor/rules/component-architecture.md - Architectural patterns foundation
- @.cursor/rules/component-creation.md - HOW-TO create components with proper conventions
- @.cursor/rules/styling.md - Design tokens, Box/Text primitives
- @.cursor/rules/component-documentation.md - Storybook and README requirements

### Migration Strategy

- @docs/component-migration-strategy.md - Two-phase migration approach (speed-first, then alignment)

**Note:** This cursor rule describes the **pragmatic comprehensive approach** - we always apply ADR-0003/0004 patterns and code transformations, but accept partial API alignment. Document gaps in PR descriptions and create Phase 2 GitHub issues for alignment work.

### Source Repositories

- [Extension component-library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
- [Mobile component-library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
