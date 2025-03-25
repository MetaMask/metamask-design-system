# BadgeIcon

The `BadgeIcon` component represents static icons inside of a badge. It is useful for visually indicating different actions or statuses, such as sending, staking, or bridging assets.

---

## Props

### `iconName` (Required)

The name of the icon to be displayed.

| TYPE       | REQUIRED | DEFAULT |
| :--------- | :------- | :------ |
| `IconName` | Yes      | `N/A`   |

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
import BadgeIcon, { IconName } from '@metamask/design-system-react-native';

<BadgeIcon iconName={IconName.Send} />;
```

---

### Adjusting Icon Properties

```tsx
import {
  IconColor,
  IconSize,
  IconName,
} from '@metamask/design-system-react-native';

<BadgeIcon
  iconName={IconName.Send}
  iconProps={{ color: IconColor.SuccessDefault, size: IconSize.Sm }}
/>;
```

---

### Applying Tailwind Custom Styles

```tsx
<BadgeIcon iconName={IconName.Send} twClassName="bg-blue-500" />
```

---

## Notes

- `BadgeIcon` provides a quick visual indication for different actions in the UI.
- You can override the default icon properties using `iconProps`.
- Tailwind classes and custom styles can be applied for further customization.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
