# Consumer adoption audit

Audit **product UI** in MetaMask Extension and Mobile for MMDS usage, legacy imports, custom UI, and alignment gaps.

## Purpose

**This is the PRIMARY workflow** when asked to audit component usage, adoption, drift, or alignment in consumer codebases.

Quantitative baselines live in [design-system-metrics](https://github.com/MetaMask/design-system-metrics). This rule covers **agent-driven** qualitative audits that explain what the numbers mean and what to fix next.

**NOT for:**

- Migrating legacy components **into** the monorepo → @.cursor/rules/component-migration.md
- Figma Code Connect authoring → @.cursor/rules/figma-integration.md
- Internal monorepo refactors → @.cursor/rules/component-enum-union-migration.md

## Critical rules

### Scan product UI, not legacy libraries

- **ALWAYS** scan **product UI** in extension and mobile using the same roots as `design-system-metrics`
- **NEVER** treat `component-library/` folders as the primary audit target — they hold **legacy** design-system implementations
- **ALWAYS** flag imports **from** `component-library` (or deprecated paths) **inside product UI** as legacy usage

```
// ❌ Wrong audit target — legacy implementation folder
ui/components/component-library/button/button.tsx

// ✅ Right audit target — product feature using (or avoiding) MMDS
ui/pages/confirmations/.../confirm.tsx
app/components/Views/Wallet/...
```

### Always audit both platforms

- **ALWAYS** include Extension and Mobile in the same audit unless the user names one platform only
- **ALWAYS** compare findings per platform — parity gaps are audit findings

### Use metrics-aligned scan roots

Match [design-system-metrics `config.json`](https://github.com/MetaMask/design-system-metrics/blob/main/config.json):

| Platform  | Repository                                                           | Scan glob                             | Ignored legacy folder              |
| --------- | -------------------------------------------------------------------- | ------------------------------------- | ---------------------------------- |
| Extension | [metamask-extension](https://github.com/MetaMask/metamask-extension) | `ui/**/*.{js,tsx}`                    | `ui/components/component-library/` |
| Mobile    | [metamask-mobile](https://github.com/MetaMask/metamask-mobile)       | `app/components/**/*.{js,jsx,ts,tsx}` | `app/component-library/`           |

### MMDS knowledge sources (in order)

1. **Metamask-storybook-mcp** (Context Forge / Cursor MCP) when connected
2. **Published manifest** (always available): https://metamask.github.io/metamask-design-system/manifests/components.json
3. **Local Storybook MCP** when developing in this repo: `http://localhost:6006/mcp` (`yarn storybook`)
4. **Package exports** in `@metamask/design-system-react` / `@metamask/design-system-react-native`

See @docs/agent-mcp-setup.md for Context Forge vs local MCP vs Cloud Agent fallbacks.

### Figma alignment (optional scope)

When auditing alignment with design, use the canonical MMDS Figma file:

- URL: https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=0-1
- `fileKey`: `1D6tnzXqWgnUC3spaAOELN`

Use **Figma MCP** (read) or **Figma Console MCP** (write-back after human approval). Code Connect details: @.cursor/rules/figma-integration.md

### Classification

| Category                  | Meaning                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| **MMDS usage**            | Import from `@metamask/design-system-react` or `@metamask/design-system-react-native`      |
| **Legacy usage**          | Import from `component-library` or deprecated relative paths in product UI                 |
| **Untracked / custom UI** | Local or third-party components with no MMDS equivalent (metrics: `discover-untracked.js`) |
| **Accidental drift**      | MMDS should have been used                                                                 |
| **Intentional deviation** | Product chose not to use applicable MMDS after option was clear                            |
| **System gap**            | Repeated need MMDS does not support well                                                   |
| **Platform exception**    | Documented Figma / React / React Native difference                                         |

### Do not auto-route work

- **NEVER** open Jira issues or product PRs unless the user asks
- **NEVER** mutate live Figma without explicit approval
- **NEVER** copy component inventories into skills or rules — use manifest or MCP

## Audit workflow

### Step 1 — Baseline from metrics (when available)

1. Open [design-system-metrics dashboard](https://github.com/MetaMask/design-system-metrics) (GitHub Pages when deployed) or latest `*-summary.json` artifacts
2. Note MMDS vs deprecated instance counts and week-over-week deltas
3. Run or read `discover-untracked.js` output categories: `tracked-mmds`, `tracked-deprecated`, `untracked`

### Step 2 — Product UI scan (both platforms)

In extension and mobile repos (clone or GitHub search when not local):

1. Count `@metamask/design-system-react` / `@metamask/design-system-react-native` imports under the scan globs above
2. Grep for `component-library` imports under product UI (legacy usage)
3. Identify high-frequency **local-oneoff** components (custom buttons, text wrappers, cards)
4. Note `third-party` UI libraries used instead of MMDS

### Step 3 — Map untracked UI to MMDS

For each significant untracked component:

1. Query **Metamask-storybook-mcp** or read the [components manifest](https://metamask.github.io/metamask-design-system/manifests/components.json)
2. Check fuzzy name matches (metrics uses the same MMDS component list)
3. Record: replaceable now, needs migration guide, or **system gap**

### Step 4 — Figma alignment (if requested)

For components in the shared inventory:

1. `get_code_connect_map` / `search_design_system` via Figma MCP
2. Compare variants and props to shared types in `@metamask/design-system-shared`
3. Severity and owners: see `figma-code-alignment-audit` pattern in `.cursor/automations/` when present

### Step 5 — Report

Deliver a summary table:

| Finding | Platform | Example path(s) | Category | Severity | Owner | Recommendation |
| ------- | -------- | --------------- | -------- | -------- | ----- | -------------- |

**Severity:**

- **High** — widespread legacy usage, wrong component for the pattern, or blocking alignment gap
- **Medium** — localized custom UI with clear MMDS replacement
- **Low** — naming/docs polish, intentional deviation already documented

**Owner:** `Engineering`, `Design`, `Both`, or `Product`

## Commands

```bash
# This monorepo — local Storybook MCP (maintainers)
yarn storybook   # MCP at http://localhost:6006/mcp

# design-system-metrics (separate repo) — match CI baseline
yarn pipeline
yarn discover:extension   # untracked components in extension product UI
yarn discover:mobile    # untracked components in mobile product UI
```

## Golden path references

- Metrics scan config: https://github.com/MetaMask/design-system-metrics/blob/main/config.json
- Untracked discovery: https://github.com/MetaMask/design-system-metrics/blob/main/scripts/discover-untracked.js
- Published component manifest: https://metamask.github.io/metamask-design-system/manifests/components.json
- Extension MIGRATION.md: @packages/design-system-react/MIGRATION.md
- Mobile MIGRATION.md: @packages/design-system-react-native/MIGRATION.md

## Verification

After an audit, confirm:

- [ ] Both extension and mobile were scanned (unless scoped to one platform)
- [ ] Scan globs match design-system-metrics (not legacy `component-library` folders as primary target)
- [ ] Metrics baseline referenced when available
- [ ] MMDS truth from MCP or manifest (not invented prop APIs)
- [ ] Findings classified (MMDS / legacy / untracked / drift / gap)
- [ ] No automatic Jira or PR actions unless requested
- [ ] Figma checks used canonical file key when alignment was in scope

## References

- @AGENTS.md — consumer platforms and audit trigger
- @docs/agent-mcp-setup.md — MCP and manifest fallbacks
- @docs/ai-agents.md — documentation strategy
- @.cursor/rules/component-migration.md — legacy → monorepo migration (different workflow)
- [design-system-metrics](https://github.com/MetaMask/design-system-metrics)
