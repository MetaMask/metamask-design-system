# AvatarIcon

AvatarIcon is used to render icon avatars within an interface.

```tsx
import { AvatarIcon } from '@metamask/design-system-react-native';

<AvatarIcon name="Bank" />;
```

## Props

### `name`

The icon name to display in the avatar.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `IconName` | Yes | `undefined` |

```tsx
<AvatarIcon name="Bank" />
```

### `size`

The size of the AvatarIcon.

Available sizes:

- `AvatarSize.Xs` (16px)
- `AvatarSize.Sm` (24px)
- `AvatarSize.Md` (32px)
- `AvatarSize.Lg` (40px)
- `AvatarSize.Xl` (48px)

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `AvatarSize` | No | `AvatarSize.Md` |

```tsx
<AvatarIcon name="Bank" size={AvatarSize.Sm} />
<AvatarIcon name="Bank" />
<AvatarIcon name="Bank" size={AvatarSize.Lg} />
```

### `iconColor`

Color of the icon within the avatar.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `IconColor` | No | `IconColor.IconDefault` |

```tsx
<AvatarIcon name="Bank" iconColor={IconColor.IconPrimary} />
```

### `backgroundColor`

Background color of the avatar.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `BackgroundColor` | No | `BackgroundColor.BackgroundAlternative` |

```tsx
<AvatarIcon 
  name="Bank" 
  backgroundColor={BackgroundColor.BackgroundDefault}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
import { AvatarIcon } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarIcon 
  name="Bank"
  twClassName="border-2 border-primary-100"
>
  Custom Border
</AvatarIcon>

// Override default styles
<AvatarIcon 
  name="Bank"
  twClassName="!bg-error-100"
>
  Override Background
</AvatarIcon>
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
  <AvatarIcon name="Bank" style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
