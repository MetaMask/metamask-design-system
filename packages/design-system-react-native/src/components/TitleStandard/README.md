# TitleStandard

TitleStandard displays a title with optional accessories in a left-aligned layout: optional top label or top accessory, a heading title with optional inline accessory, and optional bottom label or bottom accessory.

```tsx
import { TitleStandard } from '@metamask/design-system-react-native';

<TitleStandard
  topLabel="Send"
  title="$4.42"
  titleAccessory={<Icon name={IconName.Info} />}
/>;
```

## Props

### `title`

Main title text, rendered with `TextVariant.HeadingLg`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `titleAccessory`

Optional node rendered to the right of the title (for example an info icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `topLabel` / `topAccessory`

Content above the title row. When `topLabel` is set, it is shown as body small alternative text and takes priority over `topAccessory`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `string`    | No       | `undefined` |
| `ReactNode` | No       | `undefined` |

### `bottomLabel` / `bottomAccessory`

Content below the title row. When `bottomLabel` is set, it is shown as body small alternative text and takes priority over `bottomAccessory`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `string`    | No       | `undefined` |
| `ReactNode` | No       | `undefined` |

### `titleProps` / `topLabelProps` / `bottomLabelProps`

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
import { TitleStandard } from '@metamask/design-system-react-native';

<TitleStandard title="$1,234.56" />

<TitleStandard topLabel="Total Balance" title="$5,432.10" />

<TitleStandard
  topLabel="Send"
  title="$4.42"
  bottomLabel="0.002 ETH"
/>

<TitleStandard
  topLabel="Balance"
  title="$4.42"
  titleAccessory={<Icon name={IconName.Info} />}
/>
```

## Accessibility

- Prefer meaningful `title` and label strings so screen readers announce the full context.
- Pass `testID` and `titleProps` / `topLabelProps` / `bottomLabelProps` (including `accessibilityLabel` where needed) when wiring automated tests or custom accessibility labels.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
