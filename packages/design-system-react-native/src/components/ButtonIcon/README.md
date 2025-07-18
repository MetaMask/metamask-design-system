# ButtonIcon

ButtonIcon is used to render icon-only button elements within an interface.

```tsx
import { ButtonIcon } from '@metamask/design-system-react-native';

<ButtonIcon name="Edit" onPress={() => console.log('Pressed')} />;
```

## Props

### `name`

The icon name to display in the button.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | Yes      | `undefined` |

```tsx
<ButtonIcon name="Edit" onPress={() => {}} />
```

### `onPress`

Function to trigger when pressing the button.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | Yes      | `undefined` |

```tsx
<ButtonIcon name="Settings" onPress={() => console.log('Settings pressed')} />
```

### `variant`

The visual variant of the button.

Available variants:

- `ButtonIconVariant.Primary`
- `ButtonIconVariant.Secondary`
- `ButtonIconVariant.Tertiary`

| TYPE                | REQUIRED | DEFAULT                     |
| ------------------- | -------- | --------------------------- |
| `ButtonIconVariant` | No       | `ButtonIconVariant.Primary` |

```tsx
<ButtonIcon
  name="Edit"
  variant={ButtonIconVariant.Primary}
  onPress={() => {}}
/>
<ButtonIcon
  name="Edit"
  variant={ButtonIconVariant.Secondary}
  onPress={() => {}}
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
  name="Edit"
  size={ButtonIconSize.Sm}
  onPress={() => {}}
/>
<ButtonIcon
  name="Edit"
  size={ButtonIconSize.Lg}
  onPress={() => {}}
/>
```

### `isDanger`

Whether to show the button in danger state.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ButtonIcon name="Delete" isDanger onPress={() => {}} />
```

### `isDisabled`

Whether the button is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ButtonIcon name="Edit" isDisabled onPress={() => {}} />
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
  name="Edit"
  onPress={() => {}}
  twClassName="shadow-lg"
>
  Custom Shadow
</ButtonIcon>

// Override default styles
<ButtonIcon
  name="Edit"
  onPress={() => {}}
  twClassName="!bg-error-100"
>
  Override Background
</ButtonIcon>
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
  <ButtonIcon name="Edit" onPress={() => {}} style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
