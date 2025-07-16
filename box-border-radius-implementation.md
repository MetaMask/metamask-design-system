# Box Border Radius Implementation

## Summary

I've successfully added a `borderRadius` prop to both the React and React Native Box components based on the MetaMask extension Box component patterns. This implementation follows the existing codebase patterns and provides comprehensive border radius support using Tailwind CSS classes.

## Changes Made

### 1. Types Definition

Added `BoxBorderRadius` enum to both type files:
- `packages/design-system-react/src/types/index.ts`
- `packages/design-system-react-native/src/types/index.ts`

The enum includes:
- `None` - No border radius (`rounded-none`)
- `Sm` - Small border radius (`rounded-sm` - 2px)
- `Md` - Medium border radius (`rounded-md` - 6px)
- `Lg` - Large border radius (`rounded-lg` - 8px)
- `Xl` - Extra large border radius (`rounded-xl` - 12px)
- `Xxl` - 2x large border radius (`rounded-2xl` - 16px)
- `Xxxl` - 3x large border radius (`rounded-3xl` - 24px)
- `Full` - Full border radius (`rounded-full` - 9999px)

### 2. Constants

Added `TWCLASSMAP_BOX_BORDER_RADIUS` constant mappings in both:
- `packages/design-system-react/src/components/Box/Box.constants.ts`
- `packages/design-system-react-native/src/components/Box/Box.constants.ts`

### 3. Types Interface

Added `borderRadius?: BoxBorderRadius` prop to BoxProps in both:
- `packages/design-system-react/src/components/Box/Box.types.ts`
- `packages/design-system-react-native/src/components/Box/Box.types.ts`

### 4. Component Implementation

Updated both Box components to handle the borderRadius prop:
- **React**: Added to `twMerge` call in `packages/design-system-react/src/components/Box/Box.tsx`
- **React Native**: Added to `twContainerClassNames` in `packages/design-system-react-native/src/components/Box/Box.tsx`

### 5. Exports

Updated index files to export the new `BoxBorderRadius` type:
- `packages/design-system-react/src/components/Box/index.ts`
- `packages/design-system-react-native/src/components/Box/index.ts`

### 6. Tests

Added comprehensive tests for the borderRadius prop in both:
- `packages/design-system-react/src/components/Box/Box.test.tsx`
- `packages/design-system-react-native/src/components/Box/Box.test.tsx`

### 7. Storybook Integration

Added new `BorderRadius` stories and updated argTypes in both:
- `packages/design-system-react/src/components/Box/Box.stories.tsx`
- `packages/design-system-react-native/src/components/Box/Box.stories.tsx`

### 8. Documentation

Added comprehensive documentation for the borderRadius prop:
- Updated `packages/design-system-react/src/components/Box/README.mdx`
- Updated `packages/design-system-react-native/src/components/Box/README.md`

## Usage Examples

### React Component

```tsx
import { Box, BoxBorderRadius } from '@metamask/design-system-react';

// Small border radius
<Box borderRadius={BoxBorderRadius.Sm} padding={4}>
  <Text>Small border radius</Text>
</Box>

// Combined with other border properties
<Box
  borderWidth={2}
  borderColor={BoxBorderColor.PrimaryDefault}
  borderRadius={BoxBorderRadius.Lg}
  backgroundColor={BoxBackgroundColor.PrimaryMuted}
  padding={4}
>
  <Text>Combined border properties</Text>
</Box>
```

### React Native Component

```tsx
import { Box, BoxBorderRadius } from '@metamask/design-system-react-native';

// Full border radius (circular)
<Box borderRadius={BoxBorderRadius.Full} padding={4}>
  <Text>Circular box</Text>
</Box>

// Combined with other properties
<Box
  borderWidth={1}
  borderColor={BoxBorderColor.BorderDefault}
  borderRadius={BoxBorderRadius.Md}
  backgroundColor={BoxBackgroundColor.BackgroundMuted}
  padding={4}
>
  <Text>Card-like component</Text>
</Box>
```

## Design Consistency

This implementation maintains consistency with:
- Existing Box component patterns
- Tailwind CSS border radius utilities
- MetaMask extension Box component usage
- Design system standards for border radius values

## Testing

All implementations include:
- Unit tests for the borderRadius prop
- Integration tests with other border properties
- Storybook stories for visual testing
- Comprehensive test coverage for all border radius values

The implementation follows the existing codebase patterns and provides a complete, tested, and documented solution for border radius support in both React and React Native Box components.