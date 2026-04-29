# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-react` to another, and for migrating components from MetaMask Extension `component-library` to the design system.

## Table of Contents

- [General Extension Migration Guidance](#general-extension-migration-guidance)
- [From Extension Component Library](#from-extension-component-library)
  - [Button Component](#button-component)
  - [ButtonBase Component](#buttonbase-component)
  - [ButtonIcon Component](#buttonicon-component)
  - [TextButton Component (from ButtonLink)](#textbutton-component-from-buttonlink)
  - [Box Component](#box-component)
  - [BannerAlert Component](#banneralert-component)
  - [BannerBase Component](#bannerbase-component)
  - [Text Component](#text-component)
  - [Icon Component](#icon-component)
  - [Checkbox Component](#checkbox-component)
  - [BadgeCount Component](#badgecount-component)
  - [BadgeIcon Component](#badgeicon-component)
  - [BadgeNetwork Component](#badgenetwork-component)
  - [BadgeStatus Component](#badgestatus-component)
  - [BadgeWrapper Component](#badgewrapper-component)
- [Version Updates](#version-updates)
  - [From version 0.17.0 to 0.18.0](#from-version-0170-to-0180)
  - [From version 0.16.0 to 0.17.0](#from-version-0160-to-0170)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
  - [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## General Extension Migration Guidance

This guidance applies to all extension `component-library` to `@metamask/design-system-react` migrations.

- Legacy extension components were built on top of Box patterns, so they often accepted broad style utility props.
- Design system components prefer explicit component APIs for design-system semantics (for example `variant`, `size`, `color`).
- For styling utilities and one-off layout/styling needs, use Tailwind `className` rather than relying on broad style-utility prop surfaces.

When migrating any extension component, apply this guidance first, then use the component-specific mappings below.

## From Extension Component Library

This section covers migrating components from MetaMask Extension's `ui/components/component-library` to `@metamask/design-system-react`.

### Button Component

The Button component has significant breaking changes when migrating from the extension component-library. The new design system `Button` replaces the old generic `Button` (for Primary and Secondary variants). The old `Link` variant should use `ButtonLink` or the `TextButton` component instead.

#### Breaking Changes

##### Import Path

| Extension Pattern                                         | Design System Migration                                         |
| --------------------------------------------------------- | --------------------------------------------------------------- |
| `import { Button } from '../../component-library'`        | `import { Button } from '@metamask/design-system-react'`        |
| `import { ButtonVariant } from '../../component-library'` | `import { ButtonVariant } from '@metamask/design-system-react'` |
| `import { ButtonSize } from '../../component-library'`    | `import { ButtonSize } from '@metamask/design-system-react'`    |

##### Variant Enum

The extension already uses `ButtonVariant` (singular) with lowercase values. The `Link` variant is removed from the design system `Button` — use `TextButton` instead.

| Extension Value                           | Design System Value                       | Notes              |
| ----------------------------------------- | ----------------------------------------- | ------------------ |
| `ButtonVariant.Primary` (`'primary'`)     | `ButtonVariant.Primary` (`'primary'`)     | unchanged          |
| `ButtonVariant.Secondary` (`'secondary'`) | `ButtonVariant.Secondary` (`'secondary'`) | unchanged          |
| `ButtonVariant.Link` (`'link'`)           | Use `TextButton` component                | separate component |
| —                                         | `ButtonVariant.Tertiary` (`'tertiary'`)   | new variant        |

##### Size Enum

| Extension Value                    | Design System Value      | Notes            |
| ---------------------------------- | ------------------------ | ---------------- |
| `ButtonSize.Sm` (`'sm'`)           | `ButtonSize.Sm` (`'sm'`) | unchanged        |
| `ButtonSize.Md` (`'md'`)           | `ButtonSize.Md` (`'md'`) | unchanged        |
| `ButtonSize.Lg` (`'lg'`)           | `ButtonSize.Lg` (`'lg'`) | unchanged        |
| `ButtonSize.Inherit` (`'inherit'`) | Removed                  | use default size |
| `ButtonSize.Auto` (`'auto'`)       | Removed                  | use default size |

##### Content Model

The extension Button uses `children` (same as design system) — no change needed.

##### State Props

| Extension Prop | Design System Prop | Notes   |
| -------------- | ------------------ | ------- |
| `disabled`     | `isDisabled`       | renamed |
| `loading`      | `isLoading`        | renamed |
| `block`        | `isFullWidth`      | renamed |
| `danger`       | `isDanger`         | renamed |

##### Removed Props

| Extension Prop     | Design System Migration                         |
| ------------------ | ----------------------------------------------- |
| `as` (polymorphic) | Removed — Button is always a `<button>` element |
| `href`             | Removed — use `<a>` wrapper or `ButtonLink`     |
| `externalLink`     | Removed — use `<a target="_blank">` wrapper     |

#### Migration Examples

##### Before (Extension)

```tsx
import { Button, ButtonVariant, ButtonSize } from '../../component-library';

<Button
  variant={ButtonVariant.Primary}
  size={ButtonSize.Lg}
  block
  onClick={handleSubmit}
  disabled={!isValid}
  loading={isSubmitting}
>
  Submit
</Button>;
```

##### After (Design System)

```tsx
import {
  Button,
  ButtonVariant,
  ButtonSize,
} from '@metamask/design-system-react';

<Button
  variant={ButtonVariant.Primary}
  size={ButtonSize.Lg}
  isFullWidth
  onClick={handleSubmit}
  isDisabled={!isValid}
  isLoading={isSubmitting}
>
  Submit
</Button>;
```

#### API Differences

The design system Button adds these props:

- `isDanger` — destructive action styling (replaces `danger`)
- `isInverse` — inverted colors for colored backgrounds
- `startIconName` / `endIconName` — icon names for leading/trailing icons
- `loadingText` — custom text during loading state
- `className` — Tailwind utility class overrides (merged via `twMerge`)

### ButtonBase Component

`ButtonBase` is a low-level building block for styled buttons. It has significant API changes from the extension `component-library` version — most notably, polymorphism via `as`/`href` is replaced by the `asChild` composition pattern, and `Box`/`TextStyleUtilityProps` are no longer accepted.

#### Breaking Changes

##### Import Path

| Extension Pattern                                                | Design System Migration                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `import { ButtonBase } from '../../component-library'`           | `import { ButtonBase } from '@metamask/design-system-react'`           |
| `import { ButtonBaseSize } from '../../component-library'`       | `import { ButtonBaseSize } from '@metamask/design-system-react'`       |
| `import type { ButtonBaseProps } from '../../component-library'` | `import type { ButtonBaseProps } from '@metamask/design-system-react'` |

##### Size Enum

`ButtonBaseSize` keeps the same values, but the default changes from `Md` to `Lg`.

| Extension Value              | Design System Value          | Notes                            |
| ---------------------------- | ---------------------------- | -------------------------------- |
| `ButtonBaseSize.Sm` (`'sm'`) | `ButtonBaseSize.Sm` (`'sm'`) | unchanged                        |
| `ButtonBaseSize.Md` (`'md'`) | `ButtonBaseSize.Md` (`'md'`) | unchanged; no longer the default |
| `ButtonBaseSize.Lg` (`'lg'`) | `ButtonBaseSize.Lg` (`'lg'`) | unchanged; **new default**       |

##### State Props Renamed

| Extension Prop     | Design System Prop | Notes   |
| ------------------ | ------------------ | ------- |
| `disabled`         | `isDisabled`       | renamed |
| `loading`          | `isLoading`        | renamed |
| `block`            | `isFullWidth`      | renamed |
| `iconLoadingProps` | `loadingIconProps` | renamed |

##### Content Model

`ButtonBase` already uses `children` in the extension — no change. String children are wrapped in a `Text` component automatically; non-string children are rendered as-is.

##### Polymorphism Removed: `as` / `href` → `asChild`

The extension `ButtonBase` is polymorphic — `as` switches the root element between `button` and `a`, and an `href` prop auto-switches to `a`. The design system `ButtonBase` always renders a `<button>`. To render as an anchor, use the `asChild` composition prop and provide your own `<a>`.

| Extension Prop           | Design System Migration                                                         |
| ------------------------ | ------------------------------------------------------------------------------- |
| `as="a"` / `as="button"` | Removed — always renders a `<button>`. Use `asChild` with your own `<a>`.       |
| `href="..."`             | Removed — wrap in `asChild` with `<a href="...">`.                              |
| `externalLink`           | Removed — on your `<a>`, set `target="_blank"` and `rel="noopener noreferrer"`. |
| `target` / `rel`         | Removed — set directly on your `<a>` inside `asChild`.                          |

##### Removed Props

| Extension Prop                                                                                      | Design System Migration                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ellipsis`                                                                                          | Removed — for string children, pass `textProps={{ ellipsis: true }}` (forwarded to the inner `Text` wrapper, closest to legacy behavior). For non-string children, wrap them in a custom truncating element or add `className="truncate"` on the button. |
| `iconColor`                                                                                         | Removed — only affected the loading spinner in the legacy component. Pass `loadingIconProps={{ color: ... }}` instead. (Start/end icon colors already came from `startIconProps.color` / `endIconProps.color` — unchanged.)                              |
| `textDirection`                                                                                     | Removed — set the standard HTML `dir` attribute on the element.                                                                                                                                                                                          |
| Box/Text style utility props (`padding*`, `margin*`, `backgroundColor`, `color`, `borderRadius`, …) | Removed — use Tailwind `className` instead.                                                                                                                                                                                                              |

#### New Props

The design system `ButtonBase` adds props not available in the extension version:

- `asChild` — render the button styling onto a child element (Radix-style composition, replaces `as`/`href`)
- `loadingText` — text displayed alongside the spinner while loading
- `loadingTextProps` — customize the loading `Text` component
- `startAccessory` / `endAccessory` — arbitrary `ReactNode` slots at start/end, alongside `startIconName` / `endIconName`

#### Migration Examples

##### Before (Extension)

```tsx
import { ButtonBase, ButtonBaseSize } from '../../component-library';
import { IconName } from '../../component-library';

<ButtonBase
  size={ButtonBaseSize.Lg}
  block
  startIconName={IconName.Add}
  disabled={!isValid}
  loading={isSubmitting}
  onClick={handleSubmit}
>
  Submit
</ButtonBase>;
```

##### After (Design System)

```tsx
import {
  ButtonBase,
  ButtonBaseSize,
  IconName,
} from '@metamask/design-system-react';

<ButtonBase
  size={ButtonBaseSize.Lg}
  isFullWidth
  startIconName={IconName.Add}
  isDisabled={!isValid}
  isLoading={isSubmitting}
  onClick={handleSubmit}
>
  Submit
</ButtonBase>;
```

##### Rendering as an anchor (`as="a"` / `href` → `asChild`)

Before (Extension):

```tsx
import { ButtonBase } from '../../component-library';

<ButtonBase as="a" href="https://metamask.io" externalLink>
  Open MetaMask
</ButtonBase>;
```

After (Design System):

```tsx
import { ButtonBase } from '@metamask/design-system-react';

<ButtonBase asChild>
  <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
    Open MetaMask
  </a>
</ButtonBase>;
```

##### Loading with custom text (new)

The extension only renders a spinner during `loading`. The design system supports an optional loading label:

```tsx
import { ButtonBase } from '@metamask/design-system-react';

<ButtonBase isLoading loadingText="Submitting…">
  Submit
</ButtonBase>;
```

#### API Differences

- Default `size` changed from `ButtonBaseSize.Md` to `ButtonBaseSize.Lg`
- Root element is always `<button>` unless `asChild` is used
- Box/Text style-utility props are no longer accepted — use `className` (Tailwind) for styling overrides
- Loading state supports an optional `loadingText` and `loadingTextProps`

### ButtonIcon Component

`ButtonIcon` is a compact, icon-only button. The design system version has significant API differences from the extension `component-library` version — pixel sizes shift, the icon color API moves under `iconProps`, polymorphism via `as`/`href` is removed, and a new `variant` prop is introduced.

#### Breaking Changes

##### Import Path

| Extension Pattern                                                | Design System Migration                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `import { ButtonIcon } from '../../component-library'`           | `import { ButtonIcon } from '@metamask/design-system-react'`           |
| `import { ButtonIconSize } from '../../component-library'`       | `import { ButtonIconSize } from '@metamask/design-system-react'`       |
| `import type { ButtonIconProps } from '../../component-library'` | `import type { ButtonIconProps } from '@metamask/design-system-react'` |

##### Size Enum — Pixel Dimensions Changed

The `ButtonIconSize` members (`Sm` / `Md` / `Lg`) keep the same string values, but the pixel dimensions shift and the **default identifier changes from `Lg` to `Md`**. The default rendered pixel size (32px) is unchanged.

| Extension Value              | Extension Pixels | Design System Value          | DS Pixels | Notes                         |
| ---------------------------- | ---------------- | ---------------------------- | --------- | ----------------------------- |
| `ButtonIconSize.Sm` (`'sm'`) | 24px             | `ButtonIconSize.Sm` (`'sm'`) | 24px      | same dimension                |
| `ButtonIconSize.Md` (`'md'`) | 28px             | `ButtonIconSize.Md` (`'md'`) | 32px      | larger in DS; **new default** |
| `ButtonIconSize.Lg` (`'lg'`) | 32px             | `ButtonIconSize.Lg` (`'lg'`) | 40px      | larger in DS                  |

> [!NOTE]
> The extension's default (`ButtonIconSize.Lg` = 32px) now maps to `ButtonIconSize.Md` in the design system. Call sites that explicitly pass `ButtonIconSize.Md` or `ButtonIconSize.Lg` will render larger — review layouts when migrating.

##### State Props Renamed

| Extension Prop | Design System Prop | Notes   |
| -------------- | ------------------ | ------- |
| `disabled`     | `isDisabled`       | renamed |

##### `color` → `iconProps.color`

The extension `ButtonIcon` accepted a top-level `color` prop (typed as `IconColor`) that set the icon color. The design system removes it — customize the inner `Icon` via `iconProps` instead.

| Extension Pattern                  | Design System Migration                              |
| ---------------------------------- | ---------------------------------------------------- |
| `color={IconColor.iconDefault}`    | Remove — default icon color is applied automatically |
| `color={IconColor.errorDefault}`   | `iconProps={{ color: IconColor.ErrorDefault }}`      |
| `color={IconColor.primaryDefault}` | `iconProps={{ color: IconColor.PrimaryDefault }}`    |

`IconColor` member names also change casing (camelCase → PascalCase). See [Icon Component](#icon-component) for the full mapping.

##### Polymorphism Removed: `as` / `href` — No Direct Equivalent for Anchor Usage

The extension `ButtonIcon` is polymorphic — `as` toggles the root between `button` and `a`, and an `href` prop auto-switches to `a`. The design system `ButtonIcon` always renders a real `<button>` and does **not** support `asChild`, so there is no built-in way to render an icon-only link. Wrapping `ButtonIcon` in an `<a>` is not a valid migration path — it creates nested interactive elements (`<a>` containing `<button>`), which breaks HTML semantics and accessibility.

| Extension Prop | Design System Migration                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as="a"`       | No direct equivalent — the design system `ButtonIcon` is a `<button>` only. If you still need an icon-only link, reach out to the design system team to discuss adding support. |
| `href="..."`   | No direct equivalent — see above. Do not wrap `ButtonIcon` in an `<a>`: that produces invalid nested `<a><button>` interactive elements.                                        |

##### Removed Props

| Extension Prop                                                                        | Design System Migration                     |
| ------------------------------------------------------------------------------------- | ------------------------------------------- |
| `color`                                                                               | Removed — use `iconProps={{ color: ... }}`  |
| Box `StyleUtilityProps` (`padding*`, `margin*`, `backgroundColor`, `borderRadius`, …) | Removed — use Tailwind `className` instead. |

#### New Props

The design system `ButtonIcon` adds these props:

- `variant` — controls the visual style:
  - `ButtonIconVariant.Default` — transparent background (matches current extension behavior)
  - `ButtonIconVariant.Filled` — muted background with rounded corners and pressed state
  - `ButtonIconVariant.Floating` — colored background with inverse icon color

#### Migration Examples

##### Before (Extension)

```tsx
import { ButtonIcon, ButtonIconSize, IconName } from '../../component-library';
import { IconColor } from '../../../helpers/constants/design-system';

<ButtonIcon
  iconName={IconName.Close}
  ariaLabel="Close"
  size={ButtonIconSize.Lg}
  color={IconColor.iconDefault}
  disabled={isClosing}
  onClick={handleClose}
/>;
```

##### After (Design System)

```tsx
import {
  ButtonIcon,
  ButtonIconSize,
  IconName,
} from '@metamask/design-system-react';

<ButtonIcon
  iconName={IconName.Close}
  ariaLabel="Close"
  size={ButtonIconSize.Md}
  isDisabled={isClosing}
  onClick={handleClose}
/>;
```

##### Colored icon (semantic color)

Before (Extension):

```tsx
<ButtonIcon
  iconName={IconName.Trash}
  ariaLabel="Delete"
  size={ButtonIconSize.Sm}
  color={IconColor.errorDefault}
  onClick={handleDelete}
/>
```

After (Design System):

```tsx
import {
  ButtonIcon,
  ButtonIconSize,
  IconColor,
  IconName,
} from '@metamask/design-system-react';

<ButtonIcon
  iconName={IconName.Trash}
  ariaLabel="Delete"
  size={ButtonIconSize.Sm}
  iconProps={{ color: IconColor.ErrorDefault }}
  onClick={handleDelete}
/>;
```

##### Using the new `variant` prop

```tsx
import {
  ButtonIcon,
  ButtonIconSize,
  ButtonIconVariant,
  IconName,
} from '@metamask/design-system-react';

<ButtonIcon
  iconName={IconName.MoreVertical}
  ariaLabel="More options"
  size={ButtonIconSize.Md}
  variant={ButtonIconVariant.Filled}
  onClick={openMenu}
/>;
```

#### API Differences

- Default `size` identifier changes from `ButtonIconSize.Lg` to `ButtonIconSize.Md` (32px pixel default unchanged); `Md` and `Lg` map to larger pixel dimensions
- Root element is always `<button>` — no `as="a"` / `href` polymorphism and no `asChild`; icon-only link usage has no direct equivalent (reach out to the design system team if needed)
- Icon color is controlled via `iconProps.color` rather than a top-level `color` prop
- Box style-utility props are no longer accepted — use Tailwind `className` for styling overrides
- New `variant` prop (`Default`, `Filled`, `Floating`) for visual styles not available in the extension
- `IconColor` enum member names now use PascalCase (see [Icon Component](#icon-component))

### TextButton Component (from ButtonLink)

The legacy `ButtonLink` (and `Button` with `variant={ButtonVariant.Link}`) is replaced by **two** design system components depending on the use case:

- **`TextButton`** — for inline text-styled links within content flows (the primary replacement)
- **`Button` with `variant={ButtonVariant.Tertiary}`** — for standalone link-style buttons with icons, full width, `isDanger`, `isLoading`, or other button-like affordances

`TextButton` is built on `ButtonBase` and inherits its composition API (`asChild`, `textProps`, `startIconName`, `endIconName`, `startAccessory`, `endAccessory`).

#### Breaking Changes

##### Import Path

| Extension Pattern                                                | Design System Migration                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `import { ButtonLink } from '../../component-library'`           | `import { TextButton } from '@metamask/design-system-react'`           |
| `import { ButtonLinkSize } from '../../component-library'`       | `import { TextButtonSize } from '@metamask/design-system-react'`       |
| `import type { ButtonLinkProps } from '../../component-library'` | `import type { TextButtonProps } from '@metamask/design-system-react'` |

##### Size Enum — Typography, Not Button Height

`ButtonLinkSize` controlled the button's height (inherited from `ButtonBaseSize`). `TextButtonSize` instead controls the inner text's typography variant — `TextButton` is a text-styled button, not a fixed-height button.

| Extension Value                                 | Design System Migration                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ButtonLinkSize.Auto` (default)                 | `TextButtonSize.BodyMd` (default)                                                                  |
| `ButtonLinkSize.Sm` (32px height)               | `TextButtonSize.BodySm`                                                                            |
| `ButtonLinkSize.Md` (40px height)               | `TextButtonSize.BodyMd`                                                                            |
| `ButtonLinkSize.Lg` (48px height)               | `TextButtonSize.BodyLg`                                                                            |
| `ButtonLinkSize.Inherit` (inherits parent font) | No direct equivalent — pick a `TextButtonSize` or pass `textProps={{ className: 'text-inherit' }}` |
| —                                               | `TextButtonSize.BodyXs` (new smallest size)                                                        |

##### State Props Renamed

| Extension Prop | Design System Prop | Notes                                 |
| -------------- | ------------------ | ------------------------------------- |
| `disabled`     | `isDisabled`       | renamed                               |
| `block`        | `isFullWidth`      | renamed (inherited from `ButtonBase`) |

##### `danger` Removed — Use `Button` Tertiary with `isDanger`

`TextButton` does not accept a danger color variant. For error-styled link buttons, use `Button` with `variant={ButtonVariant.Tertiary}` and `isDanger`.

| Extension Pattern | Design System Migration                                          |
| ----------------- | ---------------------------------------------------------------- |
| `danger={true}`   | `<Button variant={ButtonVariant.Tertiary} isDanger>...</Button>` |

##### `loading` Removed — Use `Button` Tertiary with `isLoading`

`TextButton` does not support a loading state. If a loading spinner is required on a link-styled button, use `Button` Tertiary.

| Extension Pattern  | Design System Migration                                                        |
| ------------------ | ------------------------------------------------------------------------------ |
| `loading={true}`   | `<Button variant={ButtonVariant.Tertiary} isLoading>...</Button>`              |
| `iconLoadingProps` | Removed — configure loading on `Button` via `loadingIconProps` / `loadingText` |

##### Polymorphism Removed: `as` / `href` → `asChild`

The extension `ButtonLink` is polymorphic — `as` toggles between `button` and `a`, and an `href` prop auto-switches to `a`. The design system `TextButton` always renders a `<button>` and uses the `asChild` composition pattern (inherited from `ButtonBase`) for anchor rendering.

| Extension Prop           | Design System Migration                                                         |
| ------------------------ | ------------------------------------------------------------------------------- |
| `as="a"` / `as="button"` | Removed — always `<button>`. Use `asChild` with your own `<a>`.                 |
| `href="..."`             | Removed — wrap in `asChild` with `<a href="...">`.                              |
| `externalLink`           | Removed — on your `<a>`, set `target="_blank"` and `rel="noopener noreferrer"`. |
| `target` / `rel`         | Removed — set directly on your `<a>` inside `asChild`.                          |

##### `color` Removed — Use `isInverse` or `Button` Tertiary

The legacy `ButtonLink` accepted a `color` prop that overrode link coloring. `TextButton` exposes only `isInverse`; for other colors, use `Button` Tertiary.

| Extension Pattern              | Design System Migration                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| `color={Color.primaryDefault}` | Remove — default `TextButton` color                                                   |
| `color={Color.primaryInverse}` | `isInverse`                                                                           |
| `color={Color.errorDefault}`   | `<Button variant={ButtonVariant.Tertiary} isDanger>...</Button>`                      |
| Other `Color.*` values         | `<Button variant={ButtonVariant.Tertiary}>` + `className`, or `textProps={{ color }}` |

##### Removed Props

| Extension Prop                                                                                      | Design System Migration                                                     |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `ellipsis`                                                                                          | Removed — use `className="truncate"` or `textProps` with truncation classes |
| `textDirection`                                                                                     | Removed — set the standard HTML `dir` attribute directly                    |
| Box/Text style utility props (`padding*`, `margin*`, `backgroundColor`, `color`, `borderRadius`, …) | Removed — use Tailwind `className` instead                                  |

#### New Props

`TextButton` adds props not available in the extension `ButtonLink`:

- `isInverse` — inverse coloring for use on dark or colored backgrounds
- `asChild` — compose the button styling onto a child element (replaces `as`/`href` polymorphism)

#### Migration Examples

##### Basic inline link

Before (Extension):

```tsx
import { ButtonLink } from '../../component-library';

<ButtonLink onClick={handleLearnMore}>Learn more</ButtonLink>;
```

After (Design System):

```tsx
import { TextButton } from '@metamask/design-system-react';

<TextButton onClick={handleLearnMore}>Learn more</TextButton>;
```

##### Sized "show more" toggle

Before (Extension):

```tsx
import { ButtonLink, ButtonLinkSize } from '../../component-library';

<ButtonLink
  size={ButtonLinkSize.Sm}
  disabled={isLocked}
  onClick={toggleContent}
>
  {isExpanded ? 'Show less' : 'Show more'}
</ButtonLink>;
```

After (Design System):

```tsx
import { TextButton, TextButtonSize } from '@metamask/design-system-react';

<TextButton
  size={TextButtonSize.BodySm}
  isDisabled={isLocked}
  onClick={toggleContent}
>
  {isExpanded ? 'Show less' : 'Show more'}
</TextButton>;
```

##### External link (`as="a"` / `href` → `asChild`)

Before (Extension):

```tsx
import { ButtonLink } from '../../component-library';

<ButtonLink as="a" href="https://metamask.io" externalLink>
  Visit MetaMask
</ButtonLink>;
```

After (Design System):

```tsx
import { TextButton } from '@metamask/design-system-react';

<TextButton asChild>
  <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
    Visit MetaMask
  </a>
</TextButton>;
```

##### Danger link → `Button` Tertiary with `isDanger`

Before (Extension):

```tsx
import { ButtonLink } from '../../component-library';

<ButtonLink danger onClick={handleDelete}>
  Delete account
</ButtonLink>;
```

After (Design System):

```tsx
import { Button, ButtonVariant } from '@metamask/design-system-react';

<Button variant={ButtonVariant.Tertiary} isDanger onClick={handleDelete}>
  Delete account
</Button>;
```

##### Loading link → `Button` Tertiary with `isLoading`

Before (Extension):

```tsx
import { ButtonLink } from '../../component-library';

<ButtonLink loading={isSaving} onClick={handleSave}>
  Save
</ButtonLink>;
```

After (Design System):

```tsx
import { Button, ButtonVariant } from '@metamask/design-system-react';

<Button
  variant={ButtonVariant.Tertiary}
  isLoading={isSaving}
  onClick={handleSave}
>
  Save
</Button>;
```

##### `Button` with `variant={ButtonVariant.Link}` → `TextButton`

Before (Extension):

```tsx
import { Button, ButtonVariant } from '../../component-library';

<Button variant={ButtonVariant.Link} onClick={handleLearnMore}>
  Learn more
</Button>;
```

After (Design System):

```tsx
import { TextButton } from '@metamask/design-system-react';

<TextButton onClick={handleLearnMore}>Learn more</TextButton>;
```

#### API Differences

- `size` controls typography via `TextButtonSize` (body typography variants) rather than fixed button height
- No `isDanger`, `isLoading`, or `color` props — use `Button` with `variant={ButtonVariant.Tertiary}` when any of these are required
- Root element is always `<button>` unless `asChild` is used
- Coloring is locked to primary (or inverse via `isInverse`)
- Inherits the full `ButtonBase` composition surface (`asChild`, `textProps`, accessory slots, icons, ARIA props)

### Box Component

The Box component has breaking changes when migrating from the extension component-library, particularly around responsive spacing and certain margin/padding props.

#### Breaking Changes

##### Responsive Spacing

The extension Box supported responsive arrays for margin and padding props. The design system Box does not support this pattern. Use Tailwind responsive classes via `className` instead.

| Extension Pattern                          | Design System Migration                         |
| ------------------------------------------ | ----------------------------------------------- |
| `margin={[2, 4]}`                          | `margin={2} className="md:m-4"`                 |
| `padding={[2, 4, 6]}`                      | `padding={2} className="md:p-4 lg:p-6"`         |
| `marginTop={[1, 2]}`                       | `marginTop={1} className="md:mt-2"`             |
| Responsive spacing at multiple breakpoints | Use Tailwind responsive prefixes in `className` |

##### Margin Inline Props

The extension Box had `marginInline`, `marginInlineStart`, and `marginInlineEnd` props. The design system Box uses `marginHorizontal` or Tailwind classes instead.

| Extension Pattern       | Design System Migration                      |
| ----------------------- | -------------------------------------------- |
| `marginInline={4}`      | `marginHorizontal={4}` or `className="mx-4"` |
| `marginInlineStart={2}` | `className="ms-2"`                           |
| `marginInlineEnd={2}`   | `className="me-2"`                           |

##### Padding Inline Props

The extension Box had `paddingInline`, `paddingInlineStart`, and `paddingInlineEnd` props. The design system Box uses `paddingHorizontal` or Tailwind classes instead.

| Extension Pattern        | Design System Migration                       |
| ------------------------ | --------------------------------------------- |
| `paddingInline={4}`      | `paddingHorizontal={4}` or `className="px-4"` |
| `paddingInlineStart={2}` | `className="ps-2"`                            |
| `paddingInlineEnd={2}`   | `className="pe-2"`                            |

##### Margin Auto

The extension Box supported `margin="auto"`. The design system Box does not support this value. Use Tailwind classes instead.

| Extension Pattern | Design System Migration |
| ----------------- | ----------------------- |
| `margin="auto"`   | `className="m-auto"`    |

#### Migration Examples

##### Before (Extension)

```tsx
import { Box } from '../../component-library';

// Responsive spacing
<Box margin={[2, 4]} padding={[2, 4]}>
  Responsive spacing
</Box>

// Inline props
<Box marginInline={4} paddingInlineStart={2}>
  Inline spacing
</Box>

// Auto margin
<Box margin="auto">
  Centered with auto margin
</Box>
```

##### After (Design System)

```tsx
import { Box } from '@metamask/design-system-react';

// Responsive spacing - use className for responsive values
<Box margin={2} padding={2} className="md:m-4 md:p-4">
  Responsive spacing
</Box>

// Inline props - use marginHorizontal or className
<Box marginHorizontal={4} className="ps-2">
  Inline spacing
</Box>

// Auto margin - use className
<Box className="m-auto">
  Centered with auto margin
</Box>
```

#### Spacing Props Still Available

Most extension Box margin/padding props work the same in the design system:

- ✅ `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`
- ✅ `marginHorizontal` (replaces `marginInline`)
- ✅ `marginVertical`
- ✅ `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`
- ✅ `paddingHorizontal` (replaces `paddingInline`)
- ✅ `paddingVertical`

For simple, non-responsive spacing, continue using these props. Use `className` with Tailwind utilities for responsive spacing, auto values, or inline-start/end positioning.

### BannerAlert Component

The extension `banner-alert` maps directly to `BannerAlert` in the design system, but severity values are now provided via the shared `BannerAlertSeverity` const object (ADR-0003/0004) instead of extension enums.

#### Breaking Changes

##### Imports and Enum Source

| Extension Pattern                                 | Design System Migration                                    |
| ------------------------------------------------- | ---------------------------------------------------------- |
| `BannerAlertSeverity` from `./banner-alert.types` | `BannerAlertSeverity` from `@metamask/design-system-react` |

##### Severity Values

| Extension Value                             | Design System Value           |
| ------------------------------------------- | ----------------------------- |
| `BannerAlertSeverity.Info` (`'info'`)       | `BannerAlertSeverity.Info`    |
| `BannerAlertSeverity.Success` (`'success'`) | `BannerAlertSeverity.Success` |
| `BannerAlertSeverity.Warning` (`'warning'`) | `BannerAlertSeverity.Warning` |
| `BannerAlertSeverity.Danger` (`'danger'`)   | `BannerAlertSeverity.Danger`  |

#### Migration Example

##### Before (Extension)

```tsx
import { BannerAlert } from '../../component-library/banner-alert';
import { BannerAlertSeverity } from '../../component-library/banner-alert/banner-alert.types';

<BannerAlert
  severity={BannerAlertSeverity.Warning}
  title="Warning"
  actionButtonLabel="Action"
  actionButtonOnClick={() => undefined}
/>;
```

##### After (Design System)

```tsx
import {
  BannerAlert,
  BannerAlertSeverity,
} from '@metamask/design-system-react';

<BannerAlert
  severity={BannerAlertSeverity.Warning}
  title="Warning"
  actionButtonLabel="Action"
  actionButtonOnClick={() => undefined}
/>;
```

### BannerBase Component

The extension `banner-base` maps to `BannerBase` in the design system, but action and close affordance APIs changed in ways that can break existing usage.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration behavior.

#### Breaking Changes

##### Removed / No Direct Equivalent

| Legacy Extension API                                                                               | MMDS Status                                        | Migration                                                                                                                |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `actionButtonLabel` used without `actionButtonOnClick`                                             | No longer renders an action button                 | Provide both `actionButtonLabel` and `actionButtonOnClick`                                                               |
| Link-like action through `ButtonLink` props such as `href`, `target`, `rel` in `actionButtonProps` | No direct equivalent on `BannerBase` action button | Move link behavior into banner content (for example, a link in `children`) or handle navigation in `actionButtonOnClick` |

##### Renamed Props

No direct prop renames were introduced for extension-to-MMDS `BannerBase`.

##### Type and Callback Signature Changes

| Legacy Extension API                                     | MMDS API                                                                                                                          | Notes                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `title?: string`                                         | `title?: ReactNode`                                                                                                               | MMDS now accepts full React node content              |
| `description?: string`                                   | `description?: ReactNode`                                                                                                         | MMDS now accepts full React node content              |
| `actionButtonProps?: Partial<ButtonLinkProps<'button'>>` | `actionButtonProps?: Omit<Partial<ButtonProps>, 'children' \| 'onClick' \| 'variant'>`                                            | MMDS action button is a `Button`, not a `ButtonLink`  |
| `onClose?: (e: React.MouseEvent<HTMLElement>) => void`   | `onClose?: MouseEventHandler<HTMLButtonElement>`                                                                                  | Close callback target is now the close button element |
| `closeButtonProps?: Partial<ButtonIconProps<'button'>>`  | `closeButtonProps?: Omit<Partial<ButtonIconProps>, 'iconName' \| 'onClick'> & { onClick?: MouseEventHandler<HTMLButtonElement> }` | `iconName` remains fixed to close icon                |

##### Default and Behavior Changes

| Legacy Extension Behavior                                                  | MMDS Behavior                                                                                      |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Action button defaults to `ButtonLink` semantics and `ButtonLinkSize.Auto` | Action button is `Button` with default `ButtonSize.Md`                                             |
| Close button renders only when `onClose` is provided                       | Close button renders when `onClose` **or** `closeButtonProps` is provided                          |
| Close button `ariaLabel` defaults to translated `t('close')`               | Close button `ariaLabel` defaults to `'Close banner'` (override with `closeButtonProps.ariaLabel`) |
| String/number `children` are wrapped in extension `Text` defaults          | String/number `children` are wrapped in MMDS `Text` with `TextVariant.BodyMd`                      |

#### Migration Examples

##### Before (Extension)

```tsx
import { BannerBase } from '../../component-library/banner-base';

<BannerBase
  title="Your account needs attention"
  description="Review the latest activity and confirm your settings."
  actionButtonLabel="Review"
  actionButtonOnClick={() => {
    /* handle review */
  }}
  onClose={() => {
    /* dismiss banner */
  }}
/>;
```

##### After (Design System)

```tsx
import { BannerBase } from '@metamask/design-system-react';

<BannerBase
  title="Your account needs attention"
  description="Review the latest activity and confirm your settings."
  actionButtonLabel="Review"
  actionButtonOnClick={() => {
    /* handle review */
  }}
  onClose={() => {
    /* dismiss banner */
  }}
  closeButtonProps={{ 'data-testid': 'banner-base-close-button' }}
/>;
```

### Text Component

The Text component has significant breaking changes when migrating from the extension component-library.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for the shared Box/style-utility migration approach used across all components.

#### Breaking Changes

##### Font Weight Separation

The most significant change is that font weight is now a **separate prop** instead of being part of the variant name.

| Extension Variant          | Design System Migration                                        |
| -------------------------- | -------------------------------------------------------------- |
| `TextVariant.bodyMd`       | `variant={TextVariant.BodyMd}`                                 |
| `TextVariant.bodyMdMedium` | `variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}`  |
| `TextVariant.bodyMdBold`   | `variant={TextVariant.BodyMd} fontWeight={FontWeight.Bold}`    |
| `TextVariant.bodySm`       | `variant={TextVariant.BodySm}`                                 |
| `TextVariant.bodySmMedium` | `variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}`  |
| `TextVariant.bodySmBold`   | `variant={TextVariant.BodySm} fontWeight={FontWeight.Bold}`    |
| `TextVariant.bodyXs`       | `variant={TextVariant.BodyXs}`                                 |
| `TextVariant.bodyXsMedium` | `variant={TextVariant.BodyXs} fontWeight={FontWeight.Medium}`  |
| `TextVariant.bodyLgMedium` | `variant={TextVariant.BodyLg} fontWeight={FontWeight.Medium}`  |
| `TextVariant.headingSm`    | `variant={TextVariant.HeadingSm}`                              |
| `TextVariant.headingMd`    | `variant={TextVariant.HeadingMd}`                              |
| `TextVariant.headingLg`    | `variant={TextVariant.HeadingLg}`                              |
| `TextVariant.displayMd`    | `variant={TextVariant.DisplayMd}`                              |
| `TextVariant.inherit`      | Remove `variant` prop (text inherits parent styles by default) |

##### Variant Name Changes

Variant names now use PascalCase instead of camelCase:

| Extension                  | Design System                              |
| -------------------------- | ------------------------------------------ |
| `TextVariant.bodyMd`       | `TextVariant.BodyMd`                       |
| `TextVariant.bodySm`       | `TextVariant.BodySm`                       |
| `TextVariant.bodyXs`       | `TextVariant.BodyXs`                       |
| `TextVariant.bodyLgMedium` | `TextVariant.BodyLg` + `FontWeight.Medium` |
| `TextVariant.headingSm`    | `TextVariant.HeadingSm`                    |
| `TextVariant.headingMd`    | `TextVariant.HeadingMd`                    |
| `TextVariant.headingLg`    | `TextVariant.HeadingLg`                    |
| `TextVariant.displayMd`    | `TextVariant.DisplayMd`                    |

##### Color Prop Changes

Color enum values now use `TextColor` prefix:

| Extension                | Design System                |
| ------------------------ | ---------------------------- |
| `Color.textDefault`      | `TextColor.TextDefault`      |
| `Color.textAlternative`  | `TextColor.TextAlternative`  |
| `Color.textMuted`        | `TextColor.TextMuted`        |
| `Color.primaryDefault`   | `TextColor.PrimaryDefault`   |
| `Color.errorDefault`     | `TextColor.ErrorDefault`     |
| `Color.errorAlternative` | `TextColor.ErrorAlternative` |
| `Color.warningDefault`   | `TextColor.WarningDefault`   |
| `Color.successDefault`   | `TextColor.SuccessDefault`   |
| `Color.infoDefault`      | `TextColor.InfoDefault`      |
| `Color.overlayInverse`   | `TextColor.OverlayInverse`   |
| `Color.primaryInverse`   | `TextColor.PrimaryInverse`   |
| `Color.errorInverse`     | `TextColor.ErrorInverse`     |
| `Color.warningInverse`   | `TextColor.WarningInverse`   |
| `Color.successInverse`   | `TextColor.SuccessInverse`   |
| `Color.infoInverse`      | `TextColor.InfoInverse`      |
| `Color.inherit`          | `TextColor.Inherit`          |

#### Migration Examples

##### Before (Extension)

```tsx
import { Text, TextVariant, Color } from '../../component-library';

// Regular body text
<Text variant={TextVariant.bodyMd}>Regular text</Text>

// Medium weight body text
<Text variant={TextVariant.bodyMdMedium}>Medium weight text</Text>

// Bold body text
<Text variant={TextVariant.bodyMdBold}>Bold text</Text>

// Small text with color
<Text variant={TextVariant.bodySm} color={Color.textMuted}>
  Small muted text
</Text>
```

##### After (Design System)

```tsx
import { Text, TextVariant, FontWeight, TextColor } from '@metamask/design-system-react';

// Regular body text
<Text variant={TextVariant.BodyMd}>Regular text</Text>

// Medium weight body text
<Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
  Medium weight text
</Text>

// Bold body text
<Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Bold}>
  Bold text
</Text>

// Small text with color
<Text variant={TextVariant.BodySm} color={TextColor.TextMuted}>
  Small muted text
</Text>
```

#### API Differences

Both extension and design-system Text components support `fontFamily`, `textTransform`, `textAlign`, `overflowWrap`, and `ellipsis`.

Notable differences in the design system Text component:

- `asChild` - compose styles onto a child element via Radix `Slot`
- New semantic variants are available in addition to migrated variants (`PageHeading`, `SectionHeading`, `ButtonLabelMd`, `ButtonLabelLg`, `AmountDisplayLg`)

### Icon Component

The Icon component has enum and prop-surface differences when migrating from the extension component-library.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for the shared Box/style-utility migration approach used across all components.

#### Breaking Changes

##### Size Enum Changes

The extension `IconSize.Inherit` value is not supported in the design system.

| Extension Size     | Design System Migration          |
| ------------------ | -------------------------------- |
| `IconSize.Xs`      | `IconSize.Xs`                    |
| `IconSize.Sm`      | `IconSize.Sm`                    |
| `IconSize.Md`      | `IconSize.Md`                    |
| `IconSize.Lg`      | `IconSize.Lg`                    |
| `IconSize.Xl`      | `IconSize.Xl`                    |
| `IconSize.Inherit` | Use `className` sizing utilities |

##### Color Enum Changes

Icon colors now use PascalCase names with a design-system-specific enum.

| Extension Color             | Design System               |
| --------------------------- | --------------------------- |
| `IconColor.iconDefault`     | `IconColor.IconDefault`     |
| `IconColor.iconAlternative` | `IconColor.IconAlternative` |
| `IconColor.iconMuted`       | `IconColor.IconMuted`       |
| `IconColor.overlayInverse`  | `IconColor.OverlayInverse`  |
| `IconColor.primaryDefault`  | `IconColor.PrimaryDefault`  |
| `IconColor.primaryInverse`  | `IconColor.PrimaryInverse`  |
| `IconColor.errorDefault`    | `IconColor.ErrorDefault`    |
| `IconColor.errorInverse`    | `IconColor.ErrorInverse`    |
| `IconColor.warningDefault`  | `IconColor.WarningDefault`  |
| `IconColor.warningInverse`  | `IconColor.WarningInverse`  |
| `IconColor.successDefault`  | `IconColor.SuccessDefault`  |
| `IconColor.successInverse`  | `IconColor.SuccessInverse`  |
| `IconColor.infoDefault`     | `IconColor.InfoDefault`     |
| `IconColor.infoInverse`     | `IconColor.InfoInverse`     |

##### Prop Surface Changes

The extension Icon is polymorphic (`as` pattern), while the design system Icon is an SVG-first component with standard SVG props.

#### Migration Examples

##### Before (Extension)

```tsx
import { Icon } from '../../component-library';
import {
  IconName,
  IconSize,
  IconColor,
} from '../../../helpers/constants/design-system';

<Icon
  name={IconName.Check}
  size={IconSize.Inherit}
  color={IconColor.iconDefault}
/>;
```

##### After (Design System)

```tsx
import {
  Icon,
  IconName,
  IconSize,
  IconColor,
} from '@metamask/design-system-react';

<Icon
  name={IconName.Check}
  size={IconSize.Md}
  color={IconColor.IconDefault}
  className="h-5 w-5"
/>;
```

#### API Differences

- `className` and `style` are still supported
- Icon color values should use `IconColor` enum values from `@metamask/design-system-react`
- Use SVG props directly for accessibility and rendering behavior

### Checkbox Component

The extension `checkbox` component maps to `Checkbox` in the design system, with controlled-state naming and callback-signature changes.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                       | Design System Migration                                              |
| ------------------------------------------------------- | -------------------------------------------------------------------- |
| `import { Checkbox } from '../../component-library'`    | `import { Checkbox } from '@metamask/design-system-react'`           |
| `import type { CheckboxProps } from './checkbox.types'` | `import type { CheckboxProps } from '@metamask/design-system-react'` |

##### Props and Callback Mapping

| Extension API                                               | Design System API                         | Change Type                      | Notes                                                         |
| ----------------------------------------------------------- | ----------------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| `isChecked?: boolean`                                       | `isSelected: boolean`                     | renamed + now required           | controlled value must be explicitly passed                    |
| `onChange?: (event: ChangeEvent<HTMLInputElement>) => void` | `onChange: (isSelected: boolean) => void` | signature changed + now required | callback receives the next boolean value instead of DOM event |
| `id?: string`                                               | `id: string`                              | now required                     | required for `input`/`label` association                      |
| `iconProps?: IconProps<'span'>`                             | `checkedIconProps?: Partial<IconProps>`   | renamed                          | use for checked icon customization                            |
| `isIndeterminate?: boolean`                                 | removed                                   | removed                          | no built-in tri-state behavior                                |
| `isReadOnly?: boolean`                                      | removed                                   | removed                          | handle read-only behavior in parent by no-oping `onChange`    |
| `isRequired?: boolean`                                      | removed from top-level                    | moved                            | pass through `inputProps={{ required: true }}`                |
| `name?: string`                                             | removed from top-level                    | moved                            | pass through `inputProps={{ name: 'fieldName' }}`             |
| `title?: string`                                            | removed from top-level                    | moved                            | pass through `inputProps={{ title: '...' }}`                  |
| `inputRef`                                                  | removed                                   | removed                          | no dedicated input ref prop                                   |
| broad Box/Text style utility props                          | removed                                   | removed                          | use `className`, `style`, and explicit props instead          |
| `isInvalid`                                                 | `isInvalid`                               | added in MMDS                    | use for error styling (`false` by default)                    |

##### Default and Behavior Changes

| Concern                   | Extension Behavior                                   | Design System Behavior                              |
| ------------------------- | ---------------------------------------------------- | --------------------------------------------------- |
| Controlled state defaults | `isChecked` optional (unchecked when omitted)        | `isSelected` required                               |
| Keyboard Enter handling   | invokes `onChange(event)`                            | toggles and calls `onChange(nextValue)`             |
| Indeterminate visuals     | built-in minus/check rendering via `isIndeterminate` | not built in; implement tri-state logic in parent   |
| Read-only mode            | `isReadOnly` prevented updates                       | no explicit prop; enforce via parent callback logic |

#### Migration Example

##### Before (Extension)

```tsx
import { Checkbox } from '../../component-library';

<Checkbox
  id="terms"
  name="terms"
  isChecked={isChecked}
  isIndeterminate={isPartiallySelected}
  isReadOnly={isLocked}
  onChange={(event) => setIsChecked(event.target.checked)}
  label="I agree to the terms"
/>;
```

##### After (Design System)

```tsx
import { Checkbox } from '@metamask/design-system-react';

<Checkbox
  id="terms"
  isSelected={isChecked}
  onChange={(nextIsSelected) => {
    if (isLocked) {
      return;
    }
    setIsChecked(nextIsSelected);
  }}
  inputProps={{ name: 'terms' }}
  label="I agree to the terms"
/>;
```

#### API Differences

- `Checkbox` still exposes a `toggle` imperative handle via `ref`, but top-level `inputRef` is not available.
- `inputProps` remains available and should be used for native input attributes such as `name`, `required`, and `title`.
- `isInvalid` is available for error-state visuals and is not part of the extension checkbox API.

### BadgeCount Component

There is **no** `BadgeCount` (or equivalent) under MetaMask Extension `ui/components/component-library` on `main`. Treat numeric badges as **new** design-system usage rather than a straight replacement.

#### MMDS API summary

| Area            | Notes                                                                 |
| --------------- | --------------------------------------------------------------------- |
| `count`         | Required `number`                                                     |
| `max`           | Optional — values above `max` render as `max+` (default max: **99**) |
| `size`          | `BadgeCountSize.Md` (default) or `BadgeCountSize.Lg`                   |
| `textProps`     | Optional — forwarded to inner `Text`                                  |
| `className`     | Tailwind overrides                                                    |

#### After (Design System)

```tsx
import { BadgeCount, BadgeCountSize } from '@metamask/design-system-react';

<BadgeCount count={12} max={99} size={BadgeCountSize.Md} />;
```

### BadgeIcon Component

There is **no** `BadgeIcon` under MetaMask Extension `ui/components/component-library` on `main`. Use MMDS directly.

#### MMDS API summary

| Area       | Notes                                                        |
| ---------- | ------------------------------------------------------------ |
| `iconName` | Required — `IconName` from the shared icon map               |
| `iconProps`| Optional — passed to `Icon` except `name`                    |
| `className`| Tailwind overrides                                           |

#### After (Design System)

```tsx
import { BadgeIcon, IconName } from '@metamask/design-system-react';

<BadgeIcon iconName={IconName.FullCircle} />;
```

### BadgeNetwork Component

There is **no** `badge-network` folder under MetaMask Extension `ui/components/component-library` on `main`. Product code under `ui/components/multichain/badge-status` is a **different** component (multichain UI), not a legacy wrapper for MMDS `BadgeNetwork`.

MMDS `BadgeNetwork` composes `AvatarNetwork` with **fixed** presentation (`AvatarNetworkSize.Xs`, `hasBorder` on web). Props are the shared network identity surface (`name`, `fallbackText`, image `src`) plus host passthrough (`className`, `imageProps` on web).

#### After (Design System)

```tsx
import { BadgeNetwork } from '@metamask/design-system-react';

<BadgeNetwork name="Ethereum Mainnet" src="https://example.com/icon.png" />;
```

### BadgeStatus Component

There is **no** `badge-status` implementation under MetaMask Extension `ui/components/component-library` on `main`. A separate `ui/components/multichain/badge-status` exists for extension UI; it is **not** API-compatible with MMDS `BadgeStatus` — migrate call sites by redesigning around MMDS props (`status`, `size`, `hasBorder`) rather than assuming a prop rename map.

#### MMDS API summary

| Area        | Notes                                                                 |
| ----------- | --------------------------------------------------------------------- |
| `status`    | Required — `BadgeStatusStatus` (`Active`, `Inactive`, `Disconnected`, `New`, `Attention`) |
| `size`      | Optional — `BadgeStatusSize.Md` (default) or `Lg`                    |
| `hasBorder` | Optional — default **true**                                           |

#### After (Design System)

```tsx
import {
  BadgeStatus,
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-react';

<BadgeStatus status={BadgeStatusStatus.Active} size={BadgeStatusSize.Md} />;
```

### BadgeWrapper Component

Maps from MetaMask Extension `ui/components/component-library/badge-wrapper`.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) — legacy `BadgeWrapper` accepted polymorphic `Box` / `StyleUtilityProps` on the root; MMDS uses an explicit `className` surface instead.

#### Breaking Changes

##### Import Path

| Extension Pattern                                                    | Design System Migration                                                    |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `import { BadgeWrapper } from '../../component-library/badge-wrapper'` | `import { BadgeWrapper } from '@metamask/design-system-react'`           |

##### Enum and shape renames (ADR-0003)

Legacy enums used camelCase member names with the same **string** values as today’s const objects (for example `'top-right'`). Prefer importing `BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape` from `@metamask/design-system-react` and using PascalCase members (`TopRight`, `Circular`, …).

| Legacy Extension API              | MMDS API                    |
| --------------------------------- | --------------------------- |
| `BadgeWrapperAnchorElementShape`  | `BadgeWrapperPositionAnchorShape` |
| `anchorElementShape`              | `positionAnchorShape`       |
| `positionObj`                     | `customPosition`            |

##### Defaults changed

| Concern                         | Extension (`badge-wrapper.tsx`)     | MMDS `BadgeWrapper`           |
| ------------------------------- | ----------------------------------- | ----------------------------- |
| Preset position                 | Defaults to **`bottomRight`**       | Defaults to **`BottomRight`** (same string `'bottom-right'`; verify visually when migrating) |
| Anchor shape                    | Defaults to **`rectangular`**       | Defaults to **`Circular`**    |
| Root polymorphism / Box utilities | Polymorphic `Box` + style utilities | Fixed `div`; use `className` + Tailwind |
| `badge` optional                | Optional in legacy props            | **Required** in MMDS types — always pass the badge node |

##### New props in MMDS

- `positionXOffset` / `positionYOffset` — fine-tune preset positions (default `0`).
- `childrenContainerProps` — passthrough to the measured anchor wrapper around `children`.

##### Removed / replaced surfaces

| Legacy Extension Behavior                         | MMDS Migration                                       |
| ------------------------------------------------- | ---------------------------------------------------- |
| Root `Box` style-utility props (`marginTop`, …)   | Use Tailwind classes via `className` on `BadgeWrapper` |
| Polymorphic root (`as`, …)                        | Root is a `div`; wrap if you need another element    |

#### Migration Examples

##### Before (Extension)

```tsx
import {
  BadgeWrapper,
  BadgeWrapperPosition,
  BadgeWrapperAnchorElementShape,
} from '../../component-library/badge-wrapper';
import { AvatarNetwork } from '../../component-library';

<BadgeWrapper
  anchorElementShape={BadgeWrapperAnchorElementShape.circular}
  position={BadgeWrapperPosition.topRight}
  badge={<AvatarNetwork name="Polygon" src={src} />}
>
  <AvatarNetwork name="Account" src={avatarSrc} />
</BadgeWrapper>;
```

##### After (Design System)

```tsx
import {
  BadgeWrapper,
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
  BadgeNetwork,
} from '@metamask/design-system-react';

<BadgeWrapper
  positionAnchorShape={BadgeWrapperPositionAnchorShape.Circular}
  position={BadgeWrapperPosition.TopRight}
  badge={<BadgeNetwork name="Polygon" src={src} />}
>
  <BadgeNetwork name="Account" src={avatarSrc} />
</BadgeWrapper>;
```

## Version Updates

This section covers version-to-version breaking changes within `@metamask/design-system-react`.

## From version 0.17.0 to 0.18.0

### Box: Enum exports now use const objects and string unions

**What Changed:**

`BoxFlexDirection`, `BoxFlexWrap`, `BoxAlignItems`, `BoxJustifyContent`, `BoxBackgroundColor`, `BoxBorderColor`, `BoxSpacing`, and `BoxBorderWidth` now follow the ADR-0003 const-object + string-union pattern instead of local enums.

**Migration:**

```tsx
// Before (0.17.1)
import { BoxBackgroundColor } from '@metamask/design-system-react';

// After (0.18.0)
import { BoxBackgroundColor } from '@metamask/design-system-react';
```

### Box: Removed stale `-alternative` color tokens

**What Changed:**

The following `BoxBackgroundColor` and `BoxBorderColor` entries have been removed. These tokens were removed from `@metamask/design-tokens` in v4.0.0 but were incorrectly carried over into the Box const objects:

| Removed Entry                           | Replacement                         |
| --------------------------------------- | ----------------------------------- |
| `BoxBackgroundColor.WarningAlternative` | `BoxBackgroundColor.WarningDefault` |
| `BoxBackgroundColor.SuccessAlternative` | `BoxBackgroundColor.SuccessDefault` |
| `BoxBorderColor.WarningAlternative`     | `BoxBorderColor.WarningDefault`     |
| `BoxBorderColor.SuccessAlternative`     | `BoxBorderColor.SuccessDefault`     |
| `BoxBorderColor.InfoAlternative`        | `BoxBorderColor.InfoDefault`        |

**Migration:**

These tokens had no backing CSS custom property, so any usage was already producing no visible style. Replace with `-default` or `-muted` as appropriate:

```tsx
// Before (0.17.1)
<Box backgroundColor={BoxBackgroundColor.WarningAlternative} />
<Box backgroundColor={BoxBackgroundColor.SuccessAlternative} />
<Box borderColor={BoxBorderColor.WarningAlternative} />
<Box borderColor={BoxBorderColor.SuccessAlternative} />
<Box borderColor={BoxBorderColor.InfoAlternative} />

// After (0.18.0)
<Box backgroundColor={BoxBackgroundColor.WarningDefault} />
<Box backgroundColor={BoxBackgroundColor.SuccessDefault} />
<Box borderColor={BoxBorderColor.WarningDefault} />
<Box borderColor={BoxBorderColor.SuccessDefault} />
<Box borderColor={BoxBorderColor.InfoDefault} />
```

**Impact:**

- Any reference to the removed entries will produce a TypeScript error after upgrading.

---

## From version 0.16.0 to 0.17.0

### Text: Typography enum exports now use const objects and string unions

`FontWeight`, `FontStyle`, `FontFamily`, `TextVariant`, and `TextColor` now follow the ADR-0003 const-object + string-union pattern instead of enums.

#### `FontWeight`, `FontStyle`, and `FontFamily` values changed

**No migration likely needed.** These were TypeScript `enum` types before this release, so the underlying string values were inaccessible via the type system and would only have been relied upon in rare circumstances. Idiomatic usage (`fontWeight={FontWeight.Bold}`) continues to work without change — the components handle the mapping internally.

The values did change to semantic identifiers for cross-platform sharing with React Native:

| Const        | Key        | Before (0.16.0)  | After (0.17.0)         |
| ------------ | ---------- | ---------------- | ---------------------- |
| `FontWeight` | `.Bold`    | `'font-bold'`    | `'bold'`               |
| `FontWeight` | `.Medium`  | `'font-medium'`  | `'medium'`             |
| `FontWeight` | `.Regular` | `'font-regular'` | `'regular'`            |
| `FontStyle`  | `.Normal`  | `'not-italic'`   | `'normal'`             |
| `FontStyle`  | `.Italic`  | `'italic'`       | `'italic'` (unchanged) |
| `FontFamily` | `.Default` | `'font-default'` | `'default'`            |
| `FontFamily` | `.Accent`  | `'font-accent'`  | `'accent'`             |
| `FontFamily` | `.Hero`    | `'font-hero'`    | `'hero'`               |

If you were comparing against the raw string values directly, update to use the const member instead:

```tsx
// ❌ Rare: comparing against raw string value
if (fontWeight === 'font-bold') { ... }

// ✅ Use const member (works in both 0.16.0 and 0.17.0)
if (fontWeight === FontWeight.Bold) { ... }
```

#### Breaking: Tailwind content scanning

If your project scans `node_modules` for Tailwind class names (for example to include `text-primary-default` from `TextColor`), widen your MMDS content globs after upgrading so the generated class name strings are still discovered.

**Before (0.16.0):**

```js
// tailwind.config.js
content: [
  './node_modules/@metamask/design-system-react/**/*.{mjs,cjs}',
],
```

**After (0.17.0):**

```js
// tailwind.config.js
content: [
  './node_modules/@metamask/design-system-*/**/*.{mjs,cjs}',
],
```

---

## From version 0.12.0 to 0.13.0

### Typography: semantic bold is now semibold (600)

- `FontWeight.Bold` and the `Text` component now treat bold as weight 600 across both CSS and Tailwind enums; the Storybook font loader swapped the retired `Geist-Bold` assets for the new `Geist-SemiBold` files, and the design tokens now export `--font-weight-bold: 600`.
- Update any hardcoded `font-weight: 700` values, `@font-face` definitions, or typography documentation to 600 if they refer to bold text (the exposed `'font-bold'` utility remains unchanged, so consuming code keeps using the same enums).
- This change builds on `@metamask/design-tokens@8.3.0`, so consult the [design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-822-to-830) for the matching token-level steps.

### BadgeWrapper types now use const-object + union definitions

- `BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, and `BadgeWrapperPropsShared` now come from const objects annotated `as const`, producing string union types instead of TypeScript enums; this follows ADR-0003 and ADR-0004 (see https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md and https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md).
- The exports remain available through `@metamask/design-system-react` (and the platform-specific bundles), so your import path stays the same; only the underlying type shape shifted to a const-object/union pattern so you gain string-literal widening while keeping the previously exported names.

## From version 0.10.0 to 0.11.0

### ButtonIcon Variant Prop

Version 0.11.0 replaces `ButtonIcon`'s boolean props `isInverse` and `isFloating` with a single `variant` prop ([#948](https://github.com/MetaMask/metamask-design-system/pull/948)).

#### Breaking Changes

The `ButtonIcon` component now uses a `variant` prop instead of `isInverse` and `isFloating` boolean props.

#### Migration Steps

**Before (0.10.0):**

```tsx
import { ButtonIcon } from '@metamask/design-system-react';
import { IconName } from '@metamask/design-system-react';

// Default button icon (transparent background)
<ButtonIcon name={IconName.Add} />

// Floating button icon
<ButtonIcon name={IconName.Add} isFloating />

// Inverse button icon (no longer supported)
<ButtonIcon name={IconName.Add} isInverse />
```

**After (0.11.0):**

```tsx
import { ButtonIcon, ButtonIconVariant, IconName } from '@metamask/design-system-react';

// Default button icon (transparent background)
<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Default} />
// or omit variant prop as Default is the default value
<ButtonIcon name={IconName.Add} />

// Floating button icon (rounded, colored background with inverse icon)
<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Floating} />

// Filled button icon (new - muted background with rounded corners)
<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Filled} />
```

#### New Variants

- `ButtonIconVariant.Default` - Transparent background with default icon color and hover/active states (default)
- `ButtonIconVariant.Filled` - Muted background (`bg-muted`) with rounded corners and hover/pressed states (new)
- `ButtonIconVariant.Floating` - Colored background with inverse icon color (replaces `isFloating`)

#### Removed Props

- `isInverse` - No longer supported
- `isFloating` - Replaced by `variant={ButtonIconVariant.Floating}`

## From version 0.1.0 to 0.2.0

### Added Text Component Variants

Version 0.2.0 added five new Text component variants with responsive typography support ([#777](https://github.com/MetaMask/metamask-design-system/pull/777)):

#### New Variants

- `TextVariant.PageHeading` - For main page titles (renders as `<h1>` by default)
- `TextVariant.SectionHeading` - For section titles (renders as `<h2>` by default)
- `TextVariant.ButtonLabelMd` - For medium-sized button labels (renders as `<span>` by default)
- `TextVariant.ButtonLabelLg` - For large-sized button labels (renders as `<span>` by default)
- `TextVariant.AmountDisplayLg` - For large amount/value displays (renders as `<span>` by default)

#### Migration Steps

These are **non-breaking additions**. No migration is required, but you can update your components to use the new variants where appropriate:

**Before (0.1.0):**

```tsx
// Using generic heading variants
<Text variant={TextVariant.HeadingLg}>Page Title</Text>
<Text variant={TextVariant.HeadingMd}>Section Title</Text>
```

**After (0.2.0 - Optional):**

```tsx
// Using semantic page/section variants
<Text variant={TextVariant.PageHeading}>Page Title</Text>
<Text variant={TextVariant.SectionHeading}>Section Title</Text>
```

#### Responsive Typography

All new variants include responsive sizing:

| Variant                       | Small Screen | Large Screen (md: breakpoint) |
| ----------------------------- | ------------ | ----------------------------- |
| `TextVariant.PageHeading`     | 24px         | 32px                          |
| `TextVariant.SectionHeading`  | 20px         | 24px                          |
| `TextVariant.ButtonLabelMd`   | 16px         | 16px                          |
| `TextVariant.ButtonLabelLg`   | 20px         | 20px                          |
| `TextVariant.AmountDisplayLg` | 40px         | 60px                          |
