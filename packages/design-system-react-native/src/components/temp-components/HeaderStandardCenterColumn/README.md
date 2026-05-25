# HeaderStandardCenterColumn

HeaderStandardCenterColumn renders a centered header title and optional subtitle with shared typography defaults. [HeaderStandard](../../HeaderStandard/README.md) and [HeaderStandardAnimated](../../HeaderStandardAnimated/README.md) compose this component so title and subtitle styling stay aligned.

For full header chrome (back, close, layout), use those headers rather than this helper alone.

```tsx
import { HeaderStandardCenterColumn } from '@metamask/design-system-react-native';

<HeaderStandardCenterColumn
  title="Screen title"
  subtitle="Optional subtitle"
/>;
```

## Props

### `title`

The main header label. When `title` is a string, it is rendered with `TextVariant.BodyMd` and `FontWeight.Bold`; `titleProps` can override. When `title` is a React node, it is rendered as provided and `titleProps` are not applied.

| TYPE              | REQUIRED | DEFAULT |
| ----------------- | -------- | ------- |
| `React.ReactNode` | Yes      | —       |

```tsx
import { HeaderStandardCenterColumn } from '@metamask/design-system-react-native';

<HeaderStandardCenterColumn title="Wallet" />

<HeaderStandardCenterColumn title={<CustomTitle />} />
```

### `titleProps`

Additional props for the title `Text` component. Only applied when `title` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { HeaderStandardCenterColumn } from '@metamask/design-system-react-native';

<HeaderStandardCenterColumn title="Wallet" titleProps={{ numberOfLines: 1 }} />;
```

### `subtitle`

Optional label below the title. When `subtitle` is a string, it is rendered with `TextVariant.BodySm` and `TextColor.TextAlternative`; `subtitleProps` can override. When `subtitle` is a React node, it is rendered as provided and `subtitleProps` are not applied.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `string \| React.ReactNode` | No       | `undefined` |

```tsx
import { HeaderStandardCenterColumn } from '@metamask/design-system-react-native';

<HeaderStandardCenterColumn title="Screen" subtitle="Details" />;
```

### `subtitleProps`

Additional props for the subtitle `Text` component. Only applied when `subtitle` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { HeaderStandardCenterColumn } from '@metamask/design-system-react-native';

<HeaderStandardCenterColumn
  title="Screen"
  subtitle="Details"
  subtitleProps={{ numberOfLines: 2 }}
/>;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
