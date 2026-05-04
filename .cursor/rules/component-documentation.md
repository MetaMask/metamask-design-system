# Component Documentation

Documentation standards for Storybook stories and README files for React and React Native components.

## Critical Rules

### README Structure

- **React Web**: Use `.mdx` format with Storybook Canvas integration
- **React Native**: Use `.md` format with comprehensive static examples
- **ALWAYS** follow templates exactly: @docs/component-readme-examples/
- **Cross-platform**: Keep documentation identical across web/native (same sections, descriptions, examples)

### Consumer-Facing Descriptions

- **ALWAYS** write component descriptions for consumers of the component, not for reviewers or implementers
- Opening descriptions should explain:
  - what the component is
  - when to use it
  - how to use it in the default/common case
  - when not to use it, if there is a nearby alternative or a common misuse
- **PREFER** stable usage guidance over internal reasoning. Document the recommended composition or default sizing, not why the implementation was changed during review.
- **NEVER** include development-process or review-history context in component docs
- **NEVER** explain implementation details unless they directly affect consumer usage or API behavior
- **NEVER** add fluff, defensive narration, or “why we removed/changed X in this PR” language to README descriptions

**Good examples:**

- `AvatarIcon` displays an icon inside an avatar-shaped container. Use it when you need a static icon avatar rather than an image- or account-based avatar.
- `TitleSubpage` lays out a leading avatar beside a title stack with optional supporting rows. For avatars passed to `titleAvatar`, use a large size such as `AvatarToken` at `AvatarTokenSize.Lg`.

**Bad examples (avoid these):**

- `On React Native, this is passed straight through with no fixed-size wrapper because we removed the old overflow-hidden container during review.`
- `This implementation stays agnostic so you own composition when you need extra chrome.`
- `We changed this in the latest review round so badges are no longer clipped.`

### Storybook Stories

**Story Structure:**

1. **Default story** - ALWAYS first, minimal args, and **interactive controls** wired in `argTypes` for props that are practical to edit in Storybook (see **React Native (DSRN)** below for on-device limits)
2. **Story per prop** - Each major prop gets its own story showcasing usage
3. **Canvas reference** - Each prop section in README references its story Canvas

**Story naming conventions:**

Stories are named after props in PascalCase:

1. `Default` - First story with minimal args and all controls wired up
2. `{PropName}` - Story named after prop in PascalCase

**Examples:**

- `variant` prop → `Variant` story
- `size` prop → `Size` story
- `isDisabled` prop → `IsDisabled` story
- `isLoading` prop → `IsLoading` story
- `status` prop → `Status` story

Each story showcases that specific prop's usage and variations.

**Core requirements:**

- **ALWAYS** create meta with title, component, parameters, argTypes
- **ALWAYS** include Default story with minimal args
- **ALWAYS** create showcase stories for major props (Variant, Size, etc.)
- **NEVER** create stories for `className` (React) or `twClassName` (React Native); document these only in README/template guidance.

See golden path examples for story implementation patterns.

### React Native (DSRN) — `@storybook/react-native` stories

Applies to stories under `packages/design-system-react-native/**` (on-device Storybook). Web controls and RN controls are **not** identical: mobile panels work best with a **small, focused** `argTypes` table.

**argTypes — do:**

- Use **text**, **boolean**, and **select** controls for props that are worth tweaking live (e.g. `children`, `isLoading`, `size`).
- For shared **const-object** unions (`ButtonBaseSize`, `IconName`, etc.), use `options: Object.keys(Const)` with `mapping: Const` so TypeScript and Storybook stay aligned (never pass the whole object as `options`).
- Keep **descriptions** on entries where they help consumers scanning the controls panel.

**argTypes — avoid:**

- **`control: 'object'`** for props like `textProps`, `spinnerProps`, `style`, `startIconProps`, etc. Object/json editors are poor on device and add noise; document those props in the component **README** instead.
- **`control: false`** listings for large sets of non-interactive props. Prefer **omitting** those keys from `argTypes` entirely; Storybook still renders the component, and stories can set values in code. Reserve README for full prop tables.

**Default story:** Wire **only** props that have real on-device controls (per above). Do not require every component prop to appear in `argTypes`.

**Cross-platform:** Keep story **names** and **coverage** aligned with React web where possible; RN `argTypes` may intentionally list **fewer** entries than web when the extra entries would only be `object` or `false` controls.

### Cross-Platform Consistency

- **ALWAYS** document same props in both platforms
- **ALWAYS** use same section headings (Props, Usage, Accessibility)
- **ALWAYS** use same enum names and values across platforms
- **Web**: Interactive Canvas examples, minimal written examples
- **Native**: Comprehensive written examples, multiple usage patterns

## Commands

```bash
# Run Storybook
yarn storybook                # React web (port 6006)
yarn storybook:ios            # React Native iOS
yarn storybook:android        # React Native Android

# Build Storybook
yarn build-storybook          # Build static site

# Test accessibility
yarn test:storybook           # Run Storybook accessibility tests

# MCP-assisted Storybook workflows (requires Storybook running)
# MCP endpoint: http://localhost:6006/mcp
# Tools: preview-stories, run-story-tests
```

## Golden Path Examples

**Cross-platform component demonstrating best practices:**

- @packages/design-system-react/src/components/Box/ (React Web)
- @packages/design-system-react-native/src/components/Box/ (React Native)

Box demonstrates excellent cross-platform consistency: same props, same story names, same documentation structure across both platforms.

**Real-world examples:**

- @apps/storybook-react/stories/WalletHome.stories.tsx (complex React Web story)
- @apps/storybook-react-native/stories/WalletHome.stories.tsx (complex React Native story)

## README Templates

Reference templates for creating new component documentation:

- @docs/component-readme-examples/react-readme-example.mdx (React Web template)
- @docs/component-readme-examples/react-native-readme-example.md (React Native template)

Use these as starting points when documenting new components. Templates include standard sections, prop documentation patterns, and proper formatting.

## Verification

After adding/updating component documentation, verify:

- [ ] README exists in component directory (.mdx for web, .md for native)
- [ ] README follows templates exactly: @docs/component-readme-examples/
- [ ] README includes: description, usage, props documentation
- [ ] README description is consumer-facing and explains what the component is, when to use it, and the default usage pattern
- [ ] README avoids implementation-history, review-process context, and unnecessary internal details
- [ ] Web README uses Canvas blocks for interactive examples
- [ ] Cross-platform: documentation is identical across web/native
- [ ] Stories file exports meta with proper argTypes
- [ ] Default story is first with minimal args and practical controls wired up (RN: no object-only or `control: false` clutter — see DSRN section)
- [ ] Story exists for each major prop
- [ ] Each prop section in README references its story Canvas
- [ ] Web meta includes README in parameters.docs.page
- [ ] Cross-platform: same prop names and types
- [ ] Storybook builds without errors: `yarn build-storybook`
- [ ] Accessibility tests pass: `yarn test:storybook`
- [ ] If using Storybook MCP workflows, run `run-story-tests` after story/component changes and resolve failures
- [ ] If using Storybook MCP previews, include `preview-stories` URLs when sharing visual verification
