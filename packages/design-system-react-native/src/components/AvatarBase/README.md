# AvatarBase

AvatarBase is the base component for avatars.

```tsx
import { AvatarBase } from '@metamask/design-system-react-native';

<AvatarBase>AB</AvatarBase>;
```

## Props

### `size`

The size of the AvatarBase.

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
<AvatarBase size={AvatarBaseSize.Sm}>Small Avatar</AvatarBase>
<AvatarBase>Medium Avatar (default)</AvatarBase>
<AvatarBase size={AvatarBaseSize.Lg}>Large Avatar</AvatarBase>
```

### `children`

The content of the AvatarBase component.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { AvatarBase } from '@metamask/design-system-react-native';

<AvatarBase>Custom avatar content</AvatarBase>;
```

### `backgroundColor`

Background color of the avatar.

| TYPE              | REQUIRED | DEFAULT                                 |
| ----------------- | -------- | --------------------------------------- |
| `BackgroundColor` | No       | `BackgroundColor.BackgroundAlternative` |

```tsx
<AvatarBase backgroundColor={BackgroundColor.BackgroundDefault}>
  Avatar with custom background
</AvatarBase>
```

### `borderColor`

Border color of the avatar.

| TYPE          | REQUIRED | DEFAULT                     |
| ------------- | -------- | --------------------------- |
| `BorderColor` | No       | `BorderColor.BorderDefault` |

```tsx
<AvatarBase borderColor={BorderColor.BorderMuted}>
  Avatar with custom border
</AvatarBase>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { AvatarBase } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarBase twClassName="border-2 border-primary-100">
  Custom Border
</AvatarBase>

// Override default styles
<AvatarBase twClassName="!bg-error-100">
  Override Background
</AvatarBase>
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
  <AvatarBase style={styles.custom}>Custom styled avatar</AvatarBase>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
