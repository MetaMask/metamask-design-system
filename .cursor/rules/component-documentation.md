# Component Documentation

Documentation standards for Storybook stories and README files for React and React Native components.

## Critical Rules

### README Structure

- **React Web**: Use `.mdx` format with Storybook Canvas integration
- **React Native**: Use `.md` format with comprehensive static examples
- **ALWAYS** follow templates exactly: @docs/component-readme-examples/
- **Cross-platform**: Keep documentation identical across web/native (same sections, descriptions, examples)
- **NEVER** duplicate prop type definitions (reference types file instead)

### Component Descriptions

**ALWAYS** include MetaMask-specific context in component descriptions:

- **What it's for**: Specific use cases in MetaMask products
- **When to use**: Product context (Extension, Mobile, Trade, etc.)
- **Constraints**: When NOT to use (e.g., "Use sparingly for key actions")

**Example (ButtonHero):**

```md
A branded, high-impact button reserved for the most important actions in Trade.
Use sparingly for key user actions that require emphasis and visual prominence.

Use for:

- Swapping tokens
- Claiming winnings (e.g., Polymarket bets)
- Claiming rewards
- Other critical, high-value actions
```

**Avoid generic descriptions:**

- ❌ "ButtonHero is a button component"
- ✅ "A branded button reserved for the most important actions in Trade"

### Storybook Stories

**Story Structure:**

1. **Default story** - ALWAYS first, minimal args, ALL controls wired up in argTypes
2. **Story per prop** - Each major prop gets its own story showcasing usage
3. **Canvas reference** - Each prop section in README references its story Canvas

**Story naming conventions:**

- `Default` - Minimal example with all controls
- `Size` - Size variations showcase
- `Variant` - Variant showcase
- `IsFullWidth` - Boolean prop example
- `StartIconName` / `EndIconName` - Specific prop examples
- `Disabled` / `Loading` - State examples

**Prop descriptions (aspirational):**

Currently most props use generic descriptions ("The size of the component"). Future standard: MetaMask-specific WHEN/WHY guidance.

**Current (generic):**

```tsx
size: {
  control: 'select',
  description: 'Optional prop to control the size of the ButtonHero',
}
```

**Aspirational (MetaMask-specific):**

```tsx
size: {
  control: 'select',
  description: 'Size of the button. Use Sm in compact spaces like mobile navigation, Md for standard actions, Lg for hero sections above the fold',
}
```

**Core requirements:**

- **ALWAYS** create meta with title, component, parameters, argTypes
- **ALWAYS** include Default story with minimal args
- **ALWAYS** create showcase stories for major props (Variant, Size, etc.)
- **NEVER** use string literals in stories (use enums)

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

- @packages/design-system-react/src/components/ButtonHero/ (MetaMask-specific component description + story structure)
- @packages/design-system-react/src/components/Button/ (README.mdx + stories)
- @packages/design-system-react/src/components/Box/ (comprehensive props documentation)
- @packages/design-system-react/src/components/Text/ (typography examples)

**React Native:**

- @packages/design-system-react-native/src/components/Button/ (README.md + stories)
- @packages/design-system-react-native/src/components/Box/ (usage patterns + value tables)
- @packages/design-system-react-native/src/components/Text/ (comprehensive examples)

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
- [ ] Component description includes MetaMask-specific use cases and context
- [ ] Component description explains when/when not to use (not just what it is)
- [ ] README includes: description, usage, props documentation
- [ ] Web README uses Canvas blocks for interactive examples
- [ ] Native README includes comprehensive usage patterns
- [ ] Cross-platform: documentation is identical across web/native
- [ ] Stories file exports meta with proper argTypes
- [ ] Default story is first with minimal args and all controls wired up
- [ ] Story exists for each major prop
- [ ] Each prop section in README references its story Canvas
- [ ] No string literals used (all enums)
- [ ] Web meta includes README in parameters.docs.page
- [ ] Native stories use helper pattern for platform-specific rendering (if needed)
- [ ] Cross-platform: same prop names and enum values
- [ ] Storybook builds without errors: `yarn build-storybook`
- [ ] Accessibility tests pass: `yarn test:storybook`
