# AvatarGroup

`AvatarGroup` is a stacked avatars to represent a group of avatars.

---

## Props

### `variant` (Required)

Determines the type of avatars used within the group.

| TYPE                 | REQUIRED | DEFAULT |
| :------------------- | :------- | :------ |
| `AvatarGroupVariant` | Yes      | `N/A`   |

Available variants:

- `Account`
- `Favicon`
- `Network`
- `Token`

---

### `avatarPropsArr` (Required)

An array of props for each avatar within the group.

| TYPE                 | REQUIRED | DEFAULT |
| :------------------- | :------- | :------ |
| `Array<AvatarProps>` | Yes      | `N/A`   |

Each avatar follows the prop structure of the corresponding variant component (`AvatarAccount`, `AvatarFavicon`, `AvatarNetwork`, `AvatarToken`).

---

### `size`

Optional prop to control the size of the avatars in the group.

| TYPE         | REQUIRED | DEFAULT         |
| :----------- | :------- | :-------------- |
| `AvatarSize` | No       | `AvatarSize.Md` |

Available sizes:

- `AvatarSize.Xs`
- `AvatarSize.Sm`
- `AvatarSize.Md`
- `AvatarSize.Lg`
- `AvatarSize.Xl`

---

### `max`

Determines the maximum number of avatars to display before showing an overflow indicator.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `number` | No       | `4`     |

---

### `isReverse`

Optional prop to reverse the order of avatar stacking.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `false` |

---

### `twClassName`

Optional prop to add `twrnc` overriding class names.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `''`    |

---

### `style`

Optional prop to control the style of the avatar group container.

| TYPE                   | REQUIRED | DEFAULT |
| :--------------------- | :------- | :------ |
| `StyleProp<ViewStyle>` | No       | `null`  |

---

## Usage

Below are examples illustrating how to structure the `avatarPropsArr` based on each avatar variant. Note that the data shown is purely illustrative.

### Account Avatars

```tsx
import React from 'react';
import AvatarGroup, {
  AvatarGroupVariant,
} from '@metamask/design-system-react-native';
import { AvatarAccountVariant } from '@metamask/design-system-react-native';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;
```

---

### Favicon Avatars

```tsx
import React from 'react';
import AvatarGroup, {
  AvatarGroupVariant,
} from '@metamask/design-system-react-native';

<AvatarGroup
  variant={AvatarGroupVariant.Favicon}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/favicon1.png' },
    },
    {
      src: { uri: 'https://example.com/favicon2.png' },
    },
    {
      src: { uri: 'https://example.com/favicon3.png' },
    },
  ]}
/>;
```

---

### Network Avatars

```tsx
import React from 'react';
import AvatarGroup, {
  AvatarGroupVariant,
} from '@metamask/design-system-react-native';

<AvatarGroup
  variant={AvatarGroupVariant.Network}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/net1.png' },
    },
    {
      src: { uri: 'https://example.com/net2.png' },
    },
    {
      src: { uri: 'https://example.com/net3.png' },
    },
  ]}
/>;
```

---

### Token Avatars

```tsx
import React from 'react';
import AvatarGroup, {
  AvatarGroupVariant,
} from '@metamask/design-system-react-native';

<AvatarGroup
  variant={AvatarGroupVariant.Token}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/token1.png' },
    },
    {
      src: { uri: 'https://example.com/token2.png' },
    },
    {
      src: { uri: 'https://example.com/token3.png' },
    },
  ]}
/>;
```

---

### Displaying More Avatars with Overflow

```tsx
<AvatarGroup
  variant={AvatarGroupVariant.Token}
  max={3}
  avatarPropsArr={[
    { src: { uri: 'https://example.com/token1.png' } },
    { src: { uri: 'https://example.com/token2.png' } },
    { src: { uri: 'https://example.com/token3.png' } },
    { src: { uri: 'https://example.com/token4.png' } },
  ]}
/>
```

If more than `max` avatars are provided, an overflow counter (e.g., `+1`) will be displayed.

---

### Changing Avatar Size

```tsx
import AvatarGroup, {
  AvatarGroupVariant,
  AvatarGroupSize,
} from '@metamask/design-system-react-native';
<AvatarGroup
  variant={AvatarGroupVariant.Network}
  size={AvatarGroupSize.Lg}
  avatarPropsArr={[
    { src: { uri: 'https://example.com/net1.png' } },
    { src: { uri: 'https://example.com/net2.png' } },
  ]}
/>;
```

---

## Notes

- `AvatarGroup` ensures consistent avatar alignment and spacing.
- Overflow avatars are indicated with a counter.
- It supports different avatar types based on the selected variant.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
