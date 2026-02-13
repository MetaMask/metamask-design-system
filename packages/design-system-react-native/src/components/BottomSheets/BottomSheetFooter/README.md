# BottomSheetFooter

BottomSheetFooter is a footer component specifically used for BottomSheets. It renders an array of buttons in either a horizontal or vertical layout.

```tsx
import {
  BottomSheetFooter,
  ButtonsAlignment,
} from '@metamask/design-system-react-native';
import { ButtonVariant } from '@metamask/design-system-react-native';

<BottomSheetFooter
  buttonPropsArray={[
    { variant: ButtonVariant.Secondary, children: 'Cancel', onPress: () => {} },
    { variant: ButtonVariant.Primary, children: 'Submit', onPress: () => {} },
  ]}
/>;
```

## Props

### `buttonPropsArray`

Array of button props that will be rendered as buttons in the footer. Each item in the array is spread to a `Button` component.

| TYPE            | REQUIRED | DEFAULT     |
| --------------- | -------- | ----------- |
| `ButtonProps[]` | Yes      | `undefined` |

```tsx
import { BottomSheetFooter } from '@metamask/design-system-react-native';
import { ButtonVariant } from '@metamask/design-system-react-native';

<BottomSheetFooter
  buttonPropsArray={[
    { variant: ButtonVariant.Primary, children: 'Confirm', onPress: () => {} },
  ]}
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
  buttonPropsArray={[...]}
/>

// Vertical layout
<BottomSheetFooter
  buttonsAlignment={ButtonsAlignment.Vertical}
  buttonPropsArray={[...]}
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
<BottomSheetFooter twClassName="px-4 py-2" buttonPropsArray={[...]} />
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

<BottomSheetFooter style={styles.footer} buttonPropsArray={[...]} />;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
