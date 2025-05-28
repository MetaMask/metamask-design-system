# Box

`Box` is a low level layout component built on top of the React Native `View` element. It exposes a number of props that map to Tailwind utility classes allowing easy spacing and alignment control.

---

## Props

### `flexDirection`

Controls the flex direction of the container.

| TYPE                                          | REQUIRED |
| :-------------------------------------------- | :------- |
| [BoxFlexDirection](../../types/index.ts#L---) | No       |

### `flexWrap`

Controls how children wrap within the container.

| TYPE                                     | REQUIRED |
| :--------------------------------------- | :------- |
| [BoxFlexWrap](../../types/index.ts#L---) | No       |

### Spacing Props

`gap`, `margin`, `marginTop`, `marginBottom`, `marginLeft`, `marginRight`, `padding`, `paddingTop`, `paddingBottom`, `paddingLeft`, and `paddingRight` all accept a `BoxSpacing` value from `0`–`12` which maps to 4px increments.

### Border Props

`borderColor`, `borderWidth`, `borderRadius`, and `borderStyle` allow customizing the border around the container.

| PROP           | TYPE                                         |
| :------------- | :------------------------------------------- |
| `borderColor`  | [BoxBorderColor](../../types/index.ts#L---)  |
| `borderWidth`  | `BoxSpacing`                                 |
| `borderRadius` | [BoxBorderRadius](../../types/index.ts#L---) |
| `borderStyle`  | [BoxBorderStyle](../../types/index.ts#L---)  |

### Alignment Props

Use `alignItems` and `justifyContent` to control flex alignment.

| PROP             | TYPE                                           |
| :--------------- | :--------------------------------------------- |
| `alignItems`     | [BoxAlignItems](../../types/index.ts#L---)     |
| `justifyContent` | [BoxJustifyContent](../../types/index.ts#L---) |

### Size Props

`width`, `minWidth`, `height`, and `minHeight` also accept `BoxSpacing` values.

### `backgroundColor`

Optional prop to set a themed background color.

| TYPE                                            | REQUIRED |
| :---------------------------------------------- | :------- |
| [BoxBackgroundColor](../../types/index.ts#L---) | No       |

### `twClassName`

Optional Tailwind class overrides.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `''`    |

### `style`

Optional style prop forwarded to the underlying `View`.

| TYPE                   | REQUIRED | DEFAULT |
| :--------------------- | :------- | :------ |
| `StyleProp<ViewStyle>` | No       | `null`  |

### Additional ViewProps

All other `ViewProps` are passed directly to the underlying `View` component.

---

## Usage

### Basic Usage

```tsx
<Box padding={2} backgroundColor={BoxBackgroundColor.BackgroundDefault}>
  <Text>Content</Text>
</Box>
```

### Row Layout

```tsx
<Box flexDirection={BoxFlexDirection.Row} gap={2}>
  <Box backgroundColor={BoxBackgroundColor.PrimaryDefault} padding={1} />
  <Box backgroundColor={BoxBackgroundColor.SuccessDefault} padding={1} />
</Box>
```

---

## Notes

- `Box` provides a lightweight way to apply common spacing and layout patterns.
- Use `twClassName` or `style` for further customization when needed.

---

## Contributing

1. Add tests for new functionality.
2. Document any new props in this README.
3. Follow the design system coding guidelines.
