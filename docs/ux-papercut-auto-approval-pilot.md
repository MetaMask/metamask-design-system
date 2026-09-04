# UX papercut auto-approval pilot

**Status:** Draft proposal

**Owner:** MetaMask Design System team (proposal), with AI Platform Engineering, QA, and product engineering partners

**Related:** [Agentic design system strategy](./agentic-design-system-strategy.md)

**Last updated:** 2026-09-02

## 1. Why this exists

Leadership wants a path to auto-merged PRs. UX papercuts were suggested as a starting place because many of them look low consequence.

That intuition is useful as a **program**, not as a machine-readable safety definition. Some papercuts touch navigation, confirmations, permissions, analytics, localization, or shared primitives. A label that says “papercut” must never be treated as proof that a change is safe.

This proposal defines a fail-closed pilot where:

- evidence-producing checks run on **all** pull requests;
- authors may **nominate** a PR for automated approval;
- a trusted GitHub App may submit the **one required approval** only after historical replay and shadow calibration;
- a **human still merges** (including by enabling GitHub Auto-merge).

The [agentic design system strategy](./agentic-design-system-strategy.md) already states that reliable MMDS assurance can support future organization-level auto-approval, but is not sufficient on its own, and that agents do not merge product changes. This pilot stays inside those boundaries.

## 2. Authority model

| Actor                                    | May do                                                                       | Must not do                                      |
| :--------------------------------------- | :--------------------------------------------------------------------------- | :----------------------------------------------- |
| Author (internal, with label permission) | Add `auto-approve-candidate` to request evaluation                           | Prove safety by labeling                         |
| Product CI                               | Produce check results and artifacts at the head SHA                          | Approve or merge                                 |
| Trusted eligibility classifier           | Deterministically classify allowed changed nodes/paths from protected policy | Use LLM judgment as a grant                      |
| AI analyzer modes                        | Produce risk / UX / MMDS evidence and vetoes                                 | Submit `APPROVE`                                 |
| MetaMask Skills                          | Provide review rubrics and knowledge routing                                 | Own gate thresholds or CI allowlists             |
| GitHub App (existing or purpose-built)   | Independently re-fetch evidence and approve or dismiss for that SHA          | Call the merge API                               |
| Human engineer                           | Merge, or enable GitHub Auto-merge after approval                            | Be removed from the merge decision in this pilot |
| Merge queue                              | Enforce mergeability after human merge intent                                | Decide eligibility                               |

### Human merge and GitHub Auto-merge

In the first live phase the App only supplies the required approval. A person still has to merge.

Enabling GitHub **Auto-merge** on an eligible PR is allowed. That is a human merge decision. The existing merge queue still runs. System-initiated merge with no human merge action remains a later organization decision, not part of this pilot.

### Nomination vs taxonomy

- `auto-approve-candidate` — request for automated approval evaluation. Required for live approval. Never treated as evidence.
- `ux-papercut` (optional) — product taxonomy only. Not sufficient for approval.

## 3. Safety principles

1. **Deterministic checks establish eligibility.** Inferred checks (risk, MMDS constraints, visual, taste) may veto automation. They cannot grant it.
2. **Fail closed.** Missing, skipped, `neutral`, stale, timed-out, or unavailable evidence routes to human review.
3. **Bind every decision to the exact head SHA.** New commits dismiss stale bot approval. Org rules already dismiss stale reviews and require last-push approval.
4. **Least-privilege approval identity.** Do not enable general `GITHUB_TOKEN` PR approval for the repository. Prefer an existing MetaMask GitHub App if it matches a review-only profile; otherwise create a purpose-built App. No visible MetaMask product workflow currently submits `APPROVE` reviews.
5. **Candidates must not evaluate themselves.** Do not load approval policy from the PR head’s `.ai-pr-analyzer` or `.github` trees. Changes to those paths, workflows, analyzer pins, or the policy store disqualify the PR.
6. **Blocking and bypass labels disqualify.** Examples: `need-ux-ds-review`, `needs-qa`, `blocked`, `DO-NOT-MERGE`, `skip-e2e`, and equivalent Extension labels.
7. **Asymmetric AI authority.** AI may veto automation. AI “looks safe” must never override a failed or unknown deterministic criterion.

```mermaid
flowchart TD
  PR["PR at exact head SHA"] --> Checks["Checks on every PR"]
  Label["Author adds auto-approve-candidate"] --> Policy
  Checks --> Policy["Fail-closed eligibility policy"]
  Policy -->|"Ineligible, unknown, or inferred veto"| HumanReview["Normal human review"]
  Policy -->|"Eligible after shadow"| App["GitHub App approves this SHA"]
  App --> HumanMerge["Human merges or enables GitHub Auto-merge"]
  HumanMerge --> Queue["Existing merge queue"]
  NewPush["New commit or label removal"] --> Invalidate["Dismiss stale bot approval"]
  Invalidate --> Checks
```

## 4. First live change envelope

**Presentation-only** changes on MetaMask Mobile and MetaMask Extension.

### Allowed

- Existing design-token or Tailwind class substitutions.
- Layout and spacing changes using existing MMDS primitives.
- Allowlisted visual props on existing components (documented color, size, variant props).
- Test, story, or snapshot updates that only support the visual delta.

### Copy

- **Shadow first.** Collect decisions without approving.
- Then allow only allowlisted non-sensitive surfaces.
- Exclude auth, recovery phrase, confirmations, transactions, permissions, legal, and security warning copy from the first live envelope.

### Always excluded

- New functions, handlers, hooks, conditionals, loops, or side-effectful imports.
- Navigation, state/store, network, storage, analytics, permissions, transactions, signing, account or key management.
- New components or shared primitive package changes.
- Dependencies, lockfiles, generated artifacts, workflows, config, native code, build scripts.
- Deleted or weakened tests, blanket snapshot regeneration, lint suppressions, coverage exemptions.
- Fork PRs, drafts, conflicted PRs, and PRs not targeting the default integration branch.

Use the existing product **size labels** as a **pilot scope cap**, not a safety proof. Classification must still use AST / changed-node allowlists, not a “JSX and no functions” regex. JSX can still introduce handlers, conditionals, navigation, and unsafe links without a new function declaration.

### Size scale (`size-XS` / `size-S`)

Both products apply size labels from [`MetaMask/github-tools` `pr-line-check`](https://github.com/MetaMask/github-tools/blob/main/.github/actions/pr-line-check/action.yml), invoked by:

- [Mobile `check-pr-max-lines.yml`](https://github.com/MetaMask/metamask-mobile/blob/main/.github/workflows/check-pr-max-lines.yml)
- [Extension `check-pr-max-lines.yml`](https://github.com/MetaMask/metamask-extension/blob/main/.github/workflows/check-pr-max-lines.yml)

The action sums GitHub `additions + deletions` per changed file, then drops files whose path matches a repo-specific ignore regex. Neither product overrides the default buckets:

| Label     | Counted lines (`additions + deletions`) |
| :-------- | :-------------------------------------- |
| `size-XS` | ≤ 10                                    |
| `size-S`  | ≤ 100                                   |
| `size-M`  | ≤ 500                                   |
| `size-L`  | ≤ 1000                                  |
| `size-XL` | \> 1000 or uncountable file list        |

What is ignored:

| Product   | Ignored path pattern                                                        | Tests counted?                                          |
| :-------- | :-------------------------------------------------------------------------- | :------------------------------------------------------ |
| Mobile    | `(\.lock\|\.snap\|\.md\|\.svg\|\.yaml)`                                     | Yes. `.test.ts(x)` and stories count; snapshots do not. |
| Extension | `(\.lock\|\.snap\|lavamoat\/.*policy\.json)$\|\.(agents\|claude\|cursor)\/` | Yes. Snapshots and lockfiles do not; tests still do.    |

Implications for this pilot:

- **Do not treat `size-S` as “presentation-only.”** Seed example [Mobile #35208](https://github.com/MetaMask/metamask-mobile/pull/35208) is `size-S` and `risk:low` but is a feature-flag and analytics change.
- **`size-XS` / `size-S` is a cheaper replacement for a raw 50-line cap**, not a production-only count. [Mobile #34574](https://github.com/MetaMask/metamask-mobile/pull/34574) is +10/−1 production and +53 test lines; snapshots would be ignored, but the test file is still counted, so it is `size-S`.
- Require `size-XS` or `size-S` on the current SHA as a **fail-closed first-pass gate**. Missing size label is `unknown`. `size-M` and larger fail.
- If replay shows too many false negatives from test files, add a **separate production-line metric** in the eligibility classifier. Do not change product `pr-line-check` ignore lists solely for this pilot.

## 5. Criteria model

Every criterion returns one of:

- **pass** — evidence present and satisfied for this SHA
- **fail** — evidence present and disqualifying
- **unknown** — evidence missing, stale, skipped, or unreadable → treat as human review

### Deterministic (must all pass)

| Criterion                                            | Notes                                                                           |
| :--------------------------------------------------- | :------------------------------------------------------------------------------ |
| Nomination label present                             | `auto-approve-candidate` at evaluation time                                     |
| Internal non-fork, non-draft, default base branch    | Exact head SHA                                                                  |
| Required CI allowlist green                          | Explicit job names; skipped / neutral / missing fail closed                     |
| Path and changed-node allowlist                      | Presentation-only envelope                                                      |
| Size label is `size-XS` or `size-S`                  | Applied by product `pr-line-check`; missing label is unknown                    |
| No dependency or lockfile changes                    |                                                                                 |
| No workflow, analyzer config, or policy-path changes | Self-evaluation prevention                                                      |
| No blocking or bypass labels                         |                                                                                 |
| Review threads and Bugbot findings clear             | Open, unresolved, or post-decision findings fail or re-evaluate                 |
| Before/after evidence present                        | Platform-appropriate; author evidence is a claim until automated capture exists |

### Inferred (veto only until calibrated)

| Check                    | Role in pilot                                            |
| :----------------------- | :------------------------------------------------------- |
| PR risk analysis         | Veto on elevated risk / not merge-safe                   |
| MMDS constraint review   | Veto on clear MMDS policy violations visible in the diff |
| Visual / papercut review | Veto or advisory until precision is measured             |
| Design taste             | Advisory only until calibrated                           |

MMDS review in current analyzer CI remains **constraint-level**: MMDS by default, Tailwind over new SCSS where Extension policy requires it, no new raw primitives where policy forbids them, no arbitrary colors. It does **not** yet have Storybook MCP or consumer `node_modules` design-system packages in the analyzer job. In-depth API and pattern review against Storybook docs is out of scope until a version-matched knowledge path exists.

Finding-level trust targets from the agentic strategy (for example 90% precision across 50 findings) apply to **individual inferred checks**. The approval decision itself requires **zero known unsafe eligible decisions** before live approval.

## 6. Architecture

```mermaid
flowchart LR
  subgraph evidence [Evidence]
    CI["Product CI checks"]
    Classifier["Trusted path and AST classifier"]
    Analyzer["Analyzer modes"]
    Skills["MetaMask Skills rubrics"]
  end

  subgraph decision [Decision]
    Policy["Protected eligibility policy"]
    App["GitHub App actuator"]
  end

  subgraph mergePath [Merge]
    Human["Human merge or Auto-merge"]
    Queue["Merge queue"]
  end

  CI --> Policy
  Classifier --> Policy
  Analyzer --> Policy
  Skills --> Analyzer
  Policy --> App
  App --> Human
  Human --> Queue
```

| Layer              | Owns                                                              | Does not own                  |
| :----------------- | :---------------------------------------------------------------- | :---------------------------- |
| Product CI         | Required check allowlist at SHA, artifacts                        | Approval                      |
| Trusted classifier | Path/node eligibility from protected policy                       | LLM judgment                  |
| Analyzer modes     | `pr-risk-analysis` plus proposed `ux-papercut-review` as evidence | `APPROVE`                     |
| MetaMask Skills    | Thin review rubric; load UI, visual, and taste skills             | Gate thresholds, CI job lists |
| GitHub App         | Independent re-fetch, approve, dismiss                            | Merge                         |
| Merge queue        | Mergeability after human merge intent                             | Eligibility                   |

### Analyzer and platform gaps to call out

These are known gaps for partners, not work this markdown implements:

- Consumer analyzer config and custom modes can load from the PR checkout today. Approval policy must come from a trusted source (release, base branch, or central store).
- Current risk-gate `neutral` conclusions must not be reused as an approval pass.
- Scope skip currently marks skipped PRs as `merge_safe: true`. Skipped analysis must be `unknown` or a veto for papercut eligibility, never an approval pass.
- PR metadata helpers exist but are not fully wired into analysis context.
- PR comment tools lack reliable review-thread resolution state.
- No structured check-run allowlist tool is available to the analyzer agent.
- Storybook MCP and installed design-system package types are not available in current analyzer workflows.
- There is no eligibility engine, fixture schema, or replay CLI yet. The first analyzer PR should add an offline `papercut-eligibility` module with trusted policy JSON, pure criterion evaluators, seed fixtures from this document, and a confusion-matrix CLI. It must not post reviews, labels, or check runs, must not call an LLM, and must not wire into `action.yml`. Path/AST classification can stub as `unknown` until a trusted classifier exists.

### Skills shape

If a MetaMask skill is added for this program, keep it thin:

- investigate nominated UX papercuts;
- load current MMDS / UI gateway guidance;
- inspect before/after evidence;
- report concerns, uncertainty, and missing evidence.

It must not contain static component inventories, CI job lists, approval thresholds, or authority to approve.

## 7. Historical benchmark (required before implementation)

Before building actuators, curate at least **50 pull requests per product** (Mobile and Extension):

- clear presentation-only papercuts;
- risky lookalikes;
- sensitive copy;
- shared-component diffs;
- missing or stale evidence;
- skipped CI and bypass labels;
- findings posted after first evaluation.

Humans label expected eligibility **before** the policy runs. Implementation starts only after replay results are reviewed.

### Initial seed findings

A preliminary GitHub sample produced three useful groups. These are benchmark candidates, not final gold labels: historical CI, review-thread state, author trust, and evidence freshness still need reconstruction.

#### Likely positive examples

| PR                                                                            | Observed scope   | Why it fits                                                                               | Seed verdict           |
| :---------------------------------------------------------------------------- | :--------------- | :---------------------------------------------------------------------------------------- | :--------------------- |
| [Extension #42497](https://github.com/MetaMask/metamask-extension/pull/42497) | 1 file · +1/−5   | Existing design-system background prop only                                               | Strong positive        |
| [Extension #41766](https://github.com/MetaMask/metamask-extension/pull/41766) | 3 files · +9/−6  | Tokenized hover class plus snapshot; no handler change                                    | Positive with AST rule |
| [Mobile #34574](https://github.com/MetaMask/metamask-mobile/pull/34574)       | 2 files · +63/−2 | Only +10/−1 production lines; MMDS `Box` and `twClassName`; remaining additions are tests | Strong positive        |

#### Good-looking candidates that should fail closed

| PR                                                                            | Why it looks safe                        | Disqualifier                                                                    |
| :---------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------------------------------ |
| [Extension #39556](https://github.com/MetaMask/metamask-extension/pull/39556) | Looks ideal: one spacing fix             | Changes SCSS; conflicts with Extension's no-new-or-modified-SCSS direction      |
| [Extension #41690](https://github.com/MetaMask/metamask-extension/pull/41690) | One-line layout correction               | Adds inline style instead of an approved class or design-system prop            |
| [Extension #39271](https://github.com/MetaMask/metamask-extension/pull/39271) | Explicit `ux-papercuts` label, QA Passed | SRP surface, 14 files, SCSS, 199 changed lines, `INVALID-PR-TEMPLATE`           |
| [Extension #41540](https://github.com/MetaMask/metamask-extension/pull/41540) | Title ends with “style updates”          | Adds click behavior, a hook, copy, and a 31-file refactor (+559/−98)            |
| [Extension #45004](https://github.com/MetaMask/metamask-extension/pull/45004) | Only two files and six added lines       | SRP state-dependent behavior, SCSS, `risk:medium`, and a skipped benchmark gate |
| [Mobile #35208](https://github.com/MetaMask/metamask-mobile/pull/35208)       | `size-S` and `risk:low`                  | Feature-flag and analytics contract; not a presentation-only UI change          |
| [Mobile #34434](https://github.com/MetaMask/metamask-mobile/pull/34434)       | A visual iOS text-flow fix               | Changes interactive semantics from a pressable view to text                     |
| [Mobile #34738](https://github.com/MetaMask/metamask-mobile/pull/34738)       | Two-line copy and test update            | Copy is shadow-only in the first live phase, not auto-approval eligible         |

#### Boundary probes

Keep these separate from pass/fail until pilot owners decide the corresponding policy.

| PR                                                                            | Positive signals                                 | Decision it forces                                                                                                 |
| :---------------------------------------------------------------------------- | :----------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| [Mobile #34833](https://github.com/MetaMask/metamask-mobile/pull/34833)       | Six production lines; strong visual evidence     | Whether edits to existing legacy `.styles.ts` layers are categorically blocked                                     |
| [Mobile #35237](https://github.com/MetaMask/metamask-mobile/pull/35237)       | Layout-only production change with focused tests | `risk:high` plus a legacy style object; useful false-negative challenge case                                       |
| [Extension #45907](https://github.com/MetaMask/metamask-extension/pull/45907) | One SVG file; `risk:low`                         | Visual assets are outside the current allowlist and would need deterministic SVG sanitization and brand validation |

### Criteria refinements from the seed

1. **Product size labels ignore snapshots and lockfiles, but still count tests.** Mobile also ignores `.md`, `.svg`, and `.yaml`. They are not a production-only metric. Mobile #34574 is `size-S` because of test lines, even though production is +10/−1.
2. **Labels nominate or veto; they do not grant.** `ux-papercuts`, `size-S`, and `risk:low` all appear on ineligible examples. `size-XS` / `size-S` is a scope cap, not eligibility.
3. **Encode MMDS drift checks deterministically where possible.** New inline style and new or modified SCSS can be detected without an LLM.
4. **Define visual-only conditional changes precisely.** If class or visual-prop expressions based on existing state are allowed, the AST rule must reject new state, handlers, branches, and side effects.
5. **Treat legacy styling as an explicit policy decision.** Categorically blocking `.styles.ts` and SCSS is safer but may create many false negatives in real papercuts.
6. **Do not infer evidence from template headings.** A “Before/after” or “Video” section is not proof that usable media is attached and current for the head SHA.

### Token-efficient collection method

1. Search merged PR metadata using labels and title terms, returning only number, title, URL, labels, and timestamps.
2. Batch-fetch changed file names and line counts for a shortlist with one GitHub GraphQL request.
3. Apply deterministic path, size, label, dependency, workflow, and sensitive-surface exclusions.
4. Fetch full diffs, check runs, review threads, and media only for survivors and deliberately selected negative lookalikes.
5. Store the final human gold label, criterion-level pass/fail/unknown results, and exclusion reason as replay fixtures.

## 8. Rollout

1. **Historical replay** against the curated set.
2. **Observe** all PRs with no nomination required; report would/would-not approve.
3. **Nominated shadow** decisions when authors add `auto-approve-candidate`.
4. **Human confusion-matrix review**, especially eligible-but-unsafe misses.
5. **Live App approval** with random human audit and a kill switch.
6. **Expand one capability at a time** (for example allowlisted copy).
7. **System auto-merge** remains a separate later decision.

### Success bar for live approval

- Zero known unsafe eligible decisions on the historical set and shadow sample.
- Kill switch documented and tested.
- Audit record for every criterion, source, timestamp, SHA, and decision.

## 9. Governance

| Partner               | Responsibility                                  |
| :-------------------- | :---------------------------------------------- |
| Product engineering   | Approval policy and accepted risk               |
| AI Platform / QA      | Analyzer runtime and evidence quality           |
| MMDS                  | MMDS constraint-check quality and skill routing |
| GitHub administrators | App inventory, permissions, repository controls |

### Open decisions before build

1. Does an existing MetaMask GitHub App meet the least-privilege review profile, or is a purpose-built App required?
2. Where does trusted policy live (analyzer release, protected default-branch config, or central store)?
3. What is the explicit required-check allowlist per repository? Branch rules today do not encode “all CI green.”
4. What visual evidence path is mandatory for Mobile vs Extension in the first live envelope?
5. Who signs off the move from shadow to live approval?
6. Who owns the historical benchmark curation?

## 10. Out of scope

- Implementing analyzer modes, GitHub App workflows, or skills PRs in this document.
- System-initiated merge without human merge intent.
- Using Storybook MCP or consumer `node_modules` as Review knowledge until those paths exist in the runtime.
- Treating `ux-papercut`, `size-S`, or raw line count as sufficient safety evidence.

## 11. Recommended next steps

1. Socialize this proposal with AI Platform Engineering, QA, Mobile, and Extension partners.
2. Inventory existing GitHub Apps against the approval permission profile.
3. Adjudicate the initial benchmark seed and expand it to at least 50 PRs per product.
4. Build an offline analyzer replay harness that emits criterion-level pass/fail/unknown results without approval authority.
5. After partner agreement and successful replay, open product workflow, GitHub App, and MetaMask Skills work as separate deliverables.
