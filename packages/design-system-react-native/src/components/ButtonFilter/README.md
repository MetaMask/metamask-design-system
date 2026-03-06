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

### Visual States

- `isActive=true`: `bg-icon-default` + `text-icon-inverse`
- `isActive=false`: `bg-background-muted` + `text-default`

```tsx
<ButtonFilter isActive>All</ButtonFilter>
<ButtonFilter>Purchased</ButtonFilter>
```
