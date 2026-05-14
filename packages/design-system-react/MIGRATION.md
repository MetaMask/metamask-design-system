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
  - [HeaderBase Component](#headerbase-component)
  - [HelpText Component](#helptext-component)
  - [Label Component](#label-component)
  - [Modal Component](#modal-component)
  - [ModalContent Component](#modalcontent-component)
  - [ModalBody Component](#modalbody-component)
  - [ModalFocus Component](#modalfocus-component)
  - [ModalFooter Component](#modalfooter-component)
  - [ModalOverlay Component](#modaloverlay-component)
  - [SensitiveText Component](#sensitivetext-component)
  - [Skeleton Component](#skeleton-component)
- [Version Updates](#version-updates)
  - [From version 0.22.0 to 0.x.0](#from-version-0220-to-0x0)
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

| Legacy Extension API                                     | MMDS API                                                                               | Notes                                                              |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `title?: string`                                         | `title?: ReactNode`                                                                    | MMDS now accepts full React node content                           |
| `description?: string`                                   | `description?: ReactNode`                                                              | MMDS now accepts full React node content                           |
| `actionButtonProps?: Partial<ButtonLinkProps<'button'>>` | `actionButtonProps?: Omit<Partial<ButtonProps>, 'children' \| 'onClick' \| 'variant'>` | MMDS action button is a `Button`, not a `ButtonLink`               |
| `onClose?: (e: React.MouseEvent<HTMLElement>) => void`   | `onClose?: MouseEventHandler<HTMLButtonElement>`                                       | Close callback target is now the close button element              |
| `closeButtonProps?: Partial<ButtonIconProps<'button'>>`  | `closeButtonProps?: Omit<Partial<ButtonIconProps>, 'iconName' \| 'onClick'>`           | `iconName` remains fixed to close icon; use `onClose` for behavior |

##### Default and Behavior Changes

| Legacy Extension Behavior                                                  | MMDS Behavior                                                                                      |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Action button defaults to `ButtonLink` semantics and `ButtonLinkSize.Auto` | Action button is `Button` with default `ButtonSize.Md`                                             |
| Close button renders only when `onClose` is provided                       | Close button renders only when `onClose` is provided                                               |
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

### HeaderBase Component

The extension `header-base` component maps to `HeaderBase` in the design system. The visual contract — a centered title flanked by start/end accessories — is preserved, but the implementation switches from JS-based width measurement (with a window resize listener) to **CSS Grid** layout. The polymorphic Box surface and the `mm-header-base` class hook are removed.

`HeaderBase` is the layout primitive that `ModalHeader`, `PopoverHeader`, and any custom page-level header sit on. Migrate this first if you're moving any of those.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                                | Design System Migration                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `import { HeaderBase } from '../../component-library'`           | `import { HeaderBase } from '@metamask/design-system-react'`           |
| `import type { HeaderBaseProps } from '../../component-library'` | `import type { HeaderBaseProps } from '@metamask/design-system-react'` |

##### Layout Implementation

| Concern              | Extension Behavior                                                                                                                                                                     | Design System Behavior                                                                                                                                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Title centering      | `display: flex; justify-content: space-between` plus a JS `useEffect` that measures both accessories and forces matching `minWidth` on each side; window `resize` listener re-measures | `display: grid; grid-template-columns: 1fr auto 1fr; align-items: center` (Tailwind: `grid grid-cols-[1fr_auto_1fr] items-center`). Title is pinned to column 2; the `1fr` side tracks always balance it. No JS, no resize listener. |
| Slot wrapper styling | Manual `marginLeft` / `marginRight` / `width: calc(...)` set per-render based on measurements                                                                                          | Static Tailwind utilities: `col-start-1 justify-self-start` (start), `col-start-2 col-end-3` (title), `col-start-3 justify-self-end` (end)                                                                                           |
| Re-render on resize  | `useState`-driven re-renders whenever the window or children change                                                                                                                    | None — layout is fully declarative                                                                                                                                                                                                   |

The visual output is identical for the documented use cases (modal headers, popover headers, page headers). The only edge case where behavior diverges is when a single accessory is much wider than the column it occupies — in the legacy version the title was forced to compress; in the grid version the title stays centered and the accessory column grows to its content (the `1fr` side track still matches its sibling).

##### Props and Behavior Mapping

| Extension API                                                | Design System API                                                              | Change Type | Notes                                                                                                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `children?: ReactNode`                                       | `children?: ReactNode`                                                         | unchanged   | rendered in the centered grid column                                                                                                 |
| `startAccessory?: ReactNode`                                 | `startAccessory?: ReactNode`                                                   | unchanged   | rendered in the start column                                                                                                         |
| `endAccessory?: ReactNode`                                   | `endAccessory?: ReactNode`                                                     | unchanged   | rendered in the end column                                                                                                           |
| `childrenWrapperProps?: BoxProps<'div'>`                     | `childrenWrapperProps?: Omit<BoxProps, 'children'>` (with `data-*` index sig.) | shape       | now bound to MMDS `BoxProps`; `className` is merged via `twMerge` (consumer utilities can override grid placement when needed).      |
| `startAccessoryWrapperProps?: BoxProps<'div'>`               | `startAccessoryWrapperProps?: Omit<BoxProps, 'children'>` (with `data-*`)      | shape       | same shape change as `childrenWrapperProps`.                                                                                         |
| `endAccessoryWrapperProps?: BoxProps<'div'>`                 | `endAccessoryWrapperProps?: Omit<BoxProps, 'children'>` (with `data-*`)        | shape       | same shape change.                                                                                                                   |
| `className?: string`                                         | `className?: string`                                                           | unchanged   | applied to the grid container; merged via `twMerge`                                                                                  |
| Polymorphic `as` / `PolymorphicComponentPropWithRef<C, ...>` | removed                                                                        | removed     | always renders `<div>`. Wrap or compose if you need a different element.                                                             |
| Box style-utility props on the root (`marginBottom`, …)      | removed from public API                                                        | removed     | the root is no longer a polymorphic Box. Use `className` with Tailwind utilities (e.g. `className="mb-4"`) for layout overrides.     |
| `mm-header-base` SCSS class hook                             | removed                                                                        | removed     | no SCSS rule referenced this class — only the legacy test asserted it. Use `className` to customize the root via Tailwind utilities. |

#### Migration Examples

##### Before (Extension)

```tsx
import { HeaderBase } from '../../component-library';

// Default usage
<HeaderBase
  startAccessory={<BackButton />}
  endAccessory={<CloseButton />}
>
  <Title>Page title</Title>
</HeaderBase>

// Customize the root via Box utility props
<HeaderBase marginBottom={4} alignItems={AlignItems.center}>
  <Title>Page title</Title>
</HeaderBase>
```

##### After (Design System)

```tsx
import { HeaderBase } from '@metamask/design-system-react';

// Default usage — unchanged
<HeaderBase
  startAccessory={<BackButton />}
  endAccessory={<CloseButton />}
>
  <Title>Page title</Title>
</HeaderBase>

// Root overrides move into className (Box utility props on the root are removed)
<HeaderBase className="mb-4 items-center">
  <Title>Page title</Title>
</HeaderBase>
```

For typical call sites — for example `ui/components/multichain/pages/page/components/header/header.tsx` (direct external consumer) and the internal `popover-header.tsx` / `modal-header.tsx` consumers within the legacy `component-library` (verified via fresh grep) — the typical churn is:

1. Swap the import path.
2. Move any root-level Box utility props (`marginBottom`, `alignItems`, etc.) onto `className` (`mb-4`, `items-center`, …).

#### API Differences

- `HeaderBase` always renders a `<div>` and forwards arbitrary HTML attributes (`id`, `role`, `data-*`, `aria-*`, `ref`) to it. The `mm-header-base` class hook is gone — use `className` to apply Tailwind utilities.
- The `useRef` / `useEffect` / `useState` / `window.addEventListener('resize', …)` measurement code is gone. There are no longer any layout side effects on mount or window resize.
- Slot wrappers (`childrenWrapperProps` / `startAccessoryWrapperProps` / `endAccessoryWrapperProps`) ship their grid-placement utilities (`col-start-*`, `justify-self-*`) as defaults; consumer `className` is merged via `twMerge` so it can override placement when needed.

### HelpText Component

The extension `help-text` component maps to `HelpText` in the design system. It still renders a `<p>` with the `body-sm` typography and applies a severity-based text color, but the polymorphic `as` API is replaced with the design-system `asChild` pattern, and the `HelpTextSeverity` enum is now a const object (ADR-0003) sourced from `@metamask/design-system-shared`.

#### Breaking Changes

##### Imports and Enum Source

| Extension Pattern                                                  | Design System Migration                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `import { HelpText } from '../../component-library/help-text'`     | `import { HelpText } from '@metamask/design-system-react'`         |
| `import { HelpTextSeverity } from '.../help-text/help-text.types'` | `import { HelpTextSeverity } from '@metamask/design-system-react'` |

##### Severity Values

`HelpTextSeverity` is now a const object instead of a TypeScript enum, but member names and string values are unchanged.

| Extension Value                          | Design System Value        |
| ---------------------------------------- | -------------------------- |
| `HelpTextSeverity.Info` (`'info'`)       | `HelpTextSeverity.Info`    |
| `HelpTextSeverity.Success` (`'success'`) | `HelpTextSeverity.Success` |
| `HelpTextSeverity.Warning` (`'warning'`) | `HelpTextSeverity.Warning` |
| `HelpTextSeverity.Danger` (`'danger'`)   | `HelpTextSeverity.Danger`  |

##### Removed / No Direct Equivalent

| Legacy Extension API                                              | MMDS Status                                   | Migration                                                                            |
| ----------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| Polymorphic `as` prop / `PolymorphicRef` typing                   | Removed                                       | Use `asChild` to render a different element (see example below)                      |
| Implicit `as="div"` switch when `children` is a non-string node   | Removed — always renders `<p>`                | Use `asChild` with a `<div>` wrapper when content includes block-level children      |
| `Severity` union (extension-wide) accepted by the `severity` prop | Removed — only `HelpTextSeverity` is accepted | Map any `Severity.*` value to the matching `HelpTextSeverity.*` member               |
| Forwarded `ref` to the underlying element                         | Not supported (matches `Text`)                | If a ref is required, render a parent element via `asChild` and attach the ref there |
| `mm-help-text` CSS class hook                                     | Removed                                       | Apply Tailwind utilities through `className`                                         |

##### Type Changes

| Legacy Extension API                        | MMDS API                                              | Notes                                                |
| ------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| `severity?: HelpTextSeverity \| Severity`   | `severity?: HelpTextSeverity`                         | Single source of truth; const object (ADR-0003/0004) |
| `color?: TextColor` (extension `TextColor`) | `color?: TextColor` (shared `TextColor` const object) | PascalCase members (e.g. `TextColor.ErrorDefault`)   |
| `children: string \| ReactNodeLike`         | `children: ReactNode`                                 | Standard React typing                                |

#### Migration Example

##### Before (Extension)

```tsx
import { HelpText, HelpTextSeverity } from '../../component-library';

<HelpText severity={HelpTextSeverity.Danger}>Address is invalid</HelpText>;

// Implicit `as="div"` when children was an object node
<HelpText>
  <span>Complex</span> content
</HelpText>;
```

##### After (Design System)

```tsx
import { HelpText, HelpTextSeverity } from '@metamask/design-system-react';

<HelpText severity={HelpTextSeverity.Danger}>Address is invalid</HelpText>;

// Render as a div explicitly via `asChild`
<HelpText asChild>
  <div>
    <span>Complex</span> content
  </div>
</HelpText>;
```

### Label Component

The extension `label` component maps to `Label` in the design system. The runtime API stays the same for typical usage — `<Label htmlFor="...">…</Label>` — but the component drops the polymorphic Box surface and the legacy SCSS class hooks in favor of a `<Text asChild>` composition that renders a semantic `<label>` element with Tailwind utilities.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                           | Design System Migration                                           |
| ----------------------------------------------------------- | ----------------------------------------------------------------- |
| `import { Label } from '../../component-library'`           | `import { Label } from '@metamask/design-system-react'`           |
| `import type { LabelProps } from '../../component-library'` | `import type { LabelProps } from '@metamask/design-system-react'` |

##### Props and Behavior Mapping

| Extension API                                                                                 | Design System API                                                             | Change Type | Notes                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `htmlFor?: string`                                                                            | `htmlFor?: string`                                                            | unchanged   | forwarded to the underlying `<label>` element as the `for` attribute                                                                                                            |
| `children: string \| React.ReactNode`                                                         | `children: ReactNode`                                                         | unchanged   | label content                                                                                                                                                                   |
| `className?: string`                                                                          | `className?: string`                                                          | unchanged   | merged with default Tailwind classes via `twMerge`                                                                                                                              |
| `'data-testid'?: string`                                                                      | inherited from `ComponentProps<'label'>`                                      | unchanged   | any `data-*`/`aria-*` HTML attribute is forwarded to the `<label>` element                                                                                                      |
| Polymorphic `as` / `LabelProps<C extends React.ElementType>` typing                           | removed                                                                       | removed     | always renders a semantic `<label>` element. If you need a different element, wrap or compose.                                                                                  |
| Box / Text style-utility props (`color`, `fontWeight`, `variant`, `display`, `alignItems`, …) | overrides via `Text` props (`color`, `fontWeight`, `variant`, `textAlign`, …) | changed     | `Label` is composed from `Text`, so `Text` props remain available as overrides. The component owns its layout (`inline-flex items-center`); use `className` to override layout. |
| `mm-label` / `mm-label--html-for` SCSS class hooks                                            | removed                                                                       | removed     | use `className` and Tailwind utilities to customize the label                                                                                                                   |

##### Default and Behavior Changes

| Concern        | Extension Behavior                                                                     | Design System Behavior                                                                   |
| -------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Element        | `<Text as="label">` → `<label>`                                                        | `<Text asChild><label>…</label></Text>` → still a semantic `<label>`                     |
| Default layout | `Display.InlineFlex` + `AlignItems.center` Box props                                   | `inline-flex items-center` Tailwind utilities                                            |
| Typography     | `TextVariant.bodyMd` + `FontWeight.Medium`                                             | `TextVariant.BodyMd` + `FontWeight.Medium` (same defaults; overridable via `Text` props) |
| Cursor         | `cursor: pointer` applied via `mm-label--html-for` SCSS modifier when `htmlFor` is set | `cursor-pointer` Tailwind utility applied conditionally when `htmlFor` is set            |

#### Migration Example

##### Before (Extension)

```tsx
import { Label } from '../../component-library';

<Label htmlFor="email-input">Email address</Label>;
```

##### After (Design System)

```tsx
import { Label } from '@metamask/design-system-react';

<Label htmlFor="email-input">Email address</Label>;
```

For typical call sites — for example `ui/components/component-library/form-text-field/form-text-field.tsx`, `ui/components/component-library/file-uploader/file-uploader.tsx`, and `ui/pages/deep-link/deep-link.tsx` (verified via fresh grep) — the only change is the import path; the JSX stays identical.

#### API Differences

- `Label` no longer composes Box/Text's polymorphic `as` API. It always renders a `<label>` element and forwards arbitrary HTML attributes (`id`, `data-*`, `aria-*`, `ref`) to it.
- The `asChild` prop is owned by the component and is intentionally excluded from the public API.
- One-off styling that previously used Box/Text utility props (e.g. `display={Display.Block}`) should now use `className` with the equivalent Tailwind utility (e.g. `className="block"`). Typography overrides (`color`, `fontWeight`, `variant`, `textAlign`) remain available via the inherited `Text` props.

### Modal Component

The extension `modal` component maps to `Modal` in the design system. The behavioral contract — portal into `document.body` while `isOpen`, unmount on close, expose configuration to descendants via `useModalContext` — is preserved 1:1. The migration is a near-zero-effort import-path swap for typical consumers.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                           | Design System Migration                                           |
| ----------------------------------------------------------- | ----------------------------------------------------------------- |
| `import { Modal } from '../../component-library'`           | `import { Modal } from '@metamask/design-system-react'`           |
| `import { useModalContext } from '../../component-library'` | `import { useModalContext } from '@metamask/design-system-react'` |
| `import type { ModalProps } from '../../component-library'` | `import type { ModalProps } from '@metamask/design-system-react'` |

##### Props and Behavior Mapping

| Extension API                                   | Design System API                               | Change Type | Notes                                                                                                                                                                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen: boolean`                               | `isOpen: boolean`                               | unchanged   | gates portal mount/unmount                                                                                                                                                                    |
| `onClose: () => void`                           | `onClose: () => void`                           | unchanged   | exposed to descendants via `useModalContext().onClose`                                                                                                                                        |
| `children: ReactNode`                           | `children: ReactNode`                           | unchanged   | typically composed of `ModalOverlay` and `ModalContent`                                                                                                                                       |
| `isClosedOnOutsideClick?: boolean`              | `isClosedOnOutsideClick?: boolean`              | unchanged   | default `true`; consumed by `ModalContent` via `useModalContext`                                                                                                                              |
| `isClosedOnEscapeKey?: boolean`                 | `isClosedOnEscapeKey?: boolean`                 | unchanged   | default `true`; consumed by `ModalContent` via `useModalContext`                                                                                                                              |
| `autoFocus?: boolean`                           | `autoFocus?: boolean`                           | unchanged   | default `true`; consumed by `ModalContent` → `ModalFocus`                                                                                                                                     |
| `initialFocusRef?: RefObject<FocusableElement>` | `initialFocusRef?: RefObject<FocusableElement>` | unchanged   | exposed to descendants via context                                                                                                                                                            |
| `finalFocusRef?: RefObject<FocusableElement>`   | `finalFocusRef?: RefObject<FocusableElement>`   | unchanged   | exposed to descendants via context                                                                                                                                                            |
| `restoreFocus?: boolean`                        | `restoreFocus?: boolean`                        | unchanged   | default `false`; ignored when `finalFocusRef` is provided                                                                                                                                     |
| `className?: string`                            | `className?: string`                            | unchanged   | merged with the component's defaults via `twMerge` (the extension used `classnames`).                                                                                                         |
| `extends ModalFocusProps` (interface)           | flat `type ModalProps`                          | shape       | `ModalProps` is no longer an `interface` extending `ModalFocusProps` — it's a flat `type` that inlines the focus-related fields.                                                              |
| `mm-modal` SCSS class hook                      | removed                                         | removed     | the legacy `mm-modal` class is gone. Use `className` and Tailwind utilities to customize the root portal element. No usage outside the legacy `component-library` itself relies on this hook. |

##### `useModalContext` Error Message

The runtime guard for "called outside a `<Modal>` subtree" is preserved, but the error message text is rewritten for clarity:

| Extension                                                                                                     | Design System                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `useModalContext must be used within a ModalProvider, Seems you forgot to wrap the components in "<Modal />"` | `useModalContext must be used within a Modal — make sure the consuming component is rendered inside <Modal />.` |

This only affects code that asserts on the exact error string (rare). The thrown type is still `Error`.

##### Default and Behavior Changes

| Concern                 | Extension Behavior                                                                                                 | Design System Behavior                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Portal target           | `document.body` via `ReactDOM.createPortal`                                                                        | `document.body` via `createPortal` from `react-dom`. Unchanged.              |
| Unmount on close        | Returns `null` when `isOpen` is `false`                                                                            | Returns `null` when `isOpen` is `false`. Unchanged.                          |
| Default behavior config | `isClosedOnOutsideClick`, `isClosedOnEscapeKey`, `autoFocus` default to `true`; `restoreFocus` defaults to `false` | Same defaults, applied internally before populating `ModalContext`.          |
| Context shape           | `Omit<ModalProps, 'children'>`                                                                                     | `Omit<ModalProps, 'children'>` — same shape, exported as `ModalContextType`. |

#### Migration Examples

##### Before (Extension)

```tsx
import { Modal, ModalOverlay, ModalContent } from '../../component-library';

<Modal isOpen={isOpen} onClose={onClose} data-testid="example-modal">
  <ModalOverlay />
  <ModalContent>{/* … */}</ModalContent>
</Modal>;
```

##### After (Design System)

```tsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
} from '@metamask/design-system-react';

// API is identical — only the import path changes.
<Modal isOpen={isOpen} onClose={onClose} data-testid="example-modal">
  <ModalOverlay />
  <ModalContent>{/* … */}</ModalContent>
</Modal>;
```

For typical call sites — for example `ui/components/multichain-accounts/account-remove-modal/account-remove-modal.tsx` (`<Modal onClose={onClose} isOpen={isOpen}>` with default behavior config), `ui/components/app/basic-configuration-modal/basic-configuration-modal.tsx` (`<Modal onClose={closeModal} data-testid="..." isOpen>` forwarding `data-testid` to the root), and `ui/components/app/connections-removed-modal/connections-removed-modal.tsx` (no-op `onClose={() => undefined}`) (verified via fresh grep) — the only change is the import path; the JSX, props, and `data-testid` forwarding stay identical.

#### API Differences

- `Modal` always renders a `<div>` and forwards arbitrary HTML attributes (`id`, `role`, `data-*`, `aria-*`, `ref`) to it. The `mm-modal` class hook is gone — use `className` to apply Tailwind utilities.
- `useModalContext` is now exported from the package barrel (`@metamask/design-system-react`). `ModalContextType` is also exported as a type for consumers building custom subtree integrations.

### ModalContent Component

The extension `modal-content` component maps to `ModalContent` in the design system. The behavioral contract — a centered `<section role="dialog">` with built-in close-on-Escape, close-on-outside-click, focus management via `ModalFocus`, and the standard slide-up entrance animation — is preserved. The polymorphic Box surface and the `mm-modal-content` SCSS class hooks are removed in favor of Tailwind utilities, and the legacy `mm-popover` outside-click escape hatch is replaced by a generic, design-system-agnostic data attribute.

`ModalContent` reads its behavior from `useModalContext`, so it must be rendered inside a `<Modal>` — same as the legacy.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                                  | Design System Migration                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `import { ModalContent } from '../../component-library'`           | `import { ModalContent } from '@metamask/design-system-react'`           |
| `import { ModalContentSize } from '../../component-library'`       | `import { ModalContentSize } from '@metamask/design-system-react'`       |
| `import type { ModalContentProps } from '../../component-library'` | `import type { ModalContentProps } from '@metamask/design-system-react'` |

##### Props and Behavior Mapping

| Extension API                                                | Design System API                                                               | Change Type | Notes                                                                                                                                                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children: ReactNode`                                        | `children: ReactNode`                                                           | unchanged   | rendered inside the `<section role="dialog">`                                                                                                                                     |
| `size?: ModalContentSize` (`Sm`/`Md`/`Lg`)                   | `size?: ModalContentSize` (`Sm`/`Md`/`Lg`)                                      | unchanged   | values and pixel widths preserved (360 / 480 / 720); enum is now a const-object union (ADR-0003), but `ModalContentSize.Sm` etc. still work.                                      |
| `modalDialogProps?: any`                                     | `modalDialogProps?: Omit<BoxProps, 'children'>` (with `data-*` index signature) | shape       | now typed against MMDS `BoxProps`. `className` is still merged via `twMerge` so consumer utilities win over the defaults.                                                         |
| `className?: string`                                         | `className?: string`                                                            | unchanged   | applied to the outer positioning element; merged via `twMerge`                                                                                                                    |
| Polymorphic `as` / `PolymorphicComponentPropWithRef<C, ...>` | removed                                                                         | removed     | always renders `<div>` (outer) + `<section role="dialog">` (inner). If you need a different element, wrap or compose.                                                             |
| Box style-utility props on the outer (`alignItems`, …)       | removed from public API                                                         | removed     | the outer container is no longer a polymorphic Box. Use `className` with Tailwind utilities for layout overrides.                                                                 |
| `mm-modal-content` / `mm-modal-content__dialog` SCSS hooks   | removed                                                                         | removed     | the slide-up animation moved into the `motion-safe:animate-slide-up` Tailwind utility on the inner dialog (added to `@metamask/design-system-tailwind-preset` in this migration). |

##### Popover-in-Modal Outside-Click Hand-off

The legacy `ModalContent` short-circuited its outside-click handler via a hard-coded `event.target.closest('.mm-popover')` check so that interacting with a portal-rendered Popover inside a Modal would not close the modal. That coupling is design-system-agnostic in MMDS:

| Extension                                                  | Design System                                                                                                                    |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Hard-coded `.mm-popover` class check inside `ModalContent` | Generic data-attribute opt-out: clicks whose target's `closest('[data-mm-modal-ignore-outside-click]')` is non-null are ignored. |

Floating UI primitives that render as siblings to the Modal portal (Popover, Tooltip, Select dropdown, …) opt out by setting the attribute on their root element. The constant `MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR` (= `'data-mm-modal-ignore-outside-click'`) is exported from the package for type-safe usage.

```tsx
import {
  Box,
  MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR,
} from '@metamask/design-system-react';

<Box {...{ [MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR]: '' }}>
  {popoverContent}
</Box>;
```

**Required follow-up in MetaMask Extension:** the legacy `ui/components/component-library/popover/popover.tsx` adds the `'mm-popover'` class to its root Box. To preserve the existing Popover-inside-Modal interaction across the extension's 13+ `Popover` + `Modal` call sites (verified via fresh grep — for example `ui/components/multichain/network-list-menu/network-list-menu.tsx`, `ui/pages/confirmations/components/send/network-filter/network-filter.tsx`, `ui/components/app/cancel-speedup-popover/cancel-speedup-popover.js`, `ui/pages/confirmations/components/edit-gas-popover/edit-gas-popover.component.js`, `ui/components/app/terms-of-use-popup/terms-of-use-popup.js`), add the data attribute to the same Box:

```tsx
// ui/components/component-library/popover/popover.tsx (legacy extension)
import { MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR } from '@metamask/design-system-react';

<Box
  className={classnames('mm-popover', /* … */)}
  {...{ [MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR]: '' }}
  /* … */
>
```

This is a one-line addition; the rest of the legacy `Popover` stays unchanged. After the extension switches its `ModalContent` import to `@metamask/design-system-react`, every Popover-inside-Modal flow keeps working.

##### Default and Behavior Changes

| Concern                    | Extension Behavior                                                                                                 | Design System Behavior                                                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Outer positioning          | `position: fixed; left: 0; top: 0; z-index: $modal-z-index (1050); width/height: 100vw/100vh` via SCSS + Box props | `fixed inset-0 z-[1050]` Tailwind utilities                                                                                                                    |
| Outer padding (responsive) | `paddingTop/Bottom={[4, 8, 12]}` Box responsive arrays + `@media (max-height: 475px) { padding: 8px }`             | `p-4 sm:py-8 md:py-12 [@media(max-height:475px)]:p-2` Tailwind utilities (responsive arrays in Box are unsupported in MMDS — use Tailwind prefixes).           |
| Inner dialog sizing        | `max-width: var(--size, 360px)` per `--size-{sm,md,lg}` SCSS modifier                                              | `max-w-[360px]` / `max-w-[480px]` / `max-w-[720px]` Tailwind utilities, applied via `TWCLASSMAP_MODAL_CONTENT_SIZE`                                            |
| Inner dialog entrance      | 400ms `cubic-bezier(0.3, 0.8, 0.3, 1)` slide-up + fade keyframe via SCSS, gated by `prefers-reduced-motion`        | New `motion-safe:animate-slide-up` Tailwind utility (matches `AnimationDuration.Slowly` from `@metamask/design-tokens`); reduced-motion users get no animation |

#### Migration Examples

##### Before (Extension)

```tsx
import { ModalContent } from '../../component-library';

// Default usage
<ModalContent>{/* ModalHeader + ModalBody + ModalFooter */}</ModalContent>

// Customize the outer container (centered content)
<ModalContent alignItems={AlignItems.center}>{/* … */}</ModalContent>

// Customize the inner dialog
<ModalContent
  modalDialogProps={{
    display: Display.Flex,
    flexDirection: FlexDirection.Column,
  }}
>
  {/* … */}
</ModalContent>
```

##### After (Design System)

```tsx
import { ModalContent } from '@metamask/design-system-react';

// Default usage — unchanged
<ModalContent>{/* ModalHeader + ModalBody + ModalFooter */}</ModalContent>

// Outer overrides move into className
<ModalContent className="items-center">{/* … */}</ModalContent>

// Inner dialog overrides go through modalDialogProps
<ModalContent
  modalDialogProps={{
    flexDirection: BoxFlexDirection.Column,
  }}
>
  {/* … */}
</ModalContent>
```

For typical call sites — for example `ui/components/multichain-accounts/account-remove-modal/account-remove-modal.tsx` (bare `<ModalContent>`), `ui/components/app/connections-removed-modal/connections-removed-modal.tsx` (`<ModalContent alignItems={AlignItems.center}>` → `className="items-center"`), and `ui/components/app/basic-configuration-modal/basic-configuration-modal.tsx` (`modalDialogProps={{ display: Display.Flex, flexDirection: FlexDirection.Column }}` → drop `display` since `modalDialogProps` is already a Box and uses Tailwind flex utilities by default; replace `flexDirection` with `BoxFlexDirection.Column`) (verified via fresh grep) — the typical churn is:

1. Swap the import path.
2. Move any outer Box utility props onto `className` (e.g. `alignItems={AlignItems.center}` → `className="items-center"`).
3. Update `modalDialogProps` enum values to MMDS shapes (`Display.Flex` → `BoxDisplay.Flex` is implicit since MMDS Box is already flex when `flexDirection` is set; `FlexDirection.Column` → `BoxFlexDirection.Column`).
4. If the call site embeds a `Popover` from the legacy extension `component-library`, ensure that `Popover` adds the `data-mm-modal-ignore-outside-click` attribute (one-line change in `popover.tsx`).

#### Deprecated `ModalContent`

The extension exports a separate `deprecated/` `ModalContent` from `ui/components/component-library/modal-content/deprecated`. **It is not migrated.** Consumers still importing from `'../../component-library/modal-content/deprecated'` (e.g. `ui/components/app/snaps/snap-remove-warning/snap-remove-warning.js`, `ui/components/app/srp-quiz-modal/SRPQuiz/SRPQuiz.tsx`, `ui/components/multichain/account-menu/account-menu.tsx`) need to migrate to the current `ModalContent` first, then switch to `@metamask/design-system-react`. The deprecated path predates the current `padding={4}` → `paddingTop={4} paddingBottom={4}` split on the dialog and the body's own padding ownership.

#### API Differences

- `ModalContent` always renders a `<div>` outer + `<section role="dialog" aria-modal="true">` inner. Forwards arbitrary HTML attributes (`id`, `role`, `data-*`, `aria-*`, `ref`) to the outer `<div>`.
- `ModalContentSize` is now a const-object union (ADR-0003) but the value identifiers and pixel widths are preserved.
- `MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR` is exported from the package barrel for type-safe use of the outside-click opt-out attribute.

### ModalBody Component

The extension `modal-body` component maps to `ModalBody` in the design system. The default visual contract (horizontal padding, scrollable container) is preserved, but the polymorphic Box surface is removed and a keyboard-accessibility default is added.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                               | Design System Migration                                               |
| --------------------------------------------------------------- | --------------------------------------------------------------------- |
| `import { ModalBody } from '../../component-library'`           | `import { ModalBody } from '@metamask/design-system-react'`           |
| `import type { ModalBodyProps } from '../../component-library'` | `import type { ModalBodyProps } from '@metamask/design-system-react'` |

##### Props and Behavior Mapping

| Extension API                                                                                 | Design System API       | Change Type | Notes                                                                                                                          |
| --------------------------------------------------------------------------------------------- | ----------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `children?: ReactNode`                                                                        | `children?: ReactNode`  | unchanged   | rendered inside the scrollable container                                                                                       |
| `className?: string`                                                                          | `className?: string`    | unchanged   | merged with default Tailwind classes via `twMerge`                                                                             |
| Polymorphic `as` / `PolymorphicComponentPropWithRef<C, ...>`                                  | removed                 | removed     | always renders a `<div>`. If you need a different element, wrap or compose.                                                    |
| Box style-utility props (`paddingLeft`, `paddingRight`, `flexDirection`, `gap`, `display`, …) | removed from public API | removed     | use `className` with Tailwind utilities. The default `px-4` remains, applied internally; override with `className="px-0"` etc. |
| `mm-modal-body` SCSS class hook                                                               | removed                 | removed     | use `className` and Tailwind utilities to customize                                                                            |

##### Default and Behavior Changes

| Concern                | Extension Behavior                                                                                  | Design System Behavior                                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Horizontal padding     | `paddingLeft={4} paddingRight={4}` Box props (16px each side)                                       | `paddingHorizontal={4}` applied internally → `px-4`. Override with `className="px-0"` (or another `px-*` utility).                                            |
| Scroll/overflow        | `position: relative; max-height: 100%; overflow-y: auto;` from `.mm-modal-body` SCSS                | Same behavior via `relative max-h-full overflow-y-auto` Tailwind utilities applied internally.                                                                |
| Keyboard accessibility | No default `tabIndex` — scrollable text-only content was not reachable by keyboard for arrow scroll | `tabIndex={0}` applied by default so keyboard users can focus the scrollable region and arrow-scroll. Override with `tabIndex={-1}` if you need to remove it. |

This satisfies the WCAG 2.1.1 "Keyboard" rule for scrollable regions (axe `scrollable-region-focusable`) — modals containing only static text now expose the body as a focusable scroll target out of the box.

#### Migration Examples

##### Before (Extension)

```tsx
import { ModalBody } from '../../component-library';
import { FlexDirection } from '../../../helpers/constants/design-system';

// Default usage
<ModalBody>{description}</ModalBody>

// Customized: remove default horizontal padding, lay out children as a column
<ModalBody
  paddingLeft={0}
  paddingRight={0}
  flexDirection={FlexDirection.Column}
  gap={2}
>
  {options}
</ModalBody>
```

##### After (Design System)

```tsx
import { ModalBody } from '@metamask/design-system-react';

// Default usage — unchanged
<ModalBody>{description}</ModalBody>

// Customized: utility-prop overrides move into className
<ModalBody className="flex flex-col gap-2 px-0">
  {options}
</ModalBody>
```

For typical call sites — for example `ui/components/app/connections-removed-modal/connections-removed-modal.tsx` (bare `<ModalBody>{text}</ModalBody>`) and `ui/components/app/alert-system/alert-modal/alert-modal.tsx` (bare with element children) (verified via fresh grep) — the only change is the import path. Sites that override Box utility props, such as `ui/components/multichain-accounts/add-wallet-modal/add-wallet-modal.tsx` (`paddingLeft={0} paddingRight={0} flexDirection={FlexDirection.Column} gap={2}`), need the `className` translation shown above.

#### API Differences

- `ModalBody` no longer composes Box's polymorphic API. It always renders a `<div>` and forwards arbitrary HTML attributes (`id`, `role`, `data-*`, `aria-*`, `tabIndex`, `ref`) to it.
- `tabIndex={0}` is now the default. Pass `tabIndex={-1}` (or any other value) to override; the consumer's value wins.
- One-off styling that previously used Box utility props should move to Tailwind via `className` (`px-0`, `py-2`, `flex`, `flex-col`, `gap-2`, etc.).

### ModalFocus Component

The extension `modal-focus` component maps to `ModalFocus` in the design system. The runtime API is preserved 1:1 — `initialFocusRef`, `finalFocusRef`, `restoreFocus`, `autoFocus`, and `children` all behave identically. The migration is a pure import-path swap; no consumer-side install step is needed (`react-focus-lock` is now an internal runtime dependency of `@metamask/design-system-react`, not a peer).

`ModalFocus` is the focus-trap primitive used by `ModalContent`, so it must be migrated before any modal-family migration that depends on it.

#### Breaking Changes

##### Import Path

| Extension Pattern                                                                               | Design System Migration                                                 |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `import { ModalFocus } from '../../component-library'`                                          | `import { ModalFocus } from '@metamask/design-system-react'`            |
| `import type { ModalFocusProps } from '../../component-library'`                                | `import type { ModalFocusProps } from '@metamask/design-system-react'`  |
| `import type { FocusableElement } from '../../component-library/modal-focus/modal-focus.types'` | `import type { FocusableElement } from '@metamask/design-system-react'` |

##### Props and Behavior Mapping

| Extension API                                   | Design System API                               | Change Type | Notes                                                   |
| ----------------------------------------------- | ----------------------------------------------- | ----------- | ------------------------------------------------------- |
| `initialFocusRef?: RefObject<FocusableElement>` | `initialFocusRef?: RefObject<FocusableElement>` | unchanged   | element to receive focus on mount                       |
| `finalFocusRef?: RefObject<FocusableElement>`   | `finalFocusRef?: RefObject<FocusableElement>`   | unchanged   | element to receive focus on unmount                     |
| `restoreFocus?: boolean`                        | `restoreFocus?: boolean`                        | unchanged   | ignored when `finalFocusRef` is provided                |
| `autoFocus?: boolean`                           | `autoFocus?: boolean`                           | unchanged   | defaults to `true` (matches `react-focus-lock` default) |
| `children: ReactNode`                           | `children: ReactNode`                           | unchanged   | the subtree to lock focus inside                        |
| `FocusableElement` helper type                  | `FocusableElement` helper type                  | unchanged   | now exported from `@metamask/design-system-react`       |

##### Default and Behavior Changes

| Concern                       | Extension Behavior                                                                | Design System Behavior                                                                                                                    |
| ----------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Underlying focus-trap library | `react-focus-lock` (direct dependency of the extension)                           | `react-focus-lock` is an internal runtime dependency of `@metamask/design-system-react` — consumers do not install or import it directly. |
| ESM/CJS interop               | Falls back through `(ReactFocusLock as any).default ?? ReactFocusLock` internally | Same fallback preserved internally — no consumer-visible difference                                                                       |
| Chakra-derived implementation | Based on `chakra-ui`'s `ModalFocusScope`                                          | Same source pattern, ported as-is                                                                                                         |

#### Migration Examples

##### Before (Extension)

```tsx
import { ModalFocus } from '../../component-library';

// initialFocusRef + restoreFocus
<ModalFocus restoreFocus initialFocusRef={popoverRef}>
  {menuContent}
</ModalFocus>;

// finalFocusRef + autoFocus override
<ModalFocus
  restoreFocus={!finalFocusRef}
  autoFocus={false}
  finalFocusRef={finalFocusRef}
>
  {menuContent}
</ModalFocus>;
```

##### After (Design System)

```tsx
import { ModalFocus } from '@metamask/design-system-react';

// API is identical — only the import path changes
<ModalFocus restoreFocus initialFocusRef={popoverRef}>
  {menuContent}
</ModalFocus>;

<ModalFocus
  restoreFocus={!finalFocusRef}
  autoFocus={false}
  finalFocusRef={finalFocusRef}
>
  {menuContent}
</ModalFocus>;
```

For typical call sites — for example `ui/components/multichain-accounts/multichain-account-menu/multichain-account-menu.tsx`, `ui/components/multichain/account-list-item-menu/account-list-item-menu.js`, and `ui/components/multichain/network-list-item-menu/network-list-item-menu.js` (verified via fresh grep) — the only change is the import path; the JSX and prop usage stay identical.

#### API Differences

- `ModalFocus`'s public API is unchanged. Any consumer that passed only the documented props (`initialFocusRef`, `finalFocusRef`, `restoreFocus`, `autoFocus`, `children`) needs nothing beyond the import-path swap.
- Consumers that imported `FocusableElement` directly from the extension's `modal-focus.types` module should re-import it from the design-system package barrel.

### ModalFooter Component

The extension `modal-footer` component maps to `ModalFooter` in the design system. The behavioral contract — a `<footer>` with up to two action buttons plus an optional slot for inline form controls — is preserved, but the API is reshaped to align with the React Native `BottomSheetFooter`:

- Top-level `onSubmit` / `onCancel` callbacks and `submit` / `cancel` button-prop bags are replaced by `primaryButtonProps` / `secondaryButtonProps` whose click handlers ride along inside the props bag.
- The button variant is **owned by the component** — primary always renders as `ButtonVariant.Primary`, secondary as `ButtonVariant.Secondary`. Consumers cannot override `variant`.
- Layout direction is now an explicit `buttonsAlignment` prop (`Horizontal` default, `Vertical` opt-in) instead of the legacy `flex-wrap` + `Container.maxWidth` arrangement.
- The polymorphic Box surface, the `Container` dependency, the `useI18nContext` coupling, and the `mm-modal-footer*` SCSS class hooks are all removed.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                                 | Design System Migration                                                 |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `import { ModalFooter } from '../../component-library'`           | `import { ModalFooter } from '@metamask/design-system-react'`           |
| `import type { ModalFooterProps } from '../../component-library'` | `import type { ModalFooterProps } from '@metamask/design-system-react'` |

##### Props and Behavior Mapping

| Extension API                                                                               | Design System API                                                                     | Change Type        | Notes                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onSubmit?: () => void`                                                                     | merged into `primaryButtonProps.onClick`                                              | renamed            | the click handler now travels with the rest of the primary-button config inside `primaryButtonProps`. The presence of `primaryButtonProps` is what causes the primary button to render.                                                                |
| `onCancel?: () => void`                                                                     | merged into `secondaryButtonProps.onClick`                                            | renamed            | same as above for the secondary button.                                                                                                                                                                                                                |
| `submitButtonProps?: ButtonProps<'button'>`                                                 | `primaryButtonProps?: Omit<ButtonProps, 'variant'>` (with `data-*` index signature)   | renamed + reshaped | renamed for symmetry with React Native `BottomSheetFooter`. `variant` is owned by the component (always `Primary`); `children` is the source of truth for the label. The extension's implicit `t('confirm')` default is gone.                          |
| `cancelButtonProps?: ButtonProps<'button'>`                                                 | `secondaryButtonProps?: Omit<ButtonProps, 'variant'>` (with `data-*` index signature) | renamed + reshaped | same as above; renders with `Secondary` variant.                                                                                                                                                                                                       |
| `containerProps?: ContainerProps<'div'>`                                                    | removed; layout direction moved to `buttonsAlignment`                                 | removed            | the `Container.maxWidth` (`Sm` / `Md` / `Lg` ≈ 360 / 480 / 720) is gone. Width is now governed by the surrounding `ModalContent.size`. Custom outer footer styling moves to `className`.                                                               |
| —                                                                                           | `buttonsAlignment?: ButtonsAlignment` (`Horizontal` default, `Vertical` opt-in)       | added              | `Horizontal` lays buttons in a `flex-row` with each button at `flex-1`; `Vertical` lays them in a `flex-col` with each button at `w-full`. Order: secondary → primary in both modes. Mirrors the React Native `BottomSheetFooter` API.                 |
| `children?: ReactNode`                                                                      | `children?: ReactNode`                                                                | unchanged          | rendered above the action button row.                                                                                                                                                                                                                  |
| `className?: string`                                                                        | `className?: string`                                                                  | unchanged          | merged with default Tailwind classes via `twMerge`.                                                                                                                                                                                                    |
| Polymorphic `as` / `PolymorphicComponentPropWithRef<C, ...>`                                | removed                                                                               | removed            | always renders a `<footer>`. If you need a different element, wrap or compose.                                                                                                                                                                         |
| Box style-utility props (`paddingLeft`, `paddingRight`, `paddingTop`, `backgroundColor`, …) | removed from public API                                                               | removed            | use `className` with Tailwind utilities. The default `px-4 pt-4` remains, applied internally; override with `className="px-0 pt-2"` etc.                                                                                                               |
| `mm-modal-footer` and `mm-modal-footer__button` SCSS class hooks                            | removed                                                                               | removed            | the per-button `flex: 1 0 auto` is replaced by the `buttonsAlignment`-driven utilities (`flex-1` horizontal, `w-full` vertical), applied internally to each `Button`. Customize via `primaryButtonProps.className` / `secondaryButtonProps.className`. |

##### Variant Ownership

`primaryButtonProps` and `secondaryButtonProps` are typed as `Omit<ButtonProps, 'variant'>`. The component sets `variant={ButtonVariant.Primary}` / `ButtonVariant.Secondary` after the spread, so even if `variant` were passed it would be overridden — but the type forbids it, surfacing the contract at compile time. This matches React Native `BottomSheetFooter` and prevents consumers from partially bypassing the footer's button semantics.

##### i18n Decoupling

The extension auto-defaulted button labels to `t('confirm')` and `t('cancel')` via `useI18nContext`. The design system **does not** pull strings from any translation context, and there is **no** internal English fallback. Pass localized labels explicitly through `primaryButtonProps.children` / `secondaryButtonProps.children`:

```tsx
<ModalFooter
  primaryButtonProps={{ children: t('confirm'), onClick: handleSubmit }}
  secondaryButtonProps={{ children: t('cancel'), onClick: handleClose }}
/>
```

##### Button API Differences

`primaryButtonProps` and `secondaryButtonProps` now accept the MMDS `ButtonProps` shape (minus `variant`). The most common renames for migrating consumers:

| Extension Button Prop | Design System Button Prop | Notes                                           |
| --------------------- | ------------------------- | ----------------------------------------------- |
| `danger: true`        | `isDanger: true`          | renamed; matches the broader MMDS Button rename |
| `disabled`            | `isDisabled`              | renamed                                         |
| `loading`             | `isLoading`               | renamed                                         |
| `block`               | `isFullWidth`             | renamed                                         |

See the [Button Component](#button-component) migration entry for the full mapping.

#### Migration Examples

##### Before (Extension)

```tsx
import { ModalFooter } from '../../component-library';

// Default labels via useI18nContext + destructive submit
<ModalFooter
  onCancel={onClose}
  onSubmit={onSubmit}
  submitButtonProps={{
    children: t('remove'),
    danger: true,
  }}
/>

// Container max-width override via the Container enum
<ModalFooter
  onSubmit={onSubmit}
  submitButtonProps={{ children: t('confirm') }}
  containerProps={{ maxWidth: ContainerMaxWidth.Md }}
/>

// Custom child content with a "do not show again" checkbox
<ModalFooter onSubmit={onSubmit} onCancel={onClose}>
  <Checkbox
    isChecked={dontShowAgain}
    onChange={() => setDontShowAgain(!dontShowAgain)}
    label={t('dontShowAgain')}
  />
</ModalFooter>
```

##### After (Design System)

```tsx
import { ModalFooter } from '@metamask/design-system-react';

// Click handlers ride inside the prop bags; danger -> isDanger.
// Variant is owned by the component (Primary / Secondary).
<ModalFooter
  primaryButtonProps={{
    children: t('remove'),
    isDanger: true,
    onClick: onSubmit,
  }}
  secondaryButtonProps={{
    children: t('cancel'),
    onClick: onClose,
  }}
/>

// `containerProps.maxWidth` is gone — width is governed by the surrounding
// `ModalContent.size`. Use `buttonsAlignment` to switch to a stacked button
// row when needed.
<ModalFooter
  buttonsAlignment={ButtonsAlignment.Vertical}
  primaryButtonProps={{ children: t('confirm'), onClick: onSubmit }}
/>

// Custom child content + button row — children stay above buttons.
<ModalFooter
  primaryButtonProps={{ children: t('confirm'), onClick: onSubmit }}
  secondaryButtonProps={{ children: t('cancel'), onClick: onClose }}
>
  <Checkbox
    id="dont-show-again"
    isSelected={dontShowAgain}
    onChange={() => setDontShowAgain(!dontShowAgain)}
    label={t('dontShowAgain')}
  />
</ModalFooter>
```

For typical call sites — for example `ui/components/multichain-accounts/account-remove-modal/account-remove-modal.tsx` (uses `submitButtonProps={{ children: t('remove'), danger: true }}` and the i18n-defaulted cancel button), `ui/components/app/snaps/snap-privacy-warning/snap-privacy-warning.js` (already passes `submitButtonProps.children` and `cancelButtonProps.children` explicitly), and `ui/components/app/connections-removed-modal/connections-removed-modal.tsx` (bypasses the built-in buttons by passing a custom `<Button>` as children) (verified via fresh grep) — the typical churn is:

1. Swap the import path.
2. Rename `submitButtonProps` → `primaryButtonProps`, `cancelButtonProps` → `secondaryButtonProps`.
3. Move `onSubmit` / `onCancel` into the corresponding `*ButtonProps.onClick`.
4. Add `secondaryButtonProps={{ children: t('cancel'), onClick: onClose }}` to any `ModalFooter` that relied on the implicit `t('cancel')` default.
5. Rename `danger` → `isDanger` (and any other extension Button → MMDS Button prop renames) inside the button-prop bags. Drop any explicit `variant` — the component owns it.
6. If the call site set `containerProps.maxWidth`, drop it; width is now governed by `ModalContent.size`. If the call site used `containerProps` for layout direction, switch to `buttonsAlignment={ButtonsAlignment.Vertical}` if a stacked row is desired.

#### API Differences

- `ModalFooter` no longer composes Box's polymorphic API. It always renders a `<footer>` and forwards arbitrary HTML attributes (`id`, `role`, `data-*`, `aria-*`, `ref`) to it.
- `ModalFooter` is i18n-agnostic — there is no `useI18nContext` integration and no internal English fallback. Consumers always pass labels via `primaryButtonProps.children` / `secondaryButtonProps.children`.
- The component **owns** the button variant via `Omit<ButtonProps, 'variant'>` on the prop bags. Consumers cannot pass `variant`; the API surfaces this at compile time. This mirrors the React Native `BottomSheetFooter` and is the recommended footer contract going forward.
- Layout direction is configured via `buttonsAlignment` (`Horizontal` default, `Vertical` opt-in). The legacy `Container.maxWidth` enum is gone — width comes from the surrounding `ModalContent.size`.

### ModalOverlay Component

The extension `modal-overlay` component maps to `ModalOverlay` in the design system. The runtime API stays the same for typical usage — `<ModalOverlay />` with optional `onClick` and `className` — but the component drops the polymorphic Box surface and the legacy SCSS class hook in favor of Tailwind utilities and a token-driven fade-in animation.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                                  | Design System Migration                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `import { ModalOverlay } from '../../component-library'`           | `import { ModalOverlay } from '@metamask/design-system-react'`           |
| `import type { ModalOverlayProps } from '../../component-library'` | `import type { ModalOverlayProps } from '@metamask/design-system-react'` |

##### Props and Behavior Mapping

| Extension API                                                       | Design System API                                       | Change Type | Notes                                                                                                                                              |
| ------------------------------------------------------------------- | ------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onClick?: (event: MouseEvent<HTMLDivElement>) => void`             | `onClick?: (event: MouseEvent<HTMLDivElement>) => void` | unchanged   | called when the overlay is clicked                                                                                                                 |
| `className?: string`                                                | `className?: string`                                    | unchanged   | merged with default Tailwind classes via `twMerge`                                                                                                 |
| Polymorphic `as` / `PolymorphicComponentPropWithRef<C, ...>` typing | removed                                                 | removed     | always renders a `<div>`. If you need a different element, wrap or compose.                                                                        |
| Box style-utility props (`backgroundColor`, `width`, `height`, …)   | removed from public API                                 | removed     | the overlay renders a fixed full-viewport surface with `BoxBackgroundColor.OverlayDefault`. Override via `className` if a one-off tweak is needed. |
| `mm-modal-overlay` SCSS class hook                                  | removed                                                 | removed     | use `className` and Tailwind utilities to customize the overlay surface                                                                            |
| `aria-hidden="true"`                                                | `aria-hidden="true"`                                    | unchanged   | still applied by default                                                                                                                           |

##### Default and Behavior Changes

| Concern         | Extension Behavior                                                                                   | Design System Behavior                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Positioning     | `position: fixed; inset: 0; z-index: $modal-z-index (1050)` from SCSS                                | `fixed inset-0 z-[1050]` Tailwind utilities                                                                                                                                                           |
| Sizing          | `width: 100%; height: 100%` via `BlockSize.Full` Box props                                           | full viewport via `inset-0` (no separate width/height props)                                                                                                                                          |
| Background      | `BackgroundColor.overlayDefault` Box prop                                                            | `BoxBackgroundColor.OverlayDefault` applied internally; `className` to override                                                                                                                       |
| Mount animation | 250ms linear opacity fade-in via SCSS `@keyframes`, gated by `prefers-reduced-motion: no-preference` | 300ms linear opacity fade-in via the new `motion-safe:animate-fade-in` Tailwind utility (matches `AnimationDuration.Regularly` from `@metamask/design-tokens`); reduced-motion users get no animation |

#### Migration Example

##### Before (Extension)

```tsx
import { ModalOverlay } from '../../component-library';

<ModalOverlay onClick={handleClose} />;
```

##### After (Design System)

```tsx
import { ModalOverlay } from '@metamask/design-system-react';

<ModalOverlay onClick={handleClose} />;
```

For typical call sites — for example `ui/components/multichain/network-list-menu/network-list-menu.tsx`, `ui/components/multichain/edit-accounts-modal/edit-accounts-modal.tsx`, and `ui/components/multichain/funding-method-modal/funding-method-modal.tsx` (verified via fresh grep) — the only change is the import path; the JSX stays identical.

#### API Differences

- `ModalOverlay` no longer composes Box's polymorphic API. It always renders a `<div>` and forwards arbitrary HTML attributes (`id`, `role`, `data-*`, `aria-*`, `ref`) to it.
- One-off styling that previously used Box utility props (e.g. `backgroundColor={BackgroundColor.overlayAlternative}`) should now use `className` with the equivalent Tailwind utility (e.g. `className="bg-overlay-alternative"`).

### SensitiveText Component

The extension `sensitive-text` component maps directly to `SensitiveText` in the design system. The public API (`isHidden`, `length`, `children`, plus inherited `Text` props) is unchanged — only the import path moves.

`SensitiveTextLength` is now sourced from `@metamask/design-system-shared` and re-exported from both `@metamask/design-system-react` and `@metamask/design-system-react-native`, so the same const object can be used across web and native consumers.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared style-utility migration patterns.

#### Import Path

| Extension Pattern                                               | Design System Migration                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `import { SensitiveText } from '../../component-library'`       | `import { SensitiveText } from '@metamask/design-system-react'`           |
| `import { SensitiveTextLength } from '../../component-library'` | `import { SensitiveTextLength } from '@metamask/design-system-react'`     |
| `import type { SensitiveTextProps } from '...'`                 | `import type { SensitiveTextProps } from '@metamask/design-system-react'` |

#### Props

| Extension Prop | Design System Prop | Change Type | Notes                                                                            |
| -------------- | ------------------ | ----------- | -------------------------------------------------------------------------------- |
| `isHidden`     | `isHidden`         | unchanged   | Defaults to `false`.                                                             |
| `length`       | `length`           | unchanged   | Accepts `SensitiveTextLength` or a custom numeric string (e.g. `"15"`).          |
| `children`     | `children`         | unchanged   | The text content to display or hide.                                             |
| `ref`          | removed            | removed     | The new component is a function component and does not forward a ref to the DOM. |

All other `Text` props (`variant`, `color`, `fontWeight`, `className`, `style`, etc.) continue to be forwarded to the underlying `Text`.

#### Behavior

- Invalid `length` values still fall back to `SensitiveTextLength.Short` and log a `console.warn`, matching the extension behavior.
- The hidden representation continues to use the bullet character (`•`).

#### Migration Example

##### Before (Extension)

```tsx
import { SensitiveText, SensitiveTextLength } from '../../component-library';

<SensitiveText isHidden length={SensitiveTextLength.Medium}>
  $1,234.56
</SensitiveText>;
```

##### After (Design System)

```tsx
import {
  SensitiveText,
  SensitiveTextLength,
} from '@metamask/design-system-react';

<SensitiveText isHidden length={SensitiveTextLength.Medium}>
  $1,234.56
</SensitiveText>;
```

### Skeleton Component

The extension `skeleton` component maps to `Skeleton` in the design system. The visual contract — a pulsing placeholder with `bg-icon-alternative` opacity-cycling at 1400ms — is preserved, but the public API is realigned with the React Native `Skeleton` (`@metamask/design-system-react-native`):

- The toggle prop is renamed and **inverted** (`isLoading` → `hideChildren`).
- The polymorphic Box surface and the `mm-skeleton` SCSS class hook are removed.
- The pulse animation moves from a component-local SCSS keyframe to a `motion-safe:animate-skeleton-pulse` Tailwind utility added to `@metamask/design-system-tailwind-preset` in this migration.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for shared Box/style-utility migration patterns.

#### Breaking Changes

##### Import Path

| Extension Pattern                                              | Design System Migration                                              |
| -------------------------------------------------------------- | -------------------------------------------------------------------- |
| `import { Skeleton } from '../../component-library'`           | `import { Skeleton } from '@metamask/design-system-react'`           |
| `import type { SkeletonProps } from '../../component-library'` | `import type { SkeletonProps } from '@metamask/design-system-react'` |

##### Toggle Prop: `isLoading` → `hideChildren` (semantics inverted)

This is the headline breaking change. The legacy `isLoading` prop (defaulting to `true`) is replaced by `hideChildren` (defaulting to `false`) — the meaning is **inverted**. This aligns the web Skeleton with the React Native `Skeleton`'s API.

| Extension                               | Design System                    | Behavior                                                                                                         |
| --------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `<Skeleton>` (default `isLoading=true`) | `<Skeleton hideChildren>`        | Standalone placeholder. Animated bar fills the container. Children, if any, render invisibly to preserve layout. |
| `<Skeleton isLoading={true}>{x}</…>`    | `<Skeleton hideChildren>{x}</…>` | Skeleton overlay; `x` invisible (preserves layout dimensions).                                                   |
| `<Skeleton isLoading={false}>{x}</…>`   | `<Skeleton>{x}</…>` (default)    | `x` renders directly; no skeleton overlay, no animation.                                                         |
| `<Skeleton width={100} />`              | `<Skeleton width={100} />`       | Standalone placeholder; unchanged.                                                                               |

The mechanical translation is `isLoading={x}` ⇒ `hideChildren={x}`. The default-prop behavior also flips: a bare `<Skeleton>{x}</Skeleton>` used to render the skeleton; in MMDS it renders `x` directly.

##### Props and Behavior Mapping

| Extension API                                                | Design System API                          | Change Type        | Notes                                                                                                                                                                                                                                |
| ------------------------------------------------------------ | ------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `isLoading?: boolean` (default `true`)                       | `hideChildren?: boolean` (default `false`) | renamed + inverted | toggle now matches the React Native `Skeleton` API; mechanical translation is `isLoading={x}` ⇒ `hideChildren={x}`.                                                                                                                  |
| `height?: number \| string`                                  | `height?: number \| string`                | unchanged          | applied as inline style.                                                                                                                                                                                                             |
| `width?: number \| string`                                   | `width?: number \| string`                 | unchanged          | applied as inline style.                                                                                                                                                                                                             |
| `children?: ReactNode`                                       | `children?: ReactNode`                     | unchanged          | rendered directly when `hideChildren=false`; rendered invisibly inside the container when `hideChildren=true`.                                                                                                                       |
| `className?: string`                                         | `className?: string`                       | unchanged          | applied to the container; merged with the component's defaults via `twMerge`.                                                                                                                                                        |
| Polymorphic `as` / `PolymorphicComponentPropWithRef<C, ...>` | removed                                    | removed            | always renders `<div>`. If you need a different element, wrap or compose.                                                                                                                                                            |
| Box style-utility props on the root (`marginBottom`, …)      | removed from public API                    | removed            | use `className` with Tailwind utilities (e.g. `className="mb-4"`) for layout overrides.                                                                                                                                              |
| `mm-skeleton` SCSS class hook                                | removed                                    | removed            | the pulse animation moved into the `motion-safe:animate-skeleton-pulse` Tailwind utility on the inner overlay (added to `@metamask/design-system-tailwind-preset` in this migration). Reduced-motion users see a static placeholder. |
| `* { visibility: hidden }` SCSS rule on descendants          | replaced with structural invisibility      | replaced           | when `hideChildren=true`, children render inside an `aria-hidden` wrapper with `invisible pointer-events-none`. No global descendant rule.                                                                                           |

##### Default and Behavior Changes

| Concern           | Extension Behavior                                                               | Design System Behavior                                                                                                         |
| ----------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Default state     | `isLoading=true` — wrapping `<Skeleton>{x}</…>` defaults to showing the skeleton | `hideChildren=false` — wrapping `<Skeleton>{x}</…>` defaults to showing the children directly (no skeleton overlay)            |
| Animation         | always-on, opacity 0.2 → 0.1 → 0.2 cycle every 1400ms                            | same cycle, gated by `motion-safe:` (reduced-motion users get a static placeholder)                                            |
| Container element | polymorphic Box (`<div>` by default; can render any element via `as`)            | always `<div>`                                                                                                                 |
| ARIA              | none                                                                             | container, animated overlay, and (when present) hidden-children wrapper are all `aria-hidden="true"` and `pointer-events-none` |

#### Migration Examples

##### Before (Extension)

```tsx
import { Skeleton } from '../../component-library';

// Default behavior: skeleton showing
<Skeleton>{maybeContent}</Skeleton>

// State-driven toggle
<Skeleton isLoading={isLoading}>{content}</Skeleton>

// Standalone placeholder
<Skeleton width="100px" height="16px" />

// Inverted: render content with no skeleton overlay
<Skeleton isLoading={false}>{content}</Skeleton>
```

##### After (Design System)

```tsx
import { Skeleton } from '@metamask/design-system-react';

// To preserve "show skeleton with hidden children" behavior, set hideChildren
<Skeleton hideChildren>{maybeContent}</Skeleton>

// State-driven toggle (mechanical translation)
<Skeleton hideChildren={isLoading}>{content}</Skeleton>

// Standalone placeholder — unchanged
<Skeleton width="100px" height="16px" />

// Default in MMDS: children render directly (replaces isLoading={false})
<Skeleton>{content}</Skeleton>
```

For typical call sites — for example `ui/components/ui/aggregated-balance/aggregated-balance.tsx` (state-driven `isLoading={...}`), `ui/components/app/wallet-overview/coin-overview.tsx` (state-driven `isLoading={...}` with Box utility props), and `ui/components/app/rewards/RewardsPointsBalance.tsx` (standalone `<Skeleton width="100px" />`) (verified via fresh grep) — the typical churn is:

1. Swap the import path.
2. Rename `isLoading` → `hideChildren`. The boolean expression is mechanically the same (e.g. `isLoading={!data}` ⇒ `hideChildren={!data}`).
3. For any bare `<Skeleton>{x}</Skeleton>` that relied on the legacy default `isLoading=true`, add `hideChildren` explicitly. (Bare standalone `<Skeleton width=… />` without children does not need to change.)
4. Move any root-level Box utility props (`marginBottom`, etc.) onto `className`.

Codemod-friendly: every `isLoading=` token in the extension's existing call sites maps 1:1 to `hideChildren=`.

#### API Differences

- `Skeleton` always renders a `<div>` and forwards arbitrary HTML attributes (`id`, `role`, `data-*`, `aria-*`, `ref`) to it.
- The container, animated overlay, and (when present) hidden-children wrapper are all `aria-hidden="true"` and `pointer-events-none` by default. The skeleton takes no part in the accessibility tree.

## Version Updates

<!-- TODO: Replace 0.x.0 with the actual next released version when this BannerBase follow-up ships. -->

## From version 0.22.0 to 0.x.0

### BannerBase: `onClose` is now the only close-button behavior API

**What changed:**

- **`closeButtonProps.onClick`** is removed from the public **`BannerBase`** API.
- The close button now renders **only** when **`onClose`** is provided.
- **`closeButtonProps`** is now customization-only for the rendered close **`ButtonIcon`**.

**Migration:**

- Move any close-button behavior from **`closeButtonProps.onClick`** to **`onClose`**.
- Keep **`closeButtonProps`** only for non-behavioral customization such as **`data-testid`**, accessibility props, and styling hooks.
- If you previously passed only **`closeButtonProps`** to force-render a close button, also provide **`onClose`** now.

**Impact:**

- Existing **`@metamask/design-system-react`** consumers that relied on **`closeButtonProps.onClick`** or on rendering a close button without **`onClose`** must update those call sites.

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
