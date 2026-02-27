# ButtonIcon

A Button Icon is a compact, icon-only button that triggers an action, designed for quick, space-efficient interactions.

```tsx
import { ButtonIcon } from '@metamask/design-system-react-native';

<ButtonIcon iconName="Edit" onPress={() => console.log('Pressed')} />;
```

## Props

### `iconName`

The icon name to display in the button.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | Yes      | `undefined` |

```tsx
<ButtonIcon iconName="Edit" onPress={() => {}} />
```

### `onPress`

Function to trigger when pressing the button.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | Yes      | `undefined` |

```tsx
<ButtonIcon
  iconName="Settings"
  onPress={() => console.log('Settings pressed')}
/>
```

### `size`

The size of the button.

Available sizes:

- `ButtonIconSize.Sm` (32px)
- `ButtonIconSize.Md` (40px)
- `ButtonIconSize.Lg` (48px)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `ButtonIconSize` | No       | `ButtonIconSize.Md` |

```tsx
<ButtonIcon
  iconName="Edit"
  size={ButtonIconSize.Sm}
  onPress={() => {}}
/>
<ButtonIcon
  iconName="Edit"
  size={ButtonIconSize.Lg}
  onPress={() => {}}
/>
```

### `isDisabled`

Whether the button is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ButtonIcon iconName="Edit" isDisabled onPress={() => {}} />
```

### `variant`

The visual variant of the button. Use `ButtonIconVariant.Default` for transparent with default icon color, `ButtonIconVariant.Filled` for muted background with rounded-full, or `ButtonIconVariant.Floating` for the floating/contained style.

| TYPE                | REQUIRED | DEFAULT                     |
| ------------------- | -------- | --------------------------- |
| `ButtonIconVariant` | No       | `ButtonIconVariant.Default` |

```tsx
<ButtonIcon iconName="Add" variant={ButtonIconVariant.Floating} onPress={() => {}} />
<ButtonIcon iconName="Edit" variant={ButtonIconVariant.Filled} onPress={() => {}} />
```

### `iconProps`

Optional props to pass to the Icon component.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<IconProps>` | No       | `undefined` |

```tsx
<ButtonIcon
  iconName="Edit"
  iconProps={{ color: IconColor.IconPrimary }}
  onPress={() => {}}
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
import { ButtonIcon } from '@metamask/design-system-react-native';

// Add additional styles
<ButtonIcon
  iconName="Edit"
  onPress={() => {}}
  twClassName="shadow-lg"
/>

// Override default styles
<ButtonIcon
  iconName="Edit"
  onPress={() => {}}
  twClassName="!bg-error-100"
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
  <ButtonIcon iconName="Edit" onPress={() => {}} style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
