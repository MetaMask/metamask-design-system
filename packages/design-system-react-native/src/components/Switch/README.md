# Switch

`Switch` allows users to toggle between two states (on/off). Use it for binary settings such as enabling notifications or turning a feature on or off.

_Developer Note: This is a fully controlled component, requiring you to manage the state with `isOn` and `onValueChange` props._

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

### `onValueChange`

Required callback function triggered when the switch value changes. Use this to update your state.

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `(value: boolean) => void` | Yes      | `undefined` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch isOn={isOn} onValueChange={setIsOn} label="Toggle me" />;
```

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

### `label`

Optional label that renders text beside the switch. When `label` is a string and `accessibilityLabel` is omitted, that string is also the switch's accessible name. The visible label is hidden from screen readers when the switch has an accessible name, so it is not announced twice.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch isOn={isOn} onValueChange={setIsOn} label="Enable feature" />;
```

### `accessibilityLabel`

Accessible name for the switch. Use this when the switch has no visible label, or when the announced name should differ from the visible text. It takes precedence over `label`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch
  isOn={isOn}
  onValueChange={setIsOn}
  accessibilityLabel="Enable notifications"
/>;
```

### `testID`

Optional test id forwarded to the native switch. The row that wraps the label and the switch does not receive this id.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch
  isOn={isOn}
  onValueChange={setIsOn}
  label="Enable notifications"
  testID="notifications-switch"
/>;
```

### `style`

Use the `style` prop to customize the native switch appearance with React Native styles.

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

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
