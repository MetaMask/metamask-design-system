# SortSelectButton

`SortSelectButton` is a thin wrapper around [`SelectButton`](../SelectButton). It fixes **`variant={SelectButtonVariant.Secondary}`** and **`size={ButtonBaseSize.Xs}`** (~20px row height) for compact sort controls, matching the pattern used by [`ChartSelectButton`](../ChartSelectButton) with preset variant and size.

```tsx
import {
  SortSelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SortSelectButton
  placeholder="Sort"
  onPress={() => {}}
  endArrowDirection={SelectButtonEndArrow.Down}
/>;
```

## Props

Same as `SelectButton` except **`variant`** and **`size`** are omitted (fixed by this component). **`placeholder`** remains required on the underlying select row.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
