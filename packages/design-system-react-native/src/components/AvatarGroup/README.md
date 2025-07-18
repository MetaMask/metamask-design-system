# AvatarGroup

AvatarGroup is used to render a group of avatars within an interface.

```tsx
import { AvatarGroup } from '@metamask/design-system-react-native';

<AvatarGroup>
  <AvatarAccount address="0x123..." />
  <AvatarAccount address="0x456..." />
</AvatarGroup>;
```

## Props

### `children`

The avatar components to display in the group.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `ReactNode` | Yes | `undefined` |

```tsx
import { AvatarGroup, AvatarAccount } from '@metamask/design-system-react-native';

<AvatarGroup>
  <AvatarAccount address="0x1234567890abcdef1234567890abcdef12345678" />
  <AvatarAccount address="0xabcdef1234567890abcdef1234567890abcdef12" />
  <AvatarAccount address="0x567890abcdef1234567890abcdef1234567890ab" />
</AvatarGroup>
```

### `maxAvatars`

Maximum number of avatars to display before showing overflow indicator.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number` | No | `4` |

```tsx
<AvatarGroup maxAvatars={3}>
  <AvatarAccount address="0x123..." />
  <AvatarAccount address="0x456..." />
  <AvatarAccount address="0x789..." />
  <AvatarAccount address="0xabc..." />
</AvatarGroup>
```

### `spacing`

Spacing between avatars in the group.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number` | No | `-8` |

```tsx
<AvatarGroup spacing={-12}>
  <AvatarAccount address="0x123..." />
  <AvatarAccount address="0x456..." />
</AvatarGroup>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
import { AvatarGroup } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarGroup twClassName="bg-primary-100">
  Custom Background
</AvatarGroup>

// Override default styles
<AvatarGroup twClassName="!flex-col">
  Override Layout
</AvatarGroup>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `StyleProp<ViewStyle>` | No | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <AvatarGroup style={styles.custom}>
    <AvatarAccount address="0x123..." />
    <AvatarAccount address="0x456..." />
  </AvatarGroup>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
