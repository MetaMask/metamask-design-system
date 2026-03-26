# TextButton

Use `TextButton` for links and inline text actions. Pass [`onPress`](#onpress) (and other [`Text`](../Text/README.md) props as needed) to handle taps.

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

Additional TWRNC classes merged into the label.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `suppressHighlighting`

When `true` (default), React Native does not apply its default text press highlight.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `true`  |

### `style`

Style for the label, merged after design-token styles. Prefer `twClassName` with design tokens when possible.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<TextStyle>` | No       | `undefined` |

Other `Text` / React Native `Text` props are supported via `TextButtonProps` (see [`TextProps`](../Text/Text.types.ts)).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
