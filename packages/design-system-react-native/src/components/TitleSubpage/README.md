# TitleSubpage

TitleSubpage displays a title with optional accessories: an optional `startAccessory` to the left, a heading title with optional inline `titleAccessory`, and optional bottom label or `bottomAccessory`.

```tsx
import { TitleSubpage } from '@metamask/design-system-react-native';

<TitleSubpage
  startAccessory={<AvatarToken />}
  title="Token Name"
  bottomLabel="$1,234.56"
/>;
```

## Props

### `title`

Main title text, rendered with `TextVariant.HeadingMd`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `titleAccessory`

Optional node rendered to the right of the title (for example an info icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `startAccessory`

Optional node rendered to the left of the title and bottom content, vertically aligned with the text block. The root row uses gap spacing between the start column and the main column.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `bottomLabel` / `bottomAccessory`

Content below the title row. When `bottomLabel` is set, it is shown as body small alternative text and takes priority over `bottomAccessory`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `string`    | No       | `undefined` |
| `ReactNode` | No       | `undefined` |

### `titleProps` / `bottomLabelProps`

Optional props merged into the corresponding [Text](../Text/README.md) nodes.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

### `testID`

Optional test ID for the root container.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `twClassName`

Optional Tailwind classes for the root container (merged with defaults).

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

## Usage

```tsx
import { TitleSubpage } from '@metamask/design-system-react-native';

<TitleSubpage title="Token Name" />

<TitleSubpage
  startAccessory={<AvatarToken size={AvatarTokenSize.Sm} />}
  title="Ethereum"
  bottomLabel="$1,234.56"
/>

<TitleSubpage
  title="Details"
  titleAccessory={<ButtonIcon iconName={IconName.Info} size={ButtonIconSize.Sm} />}
  bottomLabel="Subtitle"
/>
```

## Accessibility

- Prefer meaningful `title` and `bottomLabel` strings so screen readers announce the full context.
- Pass `testID` and `titleProps` / `bottomLabelProps` (including `accessibilityLabel` where needed) for tests or custom labels.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
