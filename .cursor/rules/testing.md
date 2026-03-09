# Testing

Testing standards for React and React Native components with emphasis on API contract coverage, accessibility, and stable style assertions.

## Purpose

This rule defines testing patterns for design system components to ensure:

- Component API contracts are verified (not implementation details)
- 100% coverage thresholds are met consistently
- Style assertions use built-in matchers (not duplicated helpers)
- Tests remain maintainable as components evolve

## Critical Rules

### Test Naming and Structure

- **NEVER** use `"should"` in test names.
- **ALWAYS** use `describe` blocks by unit/method, and use scenario blocks with `when ...` / `if ...` when helpful.
- **ALWAYS** follow AAA pattern with visual separation:
  1. Arrange
  2. Act
  3. Assert
- **ALWAYS** keep one behavior per test. Split tests when names combine multiple behaviors with `and`.
- **ALWAYS** colocate tests with implementation files (`Component.tsx` + `Component.test.tsx`).

### API Contract Over Implementation Detail

- **ALWAYS** test the component contract (what props guarantee), not incidental internals.
- **ALWAYS** assert behavior for every public variant/state prop when coverage targets are strict.
- **NEVER** add tests that only assert existence when a stronger assertion is possible.

```tsx
// ❌ Weak - Only checks existence
expect(getByTestId('button')).toBeDefined();

// ❌ Implementation details - Checking props directly
expect(getByTestId('button').props.accessibilityState.disabled).toBe(true);
expect(getByTestId('button').props.onPress).toBeDefined();

// ✅ Contract-based - Use built-in matchers
expect(getByTestId('button')).toBeDisabled();

// ✅ Contract-based - Test behavior with mock
const onPress = jest.fn();
render(<Button onPress={onPress} />);
fireEvent.press(getByTestId('button'));
expect(onPress).toHaveBeenCalledTimes(1);
```

### Query and Assertion Conventions

**React Web:**

- **PREFER** `getByRole` / `getByTestId` for element selection
- **PREFER** `toBeInTheDocument()` for presence checks
- **PREFER** specific assertions (`toHaveTextContent`, `toBeDisabled`, `toHaveClass`)

**React Native:**

- **PREFER** `getByTestId` / `queryByTestId` for stable element selection
- **PREFER** `toBeOnTheScreen()` for presence checks over `toBeDefined()` / `toBeTruthy()`
- **PREFER** specific assertions (`toHaveTextContent`, `toBeDisabled`, `toHaveStyle`)

### React Web Style Assertions

- **ALWAYS** use `toHaveClass()` for Tailwind class assertions
- **USE** `toHaveStyle()` ONLY for inline style prop validation (not Tailwind classes)
- **NEVER** check computed styles - test the contract (classes applied), not browser rendering

```tsx
// ✅ Correct - Check Tailwind classes
expect(button).toHaveClass('bg-icon-default', 'hover:bg-icon-default-hover');

// ✅ Correct - Check inline styles when style prop used
expect(badge).toHaveStyle({ backgroundColor: 'red' });

// ❌ Wrong - Don't use toHaveStyle for Tailwind classes
expect(button).toHaveStyle({ backgroundColor: '#037DD6' });
```

### React Native Style Assertions

- **ALWAYS** use built-in `toHaveStyle` matcher for RN style contracts.
- **NEVER** duplicate local `flattenStyles` helpers in component test files.
- **PREFER** `toHaveStyle` with Tailwind classes directly (`tw\`class-names\``) to match component code.
- **AVOID** relying on brittle `style[0]` ordering unless explicitly required by the contract.

```tsx
// ❌ Duplicated helper per test file
function flattenStyles(styleProp: unknown): Record<string, unknown>[] { ... }

// ✅ Direct Tailwind classes (preferred - matches component code)
expect(button).toHaveStyle(tw`bg-primary-default rounded-lg p-4`);

// ✅ Single property when needed
expect(button).toHaveStyle({ opacity: 0.5 });
```

### Isolation, Mocks, and Async

- **ALWAYS** keep tests independent and order-agnostic.
- **ALWAYS** reset/clear mocks between tests (`jest.clearAllMocks`, `jest.resetAllMocks` as needed).
- **ALWAYS** mock external dependencies not under test.
- **PREFER** test-local mocks/factories over broad shared manual mocks.
- **ALWAYS** wrap async interactions that trigger React state updates in `act(async () => { ... })`.
- **ALWAYS** cover both success and failure paths for async behavior.

### twClassName and Tailwind Assertions (React Native)

- **ALWAYS** validate `twClassName` behavior by asserting resolved style outputs, not raw class strings.
- **ALWAYS** cover class precedence and merge behavior when `twClassName` and `style` are both provided.
- **PREFER** table-driven tests for variant matrices (`isInverse`, `isDanger`, `isLoading`, pressed).

```tsx
const cases = [
  { props: {}, expectedBg: 'bg-icon-default' },
  { props: { isDanger: true }, expectedBg: 'bg-error-default' },
];

cases.forEach(({ props, expectedBg }) => {
  it(`renders ${expectedBg} background`, () => {
    const { getByTestId } = render(
      <ButtonPrimary {...props} testID="btn">
        X
      </ButtonPrimary>,
    );

    expect(getByTestId('btn')).toHaveStyle(tw`${expectedBg}`);
  });
});
```

### Built-in Testing Library Matchers

**React Web** (`@testing-library/react` + `@testing-library/jest-dom`):

- `toBeInTheDocument()` - Presence checks
- `toHaveClass()` - Tailwind class assertions
- `toHaveStyle()` - Inline style assertions only
- `toHaveTextContent()` - Text content
- `toBeDisabled()` / `toBeEnabled()` - Interaction state
- `toHaveAttribute()` - Attribute checks
- **REFERENCE:** [jest-dom Matchers](https://github.com/testing-library/jest-dom#custom-matchers)

**React Native** (`@testing-library/react-native`):

- `toBeOnTheScreen()` - Presence checks
- `toHaveStyle()` - Style assertions (Tailwind or inline)
- `toHaveTextContent()` - Text content
- `toBeDisabled()` / `toBeEnabled()` - Interaction state
- **REFERENCE:** [RN Jest Matchers](https://callstack.github.io/react-native-testing-library/docs/api/jest-matchers)

### Coverage Strategy (100% Thresholds)

- **ALWAYS** test each branch/state transition that maps to public API behavior.
- **PREFER** one high-signal assertion per branch over many broad snapshots.
- **ALWAYS** include accessibility assertions using built-in matchers (`toBeDisabled()`, `toHaveAccessibilityValue()`) not direct prop checks.

### Coverage Policy

- **NEVER** use `/* istanbul ignore next */` to hide untested code
- **ALWAYS** set explicit per-file thresholds for legitimately untestable code
- **DOCUMENT** why code cannot be tested when setting reduced thresholds
- **PREFER** removing code over ignoring coverage

```tsx
// ❌ Wrong - Hiding untested code
/* istanbul ignore next - handler body covered by focus/blur tests */
const onBlurHandler = useCallback(() => {
  setIsFocused(false);
}, []);

// ✅ Correct - Explicit threshold with documentation in jest.config.js
coverageThreshold: {
  './src/components/Skeleton/Skeleton.tsx': {
    branches: 98,  // Animation callback not testable in Jest
  },
}
```

**Legitimate exceptions ONLY:**

- Animation callbacks (React Native Animated API limitations)
- Exhaustive switch default cases (TypeScript ensures completeness)
- Platform-specific code not executable in Jest environment

## Commands

```bash
# React Web package tests
yarn workspace @metamask/design-system-react test
yarn workspace @metamask/design-system-react test:verbose

# React Native package tests
yarn workspace @metamask/design-system-react-native test
yarn workspace @metamask/design-system-react-native test:verbose
yarn workspace @metamask/design-system-react-native test:clean
```

## Golden Path Examples

Use these files as references when adding or refactoring tests:

**React Web** (reference for `toHaveClass`, `toBeInTheDocument` patterns):

- @packages/design-system-react/src/components/BadgeStatus/BadgeStatus.test.tsx - Clean `toHaveClass` usage, status/size variants
- @packages/design-system-react/src/components/Button/Button.test.tsx - Variant testing, danger/inverse states

**React Native** (reference for `toHaveStyle(tw\`\`)`, `toBeOnTheScreen` patterns):

- @packages/design-system-react-native/src/components/RadioButton/RadioButton.test.tsx - Clean `toHaveStyle` usage, interaction testing with mocks
- @packages/design-system-react-native/src/components/Button/variants/ButtonPrimary/ButtonPrimary.test.tsx - Design token assertions with `toHaveStyle(tw\`\`)`, loading state, accessibility
- @packages/design-system-react-native/src/components/ButtonBase/ButtonBase.test.tsx - Comprehensive accessibility tests

If duplication is detected across multiple suites (for example button variants), extract shared test utilities or table-driven harnesses.

## Verification

After adding or updating tests, verify:

- [ ] Public props and states are covered by contract assertions
- [ ] No new duplicated `flattenStyles` helpers were introduced
- [ ] RN style assertions use built-in `toHaveStyle` matcher
- [ ] Accessibility assertions are present for interactive components
- [ ] Table-driven tests are used for variant combinations when practical
- [ ] `yarn workspace @metamask/design-system-react-native test` passes
- [ ] Coverage thresholds remain satisfied for changed files

## References

- https://github.com/MetaMask/contributor-docs/blob/main/docs/testing/unit-testing.md
- https://github.com/MetaMask/metamask-extension/tree/main/.cursor/rules/unit-testing-guidelines
- https://github.com/MetaMask/metamask-mobile/blob/main/.cursor/rules/unit-testing-guidelines.mdc
- @.cursor/rules/styling.md
- @packages/design-system-react-native/jest.config.js
- @packages/design-system-react-native/jest.setup.js
- @docs/ai-agents.md
