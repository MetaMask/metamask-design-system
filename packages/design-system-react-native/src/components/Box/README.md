# Box

`Box` is a low level layout component built on top of the React Native `View` element. It exposes a number of props that map to Tailwind utility classes allowing easy spacing and alignment control.

---

## Props

### `flexDirection`

The flexDirection style of the component.

| TYPE                                     | REQUIRED |
| :--------------------------------------- | :------- |
| [BoxFlexDirection](../../types/index.ts) | No       |

### `flexWrap`

The flexWrap style of the component.

| TYPE                                | REQUIRED |
| :---------------------------------- | :------- |
| [BoxFlexWrap](../../types/index.ts) | No       |

### `gap`

The gap between the component's children.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

### `margin`, `marginTop`, `marginBottom`, `marginLeft`, `marginRight`

The margin style of the component.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

### `padding`, `paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`

The padding style of the component.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

### `borderColor`

The borderColor style of the component.

| TYPE                                   | REQUIRED |
| :------------------------------------- | :------- |
| [BoxBorderColor](../../types/index.ts) | No       |

### `borderWdith`

The borderWdith style of the component.

| TYPE                                   | REQUIRED |
| :------------------------------------- | :------- |
| [BoxBorderWdith](../../types/index.ts) | No       |

### `borderRadius`

The borderRadius style of the component.

| TYPE                                    | REQUIRED |
| :-------------------------------------- | :------- |
| [BoxBorderRadius](../../types/index.ts) | No       |

### `borderStyle`

The borderStyle style of the component.

| TYPE                                   | REQUIRED |
| :------------------------------------- | :------- |
| [BoxBorderStyle](../../types/index.ts) | No       |

### `alignItems`

The alignItems style of the component.

| TYPE                                  | REQUIRED |
| :------------------------------------ | :------- |
| [BoxAlignItems](../../types/index.ts) | No       |

### `justifyContent`

The justifyContent style of the component.

| TYPE                                      | REQUIRED |
| :---------------------------------------- | :------- |
| [BoxJustifyContent](../../types/index.ts) | No       |

### `width`

The width style of the component.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

### `minWidth`

The minWidth style of the component.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

### `height`

The height style of the component.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

### `minHeight`

The minHeight style of the component.

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

### `backgroundColor`

The backgroundColor style of the component.

| TYPE                                       | REQUIRED |
| :----------------------------------------- | :------- |
| [BoxBackgroundColor](../../types/index.ts) | No       |

### `twClassName`

Optional prop to add twrnc overriding classNames.

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

### `flexDirection`

```tsx
<Box flexDirection={BoxFlexDirection.Row}>
  <Text>Row layout</Text>
</Box>
```

### `flexWrap`

```tsx
<Box flexWrap={BoxFlexWrap.Wrap}>
  <Text>Wrapped content</Text>
</Box>
```

### `gap`

```tsx
<Box gap={4}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Box>
```

### `margin`

```tsx
<Box margin={3}>
  <Text>With margin</Text>
</Box>
```

### `padding`

```tsx
<Box padding={2}>
  <Text>With padding</Text>
</Box>
```

### `borderColor`

```tsx
<Box borderColor={BoxBorderColor.BorderMuted} borderWidth={1}>
  <Text>Muted border</Text>
</Box>
```

### `borderWidth`

```tsx
<Box borderWidth={2}>
  <Text>Thick border</Text>
</Box>
```

### `borderRadius`

```tsx
<Box borderRadius={BoxBorderRadius.Md}>
  <Text>Rounded corners</Text>
</Box>
```

### `borderStyle`

```tsx
<Box borderStyle={BoxBorderStyle.Dashed} borderWidth={1}>
  <Text>Dashed border</Text>
</Box>
```

### `alignItems`

```tsx
<Box alignItems={BoxAlignItems.Center}>
  <Text>Centered content</Text>
</Box>
```

### `justifyContent`

```tsx
<Box justifyContent={BoxJustifyContent.SpaceBetween}>
  <Text>Left</Text>
  <Text>Right</Text>
</Box>
```

### `width`

```tsx
<Box width={150}>
  <Text>Fixed width</Text>
</Box>
```

### `minWidth`

```tsx
<Box minWidth={100}>
  <Text>Minimum width</Text>
</Box>
```

### `height`

```tsx
<Box height={100}>
  <Text>Fixed height</Text>
</Box>
```

### `minHeight`

```tsx
<Box minHeight={80}>
  <Text>Minimum height</Text>
</Box>
```

### `backgroundColor`

```tsx
<Box backgroundColor={BoxBackgroundColor.BackgroundAlternative}>
  <Text>Colored background</Text>
</Box>
```

### `twClassName`

```tsx
<Box twClassName="rounded-xl bg-yellow-200 p-4">
  <Text>Custom tailwind style</Text>
</Box>
```

### `style`

```tsx
<Box style={{ shadowColor: 'black', shadowOpacity: 0.3 }}>
  <Text>Custom style</Text>
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
