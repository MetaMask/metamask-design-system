# AvatarAccount

The `AvatarAccount` component is reserved for representing accounts inside of an avatar. It extends the functionality of [`AvatarBase`](../AvatarBase/) by incorporating an Account and severity levels, making it useful for visually representing statuses, alerts, or simply user avatars with Accounts.

---

## Props

### `variant`

Optional prop to control the variant of the avatar account.

| TYPE                   | REQUIRED | DEFAULT                         |
| :--------------------- | :------- | :------------------------------ |
| `AvatarAccountVariant` | No       | `AvatarAccountVariant.Jazzicon` |

Available severities:

- `Jazzicon`
- `Blockies`

---

### `address` (Required)

Required address used as a unique identifier to generate the AvatarAccount art.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | Yes      | `N/A`   |

---

### Other Props

`AvatarAccount` supports all props from [`AvatarBase`](#) except `children`, `fallbackText`, and `fallbackTextProps`. This includes:

- `size` – Controls the avatar size. See [AvatarBase documentation](#) for details.
- `shape` – Controls the avatar shape. See [AvatarBase documentation](#) for details.
- `twClassName` – Additional Tailwind class names.
- `style` – Override or extend style properties.

---

## Accessibility

Since `AvatarAccount` typically represents an account-based avatar. it is important to ensure the component is usable by screen readers and assistive technologies. The following `react-native` accessibility props can be passed:

- **`accessibilityLabel`**: Use to describe the AvatarAccount.
- **`accessibilityRole`**:
  - If interactive (e.g., navigates to account details), set to `button` or another appropriate role.
- **`accessibilityHint`**: Provide context if `AvatarAccount` triggers a navigation or action.
- **`accessible`**: Set to `true` when the avatar is meaningful, so screen readers properly identify it. If the Account is strictly decorative or not essential, it can be set to `false`.

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import AvatarAccount, {
  AvatarAccountSeverity,
} from '@metamask/design-system-react-native';

<AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />;
```

---

### Setting Variant

```tsx
<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  variant={AvatarAccountVariant.Blockies}
/>
```

---

### Changing Size

```tsx
import { AvatarSize } from '@metamask/design-system-react-native';

<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  size={AvatarAccountSize.Lg}
/>;
```

See the [AvatarBase README](#) for more details on `size` and `shape`.

---

## Notes

- `AvatarAccount` relies on [`AvatarBase`](#) for its foundational behavior.
- The `variant` prop changes the AvatarAccount art style.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs), the [AvatarBase documentation](#), or contact the maintainers of the design system.
