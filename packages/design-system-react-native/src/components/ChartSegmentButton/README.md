# ChartSegmentButton

`ChartSegmentButton` is a thin wrapper around [`SegmentButton`](../SegmentButton) that fixes height to **32px** (`ButtonBaseSize.Sm`) and **`SegmentButtonVariant.Secondary`**. The `size` and `variant` props are omitted from the public API.

Use it with [`SegmentGroup`](../SegmentGroup) alongside [`ChartSelectButton`](../ChartSelectButton) for compact chart controls.

```tsx
import {
  ChartSegmentButton,
  ChartSelectButton,
  SegmentGroup,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SegmentGroup value={value} onChange={setValue}>
  <ChartSegmentButton value="1d" onPress={() => {}}>
    1D
  </ChartSegmentButton>
  <ChartSegmentButton value="1w" onPress={() => {}}>
    1W
  </ChartSegmentButton>
  <ChartSelectButton
    endArrowDirection={SelectButtonEndArrow.Down}
    onPress={() => {}}
  >
    Range
  </ChartSelectButton>
</SegmentGroup>;
```

## Props

Same as `SegmentButton` except `size` and `variant` are not accepted.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
