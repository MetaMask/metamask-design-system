# HeaderAlert

HeaderAlert is a [`HeaderStandard`](./../HeaderStandard/README.md) layout whose center content is always an [`IconAlert`](./../IconAlert/README.md) at `IconSize.Lg`, driven by a required `severity` that matches [`IconAlert`](./../IconAlert/README.md) semantics.

The center slot is always the `IconAlert`; `title`, `titleProps`, `subtitle`, `subtitleProps`, and `children` are not part of the public API. Pass actions such as `onBack` or `onClose` as you would on `HeaderStandard`.

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert severity={IconAlertSeverity.Warning} onClose={() => {}} />;
```

## Props

### `severity`

Same values and icon/color mapping as [`IconAlert` `severity`](./../IconAlert/README.md). This value is always passed to the inner `IconAlert` after `iconAlertProps`, so it overrides any `severity` inside `iconAlertProps`.

| TYPE                | REQUIRED | DEFAULT |
| ------------------- | -------- | ------- |
| `IconAlertSeverity` | Yes      | -       |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert severity={IconAlertSeverity.Error} onClose={handleClose} />;
```

### `iconAlertProps`

Optional props spread onto the inner `IconAlert` (for example `testID`, `twClassName`, `accessible`). The type is `IconAlert` props with `severity` and `size` omitted, because `HeaderAlert` always supplies those (`severity` from this component; `size` is `IconSize.Lg`).

| TYPE                                         | REQUIRED | DEFAULT     |
| -------------------------------------------- | -------- | ----------- |
| `Omit<IconAlertProps, 'severity' \| 'size'>` | No       | `undefined` |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert
  severity={IconAlertSeverity.Info}
  onClose={handleClose}
  iconAlertProps={{ testID: 'alert-header-icon', accessible: true }}
/>;
```

### Other props

All [`HeaderStandard`](./../HeaderStandard/README.md) props except `children`, `title`, `titleProps`, `subtitle`, and `subtitleProps` are supported (`onBack`, `onClose`, `twClassName`, `testID`, etc.).

## References

- Storybook: **Components / HeaderAlert** — `Default`, `Severity`
- [MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
