# AI Agent Documentation Strategy

Documentation structure for AI coding agents (Cursor and Claude Code) working in the MetaMask Design System repository.

## Overview

This repository uses a lightweight, checklist-based documentation approach optimized for AI agents while remaining human-readable.

### Three-Layer Structure

```
.
├── CLAUDE.md                   # Layer 1: Entry point (40-120 lines)
├── .cursor/rules/              # Layer 2: Focused rules (200-400 lines each)
│   └── *.md                   # Individual rule files
└── docs/                       # Layer 3: High-level guides
    └── ai-agents.md           # This file - strategy explanation
```

## Layer 1: CLAUDE.md (Entry Point)

**Purpose:** Entry point loaded by Claude Code at session start.

**Content:**

- Critical invariants (never break these)
- Essential commands
- Monorepo structure overview
- Reference to cursor rules using @ file imports notation `@.cursor/rules/*.md`

**Size:** 40-120 lines (keeps context efficient)

**Philosophy:** Every line must prevent a mistake or provide essential guidance.

**Why so short?**

- Claude Code best practices recommend keeping CLAUDE.md concise
- Agents can miss key rules in verbose files
- Use explicit `@.cursor/rules/` references for detailed rules

## Layer 2: .cursor/rules/ (Focused Rules)

**Purpose:** Primary development documentation for both AI agents and humans.

**Structure:** Each rule file follows tight format:

1. **Purpose** (1-2 lines)
2. **Critical Rules** (Do/Don't bullets with ❌/✅ examples)
3. **Commands** (essential commands only)
4. **Golden Path Examples** (real file paths in codebase)
5. **Verification Steps**
6. **References** (MetaMask contributor-docs, related rules)

**Size:** 200-400 lines per file (checklists, not novels)

**Planned Rule Files**

- `styling.md` - Design tokens, Tailwind, component-first
- `component-creation.md` - Using create-component scripts
- `cross-platform.md` - Cross platform consistency and shared types
- `component-documentation.md` - Storybook and README standards
- `testing.md` - Jest, Testing Library, accessibility
- `monorepo-workflow.md` - Workspace commands
- `typescript-patterns.md` - Enums, shared types
- `figma-integration.md` - Code Connect

**Why this format?**

- **Context efficient:** Every line prevents a mistake
- **Actionable:** Tell agents what to do, not theory
- **Reference-based:** Point to canonical code in codebase
- **Maintainable:** Checklists easier to update than narratives

### Golden Path Pattern

Instead of duplicating code examples, rules point to canonical implementations:

```markdown
## Golden Path Examples

- See `packages/design-system-react/src/components/Button/Button.tsx`
- See `packages/design-system-react/src/components/Text/Text.tsx`
```

This:

- Reduces duplication
- Keeps examples up-to-date automatically
- Shorter context for AI agents
- Single source of truth (the actual code)

## Layer 3: docs/ (High-Level Guides)

**Purpose:** High-level contributor guides and infrequent processes.

**Content:**

- `contributing.md` - High-level overview, points to `.cursor/rules/`
- `ai-agents.md` - This file, strategy explanation
- `metamask-standards-links.md` - Links to MetaMask contributor-docs
- `reviewing-release-prs.md` - Release process
- `package-migration-process-guide.md` - Infrequent package migrations

**What moved to .cursor/rules/:**

- Tailwind best practices → `styling.md`
- Component creation → `component-creation.md`
- Component documentation → `component-documentation.md`
- Accessibility testing → merged into `testing.md`
- Figma Code Connect → `figma-integration.md`

## How AI Agents Use This

### Cursor

**Automatic loading:**

- Cursor automatically loads all files in `.cursor/rules/`
- Rules guide code generation and suggestions throughout session

**Usage:**

1. Open Cursor in this repo
2. Start coding - rules apply automatically
3. All `.cursor/rules/*.md` files are loaded automatically

### Claude Code

**Session start:**

- Claude reads `CLAUDE.md` automatically
- `CLAUDE.md` explicitly references individual rule files in `@.cursor/rules/`
- Rules persist throughout conversation

**Usage:**

1. Start new Claude Code session
2. Ask: "What are the coding conventions?" to see loaded rules
3. Reference specific rules: "What are the TypeScript patterns?"
4. Create `CLAUDE.local.md` for personal overrides (gitignored)

## Key Principles

### 1. Reference Over Duplication

Rules **reference** existing comprehensive docs rather than duplicating:

```markdown
## References

- https://github.com/MetaMask/contributor-docs/blob/main/docs/react.md
- See `packages/design-system-react/src/components/Button/` for pattern
```

**Benefits:**

- Single source of truth
- No maintenance burden
- Stays in sync automatically

### 2. Checklists Over Narratives

Rules are formatted as actionable checklists:

```markdown
## Critical Rules

### Never

- ❌ Arbitrary Tailwind values
- ❌ String literals for variants

### Always

- ✅ Design tokens only
- ✅ Enums for all variants
```

Not verbose explanations or tutorials.

### 3. Context Efficiency

Every line earns its place:

- Remove anything agents can infer from code
- Focus on rules that prevent repeated mistakes
- Point to examples rather than duplicating them

### 4. Iterative Improvement

Add rules when observing AI agents make repeated mistakes:

1. Notice pattern of errors
2. Document correct approach in appropriate rule file
3. Test with AI agents
4. Refine based on behavior

## Critical Invariants

These rules appear in CLAUDE.md because AI agents repeatedly get them wrong:

**TypeScript:**

- NEVER use string literals for component props → ALWAYS use enums

**Styling:**

- NEVER use arbitrary Tailwind values → ONLY design token generated tailwind classnames
- NEVER use default colors → ONLY theme tokens from tailwind config

**Testing:**

- ALWAYS write tests when creating/modifying components

**Component Creation:**

- ALWAYS use `yarn create-component:react` script
- NEVER manually create component files

## Implementation Strategy

### Phase 1: Structure (This PR)

**Files in this PR:**

- `CLAUDE.md` - Thin entry point listing future rule files
- `docs/ai-agents.md` - This file (strategy explanation)
- `CLAUDE.local.md.example` - Personal overrides template
- `.gitignore` - Ignore CLAUDE.local.md

**Result:** Establishes the three-layer architecture

### Phase 2: Rule Files (Separate PRs)

Each rule file in its own PR:

1. PR: Add `styling.md`
2. PR: Add `component-creation.md`
3. PR: Add `component-documentation.md`
4. PR: Add `testing.md`
5. PR: Add `monorepo-workflow.md`
6. PR: Add `typescript-patterns.md`
7. PR: Add `figma-integration.md`

**Benefits:**

- Easier to review
- Can iterate on format based on feedback
- Team can test AI behavior incrementally

### Phase 3: Consolidation (Future)

After rule files are working:

- Delete old `docs/tailwind-best-practices.md`
- Delete old `docs/create-component.md`
- Delete old `docs/component-documentation.md`
- Delete old `docs/figma-code-connect.md`
- Delete old `docs/accessibility-testing.md`
- Move examples: `docs/component-readme-examples/` → `.cursor/rules/examples/`

## Personal Customization

Developers can create `CLAUDE.local.md` for personal preferences:

```bash
cp CLAUDE.local.md.example CLAUDE.local.md
# Edit with personal preferences
# File is gitignored, won't be committed
```

**Use for:**

- Personal coding style preferences
- Custom workflows
- Platform focus (web vs mobile)
- Testing preferences

**Don't use for:**

- Overriding critical team rules
- Breaking established conventions

## Maintenance

### Keeping Rules Updated

**When comprehensive docs change:**

1. Update the comprehensive doc
2. Check if related rule needs update
3. Update rule if guidance changed
4. Test with AI agents
5. Commit both together

**When observing AI mistakes:**

1. Notice repeated error pattern
2. Add to appropriate rule file
3. Test with AI agents
4. Commit the fix

### Measuring Effectiveness

**Good rules:**

- AI agents follow consistently
- Reduce repeated questions
- Require minimal updates
- Referenced when AI explains approach

**Signs rule needs improvement:**

- AI agents ignore it
- Too verbose (agents miss key points)
- Too vague (agents interpret incorrectly)
- Conflicts with other rules

## Benefits

### For AI Agents

✅ **Reliable rule pickup** - Short, focused files
✅ **Context efficient** - Checklists vs novels
✅ **Actionable guidance** - What to do, not theory
✅ **Up-to-date examples** - Points to real code

### For Humans

✅ **Quick reference** - Easy to scan checklists
✅ **Understanding AI** - See what rules agents follow
✅ **Onboarding** - Clear conventions and patterns
✅ **Maintainable** - Checklists easier to update

### For the Team

✅ **Single source of truth** - No duplication
✅ **Iterative improvement** - Add rules as needed
✅ **Clear ownership** - Rules close to code
✅ **Scalable** - Easy to add new rules

## References

### Official Documentation

- [Cursor Agent Best Practices](https://cursor.com/blog/agent-best-practices)
- [Claude Code: Writing Effective CLAUDE.md](https://code.claude.com/docs/en/best-practices#write-an-effective-claude-md)
- [Cursor Rules Documentation](https://cursor.com/docs/context/rules)
- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)

### This Repository

- **Entry Point:** [CLAUDE.md](../CLAUDE.md)
- **Rules Directory:** [.cursor/rules/](../.cursor/rules/) (rule files added in Phase 2)
- **Contributing:** [docs/contributing.md](./contributing.md)
- **MetaMask Standards:** [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)

## Questions?

If you have questions about the documentation strategy:

- Review this file for the overall approach
- Check `CLAUDE.md` for critical invariants and rule references
- Browse `.cursor/rules/` for specific rules
- Open an issue for suggestions or improvements
