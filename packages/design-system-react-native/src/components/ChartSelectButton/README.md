# ChartSelectButton

`ChartSelectButton` is a thin wrapper around [`SelectButton`](../SelectButton) that fixes **`SelectButtonVariant.Tertiary`** and height to **32px** (`ButtonBaseSize.Sm`). The `variant` and `size` props are omitted from the public API.

Use it with [`SegmentGroup`](../SegmentGroup) alongside [`ChartSegmentButton`](../ChartSegmentButton) for compact chart controls.

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
  <ChartSelectButton
    endArrowDirection={SelectButtonEndArrow.Down}
    onPress={() => {}}
    placeholder="Range"
  />
</SegmentGroup>;
```

## Props

Same as `SelectButton` except `variant` and `size` are not accepted.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
