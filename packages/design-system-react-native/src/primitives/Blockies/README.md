# Blockies

The `Blockies` component generates a unique, consistent, and visually distinct icon based on an Ethereum address. It acts as a wrapper around the `Image` component, using [`toDataUrl`](#) to generate a base64-encoded blocky avatar.

---

## Props

The `Blockies` component accepts the following props:

### `address` (Required)

A string address used as a unique identifier to generate the Blockies avatar. This ensures that the same input always produces the same avatar.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | Yes      | `N/A`   |

---

### `size` (Optional)

Defines the size of the Blockies avatar in pixels. Defaults to `32`.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `number` | No       | `32`    |

---

### Other Props

`Blockies` supports all other props from [`Image`](https://reactnative.dev/docs/image) except `source`, `width`, and `height`. This includes:

- **`resizeMode`** – Controls how the image is resized within the container.
- **`style`** – Custom styles for the image.
- **`testID`** – Identifier used for testing purposes.
- Any other valid `ImageProps`.

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import Blockies from '@your-library/blockies';

const App = () => <Blockies address="0x123456789abcdef" />;

export default App;
```

---

### Custom Size

```tsx
import React from 'react';
import Blockies from '@your-library/blockies';

const App = () => <Blockies address="0x123456789abcdef" size={64} />;

export default App;
```

---

### Applying Custom Styles

```tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import Blockies from '@your-library/blockies';

const styles = StyleSheet.create({
  customBlockies: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'blue',
  },
});

const App = () => (
  <Blockies address="0xabcdef" size={50} style={styles.customBlockies} />
);

export default App;
```

---

## Notes

- **Unique Avatar Generation:**  
  `Blockies` ensures each address generates a unique, consistent avatar using [`toDataUrl`](#).
- **Size Customization:**  
  The `size` prop allows resizing of the avatar while maintaining its resolution.

- **Extensibility:**  
  Any additional `Image` props are forwarded to the underlying component for flexibility.

---

## Contributing

1. Add tests for any new features or modifications.
2. Update this README to reflect any changes in the API.
3. Follow the project's coding guidelines and best practices.

---

For further details, refer to the [React Native documentation](https://reactnative.dev/docs/image).
