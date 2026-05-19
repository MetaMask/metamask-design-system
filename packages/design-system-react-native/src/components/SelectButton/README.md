# SelectButton

SelectButton is a compact row for opening a picker or menu: it shows a **`placeholder`** or selected **`value`**, optional leading content, and a trailing chevron (by default **down**) unless you hide it or swap in custom trailing content. Use it next to **`SegmentButton`** rows in a **`SegmentGroup`**, or on its own for filters and dropdown-style actions.

```tsx
import { SelectButton } from '@metamask/design-system-react-native';

<SelectButton placeholder="Select an option" onPress={() => {}} />;
```

## Props

The props contract is **`SelectButtonProps`** from **`@metamask/design-system-react-native`**. It includes all **`ButtonBase`** props except **`children`**, **`endIconName`**, **`endIconProps`**, and **`disabled`** (use **`isDisabled`**; the label is derived from **`placeholder`** / **`value`**).

### `placeholder`

Label text when **`value`** is **`undefined`** or **`null`**. An empty string **`""`** still counts as a selected label, not a placeholder.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

```tsx
import { SelectButton } from '@metamask/design-system-react-native';

<SelectButton placeholder="Network" onPress={() => {}} />;
```

### `value`

Optional selected label. When set to a non-null string, it replaces **`placeholder`** in the row.

| TYPE             | REQUIRED | DEFAULT     |
| ---------------- | -------- | ----------- |
| `string \| null` | No       | `undefined` |

```tsx
import { SelectButton } from '@metamask/design-system-react-native';

<SelectButton
  placeholder="Select network"
  value="Ethereum Mainnet"
  onPress={() => {}}
/>;
```

### `onPress`

Called when the row is pressed.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import { SelectButton } from '@metamask/design-system-react-native';

<SelectButton placeholder="Open menu" onPress={() => console.log('open')} />;
```

### `variant`

Controls row styling and default label colors.

Available values:

- `SelectButtonVariant.Primary` — muted filled row (default).
- `SelectButtonVariant.Secondary` — transparent row (`border-0`); pressed and loading use the pressed background.
- `SelectButtonVariant.Tertiary` — same container idea as secondary, with alternative label and trailing-arrow colors when using defaults.

| TYPE                  | REQUIRED | DEFAULT                       |
| --------------------- | -------- | ----------------------------- |
| `SelectButtonVariant` | No       | `SelectButtonVariant.Primary` |

```tsx
import {
  SelectButton,
  SelectButtonVariant,
} from '@metamask/design-system-react-native';

<SelectButton
  variant={SelectButtonVariant.Tertiary}
  placeholder="Filter"
  onPress={() => {}}
/>;
```

### `endArrowDirection`

Maps to the trailing **`Icon`**: **`ArrowUp`**, **`ArrowDown`**, **`ArrowLeft`**, or **`ArrowRight`**. When omitted and **`endAccessory`** is not used, the chevron defaults to **down**. When **`endAccessory`** is set and **`endArrowDirection`** is omitted, the accessory shows instead of the arrow. If both are set, the arrow wins and **`endAccessory`** is ignored.

Available values:

- `SelectButtonEndArrow.Up`
- `SelectButtonEndArrow.Down`
- `SelectButtonEndArrow.Left`
- `SelectButtonEndArrow.Right`

| TYPE                   | REQUIRED | DEFAULT                         |
| ---------------------- | -------- | ------------------------------- |
| `SelectButtonEndArrow` | No       | `Down` (when no `endAccessory`) |

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

When **`true`**, no trailing arrow is shown. **`endAccessory`** may still render when the resolved trailing slot is the accessory.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { SelectButton } from '@metamask/design-system-react-native';

<SelectButton placeholder="No chevron" hideEndArrow onPress={() => {}} />;
```

### `endAccessory`

Optional node at the end of the row when no trailing arrow is shown. Omit **`endArrowDirection`** and avoid relying on the default arrow, or set **`hideEndArrow`**.

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
  hideEndArrow
  endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
/>;
```

### `startAccessory`

Optional node before the label (for example a search icon).

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
  placeholder="Search"
  startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
/>;
```

### `textProps`

Optional props passed to **`Text`** when the label is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  SelectButton,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';

<SelectButton
  onPress={() => {}}
  placeholder="Styled label"
  textProps={{ variant: TextVariant.BodySm, color: TextColor.TextAlternative }}
/>;
```

### `endArrowDirectionIconProps`

Optional props forwarded to the trailing **`Icon`** when a chevron is shown (except **`name`**, which comes from **`endArrowDirection`**).

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

Disables the pressable and applies reduced opacity.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { SelectButton } from '@metamask/design-system-react-native';

<SelectButton placeholder="Disabled" isDisabled onPress={() => {}} />;
```

### `isLoading`

Shows the loading overlay on the row (same behavior as **`ButtonBase`**).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { SelectButton } from '@metamask/design-system-react-native';

<SelectButton placeholder="Loading" isLoading onPress={() => {}} />;
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
<SelectButton onPress={() => {}} placeholder="Wider padding" twClassName="px-6" />
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

### `size`

Controls the height of the button. Use `SelectButtonSize` values to keep the type aligned with the component API.

Available values:

- `SelectButtonSize.Sm` — 32px height, `rounded-lg` corners.
- `SelectButtonSize.Md` — 40px height, `rounded-xl` corners.
- `SelectButtonSize.Lg` — 48px height, `rounded-xl` corners.

| TYPE               | REQUIRED | DEFAULT               |
| ------------------ | -------- | --------------------- |
| `SelectButtonSize` | No       | `SelectButtonSize.Sm` |

```tsx
import {
  SelectButton,
  SelectButtonSize,
} from '@metamask/design-system-react-native';

<SelectButton size={SelectButtonSize.Sm} placeholder="Compact" onPress={() => {}} />
<SelectButton size={SelectButtonSize.Md} placeholder="Default" onPress={() => {}} />
<SelectButton size={SelectButtonSize.Lg} placeholder="Large" onPress={() => {}} />
```

### Other `ButtonBase` props

Pass through any other **`ButtonBase`** props you need (for example **`isFullWidth`**, **`accessibilityLabel`**, **`hitSlop`**).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
