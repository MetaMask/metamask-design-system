# SegmentGroup

SegmentGroup is a controlled horizontal strip for segment controls: it scrolls when content overflows and coordinates which **`SegmentButton`** is selected. Use it when the parent owns a single string **`value`** and updates it from **`onChange`**. You can place other controls (such as **`SelectButton`**) in the same row; they are not wired to group selection unless you connect them yourself.

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

The props contract is **`SegmentGroupProps`** from **`@metamask/design-system-react-native`**. It extends **`ScrollView`** props except **`horizontal`** and **`showsHorizontalScrollIndicator`** (fixed by the component), plus optional **`twClassName`** on the scroll content row.

### `value`

The selected segment id. Must match the **`value`** prop of the active **`SegmentButton`**.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

### `onChange`

Called with the next segment id when the user selects a participating **`SegmentButton`**.

| TYPE                      | REQUIRED | DEFAULT |
| ------------------------- | -------- | ------- |
| `(value: string) => void` | Yes      | N/A     |

```tsx
import { useState } from 'react';
import {
  SegmentButton,
  SegmentGroup,
} from '@metamask/design-system-react-native';

export const Controlled = () => {
  const [value, setValue] = useState('a');

  return (
    <SegmentGroup value={value} onChange={setValue}>
      <SegmentButton value="a" onPress={() => {}}>
        A
      </SegmentButton>
      <SegmentButton value="b" onPress={() => {}}>
        B
      </SegmentButton>
    </SegmentGroup>
  );
};
```

### `variant`

Default **`SegmentButtonVariant`** for child segments that omit their own **`variant`**.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `SegmentButtonVariant` | No       | `undefined` |

```tsx
import { useState } from 'react';
import {
  SegmentButton,
  SegmentButtonVariant,
  SegmentGroup,
} from '@metamask/design-system-react-native';

export const WithGroupVariant = () => {
  const [value, setValue] = useState('1d');

  return (
    <SegmentGroup
      value={value}
      onChange={setValue}
      variant={SegmentButtonVariant.Secondary}
    >
      <SegmentButton value="1d" onPress={() => {}}>
        1D
      </SegmentButton>
      <SegmentButton value="1w" onPress={() => {}}>
        1W
      </SegmentButton>
    </SegmentGroup>
  );
};
```

### `twClassName`

Optional Tailwind classes merged into the scroll content row after the default horizontal layout (**`gap-3`** between children, row alignment). These classes will be merged with the default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { useState } from 'react';
import {
  SegmentButton,
  SegmentGroup,
} from '@metamask/design-system-react-native';

export const CustomRowSpacing = () => {
  const [value, setValue] = useState('all');

  return (
    <SegmentGroup value={value} onChange={setValue} twClassName="gap-2">
      <SegmentButton value="all" onPress={() => {}}>
        All
      </SegmentButton>
      <SegmentButton value="tokens" onPress={() => {}}>
        Tokens
      </SegmentButton>
    </SegmentGroup>
  );
};
```

### `style`

Use the **`style`** prop on the root **`ScrollView`** for viewport layout (for example width). For the inner row, prefer **`twClassName`** or **`contentContainerStyle`**.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useState } from 'react';
import {
  SegmentButton,
  SegmentGroup,
} from '@metamask/design-system-react-native';

export const FullWidthStrip = () => {
  const [value, setValue] = useState('all');

  return (
    <SegmentGroup
      value={value}
      onChange={setValue}
      style={{ alignSelf: 'stretch' }}
    >
      <SegmentButton value="all" onPress={() => {}}>
        All
      </SegmentButton>
      <SegmentButton value="tokens" onPress={() => {}}>
        Tokens
      </SegmentButton>
    </SegmentGroup>
  );
};
```

### `contentContainerStyle`

Merged after the default content container styles (horizontal row, centered items, gap). Use for extra padding or spacing on the segment row.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useState } from 'react';
import {
  SegmentButton,
  SegmentGroup,
} from '@metamask/design-system-react-native';

export const PaddedRow = () => {
  const [value, setValue] = useState('all');

  return (
    <SegmentGroup
      value={value}
      onChange={setValue}
      contentContainerStyle={{ paddingVertical: 8 }}
    >
      <SegmentButton value="all" onPress={() => {}}>
        All
      </SegmentButton>
    </SegmentGroup>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
