# AvatarIcon

Avatar reserved for representing static icons inside of an avatar.

```tsx
import {
  AvatarIcon,
  AvatarIconSeverity,
  IconName,
} from '@metamask/design-system-react-native';

<AvatarIcon name={IconName.Bank} />;
```

## Props

### `name`

The icon name to display in the avatar.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | Yes      | `undefined` |

```tsx
<AvatarIcon name={IconName.Bank} />
```

### `severity`

Optional prop to control the severity of the avatar.

| TYPE                 | REQUIRED | DEFAULT                      |
| :------------------- | :------- | :--------------------------- |
| `AvatarIconSeverity` | No       | `AvatarIconSeverity.Neutral` |

Available severities:

- `AvatarIconSeverity.Neutral`
- `AvatarIconSeverity.Info`
- `AvatarIconSeverity.Success`
- `AvatarIconSeverity.Error`
- `AvatarIconSeverity.Warning`

```tsx
<AvatarIcon name={IconName.Warning} severity={AvatarIconSeverity.Warning} />
<AvatarIcon name={IconName.CheckCircle} severity={AvatarIconSeverity.Success} />
<AvatarIcon name={IconName.Info} severity={AvatarIconSeverity.Info} />
```

### `size`

The size of the AvatarIcon.

Available sizes:

- `AvatarBaseSize.Xs` (16px)
- `AvatarBaseSize.Sm` (24px)
- `AvatarBaseSize.Md` (32px)
- `AvatarBaseSize.Lg` (40px)
- `AvatarBaseSize.Xl` (48px)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `AvatarBaseSize` | No       | `AvatarBaseSize.Md` |

```tsx
<AvatarIcon name={IconName.Bank} size={AvatarBaseSize.Sm} />
<AvatarIcon name={IconName.Bank} />
<AvatarIcon name={IconName.Bank} size={AvatarBaseSize.Lg} />
```

### `iconColor`

Color of the icon within the avatar.

| TYPE        | REQUIRED | DEFAULT                 |
| ----------- | -------- | ----------------------- |
| `IconColor` | No       | `IconColor.IconDefault` |

```tsx
<AvatarIcon name={IconName.Bank} iconColor={IconColor.IconPrimary} />
```

### `backgroundColor`

Background color of the avatar.

| TYPE              | REQUIRED | DEFAULT                                 |
| ----------------- | -------- | --------------------------------------- |
| `BackgroundColor` | No       | `BackgroundColor.BackgroundAlternative` |

```tsx
<AvatarIcon
  name={IconName.Bank}
  backgroundColor={BackgroundColor.BackgroundDefault}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { AvatarIcon } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarIcon
  name={IconName.Bank}
  twClassName="border-2 border-primary-100"
/>

// Override default styles
<AvatarIcon
  name={IconName.Bank}
  twClassName="!bg-error-100"
/>
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
  <AvatarIcon name={IconName.Bank} style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
