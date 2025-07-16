# Box

`Box` is a low level flexbox layout component built on top of the React Native `View` element. It provides a comprehensive set of props for layout control including flexbox properties, spacing (margin and padding), borders, and background colors that map to Tailwind utility classes.

---

## Props

### Flexbox Properties

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

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

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

### Margin Properties

### `margin`

The margin of the component on all sides. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `marginTop`

The top margin of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `marginRight`

The right margin of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `marginBottom`

The bottom margin of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `marginLeft`

The left margin of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `marginHorizontal`

The horizontal margin (left and right) of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `marginVertical`

The vertical margin (top and bottom) of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### Padding Properties

### `padding`

The padding of the component on all sides. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `paddingTop`

The top padding of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `paddingRight`

The right padding of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `paddingBottom`

The bottom padding of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `paddingLeft`

The left padding of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `paddingHorizontal`

The horizontal padding (left and right) of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### `paddingVertical`

The vertical padding (top and bottom) of the component. Use values from the BoxSpacing scale (0-12).

| TYPE                               | REQUIRED |
| :--------------------------------- | :------- |
| [BoxSpacing](../../types/index.ts) | No       |

### Border Properties

### `borderWidth`

The border width of the component. Use only valid Tailwind CSS border width values (0, 1, 2, 4, 8).

| TYPE                                   | REQUIRED |
| :------------------------------------- | :------- |
| [BoxBorderWidth](../../types/index.ts) | No       |

### `borderColor`

The border color of the component.

| TYPE                                   | REQUIRED |
| :------------------------------------- | :------- |
| [BoxBorderColor](../../types/index.ts) | No       |

### Background Properties

### `backgroundColor`

The background color of the component.

| TYPE                                       | REQUIRED |
| :----------------------------------------- | :------- |
| [BoxBackgroundColor](../../types/index.ts) | No       |

### General Properties

### `twClassName`

Optional prop to add twrnc overriding classNames for styling beyond the component's built-in props.

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

### Flexbox Properties

#### `flexDirection`

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

#### `flexWrap`

```tsx
<Box
  flexDirection={BoxFlexDirection.Row}
  flexWrap={BoxFlexWrap.Wrap}
  twClassName="w-full"
>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
  <Text>Item 4</Text>
</Box>
```

#### `gap`

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

#### `alignItems`

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

#### `justifyContent`

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

### Margin Properties

#### `margin`

```tsx
// All sides margin (16px)
<Box margin={4} backgroundColor={BoxBackgroundColor.PrimaryMuted}>
  <Text>Box with margin</Text>
</Box>

// No margin
<Box margin={0} backgroundColor={BoxBackgroundColor.BackgroundDefault}>
  <Text>Box without margin</Text>
</Box>
```

#### Directional Margins

```tsx
// Different margins on each side
<Box
  marginTop={2}
  marginRight={4}
  marginBottom={3}
  marginLeft={1}
  backgroundColor={BoxBackgroundColor.WarningMuted}
>
  <Text>Box with directional margins</Text>
</Box>

// Horizontal and vertical margins
<Box
  marginHorizontal={4}
  marginVertical={2}
  backgroundColor={BoxBackgroundColor.SuccessMuted}
>
  <Text>Box with horizontal and vertical margins</Text>
</Box>
```

### Padding Properties

#### `padding`

```tsx
// All sides padding (16px)
<Box padding={4} backgroundColor={BoxBackgroundColor.InfoMuted}>
  <Text>Box with padding</Text>
</Box>

// Large padding (24px)
<Box padding={6} backgroundColor={BoxBackgroundColor.BackgroundDefault}>
  <Text>Box with large padding</Text>
</Box>
```

#### Directional Padding

```tsx
// Different padding on each side
<Box
  paddingTop={2}
  paddingRight={4}
  paddingBottom={3}
  paddingLeft={1}
  backgroundColor={BoxBackgroundColor.Alternative}
>
  <Text>Box with directional padding</Text>
</Box>

// Horizontal and vertical padding
<Box
  paddingHorizontal={6}
  paddingVertical={3}
  backgroundColor={BoxBackgroundColor.Muted}
>
  <Text>Box with horizontal and vertical padding</Text>
</Box>
```

### Border Properties

#### `borderWidth` and `borderColor`

```tsx
// Basic border
<Box
  borderWidth={1}
  borderColor={BoxBorderColor.BorderDefault}
  padding={4}
>
  <Text>Box with default border</Text>
</Box>

// Thick colored border
<Box
  borderWidth={2}
  borderColor={BoxBorderColor.PrimaryDefault}
  padding={4}
>
  <Text>Box with thick primary border</Text>
</Box>

// Error state border
<Box
  borderWidth={1}
  borderColor={BoxBorderColor.ErrorDefault}
  backgroundColor={BoxBackgroundColor.ErrorMuted}
  padding={4}
>
  <Text>Error state box</Text>
</Box>
```

### Background Properties

#### `backgroundColor`

```tsx
// Primary background
<Box backgroundColor={BoxBackgroundColor.PrimaryDefault} padding={4}>
  <Text>Box with primary background</Text>
</Box>

// Muted background
<Box backgroundColor={BoxBackgroundColor.Muted} padding={4}>
  <Text>Box with muted background</Text>
</Box>

// Success background
<Box backgroundColor={BoxBackgroundColor.SuccessMuted} padding={4}>
  <Text>Box with success background</Text>
</Box>
```

### Combined Usage

#### Card-like Component

```tsx
<Box
  padding={4}
  margin={2}
  backgroundColor={BoxBackgroundColor.BackgroundDefault}
  borderWidth={1}
  borderColor={BoxBorderColor.BorderDefault}
>
  <Text>Card Title</Text>
  <Box marginTop={2} gap={2}>
    <Text>Card content goes here</Text>
    <Text>More content</Text>
  </Box>
</Box>
```

#### Complex Layout

```tsx
<Box
  flexDirection={BoxFlexDirection.Column}
  gap={3}
  margin={4}
  padding={6}
  borderWidth={1}
  borderColor={BoxBorderColor.BorderDefault}
  backgroundColor={BoxBackgroundColor.BackgroundDefault}
>
  <Text>Main Container</Text>
  <Box
    flexDirection={BoxFlexDirection.Row}
    gap={2}
    padding={3}
    backgroundColor={BoxBackgroundColor.Alternative}
    borderWidth={1}
    borderColor={BoxBorderColor.BorderMuted}
  >
    <Text>Child 1</Text>
    <Text>Child 2</Text>
  </Box>
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

The `gap`, `margin`, and `padding` props use the `BoxSpacing` numeric system for consistent spacing scales:

**Available Values:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

**Pixel Mapping:**

- `0` - 0px (none)
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

## BoxBorderWidth Values

The `borderWidth` prop uses the `BoxBorderWidth` type with only valid Tailwind CSS border width values:

**Available Values:** 0, 1, 2, 4, 8

**Pixel Mapping:**

- `0` - 0px (no border, maps to `border-0`)
- `1` - 1px (default border, maps to `border`)
- `2` - 2px (maps to `border-2`)
- `4` - 4px (maps to `border-4`)
- `8` - 8px (maps to `border-8`)

---

## Color Options

### BoxBackgroundColor

Available background colors include:

- `Default` - Default background color
- `Alternative` - Alternative background color
- `PrimaryDefault` - Primary brand color
- `PrimaryMuted` - Muted primary color
- `ErrorDefault` - Error state color
- `ErrorMuted` - Muted error color
- `WarningDefault` - Warning state color
- `WarningMuted` - Muted warning color
- `SuccessDefault` - Success state color
- `SuccessMuted` - Muted success color
- `InfoDefault` - Info state color
- `InfoMuted` - Muted info color
- `Transparent` - Transparent background

### BoxBorderColor

Available border colors include:

- `Default` - Default border color
- `Muted` - Muted border color
- `PrimaryDefault` - Primary brand border
- `ErrorDefault` - Error state border
- `WarningDefault` - Warning state border
- `SuccessDefault` - Success state border
- `InfoDefault` - Info state border
- `Transparent` - Transparent border

---

## Usage Patterns

### Basic Horizontal Layout

```tsx
<Box
  flexDirection={BoxFlexDirection.Row}
  gap={3}
  alignItems={BoxAlignItems.Center}
  padding={4}
  backgroundColor={BoxBackgroundColor.BackgroundDefault}
>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</Box>
```

### Vertical Stack

```tsx
<Box
  flexDirection={BoxFlexDirection.Column}
  gap={2}
  padding={4}
  backgroundColor={BoxBackgroundColor.Alternative}
>
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
  padding={4}
  backgroundColor={BoxBackgroundColor.BackgroundDefault}
>
  <Text>Left</Text>
  <Text>Right</Text>
</Box>
```

### Alert/Notification Component

```tsx
<Box
  padding={4}
  margin={2}
  backgroundColor={BoxBackgroundColor.WarningMuted}
  borderWidth={1}
  borderColor={BoxBorderColor.WarningDefault}
>
  <Text>Warning: This is an alert message</Text>
</Box>
```

### Button-like Component

```tsx
<Box
  padding={3}
  backgroundColor={BoxBackgroundColor.PrimaryDefault}
  borderWidth={1}
  borderColor={BoxBorderColor.PrimaryDefault}
  alignItems={BoxAlignItems.Center}
>
  <Text>Button Text</Text>
</Box>
```
