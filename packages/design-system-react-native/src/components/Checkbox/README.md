# Checkbox

Checkbox allows users to select one or more options from a set of choices.

```tsx
import { Checkbox } from '@metamask/design-system-react-native';

<Checkbox isSelected={true} onChange={(value) => console.log(value)} />;
```

## Props

### `isSelected`

Whether the checkbox is currently selected.

| TYPE      | REQUIRED | DEFAULT     |
| --------- | -------- | ----------- |
| `boolean` | Yes      | `undefined` |

```tsx
<Checkbox isSelected={true} onChange={() => {}} />
```

### `onChange`

Function called when the checkbox selection changes.

| TYPE                            | REQUIRED | DEFAULT     |
| ------------------------------- | -------- | ----------- |
| `(isSelected: boolean) => void` | Yes      | `undefined` |

```tsx
<Checkbox
  isSelected={false}
  onChange={(selected) => console.log('Selected:', selected)}
/>
```

### `isDisabled`

Whether the checkbox is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Checkbox isSelected={true} isDisabled onChange={() => {}} />
```

### `isInvalid`

Whether the checkbox is in an invalid/error state.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Checkbox isSelected={false} isInvalid onChange={() => {}} />
```

### `label`

Label text or React node for the checkbox.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `React.ReactNode \| string` | No       | `undefined` |

```tsx
<Checkbox
  isSelected={false}
  label="Accept terms and conditions"
  onChange={() => {}}
/>
```

### `labelProps`

Optional props to be passed to the label's Text component.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
<Checkbox
  isSelected={false}
  label="Custom label"
  labelProps={{ variant: TextVariant.BodySm, color: TextColor.TextMuted }}
  onChange={() => {}}
/>
```

### `checkedIconProps`

Optional props to be passed to the check Icon component.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<IconProps>` | No       | `undefined` |

```tsx
<Checkbox
  isSelected={true}
  checkedIconProps={{ color: IconColor.IconSuccess }}
  onChange={() => {}}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Checkbox } from '@metamask/design-system-react-native';

// Add additional styles
<Checkbox
  isSelected={false}
  onChange={() => {}}
  twClassName="p-2"
/>

// Override default styles
<Checkbox
  isSelected={false}
  onChange={() => {}}
  twClassName="!border-error-100"
/>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <Checkbox isSelected={false} onChange={() => {}} style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
