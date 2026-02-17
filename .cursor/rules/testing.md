# Testing

Testing standards for React and React Native components with emphasis on API contract coverage, accessibility, and stable style assertions.

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
// ❌ Weak
expect(getByTestId('button')).toBeDefined();

// ✅ Contract-based
expect(getByTestId('button').props.accessibilityState.disabled).toBe(true);
expect(getByTestId('button').props.onPress).toBeDefined();
```

### Query and Assertion Conventions

- **PREFER** `getByTestId` / `queryByTestId` for stable element selection.
- **PREFER** `toBeOnTheScreen()` for presence checks over `toBeDefined()` / `toBeTruthy()`.
- **PREFER** specific assertions (`toHaveTextContent`, accessibility state, style tokens) over generic existence checks.

### React Native Style Assertions

- **ALWAYS** use shared style test utilities for flattening and assertions.
- **NEVER** duplicate local `flattenStyles` helpers in component test files.
- **PREFER** asserting key style tokens (`backgroundColor`, `opacity`, `borderColor`) over full style snapshots.
- **AVOID** relying on brittle `style[0]` ordering unless explicitly required by the contract.

```tsx
// ❌ Duplicated helper per test file
function flattenStyles(styleProp: unknown): Record<string, unknown>[] { ... }

// ✅ Shared helper (create if missing)
import { getStyleList, expectStyleIncludes } from '../../test-utils/styles';
expectStyleIncludes(button.props.style, { opacity: 0.5 });
```

### Isolation, Mocks, and Async

- **ALWAYS** keep tests independent and order-agnostic.
- **ALWAYS** reset/clear mocks between tests (`jest.clearAllMocks`, `jest.resetAllMocks` as needed).
- **ALWAYS** mock external dependencies not under test.
- **PREFER** test-local mocks/factories over broad shared manual mocks.
- **ALWAYS** wrap async interactions that trigger React state updates in `act(async () => { ... })`.
- **ALWAYS** cover both success and failure paths for async behavior.

### twClassName and Tailwind Assertions

- **ALWAYS** validate `twClassName` behavior by asserting resolved style outputs, not raw class strings.
- **ALWAYS** cover class precedence and merge behavior when `twClassName` and `style` are both provided.
- **PREFER** table-driven tests for variant matrices (`isInverse`, `isDanger`, `isLoading`, pressed).

```tsx
const cases = [
  { props: {}, expectedBg: 'bg-icon-default' },
  { props: { isDanger: true }, expectedBg: 'bg-error-default' },
];

cases.forEach(({ props, expectedBg }) => {
  const { getByTestId } = render(
    <ButtonPrimary {...props} testID="btn">
      X
    </ButtonPrimary>,
  );
  expectBackground(getByTestId('btn').props.style, expectedBg);
});
```

### Shared Test Utilities

- **ALWAYS** centralize reusable RN style helpers under:
  `packages/design-system-react-native/src/test-utils/`
- **PREFER** helper names that describe intent:
  `getStyleList`, `getResolvedStyle`, `expectStyleIncludes`, `expectResolvedStyle`.
- **OPTIONAL** expose custom matchers from `packages/design-system-react-native/jest.setup.js` when readability improves.

### Coverage Strategy (100% Thresholds)

- **ALWAYS** test each branch/state transition that maps to public API behavior.
- **PREFER** one high-signal assertion per branch over many broad snapshots.
- **ALWAYS** include accessibility assertions (`accessibilityRole`, `accessibilityState`, labels/hints where applicable).

## Commands

```bash
# Run RN package tests
yarn workspace @metamask/design-system-react-native test

# Verbose RN tests
yarn workspace @metamask/design-system-react-native test:verbose

# Clear RN test cache
yarn workspace @metamask/design-system-react-native test:clean
```

## Golden Path Examples

Use these files as references when adding or refactoring RN tests:

- `packages/design-system-react-native/src/components/ButtonBase/ButtonBase.test.tsx`
- `packages/design-system-react-native/src/components/Button/variants/ButtonPrimary/ButtonPrimary.test.tsx`
- `packages/design-system-react-native/src/components/Box/Box.test.tsx`
- `packages/design-system-react-native/src/components/Checkbox/Checkbox.test.tsx`

If duplication is detected across multiple suites (for example button variants), extract shared test utilities or table-driven harnesses.

## Verification

After adding or updating tests, verify:

- [ ] Public props and states are covered by contract assertions
- [ ] No new duplicated `flattenStyles` helpers were introduced
- [ ] RN style assertions use shared helper(s) where applicable
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
