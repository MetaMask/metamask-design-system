# AvatarBase

The `AvatarBase` component is the base component for all avatar variants.

---

## Props

### `children`

Optional prop for the content to be rendered within the `AvatarBase`.

| TYPE        | REQUIRED | DEFAULT |
| :---------- | :------- | :------ |
| `ReactNode` | No       | `null`  |

---

### `size`

Optional prop to control the size of the `AvatarBase`.

| TYPE             | REQUIRED | DEFAULT             |
| :--------------- | :------- | :------------------ |
| `AvatarBaseSize` | No       | `AvatarBaseSize.Md` |

Available sizes:

- `AvatarBaseSize.Xs` (16px)
- `AvatarBaseSize.Sm` (24px)
- `AvatarBaseSize.Md` (32px)
- `AvatarBaseSize.Lg` (40px)
- `AvatarBaseSize.Xl` (48px)

---

### `shape`

Optional prop to control the shape of the `AvatarBase`.

| TYPE              | REQUIRED | DEFAULT                  |
| :---------------- | :------- | :----------------------- |
| `AvatarBaseShape` | No       | `AvatarBaseShape.Circle` |

Available shapes:

- `AvatarBaseShape.Circle`
- `AvatarBaseShape.Square`

---

### `fallbackText`

Optional text to be displayed when the avatar content fails to render.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `null`  |

---

### `fallbackTextProps`

Optional props to customize the fallback text.

| TYPE                          | REQUIRED | DEFAULT |
| :---------------------------- | :------- | :------ |
| `Omit<TextProps, 'children'>` | No       | `{}`    |

---

### `twClassName`

Optional prop to add `twrnc` overriding class names.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `''`    |

---

### `style`

Optional prop to control the style.

| TYPE                   | REQUIRED | DEFAULT |
| :--------------------- | :------- | :------ |
| `StyleProp<ViewStyle>` | No       | `null`  |

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import AvatarBase from '@metamask/design-system-react-native';

<AvatarBase>👤</AvatarBase>;
```

---

### Avatar with Fallback Text

```tsx
<AvatarBase fallbackText="JD" />
```

---

### Customizing the Fallback Text

```tsx
<AvatarBase
  fallbackText="AB"
  fallbackTextProps={{ color: 'red', fontWeight: 'bold' }}
/>
```

---

### Changing Avatar Size

```tsx
<AvatarBase size={AvatarBaseSize.Lg}>👤</AvatarBase>
```

---

### Changing Avatar Shape

```tsx
<AvatarBase shape={AvatarBaseShape.Square}>👤</AvatarBase>
```

---

### Accessibility

- Ensure `fallbackText` provides meaningful information when the avatar content is unavailable.
- Use `fallbackTextProps` to style text for better visibility and contrast.

---

### Notes

- `AvatarBase` is optimized for handling different avatar states.
- The fallback text ensures a meaningful representation when no image or content is available.
- Custom styling can be applied using `twClassName` and `style` props.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
