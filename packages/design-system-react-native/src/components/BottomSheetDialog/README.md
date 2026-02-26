# BottomSheetDialog

BottomSheetDialog is used to represent the animated content area within a BottomSheet. It provides swipe-to-dismiss gesture handling, keyboard avoidance, and smooth slide-in/slide-out animations. This is a foundation component and should be used within BottomSheet.

```tsx
import BottomSheetDialog from './BottomSheetDialog';

<BottomSheetDialog
  onOpen={() => console.log('Opened')}
  onClose={() => console.log('Closed')}
>
  <Text>Sheet content</Text>
</BottomSheetDialog>;
```

## Props

### `children`

Optional content to display inside the dialog.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<BottomSheetDialog>
  <Text>Sheet content goes here</Text>
</BottomSheetDialog>
```

### `isFullscreen`

Optional prop to toggle full screen state of BottomSheetDialog. When enabled, the dialog expands to fill the maximum available height (screen height minus top safe area).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
// Default height (fits content)
<BottomSheetDialog>
  <Text>Content</Text>
</BottomSheetDialog>

// Full screen
<BottomSheetDialog isFullscreen>
  <Text>Full screen content</Text>
</BottomSheetDialog>
```

### `isInteractable`

Optional boolean that indicates if the sheet is swippable. This affects whether or not tapping on the overlay will dismiss the sheet as well, and whether the drag handle indicator is shown.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `true`  |

```tsx
// Swippable with drag handle (default)
<BottomSheetDialog isInteractable>
  <Text>Swipe to dismiss</Text>
</BottomSheetDialog>

// Non-interactive (no drag handle, no swipe gestures)
<BottomSheetDialog isInteractable={false}>
  <Text>Cannot be swiped away</Text>
</BottomSheetDialog>
```

### `keyboardAvoidingViewEnabled`

Optional boolean that indicates if the KeyboardAvoidingView is enabled. When enabled, the dialog adjusts its position to avoid being obscured by the keyboard.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `true`  |

```tsx
// Keyboard avoidance enabled (default)
<BottomSheetDialog>
  <TextInput placeholder="Type here..." />
</BottomSheetDialog>

// Keyboard avoidance disabled
<BottomSheetDialog keyboardAvoidingViewEnabled={false}>
  <Text>Static content</Text>
</BottomSheetDialog>
```

### `onClose`

Optional callback that gets triggered when the sheet close animation completes.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
<BottomSheetDialog onClose={() => console.log('Sheet closed')}>
  <Text>Content</Text>
</BottomSheetDialog>
```

### `onOpen`

Optional callback that gets triggered when the sheet open animation completes.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
<BottomSheetDialog onOpen={() => console.log('Sheet opened')}>
  <Text>Content</Text>
</BottomSheetDialog>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the dialog container. These classes will be merged with the component's default classes, allowing you to customize the dialog appearance.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<BottomSheetDialog twClassName="rounded-t-xl">
  <Text>Custom styled dialog</Text>
</BottomSheetDialog>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customDialog: {
    marginHorizontal: 16,
  },
});

<BottomSheetDialog style={styles.customDialog}>
  <Text>Custom styled content</Text>
</BottomSheetDialog>;
```

## Ref Methods

The component exposes imperative methods via `ref` for programmatic control:

- `onOpenDialog()` - Animate the dialog open
- `onCloseDialog()` - Animate the dialog closed

```tsx
import { useRef } from 'react';

const ref = useRef<BottomSheetDialogRef>(null);

// Open programmatically
ref.current?.onOpenDialog();

// Close programmatically
ref.current?.onCloseDialog();
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
