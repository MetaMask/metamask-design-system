# AvatarGroup

AvatarGroup is a stacked avatars component to represent a group of avatars.

```tsx
import {
  AvatarGroup,
  AvatarGroupVariant,
} from '@metamask/design-system-react-native';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    { address: '0x1234567890abcdef1234567890abcdef12345678' },
    { address: '0xabcdef1234567890abcdef1234567890abcdef12' },
    { address: '0x567890abcdef1234567890abcdef1234567890ab' },
  ]}
/>;
```

## Props

### `variant`

The type of avatars to display in the group.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `AvatarGroupVariant` | Yes      | `undefined` |

Available variants:

- `AvatarGroupVariant.Account`
- `AvatarGroupVariant.Favicon`
- `AvatarGroupVariant.Network`
- `AvatarGroupVariant.Token`

```tsx
<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[{ address: '0x1234...' }, { address: '0x5678...' }]}
/>
```

### `avatarPropsArr`

Array of props for the individual avatar components. The type depends on the variant.

| TYPE                                                                                               | REQUIRED | DEFAULT     |
| -------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `AvatarAccountProps[]` \| `AvatarFaviconProps[]` \| `AvatarNetworkProps[]` \| `AvatarTokenProps[]` | Yes      | `undefined` |

```tsx
// Account variant
<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    { address: '0x1234567890abcdef1234567890abcdef12345678' },
    { address: '0xabcdef1234567890abcdef1234567890abcdef12' },
  ]}
/>

// Favicon variant
<AvatarGroup
  variant={AvatarGroupVariant.Favicon}
  avatarPropsArr={[
    { src: { uri: 'https://metamask.io/favicon.ico' } },
    { src: { uri: 'https://uniswap.org/favicon.ico' } },
  ]}
/>

// Network variant
<AvatarGroup
  variant={AvatarGroupVariant.Network}
  avatarPropsArr={[
    { src: { uri: 'https://example.com/ethereum.png' }, name: 'Ethereum' },
    { src: { uri: 'https://example.com/polygon.png' }, name: 'Polygon' },
  ]}
/>

// Token variant
<AvatarGroup
  variant={AvatarGroupVariant.Token}
  avatarPropsArr={[
    { src: { uri: 'https://example.com/eth.png' }, name: 'ETH' },
    { src: { uri: 'https://example.com/usdc.png' }, name: 'USDC' },
  ]}
/>
```

### `size`

The size of the avatars in the group.

| TYPE              | REQUIRED | DEFAULT              |
| ----------------- | -------- | -------------------- |
| `AvatarGroupSize` | No       | `AvatarGroupSize.Md` |

Available sizes:

- `AvatarGroupSize.Xs` (16px)
- `AvatarGroupSize.Sm` (24px)
- `AvatarGroupSize.Md` (32px)
- `AvatarGroupSize.Lg` (40px)
- `AvatarGroupSize.Xl` (48px)

```tsx
<AvatarGroup
  variant={AvatarGroupVariant.Account}
  size={AvatarGroupSize.Lg}
  avatarPropsArr={[{ address: '0x1234...' }, { address: '0x5678...' }]}
/>
```

### `max`

Maximum number of avatars to display before showing overflow indicator.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `4`     |

```tsx
<AvatarGroup
  variant={AvatarGroupVariant.Account}
  max={3}
  avatarPropsArr={[
    { address: '0x1234...' },
    { address: '0x5678...' },
    { address: '0x9abc...' },
    { address: '0xdef0...' }, // This will show as "+1" overflow
  ]}
/>
```

### `isReverse`

Optional prop to reverse the order of avatar stacking.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `false` |

```tsx
<AvatarGroup
  variant={AvatarGroupVariant.Account}
  isReverse
  avatarPropsArr={[{ address: '0x1234...' }, { address: '0x5678...' }]}
/>
```

### `overflowTextProps`

Additional AvatarBase props to pass to the overflow text element.

| TYPE              | REQUIRED | DEFAULT     |
| ----------------- | -------- | ----------- |
| `AvatarBaseProps` | No       | `undefined` |

```tsx
<AvatarGroup
  variant={AvatarGroupVariant.Account}
  max={2}
  overflowTextProps={{
    backgroundColor: BackgroundColor.BackgroundError,
    textProps: { color: TextColor.TextDefault },
  }}
  avatarPropsArr={[
    { address: '0x1234...' },
    { address: '0x5678...' },
    { address: '0x9abc...' }, // "+1" will use custom styling
  ]}
/>
```

### `className`

Use the `className` prop to add Tailwind CSS classes to the component. These classes are applied after the component's default classes, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { AvatarGroup } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[{ address: '0x1234...' }]}
  className="bg-primary-100"
/>

// Override default styles
<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[{ address: '0x1234...' }]}
  className="!flex-col"
/>
```

> **Migrating from `twClassName`:** `twClassName` still works but is deprecated. Rename it to `className`. If both are passed, classes merge in this order: the component's own classes, then `twClassName`, then `className`, so `className` wins on conflicts.

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `className` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <AvatarGroup
    variant={AvatarGroupVariant.Account}
    avatarPropsArr={[{ address: '0x1234...' }, { address: '0x5678...' }]}
    style={styles.custom}
  />
);
```

Migrating from the mobile `AvatarGroup`? See the [AvatarGroup migration guide](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/MIGRATION.md#avatargroup-component) for `variant` + `avatarPropsArr`, renames, and `className` vs `spaceBetweenAvatars`.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
