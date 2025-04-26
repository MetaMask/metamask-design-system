# Accessibility Testing

Our Storybook React setup includes comprehensive accessibility testing capabilities powered by [axe-core](https://github.com/dequelabs/axe-core) through the `@storybook/addon-a11y` addon.

## Real-time Testing

When running Storybook, you can access real-time accessibility testing through the Accessibility tab in the addons panel. This provides:

- Immediate feedback on accessibility violations
- Detailed explanations of issues
- Suggestions for fixes
- WCAG guidelines references

## Automated Testing

1. First, start Storybook:

```bash
yarn storybook
```

2. Once Storybook is running, open a new terminal window and run the accessibility tests:

```bash
yarn test:storybook
```

This will:

- Test all stories for accessibility violations
- Generate detailed reports of any issues
- Integrate with CI/CD pipelines

You can also test specific components by adding a filter:

```bash
yarn test:storybook "ComponentName"
```

## Marking Stories for A11y Review

To mark components that need accessibility review or improvements, add the following to your story:

```typescript
export default {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    a11y: { test: 'todo' },
  },
};
```

## Skipping A11y Tests

You can skip accessibility tests for specific stories by setting the `a11y` parameter to `disable: true`:

```typescript
export const MyStory = {
  parameters: {
    a11y: { disable: true },
  },
  render: () => (
    // Your story content
  ),
};
```

This is useful when:

- A story is purely for visual demonstration
- The accessibility requirements are handled differently for specific variants
- You need to temporarily bypass tests while working on improvements

Note: Use this sparingly and document why the test is being skipped to maintain accessibility standards.

## References

- [Storybook Testing Documentation](https://storybook.js.org/docs/writing-tests/accessibility-testing)
- [Storybook Accessibility Addon Documentation](https://storybook.js.org/addons/@storybook/addon-a11y)
- [axe-core Rules Documentation](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
