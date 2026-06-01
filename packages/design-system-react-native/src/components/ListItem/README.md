# ListItem

ListItem is a padded list row for settings, asset lists, and menus. It wraps [Content](../Content/README.md) in a `Box` or `Pressable` shell (`px-4 py-3`). Use props or compound slots (`ListItem.Title`, `ListItem.Avatar`, …) for the row layout. For row layout without padding or press handling, use [Content](../Content/README.md) directly.

The row root is transparent by default so it inherits the surface behind it. Place list items inside a parent that sets the list background (for example a `Box` or screen section). Interactive rows apply a semi-transparent `bg-pressed` tint on press, which reads correctly over different parent backgrounds without per-row color setup.

```tsx
import {
  Box,
  BoxBackgroundColor,
  ListItem,
} from '@metamask/design-system-react-native';

<Box backgroundColor={BoxBackgroundColor.BackgroundDefault}>
  <ListItem
    isInteractive
    title="Network"
    description="Ethereum Mainnet"
    value="1.234 ETH"
    onPress={() => {}}
  />
</Box>;
```

## Background and pressed feedback

ListItem does not apply a default row background. Define the list surface on the parent container and keep rows transparent so press feedback stays consistent across the list.

When `isInteractive` is `true`, the row applies `bg-pressed` while pressed—a general-purpose tint meant to layer over the parent background. In most layouts you do not need to set row background or pressed colors yourself.

Reserve row-level backgrounds for designs that require them (for example a highlighted, warning, or disabled row). If you set a custom idle background on a row, also define how that row should look when pressed so feedback remains visible—for example with a `style` function that responds to `pressed`.

```tsx
import {
  Box,
  BoxBackgroundColor,
  ListItem,
} from '@metamask/design-system-react-native';

// Typical: parent owns the surface
<Box backgroundColor={BoxBackgroundColor.BackgroundDefault}>
  <ListItem isInteractive title="Settings" onPress={() => {}} />
  <ListItem isInteractive title="Security" onPress={() => {}} />
</Box>;

// Row-specific background (only when the design requires it)
import { useTailwind } from '@metamask/design-system-twrnc-preset';

const tw = useTailwind();

<ListItem
  isInteractive
  title="Action required"
  onPress={() => {}}
  style={({ pressed }) =>
    tw.style('bg-warning-muted', pressed && 'bg-warning-muted-pressed')
  }
/>;
```

## Props

### `isInteractive`

When `true`, the root is a `Pressable` that accepts `onPress` and other `PressableProps`. When `false` (default), the root is a `Box`.

Interactive rows stay transparent at rest and apply `bg-pressed` while pressed. See [Background and pressed feedback](#background-and-pressed-feedback) for how this interacts with parent surfaces and custom row backgrounds.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ListItem title="Static row" />

<ListItem isInteractive title="Tappable row" onPress={() => {}} />
```

### `onPress`

Callback fired when the row is pressed. Requires `isInteractive`.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `PressableProps['onPress']` | No       | `undefined` |

```tsx
<ListItem isInteractive title="Settings" onPress={() => {}} />
```

### `title`

Primary label on the left. Pass a string for default body styling, or a node for custom content.

Default string styles: `TextVariant.BodyMd`, `FontWeight.Medium`, `TextColor.TextDefault`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem title="Network" />

<ListItem title={<Text variant={TextVariant.HeadingSm}>Custom title</Text>} />
```

### `description`

Secondary line under the title on the left. Pass a string for default body styling, or a node for custom content.

Default string styles: `TextVariant.BodySm`, `FontWeight.Medium`, `TextColor.TextAlternative`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem title="Network" description="Ethereum Mainnet" />
```

### `value`

Primary value on the right. Pass a string for default body styling, or a node for custom content.

Default string styles: `TextVariant.BodyMd`, `FontWeight.Medium`, `TextColor.TextDefault`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem title="Amount" value="$10.00" />
```

### `subvalue`

Secondary line under the value on the right. Pass a string for default body styling, or a node for custom content.

Default string styles: `TextVariant.BodySm`, `FontWeight.Medium`, `TextColor.TextAlternative`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem title="Network" value="1.234 ETH" subvalue="~$2,500" />
```

### `avatar`

Optional leading visual after `startAccessory` and before the title column. Use large avatars (40×40) in this slot.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  ListItem,
} from '@metamask/design-system-react-native';

<ListItem
  avatar={<AvatarToken name="ETH" src={ethIcon} size={AvatarTokenSize.Lg} />}
  title="Ethereum"
  value="0.24 ETH"
/>;
```

### `startAccessory`

Optional leading element on the content row, before the avatar (for example a rank or icon). Icons in this slot should be 20×20 (`IconSize.Md`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Icon, IconName, ListItem } from '@metamask/design-system-react-native';

<ListItem
  startAccessory={<Icon name={IconName.Coin} />}
  title="With start accessory"
/>;
```

### `endAccessory`

Optional trailing element on the content row, after the value column (for example a chevron or button).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Icon, IconName, ListItem } from '@metamask/design-system-react-native';

<ListItem title="Network" endAccessory={<Icon name={IconName.ArrowRight} />} />;
```

### `topAccessory`

Optional content above the content row. Setting `topAccessory` or `bottomAccessory` switches the inner layout to a column.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem topAccessory={<BannerAlert />} title="Token" value="100" />
```

### `bottomAccessory`

Optional content below the content row. Setting `topAccessory` or `bottomAccessory` switches the inner layout to a column.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem
  title="Token"
  value="100"
  bottomAccessory={<Text variant={TextVariant.BodySm}>Details</Text>}
/>
```

### `verticalAlignment`

Vertical alignment of the content row.

Available values:

- `ContentVerticalAlignment.Center` — default; use for one- or two-line rows
- `ContentVerticalAlignment.Top` — use for taller rows (three+ lines or ~88dp+ height)

| TYPE                       | REQUIRED | DEFAULT                           |
| -------------------------- | -------- | --------------------------------- |
| `ContentVerticalAlignment` | No       | `ContentVerticalAlignment.Center` |

```tsx
import {
  ContentVerticalAlignment,
  ListItem,
} from '@metamask/design-system-react-native';

<ListItem
  verticalAlignment={ContentVerticalAlignment.Top}
  avatar={<AvatarToken name="ETH" src={ethIcon} size={AvatarTokenSize.Lg} />}
  title="Network"
  description="Secondary line"
  value="Value"
/>;
```

### `children`

Optional React children on the padded root.

- **`ListItem.*` slot elements** (`ListItem.Avatar`, `ListItem.Title`, …) compose the row. Slots are parsed into Content props before render.
- **Any other node** renders below the `Content` block.

When both explicit Content props and slots are set, **props take precedence**.

Available compound slots: `ListItem.Avatar`, `ListItem.Title`, `ListItem.Description`, `ListItem.Value`, `ListItem.Subvalue`, `ListItem.StartAccessory`, `ListItem.EndAccessory`, `ListItem.TopAccessory`, `ListItem.BottomAccessory`.

Inline accessories on text slots use props on the slot (`startAccessory`, `endAccessory`). Text styling uses top-level Text props on the slot (`variant`, `color`, …) or `textProps`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarAccount,
  AvatarAccountSize,
  Box,
  Icon,
  IconName,
  ListItem,
} from '@metamask/design-system-react-native';

// Non-slot children render below Content
<ListItem title="Summary">
  <Box twClassName="mt-2 rounded bg-background-muted px-3 py-2">
    Expanded details
  </Box>
</ListItem>

// Compound slots compose the row
<ListItem isInteractive onPress={() => {}}>
  <ListItem.Avatar>
    <AvatarAccount
      address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
      size={AvatarAccountSize.Md}
    />
  </ListItem.Avatar>
  <ListItem.Title endAccessory={<Icon name={IconName.ArrowRight} />}>
    Account 1
  </ListItem.Title>
  <ListItem.Value>$1,234</ListItem.Value>
</ListItem>;
```

### `titleProps`, `descriptionProps`, `valueProps`, `subvalueProps`

Props merged onto the `Text` component when the matching field is a string. Overrides default text styles.

See [Content/README.md](../Content/README.md) for types and examples.

### `titleStartAccessory`, `titleEndAccessory`, `descriptionStartAccessory`, `descriptionEndAccessory`, `valueStartAccessory`, `valueEndAccessory`, `subvalueStartAccessory`, `subvalueEndAccessory`

Optional inline accessories on the same line as the matching text field.

See [Content/README.md](../Content/README.md) for types and examples.

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

Applied on the root `Box` or `Pressable`, merged with default padding (`px-4 py-3`). Prefer layout overrides (padding, radius, borders) over row backgrounds. If you set a row background, pair it with an appropriate pressed treatment—see [Background and pressed feedback](#background-and-pressed-feedback).

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { ListItem } from '@metamask/design-system-react-native';

// Override default padding
<ListItem title="Label" twClassName="px-6 py-4">
  Custom padding
</ListItem>

// Add layout chrome without changing row background
<ListItem title="Label" twClassName="rounded-lg border border-muted">
  Bordered row
</ListItem>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

Avoid setting row background colors unless the design requires it. When you do, use a `style` function so idle and pressed states stay paired.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { ListItem } from '@metamask/design-system-react-native';

export const HighlightedRow = () => {
  const tw = useTailwind();

  return (
    <ListItem
      title="Action required"
      isInteractive
      onPress={() => {}}
      style={({ pressed }) =>
        tw.style('bg-warning-muted', pressed && 'bg-warning-muted-pressed')
      }
    />
  );
};
```

## Migration Guide

Migrating from `app/component-library/components/List/ListItem` in MetaMask Mobile? See the [ListItem Migration Guide](../../../MIGRATION.md#listitem-component) for prop mappings, before/after examples, and breaking changes.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
