# dsys-616-migration-docs-cross-repo

Cross-repo completion automation for epic **DSYS-616** (_Component migration docs and API maps_).

## Purpose

Automate Jira progress for DSYS-616 Stories only when required PRs are merged across the involved repos:

- `MetaMask/metamask-design-system`
- `MetaMask/metamask-extension`
- `MetaMask/metamask-mobile`

This avoids premature closure when only one repo merged.

## Why Scheduled (not only GitHub trigger)

A single GitHub trigger run is scoped to one merged PR event. DSYS-616 Stories often depend on multiple repos, so a reliable closer should evaluate aggregate merge state.

Use a **scheduled automation** (e.g. hourly) as the source of truth. Optionally add per-repo `Pull request merged` triggers that only add Jira comments, but do not transition status.

## Required Tools

- **MCP server** enabled.
- **Atlassian/Jira MCP** enabled.
- **GitHub MCP** enabled.

## Candidate Query

Use JQL to scan active Story work under the epic:

```jql
parent = DSYS-616 AND issuetype = Story AND statusCategory != Done ORDER BY Rank ASC
```

## Repo Requirements Per Story

Default policy for DSYS-616 Stories:

- Require merged PRs in:
  - `metamask-design-system`
  - `metamask-extension`
  - `metamask-mobile`

Exceptions:

- React Native / Mobile-only components may skip extension.
- React / Extension-only components may skip mobile.

Recommended way to encode exceptions on the Jira Story:

- `repo-scope:mobile-only`
- `repo-scope:extension-only`

If no scope label exists, treat Story as requiring all three repos.

## PR Discovery Rules

For each candidate Story key (e.g. `DSYS-632`):

1. Search PRs in each required repo for PR description lines matching your template convention:
   - `Fixes: DSYS-<number>`
2. Consider PR valid when it is merged and `Fixes:` references the exact Story key.
3. Prefer latest merged PR per repo when multiple exist.
4. If no merged PR found for a required repo, the Story is **not ready**.

Do not rely on title-only or branch-only matching for closure.

## Transition Rules (Merge Sweeper)

For each Story:

1. If all required repos have merged PRs:
   - transition Story to Done (or nearest done-category status in the workflow),
   - add a Jira comment summarizing merged PR URLs by repo.
2. If missing merges:
   - keep status unchanged,
   - optionally comment only when state changed since last run.

After Story updates, evaluate epic:

```jql
parent = DSYS-616 AND statusCategory != Done
```

- If zero remaining, transition **DSYS-616** to Done and comment summary.

## Companion Transition Rule (PR Opened -> In Progress)

Use a separate GitHub-triggered automation on `Pull request opened` (or `Draft opened` + `Pull request opened`) to move Stories to active work sooner.

Rules:

1. Parse PR description and extract `Fixes: DSYS-<number>`.
2. If extracted issue is under epic `DSYS-616` and status is `To Do`, transition to `In Progress`.
3. Add a Jira comment with PR URL and repo.
4. If issue already `In Progress`/Done, do not change status.

## Idempotency

Avoid duplicate comments and transitions:

- Check current status category before transitioning.
- Use deterministic comment marker, for example:
  - `<!-- dsys-616-cross-repo-closure:v1 -->`
- Update or skip if marker already exists with same merged PR set.

## Cloud Automation Prompt (scheduled merge sweeper)

```text
Run every hour.

You are closing DSYS-616 Story tickets only when required PRs are merged across all required repos.
Use MCP tools only (Atlassian + GitHub).

1) Query Jira:
   parent = DSYS-616 AND issuetype = Story AND statusCategory != Done ORDER BY Rank ASC

2) For each Story:
   - Determine required repos:
     - default: design-system + extension + mobile
     - label repo-scope:mobile-only => design-system + mobile
     - label repo-scope:extension-only => design-system + extension
   - In each required repo, find merged PR(s) whose PR description contains:
     Fixes: <STORY_KEY>
   - If all required repos have merged PRs:
     - Transition Story to Done (or nearest done-category status)
     - Add Jira comment with merged PR links per repo and include marker:
       <!-- dsys-616-cross-repo-closure:v1 -->
   - If not all merged, do not transition.

3) After processing Stories:
   - Query remaining:
     parent = DSYS-616 AND statusCategory != Done
   - If none remain, transition DSYS-616 to Done and comment with summary.

4) Output concise run summary:
   - transitioned stories
   - blocked stories (missing repo merges)
   - epic transitioned or not
```

## Cloud Automation Prompt (PR opened -> In Progress)

```text
Triggered by GitHub pull request opened (optionally include draft opened).

Use MCP tools only (Atlassian + GitHub).

1) Read triggering PR description and extract issue key from:
   Fixes: DSYS-<number>
   If absent, stop.

2) Verify issue belongs to epic DSYS-616.

3) If issue status is To Do:
   - transition to In Progress
   - add Jira comment with PR URL + repo and marker:
     <!-- dsys-616-pr-opened:v1 -->

4) If issue is already In Progress or Done:
   - do not transition
   - optionally skip comment if marker already present for same PR.
```

## Optional Companion GitHub Triggers

If you want faster updates, add per-repo GitHub-triggered automations:

- `Pull request opened`: transition Story to `In Progress` using `Fixes:` mapping.
- `Pull request merged`: optional progress comment only.

Keep final status transitions in the scheduled sweeper above.
