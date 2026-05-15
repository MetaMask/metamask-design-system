# SectionDivider

SectionDivider is a horizontal rule built on the root [Box](../Box/Box.tsx). It stretches on the cross axis by default, uses a 1px muted **top-only** border (`border-t` and `border-muted`) so the line reads as a single hairline on a zero-height view, and applies vertical margin from the design scale.

```tsx
import { SectionDivider } from '@metamask/design-system-react-native';

<SectionDivider />;
```

## Props

`SectionDividerProps` matches [Box](../Box/Box.types.ts) and React Native `View` props. Override defaults with any `Box` prop (for example `marginVertical={0}` or `borderWidth={0}`) or with `style` / `twClassName`.

### Defaults

| Concern         | Default                                                                                |
| --------------- | -------------------------------------------------------------------------------------- |
| Width           | `self-stretch` via `twClassName` (full width in typical column layouts)                |
| Border width    | `borderWidth={1}` → `border-t` (`0`–`8` map to `border-t-0`, `border-t`, `border-t-*`) |
| Border color    | `BoxBorderColor.BorderMuted` → `border-muted`                                          |
| Vertical margin | `marginVertical={5}` → `my-5` (20px)                                                   |

```tsx
import {
  Box,
  BoxFlexDirection,
  SectionDivider,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

export const SectionsExample = () => (
  <Box flexDirection={BoxFlexDirection.Column} gap={2}>
    <Text variant={TextVariant.BodyMd}>Section A</Text>
    <SectionDivider />
    <Text variant={TextVariant.BodyMd}>Section B</Text>
  </Box>
);
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { SectionDivider } from '@metamask/design-system-react-native';

// Add additional styles
<SectionDivider twClassName="opacity-50" />

// Override default styles
<SectionDivider twClassName="self-center" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { SectionDivider } from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <SectionDivider
      style={tw.style('self-stretch', isActive && 'opacity-100')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
