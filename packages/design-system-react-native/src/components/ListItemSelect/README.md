# ListItemSelect

ListItemSelect is an interactive list row for single-select lists such as network pickers and settings menus. It wraps [ListItem](../ListItem/README.md) with selection styling and an optional trailing check icon. Use it when only one row can be active at a time. For multi-select lists, use [ListItemMultiSelect](../ListItemMultiSelect/README.md). For rows without selection state, use [ListItem](../ListItem/README.md) directly.

```tsx
import { ListItemSelect } from '@metamask/design-system-react-native';
import { useState } from 'react';

function NetworkPicker() {
  const [selectedId, setSelectedId] = useState('ethereum');

  return (
    <ListItemSelect
      title="Ethereum"
      description="Mainnet"
      isSelected={selectedId === 'ethereum'}
      showSelectedIcon
      onPress={() => setSelectedId('ethereum')}
    />
  );
}
```

## Props

ListItemSelect extends interactive [ListItem](../ListItem/README.md) props except `isInteractive` (always `true`) and `endAccessory` (redefined below). See ListItem for `title`, `description`, `value`, `avatar`, `startAccessory`, and other content props.

### `isSelected`

Whether this row is selected. When `true`, applies `bg-background-muted` on the root (merged into `twClassName`). The parent controls this value and updates it from `onPress`.

| TYPE      | REQUIRED | DEFAULT     |
| --------- | -------- | ----------- |
| `boolean` | Yes      | `undefined` |

```tsx
const [selectedId, setSelectedId] = useState('ethereum');

<ListItemSelect
  title="Ethereum"
  isSelected={selectedId === 'ethereum'}
  onPress={() => setSelectedId('ethereum')}
/>;
```

### `showSelectedIcon`

When `true` and `isSelected` is `true`, shows a trailing check icon (`Check`, `Lg`, `IconDefault`) in `endAccessory`. When `false` (default), no check icon is shown and caller `endAccessory` applies when provided.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ListItemSelect
  title="Ethereum"
  isSelected
  showSelectedIcon
  onPress={() => {}}
/>
```

### `endAccessory`

Optional trailing element on the content row when `showSelectedIcon` is `false`, or when `showSelectedIcon` is `true` but the row is not selected. Replaced by the check icon when `showSelectedIcon` and `isSelected` are both `true`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  Icon,
  IconName,
  ListItemSelect,
} from '@metamask/design-system-react-native';

<ListItemSelect
  title="Ethereum"
  isSelected
  endAccessory={<Icon name={IconName.CircleX} />}
  onPress={() => {}}
/>;
```

### `onPress`

Callback fired when the row is pressed. Use this to update the parent's `isSelected` state.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `PressableProps['onPress']` | Yes      | `undefined` |

```tsx
<ListItemSelect
  title="Ethereum"
  isSelected={selectedId === 'ethereum'}
  onPress={() => setSelectedId('ethereum')}
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
import { ListItemSelect } from '@metamask/design-system-react-native';

<ListItemSelect
  title="Ethereum"
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
import { ListItemSelect } from '@metamask/design-system-react-native';

export const HighlightedRow = () => {
  const tw = useTailwind();

  return (
    <ListItemSelect
      title="Ethereum"
      isSelected
      onPress={() => {}}
      style={tw.style('border border-muted')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
