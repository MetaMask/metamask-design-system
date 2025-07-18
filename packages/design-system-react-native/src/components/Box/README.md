# Box

Box is used to render flexible container elements within an interface.

```tsx
import { Box } from '@metamask/design-system-react-native';

<Box>Default Box</Box>;
```

## Props

### `children`

The content of the Box component.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Box } from '@metamask/design-system-react-native';

<Box>Custom box content</Box>;
```

### `backgroundColor`

Background color of the box.

| TYPE              | REQUIRED | DEFAULT                       |
| ----------------- | -------- | ----------------------------- |
| `BackgroundColor` | No       | `BackgroundColor.Transparent` |

```tsx
<Box backgroundColor={BackgroundColor.BackgroundDefault}>
  Box with background color
</Box>
```

### `borderColor`

Border color of the box.

| TYPE          | REQUIRED | DEFAULT                   |
| ------------- | -------- | ------------------------- |
| `BorderColor` | No       | `BorderColor.Transparent` |

```tsx
<Box borderColor={BorderColor.BorderDefault}>Box with border</Box>
```

### `borderRadius`

Border radius of the box.

| TYPE           | REQUIRED | DEFAULT             |
| -------------- | -------- | ------------------- |
| `BorderRadius` | No       | `BorderRadius.None` |

```tsx
<Box borderRadius={BorderRadius.MD}>Box with rounded corners</Box>
```

### `padding`

Padding inside the box.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `0`     |

```tsx
<Box padding={16}>Box with padding</Box>
```

### `margin`

Margin outside the box.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `0`     |

```tsx
<Box margin={16}>Box with margin</Box>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Box } from '@metamask/design-system-react-native';

// Add additional styles
<Box twClassName="p-4 m-2">
  Custom Padding and Margin
</Box>

// Override default styles
<Box twClassName="!bg-error-100">
  Override Background
</Box>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <Box style={styles.custom}>Custom styled box</Box>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
