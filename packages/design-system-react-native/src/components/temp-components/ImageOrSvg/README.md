# ImageOrSvg

ImageOrSvg is used to render flexible image and SVG elements within an interface.

```tsx
import { ImageOrSvg } from '@metamask/design-system-react-native';

<ImageOrSvg src={{ uri: 'https://example.com/image.png' }} />;
```

## Props

### `src`

The source of the image or SVG to render.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number \| ComponentType<SvgProps> \| { uri?: string }` | Yes | `undefined` |

```tsx
<ImageOrSvg src={{ uri: 'https://example.com/image.png' }} />
<ImageOrSvg src={require('./local-image.png')} />
```

### `width`

The width of the image or SVG.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number \| string` | No | `undefined` |

```tsx
<ImageOrSvg 
  src={{ uri: 'https://example.com/image.png' }}
  width={100}
/>
```

### `height`

The height of the image or SVG.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number \| string` | No | `undefined` |

```tsx
<ImageOrSvg 
  src={{ uri: 'https://example.com/image.png' }}
  height={100}
/>
```

### `onImageLoad`

Callback triggered when the image has loaded successfully.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `(event: NativeSyntheticEvent<ImageLoadEventData>) => void` | No | `undefined` |

```tsx
<ImageOrSvg 
  src={{ uri: 'https://example.com/image.png' }}
  onImageLoad={() => console.log('Image loaded')}
/>
```

### `onImageError`

Callback triggered when there is an error loading the image.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `(errorEvent: NativeSyntheticEvent<ImageErrorEventData>) => void` | No | `undefined` |

```tsx
<ImageOrSvg 
  src={{ uri: 'https://example.com/image.png' }}
  onImageError={() => console.log('Image error')}
/>
```

### `onSvgError`

Callback triggered when there is an error loading the SVG.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `(error: Error) => void` | No | `undefined` |

```tsx
<ImageOrSvg 
  src={{ uri: 'https://example.com/image.svg' }}
  onSvgError={() => console.log('SVG error')}
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
import { ImageOrSvg } from '@metamask/design-system-react-native';

// Add additional styles
<ImageOrSvg 
  src={{ uri: 'https://example.com/image.png' }}
  twClassName="border-2 border-primary-100"
>
  Custom Border
</ImageOrSvg>

// Override default styles
<ImageOrSvg 
  src={{ uri: 'https://example.com/image.png' }}
  twClassName="!rounded-lg"
>
  Rounded Image
</ImageOrSvg>
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
  <ImageOrSvg 
    src={{ uri: 'https://example.com/image.png' }}
    style={styles.custom}
  />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
