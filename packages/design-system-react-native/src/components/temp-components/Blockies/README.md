# Blockies

Blockies is used to generate unique, consistent blocky avatars based on Ethereum addresses within an interface.

```tsx
import { Blockies } from '@metamask/design-system-react-native';

<Blockies address="0x123456789abcdef" />;
```

## Props

### `address`

A string address used as a unique identifier to generate the Blockies avatar.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | Yes      | `undefined` |

```tsx
<Blockies address="0x123456789abcdef" />
```

### `size`

The size of the Blockies avatar in pixels.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `32`    |

```tsx
<Blockies address="0x123456789abcdef" size={64} />
```

### `scale`

The scale factor for the blocky pattern.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `3`     |

```tsx
<Blockies address="0x123456789abcdef" scale={4} />
```

### `className`

Use the `className` prop to add Tailwind CSS classes to the component. These classes are applied after the component's default classes, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Blockies } from '@metamask/design-system-react-native';

// Add additional styles
<Blockies
  address="0x123456789abcdef"
  className="border-2 border-primary-100"
/>

// Override default styles
<Blockies
  address="0x123456789abcdef"
  className="!rounded-lg"
/>
```

> **Migrating from `twClassName`:** `twClassName` still works but is deprecated. Rename it to `className`. If both are passed, classes merge in this order: the component's own classes, then `twClassName`, then `className`, so `className` wins on conflicts.

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `className` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});

export const StyleExample = () => (
  <Blockies address="0x123456789abcdef" style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
