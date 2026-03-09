# BannerAlert

BannerAlert is a semantic alert banner that composes BannerBase and applies severity-driven icon and background styles.

```tsx
import {
  BannerAlert,
  BannerAlertSeverity,
} from '@metamask/design-system-react-native';

<BannerAlert
  severity={BannerAlertSeverity.Info}
  title="Title is sentence case no period"
  description="Description shouldn't repeat title. 1-3 lines."
  actionButtonLabel="Action"
  actionButtonOnPress={() => undefined}
  onClose={() => undefined}
/>;
```

## Props

### `severity`

Optional semantic severity used to choose icon and background styles.

| PROP       | TYPE                  | REQUIRED | DEFAULT                    |
| ---------- | --------------------- | -------- | -------------------------- |
| `severity` | `BannerAlertSeverity` | No       | `BannerAlertSeverity.Info` |

Supported values:

- `BannerAlertSeverity.Info`
- `BannerAlertSeverity.Success`
- `BannerAlertSeverity.Warning`
- `BannerAlertSeverity.Danger`

### `iconProps`

Optional props that are merged onto the severity icon in the start accessory. Use `iconProps` to attach identifiers (like `testID`) or add extra styling while preserving the severity-driven icon color and size.

### Inherited BannerBase Props

BannerAlert forwards BannerBase props so title/content/actions/close affordance work the same way.

- `title`, `description`, `children`
- `actionButtonLabel`, `actionButtonOnPress`, `actionButtonProps`
- `onClose`, `closeButtonProps`
