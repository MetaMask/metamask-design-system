# Box

`Box` is a low level flexbox layout component built on top of the React Native `View` element. It provides a focused set of props that map to Tailwind flexbox utility classes for easy flex-based layout control.

---

## Props

### `flexDirection`

The flexDirection style of the component for controlling the main axis direction.

| TYPE                                     | REQUIRED |
| :--------------------------------------- | :------- |
| [BoxFlexDirection](../../types/index.ts) | No       |

### `flexWrap`

The flexWrap style of the component for controlling item wrapping behavior.

| TYPE                                | REQUIRED |
| :---------------------------------- | :------- |
| [BoxFlexWrap](../../types/index.ts) | No       |

### `gap`

The gap between the component's children. Use values from the BoxSpacing scale (0-12).

| TYPE   | REQUIRED |
| :----- | :------- |
| number | No       |

### `alignItems`

The alignItems style of the component for cross-axis alignment.

| TYPE                                  | REQUIRED |
| :------------------------------------ | :------- |
| [BoxAlignItems](../../types/index.ts) | No       |

### `justifyContent`

The justifyContent style of the component for main-axis alignment.

| TYPE                                      | REQUIRED |
| :---------------------------------------- | :------- |
| [BoxJustifyContent](../../types/index.ts) | No       |

### `twClassName`

Optional prop to add twrnc overriding classNames for styling beyond flex properties.

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
// Horizontal layout (default)
<Box flexDirection={BoxFlexDirection.Row}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Box>

// Vertical layout
<Box flexDirection={BoxFlexDirection.Column}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Box>
```

### `flexWrap`

```tsx
<Box flexDirection={BoxFlexDirection.Row} flexWrap={BoxFlexWrap.Wrap} twClassName="w-full">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
  <Text>Item 4</Text>
</Box>
```

### `gap`

```tsx
// Small gap (8px)
<Box gap={2}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Box>

// Large gap (24px)
<Box gap={6}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Box>
```

### `alignItems`

```tsx
// Center items on cross axis
<Box alignItems={BoxAlignItems.Center} twClassName="h-32">
  <Text>Centered content</Text>
</Box>

// Stretch items to fill cross axis
<Box alignItems={BoxAlignItems.Stretch}>
  <Text>Stretched content</Text>
</Box>
```

### `justifyContent`

```tsx
// Space between items
<Box flexDirection={BoxFlexDirection.Row} justifyContent={BoxJustifyContent.Between}>
  <Text>Left</Text>
  <Text>Right</Text>
</Box>

// Center items on main axis
<Box justifyContent={BoxJustifyContent.Center}>
  <Text>Centered</Text>
</Box>
```

### `twClassName`

```tsx
// Custom styling with Tailwind classes
<Box twClassName="p-4 bg-primary-muted border-2 border-primary-default rounded-lg">
  <Text>Custom styled box</Text>
</Box>

// Size and positioning with Tailwind
<Box twClassName="w-1/2 h-32 bg-warning-muted">
  <Text>Half width, fixed height</Text>
</Box>
```

### `style`

```tsx
<Box style={{ shadowColor: 'black', shadowOpacity: 0.3, elevation: 5 }}>
  <Text>Box with shadow</Text>
</Box>
```

---

## BoxSpacing Values

The `gap` prop uses the `BoxSpacing` numeric system for consistent spacing scales:

**Available Values:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

**Pixel Mapping:**

- `0` - 0px (no gap)
- `1` - 4px (extra small)
- `2` - 8px (small)
- `3` - 12px (small-medium)
- `4` - 16px (medium)
- `5` - 20px (medium-large)
- `6` - 24px (large)
- `7` - 28px (extra large)
- `8` - 32px (2x large)
- `9` - 36px (3x large)
- `10` - 40px (4x large)
- `11` - 44px (5x large)
- `12` - 48px (6x large)

---

## Usage Patterns

### Basic Horizontal Layout

```tsx
<Box flexDirection={BoxFlexDirection.Row} gap={3} alignItems={BoxAlignItems.Center}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</Box>
```

### Vertical Stack

```tsx
<Box flexDirection={BoxFlexDirection.Column} gap={2}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</Box>
```

### Space Between Layout

```tsx
<Box
  flexDirection={BoxFlexDirection.Row}
  justifyContent={BoxJustifyContent.Between}
  alignItems={BoxAlignItems.Center}
>
  <Text>Left</Text>
  <Text>Right</Text>
</Box>
```

### Responsive Grid with Wrapping

```tsx
<Box
  flexDirection={BoxFlexDirection.Row}
  flexWrap={BoxFlexWrap.Wrap}
  gap={4}
  twClassName="w-full"
>
  <View style={{ width: '48%' }}>
    <Text>Item 1</Text>
  </View>
  <View style={{ width: '48%' }}>
    <Text>Item 2</Text>
  </View>
  <View style={{ width: '48%' }}>
    <Text>Item 3</Text>
  </View>
</Box>
```

---

## Notes

- `Box` provides a lightweight way to apply flexbox layout patterns in React Native.
- Use `twClassName` for styling properties like padding, margin, background colors, borders, and dimensions.
- The component always applies `flex` display behavior.
- Spacing properties use the numeric BoxSpacing system (0-12) for consistent spacing scales.
- Use `style` for React Native-specific properties like shadows, elevation, and transforms.

---

## Contributing

1. Add tests for new functionality.
2. Document any new props in this README.
3. Follow the design system coding guidelines.
