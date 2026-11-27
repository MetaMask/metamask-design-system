# ButtonFilter

`ButtonFilter` is a reusable filter button component that displays active and inactive states. It wraps `ButtonBase` and is commonly used for filtering lists or toggling views.

```tsx
import { ButtonFilter } from '@metamask/design-system-react-native';

<ButtonFilter isActive onPress={() => {}}>
  All
</ButtonFilter>;
```

## Props

This component extends `ButtonBaseProps`, so all `ButtonBase` props are supported.

### `isActive`

Controls the active visual state.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `className`

Use the `className` prop to add Tailwind CSS classes to the component. These classes are applied after the component's default classes, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<ButtonFilter isActive className="mt-4">
  All
</ButtonFilter>
```

> **Migrating from `twClassName`:** `twClassName` still works but is deprecated. Rename it to `className`. If both are passed, classes merge in this order: the component's own classes, then `twClassName`, then `className`, so `className` wins on conflicts.

### Button Filter Group

- `isActive=true`: `bg-icon-default` + `text-icon-inverse`
- `isActive=false`: `bg-background-muted` + `text-default`

```tsx
const [activeFilter, setActiveFilter] = useState('All');

<ButtonFilter isActive={activeFilter === 'All'} onPress={() => setActiveFilter('All')}>
  All
</ButtonFilter>
<ButtonFilter
  isActive={activeFilter === 'Purchased'}
  onPress={() => setActiveFilter('Purchased')}
>
  Purchased
</ButtonFilter>
<ButtonFilter isActive={activeFilter === 'Sold'} onPress={() => setActiveFilter('Sold')}>
  Sold
</ButtonFilter>
```

## Migration from MetaMask Mobile Component Library

Migrating from the legacy `ButtonFilter` in `app/component-library/components-temp/ButtonFilter`? See the [ButtonFilter migration guide](../../../MIGRATION.md#buttonfilter-component) for import changes and `textClassName` behavior differences.

## Content guidelines

- `children`: sentence case, 1–3 words, imperative verb first, no punctuation
