# enum-shared-type-migration

Daily Jira pickup for epic **DSYS-468** (_Component ADR Migration_ / ADR-0003 & ADR-0004).

## Purpose (version control for Cursor Automations)

[Cursor Automations](https://cursor.com/docs/cloud-agent/automations) prompts in the Cursor product are **not** stored in this git repo. This file **is** the **canonical, reviewable spec**: change it here (PRs, `main`, tags) and treat the UI as a **deployment target**.

- **Stable link** — Use a GitHub URL to this path on `main` (or pin a **commit SHA** when you need a frozen prompt). Prefer having the automation run against a branch that **includes** this file, and tell the agent to read `.cursor/automations/enum-shared-type-migration.md` in the workspace; the URL is for humans, pinning, or tooling that fetches raw markdown.
- **Copy-paste** — Paste sections (e.g. the cloud prompt block below) into **Private** or **Team Visible** automations. When the spec changes, merge the PR here, then update the pasted prompt or the link you use.

**Invoke (IDE):** `@.cursor/automations/enum-shared-type-migration.md` or the companion rule **enum-shared-type-migration** (`.cursor/rules/enum-shared-type-migration.mdc`).

**Strategy:** Matches [docs/ai-agents.md](../../docs/ai-agents.md): _reference over duplication_, _checklists over narratives_, _context efficiency_. This file only defines **orchestration** (Jira, triggers, PR identity). **Implementation guardrails and golden paths** live in `@.cursor/rules/` — agents must read those files, not improvise from this doc alone.

## Scope (edit if your epic or identity changes)

| Setting           | Value                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Epic              | **DSYS-468** — _Component ADR Migration: Align with ADR-0003 and ADR-0004_                                                                                         |
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

**Who opens the PR** (per Cursor docs — _Identity_):

| Automation permission           | Pull requests opened as                          |
| ------------------------------- | ------------------------------------------------ |
| **Private** or **Team Visible** | **Your** GitHub account                          |
| **Team Owned**                  | The **`cursor`** service account (not your user) |

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

DSYS-468 tasks are **internal refactors** of components already in the monorepo (e.g. “Migrate **BadgeStatus** …”). They are **not** extension/mobile imports.

### Guardrails (agent must not skip)

- ❌ Do **not** use `@.cursor/rules/component-migration.md` for this epic (extension/mobile → monorepo only).
- ✅ Do use `@CLAUDE.md` for **monorepo commands** (always run from repo root: `yarn workspace …` patterns as documented).
- ✅ Do follow each rule’s **Verification** / checklist sections literally — rules are Layer 2 in [docs/ai-agents.md](../../docs/ai-agents.md).

### Layer 2 rules — read in order (do not duplicate their content here)

| Order | Rule                                               | Role                                                                  |
| ----- | -------------------------------------------------- | --------------------------------------------------------------------- |
| 1     | `@.cursor/rules/component-enum-union-migration.md` | Primary workflow, ❌/✅ examples, **Golden Path** file paths, PR #912 |
| 2     | `@.cursor/rules/component-architecture.md`         | ADR-0003/0004 layering, shared vs platform                            |
| 3     | `@.cursor/rules/testing.md`                        | Jest, a11y, assertions                                                |
| 4     | `@.cursor/rules/component-documentation.md`        | Storybook/README when stories or docs change                          |

**Golden path:** Defined inside `component-enum-union-migration.md` (e.g. **BadgeStatus** paths).

### Verification (after edits)

From repository root (per `CLAUDE.md`):

```bash
yarn build && yarn test && yarn lint
```

### PR

`@.cursor/rules/pr.mdc` + `.github/pull_request_template.md`; include Jira key (e.g. `DSYS-476`).

## Cloud automation — example prompt (paste into cursor.com/automations)

Keep the prompt **short**; implementation detail lives in `@.cursor/rules/` per [docs/ai-agents.md](../../docs/ai-agents.md). Use **Private** if the PR must be under your GitHub user.

```text
Repository/branch: <this repo> @ <branch>.

You are in the MetaMask design-system monorepo. Follow docs/ai-agents.md: reference rules with @ — do not invent ADR patterns from memory.

1) Jira (Consensys): JQL parent = DSYS-468 AND status = "To Do" AND assignee is EMPTY ORDER BY Rank ASC → first issue, or exit with a one-line message if empty. Assign/transition to In Progress per workflow.

2) Read and follow in order (full checklists inside each file):
   @CLAUDE.md
   @.cursor/rules/component-enum-union-migration.md
   @.cursor/rules/component-architecture.md
   @.cursor/rules/testing.md
   @.cursor/rules/component-documentation.md (if stories/docs change)
   Do NOT use @.cursor/rules/component-migration.md for this epic.

3) Verify from repo root: yarn build && yarn test && yarn lint (per CLAUDE.md).

4) Open PR per @.cursor/rules/pr.mdc and .github/pull_request_template.md; put Jira key in title/body.
```

Optional: `@`-mention `@.cursor/automations/enum-shared-type-migration.md` in the automation prompt so the agent loads JQL + PR-identity notes from this file.
