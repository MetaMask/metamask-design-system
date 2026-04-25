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

## Migration from Mobile Component Library

Migrating from `app/component-library/.../Banner/variants/BannerAlert`? **Severity strings, `variant` removal, and `iconProps`** are covered in the [BannerAlert migration section](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/MIGRATION.md#banneralert-component). For **action and close** APIs, see [BannerBase](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/MIGRATION.md#bannerbase-component) in the same guide.

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

Optional props that are merged onto the severity icon in the start accessory. Use `iconProps` to attach identifiers (like `testID`) or add extra styling while preserving the severity-driven icon color and size.

### `title`

Optional title rendered at the top of the banner body. Use `titleProps` when passing a string.

| PROP         | TYPE                 | REQUIRED | DEFAULT     |
| ------------ | -------------------- | -------- | ----------- |
| `title`      | `ReactNode`          | No       | `undefined` |
| `titleProps` | `Partial<TextProps>` | No       | `undefined` |

See the **Title** story for the behavior.

### `description`

Optional description rendered below the title. Use `descriptionProps` when passing a string.

| PROP               | TYPE                 | REQUIRED | DEFAULT     |
| ------------------ | -------------------- | -------- | ----------- |
| `description`      | `ReactNode`          | No       | `undefined` |
| `descriptionProps` | `Partial<TextProps>` | No       | `undefined` |

See the **Description** story for the behavior.

### `children`

Optional content rendered below the description. When a string is provided, BannerAlert wraps it in `Text`; use `childrenWrapperProps` to adjust its styling.

| PROP                   | TYPE                 | REQUIRED | DEFAULT     |
| ---------------------- | -------------------- | -------- | ----------- |
| `children`             | `ReactNode`          | No       | `undefined` |
| `childrenWrapperProps` | `Partial<TextProps>` | No       | `undefined` |

See the **Children** story for richer content.

### `actionButtonOnPress`

Optional press handler for the action button. When provided, `actionButtonLabel` is required and `actionButtonProps` customizes the `Button`.

| PROP                  | TYPE                   | REQUIRED        | DEFAULT     |
| --------------------- | ---------------------- | --------------- | ----------- |
| `actionButtonLabel`   | `string`               | Condition-based | `undefined` |
| `actionButtonOnPress` | `() => void`           | No              | `undefined` |
| `actionButtonProps`   | `Partial<ButtonProps>` | No              | `undefined` |

See the **ActionButtonOnPress** story for an example.

### `onClose`

Optional callback that renders the close icon; `closeButtonProps` customizes the button’s accessibility props or styles.

| PROP               | TYPE                       | REQUIRED | DEFAULT     |
| ------------------ | -------------------------- | -------- | ----------- |
| `onClose`          | `() => void`               | No       | `undefined` |
| `closeButtonProps` | `Partial<ButtonIconProps>` | No       | `undefined` |

See the **OnClose** story for behavior.

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the banner. These classes merge with the component’s default classes via `twMerge`, allowing you to:

- Add spacing or layout helpers not part of the default banner
- Override default colors or shadows when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<BannerAlert
  twClassName="shadow-lg ring-1 ring-primary-100"
  title="Custom banner"
  actionButtonLabel="Action"
>
  Banner content with extra shadow and border.
</BannerAlert>
```

### `style`

Use the `style` prop to customize the BannerAlert with React Native styles. Prefer `twClassName` for static Tailwind needs and reserve `style` for dynamic or conditional inline values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalBanner = ({ active }: { active: boolean }) => {
  const tw = useTailwind();

  return (
    <BannerAlert
      style={tw.style('bg-default', active && 'bg-success-default')}
      title="Conditional background"
      actionButtonLabel="Action"
    >
      Content with conditional background color.
    </BannerAlert>
  );
};
```
