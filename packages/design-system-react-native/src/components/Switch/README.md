# Switch

`Switch` allows users to toggle between two states (on/off).

_Developer Note: This is a fully controlled component, requiring you to manage the state with `isOn` and `onValueChange` props._

_Platform Note: This component wraps React Native's native `Switch` and automatically applies a margin fix on iOS to correct visual alignment issues when placed in flex containers with `justifyContent: 'space-between'`._

```tsx
import { Switch } from '@metamask/design-system-react-native';
import { useState } from 'react';

function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      label="Enable notifications"
      isOn={isEnabled}
      onValueChange={setIsEnabled}
    />
  );
}
```

## Props

### `isOn`

Required prop to determine whether the switch is currently on. This component is fully controlled, so you must manage this state in your parent component.

| TYPE      | REQUIRED | DEFAULT     |
| --------- | -------- | ----------- |
| `boolean` | Yes      | `undefined` |

```tsx
const [isOn, setIsOn] = useState(true);

<Switch isOn={isOn} onValueChange={setIsOn} label="Enabled by default" />;
```

---

### `onValueChange`

Required callback function triggered when the switch value changes. Use this to update your state.

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `(value: boolean) => void` | Yes      | `undefined` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch isOn={isOn} onValueChange={setIsOn} label="Toggle me" />;
```

---

### `isDisabled`

Optional prop that when true, disables the switch.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch
  isOn={isOn}
  onValueChange={setIsOn}
  isDisabled
  label="Disabled switch"
/>;
```

---

### `label`

Optional label prop that renders text beside the switch.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch isOn={isOn} onValueChange={setIsOn} label="Enable feature" />;
```

---

### `style`

Custom styles for the native `Switch` component.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch
  isOn={isOn}
  onValueChange={setIsOn}
  label="Styled"
  style={{ transform: [{ scale: 0.8 }] }}
/>;
```

---

## iOS Alignment Fix

React Native's native `Switch` component on iOS includes invisible built-in trailing padding. This causes visual misalignment when the switch is placed inside a `flexDirection: 'row'` / `justifyContent: 'space-between'` container - the switch appears shifted to the left compared to Android.

This component automatically applies a `marginRight: 4` fix on iOS to correct this alignment issue, ensuring consistent visual appearance across both platforms.

---

## Accessibility

The Switch component includes proper accessibility support:

- `accessibilityRole="switch"` is set automatically
- `accessibilityState` includes `checked` and `disabled` states
- `accessibilityLabel` is set to the `label` prop value when provided

---

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
