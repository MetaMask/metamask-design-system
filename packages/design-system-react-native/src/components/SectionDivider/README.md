# SectionDivider

SectionDivider separates stacked sections with a horizontal line. Use it between groups of content in a column. For a border around a container, set `borderWidth` on [Box](../Box/Box.tsx) instead. It is not a vertical divider.

It stretches to the width of its container, draws a muted 1px line, and adds space above and below.

```tsx
import { SectionDivider } from '@metamask/design-system-react-native';

<SectionDivider />;
```

## Props

`SectionDividerProps` matches [Box](../Box/Box.types.ts) and React Native `View` props. Override the line with `borderWidth`, `borderColor`, and `marginVertical`, or with `style` / `twClassName`.

### Defaults

| Concern               | Default                      |
| --------------------- | ---------------------------- |
| Width                 | Full width of the container  |
| Line thickness        | `borderWidth={1}` (1px)      |
| Line color            | `BoxBorderColor.BorderMuted` |
| Space above and below | `marginVertical={5}` (20px)  |

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

### `borderWidth`

Thickness of the line. `0` hides it. This sets the divider line only. It does not add a border on every side the way `Box` does.

Available values: `0`, `1`, `2`, `4`, `8`.

| TYPE             | REQUIRED | DEFAULT |
| ---------------- | -------- | ------- |
| `BoxBorderWidth` | No       | `1`     |

### `borderColor`

Color of the line.

| TYPE             | REQUIRED | DEFAULT                      |
| ---------------- | -------- | ---------------------------- |
| `BoxBorderColor` | No       | `BoxBorderColor.BorderMuted` |

### `marginVertical`

Space above and below the line, from the design spacing scale.

| TYPE         | REQUIRED | DEFAULT |
| ------------ | -------- | ------- |
| `BoxSpacing` | No       | `5`     |

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
