# ButtonBase

The `ButtonBase` component is a foundational button component designed to provide flexibility and customization for various button styles and use cases. It integrates animations, icons, and loading states, allowing developers to create versatile buttons for React Native applications.

## Props

### `children`

Content to display inside the button.

| **Type**          | **Required** | **Default** |
| ----------------- | ------------ | ----------- |
| `React.ReactNode` | Yes          | `undefined` |

### `size`

Defines the size of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- | --- | ------ |
| `'sm'    | 'md'         | 'lg'`       | No  | `'md'` |

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

### `startAccessory`

Custom accessory to render at the start of the button.

| **Type**          | **Required** | **Default** |
| ----------------- | ------------ | ----------- |
| `React.ReactNode` | No           | `undefined` |

### `endAccessory`

Custom accessory to render at the end of the button.

| **Type**          | **Required** | **Default** |
| ----------------- | ------------ | ----------- |
| `React.ReactNode` | No           | `undefined` |

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
import ButtonBase from './ButtonBase';

const App = () => {
  return (
    <ButtonBase
      size="lg"
      isLoading={false}
      loadingText="Loading..."
      startIconName="add"
      endIconName="check"
      onPress={() => console.log('Button pressed!')}
    >
      Click Me
    </ButtonBase>
  );
};

export default App;
```

## Notes

- `ButtonBase` supports animations via the `ButtonAnimated` component.
- For consistent styling, use TailwindCSS class names with the `twClassName` prop.
- Loading and disabled states are handled automatically to improve UX.
