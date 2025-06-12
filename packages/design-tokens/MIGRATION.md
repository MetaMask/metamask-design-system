# Migration Guide

This guide provides detailed instructions for migrating your project from one version of the `@metamask/design-tokens` to another.

- [From version 7.0.0 to 8.0.0](#from-version-700-to-800)
- [From version 6.0.0 to 7.0.0](#from-version-600-to-700)
- [From version 5.1.0 to 6.0.0](#from-version-510-to-600)
- [From version 4.1.0 to 5.0.0](#from-version-410-to-500)
- [From version 3.0.0 to 4.0.0](#from-version-300-to-400)
- [From version 2.1.1 to 3.0.0](#from-version-211-to-300)

## From version 7.0.0 to 8.0.0

### Background Color Token Changes (Breaking Changes)

In version 8.0.0, we've made significant changes to background color tokens that separate muted backgrounds into transparent and opaque variants. This is a breaking change that affects components requiring opaque backgrounds.

#### Key Changes

**`background.muted` is now transparent:**

- **Before**: `grey050 | grey800` (opaque colors)
- **After**: `#3C4D9D 10% | E0E5FF 15%` (transparent colors)

**New opaque tokens added:**

- `background.section`: `grey050 | grey800` (replaces the old opaque `background.muted`)
- `background.subsection`: `grey000 | grey700`

**Updated transparent hover/pressed states:**

- `background.muted-hover`: `#3C4D9D 15% | E0E5FF 20%`
- `background.muted-pressed`: `#3C4D9D 20% | E0E5FF 25%`

#### Breaking Change Impact

This change affects components that require opaque backgrounds, including:

- **BadgeNetwork** and other badge components
- **Avatar fallbacks**
- **Non-action type elements** (read-only sections)
- Any component where transparency would break the visual design

#### Added Tokens

##### CSS Variables

```css
/* New opaque background hierarchy tokens */
--color-background-section: var(--brand-colors-grey-grey050); /* Light theme */
--color-background-section: var(--brand-colors-grey-grey800); /* Dark theme */
--color-background-subsection: var(
  --brand-colors-grey-grey000
); /* Light theme */
--color-background-subsection: var(
  --brand-colors-grey-grey700
); /* Dark theme */
```

##### JS Tokens

```javascript
colors.background.section; // For opaque section backgrounds (replaces old muted)
colors.background.subsection; // For opaque subsection backgrounds
```

### Typography Token Removal (Breaking Changes)

Version 8.0.0 removes deprecated typography tokens that were scheduled for deletion.

#### Removed Typography Tokens

**HeadingSMRegular tokens have been completely removed:**

##### CSS Variables

```css
/* REMOVED - No longer available */
--typography-s-heading-sm-regular-font-family
--typography-l-heading-sm-regular-font-family
/* And all other HeadingSMRegular properties */
```

##### JS Tokens

```javascript
// REMOVED - No longer available
typography.sHeadingSMRegular; // All properties
typography.lHeadingSMRegular; // All properties
```

#### Replacement Strategy

**Choose an appropriate typography token based on your design needs:**

The HeadingSMRegular tokens have been removed as they were deprecated. You should evaluate your specific use case and select the most appropriate typography token from the available options such as:

- Body variants (BodyXS, BodySM, BodyMD, BodyLG)
- Heading variants (HeadingSM, HeadingMD, HeadingLG)
- Display variants (DisplayMD)

Consult with your design team to determine the most suitable replacement for each specific use case.

#### Font Family Token Removal

All individual typography font family tokens have been completely removed. Use the base font family tokens instead:

```css
/* Use these base tokens instead */
--font-family-default: 'CentraNo1', 'Helvetica Neue', Helvetica, Arial,
  sans-serif;
--font-family-accent: 'MMSans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-family-hero: 'MMPoly', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Migration Steps

1. **Critical: Replace `background.muted` for opaque use cases**:

   - **Badges**: Replace `background.muted` with `background.section` for BadgeNetwork and other badge components
   - **Avatar fallbacks**: Replace `background.muted` with `background.section` for avatar fallback backgrounds
   - **Read-only sections**: Replace `background.muted` with `background.section` for any non-interactive background fills
   - **Any opaque background**: If your component requires an opaque background, use `background.section` instead of `background.muted`

2. **Keep `background.muted` for transparent use cases**:

   - **Button backgrounds**: The new transparent `background.muted` is intended for button and interactive element backgrounds
   - **Overlay backgrounds**: Use for backgrounds that should be semi-transparent

3. **Update CSS Variables**:

   ```css
   /* Replace opaque muted usage */
   background-color: var(--color-background-muted); /* OLD - now transparent */
   background-color: var(
     --color-background-section
   ); /* NEW - for opaque backgrounds */
   ```

4. **Update JS Token Usage**:

   ```javascript
   // Replace opaque muted usage
   backgroundColor: colors.background.muted, // OLD - now transparent
   backgroundColor: colors.background.section, // NEW - for opaque backgrounds
   ```

5. **Test Visual Regression**: Carefully test all components that previously used `background.muted` to ensure they still appear correctly with the new transparent values

6. **Replace HeadingSMRegular tokens**:

   - Identify all usage of `sHeadingSMRegular` and `lHeadingSMRegular` tokens in your codebase
   - Work with your design team to determine the appropriate replacement typography token for each use case
   - Update your CSS variables and JS token references accordingly
   - Test the visual changes to ensure the new typography meets your design requirements

7. **Update Import Statements**: If you're importing directly from specific paths, update to use the main package exports
8. **Remove Deprecated Font Family References**: Ensure all typography uses the base font family tokens (if not already updated from 7.0.0)
9. **Test React Native Integration**: Verify TWRNC compatibility if using React Native

## From version 6.0.0 to 7.0.0

### Typography Changes (Breaking Changes)

In version 7.0.0, we've simplified the typography system by removing individual font family tokens for each typography variant. This is a breaking change that affects both CSS and JS tokens.

#### Removed Tokens

##### CSS Variables

```css
/* Typography font family tokens have been removed in favor of --font-family-default*/
--font-family-sans
--typography-s-display-md-font-family
--typography-s-heading-lg-font-family
--typography-s-heading-md-font-family
--typography-s-heading-sm-font-family
--typography-s-heading-sm-regular-font-family
--typography-s-body-lg-medium-font-family
--typography-s-body-md-font-family
--typography-s-body-md-medium-font-family
--typography-s-body-md-bold-font-family
--typography-s-body-sm-font-family
--typography-s-body-sm-medium-font-family
--typography-s-body-sm-bold-font-family
--typography-s-body-xs-font-family
--typography-s-body-xs-medium-font-family
--typography-l-display-md-font-family
--typography-l-heading-lg-font-family
--typography-l-heading-md-font-family
--typography-l-heading-sm-font-family
--typography-l-heading-sm-regular-font-family
--typography-l-body-lg-medium-font-family
--typography-l-body-md-font-family
--typography-l-body-md-medium-font-family
--typography-l-body-md-bold-font-family
--typography-l-body-sm-font-family
--typography-l-body-sm-medium-font-family
--typography-l-body-sm-bold-font-family
--typography-l-body-xs-font-family
--typography-l-body-xs-medium-font-family
```

##### JS Tokens

```javascript
typography.sDisplayMD.fontFamily;
typography.sHeadingLG.fontFamily;
typography.sHeadingMD.fontFamily;
typography.sHeadingSM.fontFamily;
typography.sHeadingSMRegular.fontFamily;
typography.sBodyLGMedium.fontFamily;
typography.sBodyMD.fontFamily;
typography.sBodyMDMedium.fontFamily;
typography.sBodyMDBold.fontFamily;
typography.sBodySM.fontFamily;
typography.sBodySMMedium.fontFamily;
typography.sBodySMBold.fontFamily;
typography.sBodyXS.fontFamily;
typography.sBodyXSMedium.fontFamily;
typography.lDisplayMD.fontFamily;
typography.lHeadingLG.fontFamily;
typography.lHeadingMD.fontFamily;
typography.lHeadingSM.fontFamily;
typography.lHeadingSMRegular.fontFamily;
typography.lBodyLGMedium.fontFamily;
typography.lBodyMD.fontFamily;
typography.lBodyMDMedium.fontFamily;
typography.lBodyMDBold.fontFamily;
typography.lBodySM.fontFamily;
typography.lBodySMMedium.fontFamily;
typography.lBodySMBold.fontFamily;
typography.lBodyXS.fontFamily;
typography.lBodyXSMedium.fontFamily;
```

#### Added Tokens

##### CSS Variables

```css
/* Font family tokens */
--font-family-default: 'CentraNo1', 'Helvetica Neue', Helvetica, Arial,
  sans-serif;
--font-family-accent: 'MMSans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-family-hero: 'MMPoly', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

##### JS Tokens

```javascript
const FontFamilies = {
  default: 'CentraNo1',
  accent: 'MMSans',
  hero: 'MMPoly',
};
```

### Migration Steps

1. Remove all references to individual typography font family tokens
2. Use the base font family tokens instead:
   - For web: Update `--font-family-sans` to `--font-family-default` for all typography variants
   - For React Native: Use the appropriate font family from the base font tokens
3. Update any CSS or style definitions that were using the removed tokens
4. Test all typography variants to ensure they're using the correct font family
5. For special typography needs:
   - Use `--font-family-accent` for accent text (CSS) or `FontFamilies.accent` (JS)
   - Use `--font-family-hero` for hero text (CSS) or `FontFamilies.hero` (JS)

## From version 5.1.0 to 6.0.0

### Font Family Changes (Breaking Changes)

In version 6.0.0, we've completely replaced Euclid Circular B with CentraNo1 as our primary font family. This is a breaking change that affects both web and React Native applications.

#### CSS Changes

##### Removed

```css
--font-family-euclid-circular-b
--font-family-roboto
```

##### Changed

```css
/* Before */
--font-family-sans: 'Euclid Circular B', 'Roboto', sans-serif;

/* After */
--font-family-sans: 'CentraNo1', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

#### React Native Font Changes

##### Before

```javascript
'EuclidCircularB-Regular';
'EuclidCircularB-Bold';
'EuclidCircularB-RegularItalic';
'EuclidCircularB-BoldItalic';
'EuclidCircularB-Medium';
'EuclidCircularB-MediumItalic';
```

##### After

```javascript
'CentraNo1-Book';
'CentraNo1-BookItalic';
'CentraNo1-Medium';
'CentraNo1-MediumItalic';
'CentraNo1-Bold';
'CentraNo1-BoldItalic';
```

#### Font Weight Mapping Changes

The font weight tokens remain the same (400, 500, 700), but the font file names have changed:

- Weight 400 uses 'CentraNo1-Book' (previously 'EuclidCircularB-Regular')
- Weight 500 uses 'CentraNo1-Medium' (previously 'EuclidCircularB-Medium')
- Weight 700 uses 'CentraNo1-Bold' (previously 'EuclidCircularB-Bold')

### Migration Steps

1. Update font imports to use CentraNo1 instead of Euclid Circular B
2. Replace all instances of `font-family: 'Euclid Circular B'` with `font-family: 'CentraNo1'`
3. Update font file references:
   - Use 'CentraNo1-Book' for weight 400 (previously 'EuclidCircularB-Regular')
   - Use 'CentraNo1-Medium' for weight 500
   - Use 'CentraNo1-Bold' for weight 700
4. For React Native applications:
   - Update font file imports to use new CentraNo1 .otf files
   - Update font family references in your styles
5. For web applications:
   - Update font file imports to use new CentraNo1 .woff2 files
   - Update @font-face declarations
6. Remove any references to Roboto font family as it's no longer included in the fallback chain

## From version 4.1.0 to 5.0.0

### Changes to Type Imports (Breaking Changes)

In version 5.0.0, we've simplified the type import system. Instead of deep importing types from specific paths, all types are now exported from the package root. You'll need to update your type imports as follows:

#### Before (No Longer Works)

```typescript
import { ThemeColors } from '@metamask/design-tokens/dist/js/themes/types';
import { BrandColor } from '@metamask/design-tokens/dist/types/js/brandColor/brandColor.types';
```

#### After

```typescript
import type { ThemeColors, BrandColor } from '@metamask/design-tokens';
```

This change simplifies imports and provides a more maintainable API for TypeScript users.

## From version 3.0.0 to 4.0.0

### Changes to Color Tokens (Breaking Changes)

In this version, significant updates have been made to color tokens, including modifications and removals. To upgrade to version 4, ensure that the following tokens have been updated in your codebase:

### Removed

#### CSS

```
### Brand colors
--brand-colors-grey-grey750
--brand-colors-violet-violet300
--brand-colors-white-white010

### Theme colors
--color-primary-disabled
--color-secondary-default
--color-secondary-alternative
--color-secondary-muted
--color-secondary-inverse
--color-secondary-disabled
--color-error-disabled
--color-warning-alternative
--color-warning-disabled
--color-success-alternative
--color-success-disabled
--color-info-alternative
--color-info-disabled
--color-network-goerli-default
--color-network-goerli-inverse
--color-network-localhost-default
--color-network-localhost-inverse
--color-network-sepolia-default
--color-network-sepolia-inverse

### Component colors
--component-button-primary-shadow
--component-button-danger-shadow
```

#### JS

```
### Brand colors
brandColor.grey750
brandColor.violet300
brandColor.white010

### Theme colors
colors.primary.disabled
colors.secondary.default
colors.secondary.alternative
colors.secondary.muted
colors.secondary.inverse
colors.secondary.disabled
colors.error.disabled
colors.warning.alternative
colors.warning.disabled
colors.success.alternative
colors.success.disabled
colors.info.alternative
colors.info.disabled
colors.networks.goerli.default
colors.networks.goerli.inverse
colors.networks.localhost.default
colors.networks.localhost.inverse
colors.networks.sepolia.default
colors.networks.sepolia.inverse

```

### Changed

#### CSS

```
### Brand colors
--brand-colors-grey-grey030 modified to --brand-colors-grey-grey025
--brand-colors-grey-grey040 modified to --brand-colors-grey-grey050
--brand-colors-blue-blue000 modified to --brand-colors-blue-blue025
--brand-colors-green-green000 modified to --brand-colors-green-green025
--brand-colors-red-red000 modified to --brand-colors-red-red025
--brand-colors-yellow-yellow000 modified to --brand-colors-yellow-yellow025
--brand-colors-orange-orange000 modified to --brand-colors-orange-orange025
--brand-colors-white-white000 modified to --brand-colors-white
--brand-colors-black-black000 modified to --brand-colors-black

## Theme colors
--color-primary-shadow modified to --color-shadow-primary
--color-error-shadow modified to --color-shadow-primary
```

#### JS

```
### Brand colors
brandColor.grey030 modified to brandColor.grey025
brandColor.grey040 modified to brandColor.grey050
brandColor.blue000 modified to brandColor.blue025
brandColor.green000 modified to brandColor.green025
brandColor.red000 modified to brandColor.red025
brandColor.yellow000 modified to brandColor.yellow025
brandColor.orange000 modified to brandColor.orange025
brandColor.white000 modified to brandColor.white
brandColor.black000 modified to brandColor.black

### Theme colors
colors.primary.shadow modified to colors.shadow.primary
colors.error.shadow modified to colors.shadow.primary
```

## From version 2.1.1 to 3.0.0

### Updated CSS Import Paths (Breaking Changes)

In this version, we've updated the paths for importing CSS files to streamline the process and ensure consistency across projects. This change is considered a breaking change and requires updates to your project's import statements.

#### Before the Update

Previously, the CSS import path was structured as follows:

```css
import '../../node_modules/@metamask/design-tokens/src/css/design-token.css';
```

This path directed to the `src` directory, which might not always contain the most optimized version of the CSS.

#### After the Update

To improve efficiency and maintainability, the import path has been updated to:

```css
import '../../node_modules/@metamask/design-tokens/dist/styles.css';
```

This new path points to the `dist` directory, ensuring that you're importing the most optimized and production-ready version of the stylesheet.
