# Cursor Automations (Version-Controlled Specs)

This directory is a version-controlled source of truth for Cursor Cloud Automations:

- Product UI target: https://cursor.com/automations
- Docs: https://cursor.com/docs/cloud-agent/automations

## Why this exists

Cursor automation prompts/config are edited in the Cursor UI, but UI state is not reviewed like code. These markdown specs provide:

- reviewable change history in git,
- explicit workflow contracts (triggers, identifiers, safety rules),
- reusable templates for personal and team automations.

Treat the Cursor UI as a deployment target. Treat files in this directory as canonical specs.

## Operating model

1. Edit or add automation specs in this directory.
2. Open PR and review prompt/rule changes like code.
3. After merge, sync the corresponding automation in Cursor UI.
4. Keep UI and spec aligned; update this directory first for future changes.

## Current DSYS-616 suite

- Index / suite map:
  - `@.cursor/automations/dsys-616-migration-docs-cross-repo.md`
- MMDS docs automation:
  - `@.cursor/automations/dsys-616-mmds-create-update-migration-docs.md`
- Mobile single-instance replacement automation:
  - `@.cursor/automations/dsys-616-mobile-replace-single-instance.md`
- Extension single-instance replacement automation:
  - `@.cursor/automations/dsys-616-extension-replace-single-instance.md`

## Conventions

- Keep one markdown spec per automation when possible.
- Include explicit trigger and PR-title/body contracts.
- Use deterministic identifiers (`Fixes: DSYS-<id>`, version markers).
- Prefer file-based comparisons over memory-based reasoning in prompts.
- Add safety constraints for search scope and write scope.

## Notes

This folder is also an experimentation area for evolving automation workflows before stabilizing them for wider team use. Keep experiments clear, scoped, and documented so they can be adopted or retired intentionally.
