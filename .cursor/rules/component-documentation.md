# Component Documentation

Documentation standards for Storybook stories and README files for React and React Native components.

## Critical Rules

### README Structure

- **React Web**: Use `.mdx` format with Storybook Canvas integration
- **React Native**: Use `.md` format with comprehensive static examples
- **ALWAYS** follow templates exactly: @docs/component-readme-examples/
- **Cross-platform**: Keep documentation identical across web/native (same sections, descriptions, examples)
- **NEVER** duplicate prop type definitions (reference types file instead)

### Storybook Stories

**Story Structure:**

1. **Default story** - ALWAYS first, minimal args, ALL controls wired up in argTypes
2. **Story per prop** - Each major prop gets its own story showcasing usage
3. **Canvas reference** - Each prop section in README references its story Canvas

**Story naming conventions:**

Stories are named after props in PascalCase:

1. `Default` - First story with minimal args and all controls
2. `{PropName}` - Story named after prop in PascalCase

**Examples from ButtonHero:**

- `size` prop → `Size` story
- `isFullWidth` prop → `IsFullWidth` story
- `startIconName` prop → `StartIconName` story
- `endIconName` prop → `EndIconName` story
- `isDisabled` prop → `IsDisabled` story
- `isLoading` prop → `IsLoading` story

Each story showcases that specific prop's usage and variations.

**Core requirements:**

- **ALWAYS** create meta with title, component, parameters, argTypes
- **ALWAYS** include Default story with minimal args
- **ALWAYS** create showcase stories for major props (Variant, Size, etc.)

See golden path examples for story implementation patterns.

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
```

## Golden Path Examples

**Complete examples demonstrating best practices:**

**React Web:**

- @packages/design-system-react/src/components/Button/ (README.mdx structure + PascalCase story naming)

**React Native:**

- @packages/design-system-react-native/src/components/Box/ (README.md structure + value reference tables)

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
- [ ] Web README uses Canvas blocks for interactive examples
- [ ] Cross-platform: documentation is identical across web/native
- [ ] Stories file exports meta with proper argTypes
- [ ] Default story is first with minimal args and all controls wired up
- [ ] Story exists for each major prop
- [ ] Each prop section in README references its story Canvas
- [ ] Web meta includes README in parameters.docs.page
- [ ] Cross-platform: same prop names and types
- [ ] Storybook builds without errors: `yarn build-storybook`
- [ ] Accessibility tests pass: `yarn test:storybook`
