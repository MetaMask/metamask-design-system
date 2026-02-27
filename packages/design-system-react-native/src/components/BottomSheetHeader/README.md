# BottomSheetHeader

BottomSheetHeader is a header component specifically designed for BottomSheets. It wraps HeaderBase with built-in back and close button support, automatically rendering ButtonIcon accessories when `onBack` or `onClose` callbacks are provided.

```tsx
import { BottomSheetHeader } from '@metamask/design-system-react-native';

<BottomSheetHeader
  onBack={() => console.log('Back')}
  onClose={() => console.log('Close')}
>
  Sheet Title
</BottomSheetHeader>;
```

## Props

### `variant`

Controls the header alignment and text size.

Available variants:

- `BottomSheetHeaderVariant.Compact` - center-aligned with HeadingSm text
- `BottomSheetHeaderVariant.Display` - left-aligned with HeadingLg text

| TYPE                       | REQUIRED | DEFAULT                            |
| -------------------------- | -------- | ---------------------------------- |
| `BottomSheetHeaderVariant` | No       | `BottomSheetHeaderVariant.Compact` |

```tsx
import { BottomSheetHeader, BottomSheetHeaderVariant } from '@metamask/design-system-react-native';

<BottomSheetHeader variant={BottomSheetHeaderVariant.Compact}>
  Compact Title
</BottomSheetHeader>

<BottomSheetHeader variant={BottomSheetHeaderVariant.Display}>
  Display Title
</BottomSheetHeader>
```

### `onBack`

Callback function triggered when the back button is pressed. When provided, a back arrow ButtonIcon is rendered as the start accessory.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import { BottomSheetHeader } from '@metamask/design-system-react-native';

<BottomSheetHeader onBack={() => console.log('Back pressed')}>
  Title
</BottomSheetHeader>;
```

### `backButtonProps`

Props spread to the back ButtonIcon component for additional properties like `testID` or `accessibilityLabel`. Use this for testing or accessibility purposes.

**Note:** `iconName` and `onPress` are managed internally and excluded from this object.

| TYPE                                                      | REQUIRED | DEFAULT     |
| --------------------------------------------------------- | -------- | ----------- |
| `Partial<Omit<ButtonIconProps, 'iconName' \| 'onPress'>>` | No       | `undefined` |

```tsx
import { BottomSheetHeader } from '@metamask/design-system-react-native';

<BottomSheetHeader
  onBack={() => console.log('Back')}
  backButtonProps={{
    testID: 'back-button',
    accessibilityLabel: 'Go back',
  }}
>
  Title
</BottomSheetHeader>;
```

### `onClose`

Callback function triggered when the close button is pressed. When provided, a close ButtonIcon is rendered as the end accessory.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import { BottomSheetHeader } from '@metamask/design-system-react-native';

<BottomSheetHeader onClose={() => console.log('Close pressed')}>
  Title
</BottomSheetHeader>;
```

### `closeButtonProps`

Props spread to the close ButtonIcon component for additional properties like `testID` or `accessibilityLabel`. Use this for testing or accessibility purposes.

**Note:** `iconName` and `onPress` are managed internally and excluded from this object.

| TYPE                                                      | REQUIRED | DEFAULT     |
| --------------------------------------------------------- | -------- | ----------- |
| `Partial<Omit<ButtonIconProps, 'iconName' \| 'onPress'>>` | No       | `undefined` |

```tsx
import { BottomSheetHeader } from '@metamask/design-system-react-native';

<BottomSheetHeader
  onClose={() => console.log('Close')}
  closeButtonProps={{
    testID: 'close-button',
    accessibilityLabel: 'Close modal',
  }}
>
  Title
</BottomSheetHeader>;
```

### `children`

Title content for the header. Pass a string for automatic Text rendering, or a ReactNode for custom content.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `ReactNode \| string` | No       | `undefined` |

```tsx
import { BottomSheetHeader } from '@metamask/design-system-react-native';

<BottomSheetHeader>Simple Title</BottomSheetHeader>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { BottomSheetHeader } from '@metamask/design-system-react-native';

// Add additional styles
<BottomSheetHeader twClassName="pb-2">
  Title with extra bottom padding
</BottomSheetHeader>;
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <BottomSheetHeader
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    >
      Conditional styling
    </BottomSheetHeader>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
