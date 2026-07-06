# Accessibility Testing

Our Storybook automatically runs accessibility tests on all component stories using [axe-core](https://github.com/dequelabs/axe-core) through the `@storybook/addon-a11y` addon. Tests check for WCAG 2.1 AA compliance and catch up to 57% of accessibility issues automatically.

## How It Works

**Accessibility tests run automatically** when you:

- View stories in Storybook (results appear in the Accessibility panel)
- Run `yarn test:storybook` (accessibility violations cause test failures)

No additional setup is needed - just write your component stories and accessibility tests are included.

## Running Tests

### In Storybook UI

1. Navigate to any story
2. Open the **Accessibility** panel in the addon panel
3. View results in three tabs: **Violations**, **Passes**, **Incomplete**

### From Command Line

```bash
# Run all component tests (includes accessibility)
yarn test:storybook

# Run tests in watch mode
yarn test:storybook --watch

# Run tests for specific stories
yarn test:storybook "Button"
```

## Handling Violations

When accessibility violations are found, tests will **fail** with detailed error messages:

```
✗ Button/Primary A11y
  Expected: 0 violations
  Received: 1 violation

  color-contrast: Elements must have sufficient color contrast
  Expected contrast ratio of 4.5:1

  Fix: https://dequeuniversity.com/rules/axe/4.7/color-contrast
```

**Common violations and fixes:**

- **Color contrast**: Ensure text has sufficient contrast against background
- **Missing labels**: Add `aria-label` or associate with label elements
- **Keyboard navigation**: Ensure interactive elements are keyboard accessible
- **Semantic HTML**: Use proper heading hierarchy and semantic elements

## Disabling Tests for Specific Stories

Sometimes you need to disable accessibility tests for specific stories (e.g., error states, loading states):

```typescript
// In your story file
export const LoadingState: Story = {
  parameters: {
    a11y: {
      test: 'off', // Disable accessibility tests for this story
    },
  },
};

// Or disable specific rules
export const ErrorState: Story = {
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false, // Disable color contrast check
          },
        ],
      },
    },
  },
};
```

## Test Behavior Options

| Value     | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| `'error'` | Fail tests when violations are found (default, recommended for CI)  |
| `'todo'`  | Show warnings in Storybook UI but don't fail tests                  |
| `'off'`   | Disable accessibility tests (can still run manually in addon panel) |

## Best Practices

1. **Write accessible components from the start** - don't rely on tests to catch everything
2. **Fix violations immediately** - accessibility issues compound over time
3. **Test with real assistive technology** - automated tests catch ~57% of issues
4. **Consider the full user journey** - test component interactions, not just static states
5. **Use semantic HTML** - proper markup prevents many accessibility issues

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [axe-core Rule Descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [Deque University](https://dequeuniversity.com/) - accessibility training and resources
