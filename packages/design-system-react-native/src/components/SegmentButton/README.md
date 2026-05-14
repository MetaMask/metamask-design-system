# SegmentButton

SegmentButton is one segment in a segmented control: a pressable row with optional leading and trailing icons, loading state, and sizing consistent with other buttons. Use it inside **`SegmentGroup`** when the parent owns a single selected **`value`**, or on its own when you drive selection with **`isSelected`**.

```tsx
import { SegmentButton } from '@metamask/design-system-react-native';

<SegmentButton onPress={() => {}}>Option A</SegmentButton>;
```

## Props

### `children`

Visible label or custom content for the segment.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | N/A     |

```tsx
import { SegmentButton } from '@metamask/design-system-react-native';

<SegmentButton onPress={() => {}}>All</SegmentButton>;
```

### `onPress`

Called when the segment is pressed. Use with **`SegmentGroup`** so the parent updates group **`value`** from **`onChange`**, or toggle local state when using **`isSelected`** alone.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import { SegmentButton } from '@metamask/design-system-react-native';

<SegmentButton onPress={() => console.log('pressed')}>Save</SegmentButton>;
```

### `variant`

Controls selected vs unselected styling for each segment.

Available values:

- `SegmentButtonVariant.Primary` — selected segment uses the primary inverse treatment; unselected uses a transparent row with alternative label and icon colors.
- `SegmentButtonVariant.Secondary` — selected segment uses a muted filled treatment; unselected matches the transparent-row alternative treatment.

| TYPE                   | REQUIRED | DEFAULT                        |
| ---------------------- | -------- | ------------------------------ |
| `SegmentButtonVariant` | No       | `SegmentButtonVariant.Primary` |

```tsx
import {
  SegmentButton,
  SegmentButtonVariant,
} from '@metamask/design-system-react-native';

<SegmentButton
  variant={SegmentButtonVariant.Secondary}
  isSelected
  onPress={() => {}}
>
  1D
</SegmentButton>;
```

### `isSelected`

When `true`, the segment uses the selected look for the current **`variant`**. Ignored when the button has **`value`** set and sits under **`SegmentGroup`** (the group’s **`value`** decides selection).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { SegmentButton } from '@metamask/design-system-react-native';

<SegmentButton isSelected onPress={() => {}}>
  Active
</SegmentButton>;
```

### `value`

Stable segment id when used under **`SegmentGroup`**. Must match the group’s **`value`** for this segment to appear selected. Distinct from visible **`children`**.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

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
    </SegmentGroup>
  );
};
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the root pressable. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE                                       | REQUIRED | DEFAULT     |
| ------------------------------------------ | -------- | ----------- |
| `string \| ((pressed: boolean) => string)` | No       | `undefined` |

```tsx
import { SegmentButton } from '@metamask/design-system-react-native';

<SegmentButton onPress={() => {}} twClassName="min-w-16">
  Wide
</SegmentButton>;
```

### `style`

Use the `style` prop to customize the root with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { SegmentButton } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <SegmentButton
      onPress={() => {}}
      style={tw.style(isActive && 'opacity-80')}
    >
      Filter
    </SegmentButton>
  );
};
```

### Other `ButtonBase` props

`SegmentButton` accepts the rest of **`ButtonBase`** props (for example **`size`**, **`isLoading`**, **`isDisabled`**, **`startIconName`**, **`startAccessory`**, **`textProps`**, **`startIconProps`**, **`endIconProps`**). Shared segment fields live in **`SegmentButtonPropsShared`** in **`@metamask/design-system-shared`**.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
