# BoxHorizontal

BoxHorizontal lays out optional start and end accessories with a text or child region in a horizontal row. The public API combines [TextOrChildren](../temp-components/TextOrChildren/TextOrChildren.tsx) (`children`, `textProps` for the middle) with a root [Box](../Box/Box.tsx): `flexDirection` is always row; `alignItems` defaults to center and `gap` defaults to `1`, and both can be overridden. Other [Box](../Box/Box.types.ts) layout and `View` props apply to that root.

```tsx
import { BoxHorizontal } from '@metamask/design-system-react-native';

<BoxHorizontal>Label</BoxHorizontal>;
```

## Props

Structural props (`children`, accessories) match `BoxHorizontalPropsShared` from `@metamask/design-system-shared` (ADR-0004); React Native intersects that with [Box](../Box/Box.types.ts) (omitting Box `children` and `flexDirection`) and adds `textProps` for [Text](../Text/Text.tsx). Main content is always the `children` / `textProps` pair above, and the row direction is fixed. `alignItems` defaults to center but you can pass `alignItems` on the root to override alignment.

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

Root [Box](../Box/Box.types.ts) props other than `flexDirection` are supported (`alignItems`, `gap`, `padding`, `testID`, `style`, etc.). Defaults when omitted: `alignItems` center and `gap` of `1`.

```tsx
import { BoxAlignItems } from '@metamask/design-system-react-native';

<BoxHorizontal alignItems={BoxAlignItems.Start}>Top-aligned row</BoxHorizontal>;
```

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
