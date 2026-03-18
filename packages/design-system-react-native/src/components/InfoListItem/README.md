# InfoListItem

InfoListItem composes ListItemBase and optionally shows a start icon via `startIconProps`. When `startIconProps` is provided with a `name`, an Icon is rendered as the start accessory with default size 40 and color IconDefault; any props in `startIconProps` override these defaults.

## Usage

With start icon:

```tsx
import {
  InfoListItem,
  IconName,
  IconSize,
  IconColor,
} from '@metamask/design-system-react-native';

<InfoListItem
  startIconProps={{ name: IconName.Info }}
  title="Label"
  subtitle="Secondary text"
  value="Value"
  supporting="Supporting text"
/>
```

With custom icon size and color:

```tsx
<InfoListItem
  startIconProps={{
    name: IconName.Security,
    size: IconSize.Lg,
    color: IconColor.PrimaryDefault,
  }}
  title="Security"
  subtitle="Two-factor authentication"
/>
```

Without start icon:

```tsx
<InfoListItem title="Label" subtitle="No icon" />
```

## Props

InfoListItem extends ListItemBase props except `startAccessory`, which is derived from `startIconProps` when present. All ListItemBase content props (`title`, `subtitle`, `value`, `supporting`, and their accessories) behave the same as on ListItemBase.

### `startIconProps` (optional)

Props passed to the Icon shown as the start accessory. When provided and when `name` is set, an Icon is rendered with default size 40 and color IconDefault; these can be overridden by passing `size` or `color` in `startIconProps`.

| Type                 | Required | Default |
| -------------------- | -------- | ------- |
| `Partial<IconProps>` | No       | —       |

### Other props

All other props are forwarded to ListItemBase. See [ListItemBase README](../ListItemBase/README.md) for `title`, `subtitle`, `value`, `supporting`, `titleProps`, `twClassName`, and the rest.
