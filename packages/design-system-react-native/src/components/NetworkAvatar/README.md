# AvatarNetwork

Avatar reserved for representing networks.

```tsx
import { AvatarNetwork } from '@metamask/design-system-react-native';

<AvatarNetwork name="ethereum" />;
```

## Props

### `name`

The network name for the avatar.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<AvatarNetwork name="ethereum" />
```

### `size`

The size of the AvatarNetwork.

Available sizes:

- `AvatarBaseSize.Xs` (16px)
- `AvatarBaseSize.Sm` (24px)
- `AvatarBaseSize.Md` (32px)
- `AvatarBaseSize.Lg` (40px)
- `AvatarBaseSize.Xl` (48px)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `AvatarBaseSize` | No       | `AvatarBaseSize.Md` |

```tsx
<AvatarNetwork name="ethereum" size={AvatarBaseSize.Sm} />
<AvatarNetwork name="ethereum" />
<AvatarNetwork name="ethereum" size={AvatarBaseSize.Lg} />
```

### `src`

Custom image source for the network avatar.

| TYPE            | REQUIRED | DEFAULT     |
| --------------- | -------- | ----------- |
| `ImageOrSvgSrc` | No       | `undefined` |

```tsx
<AvatarNetwork
  name="custom-network"
  src={{ uri: 'https://example.com/network-icon.png' }}
/>
```

### `fallbackText`

Text to display when the network image fails to load.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<AvatarNetwork name="ethereum" fallbackText="ETH" />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { AvatarNetwork } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarNetwork
  name="ethereum"
  twClassName="border-2 border-primary-100"
/>

// Override default styles
<AvatarNetwork
  name="ethereum"
  twClassName="!bg-error-100"
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
  <AvatarNetwork name="ethereum" style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
