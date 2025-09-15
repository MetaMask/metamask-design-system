# Icon

Icons are read-only symbols that represent ideas or objects, offered in standard sizes.

```tsx
import { Icon } from '@metamask/design-system-react-native';

<Icon name="CheckBold" />;
```

## Props

### `name`

The icon name to display.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | Yes      | `undefined` |

```tsx
<Icon name="CheckBold" />
```

### `size`

The size of the icon.

Available sizes:

- `IconSize.Xs` (12px)
- `IconSize.Sm` (16px)
- `IconSize.Md` (20px)
- `IconSize.Lg` (24px)
- `IconSize.Xl` (32px)

| TYPE       | REQUIRED | DEFAULT       |
| ---------- | -------- | ------------- |
| `IconSize` | No       | `IconSize.Md` |

```tsx
<Icon name="CheckBold" size={IconSize.Sm} />
<Icon name="CheckBold" />
<Icon name="CheckBold" size={IconSize.Lg} />
```

### `color`

The color of the icon.

Available colors:

- `IconColor.IconDefault`
- `IconColor.IconAlternative`
- `IconColor.IconMuted`
- `IconColor.IconPrimary`
- `IconColor.IconSuccess`
- `IconColor.IconError`
- `IconColor.IconWarning`
- `IconColor.IconInfo`

| TYPE        | REQUIRED | DEFAULT                 |
| ----------- | -------- | ----------------------- |
| `IconColor` | No       | `IconColor.IconDefault` |

```tsx
<Icon name="CheckBold" color={IconColor.IconSuccess} />
<Icon name="Warning" color={IconColor.IconError} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Icon } from '@metamask/design-system-react-native';

// Add additional styles
<Icon
  name="CheckBold"
  twClassName="opacity-70"
>
  Semi-transparent Icon
</Icon>

// Override default styles
<Icon
  name="CheckBold"
  twClassName="!text-error-100"
>
  Override Color
</Icon>
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
  <Icon name="CheckBold" style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
