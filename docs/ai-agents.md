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
├── AGENTS.md                   # Layer 1: Shared entry point (40-120 lines)
├── CLAUDE.md                   # Claude Code loader: @AGENTS.md plus Claude-only imports
├── .cursor/rules/              # Layer 2: Focused rules
│   ├── *.mdc                  # Cursor project rules (alwaysApply / globs / description)
│   └── *.md                   # Detailed checklists (Claude Code @-imports; other agents Read)
└── docs/                       # Layer 3: High-level guides
    └── ai-agents.md           # This file - strategy explanation
```

## Layer 1: AGENTS.md (Entry Point)

**Purpose:** Shared instructions auto-loaded by Cursor, Codex, Copilot, and similar agents.

**Claude Code:** Does **not** read `AGENTS.md` directly. `CLAUDE.md` must import it with `@AGENTS.md` ([Anthropic memory docs](https://code.claude.com/docs/en/memory#agentsmd)). Keep Claude-only notes (path-scoped imports, `CLAUDE.local.md`) in `CLAUDE.md` below that import.

**Content (in `AGENTS.md`):**

- Critical invariants (never break these) — written inline, not only as a pointer to another file
- Essential commands
- Monorepo structure overview
- Paths to Layer 2 rules (agents open the matching file; Claude Code also `@`-imports them from `CLAUDE.md`)

**Size:** 40-120 lines (keeps context efficient)

**Philosophy:** Every line must prevent a mistake or provide essential guidance.

**Why so short?**

- Claude Code and Cursor both recommend a concise always-loaded file
- Agents can miss key rules in verbose files
- Put detailed workflows in `.cursor/rules/`

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
- `release-workflow.md` - Release PRs, changelog quality, `MIGRATION.md` (loaded when doing a release)
- `content-guidelines.mdc` - Sentence case, punctuation, tone, and terminology for user-facing copy

**Planned Rule Files**

- `monorepo-workflow.md` - Workspace commands

**Why this format?**

- **Context efficient:** Every line prevents a mistake
- **Actionable:** Tell agents what to do, not theory
- **Reference-based:** Rules point to canonical code examples in the codebase rather than duplicating them
- **Maintainable:** Checklists easier to update than narratives

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

### Cursor Cloud Automations

[Cursor Automations](https://cursor.com/docs/cloud-agent/automations) should follow the **same principles** as interactive agents in this repo (see [Key Principles](#key-principles) below):

- **Reference over duplication** — Automation prompts should `@`-mention `@AGENTS.md` and specific `@.cursor/rules/*.md` files instead of pasting long paraphrased workflows. Rules stay the single source of truth.
- **Checklists over narratives** — Implementation steps live in the rules (Do/Don’t, verification); the prompt only sequences _which_ rules apply and _when_ (e.g. after Jira pickup).
- **Context efficiency** — Keep the scheduled prompt short; agents pull detail from rules and golden-path file paths inside those rules.
- **Verification** — Always run commands from repo root as in `AGENTS.md` (e.g. `yarn build`, `yarn test`, `yarn lint`).

Repo-specific automation specs (Jira epic, JQL, PR identity notes) live under `.cursor/automations/`. Keep specs **in git** on purpose: the Cursor Automations UI has **no native version control**—the repo is where you review, diff, and roll forward or back; the UI prompt is a **mirror** (link or copy-paste) of that spec.

### Cursor (Desktop and Cloud Agents)

Cloud Agents can **read** any markdown in the repo, including `.cursor/rules/*.md`. That is not the same as those files being **injected as Project Rules**.

[Cursor project rules](https://cursor.com/docs/rules.md) (the files the rules system auto-includes in context) are `.cursor/rules/*.mdc` with YAML frontmatter (`alwaysApply`, `globs`, `description`). Official docs: a plain `.md` file in that folder is ignored by the **rules system**. [Cloud Agent best practices](https://cursor.com/docs/cloud-agent/best-practices.md) also describe repo rules as `.cursor/rules/*.mdc`.

What _is_ auto-loaded as markdown instructions:

- `AGENTS.md` (Cursor, Codex, Copilot, and similar)
- `CLAUDE.md` (Claude Code always; Cursor may also load it — keep it a thin `@AGENTS.md` import so content is not duplicated)
- `.cursor/rules/*.mdc` according to `alwaysApply` / `globs` / `description`
- User rules and Team rules from the Cursor dashboard

`.cursor/rules/*.md` files are not Cursor project rules. Claude Code can `@`-import them from `CLAUDE.md` (imports expand at launch). Cursor Cloud Agents only see those files if they open them. Put must-not-miss invariants **inline in `AGENTS.md`**.

**How to make a convention apply to all agents without relying on them opening a file:**

1. Write the invariant **inline** in `AGENTS.md` (loaded by Cursor / Codex / Copilot).
2. Keep `CLAUDE.md` as `@AGENTS.md` plus any Claude-only notes so Claude Code gets the same text.
3. Merge to the branch agents start from (usually `main`).
4. Optional, org-wide: add an [enforced Team Rule](https://cursor.com/dashboard/team-content).

**Usage:**

1. Open Cursor in this repo
2. `AGENTS.md` is injected into Agent and Cloud Agent sessions
3. `.cursor/rules/*.mdc` files attach via `alwaysApply` / globs / description if you add any
4. `.cursor/rules/*.md` is not auto-injected by Cursor; agents may still `Read` those files when they choose to

### Claude Code

**Session start:**

- Claude reads `CLAUDE.md` automatically, **not** `AGENTS.md`
- This repo's `CLAUDE.md` starts with `@AGENTS.md` so Claude Code loads the shared entry point
- `@.cursor/rules/*.md` imports in `CLAUDE.md` expand at launch (max four hops)
- `CLAUDE.local.md` remains the gitignored personal overlay

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
