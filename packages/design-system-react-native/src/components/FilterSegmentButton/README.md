# FilterSegmentButton

`FilterSegmentButton` is a thin wrapper around [`SegmentButton`](../SegmentButton) that fixes height to **40px** (`ButtonBaseSize.Md`). The `size` prop is omitted from the public API so consumers cannot override it.

Use it with [`SegmentGroup`](../SegmentGroup) alongside [`FilterSelectButton`](../FilterSelectButton) for a consistent filter bar row.

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
  <FilterSegmentButton value="tokens" onPress={() => {}}>
    Tokens
  </FilterSegmentButton>
  <FilterSelectButton
    endArrowDirection={SelectButtonEndArrow.Down}
    onPress={() => {}}
    placeholder="Filter"
  />
</SegmentGroup>;
```

## Props

Same as `SegmentButton` except `size` is not accepted. Selection behavior with `SegmentGroup` (`value`, `variant` from context, etc.) matches `SegmentButton`.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
