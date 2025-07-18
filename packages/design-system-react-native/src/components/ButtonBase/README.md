# ButtonBase

ButtonBase is used to render base button elements within an interface.

```tsx
import { ButtonBase } from '@metamask/design-system-react-native';

<ButtonBase onPress={() => console.log('Pressed')}>
  Button Content
</ButtonBase>;
```

## Props

### `children`

The content of the ButtonBase component.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `ReactNode` | No | `undefined` |

```tsx
import { ButtonBase } from '@metamask/design-system-react-native';

<ButtonBase onPress={() => {}}>
  <Text>Custom button content</Text>
</ButtonBase>;
```

### `onPress`

Function to trigger when pressing the button.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `() => void` | Yes | `undefined` |

```tsx
<ButtonBase onPress={() => console.log('Button pressed')}>
  Press me
</ButtonBase>
```

### `isDisabled`

Whether the button is disabled.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `boolean` | No | `false` |

```tsx
<ButtonBase isDisabled onPress={() => {}}>
  Disabled Button
</ButtonBase>
```

### `size`

The size of the button.

Available sizes:

- `ButtonBaseSize.Sm` (32px height)
- `ButtonBaseSize.Md` (40px height)  
- `ButtonBaseSize.Lg` (48px height)

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `ButtonBaseSize` | No | `ButtonBaseSize.Md` |

```tsx
<ButtonBase size={ButtonBaseSize.Sm} onPress={() => {}}>
  Small Button
</ButtonBase>
<ButtonBase size={ButtonBaseSize.Lg} onPress={() => {}}>
  Large Button
</ButtonBase>
```

### `borderRadius`

Border radius of the button.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `BorderRadius` | No | `BorderRadius.MD` |

```tsx
<ButtonBase borderRadius={BorderRadius.LG} onPress={() => {}}>
  Rounded Button
</ButtonBase>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
import { ButtonBase } from '@metamask/design-system-react-native';

// Add additional styles
<ButtonBase 
  onPress={() => {}}
  twClassName="border-2 border-primary-100"
>
  Custom Border
</ButtonBase>

// Override default styles
<ButtonBase 
  onPress={() => {}}
  twClassName="!bg-error-100"
>
  Override Background
</ButtonBase>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `StyleProp<ViewStyle>` | No | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <ButtonBase onPress={() => {}} style={styles.custom}>
    Custom styled button
  </ButtonBase>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
