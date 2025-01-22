# ButtonAnimated

The `ButtonAnimated` component is a React Native button with scale animation for press interactions. It utilizes `react-native-reanimated` for animations.

## Props

### `onPressIn`

Callback function triggered when the button is pressed in.

| **Type**   | **Required** | **Default** |
| ---------- | ------------ | ----------- |
| `function` | No           | `undefined` |

### `onPressOut`

Callback function triggered when the button is released.

| **Type**   | **Required** | **Default** |
| ---------- | ------------ | ----------- |
| `function` | No           | `undefined` |

### `disabled`

Disables button interactions when set to `true`.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

### `...props`

Additional props passed to the underlying `Pressable` component.

## Usage

```tsx
import React from 'react';
import ButtonAnimated from './ButtonAnimated';

const App = () => {
  return (
    <ButtonAnimated
      onPressIn={() => console.log('Pressed In')}
      onPressOut={() => console.log('Pressed Out')}
      disabled={false}
    >
      Click Me
    </ButtonAnimated>
  );
};

export default App;
```

## Notes

- The `ButtonAnimated` component supports scaling animations on press.
- Ensure to wrap the component in an appropriate layout or container for proper spacing.
