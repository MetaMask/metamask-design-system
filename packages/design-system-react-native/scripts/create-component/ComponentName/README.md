# ComponentName

the component description

_Developer Note: ComponentName is a React Native component that follows the design system patterns and guidelines._

---

## Props

### `children`

The content to be rendered within the ComponentName.

| TYPE         | REQUIRED | DEFAULT     |
| :----------- | :------- | :---------- |
| `ReactNode`  | No       | `undefined` |

---

### `twClassName`

Additional Tailwind CSS classes to be applied to the ComponentName component.

| TYPE     | REQUIRED | DEFAULT     |
| :------- | :------- | :---------- |
| `string` | No       | `undefined` |

Use this prop to apply custom styling to the component. The classes will be processed by the React Native Tailwind processor.

---

### `style`

Inline styles to be applied to the ComponentName component.

| TYPE           | REQUIRED | DEFAULT     |
| :------------- | :------- | :---------- |
| `ViewStyle`    | No       | `undefined` |

The style prop should primarily be used for dynamic inline styles that cannot be achieved with `twClassName` alone. For static styles, prefer using `twClassName` with Tailwind classes.

---

### Other Props

`ComponentName` supports all props from React Native's `View` component except those explicitly overridden. This includes:

- Accessibility props (`accessibilityLabel`, `accessibilityRole`, etc.)
- Touch handling props (`onPress`, `onLongPress`, etc.) when applicable
- Layout props (`testID`, `nativeID`, etc.)

---

## Accessibility

`ComponentName` is built with accessibility in mind. The following React Native accessibility props can be passed:

- **`accessibilityLabel`**: Use to describe the ComponentName for screen readers.
- **`accessibilityRole`**: Set to an appropriate role based on the component's function.
- **`accessibilityHint`**: Provide additional context if the component triggers an action.
- **`accessible`**: Set to `true` to make the component focusable by assistive technologies.

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import { ComponentName } from '@metamask/design-system-react-native';

<ComponentName>
  Basic ComponentName content
</ComponentName>
```

---

### With Custom Styling

```tsx
<ComponentName
  twClassName="bg-primary-default p-4 rounded-lg"
  style={{ marginTop: 16 }}
>
  Styled ComponentName
</ComponentName>
```

---

### With Accessibility

```tsx
<ComponentName
  accessibilityLabel="ComponentName description"
  accessibilityRole="text"
  testID="component-name"
>
  Accessible ComponentName
</ComponentName>
```

---

## Notes

- `ComponentName` uses React Native's `View` component as its base.
- The component follows the design system's theming and styling patterns.
- All React Native `View` props are supported unless explicitly overridden.

---

## Contributing

1. Add tests for new features or changes.
2. Update this README for any changes to the component API.
3. Follow the design system's coding guidelines and patterns.
4. Ensure accessibility compliance when making changes.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs), the design system guidelines, or contact the maintainers of the design system.