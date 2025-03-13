# BadgeIcon

The `BadgeIcon` component represents static icons inside of a badge. It is useful for visually indicating different actions or statuses, such as sending, staking, or bridging assets.

---

## Props

### `variant` (Required)

Determines the type of icon displayed within the badge.

| TYPE               | REQUIRED | DEFAULT |
| :----------------- | :------- | :------ |
| `BadgeIconVariant` | Yes      | `N/A`   |

Available variants:

- `Custom`
- `Snaps`
- `Send`
- `Stake`
- `Bridge`

Each variant maps to a predefined icon:

| Variant  | Icon                     |
| -------- | ------------------------ |
| `Snaps`  | `IconName.Snaps`         |
| `Send`   | `IconName.Arrow2UpRight` |
| `Stake`  | `IconName.Plant`         |
| `Bridge` | `IconName.Bridge`        |

For the `Custom` variant, you must specify an `iconName`.

---

### `iconProps`

Optional props to customize the appearance of the icon inside the badge.

| TYPE                 | REQUIRED | DEFAULT                                                  |
| :------------------- | :------- | :------------------------------------------------------- |
| `Partial<IconProps>` | No       | `{ size: IconSize.Xs, color: IconColor.PrimaryInverse }` |

---

### `twClassName`

Optional prop to add `twrnc` overriding class names.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `''`    |

---

### `style`

Optional prop to control the style of the badge container.

| TYPE                   | REQUIRED | DEFAULT |
| :--------------------- | :------- | :------ |
| `StyleProp<ViewStyle>` | No       | `null`  |

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import BadgeIcon, {
  BadgeIconVariant,
} from '@metamask/design-system-react-native';

<BadgeIcon variant={BadgeIconVariant.Send} />;
```

---

### Using a Custom Icon

```tsx
import { IconName } from '@metamask/design-system-react-native';

<BadgeIcon variant={BadgeIconVariant.Custom} iconName={IconName.Star} />;
```

---

### Adjusting Icon Properties

```tsx
import { IconColor, IconSize } from '@metamask/design-system-react-native';

<BadgeIcon
  variant={BadgeIconVariant.Stake}
  iconProps={{ color: IconColor.SuccessDefault, size: IconSize.Sm }}
/>;
```

---

### Applying Tailwind Custom Styles

```tsx
<BadgeIcon variant={BadgeIconVariant.Bridge} twClassName="bg-blue-500" />
```

---

## Notes

- `BadgeIcon` provides a quick visual indication for different actions in the UI.
- You can override the default icon properties using `iconProps`.
- The `Custom` variant allows specifying any icon from the `IconName` set.
- Tailwind classes and custom styles can be applied for further customization.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
