# Migration Guide

This guide provides detailed instructions for migrating your project from one version of the `@metamask/design-tokens` to another.

- [From version 10.x to 11.0.0](#from-version-10x-to-1100)
- [From version 9.x to 10.0.0](#from-version-9x-to-1000)
- [From version 8.x to 9.0.0](#from-version-8x-to-900)
- [Tailwind CSS v3 to v4](#tailwind-css-v3-to-v4)
- [From version 8.2.2 to 8.3.0](#from-version-822-to-830)
- [From version 7.0.0 to 8.0.0](#from-version-700-to-800)
- [From version 6.0.0 to 7.0.0](#from-version-600-to-700)
- [From version 5.1.0 to 6.0.0](#from-version-510-to-600)
- [From version 4.1.0 to 5.0.0](#from-version-410-to-500)
- [From version 3.0.0 to 4.0.0](#from-version-300-to-400)
- [From version 2.1.1 to 3.0.0](#from-version-211-to-300)

## From version 10.x to 11.0.0

The default typeface changes from Geist to Inter. Consumers must bundle the Inter font files; the token values alone do not ship font binaries.

### What changed

- `--font-family-default` is now `'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif` (was `'Geist', ...`)
- `fontFamilies.default` is now `'Inter'` (was `'Geist'`)
- The Figma token `global.fontFamilies.default` is now `Inter`

`--font-family-accent` (MM Sans) and `--font-family-hero` (MM Poly) are unchanged. No font size, line height, weight, or letter spacing token changed, so the typography scale keeps its existing values. Semantic bold remains `600`, which maps to the Inter SemiBold cut.

### Migration

Replace the Geist font files with the six Inter cuts and update your `@font-face` declarations. Inter is available under the [SIL Open Font License](https://github.com/rsms/inter).

```css
/* Before */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/Geist/Geist-Regular.woff2') format('woff2');
}
```

```css
/* After */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/Inter/Inter-Regular.woff2') format('woff2');
}
```

Six cuts are required to cover the scale, matching the Geist set they replace:

| Weight | Style  | File                   |
| ------ | ------ | ---------------------- |
| 400    | normal | `Inter-Regular`        |
| 400    | italic | `Inter-RegularItalic`  |
| 500    | normal | `Inter-Medium`         |
| 500    | italic | `Inter-MediumItalic`   |
| 600    | normal | `Inter-SemiBold`       |
| 600    | italic | `Inter-SemiBoldItalic` |

Use the `18pt` optical size from the Inter static family. If you generate these files yourself, note that the upstream release names them `Inter_18pt-Regular.ttf` with the PostScript name `Inter18pt-Regular`; React Native resolves fonts by PostScript name, so normalize them to `Inter-Regular` and so on. See the React Native migration guide for details.

### Impact

- **Web consumers:** Swap the font binaries and `@font-face` rules. Because the family is selected by CSS variable, no component or utility class changes are needed.
- **React Native consumers:** Font family names are resolved per weight and style. See [`@metamask/design-system-react-native`](../design-system-react-native/MIGRATION.md#default-typeface-geist-to-inter).
- **Anyone hardcoding `'Geist'`:** Search for the literal string outside token references and update it.
- Expect minor reflow. Inter's metrics are close to Geist's but not identical, so text may wrap differently at tight widths.

## From version 9.x to 10.0.0

Provisional pure-black scaffolding is removed. Canonical `darkTheme` already uses OLED values (since 9.0.0); elevated tokens remain the way to style stepped surfaces.

### What changed

**Removed from `@metamask/design-tokens`:**

- `pureBlackDarkTheme`
- `resolveDarkTheme()`
- `pure-black-dark-theme-colors.css` / `[data-pure-black]` CSS override path

**Removed from design-system packages:**

- `@metamask/design-system-react` `PureBlackProvider` / `usePureBlack`
- `@metamask/design-system-shared` `PureBlackContext` and related types
- `@metamask/design-system-twrnc-preset` `ThemeProvider` `isPureBlack` prop, `usePureBlack`, and `pureBlackThemeColors`
- `getThemeColors(theme, isPureBlack)` / `generateTailwindConfig(theme, isPureBlack)` second arguments

### Migration

```tsx
// Before
import {
  darkTheme,
  pureBlackDarkTheme,
  resolveDarkTheme,
} from '@metamask/design-tokens';
import { PureBlackProvider, usePureBlack } from '@metamask/design-system-react';

<html data-pure-black={isPureBlack || undefined}>
  <PureBlackProvider isPureBlack={isPureBlack}>{children}</PureBlackProvider>
</html>;

const theme = resolveDarkTheme(isPureBlack);
// or
const theme = isPureBlack ? pureBlackDarkTheme : darkTheme;
```

```tsx
// After
import { darkTheme } from '@metamask/design-tokens';

{
  children;
}

const theme = darkTheme;
```

```tsx
// Before — React Native
import {
  ThemeProvider,
  usePureBlack,
  getThemeColors,
} from '@metamask/design-system-twrnc-preset';

<ThemeProvider theme={Theme.Dark} isPureBlack={isPureBlack}>
  {children}
</ThemeProvider>;

getThemeColors(theme, isPureBlack);
```

```tsx
// After — React Native
import {
  ThemeProvider,
  getThemeColors,
} from '@metamask/design-system-twrnc-preset';

<ThemeProvider theme={Theme.Dark}>{children}</ThemeProvider>;

getThemeColors(theme);
```

Use `background.elevated1`, `background.elevated2`, and `border.alternative` (or `bg-elevated1` / `bg-elevated2` / `border-alternative`) instead of branching on pure-black mode. See [From version 8.x to 9.0.0](#from-version-8x-to-900) for elevated-token examples.

### Impact

- **MetaMask extension / mobile:** After client provider wiring is removed, bump to these package versions with no additional visual change expected for dark mode
- **Other consumers still importing removed APIs:** Update imports as above; TypeScript will fail until call sites are cleaned up

## From version 8.x to 9.0.0

OLED pure-black dark theme values are now canonical on `darkTheme`, and new elevated surface tokens replace the temporary pure-black provider pattern.

### What changed

**Canonical dark theme values (breaking):**

- `darkTheme` now uses OLED pure-black surface values that were previously only available via `pureBlackDarkTheme` or `data-pure-black` CSS overrides
- `background.default` changes from `#222325` to `#000000`
- Section, alternative, muted, border, and hover/pressed values shift to the OLED palette

**Pure-black helpers (compatible signatures, no visual change on OLED path):**

- `resolveDarkTheme(isPureBlack)` always returns `darkTheme`; the `isPureBlack` argument is ignored
- `@metamask/design-system-twrnc-preset` `getThemeColors(theme, isPureBlack)` ignores `isPureBlack`
- `pureBlackThemeColors` is deprecated and aliases `darkTheme` colors
- Callers already on pure-black / OLED mode receive the same token values; remove redundant provider wiring

**New elevated surface tokens (additive, semantic unification):**

- `background.elevated1` — one level above base; use for surfaces over scrims (modals, bottom sheets). In light, matches `background.default`; in dark on OLED, matches `background.alternative`
- `background.elevated2` — two levels above base; use for floating UI (toasts, menus, popovers). In light, matches `background.default`; in dark on OLED, matches `background.section`
- `border.alternative` — hairline border for elevated surfaces in dark mode; on OLED, matches `border.muted`
- These tokens replace theme-conditional swaps (e.g. `isPureBlack ? alternative : default`) with a single semantic class per surface type

### Migration

**Remove pure-black provider wiring:**

```tsx
// Before (8.x) — web
<html data-pure-black={isPureBlack || undefined}>
  <PureBlackProvider isPureBlack={isPureBlack}>{children}</PureBlackProvider>
</html>;

// After (9.0.0) — web
// Remove data-pure-black and PureBlackProvider; darkTheme is already OLED pure-black
{
  children;
}
```

```tsx
// Before (8.x) — React Native
<ThemeProvider theme={Theme.Dark} isPureBlack={isPureBlack}>
  {children}
</ThemeProvider>

// After (9.0.0) — React Native
<ThemeProvider theme={Theme.Dark}>
  {children}
</ThemeProvider>
```

**Replace isPureBlack branching with elevated tokens:**

```tsx
// Before (8.x)
import {
  BoxBackgroundColor,
  usePureBlack,
} from '@metamask/design-system-react';

const isPureBlack = usePureBlack();

<Box
  backgroundColor={
    isPureBlack
      ? BoxBackgroundColor.BackgroundAlternative
      : BoxBackgroundColor.BackgroundDefault
  }
/>;

// After (9.0.0)
import {
  BoxBackgroundColor,
  BoxBorderColor,
} from '@metamask/design-system-react';

<Box
  backgroundColor={BoxBackgroundColor.BackgroundElevated1}
  borderColor={BoxBorderColor.BorderAlternative}
  borderWidth={1}
/>;
```

```tsx
// Before (8.x) — React Native custom surface
const isPureBlack = usePureBlack();
tw.style(isPureBlack ? 'bg-alternative' : 'bg-default');

// After (9.0.0)
tw.style('bg-elevated1');
```

**Update resolveDarkTheme / getThemeColors call sites:**

```tsx
// Before (8.x)
import { resolveDarkTheme } from '@metamask/design-tokens';

const theme = resolveDarkTheme(isPureBlack);

// After (9.0.0)
import { darkTheme } from '@metamask/design-tokens';

const theme = darkTheme;
// resolveDarkTheme(isPureBlack) still compiles but isPureBlack is ignored
```

### Impact

- **Apps already on pure-black / OLED mode (MetaMask extension and mobile):** No visual change from design-tokens 9.0.0 or design-system component updates; remove redundant `PureBlackProvider`, `data-pure-black`, and `isPureBlack` wiring and adopt elevated tokens in custom UI
- **Apps on legacy default dark theme without pure-black:** Background and elevation colors will change on upgrade; review dark-mode UI and visual regression snapshots
- **Custom styling tied to old grey900-based hierarchy:** Update to use `background.elevated1`, `background.elevated2`, and `border.alternative` for stepped surfaces instead of branching on pure-black mode

## Tailwind CSS v3 to v4

This section covers migrating from Tailwind CSS v3 (using `@metamask/design-system-tailwind-preset`) to Tailwind CSS v4 (using the new `theme.css` export from this package).

### Overview

In Tailwind v3, design tokens were consumed through a combination of:

- `@metamask/design-tokens/styles.css` (CSS custom properties)
- `@metamask/design-system-tailwind-preset` (Tailwind v3 theme config)

In Tailwind v4, a single CSS file replaces both:

- `@metamask/design-tokens/tailwind/theme.css`

This file provides all design token CSS variables, `@theme` color/shadow definitions, and `@utility` directives for typography, font weights, font families, and color shortcuts.

### Step 1: Install Tailwind CSS v4

```bash
yarn add -D tailwindcss@^4.0.0 @tailwindcss/postcss@^4.0.0
# If using Vite:
yarn add -D @tailwindcss/vite@^4.0.0
```

### Step 2: Replace the Tailwind v3 configuration

Remove `tailwind.config.js` (or `.ts`) and replace with a CSS entry point.

**Before (Tailwind v3):**

```js
// tailwind.config.js
const preset = require('@metamask/design-system-tailwind-preset');

module.exports = {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}'],
};
```

**After (Tailwind v4):**

Create a CSS entry point (e.g. `tailwind.css`):

```css
@import 'tailwindcss';
@import '@metamask/design-tokens/tailwind/theme.css';

@source "./src/**/*.{ts,tsx}";
```

### Step 3: Update build tooling

**PostCSS (`postcss.config.js`):**

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

**Vite (`vite.config.ts`):**

```ts
import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()],
};
```

### Step 4: Update CSS imports

Replace the old CSS imports with the new entry point.

**Before:**

```ts
import '@metamask/design-tokens/styles.css';
import './tailwind.css'; // or wherever your Tailwind directives were
```

**After:**

```ts
import './tailwind.css'; // your new CSS entry point that imports theme.css
```

### Step 5: Remove the v3 preset dependency

```bash
yarn remove @metamask/design-system-tailwind-preset
```

The preset is no longer needed for Tailwind v4 consumers. It will eventually be deprecated.

### What `theme.css` provides

| Token category    | How it works in v4                                                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Colors            | `@theme` variables (e.g. `--color-primary-default`) auto-generate `bg-*`, `text-*`, `border-*` utilities                                       |
| Color shortcuts   | `@utility` directives (e.g. `bg-default`, `text-default`, `border-default`)                                                                    |
| Typography        | `@utility` directives for `text-*`, `leading-*`, `tracking-*`                                                                                  |
| Font weights      | `@utility` directives for `font-regular`, `font-medium`, `font-bold`                                                                           |
| Font families     | `@utility` directives for `font-default`, `font-accent`, `font-hero`                                                                           |
| Box shadows       | `@theme` variables (`--shadow-xs` / `sm` / `md` / `lg`) auto-generate `shadow-xs`–`shadow-lg` utilities                                        |
| Shadow colors     | `--color-shadow-default` / `primary` / `error` in `@theme` only (no `shadow-default` etc. utilities; v3’s color-stack pattern had no adoption) |
| Light/dark themes | `[data-theme='light']`/`.light` and `[data-theme='dark']`/`.dark` selector blocks                                                              |

### Shadow utility changes

Default neutral shadow sizes remain available as Tailwind utilities:

- `shadow-xs`
- `shadow-sm`
- `shadow-md`
- `shadow-lg`

However, the old v3 color utility classes are no longer generated:

- `shadow-default`
- `shadow-primary`
- `shadow-error`

If you need a colored shadow in v4, compose the size token with the shadow color token explicitly.

**Before (v3):**

```html
<div class="shadow-sm shadow-primary"></div>
```

**After (v4, Tailwind markup):**

```html
<div class="shadow-[var(--shadow-size-sm)_var(--color-shadow-primary)]"></div>
```

**After (v4, CSS):**

```css
box-shadow: var(--shadow-size-sm) var(--color-shadow-primary);
```

### Class name changes

Most utility class names remain the same between v3 and v4. Notable differences:

| v3 class    | v4 class       | Notes                                                                        |
| ----------- | -------------- | ---------------------------------------------------------------------------- |
| `font-sans` | `font-default` | v4 uses `font-default` instead of overriding Tailwind's built-in `font-sans` |

### React Native

React Native packages (`@metamask/design-system-react-native`, `@metamask/design-system-twrnc-preset`) remain on Tailwind v3 via twrnc. This migration only applies to web consumers.

## From version 7.0.0 to 8.0.0

### Background Color Token Changes (Breaking Changes)

In version 8.0.0, we've made significant changes to background color tokens that separate muted backgrounds into transparent and opaque variants. This is a breaking change that affects components requiring opaque backgrounds.

#### Key Changes

**`background/muted` is now transparent:**

- **Before**: `grey050 | grey800` (opaque colors)
- **After**: `#3C4D9D 10% | E0E5FF 15%` (transparent colors)

**New opaque tokens added:**

- `background/section`: `grey050 | grey800` (replaces the old opaque `background/muted`)
- `background/subsection`: `grey000 | grey700`

**Updated transparent hover/pressed states:**

- `background/muted-hover`: `#3C4D9D 15% | E0E5FF 20%`
- `background/muted-pressed`: `#3C4D9D 20% | E0E5FF 25%`

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

#### Font Family Change (Breaking Changes)

Version 8.0.0 changes the default font from CentraNo1 to Geist. This is a breaking change that affects all typography tokens and requires updating font imports and references.

#### Key Changes

**Default font family has changed:**

- **Before**: `'CentraNo1', 'Helvetica Neue', Helvetica, Arial, sans-serif`
- **After**: `'Geist', 'Helvetica Neue', Helvetica, Arial, sans-serif`

#### Migration Steps

1. **Update Font Imports**:

   - Remove any imports of CentraNo1 font files
   - Add imports for Geist font files
   - Update any font-face declarations in your CSS

2. **Update Font References**:

   ```css
   /* Update font family references */
   --font-family-default: 'Geist', 'Helvetica Neue', Helvetica, Arial,
     sans-serif;
   ```

3. **Test Typography**:

   - Review all text components to ensure they render correctly with Geist
   - Check for any layout shifts or spacing issues
   - Verify font weights and styles are applied correctly

4. **Update Custom Font Stacks**:

   - If you have custom font stacks that include CentraNo1, update them to use Geist
   - Ensure fallback fonts are appropriate for your use case

5. **React Native Specific**:
   - Update any React Native font configurations
   - Test font rendering on both iOS and Android

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

## From version 8.2.2 to 8.3.0

### Typography: bold weight is now 600 and uses semibold assets

- The `fontWeights.bold` token and the `--font-weight-bold` CSS variable now return `600`; the Storybook font loaders switched from the former `Geist-Bold` binaries to the new `Geist-SemiBold` and `Geist-SemiBoldItalic` assets.
- Update any static `font-weight: 700` references or CSS `@font-face` definitions to 600 and point at the semibold files. React and React Native packages now expect `Geist-SemiBold` for the semantic bold slot, so bundlers that previously inlined `Geist-Bold` should replace those files.
- `@metamask/design-system-twrnc-preset` now maps `default-bold` and `default-bold-italic` to the semibold PostScript names, so confirm any custom Tailwind font classnames align with `Geist-SemiBold` if you override them.

### Migration steps

- Replace `@font-face` declarations, font imports, and any asset references from `Geist-Bold`/`Geist-BoldItalic` to `Geist-SemiBold`/`Geist-SemiBoldItalic`, and set `font-weight: 600`.
- Update code or styles that assumed `fontWeights.bold === '700'` to read from `fontWeights.bold` directly so they automatically pick up the new value.
- If you bundle fonts manually, include the semibold OTF/WOFF2 files from `apps/storybook-react-native/fonts/Geist` and `apps/storybook-react/fonts/Geist` and verify the new names load in development and production builds.
- Run your Storybook or native font loader checks to confirm the Metro bundler now resolves `Geist-SemiBold`/`Geist-SemiBoldItalic` per the updated `FontLoader` and tailwind preset mappings.

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
--color-error-shadow modified to --color-shadow-error
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
colors.error.shadow modified to colors.shadow.error
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
