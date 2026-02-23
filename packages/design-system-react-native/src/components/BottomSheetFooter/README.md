# BottomSheetFooter

BottomSheetFooter is a footer component specifically used for BottomSheets. It renders a primary and/or secondary button in either a horizontal or vertical layout, with enforced button variants and consistent ordering.

```tsx
import {
  BottomSheetFooter,
  ButtonsAlignment,
} from '@metamask/design-system-react-native';

<BottomSheetFooter
  secondaryButtonProps={{ children: 'Cancel', onPress: () => {} }}
  primaryButtonProps={{ children: 'Submit', onPress: () => {} }}
/>;
```

## Props

### `primaryButtonProps`

Optional props for the primary action button. The button automatically renders with `ButtonVariant.Primary`. Appears second (rightmost in horizontal layout, bottom in vertical layout).

| TYPE                           | REQUIRED | DEFAULT     |
| ------------------------------ | -------- | ----------- |
| `Omit<ButtonProps, 'variant'>` | No       | `undefined` |

```tsx
import { BottomSheetFooter } from '@metamask/design-system-react-native';

<BottomSheetFooter
  primaryButtonProps={{ children: 'Confirm', onPress: () => {} }}
/>;
```

### `secondaryButtonProps`

Optional props for the secondary action button. The button automatically renders with `ButtonVariant.Secondary`. Appears first (leftmost in horizontal layout, top in vertical layout).

| TYPE                           | REQUIRED | DEFAULT     |
| ------------------------------ | -------- | ----------- |
| `Omit<ButtonProps, 'variant'>` | No       | `undefined` |

```tsx
import { BottomSheetFooter } from '@metamask/design-system-react-native';

<BottomSheetFooter
  secondaryButtonProps={{ children: 'Cancel', onPress: () => {} }}
  primaryButtonProps={{ children: 'Submit', onPress: () => {} }}
/>;
```

### `buttonsAlignment`

Optional prop to control the alignment of the buttons.

Available alignments:

- `ButtonsAlignment.Horizontal` - buttons are laid out side by side
- `ButtonsAlignment.Vertical` - buttons are stacked on top of each other

| TYPE               | REQUIRED | DEFAULT                       |
| ------------------ | -------- | ----------------------------- |
| `ButtonsAlignment` | No       | `ButtonsAlignment.Horizontal` |

```tsx
import { BottomSheetFooter, ButtonsAlignment } from '@metamask/design-system-react-native';

// Horizontal layout (default)
<BottomSheetFooter
  buttonsAlignment={ButtonsAlignment.Horizontal}
  secondaryButtonProps={{ children: 'Cancel', onPress: () => {} }}
  primaryButtonProps={{ children: 'Submit', onPress: () => {} }}
/>

// Vertical layout
<BottomSheetFooter
  buttonsAlignment={ButtonsAlignment.Vertical}
  secondaryButtonProps={{ children: 'Cancel', onPress: () => {} }}
  primaryButtonProps={{ children: 'Submit', onPress: () => {} }}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the footer container. These classes will be merged with the component's default classes, allowing you to customize the footer appearance.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { BottomSheetFooter } from '@metamask/design-system-react-native';

// Add additional padding
<BottomSheetFooter
  twClassName="px-4 py-2"
  primaryButtonProps={{ children: 'Submit', onPress: () => {} }}
/>;
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { StyleSheet } from 'react-native';
import { BottomSheetFooter } from '@metamask/design-system-react-native';

const styles = StyleSheet.create({
  footer: {
    marginTop: 16,
  },
});

<BottomSheetFooter
  style={styles.footer}
  primaryButtonProps={{ children: 'Submit', onPress: () => {} }}
/>;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
