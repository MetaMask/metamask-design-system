# DSYS-616: MMDS - Create/Update {ComponentName} Migration Docs

Repository: `MetaMask/metamask-design-system`

## Purpose

Create or improve migration docs for one component, then absorb feedback from client PRs (mobile/extension) and iterate docs until discrepancies are resolved.

## Repository Context

Primary legacy source roots to audit:

- Extension:
  - `https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library`
- Mobile:
  - `https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library/components`

MMDS target source roots to compare against:

- React:
  - `https://github.com/MetaMask/metamask-design-system/tree/main/packages/design-system-react/src/components`
- React Native:
  - `https://github.com/MetaMask/metamask-design-system/tree/main/packages/design-system-react-native/src/components`

Folder structures may vary by component, but searches should start in these roots before broadening.

## PR Contract

- Title: `chore: [DSYS-616] create/update {ComponentName} migration docs`
- PR body must include: `DSYS_EPIC: DSYS-616`
- PR body should include: `Fixes: DSYS-<story-number>`
- PR body must include: `MIGRATION_DOCS_VERSION: <version>`

## Jira Workflow Contract

- On first qualifying PR open for the DSYS story, transition Jira to `In Progress` if not already in progress/done.
- Never auto-close Jira issues from this automation.
- Jira closure is manual after all required PRs are merged.

## Required Tools

- GitHub built-in tools:
  - Open pull request
  - Comment on pull request
- Atlassian/Jira MCP
- MCP server connector configured for Atlassian

## GitHub Author

- Open PR as GitHub user `{githubusername}`.
- If `{githubusername}` is not explicitly set in automation context, infer it from the signed-in Cursor account and use that value consistently for PR authoring.

## Golden Paths

- Text + Box: https://github.com/MetaMask/metamask-design-system/pull/953
- Icon: https://github.com/MetaMask/metamask-design-system/pull/962

## Breaking-Change Quality Gate

For every run, compare legacy vs MMDS APIs before editing docs:

1. Legacy API in extension and mobile codebases (when in scope): props, enums/unions, required/default values, callback signatures.
2. MMDS API in `design-system-react` and `design-system-react-native`.
3. Produce a structured mapping in docs: removed, renamed, type/value changes, default changes, behavior notes.
4. Include before/after examples for extension and mobile.
5. If source comparison is incomplete, stop and report missing files.

## Required Deliverables (Docs Story)

For component docs stories (for example DSYS-632 style work), completion requires all of:

1. React migration section in `packages/design-system-react/MIGRATION.md`.
2. React Native migration section in `packages/design-system-react-native/MIGRATION.md`.
3. React component README migration link in `packages/design-system-react/src/components/{ComponentName}/README.mdx`.
4. React Native component README migration link in `packages/design-system-react-native/src/components/{ComponentName}/README.md`.

Do not treat MIGRATION-only edits as complete when README files exist for the component.

## Validation Gate

Before opening or updating the PR, run lint autofix and validation:

1. `yarn lint:fix`
2. `yarn lint`

If lint still fails, do not open/update the PR. Report the failing files/errors in the run summary.

## Audit Procedure (File-Based, Not Memory-Based)

1. Locate component paths under extension/mobile legacy source roots.
2. Locate MMDS component paths under React and React Native roots.
3. Compare from source files:
   - props/types/interfaces,
   - enum/union values,
   - default values,
   - callback signatures.
4. Generate migration docs from this explicit diff.
5. If either side is unresolved, report exact missing paths and stop.

## Feedback Loop Rules

Scan client PRs for DSYS-616 component work and feed findings back into docs:

1. Find mobile/extension PRs with title containing `[DSYS-616]` and body containing `DSYS_EPIC: DSYS-616`.
2. Read `Migration doc discrepancies found` section in those PRs.
3. If discrepancies exist, update MMDS migration docs and push/update MMDS PR.
4. Add a comment linking the MMDS docs fix back to each client PR.

## Loop Trigger Identifier

Use `MIGRATION_DOCS_VERSION` in PR body/comments (for example commit SHA of docs section update).

- Any docs version change should trigger another client replacement run.
- Do not rerun clients if version is unchanged.

## Downstream Discovery Contract

Client automations (mobile/extension) discover MMDS docs PRs on cron.

- Discovery signals:
  - title starts with `chore: [DSYS-616] create/update`
  - body contains `DSYS_EPIC: DSYS-616`
  - body contains `MIGRATION_DOCS_VERSION: <version>`

## Cloud Automation Prompt

```text
Goal: Create/update migration docs for one component and keep them accurate using client feedback.

0) Open PR as GitHub user {githubusername}. If not explicitly set, infer from signed-in Cursor account.

1) Pick DSYS-616 story + component from Jira.
2) Enforce breaking-change quality gate by comparing extension/mobile legacy APIs with MMDS React/RN APIs.
3) Update migration docs and examples in both React and React Native MIGRATION.md.
4) Update component README migration links in both packages when README files exist:
   - React: packages/design-system-react/src/components/{ComponentName}/README.mdx
   - React Native: packages/design-system-react-native/src/components/{ComponentName}/README.md
5) If README files exist but are not updated, stop and report incomplete deliverables.
6) Run validation gate:
   - yarn lint:fix
   - yarn lint
   If lint fails, stop and report failures without opening/updating PR.
7) Open or update PR with:
   - title: chore: [DSYS-616] create/update {ComponentName} migration docs
   - body includes: DSYS_EPIC: DSYS-616
   - body should include: Fixes: DSYS-<story-number>
   - body includes: MIGRATION_DOCS_VERSION: <version>
8) On first qualifying PR open, transition Jira ticket to In Progress (if not already in progress/done). Do not auto-close Jira.
9) Scan DSYS-616 client PRs in extension/mobile for "Migration doc discrepancies found".
10) If discrepancies are present, patch docs, update the same PR, and comment back with the docs-fix link.
11) Output summary: story key, component, docs version, files updated (including README links), lint status, jira transition status, discrepancy actions taken.
```
