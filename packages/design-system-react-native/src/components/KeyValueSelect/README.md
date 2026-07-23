# KeyValueSelect

KeyValueSelect is used to show a key on the left and a select value on the right in a pressable row. Use it for form and summary rows that open a picker or bottom sheet. Value-side props follow [KeyValueRow](../KeyValueRow/README.md) naming and map onto a secondary [SelectButton](../SelectButton/README.md). SelectButton-only options (placeholder and caret) use `selectButtonProps`. For a static key/value row, use KeyValueRow. For a standalone select control, use SelectButton.

```tsx
import { KeyValueSelect } from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  value="Ethereum Mainnet"
  selectButtonProps={{ placeholder: 'Select network' }}
  onPress={() => {}}
/>;
```

## Props

### `keyLabel`

The key content, as a string or custom `ReactNode`. Named `keyLabel` to avoid React's reserved `key` prop.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `string \| ReactNode` | Yes      | —       |

```tsx
import { KeyValueSelect } from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  selectButtonProps={{ placeholder: 'Select network' }}
  onPress={() => {}}
/>;
```

### `value`

Optional selected label for the select value. When `undefined` or `null`, `selectButtonProps.placeholder` is shown. An empty string `""` still counts as a selected label.

| TYPE             | REQUIRED | DEFAULT     |
| ---------------- | -------- | ----------- |
| `string \| null` | No       | `undefined` |

```tsx
import { KeyValueSelect } from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  value="Ethereum Mainnet"
  selectButtonProps={{ placeholder: 'Select network' }}
  onPress={() => {}}
/>;
```

### `valueStartAccessory`

Optional node rendered before the select label (for example an avatar or icon). Mapped to SelectButton `startAccessory`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  KeyValueSelect,
} from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Pay with"
  value="ETH"
  valueStartAccessory={<AvatarToken name="ETH" size={AvatarTokenSize.Xs} />}
  selectButtonProps={{ placeholder: 'Select asset' }}
  onPress={() => {}}
/>;
```

### `valueEndAccessory`

Optional node at the end of the select value when no trailing arrow is shown. Mapped to SelectButton `endAccessory`. Pair with `selectButtonProps.hideEndArrow` (or omit the default arrow via SelectButton rules).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  Icon,
  IconName,
  IconSize,
  KeyValueSelect,
} from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  value="Custom"
  valueEndAccessory={<Icon name={IconName.ArrowRight} size={IconSize.Sm} />}
  selectButtonProps={{ placeholder: 'Select', hideEndArrow: true }}
  onPress={() => {}}
/>;
```

### `valueTextProps`

Optional props for the select label `Text`. Mapped to SelectButton `textProps`.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  KeyValueSelect,
  TextVariant,
} from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  value="Ethereum Mainnet"
  valueTextProps={{ variant: TextVariant.BodySm }}
  selectButtonProps={{ placeholder: 'Select network' }}
  onPress={() => {}}
/>;
```

### `selectButtonProps`

SelectButton-only options for the value. Size is always `Md` and variant is always `Secondary`.

| TYPE                              | REQUIRED | DEFAULT |
| --------------------------------- | -------- | ------- |
| `KeyValueSelectSelectButtonProps` | Yes      | —       |

Includes:

- `placeholder` (required) — label when `value` is `undefined` or `null`
- `endArrowDirection` — trailing arrow direction
- `hideEndArrow` — hide the trailing arrow
- `endArrowDirectionIconProps` — props for the trailing arrow `Icon`

```tsx
import {
  KeyValueSelect,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  value="Ethereum Mainnet"
  selectButtonProps={{
    placeholder: 'Select network',
    endArrowDirection: SelectButtonEndArrow.Right,
  }}
  onPress={() => {}}
/>;
```

### `onPress`

Callback fired when the row is pressed. Use this to open a picker or sheet.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `PressableProps['onPress']` | No       | `undefined` |

```tsx
import { KeyValueSelect } from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  selectButtonProps={{ placeholder: 'Select network' }}
  onPress={() => {}}
/>;
```

### `variant`

Row height: compact summary (40px) or taller input context (48px).

Available values:

- `KeyValueRowVariant.Summary` — outer row `h-10` (40px).
- `KeyValueRowVariant.Input` — outer row `h-12` (48px).

| TYPE                 | REQUIRED | DEFAULT                      |
| -------------------- | -------- | ---------------------------- |
| `KeyValueRowVariant` | No       | `KeyValueRowVariant.Summary` |

```tsx
import {
  KeyValueRowVariant,
  KeyValueSelect,
} from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  variant={KeyValueRowVariant.Input}
  selectButtonProps={{ placeholder: 'Select' }}
  onPress={() => {}}
/>;
```

### `keyStartAccessory`

Optional node rendered before the key (for example an icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  Icon,
  IconName,
  IconSize,
  KeyValueSelect,
} from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Fee"
  keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
  selectButtonProps={{ placeholder: 'Select' }}
  onPress={() => {}}
/>;
```

### `keyEndAccessory`

Optional node rendered after the key (for example an icon or badge).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  Icon,
  IconName,
  IconSize,
  KeyValueSelect,
} from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Limit"
  keyEndAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
  selectButtonProps={{ placeholder: 'Select' }}
  onPress={() => {}}
/>;
```

### `keyEndButtonIconProps`

When set with `iconName`, renders a `ButtonIcon` as the key end accessory (takes precedence over `keyEndAccessory`).

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `Partial<ButtonIconProps>` | No       | `undefined` |

```tsx
import { IconName, KeyValueSelect } from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  keyEndButtonIconProps={{
    iconName: IconName.Info,
    onPress: () => {},
  }}
  selectButtonProps={{ placeholder: 'Select network' }}
  onPress={() => {}}
/>;
```

### `keyTextProps`

Optional props for the key `Text` when `keyLabel` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  KeyValueSelect,
  TextVariant,
} from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Note"
  keyTextProps={{ variant: TextVariant.BodySm }}
  selectButtonProps={{ placeholder: 'Select' }}
  onPress={() => {}}
/>;
```

### `isDisabled`

When `true`, disables the row press and applies disabled presentation on the select value.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { KeyValueSelect } from '@metamask/design-system-react-native';

<KeyValueSelect
  keyLabel="Network"
  value="Ethereum Mainnet"
  isDisabled
  selectButtonProps={{ placeholder: 'Select network' }}
  onPress={() => {}}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

Default root classes include `w-full pl-4 pr-1` so the pressable spans the full width with a 16px leading inset and a 4px trailing inset (SelectButton already contributes 12px of trailing padding).

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { KeyValueSelect } from '@metamask/design-system-react-native';

// Add additional styles
<KeyValueSelect
  keyLabel="Network"
  selectButtonProps={{ placeholder: 'Select' }}
  twClassName="mt-4"
  onPress={() => {}}
/>

// Override default styles
<KeyValueSelect
  keyLabel="Network"
  selectButtonProps={{ placeholder: 'Select' }}
  twClassName="bg-background-alternative"
  onPress={() => {}}
/>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { KeyValueSelect } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <KeyValueSelect
      keyLabel="Network"
      selectButtonProps={{ placeholder: 'Select' }}
      onPress={() => {}}
      style={tw.style('opacity-100', !isActive && 'opacity-50')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
