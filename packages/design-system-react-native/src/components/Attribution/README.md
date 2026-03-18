# Attribution

Attribution is a text line built on BoxHorizontal with default styling for attribution or secondary labels: `TextVariant.BodySm`, `TextColor.TextAlternative`, and `gap-2` layout. Optional start and end accessories are supported.

```tsx
import { Attribution } from '@metamask/design-system-react-native';

<Attribution>Powered by MetaMask</Attribution>;
```

## Props

Attribution extends BoxHorizontal props. The following defaults are applied; you can override them via the same props.

### `children`

Content to render (string or node). When a string, it is rendered with the default text styling unless overridden by `textProps`.

| TYPE                        | REQUIRED | DEFAULT |
| --------------------------- | -------- | ------- |
| `React.ReactNode \| string` | Yes      | -       |

```tsx
<Attribution>Powered by MetaMask</Attribution>
```

### `textProps`

Optional props passed to the inner Text when `children` is a string. Defaults: `TextVariant.BodySm`, `TextColor.TextAlternative`. Pass any valid Text props to override.

| TYPE                                   | REQUIRED | DEFAULT                 |
| -------------------------------------- | -------- | ----------------------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | BodySm, TextAlternative |

```tsx
<Attribution textProps={{ testID: 'attribution-text' }}>Label</Attribution>
<Attribution textProps={{ variant: TextVariant.BodyMd, color: TextColor.TextDefault }}>
  Custom styling
</Attribution>
```

### `startAccessory`

Optional node rendered before the text (e.g. icon, logo).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Attribution startAccessory={<Icon name={IconName.Info} />}>
  With icon
</Attribution>
```

### `endAccessory`

Optional node rendered after the text (e.g. badge, link).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Attribution endAccessory={<ButtonIcon iconName={IconName.Info} />}>
  With button
</Attribution>
```

### `twClassName`

Optional Tailwind class names applied to the root. Merged with the default `gap-2`; you can override gap (e.g. `gap-0`) or add classes (e.g. `p-2`).

| TYPE     | REQUIRED | DEFAULT   |
| -------- | -------- | --------- |
| `string` | No       | `"gap-2"` |

```tsx
<Attribution twClassName="p-2">With padding</Attribution>
```

### ViewProps

Attribution forwards ViewProps (e.g. `testID`, `accessibilityLabel`) to the root Box.

```tsx
<Attribution testID="footer-attribution" accessibilityLabel="Attribution">
  Powered by MetaMask
</Attribution>
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
