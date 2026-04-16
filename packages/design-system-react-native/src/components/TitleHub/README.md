# TitleHub

TitleHub renders a stacked header: a required title row, optional amount row, optional end accessories on each row, and optional bottom label or custom bottom content. Use it at the top of a **feature hub** or **home feed** when a **primary amount or balance** belongs under the feature name.

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Send" />;
```

## Props

### `title`

Title row (required). When `title` is a string, it uses `TextVariant.HeadingMd` and `TextColor.TextDefault` (merged with `titleProps`). For custom layout, pass a `ReactNode`. The row renders only when `title` is renderable (`null`, `undefined`, `false`, and `''` are not); a renderable `titleEndAccessory` without a renderable `title` does not show the row.

Legacy **`TitleStandard`** **`topLabel`** maps to **`title`** on `TitleHub`. The old main-line value (large amount) maps to **`amount`**, not `title`.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Send" amount="$4.42" bottomLabel="0.002 ETH" />;
```

### `titleEndAccessory`

Optional node to the right of `title` in the title row. Only visible when `title` is renderable.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleHub,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  titleEndAccessory={
    <Icon name={IconName.Info} size={IconSize.Sm} twClassName="ml-2" />
  }
  amount="$4.42"
/>;
```

### `amount`

Optional primary amount line below the title. The amount row renders only when `amount` is renderable (`null`, `undefined`, `false`, and `''` are not). A renderable `amountEndAccessory` without a renderable `amount` does not show the row. When `amount` is a non-empty string, it is wrapped with display typography (`TextVariant.DisplayLg` and `amountProps`); other `ReactNode` values render as provided.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Balance" amount="$1,234.56" />;
```

### `amountEndAccessory`

Optional node rendered to the right of the amount (for example an info icon). Only visible when `amount` is renderable.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleHub,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  amountEndAccessory={
    <Icon name={IconName.Info} size={IconSize.Sm} twClassName="ml-2" />
  }
/>;
```

### `bottomLabel`

Optional bottom label row with secondary typography when the value is a string (`BodySm`, medium, `TextColor.TextAlternative`). The row renders only when `bottomLabel` is renderable; `bottomAccessory` is not used when that row is shown. Passing only `bottomLabelEndAccessory` without a renderable `bottomLabel` does not show this row (the accessory is ignored).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Send" amount="$4.42" bottomLabel="0.002 ETH" />;
```

### `bottomLabelEndAccessory`

Optional node to the right of `bottomLabel` in the bottom label row. Only visible when `bottomLabel` is renderable (same pattern as `amountEndAccessory` with `amount`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleHub,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
  bottomLabelEndAccessory={
    <Icon name={IconName.Gas} size={IconSize.Xs} twClassName="ml-2" />
  }
/>;
```

### `bottomAccessory`

Optional custom bottom row when `bottomLabel` is not renderable. Renders without default label typography; compose layout inside the node.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleHub,
  Box,
  BoxFlexDirection,
  BoxAlignItems,
  Icon,
  IconName,
  IconSize,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  bottomAccessory={
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={1}
    >
      <Icon name={IconName.Gas} size={IconSize.Xs} />
      <Text variant={TextVariant.BodySm}>~$0.50 fee</Text>
    </Box>
  }
/>;
```

### `amountProps`

Optional props merged into the amount `Text` when `amount` is a string. Use for `testID` or typography overrides.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  amountProps={{ testID: 'title-hub-amount' }}
/>;
```

### `amountWrapperProps`

Optional props spread onto the amount row `BoxRow` (excluding `children`, `endAccessory`, and `textProps`, which TitleHub sets).

| TYPE                                                                      | REQUIRED | DEFAULT     |
| ------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<BoxRowProps>, 'children' \| 'endAccessory' \| 'textProps'>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  amountWrapperProps={{ testID: 'title-hub-amount-row' }}
/>;
```

### `titleProps`

Optional props merged into the title row `Text` when `title` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  titleProps={{ testID: 'title-hub-title' }}
  amount="$4.42"
/>;
```

### `titleWrapperProps`

Optional props spread onto the title row `BoxRow` (excluding `children`, `endAccessory`, and `textProps`, which TitleHub sets).

| TYPE                                                                      | REQUIRED | DEFAULT     |
| ------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<BoxRowProps>, 'children' \| 'endAccessory' \| 'textProps'>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Send" titleWrapperProps={{ testID: 'title-hub-title-row' }} />;
```

### `bottomLabelProps`

Optional props merged into the bottom label `Text` when `bottomLabel` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
  bottomLabelProps={{ testID: 'title-hub-bottom' }}
/>;
```

### `bottomLabelWrapperProps`

Optional props spread onto the bottom label row `BoxRow` (excluding `children`, `endAccessory`, and `textProps`, which TitleHub sets).

| TYPE                                                                      | REQUIRED | DEFAULT     |
| ------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<BoxRowProps>, 'children' \| 'endAccessory' \| 'textProps'>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
  bottomLabelWrapperProps={{ testID: 'title-hub-bottom-label-row' }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `tw.style()`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

// Add additional styles
<TitleHub twClassName="mt-4" title="Send" amount="$4.42" />

// Override default styles
<TitleHub twClassName="px-6" title="Send" amount="$4.42" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values. Other `View` props (for example `testID` and accessibility fields) are also accepted on the root container.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import { TitleHub } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <TitleHub
      title="Send"
      amount="$4.42"
      style={tw.style('opacity-90', isActive && 'opacity-100')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
