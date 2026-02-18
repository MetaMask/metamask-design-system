# Maskicon

Maskicon is used to render unique SVG identicons derived from blockchain addresses within an interface.

```tsx
import { Maskicon } from '@metamask/design-system-react-native';

<Maskicon address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />;
```

## Props

### `address`

The blockchain address used as the seed to generate the Maskicon.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | Yes      | `undefined` |

```tsx
<Maskicon address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
```

### `size`

The size (width and height) of the Maskicon.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `32`    |

```tsx
<Maskicon address="0x360507dfEC4Bf0c03495f91154A78C672599F308" size={48} />
```

### `showBorder`

Whether to show a border around the Maskicon.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Maskicon address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" showBorder />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Maskicon } from '@metamask/design-system-react-native';

// Add additional styles
<Maskicon
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  twClassName="border-2 border-primary-100"
/>

// Override default styles
<Maskicon
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  twClassName="!rounded-lg"
/>
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
  <Maskicon
    address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
    style={styles.custom}
  />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
