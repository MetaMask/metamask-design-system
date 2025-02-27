# AvatarIcon

The `AvatarIcon` component is reserved for representing static icons inside of an avatar. It extends the functionality of [`AvatarBase`](../../primitives/AvatarBase/) by incorporating an icon and severity levels, making it useful for visually representing statuses, alerts, or simply user avatars with icons.

---

## Props

### `severity`

Optional prop to control the severity of the avatar.

| TYPE                 | REQUIRED | DEFAULT                      |
| :------------------- | :------- | :--------------------------- |
| `AvatarIconSeverity` | No       | `AvatarIconSeverity.Default` |

Available severities:

- `Default`
- `Info`
- `Success`
- `Error`
- `Warning`

---

### `iconName` (Required)

The name of the icon to be displayed.

| TYPE       | REQUIRED | DEFAULT |
| :--------- | :------- | :------ |
| `IconName` | Yes      | `N/A`   |

---

### `iconProps`

Optional props to pass additional properties to the icon.

| TYPE                      | REQUIRED | DEFAULT |
| :------------------------ | :------- | :------ |
| `Omit<IconProps, 'name'>` | No       | `{}`    |

---

### Other Props

`AvatarIcon` supports all props from [`AvatarBase`](#) except `children`, `fallbackText`, and `fallbackTextProps`. This includes:

- `size` – Controls the avatar size. See [AvatarBase documentation](#) for details.
- `shape` – Controls the avatar shape. See [AvatarBase documentation](#) for details.
- `twClassName` – Additional Tailwind class names.
- `style` – Override or extend style properties.

---

## Accessibility

Since `AvatarIcon` typically represents an icon-based avatar for tokens, accounts, or networks, it is important to ensure the component is usable by screen readers and assistive technologies. The following `react-native` accessibility props can be passed:

- **`accessibilityLabel`**: Use to describe the AvatarIcon. For example, "Sent"
- **`accessibilityRole`**:
  - If interactive (e.g., navigates to account details), set to `button` or another appropriate role.
- **`accessibilityHint`**: Provide context if `AvatarIcon` triggers a navigation or action.
- **`accessible`**: Set to `true` when the avatar is meaningful, so screen readers properly identify it. If the icon is strictly decorative or not essential, it can be set to `false`.

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import AvatarIcon, {
  AvatarIconSeverity,
} from '@metamask/design-system-react-native';

<AvatarIcon iconName="User" />;
```

---

### Setting Severity

```tsx
<AvatarIcon iconName="Warning" severity={AvatarIconSeverity.Warning} />
```

---

### Customizing Icon Props

```tsx
<AvatarIcon iconName="Bell" iconProps={{ size: 20, color: 'red' }} />
```

---

### Changing Size and Shape

```tsx
import { AvatarSize, AvatarShape } from '@metamask/design-system-react-native';

<AvatarIcon iconName="User" size={AvatarSize.Lg} shape={AvatarShape.Square} />;
```

See the [AvatarBase README](#) for more details on `size` and `shape`.

---

## Notes

- `AvatarIcon` relies on [`AvatarBase`](#) for its foundational behavior.
- The `severity` prop changes the icon color, making it easy to signal statuses.
- You can override icon appearance via `iconProps`.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs), the [AvatarBase documentation](#), or contact the maintainers of the design system.
