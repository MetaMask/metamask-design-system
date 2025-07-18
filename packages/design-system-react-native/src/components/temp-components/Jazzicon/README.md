# Jazzicon

Jazzicon is used to render unique, visually appealing identicon avatars based on seed or address values within an interface.

```tsx
import { Jazzicon } from '@metamask/design-system-react-native';

<Jazzicon seed={123} size={50} />;
```

## Props

### `size`

The size of the Jazzicon in pixels.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `40`    |

```tsx
<Jazzicon seed={123} size={50} />
```

### `address`

A string address used as a unique identifier to generate the Jazzicon.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Jazzicon address="0x123456789abcdef" size={40} />
```

### `seed`

A unique numeric value used to generate a consistent and unique icon.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `number` | No       | `undefined` |

```tsx
<Jazzicon seed={789} size={60} />
```

### `diameter`

Alternative prop for size (for compatibility with react-native-jazzicon).

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `number` | No       | `undefined` |

```tsx
<Jazzicon seed={123} diameter={50} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Jazzicon } from '@metamask/design-system-react-native';

// Add additional styles
<Jazzicon
  seed={123}
  twClassName="border-2 border-primary-100"
>
  Custom Border
</Jazzicon>

// Override default styles
<Jazzicon
  seed={123}
  twClassName="!rounded-lg"
>
  Rounded Jazzicon
</Jazzicon>
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
    borderRadius: 10,
  },
});

export const StyleExample = () => <Jazzicon seed={789} style={styles.custom} />;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
