# AI Agent Documentation Strategy

Documentation structure for AI coding agents (Cursor and Claude Code) working in the MetaMask Design System repository.

## Overview

Documentation has evolved for an AI-first development workflow. As most code is now created by AI agents rather than engineers manually reading comprehensive guides, our documentation strategy prioritizes:

- **AI Agent Guardrails**: Prevent common mistakes agents make repeatedly
- **Dual-Purpose Design**: Rules serve as both AI instructions and human-readable reference
- **Context Efficiency**: Checklists and examples over comprehensive tutorials
- **Markdown Format**: Structured for agents, readable for humans

Engineers can reference `.cursor/rules/` directly when needed, but the primary interaction is through agents interpreting these rules during development.

### Three-Layer Structure

```
.
├── CLAUDE.md                   # Layer 1: Entry point (40-120 lines)
├── .cursor/rules/              # Layer 2: Focused rules (200-400 lines each)
│   └── *.md                   # Individual rule files
├── .cursor/automations/        # Layer 2.5: Version-controlled automation specs
│   ├── README.md              # Automation operating model
│   └── *.md                   # One spec per automation
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

**Current Rule Files**

- `component-architecture.md` - Component architectural patterns (ADR-0003/0004, layered architecture, cross-platform)
- `component-creation.md` - Component scaffolding HOW-TO guide
- `component-migration.md` - Extension/mobile component migration (priority workflow)
- `component-enum-union-migration.md` - Internal ADR-0003/0004 migration
- `styling.md` - Design tokens, Tailwind, component-first
- `component-documentation.md` - Storybook and README standards
- `figma-integration.md` - Code Connect
- `testing.md` - Jest, Testing Library, accessibility, style assertions

**Planned Rule Files**

- `monorepo-workflow.md` - Workspace commands

**Why this format?**

- **Context efficient:** Every line prevents a mistake
- **Actionable:** Tell agents what to do, not theory
- **Reference-based:** Rules point to canonical code examples in the codebase rather than duplicating them
- **Maintainable:** Checklists easier to update than narratives

## Layer 2.5: .cursor/automations/ (Automation Specs)

**Purpose:** Keep Cursor Cloud Automation logic reviewable in git.

**Why:** Automations are configured in Cursor UI, but UI state is not code-reviewed by default. Specs in `.cursor/automations/` provide auditable history and explicit trigger/PR contracts.

**Operating Model:**

1. Edit automation markdown specs in `.cursor/automations/`.
2. Review and merge spec changes via PR.
3. Sync merged spec changes into Cursor UI automation settings.
4. Treat UI as deployment target, repo markdown as canonical source.

**Conventions:**

- One markdown file per automation where possible.
- Include explicit trigger definitions and PR title/body contracts.
- Use deterministic identifiers (`Fixes: DSYS-<id>`, version markers).
- Prefer file-path-based comparison/audit instructions over vague prompts.

## Layer 3: docs/ (High-Level Guides)

**Purpose:** High-level contributor guides and infrequent processes.

**Content:**

- `contributing.md` - High-level overview, points to `.cursor/rules/`
- `ai-agents.md` - This file, strategy explanation
- `reviewing-release-prs.md` - Release process
- `package-migration-process-guide.md` - Infrequent migrations

## Storybook MCP as Dynamic Context

The three-layer model provides static guidance (rules, conventions, and process). Storybook MCP adds a dynamic context layer that agents can query at runtime.

### What this adds

- Live component and docs metadata from Storybook manifests
- Story-level examples that reduce prop/API hallucination
- Optional story test execution and preview tooling when addon toolsets are enabled

### Maintainers vs consumers

- **Maintainers (this repo):** Continue using `.cursor/rules/` as the source of truth for conventions. Storybook MCP is a workflow accelerator for story authoring and validation.
- **Consumers (downstream repos):** Storybook MCP provides the highest value. Agents can discover components and props from a running or published Storybook without reading this repo's source.

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

## Key Principles

### 1. Reference Over Duplication

Rules point to existing comprehensive docs and canonical code examples rather than duplicating content. This maintains a single source of truth and stays in sync automatically.

### 2. Checklists Over Narratives

Rules use actionable Do/Don't checklists with ❌/✅ examples rather than verbose explanations or tutorials.

### 3. Context Efficiency

Every line must prevent a mistake or provide essential guidance. Remove anything agents can infer from code.

### 4. Iterative Improvement

Add rules when observing AI agents make repeated mistakes. Test with agents and refine based on their behavior.

## References

### Official Documentation

- [Cursor Agent Best Practices](https://cursor.com/blog/agent-best-practices)
- [Claude Code: Writing Effective CLAUDE.md](https://code.claude.com/docs/en/best-practices#write-an-effective-claude-md)
- [Cursor Rules Documentation](https://cursor.com/docs/context/rules)
- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)

### This Repository

- **Strategy:** This file explains the three-layer architecture
- **Contributing:** [docs/contributing.md](./contributing.md)
- **MetaMask Standards:** [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
