# SelectButton

SelectButton is a thin wrapper around `ButtonBase`: same layout, press animation (`ButtonAnimated`), loading state, sizing, and styling as a button row. Its distinguishing behavior is the trailing arrow from **`endArrowDirection`** (defaults to **down** when you are not using `endAccessory`); set **`hideEndArrow`** to hide the arrow, or use **`endAccessory`** for custom trailing content when you omit `endArrowDirection`. For a different look (plain row, borders, typography), pass through the same props you would on `ButtonBase`—for example `twClassName`, `style`, `textProps`, or `size`.

The main label comes from **`placeholder`** (always required) or **`value`**: when `value` is `undefined` or `null`, **`placeholder`** is rendered as the label passed to `ButtonBase`; otherwise **`value`** is rendered as a string. Only `undefined` and `null` mean “show placeholder”; an empty string `""` still renders as the selected label.

It supports an optional `startAccessory`, and the end slot described above. The root matches `ButtonBase` (`accessibilityRole="button"`, `accessibilityState.disabled` when `isDisabled` is true)—use `accessibilityLabel` or `accessibilityHint` when the visible label is not enough for assistive technologies.

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton placeholder="Select an option" onPress={() => {}} />;
```

## Props

Shared props live in `@metamask/design-system-shared` as `SelectButtonPropsShared` (including `placeholder`, `value`, and `variant`). The React Native props type is that contract plus all `ButtonBase` props except `children`, `endIconName`, `endIconProps`, and `disabled` (`children` is computed from `placeholder` / `value`; trailing icons come from `endArrowDirection` (default **down** when applicable), `hideEndArrow`, and `endArrowDirectionIconProps`; use `isDisabled`). See `ButtonBase` for `size`, `isLoading`, `isFullWidth`, and other options.

**Note:** `SelectButtonVariant.Primary` matches **ButtonSecondary** visuals (muted row with border), not `ButtonPrimary`. `Secondary` and `Tertiary` match **ButtonTertiary** row styling; `Tertiary` adds alternative text and trailing-arrow icon colors.

### `placeholder`

Label text shown when `value` is `undefined` or `null`.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton
  placeholder="Network"
  endArrowDirection={SelectButtonEndArrow.Down}
  onPress={() => {}}
/>;
```

### `value`

Optional selected label string. When set to a non-null string, it is rendered instead of `placeholder` (styled with `textProps` like other string labels).

| TYPE             | REQUIRED | DEFAULT     |
| ---------------- | -------- | ----------- |
| `string \| null` | No       | `undefined` |

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton
  placeholder="Select network"
  value="Ethereum Mainnet"
  endArrowDirection={SelectButtonEndArrow.Down}
  onPress={() => {}}
/>;
```

### `variant`

Controls row visuals: `primary` (ButtonSecondary-style), `secondary` (ButtonTertiary-style), or `tertiary` (same container as secondary, with alternative text and trailing arrow icon color for string labels).

| TYPE                  | REQUIRED | DEFAULT   |
| --------------------- | -------- | --------- |
| `SelectButtonVariant` | No       | `primary` |

Available values:

- `SelectButtonVariant.Primary`
- `SelectButtonVariant.Secondary`
- `SelectButtonVariant.Tertiary`

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
  SelectButtonVariant,
} from '@metamask/design-system-react-native';

<SelectButton
  variant={SelectButtonVariant.Secondary}
  placeholder="Secondary row"
  endArrowDirection={SelectButtonEndArrow.Down}
  onPress={() => {}}
/>;
```

### `endArrowDirection`

Maps to the trailing arrow `Icon`: `IconName.ArrowUp`, `ArrowDown`, `ArrowLeft`, or `ArrowRight`. When omitted and **`endAccessory`** is not used, the arrow defaults to **down**. When omitted and **`endAccessory`** is set, the accessory renders instead of the arrow. If both `endArrowDirection` and `endAccessory` are passed, `endArrowDirection` wins and `endAccessory` is ignored. Use **`hideEndArrow`** to suppress the arrow regardless.

Available values:

- `SelectButtonEndArrow.Up`
- `SelectButtonEndArrow.Down`
- `SelectButtonEndArrow.Left`
- `SelectButtonEndArrow.Right`

| TYPE                   | REQUIRED | DEFAULT                         |
| ---------------------- | -------- | ------------------------------- |
| `SelectButtonEndArrow` | No       | `down` (when no `endAccessory`) |

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton
  placeholder="Navigate"
  endArrowDirection={SelectButtonEndArrow.Right}
  onPress={() => {}}
/>;
```

### `hideEndArrow`

When `true`, the trailing arrow is not rendered. `endAccessory` may still render.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `endAccessory`

Optional node at the end of the row when no trailing arrow is shown: omit `endArrowDirection` and do not rely on the default arrow, or set `hideEndArrow`. Not rendered when an arrow is shown from `endArrowDirection` (including the default **down**).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  Icon,
  IconName,
  IconSize,
  SelectButton,
} from '@metamask/design-system-react-native';

<SelectButton
  onPress={() => {}}
  placeholder="With custom end"
  endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
/>;
```

### `startAccessory`

Optional node rendered before the label (for example an icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  Icon,
  IconName,
  IconSize,
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton
  endArrowDirection={SelectButtonEndArrow.Down}
  onPress={() => {}}
  placeholder="Search"
  startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
/>;
```

### `textProps`

Optional props passed to `Text` when the rendered label is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';

<SelectButton
  endArrowDirection={SelectButtonEndArrow.Down}
  onPress={() => {}}
  placeholder="Styled label"
  textProps={{ variant: TextVariant.BodySm, color: TextColor.TextAlternative }}
/>;
```

### `endArrowDirectionIconProps`

Optional props forwarded to the trailing `Icon` when a trailing arrow is shown (including the default **down**), except `name` (always derived from the resolved direction).

| TYPE                               | REQUIRED | DEFAULT     |
| ---------------------------------- | -------- | ----------- |
| `Partial<Omit<IconProps, 'name'>>` | No       | `undefined` |

```tsx
import {
  IconSize,
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton
  endArrowDirection={SelectButtonEndArrow.Down}
  onPress={() => {}}
  placeholder="Compact arrow"
  endArrowDirectionIconProps={{ size: IconSize.Sm }}
/>;
```

### `isDisabled`

When true, disables the root pressable and applies reduced opacity.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton
  endArrowDirection={SelectButtonEndArrow.Down}
  onPress={() => {}}
  placeholder="Disabled"
  isDisabled
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the root row. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE                                       | REQUIRED | DEFAULT     |
| ------------------------------------------ | -------- | ----------- |
| `string \| ((pressed: boolean) => string)` | No       | `undefined` |

```tsx
import { SelectButton } from '@metamask/design-system-react-native';

// Add additional styles
<SelectButton onPress={() => {}} placeholder="With margin" twClassName="mt-4" />

// Override default styles
<SelectButton onPress={() => {}} placeholder="Wider horizontal padding" twClassName="px-6" />
```

### `style`

Use the `style` prop to customize the root with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { SelectButton } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <SelectButton
      onPress={() => {}}
      placeholder="Conditional styling"
      style={tw.style('bg-transparent', isActive && 'bg-muted')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
