# SegmentGroup

`SegmentGroup` is a **controlled-only** row container for `SegmentButton` children. It provides:

- **`value` + `onChange`** — parent owns which segment is active; only one `SegmentButton` with a matching `value` appears selected.
- **Layout** — horizontal row, `items-center`, and **12px gap** between children (`Box` `gap={3}` / `gap-3` in the preset).
- **Optional `variant`** — forwarded to participating `SegmentButton`s when a child omits its own `variant`.
- **`accessibilityRole="tablist"`** on the container.

Other nodes (for example `SelectButton`) can sit beside segments for layout; they do **not** read group context unless they opt in later.

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

Shared props: `SegmentGroupPropsShared` (`value`, `onChange`, optional `variant`) in `@metamask/design-system-shared`. The React Native type adds `Box` props except `gap` and `flexDirection` (fixed by the component).

### `value` / `onChange`

| PROP       | TYPE                      | REQUIRED |
| ---------- | ------------------------- | -------- |
| `value`    | `string`                  | Yes      |
| `onChange` | `(value: string) => void` | Yes      |

### `variant` (optional)

Default visual variant for child `SegmentButton`s that do not set `variant` themselves.

## `SegmentButton` inside a group

Give each segment a stable **`value`** string. When `value` is set and the button is under `SegmentGroup`, **`isSelected` is ignored**; selection comes from `SegmentGroup`’s `value`.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
