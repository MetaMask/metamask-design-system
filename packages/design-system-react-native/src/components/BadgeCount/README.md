# BadgeCount

`BadgeCount` is a numeric indicator of unread messages or notifications on an app or UI element.

---

## Props

### `count` (Required)

The number to be displayed in the badge.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `number` | Yes      | `N/A`   |

If `count` exceeds `max`, it will display as `max+`.

---

### `max`

Optional prop to set the maximum count before displaying `max+`.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `number` | No       | `99`    |

---

### `size`

Optional prop to control the size of the badge.

| TYPE             | REQUIRED | DEFAULT             |
| :--------------- | :------- | :------------------ |
| `BadgeCountSize` | No       | `BadgeCountSize.Md` |

Available sizes:

- `Md` (14px height)
- `Lg` (20px height)

---

### `textProps`

Optional props to be passed to the `Text` component inside the badge.

| TYPE                 | REQUIRED | DEFAULT |
| :------------------- | :------- | :------ |
| `Partial<TextProps>` | No       | `{}`    |

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
import BadgeCount from '@metamask/design-system-react-native';

<BadgeCount count={5} />;
```

---

### Setting a Maximum Count

```tsx
<BadgeCount count={120} max={99} />
```

This will display `99+` instead of `120`.

---

### Changing Badge Size

```tsx
import { BadgeCountSize } from '@metamask/design-system-react-native';

<BadgeCount count={8} size={BadgeCountSize.Lg} />;
```

---

### Customizing Text Props

```tsx
<BadgeCount count={3} textProps={{ color: 'white', fontWeight: 'bold' }} />
```

---

### Applying Tailwind Custom Styles

```tsx
<BadgeCount count={10} twClassName="bg-blue-500" />
```

---

## Notes

- `BadgeCount` is useful for indicating unread notifications, message counts, or status indicators.
- The text color and weight are customizable via `textProps`.
- The component ensures that excessively large numbers are represented concisely with `max+`.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
