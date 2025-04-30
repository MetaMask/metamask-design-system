# AvatarNetwork

`AvatarNetwork` is reserved for representing networks.

---

## Props

### `src`

Optional prop specifying the source of the network image or SVG.

| TYPE            | REQUIRED | DEFAULT | DESCRIPTION                               |
| --------------- | -------- | ------- | ----------------------------------------- |
| `ImageOrSvgSrc` | No       | `null`  | URI, local asset, or inline SVG component |

---

### `name`

Optional string used to derive the fallback text (first character).

| TYPE     | REQUIRED | DEFAULT | DESCRIPTION                            |
| -------- | -------- | ------- | -------------------------------------- |
| `string` | No       | `null`  | Used to create fallback if image fails |

---

### `imageOrSvgProps`

Optional props forwarded to the `ImageOrSvg` component.

| TYPE              | REQUIRED | DEFAULT | DESCRIPTION                                        |
| ----------------- | -------- | ------- | -------------------------------------------------- |
| `ImageOrSvgProps` | No       | `null`  | Customize image handling, test IDs, alt text, etc. |

---

### `size`

Controls the size of the avatar. Inherits from `AvatarBaseSize`.

| TYPE                | REQUIRED | DEFAULT                |
| ------------------- | -------- | ---------------------- |
| `AvatarNetworkSize` | No       | `AvatarNetworkSize.Md` |

Available sizes:

- `Xs` – 16px
- `Sm` – 24px
- `Md` – 32px
- `Lg` – 40px
- `Xl` – 48px

---

### `fallbackText`

Optional custom fallback text shown when image fails to load.

| TYPE     | REQUIRED | DEFAULT                                   | DESCRIPTION           |
| -------- | -------- | ----------------------------------------- | --------------------- |
| `string` | No       | First character of `name` or empty string | Used when image fails |

---

### `fallbackTextProps`

Optional props to customize the fallback text appearance.

| TYPE                 | REQUIRED | DEFAULT |
| -------------------- | -------- | ------- |
| `Partial<TextProps>` | No       | `{}`    |

---

### `twClassName`

Optional Tailwind-style utility classes.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | No       | `''`    |

---

### Additional Props

All other props supported by `AvatarBase`, excluding `children`, are also accepted (e.g., `style`, `testID`).

---

## Usage

### Basic

```tsx
<AvatarNetwork
  src={{ uri: 'https://example.com/network.svg' }}
  name="Uniswap"
/>
```

### Custom Size and Fallback

```tsx
<AvatarNetwork
  size={AvatarNetworkSize.Xl}
  src={{ uri: 'https://bad-link.com/image.png' }}
  name="Degen App"
  fallbackText="DA"
  fallbackTextProps={{ color: 'text-error-default' }}
/>
```

### Forwarding props to ImageOrSvg

```tsx
<AvatarNetwork
  src={{ uri: 'https://example.com/network.svg' }}
  imageOrSvgProps={{
    testID: 'network-image',
    imageProps: { accessibilityLabel: 'Network icon' },
  }}
/>
```

---

## Behavior

- Falls back to the first character of `name` if image fails to load.
- Defaults to `Md` (32px) size.
- Always uses a circular shape.

---

## Accessibility

- Use `imageOrSvgProps.imageProps.accessibilityLabel` to describe the Network for screen readers.
- The fallback text is rendered using the `Text` component and can be customized via `fallbackTextProps`.

---

## Notes

- This component uses `AvatarBase` and `ImageOrSvg` under the hood.
- SVGs and raster images are both supported.
- For custom shapes or behaviors, extend `AvatarBase` directly.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs), the [AvatarFavicon documentation](#), or contact the maintainers of the design system.
