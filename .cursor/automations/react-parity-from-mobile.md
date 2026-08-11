# react-parity-from-mobile

Jira pickup for epic **DSYS-302** (_Migrate Legacy Extension Components to MMDS Monorepo_) — **audit Extension consumers first**, then create **React (`design-system-react`)** parity for components that already exist on **React Native**, and prove viability with a **preview package on the same Extension Audit PR**.

## Purpose (version control for Cursor Automations)

[Cursor Automations](https://cursor.com/docs/cloud-agent/automations) prompts in the Cursor product are **not** stored in this git repo. This file **is** the **canonical, reviewable spec**: change it here (PRs, `main`, tags) and treat the UI as a **deployment target**.

- **Stable link** — Prefer the automation checkout includes this file; tell the agent to read `.cursor/automations/react-parity-from-mobile.md`.
- **Copy-paste** — Paste the cloud prompt blocks below into **Private** or **Team Visible** automations. After merging changes here, update the pasted prompts.

**Invoke (IDE):** `@.cursor/automations/react-parity-from-mobile.md`.

**Strategy:** Matches [docs/ai-agents.md](../../docs/ai-agents.md): _reference over duplication_, _checklists over narratives_, _context efficiency_. This file defines **orchestration** (Jira, audit PR, Slack handoff, preview validation). **Implementation guardrails** live in `@.cursor/rules/` — agents must read those files, not improvise from this doc alone.

## Scope

| Setting           | Value                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Epic              | **DSYS-302** — _Migrate Legacy Extension Components to MMDS Monorepo_                                                                            |
| Board (reference) | [DSYS board — epic filter](https://consensyssoftware.atlassian.net/jira/software/c/projects/DSYS/boards/1888?issueParent=335295)                 |
| Primary workflow  | `@.cursor/rules/component-migration.md` (consumer replaceability audit + extension/mobile → monorepo)                                            |
| Not this epic     | Do **not** use `@.cursor/rules/component-enum-union-migration.md` (that is DSYS-468 internal ADR refactors)                                      |
| Repos             | Multi-repo: `MetaMask/metamask-design-system` **and** `MetaMask/metamask-extension`                                                              |
| Slack             | `#design-system-team` — audit complete posts + **thread reply** gates implementation                                                             |
| Changelog         | Do **not** edit `packages/**/CHANGELOG.md` on feature PRs — `@.cursor/rules/pr.mdc` + `@.cursor/rules/release-workflow.md`                       |

### Priority queue (prefer these first)

**Parity strategy (option B):** shared **consumer API** with RN; **flatter React implementation**. Do **not** port RN `BoxRow` / `BoxColumn` / `TextOrChildren` as React building blocks for Content/ListItem — they are RN composition helpers / depth footguns (see `packages/design-system-react-native/src/components/ListItem/PERFORMANCE_AUDIT.md`). No Mobile consumer usage of `BoxRow`/`BoxColumn` today.

Walk this list top-down; take the first open unclaimed To Do.

| Order | Issue     | Component               |
| ----- | --------- | ----------------------- |
| 1     | DSYS-1043 | **Content**             |
| 2     | DSYS-713  | **ListItem**            |
| 3     | DSYS-751  | **SectionHeader**       |
| 4     | DSYS-750  | **SectionDivider**      |
| 5     | DSYS-757  | **HeaderRoot**          |
| 6     | DSYS-758  | **HeaderStandard**      |
| 7     | DSYS-756  | **TitleSubpage**        |
| 8     | DSYS-755  | **TitleStandard**       |
| 9     | DSYS-752  | **TitleAlert**          |
| 10    | DSYS-749  | **SelectButton**        |
| 11    | DSYS-716  | **HeaderSearch**        |
| 12    | DSYS-712  | **KeyValueRow**         |
| 13    | DSYS-711  | **KeyValueColumn**      |
| 14    | DSYS-715  | **Spinner**             |
| 15    | DSYS-714  | **MainActionButton**    |
| 16    | TBD       | **ListItemSelect**      |
| 17    | TBD       | **ListItemMultiSelect** |
| 18    | TBD       | **KeyValueSelect**      |
| 19    | TBD       | **HeaderSubpage**       |
| 20    | TBD       | **FilterButton**        |
| 21    | TBD       | **FilterButtonGroup**   |
| 22    | TBD       | **SegmentedControl**    |

**Notes**

- Content before ListItem (ListItem composes Content). Prefer HeaderRoot before HeaderStandard when both are open.
- For Content/ListItem: implement with direct `Box`/`Text` (no BoxRow/BoxColumn/TextOrChildren).
- **Out of queue (canceled):** DSYS-1041 BoxRow, DSYS-1042 BoxColumn.
- **Already in React (skip create):** Tag, Skeleton (DSYS-310). Confirm via audit if a ticket remains open (e.g. IconAlert).
- Jira tickets for this epic are framed **audit-first**; do not jump to scaffolding.

Then fall through to other unclaimed `parent = DSYS-302` To Do items by Rank.

---

## Pipeline overview (audit → Slack → implement → preview)

```text
[Automation A — Audit]
  claim Jira → fingerprint RN → find Extension candidates
  → demo VM before screenshots → open Extension Audit PR
  → Slack #design-system-team (new thread) “audit complete”
       ↓
[Human]
  review Audit PR: drop / add candidates, mark intentional divergences
  reply in Slack thread to confirm → continue
       ↓
[Automation B — Implement]
  Slack thread reply trigger → read approved Audit PR
  → create React parity in design-system → DS PR + Storybook demos
  → comment on Audit PR + reply in Slack thread with DS PR link
       ↓
[Human]
  @metamaskbot publish-preview on DS PR (org member)
       ↓
[Automation C — Preview validate]
  wait for preview package comment / workflow
  → update SAME Extension Audit PR with preview dependency + approved pilots
  → after screenshots → viability report on Audit PR + DS PR + Slack thread
```

**Handoff object:** the **Extension Audit PR** (not a DS docs PR). It holds candidate inventory, before/after screenshots, design discussion, and later the preview-package pilot diffs.

---

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
2. Else prefer **To Do** assigned to you.
3. Else prefer the **priority queue** above in order (first still To Do / unassigned unless yours).
4. Else first unassigned To Do from Rank order.

### Scheduled / cloud (“always take backlog”)

1. Walk the priority queue in order; take the **first** unclaimed To Do still open.
2. Else first result of the unclaimed To Do JQL.
3. If empty → stop (no PR).
4. **Skip** canceled/deferred helper tickets (BoxRow/BoxColumn/TextOrChildren ports).

**Jira:** Enable Atlassian/Jira MCP on the automation so the agent can search, assign, and transition.

## 3. Pick up in Jira

- If unassigned → set **assignee** to you.
- If **To Do** → transition to **In Progress** (or project equivalent).
- Comment on the issue that **Phase = Extension consumer audit** (not implementation yet).

---

## Automation A — Extension consumer audit (required first)

Do **not** scaffold React components in this phase.

Follow Phase 1 of `@.cursor/rules/component-migration.md` **plus** the consumer replaceability steps below.

### A1. Fingerprint from React Native

From `packages/design-system-react-native/src/components/<Name>/` (+ shared types if present), capture:

- One-sentence purpose (what the component _is_)
- Canonical shapes (static title, interactive + chevron, accessories, children, etc.)
- Default typography / interaction behavior from README + stories

This fingerprint drives Extension search when **no same-named legacy component** exists.

### A2. Find Extension candidates (name + structural)

Search `MetaMask/metamask-extension` (`ui/`):

1. **Name / near-name** — `<Name>`, kebab folder, local `const <Name> = …`, `*SectionHeader*`-style variants
2. **Structural** — compositions matching the fingerprint (e.g. heading row above a list; `ButtonBase`/`role="button"` + title + `ArrowRight`; title + “View all” / “See all”)
3. **Exclude** page chrome / nav headers / list rows themselves / form labels unless the fingerprint says otherwise

Score each hit: **High / Medium / Low**, with proposed MMDS props mapping.

### A3. Open Extension Audit PR (handoff object)

Repo: **`MetaMask/metamask-extension`**.

PR must include:

| Section                    | Content                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Jira key                   | e.g. `DSYS-751`                                                                                              |
| RN fingerprint             | purpose + shapes                                                                                             |
| Candidate table            | file, route/testid, snippet, proposed props, confidence, status                                              |
| Status values              | `candidate` \| `approved-pilot` \| `out-of-scope` \| `intentional-divergence`                                |
| Before screenshots         | demo VM / computer use captures of in-app candidates (mark `needs-manual-screenshot` if blocked)             |
| Design discussion          | Extension patterns that may be **intentional** vs Mobile (do not force unify)                                |
| Pilot recommendation       | 1–2 High-confidence call sites for later preview swap                                                        |
| Checklist                  | Audit complete → Awaiting Slack confirm → Awaiting implement → Awaiting preview → Validated                  |

Do **not** add the preview package or broad replacements in this first push — audit + evidence only (minimal branch scaffolding allowed if needed for screenshots).

### A4. Slack — audit complete (new thread)

Post to **`#design-system-team`**:

- Issue key + component name
- Extension Audit PR URL
- Short summary: N candidates, recommended pilots, open design questions
- Explicit ask: review the Audit PR, then **reply in this thread to confirm** and continue to React implementation

Stop after Slack. Do **not** implement until Automation B is triggered by a confirming thread reply.

---

## Automation B — Implement React parity (after Slack confirm)

**Trigger:** Slack message in the audit thread that clearly confirms continuing (e.g. “LGTM”, “approved”, “continue”, “implement”). If ambiguous, ask once in-thread; do not proceed.

### B1. Read approved audit

- Re-read the Extension Audit PR (latest candidate statuses)
- Honor `out-of-scope` and `intentional-divergence`
- Use `approved-pilot` / remaining High candidates to inform API decisions

### B2. Implement in design-system

### Guardrails

- ✅ Primary: `@.cursor/rules/component-migration.md`
- ✅ Scaffold: `@.cursor/rules/component-creation.md` (`yarn create-component:react` — React only when RN already exists)
- ✅ Architecture / tokens / docs / tests: architecture, styling, documentation, testing rules
- ✅ **Content / ListItem:** match shared **props** with RN; implement with direct `Box` + leaf `Text` (opt into `SensitiveText` only where privacy masking is required)
- ❌ Do **not** copy Extension or RN source verbatim — Box/Text + design tokens
- ❌ Do **not** put `className` / `onClick` in shared types
- ❌ Do **not** introduce React `BoxRow`, `BoxColumn`, or `TextOrChildren` to unblock Content/ListItem
- ❌ Do **not** edit `CHANGELOG.md` on this PR
- Prefer existing shared types when present; extend carefully if the audit requires shared changes
- Target tree depth closer to RN `ActionListItem` than RN `Content`/`ListItem` stack (see PERFORMANCE_AUDIT.md)

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

### B3. Storybook demos (computer use)

1. `yarn storybook` (port **6006**)
2. Capture Default + major variants
3. Embed in DS PR **Screenshots/Recordings**

### B4. Open DS PR + notify

- `@.cursor/rules/pr.mdc` + `.github/pull_request_template.md`
- Link **Extension Audit PR** + Jira key
- Include API comparison table + how audit informed decisions
- Comment on Extension Audit PR with DS PR URL
- Reply in the **same Slack thread** with DS PR URL and ask a human to run `@metamaskbot publish-preview` when ready

---

## Automation C — Preview validate on the Audit PR

**Trigger:** DS PR receives preview packages comment after `@metamaskbot publish-preview`, or Slack/human asks to validate. Agents may **try** commenting `@metamaskbot publish-preview`; if unauthorized, ask a human in the Slack thread and wait.

### C1. Reuse the Extension Audit PR branch

On the **same** Audit PR:

1. Point Extension at the preview package, e.g.

   ```json
   "@metamask/design-system-react": "npm:@metamask-previews/design-system-react@<version-from-comment>"
   ```

2. Replace only **`approved-pilot`** candidates (default 1–2)
3. Do not migrate `out-of-scope` / `intentional-divergence` rows

### C2. After screenshots + viability

- Capture after screenshots in demo VM for pilots
- Update Audit PR description with before/after + viability verdict (`ready` / `needs API change` / `not a fit`)
- Comment on DS PR + reply in Slack thread

---

## Cloud automation — agent instructions

Configure **three** Automations (or one with clear phase detection). Paste the matching block into **Agent Instructions**. Prefer **multi-repo** environment: design-system + extension. Enable Slack, Open PR, Comment on PR, computer use, Atlassian MCP.

### A — Audit (schedule / backlog pickup)

```text
Multi-repo: MetaMask/metamask-design-system + MetaMask/metamask-extension.
Read @.cursor/automations/react-parity-from-mobile.md (Pipeline + Automation A).

You are running AUDIT ONLY for epic DSYS-302. Do NOT scaffold React components.

1) Claim one unclaimed To Do under parent = DSYS-302 via priority queue in that file. Assign + In Progress. Comment that Phase = Extension consumer audit.
2) Fingerprint the RN component (README/stories/shared types).
3) Search metamask-extension for name + structural candidates; score High/Medium/Low; note intentional-divergence questions.
4) Use computer use / demo VM to capture before screenshots of candidates when possible.
5) Open an Audit PR on MetaMask/metamask-extension with candidate table, screenshots, design discussion, pilot recommendations. No preview package yet.
6) Slack #design-system-team (new thread): issue key, component, Audit PR URL, open questions; ask humans to review and reply in-thread to confirm before implementation.
7) Stop. Do not implement until a confirming Slack thread reply triggers Automation B.
```

### B — Implement (Slack thread reply)

```text
Multi-repo: MetaMask/metamask-design-system + MetaMask/metamask-extension.
Read @.cursor/automations/react-parity-from-mobile.md (Automation B).

Triggered by a confirming reply in the #design-system-team audit thread.

1) Parse issue key + Extension Audit PR from the parent Slack thread. Re-read the Audit PR; honor out-of-scope and intentional-divergence.
2) Implement React parity in design-system-react from RN + approved audit (flatter impl; NO BoxRow/BoxColumn/TextOrChildren; NO CHANGELOG edits).
   Rules: @CLAUDE.md @.cursor/rules/component-migration.md @.cursor/rules/component-creation.md @.cursor/rules/component-architecture.md @.cursor/rules/styling.md @.cursor/rules/testing.md @.cursor/rules/component-documentation.md
3) yarn build && yarn test && yarn lint (or scoped equivalents).
4) Storybook demos (port 6006); attach artifacts to DS PR.
5) Open DS PR linking Audit PR + Jira; comment on Audit PR; reply in the same Slack thread with DS PR URL and ask for @metamaskbot publish-preview when ready.
```

### C — Preview validate (preview packages comment / Slack)

```text
Multi-repo: MetaMask/metamask-design-system + MetaMask/metamask-extension.
Read @.cursor/automations/react-parity-from-mobile.md (Automation C).

1) Locate preview package versions from the DS PR publish-preview comment (or ask human to comment @metamaskbot publish-preview if missing).
2) Update the SAME Extension Audit PR: depend on preview package; replace approved-pilot call sites only.
3) Capture after screenshots; update Audit PR with before/after + viability.
4) Comment on DS PR + reply in Slack thread with results.
```

---

## Optional post-merge: close Jira

Separate automation: **Pull request merged** (DS implementation and/or validated Audit PR per team convention) → extract `DSYS-<n>` → transition Done → comment with PR URLs + merge SHA. Only for DSYS-302 React-parity work.
