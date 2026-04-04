# KeyValuePair

KeyValuePair displays a key–value pair with optional start/end accessories for labels and values in summaries, forms, and lists.

```tsx
import { KeyValuePair } from '@metamask/design-system-react-native';

<KeyValuePair keyLabel="Network" value="Ethereum Mainnet" />;
```

Each row (key and value) is a `BoxHorizontal` with optional `startAccessory` / `endAccessory`. The outer layout depends on `orientation`:

- **Horizontal:** an outer `BoxHorizontal` places the key row in **`children`** (wrapped in a `Box` with `shrink-0` so the key does not shrink) and the value row in **`endAccessory`**. The value row uses `flex-1 min-w-0 justify-end` for alignment and truncation. The outer row is 40px tall (`h-10`), uses a 16px gap (`gap-4`), and vertically centers content (`items-center`).
- **Vertical:** an outer `BoxVertical` places the key row in **`children`** and the value row in **`bottomAccessory`**.

`keyStartAccessory` / `keyEndAccessory` apply to the key's inner `BoxHorizontal`; `valueStartAccessory` / `valueEndAccessory` to the value's inner `BoxHorizontal`.

## Props

### `keyLabel`

Key content: string or ReactNode. Named `keyLabel` to avoid React's reserved `key` prop.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `string \| ReactNode` | Yes      | —       |

```tsx
import { KeyValuePair } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<KeyValuePair keyLabel="Amount" value="1.5 ETH" />
<KeyValuePair keyLabel={<Text>Custom key</Text>} value="1.5 ETH" />
```

### `value`

Value content: string or ReactNode.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `string \| ReactNode` | Yes      | —       |

```tsx
import { KeyValuePair } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<KeyValuePair keyLabel="Network" value="Ethereum Mainnet" />
<KeyValuePair keyLabel="Balance" value={<Text>1.23 ETH</Text>} />
```

### `orientation`

Layout direction: horizontal (key left, value right) or vertical (key above, value below).

Available values:

- `KeyValuePairOrientation.Horizontal` — default; outer `BoxHorizontal`, key in `children`, value in `endAccessory`.
- `KeyValuePairOrientation.Vertical` — outer `BoxVertical`, key in `children`, value in `bottomAccessory`.

| TYPE                      | REQUIRED | DEFAULT                              |
| ------------------------- | -------- | ------------------------------------ |
| `KeyValuePairOrientation` | No       | `KeyValuePairOrientation.Horizontal` |

```tsx
import {
  KeyValuePair,
  KeyValuePairOrientation,
} from '@metamask/design-system-react-native';

<KeyValuePair
  keyLabel="Label"
  value="Value"
  orientation={KeyValuePairOrientation.Vertical}
/>;
```

### `keyStartAccessory` / `keyEndAccessory`

Optional nodes rendered before and after the key. Passed to the key's `BoxHorizontal` as `startAccessory` and `endAccessory`. **When `keyEndButtonIconProps` is set with an `iconName`, it takes precedence over `keyEndAccessory`** (only the `ButtonIcon` is rendered as the key's end accessory).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  KeyValuePair,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<KeyValuePair
  keyLabel="Fee"
  value="$2.59"
  keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
/>;
```

### `valueStartAccessory` / `valueEndAccessory`

Optional nodes rendered before and after the value. Passed to the value's `BoxHorizontal` as `startAccessory` and `endAccessory`. **When `valueEndButtonIconProps` is set with an `iconName`, it takes precedence over `valueEndAccessory`** (only the `ButtonIcon` is rendered as the value's end accessory).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  KeyValuePair,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<KeyValuePair
  keyLabel="Wallet"
  value="0x1234…abcd"
  valueStartAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
/>;
```

### `keyEndButtonIconProps`

When set with an `iconName`, renders a `ButtonIcon` as the key's end accessory (takes precedence over `keyEndAccessory`). Typically provide `onPress` as well. Defaults: size Sm, icon color IconAlternative (aligned with key text styling).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

```tsx
import { KeyValuePair, IconName } from '@metamask/design-system-react-native';

<KeyValuePair
  keyLabel="Network"
  value="Mainnet"
  keyEndButtonIconProps={{
    iconName: IconName.Question,
    onPress: () => {},
  }}
/>;
```

### `valueEndButtonIconProps`

When set with an `iconName`, renders a `ButtonIcon` as the value's end accessory (takes precedence over `valueEndAccessory`). Typically provide `onPress` as well. Defaults: size Sm, icon color IconDefault (aligned with value text styling).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

```tsx
import { KeyValuePair, IconName } from '@metamask/design-system-react-native';

<KeyValuePair
  keyLabel="Address"
  value="0x1234…abcd"
  valueEndButtonIconProps={{
    iconName: IconName.Copy,
    onPress: () => {},
  }}
/>;
```

### `keyTextProps` / `valueTextProps`

Optional props for the `Text` component when `keyLabel` or `value` is a string. Default key styling: BodyMd, Medium, TextAlternative. Default value: BodyMd, Medium, TextDefault. String key and value use single-line truncation by default (`numberOfLines: 1`, `ellipsizeMode: 'tail'`).

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import {
  KeyValuePair,
  TextVariant,
} from '@metamask/design-system-react-native';

<KeyValuePair
  keyLabel="Note"
  value="Details"
  keyTextProps={{ variant: TextVariant.BodySm }}
  valueTextProps={{ variant: TextVariant.BodySm }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

In horizontal orientation, the outer row always includes `h-10`; your classes are merged with that base.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { KeyValuePair } from '@metamask/design-system-react-native';

// Add additional styles
<KeyValuePair keyLabel="Amount" value="1 ETH" twClassName="mt-4" />

// Override default styles
<KeyValuePair
  keyLabel="Network"
  value="Mainnet"
  twClassName="bg-background-alternative"
/>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { KeyValuePair } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <KeyValuePair
      keyLabel="Status"
      value="Connected"
      style={tw.style('opacity-100', !isActive && 'opacity-50')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
