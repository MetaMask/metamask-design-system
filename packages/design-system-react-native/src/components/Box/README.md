# Box

The Box component is a generic container component that can be used to create UI elements with background color, padding, and border color support.

## Props

| Name            | Type                 | Default                        | Description                               |
| --------------- | -------------------- | ------------------------------ | ----------------------------------------- |
| backgroundColor | BoxBackgroundColor   | BoxBackgroundColor.Transparent | The background color of the Box           |
| padding         | BoxPadding           | 0                              | The padding of the Box (0-12)             |
| borderColor     | BoxBorderColor       | BoxBorderColor.None            | The border color of the Box               |
| twClassName     | string               | ''                             | Additional Tailwind class names           |
| style           | StyleProp<ViewStyle> | undefined                      | Additional styles for the Box             |
| children        | React.ReactNode      | undefined                      | The content to be rendered within the Box |

## Usage

```tsx
import React from 'react';
import { Text } from 'react-native';
import {
  Box,
  BoxBackgroundColor,
  BoxBorderColor,
} from '@metamask/design-system-react-native';

const ExampleComponent = () => {
  return (
    <Box
      backgroundColor={BoxBackgroundColor.PrimaryDefault}
      padding={4}
      borderColor={BoxBorderColor.BorderDefault}
    >
      <Text>Content inside the Box</Text>
    </Box>
  );
};
```

## Examples

### Default

```tsx
<Box
  backgroundColor={BoxBackgroundColor.BackgroundDefault}
  padding={4}
  borderColor={BoxBorderColor.BorderDefault}
>
  <Text>Box with default styling</Text>
</Box>
```

### Alternative Background

```tsx
<Box
  backgroundColor={BoxBackgroundColor.BackgroundAlternative}
  padding={6}
  borderColor={BoxBorderColor.BorderDefault}
>
  <Text>Box with alternative background</Text>
</Box>
```

### Primary Color

```tsx
<Box
  backgroundColor={BoxBackgroundColor.PrimaryDefault}
  padding={8}
  borderColor={BoxBorderColor.None}
>
  <Text>Box with primary color</Text>
</Box>
```

### With Border

```tsx
<Box
  backgroundColor={BoxBackgroundColor.Transparent}
  padding={2}
  borderColor={BoxBorderColor.BorderDefault}
>
  <Text>Box with border</Text>
</Box>
```

### Padding Variations

The Box component supports padding values from 0 to 12, mapping directly to Tailwind's spacing scale:

```tsx
<Box padding={0}>
  <Text>padding: 0</Text>
</Box>

<Box padding={2}>
  <Text>padding: 2</Text>
</Box>

<Box padding={4}>
  <Text>padding: 4</Text>
</Box>

<Box padding={8}>
  <Text>padding: 8</Text>
</Box>
```
