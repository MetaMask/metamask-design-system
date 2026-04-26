# SegmentButton

SegmentButton is a thin wrapper around `ButtonBase`: same layout, press animation (`ButtonAnimated`), loading state, sizing, and icon slots as a standard button. Use it as **one cell** in a segmented control.

For **single selection across segments**, prefer **`SegmentGroup`** with a `value` on each `SegmentButton` (controlled `value` / `onChange` on the group). Standalone rows can still toggle **`isSelected`** from the parent when no `value` is used.

Shared props (`value`, `variant`, `isSelected`) live in `@metamask/design-system-shared` as `SegmentButtonPropsShared`. The React Native type adds all `ButtonBase` props.

## Visual map

- **`variant={primary}`** (default): `isSelected` **true** → same default look as **ButtonPrimary** (`isDanger` / `isInverse` false). `isSelected` **false** → **ButtonSecondary** default look.
- **`variant={secondary}`**: `isSelected` **true** → **ButtonSecondary** default. `isSelected` **false** → **ButtonTertiary** default container with **alternative** text and icon colors (same idea as `SelectButton` tertiary).

```tsx
import {
  SegmentButton,
  SegmentButtonVariant,
} from '@metamask/design-system-react-native';

<SegmentButton
  variant={SegmentButtonVariant.Primary}
  isSelected
  onPress={() => {}}
>
  Option A
</SegmentButton>;
```

## Props

### `children`

Label content: a string (styled with default `textProps` plus your overrides) or any `ReactNode`.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `ReactNode \| string` | Yes      | N/A     |

### `variant`

| TYPE                   | REQUIRED | DEFAULT   |
| ---------------------- | -------- | --------- |
| `SegmentButtonVariant` | No       | `primary` |

- `SegmentButtonVariant.Primary`
- `SegmentButtonVariant.Secondary`

### `isSelected`

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

Ignored when the button is inside **`SegmentGroup`** and **`value`** is set (selection comes from the group’s `value`).

### `value`

Stable segment id when used under **`SegmentGroup`**. Must match the group’s controlled `value` for the selected visual.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### Other props

All **ButtonBase** props apply (`size`, `isLoading`, `isFullWidth`, `startIconName`, `textProps`, `twClassName`, `style`, accessibility props, `Pressable` handlers, etc.). Pass `textProps` / `startIconProps` / `endIconProps` after defaults if you need overrides; for `variant={secondary}` and `isSelected={false}`, alternative colors are applied first so your props can still override.

## Usage

### With `SegmentGroup` (recommended)

```tsx
import { useState } from 'react';
import {
  SegmentButton,
  SegmentGroup,
} from '@metamask/design-system-react-native';

export const FilterSegments = () => {
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

### Standalone `isSelected`

```tsx
import { useState } from 'react';
import { View } from 'react-native';
import {
  SegmentButton,
  SegmentButtonVariant,
} from '@metamask/design-system-react-native';

export const PrimarySegmentRow = () => {
  const [value, setValue] = useState<'a' | 'b'>('a');

  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={value === 'a'}
        onPress={() => setValue('a')}
      >
        A
      </SegmentButton>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={value === 'b'}
        onPress={() => setValue('b')}
      >
        B
      </SegmentButton>
    </View>
  );
};
```

## Accessibility

The root is a `ButtonBase` pressable (`accessibilityRole="button"` by default). For a true segmented control, the parent should expose `accessibilityRole="tablist"` and each segment `accessibilityRole="tab"` with `accessibilityState={{ selected: isSelected }}` if your product a11y spec requires it—compose those on the wrapper / `SegmentButton` via supported `Pressable` props.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
