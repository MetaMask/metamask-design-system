# Migration Guide

This guide provides detailed instructions for migrating your project from one version of the `@metamask/design-tokens` to another.

- [From version 5.1.0 to 6.0.0](#from-version-510-to-600)
- [From version 4.1.0 to 5.0.0](#from-version-410-to-500)
- [From version 3.0.0 to 4.0.0](#from-version-300-to-400)
- [From version 2.1.1 to 3.0.0](#from-version-211-to-300)

## From version 5.1.0 to 6.0.0

### Font Family Changes (Breaking Changes)

In version 6.0.0, we've completely replaced Euclid Circular B with Centra No1 as our primary font family. This is a breaking change that affects both web and React Native applications.

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
--font-family-sans: 'Centra No1', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

1. Update font imports to use Centra No1 instead of Euclid Circular B
2. Replace all instances of `font-family: 'Euclid Circular B'` with `font-family: 'Centra No1'`
3. Update font file references:
   - Use 'CentraNo1-Book' for weight 400 (previously 'EuclidCircularB-Regular')
   - Use 'CentraNo1-Medium' for weight 500
   - Use 'CentraNo1-Bold' for weight 700
4. For React Native applications:
   - Update font file imports to use new Centra No1 .otf files
   - Update font family references in your styles
5. For web applications:
   - Update font file imports to use new Centra No1 .woff2 files
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
