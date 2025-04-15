# Spinner

The `Spinner` component is a loading indicator designed for React Native applications. It displays a spinning icon, optionally accompanied by text, to indicate a loading state.

## Props

### `color`

Optional prop that sets the color of the spinner icon using predefined theme colors.

| TYPE        | REQUIRED | DEFAULT                 |
| :---------- | :------- | :---------------------- |
| `IconColor` | No       | `IconColor.IconDefault` |

Available `IconColor` options include:

- `IconDefault`
- `PrimaryDefault`
- `SuccessDefault`
- `ErrorDefault`
- ...and more, as defined in the `IconColor` enum.

### `loadingText`

Optional text to display to the right of the spinner, providing additional context or information about the loading state.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `null`  |

### `loadingTextProps`

Optional props to customize the appearance of the `loadingText`. These are passed directly to the `Text` component.

| TYPE                 | REQUIRED | DEFAULT |
| :------------------- | :------- | :------ |
| `Partial<TextProps>` | No       | `{}`    |

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import Spinner from '@metamask/design-system-react-native';

// Render a spinner with default settings
<Spinner />;
```

### Customizing the Spinner Color

```tsx
<Spinner color={IconColor.PrimaryDefault} />
```

### Adding Loading Text

```tsx
<Spinner loadingText="Loading data..." />
```

### Customizing the Loading Text

```tsx
<Spinner
  loadingText="Loading data..."
  loadingTextProps={{
    variant: TextVariant.BodyMd,
    color: TextColor.PrimaryDefault,
  }}
/>
```

### Combining Props

```tsx
<Spinner
  color="SuccessDefault"
  loadingText="Success!"
  loadingTextProps={{
    variant: TextVariant.BodyMd,
    color: TextColor.PrimaryDefault,
  }}
/>
```

---

## Accessibility

- Ensure the `loadingText` prop provides meaningful information about the loading state for users of assistive technologies.
- Use the `loadingTextProps` to set accessibility roles or labels if needed.

---

## Notes

- The `Spinner` component uses `react-native-reanimated` for smooth animations.
- The spinning icon animation is implemented using `useSharedValue` and `useAnimatedStyle`.
- For custom styling of the spinner, use the `Icon` component directly if necessary.

---

## Contributing

When contributing to the `Spinner` component:

1. Ensure any new features or props are accompanied by tests.
2. Update this README file to document the changes.
3. Maintain consistency with the design system's guidelines.

---

For questions or further assistance, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
