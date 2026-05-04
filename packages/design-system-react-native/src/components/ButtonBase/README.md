# ButtonBase

ButtonBase is a labeled element that a user can click or tap to initiate an action.

```tsx
import { ButtonBase } from '@metamask/design-system-react-native';

<ButtonBase onPress={() => {}}>Default Example</ButtonBase>;
```

## Props

### `size`

The size of the button.

Available sizes:

- `ButtonBaseSize.Sm` (32px height)
- `ButtonBaseSize.Md` (40px height)
- `ButtonBaseSize.Lg` (48px height)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `ButtonBaseSize` | No       | `ButtonBaseSize.Lg` |

```tsx
import { ButtonBaseSize } from '@metamask/design-system-shared';

<ButtonBase size={ButtonBaseSize.Sm} onPress={() => {}}>
  Small Button
</ButtonBase>
<ButtonBase onPress={() => {}}>Large Button (default)</ButtonBase>
<ButtonBase size={ButtonBaseSize.Lg} onPress={() => {}}>
  Large Button
</ButtonBase>
```

### `shape`

Corner style: **rounded** uses size-based border radius; **pill** uses fully rounded ends.

| TYPE              | REQUIRED | DEFAULT                   |
| ----------------- | -------- | ------------------------- |
| `ButtonBaseShape` | No       | `ButtonBaseShape.Rounded` |

```tsx
import { ButtonBaseShape } from '@metamask/design-system-shared';

<ButtonBase shape={ButtonBaseShape.Pill} onPress={() => {}}>
  Pill button
</ButtonBase>;
```

### `children`

The content of the `ButtonBase` component.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `React.ReactNode \| string` | Yes      | `undefined` |

```tsx
import { ButtonBase } from '@metamask/design-system-react-native';

<ButtonBase onPress={() => {}}>
  <Text>Custom button content</Text>
</ButtonBase>;
```

### `onPress`

Function to trigger when pressing the button.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | Yes      | `undefined` |

```tsx
<ButtonBase onPress={() => console.log('Button pressed')}>Press me</ButtonBase>
```

### `isDisabled`

Whether the button is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ButtonBase isDisabled onPress={() => {}}>
  Disabled Button
</ButtonBase>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { ButtonBase } from '@metamask/design-system-react-native';

// Add additional styles
<ButtonBase onPress={() => {}} twClassName="mt-4">
  Custom Background
</ButtonBase>

// Override default styles
<ButtonBase onPress={() => {}} twClassName="bg-error-default">
  Override Background
</ButtonBase>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import { ButtonBase } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <ButtonBase
      onPress={() => {}}
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    >
      Conditional styling
    </ButtonBase>
  );
};
```

## Migration from MetaMask Mobile Component Library

Migrating from the legacy `ButtonBase` in `app/component-library/components/Buttons/Button/foundation/ButtonBase`? See the [ButtonBase migration guide](../../../MIGRATION.md#buttonbase-component) for a full prop mapping and before/after examples.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
