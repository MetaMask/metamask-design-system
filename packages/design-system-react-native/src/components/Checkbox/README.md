# Checkbox

Checkbox is used to render interactive checkbox elements within an interface.

```tsx
import { Checkbox } from '@metamask/design-system-react-native';

<Checkbox isChecked={true} onValueChange={(value) => console.log(value)} />;
```

## Props

### `isChecked`

Whether the checkbox is checked.

| TYPE      | REQUIRED | DEFAULT     |
| --------- | -------- | ----------- |
| `boolean` | Yes      | `undefined` |

```tsx
<Checkbox isChecked={true} onValueChange={() => {}} />
```

### `onValueChange`

Function called when the checkbox value changes.

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `(value: boolean) => void` | Yes      | `undefined` |

```tsx
<Checkbox
  isChecked={false}
  onValueChange={(checked) => console.log('Checked:', checked)}
/>
```

### `isDisabled`

Whether the checkbox is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Checkbox isChecked={true} isDisabled onValueChange={() => {}} />
```

### `isIndeterminate`

Whether the checkbox is in an indeterminate state.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Checkbox isChecked={false} isIndeterminate onValueChange={() => {}} />
```

### `label`

Label text for the checkbox.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Checkbox
  isChecked={false}
  label="Accept terms and conditions"
  onValueChange={() => {}}
/>
```

### `size`

The size of the checkbox.

Available sizes:

- `CheckboxSize.Sm` (16px)
- `CheckboxSize.Md` (20px)

| TYPE           | REQUIRED | DEFAULT           |
| -------------- | -------- | ----------------- |
| `CheckboxSize` | No       | `CheckboxSize.Md` |

```tsx
<Checkbox isChecked={false} size={CheckboxSize.Sm} onValueChange={() => {}} />
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
  isChecked={false}
  onValueChange={() => {}}
  twClassName="p-2"
>
  Custom Padding
</Checkbox>

// Override default styles
<Checkbox
  isChecked={false}
  onValueChange={() => {}}
  twClassName="!border-error-100"
>
  Override Border
</Checkbox>
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
  <Checkbox isChecked={false} onValueChange={() => {}} style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
