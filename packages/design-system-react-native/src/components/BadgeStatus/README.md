# BadgeStatus

`BadgeStatus` indicates the status an entity is on.

---

## Props

### `status` (Required)

Controls the status of the badge.

| TYPE                | REQUIRED | DEFAULT |
| :------------------ | :------- | :------ |
| `BadgeStatusStatus` | Yes      | `N/A`   |

Available statuses:

- `Active`
- `PartiallyActive`
- `Inactive`
- `New`
- `Attention`

Each status maps to a different background and border color:

| Status            | Background Color        | Border Color             |
| ----------------- | ----------------------- | ------------------------ |
| `Active`          | `bg-success-default`    | `border-success-default` |
| `PartiallyActive` | `bg-background-default` | `border-success-default` |
| `Inactive`        | `bg-icon-muted`         | `border-icon-muted`      |
| `New`             | `bg-primary-default`    | `border-primary-default` |
| `Attention`       | `bg-error-default`      | `border-error-default`   |

---

### `size`

Optional prop to control the size of the badge.

| TYPE              | REQUIRED | DEFAULT              |
| :---------------- | :------- | :------------------- |
| `BadgeStatusSize` | No       | `BadgeStatusSize.Md` |

Available sizes:

- `Md` (8px)
- `Lg` (10px)

---

### `hasBorder`

Determines whether the badge has an outer border.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `true`  |

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
import BadgeStatus, {
  BadgeStatusStatus,
} from '@metamask/design-system-react-native';

<BadgeStatus status={BadgeStatusStatus.Active} />;
```

---

### Changing Status

```tsx
<BadgeStatus status={BadgeStatusStatus.Attention} />
```

---

### Adjusting Size

```tsx
import { BadgeStatusSize } from '@metamask/design-system-react-native';

<BadgeStatus status={BadgeStatusStatus.New} size={BadgeStatusSize.Lg} />;
```

---

### Adding a Border

```tsx
<BadgeStatus status={BadgeStatusStatus.PartiallyActive} hasBorder />
```

---

### Customizing with Tailwind

```tsx
<BadgeStatus status={BadgeStatusStatus.Inactive} twClassName="border-red-500" />
```

---

## Accessibility

The `BadgeStatus` component supports accessibility through the optional `accessibilityLabel` prop. This allows developers to provide context-specific descriptions for screen readers.

```tsx
// Example with custom accessibility label
<BadgeStatus
  status={BadgeStatusStatus.Active}
  accessibilityLabel="Connected to Uniswap"
/>
```

---

## Notes

- `BadgeStatus` is useful for indicating statuses such as online/offline states, alerts, or new updates.
- The border color dynamically adjusts based on the `status` value.
- You can override styles using `twClassName` or `style` props.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
