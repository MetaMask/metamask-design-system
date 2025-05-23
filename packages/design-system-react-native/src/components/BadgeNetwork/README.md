# BadgeNetwork

`BadgeNetwork` indicates the network an entity is connected to.

---

## Props

The `BadgeNetwork` component accepts the following props:

### `src` (Required)

The source of the image or SVG. It determines whether a local image, a local SVG component, or a remote image/SVG (via URI) is rendered.

| TYPE                                                    | REQUIRED | DEFAULT |
| :------------------------------------------------------ | :------- | :------ |
| `number \| ComponentType<SvgProps> \| { uri?: string }` | Yes      | `N/A`   |

---

### `name` (Optional)

Used to generate fallback text when the image or SVG fails to load.

| TYPE     | REQUIRED | DEFAULT     |
| :------- | :------- | :---------- |
| `string` | No       | `undefined` |

---

### `fallbackText` (Optional)

Custom fallback text displayed when the image fails to load.

| TYPE     | REQUIRED | DEFAULT     |
| :------- | :------- | :---------- |
| `string` | No       | `name?.[0]` |

---

### `fallbackTextProps` (Optional)

Additional props for customizing the fallback text.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `object` | No       | `{}`    |

---

### `imageProps` (Optional)

Additional properties for the image component.

| TYPE         | REQUIRED | DEFAULT                     |
| :----------- | :------- | :-------------------------- |
| `ImageProps` | No       | `{ resizeMode: 'contain' }` |

---

### `onImageError` (Optional)

Callback function triggered when the image fails to load.

| TYPE                                                     | REQUIRED | DEFAULT     |
| :------------------------------------------------------- | :------- | :---------- |
| `(e: NativeSyntheticEvent<ImageErrorEventData>) => void` | No       | `undefined` |

---

### `onSvgError` (Optional)

Callback function triggered when the SVG fails to load.

| TYPE               | REQUIRED | DEFAULT     |
| :----------------- | :------- | :---------- |
| `(e: any) => void` | No       | `undefined` |

---

### Other Props

`BadgeNetwork` supports all other props from [`AvatarNetwork`](#) and [`ImageOrSvg`](#), such as:

- **`twClassName`** – Tailwind class names for styling.
- **`testID`** – Identifier used for testing purposes.
- **`style`** – Custom styles for the Badge container.

---

## Accessibility

To ensure proper accessibility, the following React Native accessibility props can be passed:

- **`accessibilityLabel`**: Describes the Badge for screen readers.
- **`accessible`**: Set to `true` if the Badge represents meaningful content.

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import BadgeNetwork from '@metamask/design-system-react-native/badge-network';

const App = () => (
  <BadgeNetwork
    name="MetaMask"
    source={{ uri: 'https://example.com/network.png' }}
  />
);

export default App;
```

---

### Handling Image Errors

```tsx
import React from 'react';
import BadgeNetwork from '@metamask/design-system-react-native/badge-network';

const handleError = () => {
  console.log('Image failed to load');
};

const App = () => (
  <BadgeNetwork
    name="ETH"
    source={{ uri: 'https://invalid-url.com' }}
    onImageError={handleError}
  />
);

export default App;
```

---

## Notes

- **Fallback Mechanism:**  
  If an image or SVG fails to load, the component falls back to displaying text derived from the `name` prop.
- **Customization:**  
  Supports various props for shape, size, and additional styling.

- **Extensibility:**  
  Any additional `ImageOrSvg` props are forwarded for greater flexibility.

---

## Contributing

1. Add tests for any new features or modifications.
2. Update this README to reflect any changes in the API.
3. Follow the project's coding guidelines and best practices.

---

For further details, refer to the [React Native documentation](https://reactnative.dev/docs/image).
