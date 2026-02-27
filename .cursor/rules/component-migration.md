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

**Two migration strategies:**

- **Conservative:** Accept partial alignment, document gaps for Phase 2
- **Unified:** Consolidate props immediately with `@deprecated` transition

## When to Use This Workflow

Use this workflow when:

- ✅ Component exists in extension component-library folder
- ✅ Component exists in mobile component-library folder
- ✅ Component needs to be consolidated into monorepo
- ✅ APIs need to be audited and aligned

**NOT for:**

- Internal monorepo component refactoring → @.cursor/rules/component-enum-union-migration.md
- Brand new components from scratch → @.cursor/rules/component-creation.md

## Migration Strategy Decision

### Question 1: Component usage level?

- **Low** (<5 instances) → Consider **Unified approach**
- **High** (>20 instances) → Consider **Conservative approach**
- **Medium** (5-20) → Evaluate Question 2

### Question 2: Update consumers in migration PR?

- **Yes** → **Unified approach** (breaking changes + migration map)
- **No** → **Conservative approach** (defer to Phase 2)

### Conservative Approach (Defer Breaking Changes)

1. Accept partial alignment in Phase 1
2. Document gaps in PR description
3. Create Phase 2 GitHub issues
4. Unify in later major version

### Unified Approach (Immediate Consolidation)

1. Consolidate props in Phase 1 (including `disabled` → `isDisabled`)
2. Add migration map to README
3. Keep deprecated props with `@deprecated` + `@see` JSDoc
4. Update consumers (same PR or coordinated separately)
5. Remove deprecated props in next major version

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

### Prop Alignment Principles

**Create shared types for:**

- ✅ Any matching props (even minimal overlap like `variant` and `size`)
- ✅ Semantic alignment (same meaning, different names - e.g., `disabled` vs `isDisabled`)

**Accept platform differences for:**

- ✅ Idiomatic patterns (`onClick`/`onPress`, `className`/`twClassName`)
- ✅ Platform-only features (`tooltip` web-only, `hapticFeedback` mobile-only)

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

### Phase 2.5: Implementation Patterns

#### Conservative Approach Pattern

**Document gaps in PR description + GitHub issues:**

```markdown
## Known Gaps (Phase 2)

- ❌ `disabled` vs `isDisabled` - Standardize to `isDisabled` [#XXX]
```

**Create GitHub issue:**

```markdown
[Phase 2] Align Button disabled/isDisabled props
Labels: phase-2, alignment, breaking-change
```

#### Unified Approach Pattern

**Add migration map to README:**

```markdown
## Migration from Extension/Mobile

| Old Prop   | New Prop     | Notes                           |
| ---------- | ------------ | ------------------------------- |
| `disabled` | `isDisabled` | Standardized boolean naming     |
| `tooltip`  | Removed      | Use `Tooltip` wrapper component |

**Example:**
\`\`\`tsx
// Before (Extension)
<Button disabled={true} tooltip="Submit">Submit</Button>

// After (Design System)
<Button isDisabled={true}>Submit</Button>
\`\`\`
```

**Add deprecated prop with JSDoc:**

```tsx
export type ButtonProps = ComponentProps<'button'> &
  ButtonPropsShared & {
    className?: string;
    /**
     * @deprecated Use `isDisabled` instead. Will be removed in v2.0.0
     * @see {@link https://github.com/MetaMask/.../Button#migration-guide}
     */
    disabled?: boolean;
  };
```

**Map deprecated prop in implementation:**

```tsx
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, isDisabled, ...props }, ref) => {
    const effectiveDisabled = isDisabled ?? disabled;
    return (
      <Box ref={ref} as="button" aria-disabled={effectiveDisabled} {...props} />
    );
  },
);
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

**Migration documentation:**

- Add component to centralized MIGRATION.md (preferred)
- Or add migration section to README if component-specific (see Phase 2.5 pattern)

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

### ❌ Not Auditing Both Platforms

Always audit BOTH extension and mobile to avoid missing requirements.

### ❌ Leaving Breaking Changes Undocumented

If using unified approach, ALWAYS add migration map and `@deprecated` JSDoc.

## Verification Checklist

### Audit Phase

- [ ] Located components in extension and mobile component-library
- [ ] Documented both APIs in comparison table
- [ ] Identified shared vs platform-specific concerns
- [ ] Chose migration strategy (conservative or unified)

### API Design

- [ ] Created shared types for matching props (even minimal overlap)
- [ ] Shared interface uses `ComponentNamePropsShared` suffix
- [ ] Platform-specific props in extension layer only
- [ ] Event handlers use idiomatic names (onClick/onPress)
- [ ] No className/twClassName in shared package

### Conservative Approach (if chosen)

- [ ] Documented alignment gaps in PR description
- [ ] Created GitHub issues for Phase 2 alignment work

### Unified Approach (if chosen)

- [ ] Added migration map to README
- [ ] Added `@deprecated` JSDoc to old props
- [ ] Mapped deprecated props in implementation
- [ ] Updated consumers (or coordinated separately)

### Implementation

- [ ] Used @.cursor/rules/component-creation.md to scaffold
- [ ] Created shared types in `@metamask/design-system-shared`
- [ ] Platform packages re-export and extend shared types
- [ ] React implementation uses Box/Text primitives
- [ ] React Native implementation uses Box/Text primitives
- [ ] Design tokens used (not hardcoded values)
- [ ] Cross-platform consistency verified

### Documentation

- [ ] Storybook stories, README, tests for both platforms
- [ ] Figma Code Connect (if applicable)
- [ ] Migration documented in centralized MIGRATION.md (preferred)
- [ ] Or migration section in README (if component-specific)

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

- @docs/component-migration-strategy.md - Two-phase migration approach

**Note:** This rule offers two migration strategies:

- **Conservative:** Apply ADR patterns, accept partial alignment, document gaps for Phase 2
- **Unified:** Apply ADR patterns, consolidate props immediately with `@deprecated` transition

### Migration Documentation

- @packages/design-system-react/MIGRATION.md - Extension component-library migration guide
- @packages/design-system-react-native/MIGRATION.md - Mobile component-library migration guide

### Source Repositories

- [Extension component-library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
- [Mobile component-library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
