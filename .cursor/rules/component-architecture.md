# Component Architecture

Foundation architectural patterns and decisions for MetaMask Design System components.

## Purpose

This file defines the architectural patterns that ALL component workflows must follow:

- [String unions with const objects](https://github.com/MetaMask/decisions/pull/127) (no enums)
- [Centralized types in shared package](https://github.com/MetaMask/decisions/pull/128)
- Platform-Specific Props: Layered architecture pattern
- Cross-platform consistency principles

**This is the foundation** - other component rules reference these patterns.

## Critical Rules

**Const Objects (NOT Enums)**

- ✅ **ALWAYS** use `export const` with `as const` for variants/sizes
- ✅ **ALWAYS** derive type using `typeof` and `keyof`
- ❌ **NEVER** use TypeScript `enum`

**Centralized Types**

- ✅ **ALWAYS** define shared types in `@metamask/design-system-shared`
- ✅ **ALWAYS** use `ComponentNamePropsShared` suffix for shared interfaces
- ✅ **ALWAYS** re-export shared types from platform packages
- ❌ **NEVER** duplicate type definitions across platforms

**Platform-Specific Props**

- ✅ **ALWAYS** use `className` in React, `twClassName` in React Native
- ✅ **ALWAYS** use idiomatic event handlers (onClick/onPress from base types)
- ❌ **NEVER** put className/twClassName in shared package
- ❌ **NEVER** create unified event handler names (onAction, onTap, etc.)

**Export Pattern**

- ✅ **ALWAYS** use inline `type` keyword: `export { Variant, type Props }`
- ❌ **NEVER** use separate type exports (causes duplicate identifier errors)

## Commands

```bash
# Verify types build correctly
yarn build

# Run tests
yarn test

# Check linting (includes import order verification)
yarn lint
```

## Golden Path Examples

**BadgeStatus is the complete proof-of-concept demonstrating all patterns:**

Once [PR #912](https://github.com/MetaMask/metamask-design-system/pull/912) is merged, reference these files for canonical examples:

**Shared Package (Source of Truth):**

- `packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts`
  - Const objects with `as const`
  - Shared props interface with "Shared" suffix
  - No platform-specific props

**React Package (Platform Extension):**

- `packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts`
  - Re-exports shared types with inline `type` keyword
  - Extends `ComponentProps<'div'>`
  - Adds `className?: string` and `style?: React.CSSProperties`

**React Native Package (Platform Extension):**

- `packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts`
  - Re-exports shared types with inline `type` keyword
  - Extends `ViewProps`
  - Adds `twClassName?: string`

**What BadgeStatus demonstrates:**

- ✅ Const objects with string unions
- ✅ Centralized types in shared package
- ✅ Platform-specific props (className/twClassName)
- ✅ Export patterns with inline `type` keyword
- ✅ Cross-platform consistency

## String Unions with Const Objects

**Decision:** Use const objects with derived string union types instead of TypeScript enums.

### Pattern

```tsx
// ✅ Correct - Const object + derived union type
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

// ❌ Wrong - TypeScript enum
export enum ButtonVariant {
  Primary = 'primary',
}
```

**Reference BadgeStatus for complete example:**
`packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts`

**Benefits:** CVA integration, better tree-shaking, backwards compatible, type-safe.

**Reference:** [Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)

## Centralized Types Architecture

**Decision:** Define shared types once in `@metamask/design-system-shared`, platform packages re-export and extend.

### Three-Layer Architecture

```
@metamask/design-system-shared (source of truth)
    ↓
    ├── @metamask/design-system-react (re-export + extend)
    └── @metamask/design-system-react-native (re-export + extend)
```

### Pattern Summary

1. **Shared Package** - Define const objects and `ComponentNamePropsShared`
2. **React Package** - Re-export shared, extend with `ComponentProps<'element'>` + `className`
3. **React Native Package** - Re-export shared, extend with `ViewProps` + `twClassName`

**Reference BadgeStatus for complete three-layer example:**

- Shared: `packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts`
- React: `packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts`
- React Native: `packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts`

**Benefits:** Single source of truth, zero duplication (~1800 lines eliminated), backwards compatible, consistent APIs.

**Reference:** [Centralized Types Architecture](https://github.com/MetaMask/decisions/pull/128)

## Platform-Specific Props: Layered Architecture

**Decision:** Separate shared design system concerns from platform-specific implementation concerns.

### Naming Convention

- **Shared interface**: `ComponentNamePropsShared` (with "Shared" suffix)
- **Platform interface**: `ComponentNameProps` (final exported type, no suffix)

**Reference BadgeStatus for naming convention example:**
`packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts` (defines `BadgeStatusPropsShared`)

### Decision Tree: What Goes Where?

| Concern                  | Location | Example                                                |
| ------------------------ | -------- | ------------------------------------------------------ |
| **Visual variants**      | Shared   | `BadgeStatusStatus`, `ButtonVariant`, `ButtonSize`     |
| **Behavioral states**    | Shared   | `isDisabled`, `isLoading`, `isSelected`                |
| **Component structure**  | Shared   | `children`, `label`, `description`                     |
| **Platform interaction** | Platform | `onClick`/`onPress`, `onFocus`/`onBlur`                |
| **Platform styling**     | Platform | `className`/`twClassName`                              |
| **Platform base types**  | Platform | `ComponentProps<'div'>`/`ViewProps`                    |
| **Platform constraints** | Platform | `data-testid`/`testID`, `htmlFor`, accessibility props |

**Quick rules:** Shared = visual appearance, behavioral states, design system logic. Platform = user interaction, styling, base types, platform-only props. See Decision Tree above for specifics.

**Event Handlers:** Use idiomatic platform names (onClick/onPress from base types), NOT unified names (onAction, onTap). Maintains platform conventions and leverages type system.

**Styling Props:** Always platform-specific. React: `className?: string`. React Native: `twClassName?: string`. Never in shared package.

**Reference BadgeStatus platform type files for examples.**

## Export Pattern: Avoiding TypeScript Errors

When exporting both values and types with the same name, use inline `type` keyword to avoid "Duplicate identifier" errors:

```tsx
// ✅ Correct - Inline type keyword
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared, // inline "type" keyword
} from '@metamask/design-system-shared';

// ❌ Wrong - Separate type exports cause duplicate identifier errors
export { BadgeStatusStatus, BadgeStatusSize } from '...';
export type { BadgeStatusStatus, BadgeStatusSize } from '...'; // Error!
```

**Reference BadgeStatus platform type files for complete export pattern examples.**

## Cross-Platform Consistency

- ✅ **Same interface**: `ComponentNamePropsShared` must be identical
- ✅ **Same const object names**: `ButtonVariant`, `ButtonSize`
- ✅ **Same const object values**: `{ Primary: 'primary' }`
- ✅ **Platform differences ONLY in extension**: className/twClassName, onClick/onPress

## Anti-Patterns to Avoid

### SAMPLE_PROPS Constants

**DO NOT create separate constants for default prop values.**

```tsx
// ❌ Wrong - Separate SAMPLE_PROPS constant
export const SAMPLE_INPUT_PROPS = {
  placeholder: 'Enter text',
  size: InputSize.Md,
};

export const Default: Story = {
  args: { ...SAMPLE_INPUT_PROPS },
};

// ✅ Correct - Default parameters in component signature
export const Input = ({
  placeholder = 'Enter text',
  size = InputSize.Md,
  ...props
}: InputProps) => {
  // Component implementation
};

// Storybook automatically infers defaults
export const Default: Story = {
  args: {}, // No need to redefine defaults
};
```

**Why avoid:**

- React has built-in default parameters
- Causes synchronization issues (constants drift from actual defaults)
- Storybook infers defaults from component signatures
- Violates single source of truth principle

### Default Test IDs

**DO NOT provide default values for test ID props.**

```tsx
// ❌ Wrong - Default test ID in component
export const Header = ({
  testID = HEADER_TEST_ID, // Don't default
  ...props
}: HeaderProps) => {
  // ...
};

// ❌ Wrong - Using testID prop in React web
interface HeaderProps {
  testID?: string; // Should be data-testid
}

// ✅ Correct - No default, consumer provides when needed
export const Header = ({
  testID, // No default value
  ...props
}: HeaderProps) => {
  // ...
};

// ✅ Correct - React web uses data-testid
interface HeaderProps {
  'data-testid'?: string; // HTML-compliant attribute
}
```

**Why avoid:**

- Multiple instances get identical test IDs (naming collisions)
- Test IDs are consumer responsibility, not component defaults
- React web should use `data-testid` (HTML standard), not `testID`

**Acceptable pattern for test constants:**

```tsx
// ✅ Define in test file, not exported
// In Header.test.tsx
const HEADER_TEST_ID = 'header-test';

it('should render', () => {
  render(<Header testID={HEADER_TEST_ID} />);
  expect(screen.getByTestId(HEADER_TEST_ID)).toBeDefined();
});
```

### String Children Type Checking

**DO NOT use runtime type checking to conditionally wrap children.**

```tsx
// ❌ Wrong - Runtime typeof checking
export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <View>
      {typeof children === 'string' ? (
        <Text variant={TextVariant.HeadingSm}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
};

// ✅ Correct - Explicit title prop
interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

export const Header = ({ title, children, ...props }: HeaderProps) => {
  return (
    <View>
      {title && <Text variant={TextVariant.HeadingSm}>{title}</Text>}
      {children}
    </View>
  );
};

// Usage is explicit and type-safe
<Header title="Page Title" />
<Header><CustomComponent /></Header>

// ✅ Alternative - Require explicit Text composition
export const Header = ({ children, ...props }: HeaderProps) => {
  return <View>{children}</View>;
};

// Consumer must use Text explicitly
<Header>
  <Text variant={TextVariant.HeadingSm}>Page Title</Text>
</Header>
```

**Why avoid:**

- Violates explicit API principles (unclear what `children` accepts)
- Breaks TypeScript type safety (`children?: string | ReactNode`)
- Goes against React composition patterns
- Creates magic behavior that's harder to test and document

**Exception for accessibility:**

```tsx
// ✅ Acceptable - Using typeof for aria-label fallback
const accessibilityLabel =
  props['aria-label'] || (typeof children === 'string' ? children : undefined);
```

Using `typeof children === 'string'` for accessibility fallbacks (not rendering logic) is acceptable.

### References

- [PR #909 Review](https://github.com/MetaMask/metamask-design-system/pull/909#pullrequestreview-3816797194)
- [PR #908 Discussion](https://github.com/MetaMask/metamask-design-system/pull/908#discussion_r2819577300)

## Verification

After defining types, verify:

- [ ] Shared types defined in `@metamask/design-system-shared/src/types/ComponentName/`
- [ ] Const objects used, NOT enums
- [ ] Shared interface named `ComponentNamePropsShared` (with "Shared" suffix)
- [ ] Platform packages import and re-export shared types
- [ ] Platform packages extend with platform-specific props
- [ ] React: Extends `ComponentProps<'element'>`, adds `className?: string`
- [ ] React Native: Extends `ViewProps` or `PressableProps`, adds `twClassName?: string`
- [ ] Event handlers use idiomatic names (onClick/onPress from base types)
- [ ] NO className/twClassName in shared package
- [ ] NO unified event handlers in shared package
- [ ] Build succeeds: `yarn build`
- [ ] Tests pass: `yarn test`
- [ ] Lint passes: `yarn lint`

## References

### Architecture Decision Records

- [Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)
- [Centralized Types Architecture](https://github.com/MetaMask/decisions/pull/128)

### Related Cursor Rules

- @.cursor/rules/styling.md - Design tokens and styling patterns
- @.cursor/rules/component-documentation.md - Storybook and README standards
- @.cursor/rules/figma-integration.md - Code Connect

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
