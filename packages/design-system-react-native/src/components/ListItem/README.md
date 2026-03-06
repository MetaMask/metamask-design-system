# ListItem

ListItem is a wrapper component used to display an individual item within a list. It provides configurable spacing, vertical alignment, and optional accessory slots above and below the row.

```tsx
import {
  ListItem,
  ListItemVerticalAlignment,
} from '@metamask/design-system-react-native';

<ListItem gap={16} verticalAlignment={ListItemVerticalAlignment.Center}>
  {children}
</ListItem>;
```

## Props

### `children`

Content to display inside the list item row. Multiple children are laid out in a horizontal row with a configurable `gap` between them.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem>
  <Avatar />
  <Text variant={TextVariant.BodyMd}>Label</Text>
  <Icon name={IconName.ArrowRight} />
</ListItem>
```

### `gap`

Horizontal spacing in pixels between each child inside the row.

| TYPE               | REQUIRED | DEFAULT |
| ------------------ | -------- | ------- |
| `number \| string` | No       | `16`    |

```tsx
<ListItem gap={8}>
  <Avatar />
  <Text variant={TextVariant.BodyMd}>Label</Text>
</ListItem>
```

### `verticalAlignment`

Vertical alignment of children inside the row.

| TYPE                        | REQUIRED | DEFAULT                            |
| --------------------------- | -------- | ---------------------------------- |
| `ListItemVerticalAlignment` | No       | `ListItemVerticalAlignment.Center` |

```tsx
<ListItem verticalAlignment={ListItemVerticalAlignment.Top}>
  <Avatar />
  <Box>
    <Text variant={TextVariant.BodyMd}>Title</Text>
    <Text variant={TextVariant.BodySm}>Description</Text>
    <Text variant={TextVariant.BodySm}>Extra line</Text>
  </Box>
</ListItem>
```

Available values:

| Value                              | Description                   |
| ---------------------------------- | ----------------------------- |
| `ListItemVerticalAlignment.Top`    | Aligns children to the top    |
| `ListItemVerticalAlignment.Center` | Aligns children to the center |
| `ListItemVerticalAlignment.Bottom` | Aligns children to the bottom |

### `topAccessory`

Optional content rendered above the list item row.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem
  topAccessory={<Text variant={TextVariant.BodySm}>Section Header</Text>}
>
  <Avatar />
  <Text variant={TextVariant.BodyMd}>Label</Text>
</ListItem>
```

### `bottomAccessory`

Optional content rendered below the list item row.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ListItem
  bottomAccessory={<Text variant={TextVariant.BodySm}>Section Footer</Text>}
>
  <Avatar />
  <Text variant={TextVariant.BodyMd}>Label</Text>
</ListItem>
```

### `topAccessoryGap`

Gap in pixels between the `topAccessory` and the row.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `0`     |

```tsx
<ListItem
  topAccessory={<Text variant={TextVariant.BodySm}>Header</Text>}
  topAccessoryGap={8}
>
  <Avatar />
  <Text variant={TextVariant.BodyMd}>Label</Text>
</ListItem>
```

### `bottomAccessoryGap`

Gap in pixels between the row and the `bottomAccessory`.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `0`     |

```tsx
<ListItem
  bottomAccessory={<Text variant={TextVariant.BodySm}>Footer</Text>}
  bottomAccessoryGap={8}
>
  <Avatar />
  <Text variant={TextVariant.BodyMd}>Label</Text>
</ListItem>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the root element.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<ListItem twClassName="rounded-lg border border-muted">
  <Avatar />
  <Text variant={TextVariant.BodyMd}>Label</Text>
</ListItem>
```

### `style`

Use the `style` prop to apply React Native styles to the root element. For consistent styling, prefer `twClassName` when possible.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <ListItem style={tw.style('mt-4', isActive && 'bg-success-default')}>
      <Avatar />
      <Text variant={TextVariant.BodyMd}>Label</Text>
    </ListItem>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
