# TextOrChildren

The `TextOrChildren` component is a utility component that provides flexibility to render either a `Text` component when the `children` prop is a string or render the provided child components directly.

## Props

### `children`

**Required**. Specifies the content to render. If the `children` is a string, it will render as a `Text` component with optional `textProps`. Otherwise, the child components are rendered directly.

| TYPE              | REQUIRED |
| :---------------- | :------- |
| `React.ReactNode` | Yes      |

### `textProps`

Optional props to configure the `Text` component when `children` is a string. This prop is ignored if `children` is not a string.

| TYPE                                   | REQUIRED | DEFAULT |
| :------------------------------------- | :------- | :------ |
| `Partial<Omit<TextProps, 'children'>>` | No       | `{}`    |

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import TextOrChildren from '@metamask/design-system-react-native/lib/components/TextOrChildren';

// Render string as Text component
<TextOrChildren>String Content</TextOrChildren>;

// Render nested children directly
<TextOrChildren>
  <CustomComponent>Nested Content</CustomComponent>
</TextOrChildren>;
```

### With `textProps`

```tsx
<TextOrChildren
  textProps={{ variant: TextVariant.BodyMd, color: TextColor.PrimaryDefault }}
>
  Styled Text
</TextOrChildren>
```

### Handling Conditional Rendering

```tsx
<TextOrChildren>
  {condition ? 'This is a string' : <CustomComponent />}
</TextOrChildren>
```

---

## Notes

- The `TextOrChildren` component ensures that string content adheres to consistent typography by wrapping it in the `Text` component.
- When using `textProps`, ensure the props are valid for the `Text` component.
- If `children` is not a string, all other props are ignored, and the child components are rendered as-is.

---

## Accessibility

- The `Text` component renders with appropriate accessibility props (e.g., `accessibilityRole="text"`) for string content.
- Ensure any custom child components used with `TextOrChildren` have appropriate accessibility attributes.

---

## Contributing

When contributing to the `TextOrChildren` component:

1. Add tests for any new functionality or props.
2. Update the README file to reflect changes.
3. Maintain consistency with the design system's guidelines.

---

For questions or further assistance, refer to the [React Native Text documentation](https://reactnative.dev/docs/text) or contact the maintainers of the design system.
