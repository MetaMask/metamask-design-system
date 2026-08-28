@AGENTS.md

## Agent skills

### Issue tracker

Work is tracked in Consensys Jira, mainly in the DSYS project. See `docs/agents/issue-tracker.md`.

### Triage labels

Triage uses the five standard agent-workflow labels. See `docs/agents/triage-labels.md`.

### Domain docs

Use one root `CONTEXT.md`. Organization ADRs live in `MetaMask/decisions`. See `docs/agents/domain.md`.

## Documentation for AI Agents

Claude Code expands these `@` imports at session start. Other agents should open the matching file when the task is relevant.

@.cursor/rules/styling.md
@.cursor/rules/testing.md
@.cursor/rules/component-documentation.md
@.cursor/rules/component-architecture.md
@.cursor/rules/component-creation.md
@.cursor/rules/component-enum-union-migration.md
@.cursor/rules/component-migration.md
@.cursor/rules/figma-integration.md
@.cursor/rules/release-workflow.md
@.cursor/rules/content-guidelines.mdc

See `docs/ai-agents.md` for the full strategy.

## Personal Overrides

As per [Claude Code best practices](https://code.claude.com/docs/en/best-practices), create `CLAUDE.local.md` for personal preferences (gitignored).
See `CLAUDE.local.md.example` for template.
