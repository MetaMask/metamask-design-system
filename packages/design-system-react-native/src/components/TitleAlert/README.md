# TitleAlert

TitleAlert stacks a severity-based [`IconAlert`](../IconAlert/README.md) (32px) above a centered title row. Use it in **modals**, **bottom sheets**, or other compact surfaces when you need alert context plus a short heading (for example swap warnings).

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<TitleAlert severity={IconAlertSeverity.Warning} title="High price impact" />;
```

## Props

### `severity`

Passed to [`IconAlert`](../IconAlert/README.md) to select the icon glyph and color. Same values as `IconAlertSeverity`.

| TYPE                | REQUIRED | DEFAULT |
| ------------------- | -------- | ------- |
| `IconAlertSeverity` | Yes      | —       |

### `title`

Title row content. When `title` is a string, it uses `TextVariant.HeadingSm` and `TextColor.TextDefault` (merged with `titleProps`). The row renders only when `title` is renderable (`null`, `undefined`, `false`, and `''` are not); `titleStartAccessory` / `titleEndAccessory` without a renderable `title` do not show the row.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

### `titleStartAccessory`

Optional node to the left of `title` in the title row. Only visible when `title` is renderable.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `titleEndAccessory`

Optional node to the right of `title` in the title row. Only visible when `title` is renderable.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `titleProps`

Optional props merged into the title row `Text` when `title` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

### `twClassName`

Optional Tailwind classes merged onto the root container via `twMerge`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

## Example

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<TitleAlert severity={IconAlertSeverity.Warning} title="High price impact" />;
```
