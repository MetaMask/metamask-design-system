# Jazzicon

The `Jazzicon` component is a lightweight wrapper around [`react-native-jazzicon`](https://github.com/novinyll/react-native-jazzicon) that provides an easy-to-use interface for rendering unique, visually appealing icons based on a seed or address value. This component is especially useful for representing users, tokens, or any entities where a consistent yet unique icon is desired.

---

## Props

The `Jazzicon` component accepts all props provided by [`react-native-jazzicon`](#). The key props include:

### `size` (Optional)

Defines the size of the Jazzicon in pixels.

| TYPE     | REQUIRED | DEFAULT     |
| :------- | :------- | :---------- |
| `number` | No       | `undefined` |

---

### `address` (Optional)

A string address used as a unique identifier to generate the Jazzicon. This provides a consistent and visually unique icon.

| TYPE     | REQUIRED | DEFAULT     |
| :------- | :------- | :---------- |
| `string` | No       | `undefined` |

---

### `seed` (Optional)

A unique numeric value used to generate a consistent and unique icon. If both `address` and `seed` are provided, `address` takes precedence.

| TYPE     | REQUIRED | DEFAULT     |
| :------- | :------- | :---------- |
| `number` | No       | `undefined` |

---

### `containerStyle` (Optional)

Allows customization of the container's style using a React Native `StyleProp<ViewStyle>`.

| TYPE                   | REQUIRED | DEFAULT     |
| :--------------------- | :------- | :---------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

---

### Other Props

`Jazzicon` supports all other properties available in [`react-native-jazzicon`](#), such as:

- **`testID`** – Identifier used for testing purposes.
- Any additional props will be forwarded to the underlying `RNJazzicon` component.

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import Jazzicon from '@your-library/jazzicon';

const App = () => <Jazzicon seed={123} size={50} />;

export default App;
```

---

### Using an Address

```tsx
import React from 'react';
import Jazzicon from '@your-library/jazzicon';

const App = () => <Jazzicon address="0x123456789abcdef" size={40} />;

export default App;
```

---

### Customizing the Container Style

```tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import Jazzicon from '@your-library/jazzicon';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'lightgrey',
  },
});

const App = () => (
  <Jazzicon seed={789} size={60} containerStyle={styles.container} />
);

export default App;
```

---

## Notes

- **Wrapper Functionality:**  
  `Jazzicon` is a thin wrapper around [`react-native-jazzicon`](#), ensuring that all props are seamlessly passed through to the underlying component.
- **Key Props:**  
  The `address` or `seed` prop is essential for generating a unique icon, while the `size` defines its dimensions. The optional `containerStyle` prop provides additional styling.

- **Extensibility:**  
  Any prop supported by `react-native-jazzicon` can be applied to `Jazzicon`, making it flexible for various use cases.

---

## Contributing

1. Add tests for any new features or modifications.
2. Update this README to reflect any changes in the API.
3. Follow the project's coding guidelines and best practices.

---

For further details, please refer to the [React Native documentation](https://reactnative.dev/docs) or the [`react-native-jazzicon` documentation](https://github.com/novinyll/react-native-jazzicon).
