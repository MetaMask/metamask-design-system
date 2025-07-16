# New Typography Tokens Summary

## Overview
Added new typography tokens to support PageHeading, SectionHeading, ButtonLabel, and AmountDisplay variants for both small and large screens.

## New Tokens Added

### Small Screen Tokens (S-*)
- `S-PageHeading` → `sPageHeading`
- `S-SectionHeading` → `sSectionHeading` 
- `S-ButtonLabel-Md` → `sButtonLabelMd`
- `S-ButtonLabel-Lg` → `sButtonLabelLg`
- `S-AmountDisplay-Lg` → `sAmountDisplayLg`

### Large Screen Tokens (L-*)
- `L-PageHeading` → `lPageHeading`
- `L-SectionHeading` → `lSectionHeading`
- `L-ButtonLabel-Md` → `lButtonLabelMd`
- `L-ButtonLabel-Lg` → `lButtonLabelLg`
- `L-AmountDisplay-Lg` → `lAmountDisplayLg`

## Files Updated

### Design Tokens Package
1. **CSS Files**
   - `packages/design-tokens/src/css/typography.css` - Added CSS variables for new tokens

2. **JavaScript/TypeScript Files**
   - `packages/design-tokens/src/js/typography/types.ts` - Added new tokens to ThemeTypography type
   - `packages/design-tokens/src/js/typography/typography.ts` - Added new token implementations

### Tailwind CSS Preset
3. **Tailwind Preset Files**
   - `packages/design-system-tailwind-preset/src/typography.ts` - Added new tokens to fontSize, letterSpacing, and lineHeight objects

### TWRNC Preset
4. **TWRNC Preset Files**
   - `packages/design-system-twrnc-preset/src/typography.types.ts` - Added new variants to TypographyVariant type
   - `packages/design-system-twrnc-preset/src/typography.ts` - Added new token implementations

## Token Values

### Page Heading
- **Small Screen**: fontSize: 24px, lineHeight: 32px, fontWeight: bold
- **Large Screen**: fontSize: 32px, lineHeight: 40px, fontWeight: bold

### Section Heading
- **Small Screen**: fontSize: 16px, lineHeight: 24px, fontWeight: bold
- **Large Screen**: fontSize: 18px, lineHeight: 24px, fontWeight: bold

### Button Label Medium
- **Small Screen**: fontSize: 16px, lineHeight: 24px, fontWeight: medium
- **Large Screen**: fontSize: 16px, lineHeight: 24px, fontWeight: medium

### Button Label Large
- **Small Screen**: fontSize: 18px, lineHeight: 24px, fontWeight: medium
- **Large Screen**: fontSize: 18px, lineHeight: 24px, fontWeight: medium

### Amount Display Large
- **Small Screen**: fontSize: 40px, lineHeight: 50px, fontWeight: bold
- **Large Screen**: fontSize: 60px, lineHeight: 75px, fontWeight: medium

## Usage Examples

### CSS
```css
/* Small screen page heading */
font-size: var(--typography-s-page-heading-font-size);
line-height: var(--typography-s-page-heading-line-height);
font-weight: var(--typography-s-page-heading-font-weight);

/* Large screen page heading */
font-size: var(--typography-l-page-heading-font-size);
line-height: var(--typography-l-page-heading-line-height);
font-weight: var(--typography-l-page-heading-font-weight);
```

### JavaScript/TypeScript
```typescript
import { typography } from '@metamask/design-tokens';

const pageHeadingStyle = {
  fontSize: typography.sPageHeading.fontSize,
  lineHeight: typography.sPageHeading.lineHeight,
  fontWeight: typography.sPageHeading.fontWeight,
  letterSpacing: typography.sPageHeading.letterSpacing,
};
```

### Tailwind CSS
```html
<h1 class="text-s-page-heading leading-s-page-heading tracking-s-page-heading font-bold">
  Page Heading
</h1>
```

### TWRNC (React Native)
```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

const MyComponent = () => {
  const tw = useTailwind();
  
  return (
    <Text style={tw('text-page-heading')}>
      Page Heading
    </Text>
  );
};
```

## Notes
- All tokens follow the existing naming conventions and patterns
- Values are derived from the design tokens specified in `tokens.json`
- Both small and large screen variants are provided for responsive design
- All letter spacing values are set to 0 for these tokens