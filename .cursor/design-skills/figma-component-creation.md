---
name: figma-component-creation
description: >-
  Creates Figma components in MMDS from merged code using Figma Console MCP
  (figma_execute), validates with figma_check_design_parity, and documents with
  figma_set_description. Automatically runs figma-preflight first. Use when
  adding a new component to the Figma library, syncing code to Figma, or when
  the user mentions figma component creation, MMDS Figma page setup, or design
  parity for a component.
disable-model-invocation: true
---

# figma_component_creation

Workflow for publishing a **code-complete** component into [🦊 MMDS Components](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components).

Run **one step at a time**. After each step, inspect Figma output before continuing. Do not batch the creation prompts.

## Inputs

Replace placeholders before starting:

| Placeholder | Example |
|---|---|
| `CODE_COMPONENT_PATH` | `packages/design-system-react-native/src/components/ButtonIcon/ButtonIcon.tsx` |
| `INSERT_PAGE_LINK` | `https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/...?node-id=120-1621` |
| `COMPONENT_NAME` | Derive from path (`ButtonIcon`) — must match the code export name |

Read the full component folder (`.tsx`, `.types.ts`, constants, stories) before any Figma write.

## Step 0 — Preflight (automatic)

**Run this immediately when `/figma-component-creation` is invoked.** Do not skip. Do not start Component Creation until preflight passes.

Follow `@.cursor/design-verification/figma-preflight.md` in full:

1. Read `@.cursor/design-verification/figma-design.config.md` (override file URL with `INSERT_PAGE_LINK` when the user provides one)
2. Run Step A — MCP connection + config
3. Run Step B — file access + libraries (use `INSERT_PAGE_LINK` file key)
4. Run Step C — styles, variables, component registry → build **Token Map**
5. Output the preflight status report

**Stop** if any preflight step fails — including the **MMDS library gate** (no `material-theme`-only fallback). Fix blockers before continuing.

Use the MMDS Token Map during Prompts 1–3. Never bind to `material-theme/*` or `Schemes/*` variables when MMDS tokens are the target.

### MMDS token mapping (code → Figma)

| Code token / class | MMDS variable | MMDS text style |
|---|---|---|
| `bg-alternative` | `background/alternative` | — |
| `bg-background-default` | `background/default` | — |
| `text-default` | `text/default` | `Body/Md/Regular` |
| `text-muted` | `text/muted` | `Body/Sm/Medium` |
| `p-4` / 16px padding | `spacing (px)/16` | — |
| `gap` 16px | `spacing (px)/16` | — |
| `BodySm` + `Medium` | — | `Body/Sm/Medium` |
| `BodyMd` | — | `Body/Md/Regular` |

## Prerequisites

Confirm all of the following before Component Creation (after preflight passes):

- [ ] Preflight status report shows all checks ✅
- [ ] Component is complete in code and merged to `main`
- [ ] Figma Console MCP and Figma MCP are installed
- [ ] Figma Desktop Bridge is enabled
- [ ] Target Figma file is open in **Figma Desktop** with Desktop Bridge connected

Preflight covers MCP and file connection. Also verify the active target:

```text
user-figma-console → figma_get_status (probe: true)
user-figma-console → figma_navigate (url: INSERT_PAGE_LINK)
user-figma-console → figma_list_open_files
```

Confirm the active file name matches the target before destructive operations.

## Component Creation

Using `figma_execute` in **Figma Console MCP** (`user-figma-console`).

Execute these prompts **individually** — wait for and review each result before sending the next.

### Prompt 1 — Create the component

```text
can you create [CODE_COMPONENT_PATH] in this page [INSERT_PAGE_LINK]
```

Agent requirements for this step:

- Read `CODE_COMPONENT_PATH` and related files first
- Use `figma_execute` (not `use_figma`) unless the user explicitly switches MCPs
- Bind colors, spacing, radii, and borders to **MMDS variables** — no hardcoded hex unless unavoidable
- Mirror variant props from code (`size`, `variant`, `severity`, etc.) as Figma component properties
- After creation: `figma_capture_screenshot` or `figma_take_screenshot` to verify placement and layout

### Prompt 2 — Name the component

```text
use the [CODE_COMPONENT_PATH] component name in this page [INSERT_PAGE_LINK]
```

Agent requirements:

- Component set and component name must match the code export (e.g. `ButtonIcon`, not `button-icon`)
- Use `figma_rename_node` if the name drifts during creation

### Prompt 3 — Link typography and color tokens

```text
make sure that all typography tokens are linked to design system tokens
```

Agent requirements:

- Every text layer must use a **bound text style** or **typography variable** from the MMDS library
- Do not leave detached font family, size, weight, or line-height values
- Every color layer (fills, strokes, effects) must use **MMDS library variables** — bind via `boundVariables`, not hardcoded hex
- Import missing variables with `figma_import_library_variable` if the target file has not subscribed to the MMDS library
- Cross-check typography and colors against the code component and `@.cursor/rules/styling.md`
- Re-screenshot after token binding

## Testing

- [ ] Read the component source at `CODE_COMPONENT_PATH`
- [ ] Note the new component set `nodeId` from `figma_execute` result or `figma_search_components`
- [ ] Run `figma_check_design_parity` with `nodeId` and a populated `codeSpec` built from the code read

```text
user-figma-console → figma_check_design_parity
  nodeId: <component-set-id>
  codeSpec.filePath: CODE_COMPONENT_PATH
  codeSpec: visual, spacing, typography, tokens, componentAPI (from code)
```

- [ ] If errors exist, resolve them before Documentation
- [ ] Fix design-side issues with `figma_execute` / `figma_set_fills` / `figma_edit_component_property`
- [ ] Re-run `figma_check_design_parity` until parity is acceptable or remaining gaps are documented

## Documentation

- [ ] Run `figma_set_description` on the **component set** node

```text
user-figma-console → figma_set_description
  nodeId: <component-set-id>
  description: <plain-text summary>
  descriptionMarkdown: <optional — props, usage, a11y notes>
```

Pull description content from the component README and prop types. Follow `@.cursor/rules/component-documentation.md`.

Optional follow-up (outside this skill): add Code Connect per `@.cursor/rules/figma-integration.md`.

## Best practices

- Run prompts individually; check output step by step in case AI overshoots
- One component per workflow run
- Never skip the post-create screenshot
- Delete partial artifacts before retrying a failed `figma_execute`
- If multiple Figma files are connected, confirm active file with `figma_get_status` before every write
- Do not create Figma branches via MCP — branching is UI-only

## Progress checklist

Copy and track:

```text
Task Progress:
- [ ] Step 0 — figma-preflight passed (**MMDS library gate** ✅ — not material-theme only)
- [ ] Prerequisites verified
- [ ] Prompt 1 — component created on target page
- [ ] Prompt 2 — component named correctly
- [ ] Prompt 3 — typography and color tokens linked
- [ ] figma_check_design_parity passed (or gaps documented)
- [ ] figma_set_description added
```

## References

- Preflight (auto-runs first): `@.cursor/design-verification/figma-preflight.md`
- Token binding: `@.cursor/design-verification/figma-style-binding.md`
- Code styling and tokens: `@.cursor/rules/styling.md`
- Component structure: `@.cursor/rules/component-architecture.md`
- Code Connect (separate step): `@.cursor/rules/figma-integration.md`
- MMDS Figma file: https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components
