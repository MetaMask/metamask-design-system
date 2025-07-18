# Blockies

Blockies is used to generate unique, consistent blocky avatars based on Ethereum addresses within an interface.

```tsx
import { Blockies } from '@metamask/design-system-react-native';

<Blockies address="0x123456789abcdef" />;
```

## Props

### `address`

A string address used as a unique identifier to generate the Blockies avatar.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | Yes | `undefined` |

```tsx
<Blockies address="0x123456789abcdef" />
```

### `size`

The size of the Blockies avatar in pixels.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number` | No | `32` |

```tsx
<Blockies address="0x123456789abcdef" size={64} />
```

### `scale`

The scale factor for the blocky pattern.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number` | No | `3` |

```tsx
<Blockies 
  address="0x123456789abcdef" 
  scale={4}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
import { Blockies } from '@metamask/design-system-react-native';

// Add additional styles
<Blockies 
  address="0x123456789abcdef"
  twClassName="border-2 border-primary-100"
>
  Custom Border
</Blockies>

// Override default styles
<Blockies 
  address="0x123456789abcdef"
  twClassName="!rounded-lg"
>
  Rounded Avatar
</Blockies>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `StyleProp<ViewStyle>` | No | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});

export const StyleExample = () => (
  <Blockies 
    address="0x123456789abcdef" 
    style={styles.custom}
  />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
