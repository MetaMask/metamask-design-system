# BottomSheet

BottomSheet is a sheet component that slides up from the bottom of the screen. It wraps [BottomSheetDialog](../BottomSheetDialog/README.md) and [BottomSheetOverlay](../BottomSheetOverlay/README.md) and accepts a `goBack` callback for navigation integration.

```tsx
import { BottomSheet } from '@metamask/design-system-react-native';

<BottomSheet goBack={() => navigation.goBack()}>
  <Text>Sheet content</Text>
</BottomSheet>;
```

## Props

### `goBack`

Callback invoked to navigate back when `shouldNavigateBack` is `true` and the sheet finishes closing. Typically `navigation.goBack()` from React Navigation.

| TYPE       | REQUIRED |
| ---------- | -------- |
| `function` | Yes      |

```tsx
<BottomSheet goBack={() => navigation.goBack()}>
  <Text>Content</Text>
</BottomSheet>
```

### `children`

Content to display inside the sheet.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<BottomSheet goBack={goBack}>
  <BottomSheetHeader onClose={goBack}>Title</BottomSheetHeader>
  <Box twClassName="p-4">
    <Text>Sheet body</Text>
  </Box>
  <BottomSheetFooter
    primaryButtonProps={{ children: 'Confirm', onPress: goBack }}
    secondaryButtonProps={{ children: 'Cancel', onPress: goBack }}
  />
</BottomSheet>
```

### `onClose`

Optional callback triggered when the sheet is fully dismissed. Receives `hasPendingAction` indicating whether a post-close callback is queued.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `(hasPendingAction?: boolean) => void` | No       | `undefined` |

```tsx
<BottomSheet
  goBack={goBack}
  onClose={(hasPendingAction) => console.log('closed', hasPendingAction)}
>
  <Text>Content</Text>
</BottomSheet>
```

### `onOpen`

Optional callback triggered when the sheet is fully opened.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `(hasPendingAction?: boolean) => void` | No       | `undefined` |

```tsx
<BottomSheet goBack={goBack} onOpen={() => console.log('opened')}>
  <Text>Content</Text>
</BottomSheet>
```

### `isInteractable`

Optional boolean indicating whether the sheet can be dismissed by swiping or tapping the overlay. When `false`, the drag handle is hidden and overlay taps are disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `true`  |

```tsx
<BottomSheet goBack={goBack} isInteractable={false}>
  <Text>Non-dismissable sheet</Text>
</BottomSheet>
```

### `isFullscreen`

Optional boolean to expand the sheet to the full screen height.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<BottomSheet goBack={goBack} isFullscreen>
  <Text>Full-screen sheet</Text>
</BottomSheet>
```

### `shouldNavigateBack`

Optional boolean indicating whether `goBack` is called automatically when the sheet closes.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `true`  |

```tsx
// Prevent automatic navigation — manage it manually via onClose instead
<BottomSheet goBack={goBack} shouldNavigateBack={false} onClose={goBack}>
  <Text>Content</Text>
</BottomSheet>
```

### `keyboardAvoidingViewEnabled`

Optional boolean to enable or disable the `KeyboardAvoidingView` that shifts the sheet when the keyboard appears.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `true`  |

```tsx
<BottomSheet goBack={goBack} keyboardAvoidingViewEnabled={false}>
  <Text>No keyboard avoidance</Text>
</BottomSheet>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the `BottomSheetDialog` container.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<BottomSheet goBack={goBack} twClassName="rounded-t-xl">
  <Text>Custom styled sheet</Text>
</BottomSheet>
```

### `style`

Use the `style` prop to apply React Native styles to the root container.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const Example = () => {
  const tw = useTailwind();
  return (
    <BottomSheet goBack={goBack} style={tw.style('opacity-90')}>
      <Text>Custom opacity</Text>
    </BottomSheet>
  );
};
```

## Imperative API (Ref)

Use a ref to open or close the sheet programmatically. Each method accepts an optional callback fired after the animation completes.

```tsx
import { useRef } from 'react';
import { BottomSheet } from '@metamask/design-system-react-native';
import type { BottomSheetRef } from '@metamask/design-system-react-native';

const sheetRef = useRef<BottomSheetRef>(null);

// Open the sheet
sheetRef.current?.onOpenBottomSheet(() => {
  console.log('sheet opened');
});

// Close the sheet
sheetRef.current?.onCloseBottomSheet(() => {
  console.log('sheet closed');
});

<BottomSheet ref={sheetRef} goBack={goBack}>
  <Text>Content</Text>
</BottomSheet>;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
