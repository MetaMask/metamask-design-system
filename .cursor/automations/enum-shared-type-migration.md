# enum-shared-type-migration

Daily Jira pickup for epic **DSYS-468** (*Component ADR Migration* / ADR-0003 & ADR-0004). This file is the **source of truth**. In Chat, `@`-mention `.cursor/automations/enum-shared-type-migration.md` or the companion rule **enum-shared-type-migration** so the agent follows these steps.

## Scope (edit if your epic or identity changes)

| Setting | Value |
|--------|--------|
| Epic | **DSYS-468** — *Component ADR Migration: Align with ADR-0003 and ADR-0004* |
| Board (reference) | [DSYS board — epic filter](https://consensyssoftware.atlassian.net/jira/software/c/projects/DSYS/boards/1888?assignee=6152e94cc7bea40069d6b9c3&issueParent=343549) |

## 1. Find candidates

Run JQL (company-managed / parent epic):

```jql
parent = DSYS-468 AND statusCategory != "Done" ORDER BY Rank ASC
```

If you only want work already on your plate:

```jql
parent = DSYS-468 AND statusCategory != "Done" AND assignee = currentUser() ORDER BY Rank ASC
```

Next **unclaimed** item:

```jql
parent = DSYS-468 AND status = "To Do" AND assignee is EMPTY ORDER BY Rank ASC
```

## 2. Choose one issue

### Interactive (IDE / manual run)

- Prefer **In Progress** already assigned to you (continue that thread).
- Else prefer **To Do** assigned to you.
- Else take the **first** issue from the unassigned `To Do` query (top of backlog order).

### Scheduled Cursor Cloud Automation (“always take backlog”)

Use **only** unclaimed work so each run picks a new ticket:

```jql
parent = DSYS-468 AND status = "To Do" AND assignee is EMPTY ORDER BY Rank ASC
```

Take the **first** result. If the list is empty, stop (no PR); optionally comment in the run log or Slack.

**Jira + cloud agent:** Enable your **Atlassian/Jira MCP** (or equivalent) on the automation so the agent can search JQL, assign, and transition. Without Jira tools, the automation cannot claim tickets by itself.

## 3. Pick up in Jira

- If unassigned, set **assignee** to you (`editJiraIssue`, or equivalent).
- If still in **To Do**, use `getTransitionsForJiraIssue` then `transitionJiraIssue` to move to **In Progress** (or the project’s equivalent “active” state).

## 4. Reply in chat

- Issue key, summary, status, link (`https://consensyssoftware.atlassian.net/browse/<KEY>`).
- One-line suggestion for what to do first in this repo (e.g. component name from the summary).
- If no issues match, say so and suggest checking epic **DSYS-468** or relaxing JQL.

## 5. Open the PR as your GitHub user

### Cursor Cloud Automations ([docs](https://cursor.com/docs/cloud-agent/automations))

Create and manage automations at [cursor.com/automations](https://cursor.com/automations). Flow: pick a **trigger** (schedule, GitHub event, Slack, webhook, Linear, PagerDuty, etc.), write the **prompt**, enable **tools** (e.g. Open pull request, MCP).

**Who opens the PR** (per Cursor docs — *Identity*):

| Automation permission | Pull requests opened as |
|----------------------|-------------------------|
| **Private** or **Team Visible** | **Your** GitHub account |
| **Team Owned** | The **`cursor`** service account (not your user) |

GitHub **comments**, **review approvals**, and **reviewer requests** run as **`cursor`** regardless. **Slack** sends as the Cursor bot.

**Billing**: Automations use cloud agents; cost follows the automation’s permission scope (team pool for Team Owned, creator for Private / Team Visible). Enable **Open pull request** when the automation should commit and open a PR.

For **scheduled** (or Slack, etc.) triggers you choose **repository and branch** explicitly — Cursor does not infer them from a PR.

### Local agent / `gh` on your machine

When **you** run the agent in the IDE and it uses **`gh pr create`**, the PR author is whoever is logged into the GitHub CLI:

```bash
gh auth status
```

- **Fork workflow**: push to your fork’s `origin`, then `gh pr create` toward upstream — you remain the opener.
- **PR body**: Follow `.github/pull_request_template.md` and `@pr` / `.cursor/rules/pr.mdc`.

## 6. Implement the migration (ADR-0003 / ADR-0004)

DSYS-468 tasks are **internal refactors** of components already in the monorepo (e.g. “Migrate **BadgeStatus** to ADR-0003/ADR-0004”). They are **not** extension/mobile imports.

**Primary workflow — follow in order:**

1. `@.cursor/rules/component-enum-union-migration.md` — enum → const objects, shared types, platform `.types.ts` + `index.ts` exports, common mistakes (coverage / re-exports).
2. `@.cursor/rules/component-architecture.md` — layout of shared vs platform props.
3. `@.cursor/rules/testing.md` — tests when touching components.
4. `@.cursor/rules/component-documentation.md` — Storybook if stories change.

**Golden reference in repo:** `BadgeStatus` (paths and PR #912 are listed in `component-enum-union-migration.md`).

**Do not** use `@.cursor/rules/component-migration.md` for this epic — that rule is for bringing components **from** extension/mobile **into** the monorepo.

**After code changes:** `yarn build && yarn test && yarn lint` (from repo root). Open a PR with `.github/pull_request_template.md` / `@.cursor/rules/pr.mdc`; title/body should reference the Jira key (e.g. `DSYS-476`).

## Cloud automation — example prompt (paste into cursor.com/automations)

Adapt as needed; keep **Private** if the PR must be under your GitHub user.

```text
Repository/branch: <this repo> @ <branch e.g. main or a long-lived automation branch>.

1) Jira (Consensys cloud): Run JQL — parent = DSYS-468 AND status = "To Do" AND assignee is EMPTY ORDER BY Rank ASC. Take the first issue. If none, exit successfully with a short message.

2) Assign the issue to the appropriate user if required by your workflow, transition from To Do to In Progress.

3) Implement the ticket using the repo’s Cursor rules exactly:
   - .cursor/rules/component-enum-union-migration.md (primary)
   - .cursor/rules/component-architecture.md
   - .cursor/rules/testing.md
   - .cursor/rules/component-documentation.md when stories change
   Use BadgeStatus in the codebase as the reference pattern. Do not use component-migration.md (that is for extension/mobile imports).

4) Run yarn build, yarn test, yarn lint from the repo root; fix failures.

5) Open a pull request: include the Jira key in the title/description, follow .github/pull_request_template.md.
```
