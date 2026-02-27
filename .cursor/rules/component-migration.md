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

### Phase 2: API Alignment

**Design unified API using @.cursor/rules/component-architecture.md decision tree.**

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

**Document alignment decisions:**

```markdown
## Migration Decisions

### Prop Naming

- ✅ Use `isDisabled` (not `disabled`) - boolean prop conventions
- ✅ Use `variant` (not `type`) - semantic visual variants
- ✅ Use `children` for label - standard React

### Platform Differences

- React: onClick from ComponentProps, className
- React Native: onPress from PressableProps, twClassName

### Behavioral Alignment

- Document what both platforms will support identically
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
- [ ] Documented alignment decisions

### API Design

- [ ] Designed unified API using architecture decision tree
- [ ] Shared interface uses `ComponentNamePropsShared` suffix
- [ ] Platform-specific props in extension layer only
- [ ] Event handlers use idiomatic names (onClick/onPress)
- [ ] No className/twClassName in shared package

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
- [ ] Lint passes: `yarn lint`
- [ ] Storybook builds: `yarn build-storybook`

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

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
