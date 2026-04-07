# KeyValueRow

KeyValueRow is used to show a key (label) on the left and a value on the right with optional start and end accessories on each row, for summaries, forms, and lists. The outer layout is a horizontal `BoxHorizontal` (key in `children`, value in `endAccessory`); each of the key and value rows uses `BoxHorizontal` with optional `startAccessory` / `endAccessory`. Row height is controlled by **`variant`** (`summary` → 40px / `h-10`, `input` → 48px / `h-12`).

```tsx
import { KeyValueRow } from '@metamask/design-system-react-native';

<KeyValueRow keyLabel="Network" value="Ethereum Mainnet" />;
```

Each inner row (key and value) is a `BoxHorizontal`. The outer row uses a 16px gap (`gap-4`), vertically centers content (`items-center`), and places the key in **`children`** (wrapped in a `Box` with `shrink-0`) and the value in **`endAccessory`** with `flex-1 min-w-0 justify-end` for alignment and truncation.

## Props

### `keyLabel`

The key content, as a string or custom `ReactNode`. Named `keyLabel` to avoid React's reserved `key` prop.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `string \| ReactNode` | Yes      | —       |

```tsx
import { KeyValueRow } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<KeyValueRow keyLabel="Amount" value="1.5 ETH" />
<KeyValueRow keyLabel={<Text>Custom key</Text>} value="1.5 ETH" />
```

Two-column layout example:

```tsx
import {
  Box,
  BoxFlexDirection,
  KeyValueRow,
} from '@metamask/design-system-react-native';

<Box flexDirection={BoxFlexDirection.Row} gap={4} twClassName="w-full">
  <Box flexDirection={BoxFlexDirection.Column} gap={6} twClassName="flex-1">
    <KeyValueRow keyLabel="24h high" value="$2,450.62" />
    <KeyValueRow keyLabel="Market cap" value="$1.23B" />
  </Box>
  <Box flexDirection={BoxFlexDirection.Column} gap={6} twClassName="flex-1">
    <KeyValueRow keyLabel="24h volume" value="$892.1M" />
    <KeyValueRow keyLabel="Circulating supply" value="120.4M" />
  </Box>
</Box>;
```

### `value`

The value content, as a string or `ReactNode`.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `string \| ReactNode` | Yes      | —       |

```tsx
import { KeyValueRow } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<KeyValueRow keyLabel="Network" value="Ethereum Mainnet" />
<KeyValueRow keyLabel="Balance" value={<Text>1.23 ETH</Text>} />
```

### `variant`

Row height: compact summary (40px) or taller input context (48px).

| TYPE                 | REQUIRED | DEFAULT                      |
| -------------------- | -------- | ---------------------------- |
| `KeyValueRowVariant` | No       | `KeyValueRowVariant.Summary` |

- `KeyValueRowVariant.Summary` — outer row `h-10` (40px).
- `KeyValueRowVariant.Input` — outer row `h-12` (48px).

```tsx
import {
  KeyValueRow,
  KeyValueRowVariant,
} from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Label"
  value="Value"
  variant={KeyValueRowVariant.Input}
/>;
```

### `keyStartAccessory`

Optional node rendered before the key (for example an icon). Passed to the key row `BoxHorizontal` as `startAccessory`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  KeyValueRow,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Fee"
  value="$2.59"
  keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
/>;
```

### `keyEndAccessory`

Optional node rendered after the key. Passed to the key row `BoxHorizontal` as `endAccessory`. If `keyEndButtonIconProps` includes an `iconName`, that `ButtonIcon` is shown instead of this accessory.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `valueStartAccessory`

Optional node rendered before the value. Passed to the value row `BoxHorizontal` as `startAccessory`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  KeyValueRow,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Wallet"
  value="0x1234…abcd"
  valueStartAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
/>;
```

### `valueEndAccessory`

Optional node rendered after the value. Passed to the value row `BoxHorizontal` as `endAccessory`. If `valueEndButtonIconProps` includes an `iconName`, that `ButtonIcon` is shown instead of this accessory.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `keyEndButtonIconProps`

When this object includes an `iconName`, a `ButtonIcon` is rendered as the key’s end accessory (and takes precedence over `keyEndAccessory`). Typically pass `onPress` as well. Defaults: size Sm, icon color IconAlternative (aligned with key text).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

```tsx
import { KeyValueRow, IconName } from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Network"
  value="Mainnet"
  keyEndButtonIconProps={{
    iconName: IconName.Question,
    onPress: () => {},
  }}
/>;
```

### `valueEndButtonIconProps`

When this object includes an `iconName`, a `ButtonIcon` is rendered as the value’s end accessory (and takes precedence over `valueEndAccessory`). Typically pass `onPress` as well. Defaults: size Sm, icon color IconDefault (aligned with value text).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

```tsx
import { KeyValueRow, IconName } from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Address"
  value="0x1234…abcd"
  valueEndButtonIconProps={{
    iconName: IconName.Copy,
    onPress: () => {},
  }}
/>;
```

### `keyTextProps`

Optional props for `Text` when `keyLabel` is a string. Defaults: BodyMd, Medium, TextAlternative, single-line truncation (`numberOfLines: 1`, `ellipsizeMode: 'tail'`).

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { KeyValueRow, TextVariant } from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Note"
  value="Details"
  keyTextProps={{ variant: TextVariant.BodySm }}
/>;
```

### `valueTextProps`

Optional props for `Text` when `value` is a string. Defaults: BodyMd, Medium, TextDefault, single-line truncation (`numberOfLines: 1`, `ellipsizeMode: 'tail'`).

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { KeyValueRow, TextVariant } from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Amount"
  value="1.5 ETH"
  valueTextProps={{ variant: TextVariant.BodySm }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

The outer row always includes a height class from `variant` (`h-10` or `h-12`); your classes are merged with that base.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { KeyValueRow } from '@metamask/design-system-react-native';

// Add additional styles
<KeyValueRow keyLabel="Amount" value="1 ETH" twClassName="mt-4" />

// Override default styles
<KeyValueRow
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
import { KeyValueRow } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <KeyValueRow
      keyLabel="Status"
      value="Connected"
      style={tw.style('opacity-100', !isActive && 'opacity-50')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
