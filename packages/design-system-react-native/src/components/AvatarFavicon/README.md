# AvatarFavicon

AvatarFavicon is used to render favicon avatars within an interface.

```tsx
import { AvatarFavicon } from '@metamask/design-system-react-native';

<AvatarFavicon imageSource={{ uri: 'https://example.com/favicon.ico' }} />;
```

## Props

### `imageSource`

The image source for the favicon.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `ImageSourcePropType` | Yes | `undefined` |

```tsx
<AvatarFavicon imageSource={{ uri: 'https://example.com/favicon.ico' }} />
```

### `size`

The size of the AvatarFavicon.

Available sizes:

- `AvatarSize.Xs` (16px)
- `AvatarSize.Sm` (24px)
- `AvatarSize.Md` (32px)
- `AvatarSize.Lg` (40px)
- `AvatarSize.Xl` (48px)

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `AvatarSize` | No | `AvatarSize.Md` |

```tsx
<AvatarFavicon 
  imageSource={{ uri: 'https://example.com/favicon.ico' }}
  size={AvatarSize.Sm}
/>
```

### `fallbackText`

Text to display when the image fails to load.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
<AvatarFavicon 
  imageSource={{ uri: 'https://example.com/favicon.ico' }}
  fallbackText="FB"
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
import { AvatarFavicon } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarFavicon 
  imageSource={{ uri: 'https://example.com/favicon.ico' }}
  twClassName="border-2 border-primary-100"
>
  Custom Border
</AvatarFavicon>

// Override default styles
<AvatarFavicon 
  imageSource={{ uri: 'https://example.com/favicon.ico' }}
  twClassName="!bg-error-100"
>
  Override Background
</AvatarFavicon>
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
  },
});

export const StyleExample = () => (
  <AvatarFavicon 
    imageSource={{ uri: 'https://example.com/favicon.ico' }}
    style={styles.custom}
  />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
