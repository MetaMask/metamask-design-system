# BottomSheetFooter

BottomSheetFooter is a footer component specifically used for BottomSheets. It renders a primary, secondary, and/or tertiary button in either a horizontal or vertical layout, with enforced button variants and consistent ordering. The tertiary button always sits at the bottom.

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

Optional props for the primary action button. The button automatically renders with `ButtonVariant.Primary`. Appears after the secondary button (rightmost in a horizontal layout, below it in a vertical layout) and above the tertiary button when one is set.

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

### `tertiaryButtonProps`

Optional props for the tertiary action button. The button automatically renders with `ButtonVariant.Tertiary`. It always appears last, at the bottom of the footer. In a horizontal layout it sits on its own row beneath the primary and secondary buttons. In a vertical layout it is the last stacked button.

| TYPE                           | REQUIRED | DEFAULT     |
| ------------------------------ | -------- | ----------- |
| `Omit<ButtonProps, 'variant'>` | No       | `undefined` |

```tsx
import {
  BottomSheetFooter,
  ButtonsAlignment,
} from '@metamask/design-system-react-native';

<BottomSheetFooter
  buttonsAlignment={ButtonsAlignment.Vertical}
  secondaryButtonProps={{ children: 'Cancel', onPress: () => {} }}
  primaryButtonProps={{ children: 'Submit', onPress: () => {} }}
  tertiaryButtonProps={{ children: 'Not now', onPress: () => {} }}
/>;
```

### `buttonsAlignment`

Optional prop to control the alignment of the buttons.

Available alignments:

- `ButtonsAlignment.Horizontal` - primary and secondary buttons are laid out side by side. A tertiary button stays on its own row at the bottom.
- `ButtonsAlignment.Vertical` - buttons are stacked. Order is secondary, primary, then tertiary at the bottom.

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

## Migration Guide

Migrating from `app/component-library/components/BottomSheets/BottomSheetFooter` in MetaMask Mobile? See the [BottomSheetFooter Migration Guide](../../../MIGRATION.md#bottomsheetfooter-component) for `buttonPropsArray` → `primaryButtonProps` / `secondaryButtonProps` mappings, extension parity notes, and breaking changes.

For MetaMask Extension modal footers (`ModalFooter` on web), see [`design-system-react` MIGRATION.md — ModalFooter](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react/MIGRATION.md#modalfooter-component).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)

## Content guidelines

- `primaryButtonProps.children`, `secondaryButtonProps.children`, and `tertiaryButtonProps.children`: sentence case, no period
