# AvatarToken

Avatar reserved for representing tokens.

```tsx
import { AvatarToken } from '@metamask/design-system-react-native';

<AvatarToken name="ethereum" />;
```

## Props

### `name`

The token name for the avatar.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | Yes      | `undefined` |

```tsx
<AvatarToken name="ethereum" />
```

### `size`

The size of the AvatarToken.

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
<AvatarToken name="ethereum" size={AvatarBaseSize.Sm} />
<AvatarToken name="ethereum" />
<AvatarToken name="ethereum" size={AvatarBaseSize.Lg} />
```

### `src`

Custom image source for the token avatar.

| TYPE            | REQUIRED | DEFAULT     |
| --------------- | -------- | ----------- |
| `ImageOrSvgSrc` | No       | `undefined` |

```tsx
<AvatarToken
  name="custom-token"
  src={{ uri: 'https://example.com/token-icon.png' }}
/>
```

### `fallbackText`

Text to display when the token image fails to load.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<AvatarToken name="ethereum" fallbackText="ETH" />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { AvatarToken } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarToken
  name="ethereum"
  twClassName="border-2 border-primary-100"
/>

// Override default styles
<AvatarToken
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
  <AvatarToken name="ethereum" style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
