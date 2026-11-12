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

Optional label that renders text beside the switch. When `accessibilityLabel` is omitted or empty, this string is the switch's accessible name.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
const [isOn, setIsOn] = useState(false);

<Switch isOn={isOn} onValueChange={setIsOn} label="Enable feature" />;
```

### `accessibilityLabel`

Accessible name for the switch. Use it when there is no visible label, or to add context to a visible label. The accessible name must include the visible label text (WCAG 2.5.3 Label in Name). A non-empty value takes precedence over `label`. An empty string is treated as omitted.

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

<Switch
  isOn={isOn}
  onValueChange={setIsOn}
  label="Enable notifications"
  accessibilityLabel="Enable notifications for this account"
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
