# ButtonSecondary

`ButtonSecondary` is a button for additional options that are helpful.

## Props

### `children`

Content to display inside the button.

| **Type**          | **Required** | **Default** |
| ----------------- | ------------ | ----------- |
| `React.ReactNode` | Yes          | `undefined` |

### `size`

Defines the size of the button.

| **Type**     | **Required** | **Default**     |
| ------------ | ------------ | --------------- |
| `ButtonSize` | No           | `ButtonSize.Lg` |

### `isLoading`

Indicates whether the button is in a loading state. If `true`, a spinner is displayed, and the button's content is hidden.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

### `loadingText`

Text to display alongside the spinner when the button is loading.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

### `isDisabled`

Disables the button, preventing interaction.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

### `isDanger`

Renders the button in a danger style to indicate destructive actions.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

### `isInverse`

Renders the button with inverted colors for use on dark backgrounds.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

### `startIconName`

Name of the icon to display at the start of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

### `endIconName`

Name of the icon to display at the end of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

### `twClassName`

TailwindCSS class names to apply custom styling.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

### `style`

Custom styles to apply to the button.

| **Type**               | **Required** | **Default** |
| ---------------------- | ------------ | ----------- |
| `StyleProp<ViewStyle>` | No           | `undefined` |

## Usage

```tsx
import React from 'react';
import ButtonSecondary from './ButtonSecondary';

const App = () => {
  return (
    <ButtonSecondary
      size="large"
      isLoading={false}
      loadingText="Loading..."
      startIconName="add"
      endIconName="check"
      isDanger={false}
      isInverse={false}
      onPress={() => console.log('Secondary button pressed!')}
    >
      Click Me
    </ButtonSecondary>
  );
};

export default App;
```

## Notes

- `ButtonSecondary` supports TailwindCSS classes via the `twClassName` prop for custom styling.
- The button automatically adjusts its styles based on the `isDanger` and `isInverse` props.
- Use the `isLoading` state to display a spinner and loading text, enhancing user feedback for asynchronous actions.
