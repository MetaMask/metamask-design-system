# FilterButton

FilterButton is one option in a horizontal filter control: a pressable row with optional leading and trailing icons, loading state, and sizing consistent with other buttons. Use it inside **`FilterButtonGroup`** when the parent owns a single selected **`value`**, or on its own when you drive selection with **`isSelected`**.

```tsx
import { FilterButton } from '@metamask/design-system-react-native';

<FilterButton onPress={() => {}}>Option A</FilterButton>;
```

## Props

### `children`

Visible label or custom content for the filter button.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | N/A     |

```tsx
import { FilterButton } from '@metamask/design-system-react-native';

<FilterButton onPress={() => {}}>All</FilterButton>;
```

### `onPress`

Called when the filter button is pressed. Use with **`FilterButtonGroup`** so the parent updates group **`value`** from **`onChange`**, or toggle local state when using **`isSelected`** alone.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import { FilterButton } from '@metamask/design-system-react-native';

<FilterButton onPress={() => console.log('pressed')}>Save</FilterButton>;
```

### `variant`

Controls selected vs unselected styling for each filter button.

Available values:

- `FilterButtonVariant.Primary` — selected filter button uses the primary inverse treatment; unselected uses a transparent row with alternative label and icon colors.
- `FilterButtonVariant.Secondary` — selected filter button uses a muted filled treatment; unselected matches the transparent-row alternative treatment.

| TYPE                  | REQUIRED | DEFAULT                       |
| --------------------- | -------- | ----------------------------- |
| `FilterButtonVariant` | No       | `FilterButtonVariant.Primary` |

```tsx
import {
  FilterButton,
  FilterButtonVariant,
} from '@metamask/design-system-react-native';

<FilterButton
  variant={FilterButtonVariant.Secondary}
  isSelected
  onPress={() => {}}
>
  1D
</FilterButton>;
```

### `isSelected`

When `true`, the filter button uses the selected look for the current **`variant`**. Ignored when the button has **`value`** set and sits under **`FilterButtonGroup`** (the group’s **`value`** decides selection).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { FilterButton } from '@metamask/design-system-react-native';

<FilterButton isSelected onPress={() => {}}>
  Active
</FilterButton>;
```

### `value`

Stable filter value when used under **`FilterButtonGroup`**. Must match the group’s **`value`** for this filter button to appear selected. Distinct from visible **`children`**.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

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
    </FilterButtonGroup>
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
import { FilterButton } from '@metamask/design-system-react-native';

<FilterButton onPress={() => {}} twClassName="min-w-16">
  Wide
</FilterButton>;
```

### `style`

Use the `style` prop to customize the root with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { FilterButton } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <FilterButton onPress={() => {}} style={tw.style(isActive && 'opacity-80')}>
      Filter
    </FilterButton>
  );
};
```

### Other `ButtonBase` props

`FilterButton` accepts the rest of **`ButtonBase`** props (for example **`size`**, **`isLoading`**, **`isDisabled`**, **`startIconName`**, **`startAccessory`**, **`textProps`**, **`startIconProps`**, **`endIconProps`**). The full props contract is **`FilterButtonProps`** from **`@metamask/design-system-react-native`**.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
