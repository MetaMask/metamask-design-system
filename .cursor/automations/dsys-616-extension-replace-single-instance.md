# DSYS-616: Extension - Replace Single {ComponentName} Instance + @deprecated JSDoc

Repository: `MetaMask/metamask-extension`

## Purpose

For a DSYS-616 component, replace exactly one production usage and update legacy `@deprecated` JSDoc links to MMDS migration docs.

## Repository Context

Legacy component definitions (for JSDoc updates):

- `https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library`

Replacement search scopes (for usage replacement):

- `https://github.com/MetaMask/metamask-extension/tree/main/ui/components` (excluding `component-library`)
- `https://github.com/MetaMask/metamask-extension/tree/main/ui/pages`

Do not perform usage replacement inside `ui/components/component-library`.

## PR Contract

- Title: `chore: [DSYS-616] replace single {ComponentName} instance and update @deprecated JSDoc`
- PR body must include: `DSYS_EPIC: DSYS-616`
- PR body should include: `Fixes: DSYS-<story-number>`
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

Use scheduled cron trigger in `MetaMask/metamask-extension`.

On each run, discover candidate MMDS docs PRs in `MetaMask/metamask-design-system` and verify:
   - title starts with `chore: [DSYS-616] create/update`
   - body includes `DSYS_EPIC: DSYS-616`
   - body includes `MIGRATION_DOCS_VERSION: <version>`

Only run when docs version is newer than the last processed version.

## Rerun Determinism

Use client PR body marker as the source of truth:

- Marker format: `Processed MIGRATION_DOCS_VERSION: <version>`
- Before making changes, search existing extension PRs for same DSYS story + component.
- If a PR already contains the same processed version marker, exit silently.
- Only proceed when incoming docs version is newer than previously processed version for that story/component in extension.

## Execution Rules

1. Read latest MMDS migration docs for `{ComponentName}`.
2. Update `@deprecated` JSDoc on legacy extension component entry points with migration link.
3. Replace exactly one production usage (not tests/stories) of legacy component with MMDS component under allowed replacement scopes.
4. Record any doc discrepancy in PR body under section:
   - `Migration doc discrepancies found`
5. Open or update draft PR with required title/body contract.

## Safety Rules

- Change exactly one usage site per run.
- Exclude `ui/components/component-library` from replacement target search.
- If zero safe candidates, stop and report.
- If migration docs are ambiguous, report discrepancy instead of guessing.
- If no valid MMDS docs PR candidate is found, exit silently (no PR comments).

## Cloud Automation Prompt

```text
Goal: In extension, replace one legacy {ComponentName} usage and update @deprecated JSDoc using latest MMDS migration docs.

0) Open PR as GitHub user {githubusername}. If not explicitly set, infer from signed-in Cursor account.
0.1) Discover upstream MMDS docs PR candidates in MetaMask/metamask-design-system:
     - title starts with chore: [DSYS-616] create/update
     - body includes DSYS_EPIC: DSYS-616
     - body includes MIGRATION_DOCS_VERSION: <version>
     Pick newest unprocessed version for this repo. If none, exit silently with no PR comments.

1) Resolve DSYS story + component from selected MMDS docs PR.
2) Fetch latest MMDS migration docs and MIGRATION_DOCS_VERSION.
3) If docs version is not newer than last processed for this story, exit.
4) Update @deprecated JSDoc links for legacy extension entry points.
5) Replace exactly one production usage (exclude tests/stories).
6) If docs are unclear or incorrect, add details to "Migration doc discrepancies found" in PR body.
7) Open/update draft PR with:
   - title: chore: [DSYS-616] replace single {ComponentName} instance and update @deprecated JSDoc
   - body includes: DSYS_EPIC: DSYS-616
   - body should include: Fixes: DSYS-<story-number>
   - include Processed MIGRATION_DOCS_VERSION: <version>.
8) On first qualifying PR open, transition Jira ticket to In Progress (if not already in progress/done). Do not auto-close Jira.
9) Output summary: changed files, replaced callsite, jira transition status, discrepancies.
```
