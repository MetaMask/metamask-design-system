# TextButton

Use `TextButton` for links placed **inline with text** (for example inside a sentence). It is text-only and is not meant to carry start or end icons. If you need icons with the label, use [`Button`](../Button/README.md) with `variant={ButtonVariant.Tertiary}` instead.

Pass [`onPress`](#onpress) (and other [`Text`](../Text/README.md) props as needed) to handle taps.

The React web `TextButton` in `@metamask/design-system-react` may expose different props until the platforms are aligned.

```tsx
import { TextButton } from '@metamask/design-system-react-native';

<TextButton onPress={() => console.log('Pressed')}>Click me</TextButton>;
```

If you need start or end icons, use tertiary `Button` instead:

```tsx
import { Button, ButtonVariant } from '@metamask/design-system-react-native';

<Button variant={ButtonVariant.Tertiary} onPress={() => console.log('Pressed')}>
  Action
</Button>;
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

## Migration from MetaMask Mobile Component Library

Migrating from the legacy `ButtonLink` in `app/component-library/components/Buttons/Button/variants/ButtonLink`? See the [TextButton (ButtonLink) migration guide](../../MIGRATION.md#textbutton-component-buttonlink) for the full prop mapping, `label` → `children`, and when to use `Button` with `variant={ButtonVariant.Tertiary}` instead.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
