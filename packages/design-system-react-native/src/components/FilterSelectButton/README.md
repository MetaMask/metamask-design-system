# FilterSelectButton

`FilterSelectButton` is a thin wrapper around [`SelectButton`](../SelectButton) that fixes **`SelectButtonVariant.Primary`** and height to **40px** (`ButtonBaseSize.Md`). The `variant` and `size` props are omitted from the public API.

Use it with [`SegmentGroup`](../SegmentGroup) alongside [`FilterSegmentButton`](../FilterSegmentButton) for a consistent filter bar row.

```tsx
import {
  FilterSegmentButton,
  FilterSelectButton,
  SegmentGroup,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SegmentGroup value={value} onChange={setValue}>
  <FilterSegmentButton value="all" onPress={() => {}}>
    All
  </FilterSegmentButton>
  <FilterSelectButton
    endArrowDirection={SelectButtonEndArrow.Down}
    onPress={() => {}}
    placeholder="Filter"
  />
</SegmentGroup>;
```

## Props

Same as `SelectButton` except `variant` and `size` are not accepted. See `SelectButton` for `endArrowDirection`, `startAccessory`, `endAccessory`, `isDisabled`, and other options.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
