# DSYS-616: Mobile - Replace Single {ComponentName} Instance + @deprecated JSDoc

Repository: `MetaMask/metamask-mobile`

## Purpose

For a DSYS-616 component, replace exactly one production usage and update legacy `@deprecated` JSDoc links to MMDS migration docs.

## Repository Context

Legacy component definitions (for JSDoc updates):

- `https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library/components`

Replacement search scope (for usage replacement):

- `https://github.com/MetaMask/metamask-mobile/tree/main/app/components`

Do not perform usage replacement inside the legacy component-library root.

## PR Contract

- Title: `chore: [DSYS-616] replace single {ComponentName} instance and update @deprecated JSDoc`
- PR body must include: `Fixes: DSYS-<story-number>`
- PR body must include: `Processed MIGRATION_DOCS_VERSION: <version>`

## Jira Workflow Contract

- On first qualifying PR open for the DSYS story, transition Jira to `In Progress` if not already in progress/done.
- Never auto-close Jira issues from this automation.
- Jira closure is manual after all required PRs are merged.

## Required Tools

- GitHub built-in tools:
  - Open pull request
- Atlassian/Jira MCP
- MCP server connector configured for Atlassian

## GitHub Author

- Open PR as GitHub user `{githubusername}`.
- If `{githubusername}` is not explicitly set in automation context, infer it from the signed-in Cursor account and use that value consistently for PR authoring.

## Trigger/Input

Use MMDS upstream label-driven triggers:

1. GitHub `Label change` trigger on `MetaMask/metamask-design-system` PRs.
2. Process only when label `dsys-616-migration-docs` is present.
3. Verify MMDS PR title/body contract:
   - title starts with `chore: [DSYS-616] create/update`
   - body includes `Fixes: DSYS-<story-number>`

Only run when docs version is newer than the last processed version.

## Rerun Determinism

Use client PR body marker as the source of truth:

- Marker format: `Processed MIGRATION_DOCS_VERSION: <version>`
- Before making changes, search existing mobile PRs for same DSYS story + component.
- If a PR already contains the same processed version marker, exit silently.
- Only proceed when incoming docs version is newer than previously processed version for that story/component in mobile.

## Execution Rules

1. Read latest MMDS migration docs for `{ComponentName}`.
2. Update `@deprecated` JSDoc on legacy mobile component entry points with migration link.
3. Replace exactly one production usage (not tests/stories) of legacy component with MMDS component under `app/components`.
4. Record any doc discrepancy in PR body under section:
   - `Migration doc discrepancies found`
5. Open or update draft PR with required title/body contract.

## Safety Rules

- Change exactly one usage site per run.
- Exclude `app/component-library/components` from replacement target search.
- If zero safe candidates, stop and report.
- If migration docs are ambiguous, report discrepancy instead of guessing.
- If trigger payload does not satisfy DSYS label/title/body contract, exit silently (no PR comments).

## Cloud Automation Prompt

```text
Goal: In mobile, replace one legacy {ComponentName} usage and update @deprecated JSDoc using latest MMDS migration docs.

0) Open PR as GitHub user {githubusername}. If not explicitly set, infer from signed-in Cursor account.
0.1) Validate upstream MMDS PR contract from trigger payload:
     - label includes dsys-616-migration-docs
     - title starts with chore: [DSYS-616] create/update
     - body includes Fixes: DSYS-<story-number>
     If any check fails, exit silently with no PR comments.

1) Resolve DSYS story + component via Fixes key.
2) Fetch latest MMDS migration docs and MIGRATION_DOCS_VERSION.
3) If docs version is not newer than last processed for this story, exit.
4) Update @deprecated JSDoc links for legacy mobile entry points.
5) Replace exactly one production usage (exclude tests/stories).
6) If docs are unclear or incorrect, add details to "Migration doc discrepancies found" in PR body.
7) Open/update draft PR with:
   - title: chore: [DSYS-616] replace single {ComponentName} instance and update @deprecated JSDoc
   - body includes: Fixes: DSYS-<story-number>
   - include Processed MIGRATION_DOCS_VERSION: <version>.
8) On first qualifying PR open, transition Jira ticket to In Progress (if not already in progress/done). Do not auto-close Jira.
9) Output summary: changed files, replaced callsite, jira transition status, discrepancies.
```
