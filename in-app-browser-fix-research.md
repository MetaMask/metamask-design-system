# In-App Browser X Close Button Fix Research

## Problem
The X close button in the in-app browser is not visible in dark mode because it's using the same color as the background, making it effectively invisible to users.

## Available Components & Solutions

### 1. ButtonIcon Component (Recommended)
The codebase includes a well-designed `ButtonIcon` component that automatically handles theme-aware styling:

```typescript
import { ButtonIcon } from '@metamask/design-system-react-native';
import { IconName } from '@metamask/design-system-react-native';

// Usage example
<ButtonIcon
  iconName={IconName.Close}
  onPress={handleClose}
  size={ButtonIconSize.Md}
  testID="close-button"
/>
```

**Benefits:**
- Automatic theme-aware styling
- Proper accessibility support
- Consistent design across the app
- Built-in pressed/hover states
- Proper color contrast in both light and dark modes

### 2. Manual Color Implementation (Alternative)
If using `ButtonIcon` is not possible, use the theme-aware color tokens:

```typescript
import { useTailwind } from '@metamask/design-system-twrnc-preset';

// For React Native components
const tw = useTailwind();

// Use theme-aware color class
<TouchableOpacity style={tw`bg-transparent`}>
  <Icon
    name={IconName.Close}
    color="text-icon-default"  // This automatically adapts to theme
    size={IconSize.Md}
  />
</TouchableOpacity>
```

## Key Findings

### Available Design System Components:
1. **ButtonIcon** - Full-featured button with icon (`packages/design-system-react-native/src/components/ButtonIcon/`)
2. **Icon** - Base icon component with theme-aware colors
3. **Close Icon** - Available as `IconName.Close`

### Theme-Aware Color Tokens:
- `text-icon-default` - Primary icon color that adapts to theme
- `text-icon-default-hover` - Hover state color
- `text-icon-default-pressed` - Pressed state color

### ButtonIcon Features:
- Automatic theme handling (light/dark mode)
- Built-in accessibility support
- Proper touch targets
- Consistent styling across platforms
- Press animations

## Implementation Steps

1. **Locate the in-app browser component** (likely in a modal or overlay)
2. **Replace the current X button implementation** with either:
   - `ButtonIcon` component (recommended)
   - Manual implementation using `text-icon-default` color
3. **Test in both light and dark modes** to ensure visibility
4. **Verify accessibility** (proper touch targets, screen reader support)

## Code Example for Fix

```typescript
// Before (problematic)
<TouchableOpacity onPress={handleClose}>
  <Text style={{ color: '#000' }}>×</Text>  // Fixed color, invisible in dark mode
</TouchableOpacity>

// After (recommended solution)
<ButtonIcon
  iconName={IconName.Close}
  onPress={handleClose}
  size={ButtonIconSize.Md}
  testID="close-button"
/>

// Alternative solution if ButtonIcon can't be used
<TouchableOpacity onPress={handleClose}>
  <Icon
    name={IconName.Close}
    color="text-icon-default"  // Theme-aware color
    size={IconSize.Md}
  />
</TouchableOpacity>
```

## Testing Checklist
- [ ] Verify button is visible in light mode
- [ ] Verify button is visible in dark mode  
- [ ] Test button functionality (closes browser)
- [ ] Check accessibility (screen reader, touch target size)
- [ ] Verify consistent styling with other close buttons in the app

## Next Steps
1. Identify the specific file containing the in-app browser component
2. Implement the ButtonIcon solution
3. Test across different themes
4. Ensure proper accessibility compliance