# TitleHub

TitleHub is used to display a **required** title row with an optional amount line below it, optional rows beneath that, optional inline accessories next to each row, and optional bottom label or custom bottom content.

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Send" />;
```

## Props

### `title`

Title row (required). When `title` is a string, it uses `TextVariant.HeadingMd` and `TextColor.TextDefault` (merged with `titleProps`). For custom layout, pass a `ReactNode`. The row also renders when only `titleEndAccessory` is renderable (for example `title={false}` with an end accessory).

Legacy **`TitleStandard`** **`topLabel`** maps to **`title`** on `TitleHub`. The old main-line value (large amount) maps to **`amount`**, not `title`.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Send" amount="$4.42" bottomLabel="0.002 ETH" />;
```

### `titleEndAccessory`

Optional node to the right of `title` in the title row (same pattern as `amountEndAccessory`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleHub,
  Box,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  titleEndAccessory={
    <Box twClassName="ml-2">
      <Icon name={IconName.Info} size={IconSize.Sm} />
    </Box>
  }
  amount="$4.42"
/>;
```

### `amount`

Optional primary amount line below the title. The amount row renders when `amount` or `amountEndAccessory` is renderable. When `amount` is a string, it is wrapped with display typography (`TextVariant.DisplayLg` and `amountProps`); other `ReactNode` values render as provided.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Balance" amount="$1,234.56" />;
```

### `amountEndAccessory`

Optional node rendered to the right of the amount (for example an info icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleHub,
  Box,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  amountEndAccessory={
    <Box twClassName="ml-2">
      <Icon name={IconName.Info} size={IconSize.Sm} />
    </Box>
  }
/>;
```

### `bottomLabel`

Optional bottom label row with secondary typography when the value is a string (`BodySm`, medium, `TextColor.TextAlternative`). If `bottomLabel` or `bottomLabelEndAccessory` is renderable, that row is shown and `bottomAccessory` is not used.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub title="Send" amount="$4.42" bottomLabel="0.002 ETH" />;
```

### `bottomLabelEndAccessory`

Optional node to the right of `bottomLabel` in the bottom label row (same pattern as `amountEndAccessory`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleHub,
  Box,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
  bottomLabelEndAccessory={
    <Box twClassName="ml-2">
      <Icon name={IconName.Gas} size={IconSize.Xs} />
    </Box>
  }
/>;
```

### `bottomAccessory`

Optional custom bottom row when neither `bottomLabel` nor `bottomLabelEndAccessory` is renderable. Renders without default label typography; compose layout inside the node.

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

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  amountProps={{ testID: 'title-hub-amount' }}
/>;
```

### `titleProps`

Optional props merged into the title row `Text` when `title` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  titleProps={{ testID: 'title-hub-title' }}
  amount="$4.42"
/>;
```

### `bottomLabelProps`

Optional props merged into the bottom label `Text` when `bottomLabel` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { TitleHub } from '@metamask/design-system-react-native';

<TitleHub
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
  bottomLabelProps={{ testID: 'title-hub-bottom' }}
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
