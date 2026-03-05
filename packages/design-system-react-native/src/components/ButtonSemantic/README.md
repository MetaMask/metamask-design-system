# ButtonSemantic

ButtonSemantic is a semantic button component that provides predefined color schemes for Success and Danger severity states. It extends ButtonBase with automatic background and text color handling.

```tsx
import {
  ButtonSemantic,
  ButtonSemanticSeverity,
} from '@metamask/design-system-react-native';

<ButtonSemantic
  severity={ButtonSemanticSeverity.Success}
  onPress={() => console.log('Confirmed')}
>
  Confirm
</ButtonSemantic>;
```

## Props

### `severity`

Required prop that determines the button's color scheme.

Available severities:

- `ButtonSemanticSeverity.Success` - Green color scheme for positive/confirmatory actions
- `ButtonSemanticSeverity.Danger` - Red color scheme for destructive/dangerous actions

| TYPE                     | REQUIRED | DEFAULT |
| ------------------------ | -------- | ------- |
| `ButtonSemanticSeverity` | Yes      | -       |

```tsx
<ButtonSemantic severity={ButtonSemanticSeverity.Success} onPress={handleConfirm}>
  Confirm Transaction
</ButtonSemantic>
<ButtonSemantic severity={ButtonSemanticSeverity.Danger} onPress={handleDelete}>
  Delete Account
</ButtonSemantic>
```

### `size`

Optional prop to control the size of the button.

Available sizes:

- `ButtonBaseSize.Sm` (32px)
- `ButtonBaseSize.Md` (40px)
- `ButtonBaseSize.Lg` (48px)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `ButtonBaseSize` | No       | `ButtonBaseSize.Lg` |

```tsx
<ButtonSemantic severity={ButtonSemanticSeverity.Success} size={ButtonBaseSize.Sm}>
  Small
</ButtonSemantic>
<ButtonSemantic severity={ButtonSemanticSeverity.Success}>
  Large (default)
</ButtonSemantic>
<ButtonSemantic severity={ButtonSemanticSeverity.Success} size={ButtonBaseSize.Lg}>
  Large
</ButtonSemantic>
```

### `children`

The content to be rendered within the button.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | -       |

```tsx
<ButtonSemantic severity={ButtonSemanticSeverity.Success} onPress={handlePress}>
  Button Label
</ButtonSemantic>
```

### `isDisabled`

Optional prop to disable the button.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ButtonSemantic severity={ButtonSemanticSeverity.Success} isDisabled>
  Disabled
</ButtonSemantic>
```

### `isLoading`

Optional prop to show a loading spinner.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ButtonSemantic
  severity={ButtonSemanticSeverity.Success}
  isLoading
  loadingText="Processing..."
>
  Submit
</ButtonSemantic>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. Can be a string or a function that receives pressed state and returns a string.

| TYPE                                       | REQUIRED | DEFAULT     |
| ------------------------------------------ | -------- | ----------- |
| `string \| ((pressed: boolean) => string)` | No       | `undefined` |

```tsx
<ButtonSemantic severity={ButtonSemanticSeverity.Success} twClassName="mt-4">
  With Margin
</ButtonSemantic>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
<ButtonSemantic
  severity={ButtonSemanticSeverity.Success}
  style={{ opacity: 0.8 }}
>
  Custom Style
</ButtonSemantic>
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
