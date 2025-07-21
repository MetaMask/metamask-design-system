# Button

Button is a labeled element that a user can click or tap to initiate an action.

```tsx
import { Button } from '@metamask/design-system-react-native';

<Button label="Click me" onPress={() => console.log('Pressed')} />;
```

## Props

### `label`

The text label displayed on the button.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | Yes      | `undefined` |

```tsx
<Button label="Submit" onPress={() => {}} />
```

### `onPress`

Function to trigger when pressing the button.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | Yes      | `undefined` |

```tsx
<Button label="Press me" onPress={() => console.log('Button pressed')} />
```

### `variant`

The visual variant of the button.

Available variants:

- `ButtonVariant.Primary`
- `ButtonVariant.Secondary`
- `ButtonVariant.Tertiary`

| TYPE            | REQUIRED | DEFAULT                 |
| --------------- | -------- | ----------------------- |
| `ButtonVariant` | No       | `ButtonVariant.Primary` |

```tsx
<Button
  label="Primary"
  variant={ButtonVariant.Primary}
  onPress={() => {}}
/>
<Button
  label="Secondary"
  variant={ButtonVariant.Secondary}
  onPress={() => {}}
/>
```

### `size`

The size of the button.

Available sizes:

- `ButtonSize.Sm` (32px height)
- `ButtonSize.Md` (40px height)
- `ButtonSize.Lg` (48px height)

| TYPE         | REQUIRED | DEFAULT         |
| ------------ | -------- | --------------- |
| `ButtonSize` | No       | `ButtonSize.Md` |

```tsx
<Button
  label="Small Button"
  size={ButtonSize.Sm}
  onPress={() => {}}
/>
<Button
  label="Large Button"
  size={ButtonSize.Lg}
  onPress={() => {}}
/>
```

### `startIconName`

Optional icon name to display before the label.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
<Button label="Save" startIconName="CheckBold" onPress={() => {}} />
```

### `endIconName`

Optional icon name to display after the label.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
<Button label="Continue" endIconName="ArrowRight" onPress={() => {}} />
```

### `isDanger`

Whether to show the button in danger state.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Button label="Delete" isDanger onPress={() => {}} />
```

### `isDisabled`

Whether the button is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Button label="Disabled" isDisabled onPress={() => {}} />
```

### `width`

The width behavior of the button.

Available width types:

- `ButtonWidthTypes.Auto` - Fits content
- `ButtonWidthTypes.Full` - Full width

| TYPE                         | REQUIRED | DEFAULT                 |
| ---------------------------- | -------- | ----------------------- |
| `ButtonWidthTypes \| number` | No       | `ButtonWidthTypes.Auto` |

```tsx
<Button label="Full Width" width={ButtonWidthTypes.Full} onPress={() => {}} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Button } from '@metamask/design-system-react-native';

// Add additional styles
<Button
  label="Custom Button"
  onPress={() => {}}
  twClassName="shadow-lg"
>
  Custom Shadow
</Button>

// Override default styles
<Button
  label="Override Button"
  onPress={() => {}}
  twClassName="!bg-error-100"
>
  Override Background
</Button>
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
  <Button label="Custom Button" onPress={() => {}} style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
