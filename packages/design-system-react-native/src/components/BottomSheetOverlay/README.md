# BottomSheetOverlay

BottomSheetOverlay is used to create a semi-transparent backdrop that sits on top of page content. It provides visual focus on content placed above it (such as modals or bottom sheets) and prevents interaction with underlying content. The component includes a smooth fade-in animation when rendered.

```tsx
import { BottomSheetOverlay } from '@metamask/design-system-react-native';

<BottomSheetOverlay onPress={() => console.log('Overlay pressed')} />;
```

## Props

### `onPress`

Callback function triggered when the overlay is pressed. When provided, the overlay becomes interactive, allowing users to dismiss overlays by tapping.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
import { BottomSheetOverlay } from '@metamask/design-system-react-native';

// Interactive overlay that can be dismissed
<BottomSheetOverlay onPress={() => console.log('Overlay dismissed')} />

// Non-interactive overlay (no tap handler)
<BottomSheetOverlay />
```

### `touchableOpacityProps`

Props spread to the internal TouchableOpacity component for additional properties like `testID` or `accessibilityLabel`. Use this for testing or accessibility purposes.

**Note:** `onPress` should be passed as a top-level prop, not through this object. The `style` prop is also excluded as it's handled separately.

| TYPE                                                | REQUIRED | DEFAULT     |
| --------------------------------------------------- | -------- | ----------- |
| `Omit<TouchableOpacityProps, 'onPress' \| 'style'>` | No       | `undefined` |

```tsx
import { BottomSheetOverlay } from '@metamask/design-system-react-native';

// With testID for testing
<BottomSheetOverlay
  onPress={() => console.log('Dismissed')}
  touchableOpacityProps={{
    testID: 'overlay-button',
    accessibilityLabel: 'Dismiss overlay',
  }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the overlay container. These classes will be merged with the component's default classes, allowing you to customize the overlay appearance.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { BottomSheetOverlay } from '@metamask/design-system-react-native';

// Custom background opacity
<BottomSheetOverlay twClassName="bg-black/80" />

// Custom z-index
<BottomSheetOverlay twClassName="z-50" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

The overlay applies default styles including absolute positioning, full coverage (inset-0), and a semi-transparent background color from design tokens.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { StyleSheet } from 'react-native';
import { BottomSheetOverlay } from '@metamask/design-system-react-native';

const styles = StyleSheet.create({
  customOverlay: {
    zIndex: 100,
  },
});

<BottomSheetOverlay
  style={styles.customOverlay}
  onPress={() => console.log('Pressed')}
/>;
```

### `testID`

Test identifier for the overlay container. This prop is inherited from React Native's `ViewProps`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { BottomSheetOverlay } from '@metamask/design-system-react-native';

<BottomSheetOverlay testID="overlay-container" />;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
