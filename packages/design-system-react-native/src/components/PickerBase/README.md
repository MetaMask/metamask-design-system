# PickerBase

PickerBase is a thin wrapper around `ButtonBase`: same layout, press animation (`ButtonAnimated`), loading state, sizing, and styling as a button row. The only picker-specific behavior is **`endArrow`**, which maps to a trailing arrow `Icon`; omit it and use `endAccessory` for custom trailing content instead. For a different look (plain row, borders, typography), pass through the same props you would on `ButtonBase`—for example `twClassName`, `style`, `textProps`, or `size`.

It supports an optional `startAccessory`, string or node `children`, and the end slot described above. The root matches `ButtonBase` (`accessibilityRole="button"`, `accessibilityState.disabled` when `isDisabled` is true)—use `accessibilityLabel` or `accessibilityLabelledBy` when the visible label is not enough for assistive technologies.

```tsx
import {
  PickerBase,
  PickerBaseEndArrow,
} from '@metamask/design-system-react-native';

<PickerBase endArrow={PickerBaseEndArrow.Down} onPress={() => {}}>
  Select an option
</PickerBase>;
```

## Props

Shared props live in `@metamask/design-system-shared` as `PickerBasePropsShared`. The React Native props type is that contract plus all `ButtonBase` props except `endIconName`, `endIconProps`, and `disabled` (those are driven by `endArrow` / `endArrowIconProps` and `isDisabled`). See `ButtonBase` for `size`, `isLoading`, `isFullWidth`, `textClassName`, `iconClassName`, and other options.

### `children`

The label content: a string (styled with `textProps`) or any `ReactNode`.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `ReactNode \| string` | Yes      | N/A     |

```tsx
import {
  PickerBase,
  PickerBaseEndArrow,
} from '@metamask/design-system-react-native';

<PickerBase endArrow={PickerBaseEndArrow.Down} onPress={() => {}}>
  Network
</PickerBase>;
```

### `endArrow`

When set, shows the trailing arrow icon. Maps to `IconName.ArrowUp`, `ArrowDown`, `ArrowLeft`, or `ArrowRight`. When `endArrow` is omitted, no arrow is rendered; use `endAccessory` for a custom trailing node instead. If both `endArrow` and `endAccessory` are passed, `endArrow` wins and `endAccessory` is ignored.

Available values:

- `PickerBaseEndArrow.Up`
- `PickerBaseEndArrow.Down`
- `PickerBaseEndArrow.Left`
- `PickerBaseEndArrow.Right`

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `PickerBaseEndArrow` | No       | `undefined` |

```tsx
import {
  PickerBase,
  PickerBaseEndArrow,
} from '@metamask/design-system-react-native';

<PickerBase endArrow={PickerBaseEndArrow.Right} onPress={() => {}}>
  Navigate
</PickerBase>;
```

### `endAccessory`

Optional node at the end of the row when `endArrow` is omitted (for example a custom icon or badge). Not rendered when `endArrow` is set.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  Icon,
  IconName,
  IconSize,
  PickerBase,
} from '@metamask/design-system-react-native';

<PickerBase
  onPress={() => {}}
  endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
>
  With custom end
</PickerBase>;
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
  PickerBase,
  PickerBaseEndArrow,
} from '@metamask/design-system-react-native';

<PickerBase
  endArrow={PickerBaseEndArrow.Down}
  onPress={() => {}}
  startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
>
  Search
</PickerBase>;
```

### `textProps`

Optional props passed to `Text` when `children` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  PickerBase,
  PickerBaseEndArrow,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';

<PickerBase
  endArrow={PickerBaseEndArrow.Down}
  onPress={() => {}}
  textProps={{ variant: TextVariant.BodySm, color: TextColor.TextAlternative }}
>
  Styled label
</PickerBase>;
```

### `endArrowIconProps`

Optional props forwarded to the trailing `Icon` when `endArrow` is set, except `name` (always derived from `endArrow`).

| TYPE                               | REQUIRED | DEFAULT     |
| ---------------------------------- | -------- | ----------- |
| `Partial<Omit<IconProps, 'name'>>` | No       | `undefined` |

```tsx
import {
  IconSize,
  PickerBase,
  PickerBaseEndArrow,
} from '@metamask/design-system-react-native';

<PickerBase
  endArrow={PickerBaseEndArrow.Down}
  onPress={() => {}}
  endArrowIconProps={{ size: IconSize.Sm }}
>
  Compact arrow
</PickerBase>;
```

### `isDisabled`

When true, disables the root pressable and applies reduced opacity.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import {
  PickerBase,
  PickerBaseEndArrow,
} from '@metamask/design-system-react-native';

<PickerBase endArrow={PickerBaseEndArrow.Down} onPress={() => {}} isDisabled>
  Disabled
</PickerBase>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the root row. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE                                       | REQUIRED | DEFAULT     |
| ------------------------------------------ | -------- | ----------- |
| `string \| ((pressed: boolean) => string)` | No       | `undefined` |

```tsx
import { PickerBase } from '@metamask/design-system-react-native';

// Add additional styles
<PickerBase onPress={() => {}} twClassName="mt-4">
  With margin
</PickerBase>

// Override default styles
<PickerBase onPress={() => {}} twClassName="px-6">
  Wider horizontal padding
</PickerBase>
```

### `style`

Use the `style` prop to customize the root with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { PickerBase } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <PickerBase
      onPress={() => {}}
      style={tw.style('bg-transparent', isActive && 'bg-muted')}
    >
      Conditional styling
    </PickerBase>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
