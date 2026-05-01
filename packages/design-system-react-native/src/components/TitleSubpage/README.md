# TitleSubpage

TitleSubpage lays out a required identity block (leading `titleAvatar` beside a title stack), an optional subtitle, an optional amount row, optional bottom rows, and optional inline accessories per row. On React Native, `titleAvatar` is passed straight through as the identity `BoxRow` `startAccessory` (no fixed-size or `overflow: hidden` wrapper), so network badges and other overlays can extend past the token without being clipped. For the default layout, use `AvatarToken` at `AvatarTokenSize.Lg` (40×40) so the token aligns with the row; the component stays agnostic—you own composition when you need badges or other chrome.

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
/>;
```

## Props

### `titleAvatar`

Leading visual for the identity row (required). Passed as the `startAccessory` of the identity `BoxRow` with no inner layout wrapper. Prefer `AvatarToken` at `AvatarTokenSize.Lg` for the standard 40×40 footprint; wrap in `BadgeWrapper` (or similar) when you need a network badge or other element that should sit outside the token bounds.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  amount="$4.42"
/>;
```

```tsx
import {
  AvatarNetwork,
  AvatarNetworkSize,
  AvatarToken,
  AvatarTokenSize,
  BadgeWrapper,
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
  TitleSubpage,
} from '@metamask/design-system-react-native';

// Supply `src` (or equivalent) for your token and network artwork.

<TitleSubpage
  titleAvatar={
    <BadgeWrapper
      badge={
        <AvatarNetwork
          src={EthSvg}
          size={AvatarNetworkSize.Xs}
          name="Ethereum"
        />
      }
      position={BadgeWrapperPosition.BottomRight}
      positionAnchorShape={BadgeWrapperPositionAnchorShape.Circular}
    >
      <AvatarToken src={UsdcSvg} size={AvatarTokenSize.Lg} name="USD Coin" />
    </BadgeWrapper>
  }
  title="USD Coin"
/>;
```

### `title`

Title row (required). The row renders when `title` is truthy. When `title` is a string, it uses `TextVariant.HeadingSm` and `TextColor.TextDefault` (merged with `titleProps`). Pass a `ReactNode` for custom layout.

Legacy `TitleStandard` `topLabel` maps to `title` on `TitleSubpage`. The old main-line value (large amount) maps to `amount`, not `title`.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
/>;
```

### `titleEndAccessory`

Optional node to the right of `title` in the title row (same pattern as `amountEndAccessory`). Only renders when the title row is shown (truthy `title`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  Icon,
  IconName,
  IconSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  titleEndAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
  amount="$4.42"
/>;
```

### `subtitle`

Optional subtitle row between the title and the amount. The row renders when `subtitle` is truthy. When `subtitle` is a string, it uses `TextVariant.BodySm`, medium weight, and `TextColor.TextAlternative` (merged with `subtitleProps`). Pass a `ReactNode` for custom layout.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  subtitle="Account 1"
  amount="$4.42"
/>;
```

### `subtitleEndAccessory`

Optional node to the right of `subtitle` in the subtitle row (same pattern as `titleEndAccessory`). Only renders when the subtitle row is shown (truthy `subtitle`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  Icon,
  IconName,
  IconSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  subtitle="Account 1"
  subtitleEndAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
  amount="$4.42"
/>;
```

### `amount`

Optional primary amount line below the title and optional subtitle. The amount row renders when `amount` is truthy (for example a non-empty string or a `ReactNode`). Falsy values such as `false`, `null`, `undefined`, or `''` hide the row and do not render `amountEndAccessory`. When `amount` is a string, it is wrapped with display typography (`TextVariant.DisplayLg` and `amountProps`); other `ReactNode` values render as provided.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Balance"
  amount="$1,234.56"
/>;
```

### `amountEndAccessory`

Optional node rendered to the right of the amount (for example an info icon). Only renders when the amount row is shown (truthy `amount`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  Icon,
  IconName,
  IconSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  amount="$4.42"
  amountEndAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
/>;
```

### `bottomLabel`

Optional bottom label row. The row renders when `bottomLabel` is truthy; `bottomLabelEndAccessory` only appears on that row when `bottomLabel` is truthy. When `bottomLabel` is a string, it uses `TextVariant.BodySm`, medium weight, and `TextColor.TextAlternative` (merged with `bottomLabelProps`). When this row is shown, `bottomAccessory` is not rendered.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
/>;
```

### `bottomLabelEndAccessory`

Optional node to the right of `bottomLabel` in the bottom label row (for example a `Text` label or an icon). The bottom label row only renders when `bottomLabel` is truthy, so this accessory does not appear on its own without `bottomLabel`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  FontWeight,
  Text,
  TextColor,
  TextVariant,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
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

Optional custom bottom row when `bottomLabel` is omitted or not truthy (for example `false`, `null`, `undefined`, or `''`). Renders without default label typography; compose layout inside the node.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  Box,
  BoxAlignItems,
  BoxFlexDirection,
  Icon,
  IconName,
  IconSize,
  Text,
  TextVariant,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
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
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  amount="$4.42"
  amountProps={{ testID: 'title-subpage-amount' }}
/>;
```

### `titleProps`

Optional props merged into the title row `Text` when `title` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  titleProps={{ testID: 'title-subpage-title' }}
  amount="$4.42"
/>;
```

### `subtitleProps`

Optional props merged into the subtitle row `Text` when `subtitle` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  subtitle="Account 1"
  subtitleProps={{ testID: 'title-subpage-subtitle' }}
  amount="$4.42"
/>;
```

### `bottomLabelProps`

Optional props merged into the bottom label `Text` when `bottomLabel` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  title="Send"
  amount="$4.42"
  bottomLabel="0.002 ETH"
  bottomLabelProps={{ testID: 'title-subpage-bottom' }}
/>;
```

### `identityRowProps`

Optional props spread onto the identity `BoxRow` after defaults. `children`, `startAccessory`, and `textProps` are reserved by the component.

| TYPE                                                                        | REQUIRED | DEFAULT     |
| --------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<BoxRowProps>, 'children' \| 'startAccessory' \| 'textProps'>` | No       | `undefined` |

### `titleColumnProps`

Optional props spread onto the title/subtitle column `Box`. `children` is reserved by the component.

| TYPE                                  | REQUIRED | DEFAULT     |
| ------------------------------------- | -------- | ----------- |
| `Omit<Partial<BoxProps>, 'children'>` | No       | `undefined` |

### `bottomLabelWrapperProps`

Optional props spread onto the bottom label `BoxRow` after defaults. `children`, `endAccessory`, and `textProps` are reserved by the component.

| TYPE                                                                      | REQUIRED | DEFAULT     |
| ------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<BoxRowProps>, 'children' \| 'endAccessory' \| 'textProps'>` | No       | `undefined` |

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

// Add additional styles
<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  twClassName="mt-4"
  title="Send"
  amount="$4.42"
/>

// Override default styles
<TitleSubpage
  titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
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

import {
  AvatarToken,
  AvatarTokenSize,
  TitleSubpage,
} from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <TitleSubpage
      titleAvatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
      title="Send"
      amount="$4.42"
      style={tw.style('opacity-90', isActive && 'opacity-100')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
