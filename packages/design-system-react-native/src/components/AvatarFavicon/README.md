# AvatarFavicon

Avatar reserved for representing websites and dapps.

```tsx
import { AvatarFavicon } from '@metamask/design-system-react-native';

<AvatarFavicon src={{ uri: 'https://example.com/favicon.ico' }} />;
```

## Props

### `src`

Optional prop for the source of the image or SVG.

| TYPE            | REQUIRED | DEFAULT     |
| --------------- | -------- | ----------- |
| `ImageOrSvgSrc` | No       | `undefined` |

```tsx
// Remote image
<AvatarFavicon src={{ uri: 'https://example.com/favicon.ico' }} />

// Local image
<AvatarFavicon src={require('./favicon.png')} />

// Local SVG component
import FaviconSVG from './favicon.svg';
<AvatarFavicon src={FaviconSVG} />
```

### `name`

Optional prop for favicon name, used to calculate fallback text when image fails to load.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<AvatarFavicon
  src={{ uri: 'https://example.com/favicon.ico' }}
  name="Example Website"
/>
```

### `size`

The size of the AvatarFavicon.

Available sizes:

- `AvatarFaviconSize.Xs` (16px)
- `AvatarFaviconSize.Sm` (24px)
- `AvatarFaviconSize.Md` (32px)
- `AvatarFaviconSize.Lg` (40px)
- `AvatarFaviconSize.Xl` (48px)

| TYPE                | REQUIRED | DEFAULT                |
| ------------------- | -------- | ---------------------- |
| `AvatarFaviconSize` | No       | `AvatarFaviconSize.Md` |

```tsx
<AvatarFavicon
  src={{ uri: 'https://example.com/favicon.ico' }}
  size={AvatarFaviconSize.Sm}
/>
```

### `fallbackText`

Optional text to display when the image fails to load.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<AvatarFavicon
  src={{ uri: 'https://example.com/favicon.ico' }}
  fallbackText="EX"
/>
```

### `imageOrSvgProps`

Optional props to pass to the underlying ImageOrSvg component.

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ImageOrSvgProps>` | No       | `undefined` |

```tsx
<AvatarFavicon
  src={{ uri: 'https://example.com/favicon.ico' }}
  imageOrSvgProps={{
    onImageLoad: () => console.log('Image loaded'),
    onImageError: () => console.log('Image failed to load'),
  }}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { AvatarFavicon } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarFavicon
  src={{ uri: 'https://example.com/favicon.ico' }}
  twClassName="border-2 border-primary-100"
/>

// Override default styles
<AvatarFavicon
  src={{ uri: 'https://example.com/favicon.ico' }}
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
  <AvatarFavicon
    src={{ uri: 'https://example.com/favicon.ico' }}
    style={styles.custom}
  />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
