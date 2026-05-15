# SectionDivider

SectionDivider is a horizontal rule built on the root [Box](../Box/Box.tsx). By default it stretches to the available width (`alignSelf: 'stretch'`), uses a **1px** muted border, and **20px** vertical margin (`marginVertical` scale `5`). Pass any other [Box](../Box/Box.types.ts) or `View` props to customize layout, spacing, or accessibility.

Use it between blocks of content where you want consistent section separation without hand-picking border and margin tokens each time.

```tsx
import {
  Box,
  BoxFlexDirection,
  SectionDivider,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

<Box flexDirection={BoxFlexDirection.Column} gap={2}>
  <Text variant={TextVariant.BodyMd}>Section A</Text>
  <SectionDivider />
  <Text variant={TextVariant.BodyMd}>Section B</Text>
</Box>;
```

## Props

`SectionDividerProps` matches [Box](../Box/Box.types.ts) / `View` props.

### Defaults

| Concern         | Default token / prop                                      |
| --------------- | --------------------------------------------------------- |
| Width           | `alignSelf: 'stretch'` (fills cross-axis in flex layouts) |
| Border width    | `borderWidth={1}` → `border` (1px)                        |
| Border color    | `BoxBorderColor.BorderMuted` → `border-muted`             |
| Vertical margin | `marginVertical={5}` → `my-5` (20px)                      |

Override any of these by passing the corresponding `Box` prop or a later value in `style` (for example `marginVertical={0}` for no vertical margin, or `style={{ alignSelf: 'center' }}` to opt out of full width).

### `twClassName`

Optional Tailwind classes merged onto the root `Box`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<SectionDivider twClassName="opacity-50" />
```

### `style`

Standard React Native `View` `style` prop; merged after the default full-width stretch so you can override alignment or dimensions.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
