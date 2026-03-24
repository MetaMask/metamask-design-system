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

- Prefer **In Progress** already assigned to you (continue that thread).
- Else prefer **To Do** assigned to you.
- Else take the **first** issue from the unassigned `To Do` query (top of backlog order).

## 3. Pick up in Jira

- If unassigned, set **assignee** to you (`editJiraIssue`, or equivalent).
- If still in **To Do**, use `getTransitionsForJiraIssue` then `transitionJiraIssue` to move to **In Progress** (or the project’s equivalent “active” state).

## 4. Reply in chat

- Issue key, summary, status, link (`https://consensyssoftware.atlassian.net/browse/<KEY>`).
- One-line suggestion for what to do first in this repo (e.g. component name from the summary).
- If no issues match, say so and suggest checking epic **DSYS-468** or relaxing JQL.

## 5. Open the PR as your GitHub user

Yes — automation (or the agent running **`gh pr create`**) opens the PR **as whoever is authenticated** with the GitHub CLI in that environment.

1. **Verify identity** before relying on it:

   ```bash
   gh auth status
   ```

   The **logged-in account** is the one that will **create** the PR (you appear as the PR author in the UI).

2. **Where the branch lives** (fork vs upstream):
   - If your workflow uses a **personal fork**, push the branch to **`origin`** on your fork (`your-username/metamask-design-system`), then run `gh pr create` with the base repo set to the upstream org repo. The PR still shows **you** as the opener; the head ref is your fork.
   - If you push a branch **directly on the org repo** and have permission, `gh pr create` still attributes the PR to the authenticated user.

3. **Cursor / automation**: Scheduled or agent runs use the **same machine’s** `gh` credentials (or whatever GitHub integration the agent uses). If that session is logged in as you, PRs are yours. If not, log in with `gh auth login` (or fix the token) for that environment.

4. **PR body**: Follow `.github/pull_request_template.md` and `@pr` / `.cursor/rules/pr.mdc` conventions when drafting the description.

## Monorepo context

Follow `CLAUDE.md` and `.cursor/rules/component-migration.md` (and related rules) when implementing work for the chosen ticket.
