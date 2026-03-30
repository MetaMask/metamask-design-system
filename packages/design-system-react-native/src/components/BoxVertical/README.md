# BoxVertical

BoxVertical lays out optional top and bottom accessories with a text or child region in a vertical column. The public API combines [TextOrChildren](../temp-components/TextOrChildren/TextOrChildren.tsx) (`children`, `textProps` for the middle) with a root [Box](../Box/Box.tsx): `flexDirection` is always column. Other [Box](../Box.types.ts) layout and `View` props apply to that root.

```tsx
import { BoxVertical } from '@metamask/design-system-react-native';

<BoxVertical>Label</BoxVertical>;
```

## Props

`BoxVerticalProps` intersects [TextOrChildren](../temp-components/TextOrChildren/TextOrChildren.types.ts) with [Box](../Box/Box.types.ts) props, omitting Box `children` and `flexDirection` so the type matches the implementation: main content is always the `children` / `textProps` pair below, and the column direction is fixed.

### `children`

Main content: a string (rendered via `Text` using `textProps`) or any `ReactNode`.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `ReactNode \| string` | Yes      | N/A     |

```tsx
<BoxVertical>Plain string label</BoxVertical>

<BoxVertical>
  <CustomNode />
</BoxVertical>
```

### `textProps`

Optional props passed to `Text` when `children` is a string. Same as [TextOrChildren](../temp-components/TextOrChildren/TextOrChildren.types.ts).

| TYPE | REQUIRED | DEFAULT     |
| ---- | -------- | ----------- |
| —    | No       | `undefined` |

```tsx
import { TextColor, TextVariant } from '@metamask/design-system-react-native';

<BoxVertical
  textProps={{ variant: TextVariant.BodyMd, color: TextColor.TextDefault }}
>
  Styled label
</BoxVertical>;
```

### `topAccessory`

Optional node above the main content.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `bottomAccessory`

Optional node below the main content.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### Box layout and `View` props

Root [Box](../Box/Box.types.ts) props other than `flexDirection` are supported (`alignItems`, `gap`, `padding`, `testID`, `style`, etc.).

### `twClassName`

Tailwind classes merged onto the root `Box`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<BoxVertical twClassName="gap-2 p-2">Label</BoxVertical>
```

### `style`

Forwarded to the root `Box` / `View`. Prefer `twClassName` for token-based styling where possible.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
