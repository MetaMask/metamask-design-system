# Checkbox

`Checkbox` allows users to select one or more options from a set of choices

```tsx
import { Checkbox } from '@metamask/design-system-react-native';

<Checkbox label="Enable notifications" />;
```

## Props

### `isSelected`

Controlled prop to determine whether the checkbox is currently selected.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Checkbox isSelected={true} label="Selected by default" />
```

---

### `defaultIsSelected`

Uncontrolled prop to set the initial checked state.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Checkbox defaultIsSelected label="Initial state" />
```

---

### `isDisabled`

Disables interaction and visually dims the checkbox.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Checkbox isDisabled label="Disabled checkbox" />
```

---

### `isInvalid`

Displays the invalid/error state of the checkbox.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Checkbox isInvalid label="Invalid checkbox" />
```

---

### `label`

Renders text or a React node as a label beside the checkbox.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | No       | `undefined` |

```tsx
<Checkbox label="Agree to terms" />
```

---

### `labelProps`

Props forwarded to the underlying `Text` element used for rendering the label.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<Checkbox
  label="Label"
  labelProps={{ variant: 'BodySm', color: 'text-muted' }}
/>
```

---

### `onChange`

Callback function triggered when the checked state changes.

| TYPE                            | REQUIRED | DEFAULT     |
| ------------------------------- | -------- | ----------- |
| `(isSelected: boolean) => void` | No       | `undefined` |

```tsx
<Checkbox label="Check me" onChange={(val) => console.log(val)} />
```

---

### `checkboxContainerProps`

Props passed to the container view wrapping the checkbox icon.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<ViewProps>` | No       | `undefined` |

---

### `checkedIconProps`

Customize the check icon inside the checkbox.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<IconProps>` | No       | `undefined` |

---

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the checkbox container. These classes are merged with the default classes.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Checkbox label="Custom BG" twClassName="bg-primary-100" />
<Checkbox label="Override border" twClassName="!border-error-default" />
```

---

### `style`

Custom styles for the outer `Pressable` container.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const customStyles = {
  marginVertical: 10,
};

<Checkbox label="Styled" style={customStyles} />;
```

---

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
