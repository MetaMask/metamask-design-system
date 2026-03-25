# TextButton

Text-only control for links and inline actions. It wraps the design system [`Text`](../Text/README.md) with link defaults (medium weight, `TextColor.PrimaryDefault`). While pressed (`onPressIn` … `onPressOut`), the color switches to `TextColor.PrimaryDefaultPressed`. It does **not** use React Native `Pressable`; interaction uses [`onPress`](#onpress) on `Text`.

By default, [`suppressHighlighting`](#suppresshighlighting) is `true` so React Native does not show the standard pressed highlight on the text (which can look like a background); pressed feedback is the color change above.

The React web `TextButton` in `@metamask/design-system-react` may expose different props until the platforms are aligned.

```tsx
import { TextButton } from '@metamask/design-system-react-native';

<TextButton onPress={() => console.log('Pressed')}>Click me</TextButton>;
```

## Props

### `children`

Content for the label.

| TYPE              | REQUIRED | DEFAULT     |
| ----------------- | -------- | ----------- |
| `React.ReactNode` | Yes      | `undefined` |

### `onPress`

Called when the user presses the label. Primary interaction for this component.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `TextProps['onPress']` | No       | `undefined` |

### `variant`

Typography variant. Defaults to `TextVariant.BodyMd` (same as [`Text`](../Text/README.md)).

| TYPE          | REQUIRED | DEFAULT              |
| ------------- | -------- | -------------------- |
| `TextVariant` | No       | `TextVariant.BodyMd` |

### `fontWeight`

| TYPE         | REQUIRED | DEFAULT             |
| ------------ | -------- | ------------------- |
| `FontWeight` | No       | `FontWeight.Medium` |

### `accessibilityRole`

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | No       | `link`  |

### `twClassName`

Additional TWRNC classes merged into the inner `Text`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `suppressHighlighting`

Forwarded to React Native `Text`. When `true` (default), the OS default pressed highlight is not applied.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `true`  |

### `style`

React Native style for the root `Text`, merged after token styles. Prefer `twClassName` with design tokens when possible.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<TextStyle>` | No       | `undefined` |

Other `Text` / React Native `Text` props are supported via `TextButtonProps` (see [`TextProps`](../Text/Text.types.ts)).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
