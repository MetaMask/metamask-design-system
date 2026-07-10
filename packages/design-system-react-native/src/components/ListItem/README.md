# ListItem

ListItem is a padded list row for settings, asset lists, and menus. It wraps [Content](../Content/README.md) in a `Box` or `Pressable` shell (`px-4 py-3`) and owns row shell accessories (`startAccessory`, `endAccessory`). For the inner row layout without padding, press handling, or shell accessories, use [Content](../Content/README.md) directly.

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

### `accessoryGap`

Gap between `startAccessory` / `endAccessory` and the inner content row. Uses the same spacing scale as `Box` `gap` (`BoxSpacing`); `4` is 16px. Defaults to `0` for tight layouts. Use `accessoryGap={4}` to match the spacing legacy `Content` shell rows used before accessories moved to `ListItem`.

| TYPE         | REQUIRED | DEFAULT |
| ------------ | -------- | ------- |
| `BoxSpacing` | No       | `0`     |

```tsx
<ListItem
  startAccessory={<Icon name={IconName.Coin} />}
  accessoryGap={4}
  title="With spaced start accessory"
/>
```

### `variant`

Layout variant controlling row min-height, vertical alignment, and which secondary slots render.

Available values:

- `ListItemVariant.OneLine` — 48px min height (incl. padding), centered; omits `description` and `subvalue`
- `ListItemVariant.TwoLines` — 72px min height, centered; all slots
- `ListItemVariant.MultiLine` — 88px min height, top-aligned; all slots

| TYPE              | REQUIRED | DEFAULT                    |
| ----------------- | -------- | -------------------------- |
| `ListItemVariant` | No       | `ListItemVariant.TwoLines` |

`ListItemVariant` is re-exported from `@metamask/design-system-react-native` alongside `ListItem`. It is the same const object as `ContentVariant` (also exported from the package root).

```tsx
import {
  ListItem,
  ListItemVariant,
} from '@metamask/design-system-react-native';

<ListItem variant={ListItemVariant.OneLine} title="Network" value="Mainnet" />

<ListItem
  variant={ListItemVariant.MultiLine}
  avatar={<AvatarToken name="ETH" src={ethIcon} size={AvatarTokenSize.Lg} />}
  title="Network"
  description="Secondary line"
  value="Value"
/>;
```

### `children`

Optional React children rendered below the `Content` block on the padded root.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Box, ListItem } from '@metamask/design-system-react-native';

<ListItem title="Summary">
  <Box twClassName="mt-2 rounded bg-background-muted px-3 py-2">
    Expanded details
  </Box>
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
