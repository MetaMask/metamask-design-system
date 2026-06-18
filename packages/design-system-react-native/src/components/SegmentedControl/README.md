# SegmentedControl

SegmentedControl is a controlled horizontal control for switching between a fixed set of options. Compose it with **`FilterButton`** children and use it when the parent owns a single string **`value`**. For scrollable filter rows without a bordered container, use **`FilterButtonGroup`** instead.

```tsx
import { useState } from 'react';
import {
  FilterButton,
  SegmentedControl,
} from '@metamask/design-system-react-native';

const [value, setValue] = useState('reaches');

<SegmentedControl value={value} onChange={setValue}>
  <FilterButton value="reaches" onPress={() => {}}>
    Price reaches
  </FilterButton>
  <FilterButton value="change" onPress={() => {}}>
    Price change
  </FilterButton>
</SegmentedControl>;
```

## Props

### `value`

The selected segment value. Must match the **`value`** prop of the active **`FilterButton`**.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

```tsx
import { useState } from 'react';
import {
  FilterButton,
  SegmentedControl,
} from '@metamask/design-system-react-native';

const [value, setValue] = useState('a');

<SegmentedControl value={value} onChange={setValue}>
  <FilterButton value="a" onPress={() => {}}>
    A
  </FilterButton>
  <FilterButton value="b" onPress={() => {}}>
    B
  </FilterButton>
</SegmentedControl>;
```

### `onChange`

Called with the next segment value when the user selects a participating **`FilterButton`**.

| TYPE                      | REQUIRED | DEFAULT |
| ------------------------- | -------- | ------- |
| `(value: string) => void` | Yes      | N/A     |

```tsx
import { useState } from 'react';
import {
  FilterButton,
  SegmentedControl,
} from '@metamask/design-system-react-native';

const [value, setValue] = useState('a');

<SegmentedControl value={value} onChange={(nextValue) => setValue(nextValue)}>
  <FilterButton value="a" onPress={() => {}}>
    A
  </FilterButton>
  <FilterButton value="b" onPress={() => {}}>
    B
  </FilterButton>
</SegmentedControl>;
```

### `size`

Size of the control and all child **`FilterButton`** segments. Also sets the container border radius.

Available sizes:

- `ButtonBaseSize.Sm` (32px segment height, 12px container radius)
- `ButtonBaseSize.Md` (40px segment height, 16px container radius)
- `ButtonBaseSize.Lg` (48px segment height, 16px container radius)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `ButtonBaseSize` | No       | `ButtonBaseSize.Sm` |

```tsx
import { useState } from 'react';
import {
  ButtonBaseSize,
  FilterButton,
  SegmentedControl,
} from '@metamask/design-system-react-native';

const [value, setValue] = useState('a');

<SegmentedControl value={value} onChange={setValue} size={ButtonBaseSize.Md}>
  <FilterButton value="a" onPress={() => {}}>
    A
  </FilterButton>
  <FilterButton value="b" onPress={() => {}}>
    B
  </FilterButton>
</SegmentedControl>;
```

### `isFullWidth`

When true, the control stretches to the width of its parent and segments share equal width.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { useState } from 'react';
import {
  FilterButton,
  SegmentedControl,
} from '@metamask/design-system-react-native';

const [value, setValue] = useState('a');

<SegmentedControl value={value} onChange={setValue} isFullWidth>
  <FilterButton value="a" onPress={() => {}}>
    A
  </FilterButton>
  <FilterButton value="b" onPress={() => {}}>
    B
  </FilterButton>
</SegmentedControl>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { useState } from 'react';
import {
  FilterButton,
  SegmentedControl,
} from '@metamask/design-system-react-native';

const [value, setValue] = useState('a');

// Add additional styles
<SegmentedControl value={value} onChange={setValue} twClassName="mt-4">
  <FilterButton value="a" onPress={() => {}}>
    A
  </FilterButton>
  <FilterButton value="b" onPress={() => {}}>
    B
  </FilterButton>
</SegmentedControl>;
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useState } from 'react';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  FilterButton,
  SegmentedControl,
} from '@metamask/design-system-react-native';

const [value, setValue] = useState('a');
const tw = useTailwind();

<SegmentedControl value={value} onChange={setValue} style={tw.style('mt-2')}>
  <FilterButton value="a" onPress={() => {}}>
    A
  </FilterButton>
  <FilterButton value="b" onPress={() => {}}>
    B
  </FilterButton>
</SegmentedControl>;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
