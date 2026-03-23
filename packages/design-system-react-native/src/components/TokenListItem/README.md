# TokenListItem

TokenListItem is a list row that composes ListItemBase with a token avatar as the start accessory. The avatar is always an AvatarToken at size 40 (Lg). All other props are passed through to ListItemBase.

## Usage

```tsx
import {
  TokenListItem,
  type TokenListItemProps,
} from '@metamask/design-system-react-native';

<TokenListItem
  avatarTokenProps={{ name: 'ethereum', fallbackText: 'ETH' }}
  title="Ethereum"
  subtitle="ETH"
  value="1.5"
  supporting="~$4,500"
/>;
```

## Props

TokenListItem extends ListItemBase props except `startAccessory`, which is fixed to an AvatarToken. All ListItemBase content props (`title`, `subtitle`, `value`, `supporting`, and their accessories) behave the same as on ListItemBase.

### `avatarTokenProps` (required)

Props passed to the AvatarToken shown as the start accessory. The avatar is rendered at size 40 (AvatarTokenSize.Lg). Any AvatarToken prop can be provided (e.g. `src`, `name`, `fallbackText`).

| TYPE                        | REQUIRED | DEFAULT |
| --------------------------- | -------- | ------- |
| `Partial<AvatarTokenProps>` | Yes      | —       |

### Other props

All other props are forwarded to ListItemBase. See [ListItemBase README](../ListItemBase/README.md) for `title`, `subtitle`, `value`, `supporting`, `titleProps`, `twClassName`, and the rest.
