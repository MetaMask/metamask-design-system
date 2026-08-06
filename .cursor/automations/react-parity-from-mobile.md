# react-parity-from-mobile

Jira pickup for epic **DSYS-302** (_Migrate Legacy Extension Components to MMDS Monorepo_) — create **React (`design-system-react`)** parity for components that already exist on **React Native**, with an **extension codebase audit** so the web API works for Extension consumers.

## Purpose (version control for Cursor Automations)

[Cursor Automations](https://cursor.com/docs/cloud-agent/automations) prompts in the Cursor product are **not** stored in this git repo. This file **is** the **canonical, reviewable spec**: change it here (PRs, `main`, tags) and treat the UI as a **deployment target**.

- **Stable link** — Prefer the automation checkout includes this file; tell the agent to read `.cursor/automations/react-parity-from-mobile.md`.
- **Copy-paste** — Paste the cloud prompt block below into a **Private** or **Team Visible** automation. After merging changes here, update the pasted prompt.

**Invoke (IDE):** `@.cursor/automations/react-parity-from-mobile.md`.

**Strategy:** Matches [docs/ai-agents.md](../../docs/ai-agents.md): _reference over duplication_, _checklists over narratives_, _context efficiency_. This file defines **orchestration** (Jira, audit sources, PR identity). **Implementation guardrails** live in `@.cursor/rules/` — agents must read those files, not improvise from this doc alone.

## Scope

| Setting            | Value                                                                                                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Epic               | **DSYS-302** — _Migrate Legacy Extension Components to MMDS Monorepo_                                                                                                                              |
| Board (reference)  | [DSYS board — epic filter](https://consensyssoftware.atlassian.net/jira/software/c/projects/DSYS/boards/1888?issueParent=335295)                                                                   |
| Primary workflow   | `@.cursor/rules/component-migration.md` (extension + mobile → monorepo)                                                                                                                            |
| Not this epic      | Do **not** use `@.cursor/rules/component-enum-union-migration.md` (that is DSYS-468 internal ADR refactors)                                                                                        |
| Checkout repo      | `MetaMask/metamask-design-system` @ `main` (or a branch that includes this file)                                                                                                                   |
| Audit source (web) | [MetaMask Extension component-library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library) + related `ui/components/ui/` counterparts when named differently |

### Priority queue (prefer these first)

| Order | Issue    | Component         | Notes                           |
| ----- | -------- | ----------------- | ------------------------------- |
| 1     | DSYS-713 | **ListItem**      | RN + shared types already exist |
| 2     | DSYS-751 | **SectionHeader** | RN + shared types already exist |

Then fall through to other unclaimed `parent = DSYS-302` To Do items by Rank.

## 1. Find candidates

```jql
parent = DSYS-302 AND status = "To Do" AND assignee is EMPTY ORDER BY Rank ASC
```

Assigned / in-progress (interactive runs):

```jql
parent = DSYS-302 AND statusCategory != "Done" AND assignee = currentUser() ORDER BY Rank ASC
```

## 2. Choose one issue

### Interactive (IDE / manual run)

1. Prefer **In Progress** assigned to you.
2. Else prefer priority queue: **DSYS-713** then **DSYS-751** if still To Do.
3. Else first unassigned To Do from Rank order.

### Scheduled / cloud (“always take backlog”)

1. If **DSYS-713** matches unclaimed To Do → take it.
2. Else if **DSYS-751** matches unclaimed To Do → take it.
3. Else first result of the unclaimed To Do JQL.
4. If empty → stop (no PR).

**Jira:** Enable Atlassian/Jira MCP on the automation so the agent can search, assign, and transition.

## 3. Pick up in Jira

- If unassigned → set **assignee** to you.
- If **To Do** → transition to **In Progress** (or project equivalent).

## 4. Audit before implementing (required)

Do **not** scaffold until the comparison table exists. Follow Phase 1 of `@.cursor/rules/component-migration.md`.

### Sources to inspect

| Source                 | Where                                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **RN (parity target)** | `packages/design-system-react-native/src/components/<Name>/` in this repo                                                                                                                                     |
| **Shared types**       | `packages/design-system-shared/src/types/<Name>/` if present                                                                                                                                                  |
| **Extension / web**    | Fetch from `MetaMask/metamask-extension` via `gh` (raw/API) — start at `ui/components/component-library/`; also search `ui/components/ui/` and multichain/activity variants when names differ (esp. ListItem) |

### Comparison table (include in PR)

| Concern                  | Extension / web API | Mobile / RN (MMDS) API | Decision             |
| ------------------------ | ------------------- | ---------------------- | -------------------- |
| Prop names               | …                   | …                      | …                    |
| Types / variants / sizes | …                   | …                      | …                    |
| Event handlers           | `onClick`           | `onPress`              | Keep both (platform) |
| Styling                  | `className`         | `twClassName`          | Platform layer only  |

Answer explicitly:

- Which props are shared vs platform-specific?
- Naming conflicts (`disabled` vs `isDisabled`, etc.)?
- Conservative vs Unified migration strategy (per component-migration.md)?
- Does React parity belong in DSR under this name, or is the web analogue differently named? (document mapping)

## 5. Implement React parity

### Guardrails

- ✅ Primary: `@.cursor/rules/component-migration.md`
- ✅ Scaffold: `@.cursor/rules/component-creation.md` (`yarn create-component:react` — React only when RN already exists)
- ✅ Architecture / tokens / docs / tests: architecture, styling, documentation, testing rules
- ❌ Do **not** copy Extension or RN source verbatim — Box/Text + design tokens
- ❌ Do **not** put `className` / `onClick` in shared types
- Prefer existing shared types when present; extend carefully if the audit requires shared changes

### Layer 2 rules — read in order

| Order | Rule                                        | Role                              |
| ----- | ------------------------------------------- | --------------------------------- |
| 1     | `@.cursor/rules/component-migration.md`     | Audit, strategy, Phase 1–5        |
| 2     | `@.cursor/rules/component-creation.md`      | Scaffold + transform templates    |
| 3     | `@.cursor/rules/component-architecture.md`  | ADR-0003/0004, shared vs platform |
| 4     | `@.cursor/rules/styling.md`                 | Box/Text, tokens                  |
| 5     | `@.cursor/rules/testing.md`                 | Jest / a11y                       |
| 6     | `@.cursor/rules/component-documentation.md` | Stories / README                  |
| 7     | `@.cursor/rules/figma-integration.md`       | Only if Code Connect is in scope  |

**Golden path (layered API):** BadgeStatus under shared + react + react-native packages.

### Verification (from repo root, per `CLAUDE.md`)

```bash
yarn build && yarn test && yarn lint
```

Prefer package-scoped test/lint for the touched React package when full monorepo runs are too heavy, but do not skip build/typecheck of affected workspaces.

## 6. Demo Storybook (computer use / demos)

Cloud Automations include **computer use** by default. After implementation + tests pass, **demo the new React stories** and attach artifacts to the PR (screenshots and/or a short recording).

### Steps

1. Start React Storybook from repo root: `yarn storybook` (port **6006**).
2. Open the browser to the new component’s stories (Default + major prop stories).
3. Capture **screenshots** of key stories and/or a **short screen recording** walking Default → main variants.
4. Attach those demos to the **PR** (prefer embedding in the PR description **Screenshots/Recordings** section; also fine as PR comment artifacts).
5. If Storybook fails to start or stories crash, fix before opening/updating the PR — do not ship without visual evidence unless blocked (then say why in Slack + PR).

**Dashboard:** Enable **Allow posting artifacts to GitHub** under [Cloud Agents → My pull requests](https://cursor.com/dashboard/cloud-agents#my-pull-requests) so demos can land on the PR.

**Environment:** Ensure the cloud agent environment can install deps and run Storybook (same as local `yarn` + `yarn storybook`).

## 7. Open the PR + Slack

- `@.cursor/rules/pr.mdc` + `.github/pull_request_template.md`
- Include Jira key (e.g. `DSYS-713`)
- Include the **audit comparison table**, known gaps, and **demo screenshots/recording**
- **Private / Team Visible** automation → PR as your GitHub user; **Team Owned** → `cursor` service account
- Notify `#design-system-team` with issue key, component name, and PR link (and note that demos are on the PR)

## Cloud automation — agent instructions (paste into Automations UI)

Paste into **Agent Instructions**. Trigger / tools / Slack are already set in the UI.

```text
Repository: MetaMask/metamask-design-system @ main (checkout must include .cursor/automations/react-parity-from-mobile.md).

You are bringing React (design-system-react) to parity with existing React Native MMDS components for epic DSYS-302. Follow docs/ai-agents.md: use @ rules — do not invent patterns from memory.

1) Read @.cursor/automations/react-parity-from-mobile.md for JQL, priority queue (DSYS-713 ListItem, then DSYS-751 SectionHeader), audit, and Storybook demo requirements.

2) Jira (atlassian MCP): claim one unclaimed To Do under parent = DSYS-302 (prefer DSYS-713, then DSYS-751, else Rank ASC). Assign + transition to In Progress. If none, exit with one line and optionally Slack that the backlog was empty.

3) Audit BEFORE coding (component-migration Phase 1):
   - RN + shared types in this repo
   - Extension/web counterparts via gh from MetaMask/metamask-extension (component-library and differently named ui/ list-item variants)
   - Write the Extension vs RN comparison table; choose conservative vs unified strategy

4) Implement React parity only:
   @CLAUDE.md
   @.cursor/rules/component-migration.md
   @.cursor/rules/component-creation.md
   @.cursor/rules/component-architecture.md
   @.cursor/rules/styling.md
   @.cursor/rules/testing.md
   @.cursor/rules/component-documentation.md
   Do NOT use component-enum-union-migration.md for this epic.

5) Verify from repo root: yarn build && yarn test && yarn lint (or equivalent workspace-scoped checks that cover changed packages).

6) DEMO (required — computer use): start yarn storybook (port 6006), open the new component stories, capture screenshots and/or a short recording of Default + major variants, and attach them to the PR (Screenshots/Recordings section). Fix story/render failures before shipping.

7) Open PR (Open Pull Request tool) per @.cursor/rules/pr.mdc + .github/pull_request_template.md; put Jira key + audit table + demo artifacts in title/body.

8) Slack #design-system-team: issue key, component, PR URL, and that Storybook demos are on the PR.
```

## 8. Optional post-merge: close Jira

Separate automation: **Pull request merged** → extract `DSYS-<n>` → transition Done → comment with PR URL + merge SHA. Only for DSYS-302 React-parity PRs.
