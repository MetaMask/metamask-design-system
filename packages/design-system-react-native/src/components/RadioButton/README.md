# RadioButton

RadioButton is a graphical element that allows users to select one option from a set of choices.

```tsx
import { RadioButton } from '@metamask/design-system-react-native';
import { useState } from 'react';

function MyComponent() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <RadioButton
      label="Option A"
      isChecked={isChecked}
      onPress={() => setIsChecked(!isChecked)}
    />
  );
}
```

## Props

### `isChecked`

Optional prop to configure the checked state.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<RadioButton isChecked label="Selected option" onPress={handlePress} />
```

---

### `isDisabled`

Optional prop to configure the disabled state. When disabled, the radio button cannot be pressed and renders at reduced opacity.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<RadioButton isDisabled label="Disabled option" />
```

---

### `isReadOnly`

Optional prop to configure the read-only state. When read-only, the radio button cannot be pressed but retains full opacity.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<RadioButton isReadOnly isChecked label="Read-only option" />
```

---

### `isDanger`

Optional prop to configure the danger state. Renders the radio button with error styling.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<RadioButton isDanger isChecked label="Danger option" />
```

---

### `onPress`

Optional callback triggered when the radio button is pressed.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
const [isChecked, setIsChecked] = useState(false);

<RadioButton
  isChecked={isChecked}
  onPress={() => setIsChecked(!isChecked)}
  label="Press me"
/>;
```

---

### `label`

Optional label displayed beside the radio button. Accepts a string or a React node.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | No       | `undefined` |

```tsx
<RadioButton isChecked label="Text label" onPress={handlePress} />
```

---

### `labelProps`

Optional props passed to the label's Text component when `label` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<RadioButton
  isChecked
  label="Custom label"
  labelProps={{ twClassName: 'text-error-default' }}
  onPress={handlePress}
/>
```

---

### `touchableOpacityProps`

Optional props passed to the inner TouchableOpacity. Use this for TouchableOpacity-specific props such as `testID`.

| TYPE                             | REQUIRED | DEFAULT     |
| -------------------------------- | -------- | ----------- |
| `Partial<TouchableOpacityProps>` | No       | `undefined` |

```tsx
<RadioButton
  label="Option"
  touchableOpacityProps={{ testID: 'radio-touchable' }}
  onPress={handlePress}
/>
```

---

### `radioButtonContainerProps`

Optional props passed to the radio button circle container View.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<ViewProps>` | No       | `undefined` |

---

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the root container. These classes are merged with the component's default classes.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<RadioButton twClassName="mt-4" label="Custom spacing" onPress={handlePress} />
```

---

### `style`

Use the `style` prop to customize the root container's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

const tw = useTailwind();

<RadioButton
  style={tw.style('bg-default', isActive && 'bg-success-default')}
  label="Conditional styling"
  onPress={handlePress}
/>;
```

---

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
