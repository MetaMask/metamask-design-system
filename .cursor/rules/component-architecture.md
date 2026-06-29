# Component Architecture

Foundation architectural patterns and decisions for MetaMask Design System components.

## Purpose

This file defines the architectural patterns that ALL component workflows must follow:

- [ADR-0003](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md): String unions with const objects (no enums)
- [ADR-0004](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md): Centralized types in shared package
- **Component-scoped prop const objects:** `ComponentName` + `PropName` exports (e.g. `SegmentedControlSize`) — canonical detail in **Component-Scoped Prop Const Objects** below
- Platform-Specific Props: Layered architecture pattern
- Cross-platform consistency principles

**This is the foundation** - other component rules reference these patterns.

## ADR-0003: String Unions with Const Objects

Use const objects with derived string union types instead of TypeScript enums.

```tsx
// ✅ Correct - Const object + derived union type
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

// ❌ Wrong - TypeScript enum
export enum ButtonVariant {
  Primary = 'primary',
}
```

**Reference:** [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)

## Component-Scoped Prop Const Objects

Every public prop that accepts a fixed set of values must expose a **component-scoped** const object named `ComponentName` + `PropNameInPascalCase`, where `PropNameInPascalCase` matches the **prop name** (not an abbreviated concept). Consumers import the const for the component they are using — not a shared base type from another component.

| Prop name           | Const export                                                 |
| ------------------- | ------------------------------------------------------------ |
| `size`              | `SegmentedControlSize`                                       |
| `variant`           | `FilterButtonVariant`                                        |
| `endArrowDirection` | `SelectButtonEndArrowDirection` (not `SelectButtonEndArrow`) |

**Why:** Discoverability at the import site. When using `SegmentedControl`, consumers look for `SegmentedControlSize` — not `ButtonBaseSize` or `ButtonSize`.

### Naming and aliasing

When values match an existing base scale, **alias** the base const in shared — do not reference the base type on public prop interfaces:

```tsx
import { ButtonBaseSize } from '../ButtonBase/ButtonBase.types';

/**
 * SelectButton size options (ADR-0003).
 * Alias to ButtonBaseSize to keep values in sync.
 */
export const SelectButtonSize = ButtonBaseSize;
export type SelectButtonSize = ButtonBaseSize;

export type SelectButtonPropsShared = {
  /** @default SelectButtonSize.Sm */
  size?: SelectButtonSize;
};
```

**Golden path:** @packages/design-system-shared/src/types/SelectButton/SelectButton.types.ts

### Current alias examples in the monorepo

Two base scales exist in shared. Each public component aliases its own const — consumers never import the base type for another component's props.

**Avatars** — all alias `AvatarBaseSize`:

| Export              | Component     |
| ------------------- | ------------- |
| `AvatarAccountSize` | AvatarAccount |
| `AvatarTokenSize`   | AvatarToken   |
| `AvatarNetworkSize` | AvatarNetwork |
| `AvatarFaviconSize` | AvatarFavicon |
| `AvatarGroupSize`   | AvatarGroup   |
| `AvatarIconSize`    | AvatarIcon    |

**Button-scale controls** — all alias `ButtonBaseSize`:

| Export                 | Component        |
| ---------------------- | ---------------- |
| `ButtonSize`           | Button           |
| `ButtonHeroSize`       | ButtonHero       |
| `SelectButtonSize`     | SelectButton     |
| `FilterButtonSize`     | FilterButton     |
| `SegmentedControlSize` | SegmentedControl |

**Usage:**

```tsx
<AvatarToken size={AvatarTokenSize.Lg} />
<Button size={ButtonSize.Md} />
<SelectButton size={SelectButtonSize.Sm} />
<SegmentedControl size={SegmentedControlSize.Md} />
```

### Future: plain string union props

We may eventually roll out plain string unions (e.g. `size="md"` instead of `size={ButtonSize.Md}`) per [ADR-0003](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md). That requires a **team announcement and coordinated migration** — do not ship `size="md"` on new components until that decision is published and existing const-object exports are deprecated with a clear timeline.

**Until then:** always add component-scoped const objects for new prop unions, even when values alias `AvatarBaseSize` or `ButtonBaseSize`.

### Legacy naming to avoid copying

`SelectButtonEndArrow` is shipped for the `endArrowDirection` prop but **does not follow** the convention (prop → `SelectButtonEndArrowDirection`). Do not use it as a template for new components. Renaming may happen in a future breaking release; new work should use the full prop name in the const export.

| Rule                   | Detail                                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Naming                 | `ComponentName` + prop name in PascalCase: `FilterButtonVariant`, `SegmentedControlSize`, `AvatarTokenSize`                  |
| Prop typing            | Shared props use the **scoped** type (`SegmentedControlSize`), not `ButtonBaseSize` / `AvatarBaseSize`                       |
| Exports                | Export scoped const from shared `index.ts` and component `index.ts` (single export location — unchanged)                     |
| Stories / docs / Figma | Examples import and use scoped consts — never `ButtonBaseSize` in consumer-facing snippets                                   |
| Internal only          | `ButtonBaseSize` is valid inside `ButtonBase`, button variants, and other internal implementations                           |
| Platform extension     | A component may extend `ButtonBaseProps` on the platform layer but must still export `FilterButtonSize` (etc.) for consumers |
| Future migration       | Plain string unions (e.g. `size="md"`) require an explicit team announcement — until then, ship scoped const objects only    |

### Anti-patterns

```tsx
// ❌ Wrong - base type on public shared prop (requires internal knowledge)
export type SegmentedControlPropsShared = {
  size?: ButtonBaseSize;
};

// ❌ Wrong - sibling component's const on a different component (compiles but confuses)
<SegmentedControl size={ButtonSize.Md} />

// ✅ Correct
<SegmentedControl size={SegmentedControlSize.Md} />
<FilterButton size={FilterButtonSize.Sm} />
```

## ADR-0004: Centralized Types Architecture

Define shared types once in `@metamask/design-system-shared`, platform packages re-export and extend.

**Three-layer architecture:**

```
@metamask/design-system-shared (source of truth)
    ↓
    ├── @metamask/design-system-react (re-export + extend)
    └── @metamask/design-system-react-native (re-export + extend)
```

**Minimal pattern:**

```tsx
// Shared: Const objects + shared props with "Shared" suffix
export const ButtonVariant = { Primary: 'primary' } as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];
export type ButtonPropsShared = { variant?: ButtonVariant };

// React: Re-export + extend with ComponentProps + className
export {
  ButtonVariant,
  type ButtonPropsShared,
} from '@metamask/design-system-shared';
export type ButtonProps = ComponentProps<'button'> &
  ButtonPropsShared & { className?: string };

// React Native: Re-export + extend with PressableProps + twClassName
export {
  ButtonVariant,
  type ButtonPropsShared,
} from '@metamask/design-system-shared';
export type ButtonProps = ButtonPropsShared &
  PressableProps & { twClassName?: string };
```

**See complete implementation:** @packages/design-system-shared/src/types/BadgeStatus/

**Reference:** [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

## Platform-Specific Props: Layered Architecture

Separate shared design system concerns from platform-specific implementation concerns.

**Naming:**

- Shared: `ComponentNamePropsShared` (with "Shared" suffix)
- Platform: `ComponentNameProps` (no suffix)

**What goes where:**

| Concern                 | Location | Example                                      |
| ----------------------- | -------- | -------------------------------------------- |
| Visual variants, states | Shared   | `variant`, `size`, `isDisabled`, `isLoading` |
| Component structure     | Shared   | `children`, `label`, `description`           |
| Platform interaction    | Platform | `onClick`/`onPress`, event handlers          |
| Platform styling        | Platform | `className`/`twClassName`                    |
| Platform base types     | Platform | `ComponentProps<'div'>`/`ViewProps`          |

**Event handlers:**

- ❌ NO unified handlers in shared (no `onAction`)
- ✅ React: `onClick` from `ComponentProps<'element'>`
- ✅ React Native: `onPress` from `PressableProps`

**Styling props:**

- ❌ NO className/twClassName in shared
- ✅ React: `className?: string` (platform layer)
- ✅ React Native: `twClassName?: string` (platform layer)

**Prop forwarding convention:**

- When a component forwards the remaining props to its rendered element, name the destructured catch-all `...props` and spread `{...props}` onto the element.
- Do not use `...rest` for this pattern in component implementations; keep the naming consistent so forwarded props are easy to spot across the codebase.

## Const Object Value Patterns in Shared

Not all constants in `design-system-shared` have the same kind of value. The rule is simple: **if the class string is identical across both platforms, put it in shared; if the platforms need different class strings, use an abstract value in shared and map per platform.**

Both React (Tailwind) and React Native (TWRNC) share the same design token class naming from their respective presets — so most token-identity constants can live in shared and be used directly as class names on both platforms.

**Two patterns:**

| Pattern        | Example                                  | Value is…                                                    | Used as…                                             |
| -------------- | ---------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| Token identity | `TextColor.TextDefault = 'text-default'` | The class string itself (same on both platforms)             | `className={color}` / `twClassName={color}` directly |
| Semantic value | `FontWeight.Bold = 'bold'`               | Abstract identifier (platforms need different class strings) | Mapped in platform `.constants.ts`                   |

### Token identity constants (`TextColor`, `BoxBackgroundColor`, `BoxBorderColor`, etc.)

- Values ARE the Tailwind/TWRNC class strings — identical across both platforms
- Used directly: `className={color}` (React) / `twClassName={color}` (React Native)
- ✅ Values live in shared and are used as-is on both platforms

### Platform-specific const objects

If a const object only exists for one platform's behavior or styling, keep it in that platform package near the component instead of moving it to `@metamask/design-system-shared` just to satisfy the barrel export.

- Export it from the component barrel if it is part of the public API
- Import it locally from the component file in stories, tests, and implementation
- Only promote it to shared when the same semantic contract is genuinely needed on both platforms

Example: `TextAreaResize` is a React-only API because React Native does not have an equivalent native resize axis, so it should stay in the React package.

### Semantic constants (`FontWeight`, `FontStyle`, `FontFamily`, `TextVariant`)

- Platforms need different class strings for these — they cannot share a single value:
  - React: `FontWeight.Bold → 'font-bold'`
  - React Native: `FontWeight.Bold → '-bold'` (TWRNC suffix strategy)
- ✅ Abstract values in shared, class mappings in each platform's `Component.constants.ts`
- ❌ Do NOT use const values as inline `style={{}}` — Tailwind/TWRNC is the styling approach for both platforms

### Tailwind scanning consequence

Token identity constants in shared require Tailwind's JIT to find their string values. Because Tailwind CSS v3 does not merge `content` arrays from presets, consumers must add `@metamask/design-system-shared/dist/**/*.{mjs,cjs}` to their own Tailwind `content` glob. See `styling.md` for implementation details.

## Export Pattern: Avoiding TypeScript Errors

When exporting both values and types with the same name, use inline `type` keyword to avoid "Duplicate identifier" errors:

```tsx
// ✅ Correct - Inline type keyword
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared, // inline "type" keyword
} from '@metamask/design-system-shared';

// ❌ Wrong - Separate type exports cause duplicate identifier errors
export { BadgeStatusStatus, BadgeStatusSize } from '...';
export type { BadgeStatusStatus, BadgeStatusSize } from '...'; // Error!
```

## Component Index Export Pattern

**Component `index.ts` files export directly from shared package, NOT through `src/types/index.ts`:**

```tsx
// ✅ Correct - Component index.ts exports directly from shared
// packages/design-system-react/src/components/BadgeStatus/index.ts
export {
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';
export { BadgeStatus } from './BadgeStatus';
export type { BadgeStatusProps } from './BadgeStatus.types';

// ❌ Wrong - Don't re-export through src/types/index.ts
// packages/design-system-react/src/components/BadgeStatus/index.ts
export { BadgeStatusStatus, BadgeStatusSize } from '../../types';
export { BadgeStatus } from './BadgeStatus';
export type { BadgeStatusProps } from './BadgeStatus.types';
```

**Platform type indices (`src/types/index.ts`) should NOT re-export shared types:**

```tsx
// ✅ Correct - src/types/index.ts does NOT re-export shared types
// packages/design-system-react/src/types/index.ts
// (Remove old enum definitions, don't add re-exports)

// ❌ Wrong - Don't re-export shared types here
// packages/design-system-react/src/types/index.ts
export {
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';
```

## Where to Import Shared Types

**Always import shared consts and types directly from `@metamask/design-system-shared`**, never through a sibling component's index.

```tsx
// ✅ Correct - import from shared (the owner)
import { TextVariant } from '@metamask/design-system-shared';

// ❌ Wrong - import through a sibling component's index
import { TextVariant } from '../Text';
```

**Why not `../Text`?**

Both `Input` and `Text` are _consumers_ of `TextVariant` — neither owns it. Importing through `../Text` creates:

1. **False semantic coupling** — implies `Input` is built on top of `Text`, which it isn't
2. **Fragile circular-dep risk** — if `Text` ever renders an `Input` internally, you get `Input → Text → Input 💥`
3. **Misleading dependency graph** — obscures that the real source is `@metamask/design-system-shared`

**The rule:**

| What you need                                                      | Import from                                  |
| ------------------------------------------------------------------ | -------------------------------------------- |
| Shared const/type (`TextVariant`, `TextColor`, `FontWeight`, etc.) | `@metamask/design-system-shared`             |
| A sibling component to render it                                   | `'../ComponentName'`                         |
| A sibling component's platform-specific props type                 | `'../ComponentName'`                         |
| A sibling component's mapping constants                            | `'../ComponentName/ComponentName.constants'` |

## Cross-Platform Consistency

**Required consistency:**

- ✅ Same `ComponentNamePropsShared` interface
- ✅ Same const object names and values
- ✅ Platform differences ONLY in extension layer

**Verification checklist:**

- [ ] Shared types in `@metamask/design-system-shared/src/types/ComponentName/`
- [ ] Const objects (ADR-0003), NOT enums
- [ ] Shared interface named `ComponentNamePropsShared` (with "Shared" suffix)
- [ ] Platform packages re-export and extend shared types
- [ ] React: Extends `ComponentProps<'element'>`, adds `className?: string`
- [ ] React Native: Extends `ViewProps`/`PressableProps`, adds `twClassName?: string`
- [ ] Component `index.ts` exports directly from `@metamask/design-system-shared`
- [ ] Platform `src/types/index.ts` does NOT re-export shared types
- [ ] NO className/twClassName in shared package
- [ ] NO unified event handlers in shared package
- [ ] Each public prop union has a component-scoped const object export (`ComponentNameSize`, `ComponentNameVariant`, etc.)
- [ ] Shared props reference scoped types, not base types (`ButtonBaseSize`, `AvatarBaseSize`)

## Optional slot rendering (`ReactNode`)

Optional layout slots (accessories, labels, end nodes) are usually **strings or elements**. Use **standard React conditional rendering** only (`{optionalSlot}`, `condition && <Subtree />`, ternaries). **Do not** add shared `ReactNode` guard helpers.

- **PREFER** `{optionalSlot}` when `null`, `undefined`, and `false` are acceptable and you do not need to skip mounting a subtree.
- **PREFER** `condition && <Subtree />` when the subtree should not mount unless `condition` is truthy.
- **PREFER** avoiding redundant patterns such as `x && x` (same expression twice); use `x` or `condition && x` once.
- **NOTE:** The left-hand side of `&&` must be chosen deliberately if numeric `0` could appear and you mean “hide”; for typical string/element slots, idiomatic React patterns are sufficient.

**Related:** @.cursor/rules/testing.md — how to test optional slots without speculative edge-case suites.

## Golden Path: BadgeStatus

**BadgeStatus is THE proof-of-concept for ADR-0003 and ADR-0004. Always reference when in doubt.**

**Complete implementation:**

- @packages/design-system-shared/src/types/BadgeStatus/ (Shared types - SOURCE OF TRUTH)
- @packages/design-system-react/src/components/BadgeStatus/ (React implementation)
- @packages/design-system-react-native/src/components/BadgeStatus/ (React Native implementation)

## References

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

### Related Cursor Rules

- @.cursor/rules/component-creation.md - HOW-TO guide for creating components
- @.cursor/rules/component-migration.md - Extension/mobile migration workflow
- @.cursor/rules/component-enum-union-migration.md - Internal ADR migration
- @.cursor/rules/styling.md - Design tokens and styling patterns
- @.cursor/rules/testing.md - Optional `ReactNode` / slot testing conventions

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
