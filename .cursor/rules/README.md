# Development Documentation

Primary development documentation for the MetaMask Design System repository.

Optimized for both AI agents (Cursor, Claude Code) and human developers.

## Quick Reference

| Topic               | File                       |
| ------------------- | -------------------------- |
| Creating components | component-creation.md      |
| Styling patterns    | styling.md                 |
| Testing             | testing.md                 |
| TypeScript          | typescript-patterns.md     |
| Documentation       | component-documentation.md |
| Monorepo workflow   | monorepo-workflow.md       |
| Figma integration   | figma-integration.md       |
| Pull requests       | pr.mdc                     |

## Critical Invariants (Never Break These)

**TypeScript:**

- NEVER use string literals for component props → ALWAYS use enums
- Example: `ButtonVariant.Primary` not `"primary"`

**Styling:**

- NEVER use arbitrary Tailwind values → ONLY design tokens
- NEVER use default Tailwind colors → ONLY semantic tokens
- Typography ALWAYS via Text component

**Testing:**

- ALWAYS write tests when creating/modifying components
- ALWAYS include accessibility tests (axe-core)

**Component Creation:**

- ALWAYS use `yarn create-component:react --name Foo --description "..."`
- NEVER manually create component files

## Golden Path Examples

Reference these canonical implementations:

- **Complete component:** `packages/design-system-react/src/components/Button/`
- **Typography:** `packages/design-system-react/src/components/Text/`
- **Layout:** `packages/design-system-react/src/components/Box/`
- **Tests:** `packages/design-system-react/src/components/Button/Button.test.tsx`
- **Stories:** `packages/design-system-react/src/components/Button/Button.stories.tsx`
- **README:** `packages/design-system-react/src/components/Button/README.mdx`

## Rule Files

### Core Development

**styling.md** - Design tokens, Tailwind, component-first approach

- Purpose → Critical rules → Commands → Golden paths → Verification
- No arbitrary values, design tokens only
- Platform-specific: className (web) vs twClassName (native)

**component-creation.md** - Using `create-component` scripts

- Purpose → Critical rules → Commands → File structure → Post-creation checklist
- Always use script, never manual creation
- Auto-generates all necessary files

**component-documentation.md** - README standards, prop documentation

- Purpose → Critical rules → Required sections → Examples
- MDX for React, MD for React Native
- ❌/✅ examples for every pattern

**testing.md** - Jest, Testing Library, accessibility testing

- Purpose → Critical rules → Commands → Patterns → Verification
- Unit tests + a11y tests required
- Testing Library queries preferred

**monorepo-workflow.md** - Workspace commands, dependencies

- Purpose → Critical rules → Commands → Common workflows
- Package references (not file paths)
- Constraints after dependency changes

### Repository-Specific

**typescript-patterns.md** - Enums (critical!), types, discriminated unions

- ALWAYS enums for variants/sizes/colors
- Discriminated unions for variant-specific props
- Type file structure

**figma-integration.md** - Code Connect setup (optional)

- Purpose → Critical rules → Commands → When to use
- Interactive setup for adding components
- Automated publishing workflows

### Existing

**pr.mdc** - Automated PR description generation (Cursor command)

## Documentation Philosophy

Rules are **checklists + constraints + golden path examples**, not comprehensive guides.

### Rule File Template

Each rule file follows:

1. **Purpose** (1-2 lines)
2. **Critical Rules** (Do/Don't bullets)
3. **Commands** (essential commands only)
4. **Golden Path Examples** (real file paths in codebase)
5. **Verification Steps**
6. **References** (MetaMask contributor-docs, other rules)

### Why This Structure?

- **Context efficient:** Every line prevents a mistake
- **Actionable:** Tell agents what to do, not theory
- **Reference-based:** Point to canonical code
- **Maintainable:** Checklists easier to update than narratives

## For Humans

Use these rules as:

- Quick reference for repository conventions
- Checklists during code review
- Onboarding material for new contributors
- Understanding AI agent behavior

## For AI Agents

**Cursor:**

- Automatically loads `.cursor/rules/*.md` files
- Rules guide code generation and suggestions
- Check this README to find relevant rules

**Claude Code:**

- Reads `CLAUDE.md` at session start
- `CLAUDE.md` explicitly references this file: `@.cursor/rules/README.md`
- Ask "What are the coding conventions?" to see loaded rules

## References

- @docs/contributing.md - High-level contributor guide
- @docs/ai-agents.md - Documentation strategy explanation
- @docs/metamask-standards-links.md - Organization-wide standards
- https://github.com/MetaMask/contributor-docs/ - MetaMask contributor docs

## Adding New Rules

Add rules when AI agents make repeated mistakes:

1. Identify the pattern/mistake
2. Choose the right rule file
3. Add to "Critical Rules" section (Do/Don't format)
4. Point to golden path example if available
5. Test with AI agents
6. Update this README if adding new file

**Keep rules tight:** Checklists, not novels.
