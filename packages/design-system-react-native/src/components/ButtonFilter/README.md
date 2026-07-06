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
