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

The width style of the component. Uses semantic size values based on Tailwind CSS sizing classes.

| TYPE                                 | REQUIRED |
| :----------------------------------- | :------- |
| [BoxBlockSize](../../types/index.ts) | No       |

### `minWidth`

The minWidth style of the component. Uses semantic size values based on Tailwind CSS sizing classes.

| TYPE                                 | REQUIRED |
| :----------------------------------- | :------- |
| [BoxBlockSize](../../types/index.ts) | No       |

### `height`

The height style of the component. Uses semantic size values based on Tailwind CSS sizing classes.

| TYPE                                 | REQUIRED |
| :----------------------------------- | :------- |
| [BoxBlockSize](../../types/index.ts) | No       |

### `minHeight`

The minHeight style of the component. Uses semantic size values based on Tailwind CSS sizing classes.

| TYPE                                 | REQUIRED |
| :----------------------------------- | :------- |
| [BoxBlockSize](../../types/index.ts) | No       |

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
{/* Half width */}
<Box width={BoxBlockSize.Half}>
  <Text>50% width</Text>
</Box>

{/* Full width */}
<Box width={BoxBlockSize.Full}>
  <Text>100% width</Text>
</Box>

{/* Fractional width */}
<Box width={BoxBlockSize.OneThird}>
  <Text>33.33% width</Text>
</Box>
```

### `minWidth`

```tsx
{/* Minimum quarter width */}
<Box minWidth={BoxBlockSize.OneFourth}>
  <Text>Minimum 25% width</Text>
</Box>

{/* Auto minimum width */}
<Box minWidth={BoxBlockSize.Auto}>
  <Text>Auto minimum width</Text>
</Box>
```

### `height`

```tsx
{/* Full height */}
<Box height={BoxBlockSize.Full}>
  <Text>100% height</Text>
</Box>

{/* Screen height */}
<Box height={BoxBlockSize.Screen}>
  <Text>Full viewport height</Text>
</Box>

{/* Fractional height */}
<Box height={BoxBlockSize.TwoThirds}>
  <Text>66.67% height</Text>
</Box>
```

### `minHeight`

```tsx
{/* Auto minimum height */}
<Box minHeight={BoxBlockSize.Auto}>
  <Text>Auto minimum height</Text>
</Box>

{/* Half minimum height */}
<Box minHeight={BoxBlockSize.Half}>
  <Text>Minimum 50% height</Text>
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

## BoxBlockSize Values

The `width`, `height`, `minWidth`, and `minHeight` props accept `BoxBlockSize` enum values that map to Tailwind CSS sizing classes:

- `BoxBlockSize.Half` - 50% (1/2)
- `BoxBlockSize.OneThird` - 33.33% (1/3)
- `BoxBlockSize.TwoThirds` - 66.67% (2/3)
- `BoxBlockSize.OneFourth` - 25% (1/4)
- `BoxBlockSize.ThreeFourths` - 75% (3/4)
- `BoxBlockSize.OneFifth` - 20% (1/5)
- `BoxBlockSize.TwoFifths` - 40% (2/5)
- `BoxBlockSize.ThreeFifths` - 60% (3/5)
- `BoxBlockSize.FourFifths` - 80% (4/5)
- `BoxBlockSize.OneSixth` - 16.67% (1/6)
- `BoxBlockSize.FiveSixths` - 83.33% (5/6)

**Twelfths (12-column grid):**

- `BoxBlockSize.OneTwelfth` to `BoxBlockSize.ElevenTwelfths` - 8.33% to 91.67% (1/12 to 11/12)

**Utility Sizes:**

- `BoxBlockSize.Zero` - 0
- `BoxBlockSize.Full` - 100%
- `BoxBlockSize.Screen` - 100vh/100vw
- `BoxBlockSize.Auto` - auto
- `BoxBlockSize.Min` - min-content
- `BoxBlockSize.Max` - max-content

---

## BoxSpacing Values

The spacing props (`gap`, `margin`, `padding`, and their directional variants) use the `BoxSpacing` numeric system for consistent spacing scales:

**Available Values:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

**Pixel Mapping:**

- `0` - 0px
- `1` - 4px
- `2` - 8px
- `3` - 12px
- `4` - 16px
- `5` - 20px
- `6` - 24px
- `7` - 28px
- `8` - 32px
- `9` - 36px
- `10` - 40px
- `11` - 44px
- `12` - 48px

---

## Notes

- `Box` provides a lightweight way to apply common spacing and layout patterns.
- The `width`, `height`, `minWidth`, and `minHeight` props use the `BoxBlockSize` enum for better semantic sizing based on Tailwind CSS standards.
- Spacing properties (`margin`, `padding`, `gap`) use the numeric BoxSpacing system (0-12) for consistent spacing scales.
- Use `twClassName` or `style` for further customization when needed.

---

## Contributing

1. Add tests for new functionality.
2. Document any new props in this README.
3. Follow the design system coding guidelines.
