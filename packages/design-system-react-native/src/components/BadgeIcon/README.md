# BadgeIcon

BadgeIcon is a circular indicator that contains an icon, used to provide quick context or visual tagging at a glance.

```tsx
import { BadgeIcon } from '@metamask/design-system-react-native';

<BadgeIcon name="CheckBold" />;
```

## Props

### `name`

The icon name to display in the badge.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | Yes      | `undefined` |

```tsx
<BadgeIcon name="CheckBold" />
```

### `variant`

The visual variant of the badge.

Available variants:

- `BadgeIconVariant.Success`
- `BadgeIconVariant.Error`
- `BadgeIconVariant.Warning`
- `BadgeIconVariant.Info`

| TYPE               | REQUIRED | DEFAULT                    |
| ------------------ | -------- | -------------------------- |
| `BadgeIconVariant` | No       | `BadgeIconVariant.Success` |

```tsx
<BadgeIcon name="CheckBold" variant={BadgeIconVariant.Success} />
<BadgeIcon name="WarningFilled" variant={BadgeIconVariant.Warning} />
```

### `size`

The size of the BadgeIcon.

Available sizes:

- `BadgeIconSize.Sm` (16px)
- `BadgeIconSize.Md` (20px)

| TYPE            | REQUIRED | DEFAULT            |
| --------------- | -------- | ------------------ |
| `BadgeIconSize` | No       | `BadgeIconSize.Md` |

```tsx
<BadgeIcon name="CheckBold" size={BadgeIconSize.Sm} />
<BadgeIcon name="CheckBold" />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { BadgeIcon } from '@metamask/design-system-react-native';

// Add additional styles
<BadgeIcon
  name="CheckBold"
  twClassName="border-2 border-primary-100"
>
  Custom Border
</BadgeIcon>

// Override default styles
<BadgeIcon
  name="CheckBold"
  twClassName="!bg-error-100"
>
  Override Background
</BadgeIcon>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

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
  <BadgeIcon name="CheckBold" style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
