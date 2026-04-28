# SegmentGroup

`SegmentGroup` is a **controlled-only** horizontal `ScrollView` for `SegmentButton` children. It provides:

- **`value` + `onChange`** — parent owns which segment is active; only one `SegmentButton` with a matching `value` appears selected.
- **Layout** — scroll content uses a horizontal row, `items-center`, and **12px gap** between children (`gap-3` in the preset), applied via `contentContainerStyle`.
- **Scrolling** — `horizontal` with **`showsHorizontalScrollIndicator={false}`** so many segments can overflow and scroll off-screen.
- **Optional `variant`** — forwarded to participating `SegmentButton`s when a child omits its own `variant`.
- **`accessibilityRole="tablist"`** on the root `ScrollView`.

Other nodes (for example `SelectButton`) can sit beside segments in the scroll row; they do **not** read group context unless they opt in later.

The React Native props type extends **`ScrollViewProps`** (with `horizontal` and `showsHorizontalScrollIndicator` fixed by the component). Use **`style`** for the scroll viewport (defaults include `self-stretch`) and **`contentContainerStyle`** for extra spacing on the row of segments. Optional **`twClassName`** merges into `contentContainerStyle` after the default row layout.

```tsx
import { useState } from 'react';
import {
  SegmentButton,
  SegmentGroup,
} from '@metamask/design-system-react-native';

export const Example = () => {
  const [value, setValue] = useState('all');

  return (
    <SegmentGroup value={value} onChange={setValue}>
      <SegmentButton value="all" onPress={() => {}}>
        All
      </SegmentButton>
      <SegmentButton value="tokens" onPress={() => {}}>
        Tokens
      </SegmentButton>
      <SegmentButton value="nfts" onPress={() => {}}>
        NFTs
      </SegmentButton>
    </SegmentGroup>
  );
};
```

## Props

Shared props: `SegmentGroupPropsShared` (`value`, `onChange`, optional `variant`) in `@metamask/design-system-shared`. The React Native type adds **`ScrollView`** props except `horizontal` and `showsHorizontalScrollIndicator`, plus optional **`twClassName`** on the scroll content.

### `value` / `onChange`

| PROP       | TYPE                      | REQUIRED |
| ---------- | ------------------------- | -------- |
| `value`    | `string`                  | Yes      |
| `onChange` | `(value: string) => void` | Yes      |

### `variant` (optional)

Default visual variant for child `SegmentButton`s that do not set `variant` themselves.

## `SegmentButton` inside a group

Give each segment a stable **`value`** string (segment id) and **`children`** for the visible text. When `value` is set and the button is under `SegmentGroup`, **`isSelected` is ignored**; selection comes from `SegmentGroup`’s `value`.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
