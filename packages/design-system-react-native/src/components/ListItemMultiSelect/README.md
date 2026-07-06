# ListItemMultiSelect

ListItemMultiSelect is an interactive list row for multi-select lists such as token pickers and filter menus. It wraps [ListItem](../ListItem/README.md) with selection styling and a trailing [Checkbox](../Checkbox/README.md) that reflects selection state. Use it when multiple rows can be active at once. For single-select lists, use [ListItemSelect](../ListItemSelect/README.md). For rows without selection state, use [ListItem](../ListItem/README.md) directly.

```tsx
import { ListItemMultiSelect } from '@metamask/design-system-react-native';
import { useState } from 'react';

function TokenPicker() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <ListItemMultiSelect
      title="USDC"
      isSelected={selectedIds.has('usdc')}
      onPress={() => toggle('usdc')}
    />
  );
}
```

## Props

ListItemMultiSelect extends interactive [ListItem](../ListItem/README.md) props except `isInteractive` (always `true`) and `endAccessory` (always a display-only Checkbox). See ListItem for `title`, `description`, `value`, `avatar`, `startAccessory`, and other content props.

### `isSelected`

Whether this row is selected. When `true`, applies `bg-background-muted` on the root (merged into `twClassName`) and shows a checked trailing Checkbox. When `false`, the row uses the default background and the Checkbox is unchecked. The parent controls this value and updates it from `onPress`.

| TYPE      | REQUIRED | DEFAULT     |
| --------- | -------- | ----------- |
| `boolean` | Yes      | `undefined` |

```tsx
const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(['usdc']));

<ListItemMultiSelect
  title="USDC"
  isSelected={selectedIds.has('usdc')}
  onPress={() => toggle('usdc')}
/>;
```

### `onPress`

Callback fired when the row is pressed. Use this to toggle the row's `isSelected` state in the parent. The trailing Checkbox is display-only (`pointerEvents="none"`), so row taps are handled entirely by `onPress`.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `PressableProps['onPress']` | Yes      | `undefined` |

```tsx
<ListItemMultiSelect
  title="USDC"
  isSelected={selectedIds.has('usdc')}
  onPress={() => toggle('usdc')}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

When `isSelected` is `true`, `bg-background-muted` is merged with `twClassName` on the root.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { ListItemMultiSelect } from '@metamask/design-system-react-native';

<ListItemMultiSelect
  title="USDC"
  isSelected
  twClassName="rounded-lg"
  onPress={() => {}}
/>;
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { ListItemMultiSelect } from '@metamask/design-system-react-native';

export const HighlightedRow = () => {
  const tw = useTailwind();

  return (
    <ListItemMultiSelect
      title="USDC"
      isSelected
      onPress={() => {}}
      style={tw.style('border border-muted')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
