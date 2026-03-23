# ListItemBase

ListItemBase is a layout component that extends BoxHorizontal with a fixed structure: an optional start accessory in a 16px-width box, a left column (title and subtitle with optional start/end accessories), and a right column (value and supporting text with optional accessories). It uses a 16px gap and design tokens for typography (BodyMDMedium / BodySMMedium, TextDefault / TextAlternative).

```tsx
import { ListItemBase } from '@metamask/design-system-react-native';

<ListItemBase
  title="Label"
  subtitle="Secondary"
  value="Value"
  supporting="Supporting"
/>;
```

## Structure

- **Root:** BoxHorizontal (via Box) with `gap={4}` (16px). Accepts `startAccessory` (rendered in a 16px-width Box), `twClassName`, and ViewProps.
- **Left column:** BoxVertical with `flex-1 min-w-0`. Title row (if `title` is provided) and subtitle row (if `subtitle` is provided), each as a BoxHorizontal with optional start/end accessories. Title uses BodyMDMedium and TextDefault; subtitle uses BodySMMedium and TextAlternative.
- **Right column:** BoxVertical (only when `value` or `supporting` is provided). Value row and supporting row with the same typography and accessory pattern as left.

## Props

ListItemBase extends BoxHorizontal props (except `children` and `endAccessory`, which are built from content props). All content props are optional.

### `title` / `subtitle` / `value` / `supporting`

Content for each slot (string or node). When a string, rendered with default text styling; when a node, passed through. Defaults: title/value use `TextVariant.BodyMd`, `FontWeight.Medium`, `TextColor.TextDefault`; subtitle/supporting use `TextVariant.BodySm`, `FontWeight.Medium`, `TextColor.TextAlternative`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `titleProps` / `subtitleProps` / `valueProps` / `supportingProps`

Optional props for the Text when the corresponding content is a string. Merged over the defaults above.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

### `titleStartAccessory` / `titleEndAccessory`

Optional nodes before and after the title (passed to the title row’s BoxHorizontal).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `subtitleStartAccessory` / `subtitleEndAccessory`

Optional nodes before and after the subtitle.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `valueStartAccessory` / `valueEndAccessory`

Optional nodes before and after the value.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `supportingStartAccessory` / `supportingEndAccessory`

Optional nodes before and after the supporting text.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `startAccessory`

Optional node rendered before the left column, inside a 16px-width Box.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `twClassName`

Optional Tailwind class names applied to the inner Box (row layout). Root View receives other ViewProps (e.g. `style`, `testID`).

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

## Usage

```tsx
<ListItemBase title="Amount" value="$10.00" />

<ListItemBase
  title="Network"
  subtitle="Ethereum Mainnet"
  value="1.234 ETH"
  supporting="~$2,500"
/>

<ListItemBase
  startAccessory={<AvatarToken size={AvatarTokenSize.Sm} />}
  title="Token"
  subtitle="Contract: 0x…"
  value="100"
  supporting="Balance"
/>
```
