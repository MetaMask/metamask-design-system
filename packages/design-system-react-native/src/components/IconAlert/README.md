# IconAlert

IconAlert maps a severity value to the correct alert [`Icon`](./../Icon/README.md) glyph and theme color for informational, success, warning, and error messaging.

```tsx
import {
  IconAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<IconAlert severity={IconAlertSeverity.Info} />;
```

## Props

### `severity`

The severity variant to display. Each value uses a fixed icon name and `IconColor` (callers cannot override `name` or `color` on the underlying `Icon`).

Available severities:

- `IconAlertSeverity.Info` — `IconName.Info`, `IconColor.PrimaryDefault`
- `IconAlertSeverity.Success` — `IconName.Confirmation`, `IconColor.SuccessDefault`
- `IconAlertSeverity.Warning` — `IconName.Danger`, `IconColor.WarningDefault`
- `IconAlertSeverity.Error` — `IconName.Error`, `IconColor.ErrorDefault`

| TYPE                | REQUIRED | DEFAULT                  |
| ------------------- | -------- | ------------------------ |
| `IconAlertSeverity` | No       | `IconAlertSeverity.Info` |

```tsx
import { IconAlert, IconAlertSeverity } from '@metamask/design-system-react-native';

<IconAlert severity={IconAlertSeverity.Info} />
<IconAlert severity={IconAlertSeverity.Success} />
<IconAlert severity={IconAlertSeverity.Warning} />
<IconAlert severity={IconAlertSeverity.Error} />
```

### `size`

The size of the icon. Same behavior as [`Icon` `size`](./../Icon/README.md).

Available sizes:

- `IconSize.Xs` (12px)
- `IconSize.Sm` (16px)
- `IconSize.Md` (20px)
- `IconSize.Lg` (24px)
- `IconSize.Xl` (32px)

| TYPE       | REQUIRED | DEFAULT       |
| ---------- | -------- | ------------- |
| `IconSize` | No       | `IconSize.Md` |

```tsx
import {
  IconAlert,
  IconAlertSeverity,
  IconSize,
} from '@metamask/design-system-react-native';

<IconAlert severity={IconAlertSeverity.Warning} size={IconSize.Sm} />
<IconAlert severity={IconAlertSeverity.Warning} />
<IconAlert severity={IconAlertSeverity.Warning} size={IconSize.Lg} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { IconAlert, IconAlertSeverity } from '@metamask/design-system-react-native';

// Add additional styles
<IconAlert severity={IconAlertSeverity.Info} twClassName="opacity-70" />

// Override default styles
<IconAlert severity={IconAlertSeverity.Info} twClassName="!text-error-100" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

Other `ViewProps` accepted by [`Icon`](./../Icon/README.md) (for example `testID`, `accessible`) are forwarded to the underlying icon.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import {
  IconAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <IconAlert
      severity={IconAlertSeverity.Info}
      style={tw.style('opacity-100', isActive && 'opacity-50')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
