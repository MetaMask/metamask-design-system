# HeaderAlert

HeaderAlert renders a header whose center content is always an [`IconAlert`](./../IconAlert/README.md) at `IconSize.Lg`, on top of [`HeaderBase`](./../HeaderBase/README.md). It accepts the same `onBack`, `backButtonProps`, `onClose`, and `closeButtonProps` shortcuts as [`HeaderStandard`](./../HeaderStandard/README.md) (resolved to `HeaderBase` start/end icon props), and applies `px-2` horizontal padding like `HeaderStandard`.

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert severity={IconAlertSeverity.Warning} onClose={() => {}} />;
```

## Props

### `severity`

Controls which alert icon and color the centered `IconAlert` uses. The value is passed to `IconAlert` after `iconAlertProps`, so it wins over any `severity` supplied only inside `iconAlertProps` at runtime.

Available values (see [`IconAlert` README](./../IconAlert/README.md)):

- `IconAlertSeverity.Info`
- `IconAlertSeverity.Success`
- `IconAlertSeverity.Warning`
- `IconAlertSeverity.Error`

| TYPE                | REQUIRED | DEFAULT |
| ------------------- | -------- | ------- |
| `IconAlertSeverity` | Yes      | -       |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert severity={IconAlertSeverity.Error} onClose={handleClose} />
<HeaderAlert severity={IconAlertSeverity.Info} onBack={handleBack} />
```

### `iconAlertProps`

Optional props forwarded to the inner `IconAlert` (for example `testID`, `twClassName`, `accessible`). The public type omits `severity` and `size` because `HeaderAlert` sets them.

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

### `onBack`

If provided, a back [`ButtonIcon`](./../ButtonIcon/README.md) is shown as the start action (unless `startButtonIconProps` is set on `HeaderBase`, which takes priority). Same behavior as [`HeaderStandard`](./../HeaderStandard/README.md).

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert
  severity={IconAlertSeverity.Warning}
  onBack={() => navigation.goBack()}
/>;
```

### `backButtonProps`

Additional props for the back `ButtonIcon` when `onBack` or `backButtonProps` triggers the start action. `iconName` is fixed to the back arrow. Same behavior as [`HeaderStandard`](./../HeaderStandard/README.md).

| TYPE                                | REQUIRED | DEFAULT     |
| ----------------------------------- | -------- | ----------- |
| `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert
  severity={IconAlertSeverity.Info}
  backButtonProps={{ testID: 'header-back', accessibilityLabel: 'Go back' }}
/>;
```

### `onClose`

If provided, a close `ButtonIcon` is added to the end actions (before any `endButtonIconProps`). Same behavior as [`HeaderStandard`](./../HeaderStandard/README.md).

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert
  severity={IconAlertSeverity.Warning}
  onClose={() => setOpen(false)}
/>;
```

### `closeButtonProps`

Additional props for the close `ButtonIcon` when `onClose` or `closeButtonProps` adds the close action. `iconName` is fixed to close. Same behavior as [`HeaderStandard`](./../HeaderStandard/README.md).

| TYPE                                | REQUIRED | DEFAULT     |
| ----------------------------------- | -------- | ----------- |
| `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<HeaderAlert
  severity={IconAlertSeverity.Info}
  closeButtonProps={{ testID: 'header-close', accessibilityLabel: 'Close' }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the header container. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

// Add additional styles
<HeaderAlert
  severity={IconAlertSeverity.Info}
  twClassName="border-b border-muted"
  onClose={handleClose}
/>

// Override default styles
<HeaderAlert
  severity={IconAlertSeverity.Error}
  twClassName="bg-error-muted"
  onClose={handleClose}
/>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import {
  HeaderAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <HeaderAlert
      severity={IconAlertSeverity.Info}
      onClose={() => null}
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    />
  );
};
```

Other [`HeaderBase`](./../HeaderBase/README.md) props (for example `variant`, `startAccessory`, `endAccessory`, `startButtonIconProps`, `endButtonIconProps`, `testID`) are supported; `children` is not part of the public API because the center content is always the `IconAlert`.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
