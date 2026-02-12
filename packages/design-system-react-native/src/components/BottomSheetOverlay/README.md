# BottomSheetOverlay

`BottomSheetOverlay` is a semi-transparent layer that sits on top of page content to provide focus on content placed above it (like modals or bottom sheets) and prevents interaction with the underlying content. The component includes a smooth fade-in animation when rendered.

```tsx
import { BottomSheetOverlay } from '@metamask/design-system-react-native';

<BottomSheetOverlay onPress={() => console.log('Overlay pressed')} />;
```

---

## Props

This component extends React Native's [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity).

### `onPress`

Optional callback function triggered when the overlay is pressed. When provided, the overlay becomes interactive.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
import { BottomSheetOverlay } from '@metamask/design-system-react-native';

// Interactive overlay
<BottomSheetOverlay onPress={() => console.log('Overlay dismissed')} />

// Non-interactive overlay
<BottomSheetOverlay />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. The overlay applies default styles including absolute positioning, full coverage (inset-0), and a semi-transparent background color from design tokens.

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

<BottomSheetOverlay style={styles.customOverlay} onPress={() => {}} />;
```

## Usage

### Basic Usage

```tsx
import { View } from 'react-native';
import {
  BottomSheetOverlay,
  Box,
  Text,
} from '@metamask/design-system-react-native';

export const OverlayExample = () => (
  <View style={{ position: 'relative', height: 400 }}>
    <BottomSheetOverlay onPress={() => console.log('Overlay pressed')} />
    <Box>
      <Text>Content behind overlay</Text>
    </Box>
  </View>
);
```

### With Bottom Sheet

```tsx
import { useState } from 'react';
import { View } from 'react-native';
import {
  BottomSheetOverlay,
  Box,
  Text,
  Button,
} from '@metamask/design-system-react-native';

export const BottomSheetExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Button onPress={() => setIsOpen(true)}>Open Bottom Sheet</Button>

      {isOpen && (
        <>
          <BottomSheetOverlay onPress={() => setIsOpen(false)} />
          <Box
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }}
          >
            <Text>Bottom Sheet Content</Text>
          </Box>
        </>
      )}
    </View>
  );
};
```

## Animation

The component automatically animates in with a fade effect using the design system's standard animation duration. The animation cannot be customized as it uses the standard `AnimationDuration.Fast` token to ensure consistency across the design system.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
