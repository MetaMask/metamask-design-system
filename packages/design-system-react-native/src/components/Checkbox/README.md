# Checkbox

`Checkbox` allows users to select one or more options from a set of choices.

_Developer Note: This is a fully controlled component, requiring you to manage the state with `isSelected` and `onChange` props._

```tsx
import { Checkbox } from '@metamask/design-system-react-native';
import { useState } from 'react';

function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Checkbox
      label="Enable notifications"
      isSelected={isEnabled}
      onChange={() => setIsEnabled(!isEnabled)}
    />
  );
}
```

## Props

### `isSelected`

Required prop to determine whether the checkbox is currently selected. This component is fully controlled, so you must manage this state in your parent component.

| TYPE      | REQUIRED | DEFAULT     |
| --------- | -------- | ----------- |
| `boolean` | Yes      | `undefined` |

```tsx
const [isSelected, setIsSelected] = useState(true);

<Checkbox
  isSelected={isSelected}
  onChange={() => setIsEnabled(!isSelected)}
  label="Selected by default"
/>;
```

---

### `isDisabled`

Optional prop that when true, disables the checkbox.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
const [isSelected, setIsSelected] = useState(false);

<Checkbox
  isSelected={isSelected}
  onChange={() => setIsEnabled(!isSelected)}}
  isDisabled
  label="Disabled checkbox"
/>;
```

---

### `isInvalid`

Optional prop that when true, displays the invalid/error state of the checkbox.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
const [isSelected, setIsSelected] = useState(false);

<Checkbox
  isSelected={isSelected}
  onChange={() => setIsEnabled(!isSelected)}}
  isInvalid
  label="Invalid checkbox"
/>;
```

---

### `onChange`

Required callback function triggered when the checked state changes. Use this to update your state.

| TYPE                            | REQUIRED | DEFAULT     |
| ------------------------------- | -------- | ----------- |
| `(isSelected: boolean) => void` | Yes      | `undefined` |

```tsx
const [isSelected, setIsSelected] = useState(false);

<Checkbox isSelected={isSelected} onChange={() => setIsEnabled(!isSelected)}} label="Check me" />;
```

---

### `label`

Optional label prop that renders text or a React node as a label beside the checkbox.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | No       | `undefined` |

```tsx
const [isSelected, setIsSelected] = useState(false);

<Checkbox
  isSelected={isSelected}
  onChange={() => setIsEnabled(!isSelected)}}
  label="Agree to terms"
/>;
```

---

### `labelProps`

Optional props to be passed to the label's Text component.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
const [isSelected, setIsSelected] = useState(false);

<Checkbox
  isSelected={isSelected}
  onChange={() => setIsEnabled(!isSelected)}}
  label="Label"
  labelProps={{ variant: 'BodySm', color: 'text-muted' }}
/>;
```

---

### `checkboxContainerProps`

Optional props passed to the container view wrapping the checkbox icon.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<ViewProps>` | No       | `undefined` |

---

### `checkedIconProps`

Optional props to be passed to the check Icon component.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<IconProps>` | No       | `undefined` |

---

### `ref`

The Checkbox component exposes an imperative API through refs that allows for programmatic control. The `toggle` method allows a parent component to programmatically toggle the checkbox state.

```tsx
// Example of using the ref to toggle a checkbox
const [isSelected, setIsSelected] = useState(false);
const checkboxRef = useRef<{ toggle: () => void }>(null);

// Inside your component render
<>
  <Checkbox
    ref={checkboxRef}
    isSelected={isSelected}
    onChange={() => setIsEnabled(!isSelected)}}
    label="Toggle me via ref"
  />
  <Button
    variant={ButtonVariant.Primary}
    onPress={() => checkboxRef.current?.toggle()}
  >
    Toggle checkbox
  </Button>
</>;
```

This can be useful in scenarios where you need to trigger the checkbox programmatically, such as when implementing "Select All" functionality or resetting forms.

---

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the checkbox container. These classes are merged with the default classes.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
const [isSelected, setIsSelected] = useState(false);

<Checkbox
  isSelected={isSelected}
  onChange={() => setIsEnabled(!isSelected)}}
  label="Custom BG"
  twClassName="bg-primary-100"
/>;
```

---

### `style`

Custom styles for the outer `Pressable` container.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const [isSelected, setIsSelected] = useState(false);
const customStyles = {
  marginVertical: 10,
};

<Checkbox
  isSelected={isSelected}
  onChange={() => setIsEnabled(!isSelected)}}
  label="Styled"
  style={customStyles}
/>;
```

---

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
