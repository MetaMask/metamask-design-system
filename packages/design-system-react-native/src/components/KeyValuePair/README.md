# KeyValuePair

KeyValuePair displays a key–value pair with optional start/end accessories. When orientation is horizontal, the wrapper vertically centers children and uses a 16px gap between key and value. `keyStartAccessory` and `keyEndAccessory` are passed to the key’s TextWithAccessories; `valueStartAccessory` and `valueEndAccessory` to the value’s TextWithAccessories.

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

Layout direction: horizontal (key left, value right) or vertical (key above, value below). When horizontal, the wrapper vertically centers children and uses a 16px gap between key and value.

| TYPE                      | REQUIRED | DEFAULT                              |
| ------------------------- | -------- | ------------------------------------ |
| `KeyValuePairOrientation` | No       | `KeyValuePairOrientation.Horizontal` |

### `keyStartAccessory` / `keyEndAccessory`

Optional nodes rendered before and after the key. Passed to the key’s TextWithAccessories as `startAccessory` and `endAccessory`. **When `keyEndButtonIconProps` is set, it takes precedence over `keyEndAccessory`** (only the ButtonIcon is rendered as the key’s endAccessory).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `valueStartAccessory` / `valueEndAccessory`

Optional nodes rendered before and after the value. Passed to the value’s TextWithAccessories as `startAccessory` and `endAccessory`. **When `valueEndButtonIconProps` is set, it takes precedence over `valueEndAccessory`** (only the ButtonIcon is rendered as the value’s endAccessory).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `keyEndButtonIconProps`

When set, renders a `ButtonIcon` as the key’s endAccessory (takes precedence over `keyEndAccessory`). Provide at least `iconName` and typically `onPress`. Defaults: size Xs, icon color IconAlternative (same as key text).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

### `valueEndButtonIconProps`

When set, renders a `ButtonIcon` as the value’s endAccessory (takes precedence over `valueEndAccessory`). Provide at least `iconName` and typically `onPress`. Defaults: size Xs when horizontal, Sm when vertical; icon color IconDefault (same as value text).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

### `keyProps` / `valueProps`

Optional props for the Text component when `keyLabel` or `value` is a string. Default key styling: BodySm, Medium, TextAlternative. Default value: BodySm + Medium when horizontal, BodyMd + Medium when vertical; TextDefault.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

### `twClassName`

Tailwind class names applied to the wrapper Box. Add e.g. `flex-1` when the pair should fill available space.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
