# figma-code-alignment-audit

Daily Cursor Automation spec for auditing alignment between MMDS Figma components and code.

## Purpose (version control for Cursor Automations)

[Cursor Automations](https://cursor.com/docs/cloud-agent/automations) prompts are configured in the Cursor product, not in this repo. This file is the canonical, reviewable spec for the automation: update it in git, review it in PRs, and treat the Cursor UI as the deployment target.

- Stable link: use a GitHub URL to this file on `main`, or pin a commit SHA when you need a frozen prompt.
- Copy-paste: paste the prompt block below into a Cursor scheduled automation and keep the UI version in sync with this file.
- Invoke (IDE): `@.cursor/automations/figma-code-alignment-audit.md`

This spec follows [docs/ai-agents.md](../../docs/ai-agents.md): keep the automation prompt short and pull implementation guardrails from `@CLAUDE.md` and `@.cursor/rules/*.md`.

## Goal

Continuously detect drift between:

1. Live MMDS components in Figma
2. React and React Native component APIs
3. React and React Native `.figma.tsx` Code Connect mappings

The automation should pick one component per run, verify whether code and Figma still describe the same component model, and produce a small actionable result:

- no-op if aligned
- post a concise Slack audit if misaligned
- optionally open a small PR later if the mismatch is a very safe Code Connect-only fix

## Source of truth

Default to the code component as the source of truth.

Priority order:

1. Code component API
2. Code Connect mapping honesty
3. Live Figma component properties
4. Figma naming and description polish

Assumption: code is usually the more trustworthy system of record, especially for platform-specific behavior. The automation should only challenge that assumption when the code and Code Connect files are internally inconsistent or obviously stale.

## Recommended v1 behavior

Start with an audit-first, Slack-first automation.

- Do not mutate live Figma in scheduled runs.
- Do not change runtime component APIs in scheduled runs.
- Do not open a PR by default.
- Do not depend on Figma MCP for scheduled runs.
- Use Slack to report misalignments like the ones we just worked through:
  - component name drift
  - component description drift
  - Figma property model drift
  - variant model drift
  - stale or dishonest `.figma.tsx` mappings
  - intentional React / React Native divergence that should be documented

This keeps the job useful and low risk while still surfacing real design-system drift.

## Automation settings

| Setting      | Value                                                                     |
| ------------ | ------------------------------------------------------------------------- |
| Trigger      | Scheduled                                                                 |
| Schedule     | Daily or weekdays-only                                                    |
| Example cron | `0 17 * * 1-5`                                                            |
| Repository   | `MetaMask/metamask-design-system`                                         |
| Branch       | `main`                                                                    |
| Permissions  | `Private` or `Team Visible` for early rollout                             |
| Dependencies | Disabled for read-only audits; enabled only if you later want PR creation |

Notes from Cursor docs:

- Scheduled automations run on a recurring schedule and support presets or cron expressions.
- Scheduled runs may start after the requested time, but not before it.
- For scheduled triggers, you must choose the repository and branch explicitly.
- Memories are enabled by default and should be used to avoid re-auditing the same component every day.

## Current tool model

The current tool setup is a good v1 baseline:

- `Memories`
- `Send to Slack` to `#metamask-design-system`
- `Read Public Slack Channels`
- `Open Pull Request`

Recommended usage:

- Use Slack as the default output channel for any mismatch.
- Leave `Open Pull Request` enabled if you want the option later, but the prompt should tell the automation not to open PRs by default.

## Required secrets

The automation should use the Figma REST API directly, not an MCP.

- `FIGMA_ACCESS_TOKEN`
  - Store as a Cursor Cloud secret
  - Use it only in the `X-Figma-Token` request header
  - Never echo the token into Slack output or logs

Recommended token scope:

- `file_content:read`

Optional scopes if the audit later expands:

- `file_metadata:read`
- `file_dev_resources:read`

## Required capabilities

- The agent must be able to make HTTPS requests to the Figma REST API at `https://api.figma.com/v1`.
- The agent must be able to inspect Figma node JSON for the main MMDS file.
- Slack must be able to post a concise report to `#metamask-design-system`.
- Memories must persist which components have already been audited and what was found.

## Required repo context

The automation should always read these files:

- `@CLAUDE.md`
- `@.cursor/rules/figma-integration.md`
- `@.cursor/rules/component-architecture.md`
- `@.cursor/rules/testing.md`
- `@.cursor/rules/pr.mdc` if it decides to open a PR
- `@docs/figma-code-connect.md`

## Candidate selection strategy

Use Memories to rotate across components instead of picking randomly every run.

### Discovery

Build the candidate list from the repo:

```bash
rg --files packages/design-system-react/src/components packages/design-system-react-native/src/components -g '*.figma.tsx'
```

Group candidates by component name. Prefer components that have both:

- a React `.figma.tsx`
- a React Native `.figma.tsx`

but allow single-platform components when no paired candidate is available.

### Mapping source

Use the Figma URL in each `.figma.tsx` file as the source of truth for which Figma node to inspect.

For each candidate:

1. Parse the Figma file key from the URL
2. Parse the `node-id` query parameter from the URL
3. Convert the node id from URL form to API form
   - URL form: `120-1621`
   - API form: `120:1621`
4. Query that exact node via the REST API

Do not crawl the entire Figma file and try to guess which component matches the code component. The `.figma.tsx` mapping is the deterministic link between code and Figma.

### Rotation

Store a small memory entry after each run with:

- component name
- date audited
- outcome: `aligned`, `slack-report`, `figma-access-failure`
- severity: `high`, `medium`, `low`, `none`
- short note

When choosing the next component:

1. Prefer components never audited before
2. Otherwise pick the least recently audited component
3. Skip a component for 14 days after a successful `aligned` result unless it changed in git since the last audit
4. Suppress repeated low-severity findings for 30 days unless the repo files or mapped Figma node changed

## Alignment checklist

For the chosen component, check all of the following:

1. Figma node URL
   - Does the `.figma.tsx` file point to the correct MMDS component file and stable node id?
   - Does it point to the main MMDS file instead of a stale WIP file?
2. Figma component name
   - Does the Figma component/component set name align with the code component name closely enough to avoid confusion?
3. Figma component description
   - Does the Figma description still describe the same component and usage model as the code component?
4. Figma component properties
   - Variant axes, boolean properties, nested props, and naming
5. Code component API
   - React and React Native prop support, enum names, and intentional platform differences
6. Code Connect mapping
   - Do both `.figma.tsx` files map only properties that really exist in the code and in Figma?
7. Example usage
   - Are required props realistic and valid on each platform?
8. Intentional platform divergence
   - If React and React Native differ, do the Figma files reflect that honestly instead of pretending both platforms support the same API?
9. Figma node type
   - Is the mapped node actually a `COMPONENT` or `COMPONENT_SET`?
10. Coverage

- If a code component exists but has no `.figma.tsx` mapping, report that as missing Code Connect coverage instead of trying to infer a Figma node.

## Figma REST request model

Primary endpoint:

- `GET https://api.figma.com/v1/files/:file_key/nodes?ids=:node_id&depth=1`

Request header:

- `X-Figma-Token: <FIGMA_ACCESS_TOKEN>`

Use this endpoint because it is enough to verify the mapped node in the main MMDS file:

- node existence
- node type
- node name
- component or component set metadata
- `componentPropertyDefinitions`

If needed later, the broader file endpoint is available:

- `GET /v1/files/:file_key`

But the node endpoint should be preferred because it is narrower and deterministic.

## Severity and ownership model

Every finding should be assigned both a severity and an owner.

### Severity

- `High`
  - wrong or missing Figma node
  - mapped node is not a `COMPONENT` or `COMPONENT_SET`
  - Code Connect maps props that do not exist in code or live Figma
  - variant model shape differs materially between code and Figma
  - component exists in code but is missing Code Connect coverage
- `Medium`
  - Figma default values differ from code defaults
  - Figma property options exist but differ in a way that does not make Code Connect dishonest
  - React / React Native divergence is real and Figma currently implies false parity
- `Low`
  - component name drift only
  - description drift only
  - polish issues that do not affect API truthfulness

### Owner

- `Engineering`
  - `.figma.tsx` is stale or dishonest
  - code defaults or code docs need to be clarified
- `Design`
  - Figma defaults, naming, descriptions, or property setup should be updated
- `Both`
  - the mismatch spans code truth and Figma modeling, or needs a product/design decision

## Decision rules

### Case 1: Fully aligned

- Do not open a PR
- Do not post noisy Slack unless you want a periodic heartbeat
- Update memory

### Case 2: Misalignment detected

- Do not mutate live Figma
- Do not change runtime code
- Post a concise Slack report
- Update memory

Slack report should include:

- severity
- owner
- component name
- Figma link
- code file paths
- mismatch type
- short recommendation
- suppress large previews or screenshots unless they add unique value

### Case 2b: Low-severity finding

- default action: update memory only
- do not post to Slack unless:
  - the same low-severity issue repeats after the suppression window, or
  - a human explicitly wants a full heartbeat stream

### Case 3: Figma access failure

Examples:

- token missing
- token expired
- HTTP 403 or 401 from REST API
- mapped node missing from the file

Action:

- do not report this as a component misalignment
- post a concise Slack report that Figma verification could not be completed
- include the component name, file URL, and failure mode
- update memory with `figma-access-failure`

### Case 4: High-confidence Code Connect mismatch

Examples:

- stale Figma node URL
- `.figma.tsx` maps a removed Figma property
- enum mapping should match an existing Figma variant axis
- example props are invalid after a component API simplification

Action:

- Default action: report in Slack only
- Optional future action: open a PR if you explicitly revise this spec to allow safe `.figma.tsx`-only fixes

### Case 5: Figma mismatch requiring design-side work

Examples:

- live Figma component still exposes old properties
- variant model in Figma does not match the code API
- naming drift should be fixed in Figma before code can be considered aligned

Action:

- do not guess or auto-mutate live Figma
- produce a concise report with:
  - component name
  - Figma node
  - code files involved
  - exact mismatch
  - recommended next action

### Case 6: Intentional platform divergence

If React and React Native intentionally differ:

- do not force them into parity
- check whether each `.figma.tsx` file is honest for its platform
- report the divergence in Slack if Figma currently implies false parity
- recommend documentation or inline reviewer comments when the divergence is non-obvious

## Output format

Every run should end with one concise result:

- `Aligned: <ComponentName> - <one-line reason>`
- `Slack report: <ComponentName> - <one-line mismatch summary>`
- `PR opened: <ComponentName> - <one-line change summary>` only if this spec is later expanded to allow it

If a report is produced, include:

- severity
- owner
- component name
- Figma node URL
- code file paths
- short mismatch bullets
- one-line recommendation

Recommended Slack format:

```text
Figma/code alignment audit: <ComponentName>
Severity: <High|Medium|Low>
Owner: <Engineering|Design|Both>
Figma node: <url>
Code paths: <short list>
Finding:
- <bullet 1>
- <bullet 2>
Recommendation: <one sentence>
```

## Cloud automation prompt (paste into Cursor Automations)

```text
Repository/branch: MetaMask/metamask-design-system @ main.

You are auditing Figma/code alignment for one MMDS component per run.

Read and follow:
- @CLAUDE.md
- @.cursor/automations/figma-code-alignment-audit.md
- @.cursor/rules/figma-integration.md
- @.cursor/rules/component-architecture.md
- @.cursor/rules/testing.md
- @docs/figma-code-connect.md

Use Memories to avoid repeating the same component too often.

Workflow:
1) Discover component candidates from React and React Native `.figma.tsx` files.
2) Pick one component:
   - prefer never-audited components
   - else least recently audited
   - skip recently aligned components unless git changed since the last audit
3) Parse the Figma URL in the chosen `.figma.tsx` file:
   - extract the main file key
   - extract the node-id
   - convert node-id from hyphen form to colon form for the REST API
4) Use the Figma REST API directly:
   - base URL: https://api.figma.com/v1
   - auth header: X-Figma-Token using the FIGMA_ACCESS_TOKEN secret
   - fetch the mapped node with GET /v1/files/:file_key/nodes?ids=:node_id&depth=1
5) Inspect the chosen component across:
   - live MMDS Figma node metadata from REST
   - React component API
   - React Native component API
   - React and React Native `.figma.tsx` mappings
6) Decide:
   - if aligned, do nothing except write a short result and update memory
   - if Figma REST access fails or the node cannot be verified, post a concise Slack report that verification could not be completed
   - if misaligned, assign severity and owner first
   - if severity is high or medium, post a concise Slack report to #metamask-design-system and update memory
   - if severity is low, update memory and suppress Slack unless the issue repeats after the suppression window
   - do not mutate live Figma
   - do not change runtime component code
   - do not open a PR unless the spec is later changed to explicitly allow safe `.figma.tsx`-only fixes
7) Slack reports should call out mismatches in:
   - component name
   - component description
   - component API
   - Figma component properties
   - Code Connect mapping honesty
   - React vs React Native divergence
   - stale WIP file URLs
   - wrong node type
   - missing Code Connect coverage
8) If this spec is later expanded to allow PRs, follow @.cursor/rules/pr.mdc.

Quality bar:
- Never claim alignment if Figma properties and code props clearly differ
- Never map props in `.figma.tsx` that do not exist in the live Figma component or current platform API
- Treat code as the default source of truth unless code itself is internally inconsistent
- Do not mutate live Figma in this scheduled automation
- Do not use Figma MCP or figma-console-mcp in this scheduled automation when the REST API is sufficient
- Do not post low-value noise to Slack; low-severity findings should be suppressed by default
- Do not attach large Figma previews to routine Slack reports unless the image adds unique diagnostic value

Final output must be exactly one of:
- Aligned: <ComponentName> - <reason>
- Slack report: <ComponentName> - <summary>
- PR opened: <ComponentName> - <summary>
```

## Future upgrade path

If the audit-only flow proves useful, create a second automation for controlled code-connect-only fixes or controlled design-side fixes.

That follow-up automation can:

- open tiny PRs for high-confidence `.figma.tsx` repairs
- target only a curated allowlist of components
- use Figma MCP or `figma-console-mcp` only when a richer interactive workflow is actually required
- make live Figma changes only when the transformation is deterministic
- require a PR or Slack summary that references the exact Figma node changed

Keep that separate from the daily audit job so the read path stays safe and predictable.
