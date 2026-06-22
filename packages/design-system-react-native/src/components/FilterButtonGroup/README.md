# FilterButtonGroup

FilterButtonGroup is a controlled horizontal strip for filter controls: it scrolls when content overflows and coordinates which **`FilterButton`** is selected. Use it when the parent owns a single string **`value`** and updates it from **`onChange`**. You can place other controls (such as **`SelectButton`**) in the same row; they are not wired to group selection unless you connect them yourself.

```tsx
import { useState } from 'react';
import {
  FilterButton,
  FilterButtonGroup,
} from '@metamask/design-system-react-native';

export const Example = () => {
  const [value, setValue] = useState('all');

  return (
    <FilterButtonGroup value={value} onChange={setValue}>
      <FilterButton value="all" onPress={() => {}}>
        All
      </FilterButton>
      <FilterButton value="tokens" onPress={() => {}}>
        Tokens
      </FilterButton>
      <FilterButton value="nfts" onPress={() => {}}>
        NFTs
      </FilterButton>
    </FilterButtonGroup>
  );
};
```

## Props

The props contract is **`FilterButtonGroupProps`** from **`@metamask/design-system-react-native`**. It extends **`ScrollView`** props except **`horizontal`** and **`showsHorizontalScrollIndicator`** (fixed by the component), plus optional **`twClassName`** on the scroll content row.

### `value`

The selected filter value. Must match the **`value`** prop of the active **`FilterButton`**.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

### `onChange`

Called with the next filter value when the user selects a participating **`FilterButton`**.

| TYPE                      | REQUIRED | DEFAULT |
| ------------------------- | -------- | ------- |
| `(value: string) => void` | Yes      | N/A     |

```tsx
import { useState } from 'react';
import {
  FilterButton,
  FilterButtonGroup,
} from '@metamask/design-system-react-native';

export const Controlled = () => {
  const [value, setValue] = useState('a');

  return (
    <FilterButtonGroup value={value} onChange={setValue}>
      <FilterButton value="a" onPress={() => {}}>
        A
      </FilterButton>
      <FilterButton value="b" onPress={() => {}}>
        B
      </FilterButton>
    </FilterButtonGroup>
  );
};
```

### `variant`

Default **`FilterButtonVariant`** for child filter buttons that omit their own **`variant`**.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `FilterButtonVariant` | No       | `undefined` |

```tsx
import { useState } from 'react';
import {
  FilterButton,
  FilterButtonVariant,
  FilterButtonGroup,
} from '@metamask/design-system-react-native';

export const WithGroupVariant = () => {
  const [value, setValue] = useState('1d');

  return (
    <FilterButtonGroup
      value={value}
      onChange={setValue}
      variant={FilterButtonVariant.Secondary}
    >
      <FilterButton value="1d" onPress={() => {}}>
        1D
      </FilterButton>
      <FilterButton value="1w" onPress={() => {}}>
        1W
      </FilterButton>
    </FilterButtonGroup>
  );
};
```

### `twClassName`

Optional Tailwind classes merged into the scroll content row after the default horizontal layout (**`gap-1`** between children, row alignment). These classes will be merged with the default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { useState } from 'react';
import {
  FilterButton,
  FilterButtonGroup,
} from '@metamask/design-system-react-native';

export const CustomRowSpacing = () => {
  const [value, setValue] = useState('all');

  return (
    <FilterButtonGroup value={value} onChange={setValue} twClassName="gap-2">
      <FilterButton value="all" onPress={() => {}}>
        All
      </FilterButton>
      <FilterButton value="tokens" onPress={() => {}}>
        Tokens
      </FilterButton>
    </FilterButtonGroup>
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
  FilterButton,
  FilterButtonGroup,
} from '@metamask/design-system-react-native';

export const FullWidthStrip = () => {
  const [value, setValue] = useState('all');

  return (
    <FilterButtonGroup
      value={value}
      onChange={setValue}
      style={{ alignSelf: 'stretch' }}
    >
      <FilterButton value="all" onPress={() => {}}>
        All
      </FilterButton>
      <FilterButton value="tokens" onPress={() => {}}>
        Tokens
      </FilterButton>
    </FilterButtonGroup>
  );
};
```

### `contentContainerStyle`

Merged after the default content container styles (horizontal row, centered items, gap). Use for extra padding or spacing on the filter button row.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useState } from 'react';
import {
  FilterButton,
  FilterButtonGroup,
} from '@metamask/design-system-react-native';

export const PaddedRow = () => {
  const [value, setValue] = useState('all');

  return (
    <FilterButtonGroup
      value={value}
      onChange={setValue}
      contentContainerStyle={{ paddingVertical: 8 }}
    >
      <FilterButton value="all" onPress={() => {}}>
        All
      </FilterButton>
    </FilterButtonGroup>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
