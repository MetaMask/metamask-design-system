# AlertAvatar

Avatar reserved for representing severity-based alert icons inside of an avatar.

```tsx
import {
  AlertAvatar,
  AvatarIconSeverity,
  IconName,
} from '@metamask/design-system-react-native';

<AlertAvatar iconName={IconName.Bank} />;
```

## Props

### `iconName`

The icon name to display in the avatar.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | Yes      | `undefined` |

```tsx
<AlertAvatar iconName={IconName.Bank} />
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
<AlertAvatar iconName={IconName.Warning} severity={AvatarIconSeverity.Warning} />
<AlertAvatar iconName={IconName.CheckCircle} severity={AvatarIconSeverity.Success} />
<AlertAvatar iconName={IconName.Info} severity={AvatarIconSeverity.Info} />
```

### `size`

The size of the AlertAvatar.

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
<AlertAvatar iconName={IconName.Bank} size={AvatarBaseSize.Sm} />
<AlertAvatar iconName={IconName.Bank} />
<AlertAvatar iconName={IconName.Bank} size={AvatarBaseSize.Lg} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { AlertAvatar } from '@metamask/design-system-react-native';

// Add additional styles
<AlertAvatar
  iconName={IconName.Bank}
  twClassName="border-2 border-primary-100"
/>

// Override default styles
<AlertAvatar
  iconName={IconName.Bank}
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
  <AlertAvatar iconName={IconName.Bank} style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
