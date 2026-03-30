# KeyValuePair

KeyValuePair displays a key–value pair with optional start/end accessories. Each row (key and value) is a `BoxHorizontal` with optional `startAccessory` / `endAccessory`. The outer layout depends on `orientation`:

- **Horizontal:** an outer `BoxHorizontal` places the key row in **`children`** (wrapped in a `Box` with `flex-1 min-w-0` for truncation) and the value row in **`endAccessory`**. It uses a 16px gap and vertically centers the row (`items-center`).
- **Vertical:** an outer `BoxVertical` places the key row in **`children`** and the value row in **`bottomAccessory`**.

`keyStartAccessory` / `keyEndAccessory` apply to the key’s inner `BoxHorizontal`; `valueStartAccessory` / `valueEndAccessory` to the value’s inner `BoxHorizontal`.

```tsx
import {
  KeyValuePair,
  KeyValuePairOrientation,
} from '@metamask/design-system-react-native';

<KeyValuePair
  keyLabel="Network"
  value="Ethereum Mainnet"
  orientation={KeyValuePairOrientation.Horizontal}
/>;
```

## Props

### `keyLabel`

Key content: string or ReactNode. Named `keyLabel` to avoid React’s reserved `key` prop.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `string \| ReactNode` | Yes      | —       |

### `value`

Value content: string or ReactNode.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `string \| ReactNode` | Yes      | —       |

### `orientation`

Layout direction: horizontal (key left, value right) or vertical (key above, value below). Horizontal mode uses an outer `BoxHorizontal` (key as `children`, value as `endAccessory`, gap 16px). Vertical mode uses an outer `BoxVertical` (key as `children`, value as `bottomAccessory`).

| TYPE                      | REQUIRED | DEFAULT                              |
| ------------------------- | -------- | ------------------------------------ |
| `KeyValuePairOrientation` | No       | `KeyValuePairOrientation.Horizontal` |

### `keyStartAccessory` / `keyEndAccessory`

Optional nodes rendered before and after the key. Passed to the key’s BoxHorizontal as `startAccessory` and `endAccessory`. **When `keyEndButtonIconProps` is set, it takes precedence over `keyEndAccessory`** (only the ButtonIcon is rendered as the key’s endAccessory).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `valueStartAccessory` / `valueEndAccessory`

Optional nodes rendered before and after the value. Passed to the value’s BoxHorizontal as `startAccessory` and `endAccessory`. **When `valueEndButtonIconProps` is set, it takes precedence over `valueEndAccessory`** (only the ButtonIcon is rendered as the value’s endAccessory).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `keyEndButtonIconProps`

When set, renders a `ButtonIcon` as the key’s endAccessory (takes precedence over `keyEndAccessory`). Provide at least `iconName` and typically `onPress`. Defaults: size Sm, icon color IconAlternative (aligned with key text styling).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

### `valueEndButtonIconProps`

When set, renders a `ButtonIcon` as the value’s endAccessory (takes precedence over `valueEndAccessory`). Provide at least `iconName` and typically `onPress`. Defaults: size Sm, icon color IconDefault (aligned with value text styling).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

### `keyProps` / `valueProps`

Optional props for the Text component when `keyLabel` or `value` is a string. Default key styling: BodyMd, Medium, TextAlternative. Default value: BodyMd, Medium, TextDefault.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

### `twClassName`

Tailwind class names applied to the outer wrapper (`BoxHorizontal` or `BoxVertical`, each backed by `Box`). Add e.g. `flex-1` when the pair should fill available space.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
