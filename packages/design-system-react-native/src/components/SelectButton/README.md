# SelectButton

SelectButton is a thin wrapper around `ButtonBase`: same layout, press animation (`ButtonAnimated`), loading state, sizing, and styling as a button row. Its distinguishing behavior is **`endArrowDirection`**, which maps to a trailing arrow `Icon`; omit it and use `endAccessory` for custom trailing content instead. For a different look (plain row, borders, typography), pass through the same props you would on `ButtonBase`—for example `twClassName`, `style`, `textProps`, or `size`.

It supports an optional `startAccessory`, string or node `children`, and the end slot described above. The root matches `ButtonBase` (`accessibilityRole="button"`, `accessibilityState.disabled` when `isDisabled` is true)—use `accessibilityLabel` or `accessibilityLabelledBy` when the visible label is not enough for assistive technologies.

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton endArrowDirection={SelectButtonEndArrow.Down} onPress={() => {}}>
  Select an option
</SelectButton>;
```

## Props

Shared props live in `@metamask/design-system-shared` as `SelectButtonPropsShared` (including `variant`). The React Native props type is that contract plus all `ButtonBase` props except `endIconName`, `endIconProps`, and `disabled` (those are driven by `endArrowDirection` / `endArrowDirectionIconProps` and `isDisabled`). See `ButtonBase` for `size`, `isLoading`, `isFullWidth`, and other options.

**Note:** `SelectButtonVariant.Primary` matches **ButtonSecondary** visuals (muted row with border), not `ButtonPrimary`. `Secondary` and `Tertiary` match **ButtonTertiary** row styling; `Tertiary` adds alternative text and trailing-arrow icon colors.

### `children`

The label content: a string (styled with `textProps`) or any `ReactNode`.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `ReactNode \| string` | Yes      | N/A     |

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton endArrowDirection={SelectButtonEndArrow.Down} onPress={() => {}}>
  Network
</SelectButton>;
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
  endArrowDirection={SelectButtonEndArrow.Down}
  onPress={() => {}}
>
  Secondary row
</SelectButton>;
```

### `endArrowDirection`

When set, shows the trailing arrow icon. Maps to `IconName.ArrowUp`, `ArrowDown`, `ArrowLeft`, or `ArrowRight`. When `endArrowDirection` is omitted, no arrow is rendered; use `endAccessory` for a custom trailing node instead. If both `endArrowDirection` and `endAccessory` are passed, `endArrowDirection` wins and `endAccessory` is ignored.

Available values:

- `SelectButtonEndArrow.Up`
- `SelectButtonEndArrow.Down`
- `SelectButtonEndArrow.Left`
- `SelectButtonEndArrow.Right`

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `SelectButtonEndArrow` | No       | `undefined` |

```tsx
import {
  SelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SelectButton endArrowDirection={SelectButtonEndArrow.Right} onPress={() => {}}>
  Navigate
</SelectButton>;
```

### `endAccessory`

Optional node at the end of the row when `endArrowDirection` is omitted (for example a custom icon or badge). Not rendered when `endArrowDirection` is set.

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
  endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
>
  With custom end
</SelectButton>;
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
  startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
>
  Search
</SelectButton>;
```

### `textProps`

Optional props passed to `Text` when `children` is a string.

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
  textProps={{ variant: TextVariant.BodySm, color: TextColor.TextAlternative }}
>
  Styled label
</SelectButton>;
```

### `endArrowDirectionIconProps`

Optional props forwarded to the trailing `Icon` when `endArrowDirection` is set, except `name` (always derived from `endArrowDirection`).

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
  endArrowDirectionIconProps={{ size: IconSize.Sm }}
>
  Compact arrow
</SelectButton>;
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
  isDisabled
>
  Disabled
</SelectButton>;
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
<SelectButton onPress={() => {}} twClassName="mt-4">
  With margin
</SelectButton>

// Override default styles
<SelectButton onPress={() => {}} twClassName="px-6">
  Wider horizontal padding
</SelectButton>
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
      style={tw.style('bg-transparent', isActive && 'bg-muted')}
    >
      Conditional styling
    </SelectButton>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
