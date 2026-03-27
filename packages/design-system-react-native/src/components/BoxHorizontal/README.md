# BoxHorizontal

BoxHorizontal lays out optional start and end accessories with a text or child region in a horizontal row. The root is a [Box](../Box/Box.tsx) with row direction, centered alignment, and a default gap; all other [Box](../Box/Box.tsx) props (except `flexDirection`, `alignItems`, and `children`) are forwarded.

```tsx
import { BoxHorizontal } from '@metamask/design-system-react-native';

<BoxHorizontal>Label</BoxHorizontal>;
```

## Props

The component composes [TextOrChildren](../temp-components/TextOrChildren/TextOrChildren.tsx) for the main content and accepts the same `children` and `textProps` behavior. It extends [Box](../Box/Box.types.ts) props except `children`, `flexDirection`, and `alignItems` (those are fixed by the component).

### `children`

Main content: a string (rendered via `Text` using `textProps`) or any `ReactNode`.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `ReactNode \| string` | Yes      | N/A     |

```tsx
<BoxHorizontal>Plain string label</BoxHorizontal>

<BoxHorizontal>
  <CustomNode />
</BoxHorizontal>
```

### `textProps`

Optional props passed to `Text` when `children` is a string. Same as [TextOrChildren](../temp-components/TextOrChildren/TextOrChildren.types.ts).

| TYPE | REQUIRED | DEFAULT     |
| ---- | -------- | ----------- |
| —    | No       | `undefined` |

```tsx
import { TextColor, TextVariant } from '@metamask/design-system-react-native';

<BoxHorizontal
  textProps={{ variant: TextVariant.BodyMd, color: TextColor.TextDefault }}
>
  Styled label
</BoxHorizontal>;
```

### `startAccessory`

Optional node before the main content (e.g. icon or avatar).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `endAccessory`

Optional node after the main content (e.g. icon or badge).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### Box layout and `View` props

All [Box](../Box/Box.types.ts) props except `children`, `flexDirection`, and `alignItems` are supported (`gap`, `padding`, `testID`, `style`, etc.). Defaults include `flexDirection` row, `alignItems` center, and `gap` of `1`.

### `twClassName`

Tailwind classes merged onto the root `Box`. Use this to add layout or override defaults (for example `gap-0` or `gap-2` instead of the default gap).

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<BoxHorizontal twClassName="gap-2 p-2">Label</BoxHorizontal>
```

### `style`

Forwarded to the root `Box` / `View`. Prefer `twClassName` for token-based styling where possible.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
