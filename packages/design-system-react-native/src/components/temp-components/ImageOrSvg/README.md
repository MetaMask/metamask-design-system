# ImageOrSvg

The `ImageOrSvg` component is a flexible image component that supports local and remote images, as well as local and remote SVGs, ensuring proper rendering in React Native applications.

---

## Props

### `src` (Required)

The source of the image or SVG. It determines whether a local image, a local SVG component, or a remote image/SVG (via URI) is rendered.

| TYPE                                                    | REQUIRED | DEFAULT |
| :------------------------------------------------------ | :------- | :------ |
| `number \| ComponentType<SvgProps> \| { uri?: string }` | Yes      | `N/A`   |

---

### `width`

Optional prop to set the width of the image/SVG.
Accepts numbers (pixels) or string values (like percentages).

| TYPE               | REQUIRED | DEFAULT |
| :----------------- | :------- | :------ |
| `number \| string` | No       | `N/A`   |

---

### `height`

Optional prop to set the height of the image/SVG.
Accepts numbers (pixels) or string values (like percentages).

| TYPE               | REQUIRED | DEFAULT |
| :----------------- | :------- | :------ |
| `number \| string` | No       | `N/A`   |

---

### `onImageLoad`

Optional callback triggered when the image has loaded successfully.

| TYPE                                                        | REQUIRED | DEFAULT |
| :---------------------------------------------------------- | :------- | :------ |
| `(event: NativeSyntheticEvent<ImageLoadEventData>) => void` | No       | `N/A`   |

---

### `onImageError`

Optional callback triggered when there is an error rendering the image.

| TYPE                                                              | REQUIRED | DEFAULT |
| :---------------------------------------------------------------- | :------- | :------ |
| `(errorEvent: NativeSyntheticEvent<ImageErrorEventData>) => void` | No       | `N/A`   |

---

### `onSvgError`

Optional callback triggered when there is an error rendering the SVG.

| TYPE                     | REQUIRED | DEFAULT |
| :----------------------- | :------- | :------ |
| `(error: Error) => void` | No       | `N/A`   |

---

### `style`

Optional prop for style overrides for the image/SVG container.

| TYPE                    | REQUIRED | DEFAULT |
| :---------------------- | :------- | :------ |
| `StyleProp<ImageStyle>` | No       | `null`  |

---

### `imageProps`

Additional props to pass to the `Image` component, excluding the `source` prop (which is handled separately).

| TYPE                         | REQUIRED | DEFAULT |
| :--------------------------- | :------- | :------ |
| `Omit<ImageProps, 'source'>` | No       | `{}`    |

---

### `svgProps`

Additional props to pass to the `Svg` component, excluding the `uri` prop (which is handled separately).

| TYPE                    | REQUIRED | DEFAULT |
| :---------------------- | :------- | :------ |
| `Omit<SvgProps, 'uri'>` | No       | `{}`    |

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import ImageOrSvg from '@metamask/design-system-react-native';

<ImageOrSvg
  src={{ uri: 'https://example.com/image.png' }}
  width={100}
  height={100}
/>;
```

---

### Local Image

```tsx
import React from 'react';
import { ImageOrSvg } from '@metamask/design-system-react-native';
import localImage from '../assets/image.png';

<ImageOrSvg src={localImage} width={100} height={100} />;
```

---

### Local SVG

```tsx
import React from 'react';
import { ImageOrSvg } from '@metamask/design-system-react-native';
import LocalSvg from '../assets/icon.svg';

<ImageOrSvg src={LocalSvg} width={50} height={50} />;
```

---

### Handling Errors

```tsx
<ImageOrSvg
  src={{ uri: 'https://example.com/image.svg' }}
  width={100}
  height={100}
  onImageError={() => console.log('Image failed to load')}
  onSvgError={() => console.log('SVG failed to load')}
/>
```

---

### Accessibility

- Use meaningful `alt` descriptions for SVGs and images when possible.
- Ensure proper fallback strategies for failed image/SVG loads.

---

### Notes

- `ImageOrSvg` detects content type dynamically for remote sources.
- Local and remote images and SVGs are supported without additional dependencies.
- Uses `fetch` to determine if a URI corresponds to an SVG when necessary.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
