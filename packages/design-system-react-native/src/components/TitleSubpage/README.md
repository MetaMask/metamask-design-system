# TitleSubpage

TitleSubpage lays out a required identity block (leading `titleAvatar` beside a title stack), an optional subtitle, an optional amount row, optional bottom rows, and optional inline accessories per row. On React Native, `titleAvatar` is rendered in a 40×40 centered slot as the `startAccessory` of the identity `BoxRow`.

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
/>;
```

## Props

### `titleAvatar`

Leading visual for the identity row (required). Rendered in a 40×40 box with content centered horizontally and vertically, as the `startAccessory` of the identity `BoxRow`. Typically pass an avatar or token component (for example `AvatarToken`).

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  amount="$4.42"
/>;
```

### `title`

Title row (required). When `title` is a string, it uses `TextVariant.HeadingSm` and `TextColor.TextDefault` (merged with `titleProps`). Pass a `ReactNode` for custom layout. The row also renders when only `titleEndAccessory` is renderable (for example `title={false}` with an end accessory).

Legacy `TitleStandard` `topLabel` maps to `title` on `TitleSubpage`. The old main-line value (large amount) maps to `amount`, not `title`.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
/>;
```

### `titleEndAccessory`

Optional node to the right of `title` in the title row (same pattern as `amountEndAccessory`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleSubpage,
  Box,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  titleEndAccessory={
    <Box twClassName="ml-2">
      <Icon name={IconName.Info} size={IconSize.Sm} />
    </Box>
  }
  amount="$4.42"
/>;
```

### `subtitle`

Optional subtitle row between the title and the amount. When `subtitle` is a string, it uses `TextVariant.BodySm`, medium weight, and `TextColor.TextAlternative` (merged with `subtitleProps`). Pass a `ReactNode` for custom layout. The row also renders when only `subtitleEndAccessory` is renderable (for example `subtitle={false}` with an end accessory).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  subtitle="Account 1"
  amount="$4.42"
/>;
```

### `subtitleEndAccessory`

Optional node to the right of `subtitle` in the subtitle row (same pattern as `titleEndAccessory`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleSubpage,
  Box,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  subtitle="Account 1"
  subtitleEndAccessory={
    <Box twClassName="ml-2">
      <Icon name={IconName.Info} size={IconSize.Sm} />
    </Box>
  }
  amount="$4.42"
/>;
```

### `amount`

Optional primary amount line below the title and optional subtitle. The amount row renders when `amount` or `amountEndAccessory` is renderable. When `amount` is a string, it is wrapped with display typography (`TextVariant.DisplayLg` and `amountProps`); other `ReactNode` values render as provided.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Balance"
  amount="$1,234.56"
/>;
```

### `amountEndAccessory`

Optional node rendered to the right of the amount (for example an info icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleSubpage,
  Box,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
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

Optional bottom label row. When `bottomLabel` is a string, it uses `TextVariant.BodySm`, medium weight, and `TextColor.TextAlternative` (merged with `bottomLabelProps`). If `bottomLabel` or `bottomLabelEndAccessory` is renderable, that row is shown instead of `bottomAccessory`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
/>;
```

### `bottomLabelEndAccessory`

Optional node to the right of `bottomLabel` in the bottom label row (for example a `Text` label or an icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleSubpage,
  Box,
  Text,
  TextColor,
  FontWeight,
  TextVariant,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="USD Coin"
  subtitle="USDC"
  amount="$1.0001"
  bottomLabel="+$0.000126 (+0.01%)"
  bottomLabelEndAccessory={
    <Text
      variant={TextVariant.BodySm}
      fontWeight={FontWeight.Medium}
      color={TextColor.TextAlternative}
    >
      Today
    </Text>
  }
  bottomLabelProps={{ color: TextColor.SuccessDefault }}
/>;
```

### `bottomAccessory`

Optional custom bottom row when neither `bottomLabel` nor `bottomLabelEndAccessory` is renderable. Renders without default label typography; compose layout inside the node.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleSubpage,
  Box,
  BoxFlexDirection,
  BoxAlignItems,
  Icon,
  IconName,
  IconSize,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
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
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  amount="$4.42"
  amountProps={{ testID: 'title-subpage-amount' }}
/>;
```

### `titleProps`

Optional props merged into the title row `Text` when `title` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  titleProps={{ testID: 'title-subpage-title' }}
  amount="$4.42"
/>;
```

### `subtitleProps`

Optional props merged into the subtitle row `Text` when `subtitle` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  subtitle="Account 1"
  subtitleProps={{ testID: 'title-subpage-subtitle' }}
  amount="$4.42"
/>;
```

### `bottomLabelProps`

Optional props merged into the bottom label `Text` when `bottomLabel` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={
    <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
  }
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
  bottomLabelProps={{ testID: 'title-subpage-bottom' }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TitleSubpage, Box } from '@metamask/design-system-react-native';

// Add additional styles
<TitleSubpage
  titleAvatar={<Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />}
  twClassName="mt-4"
  title="Send"
  amount="$4.42"
/>

// Override default styles
<TitleSubpage
  titleAvatar={<Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />}
  twClassName="px-6"
  title="Send"
  amount="$4.42"
/>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import { TitleSubpage, Box } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <TitleSubpage
      titleAvatar={
        <Box twClassName="h-8 w-8 shrink-0 rounded-full bg-primary-muted" />
      }
      title="Send"
      amount="$4.42"
      style={tw.style('opacity-90', isActive && 'opacity-100')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
