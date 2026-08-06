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

| Placeholder           | Example                                                                        |
| --------------------- | ------------------------------------------------------------------------------ |
| `CODE_COMPONENT_PATH` | `packages/design-system-react-native/src/components/ButtonIcon/ButtonIcon.tsx` |
| `INSERT_PAGE_LINK`    | `https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/...?node-id=120-1621`     |
| `COMPONENT_NAME`      | Derive from path (`ButtonIcon`) — must match the code export name              |

Read the full component folder (`.tsx`, `.types.ts`, constants, stories) before any Figma write.

## Step 0 — Preflight (automatic)

**Run this immediately when `/figma-component-creation` is invoked.** Do not skip. Do not start Component Creation until preflight passes.

Follow `@.cursor/design-verification/figma-preflight.md` in full:

1. Read `@.cursor/design-verification/figma-design.config.md` (override file URL with `INSERT_PAGE_LINK` when the user provides one)
2. Run Step A — MCP connection + config
3. Run Step B — file access + libraries (use `INSERT_PAGE_LINK` file key)
4. Run Step C — styles, variables, component registry → build **Token Map**
5. Run **Desktop Bridge gate** (below) — required before any `figma_execute` write
6. Output the preflight status report

**Stop** if any preflight step fails — including the **Desktop Bridge gate**. Fix blockers before continuing.

Use the MMDS Token Map during Prompts 1–3. Never bind to `material-theme/*` or `Schemes/*` variables when MMDS tokens are the target.

### Desktop Bridge gate (required — blocks all writes)

This workflow depends on **Figma Console MCP** (`figma_execute`, `figma_capture_screenshot`, etc.). Those tools require **Figma Desktop** with the **Desktop Bridge** plugin connected to the **target file** (`INSERT_PAGE_LINK`), not just the official Figma MCP.

Run in order:

```text
user-figma-console → figma_get_status (probe: true)
user-figma-console → figma_navigate (url: INSERT_PAGE_LINK)
user-figma-console → figma_list_open_files
```

**Pass** when:

- `figma_get_status` reports a valid WebSocket connection (`setup.valid: true`)
- `figma_navigate` succeeds (`status: already_connected` or `switched_active_file`) — **not** `websocket_file_not_connected`
- `figma_list_open_files` includes the target file key from `INSERT_PAGE_LINK` and it is the active file

**Fail** when:

- Desktop Bridge is not running, probe fails, or the target file is missing from connected files
- `figma_navigate` returns `websocket_file_not_connected`

**On fail — stop immediately.** Do not call `figma_execute`, `figma_import_library_variable`, or any other write tool. Output this prompt to the user (replace placeholders):

```text
❌ Desktop Bridge — Target file not connected.

This workflow needs Figma Desktop with Desktop Bridge on your target file before it can create components.

1. Open Figma **Desktop** (not the browser tab only)
2. Open your target file: [INSERT_PAGE_LINK]
3. Run the **Desktop Bridge** plugin in that file (Figma Console MCP plugin)
4. Confirm the plugin shows connected / ready
5. Reply here (e.g. "connected") so the workflow can continue

Connected files right now: [list from figma_list_open_files]
Target needed: [file name / key from INSERT_PAGE_LINK]
```

Wait for the user to confirm before re-running the gate. After they reply, call `figma_navigate` again and only proceed when the gate passes.

**Do not** fall back to `use_figma` or official Figma MCP for component creation unless the user explicitly asks to switch MCPs.

### MMDS token mapping (code → Figma)

| Code token / class      | MMDS variable            | MMDS text style   |
| ----------------------- | ------------------------ | ----------------- |
| `bg-alternative`        | `background/alternative` | —                 |
| `bg-background-default` | `background/default`     | —                 |
| `text-default`          | `text/default`           | `Body/Md/Regular` |
| `text-muted`            | `text/muted`             | `Body/Sm/Medium`  |
| `p-4` / 16px padding    | `spacing (px)/16`        | —                 |
| `gap` 16px              | `spacing (px)/16`        | —                 |
| `BodySm` + `Medium`     | —                        | `Body/Sm/Medium`  |
| `BodyMd`                | —                        | `Body/Md/Regular` |

## Prerequisites

Confirm all of the following before Component Creation (after preflight passes):

- [ ] Preflight status report shows all checks ✅
- [ ] **Desktop Bridge gate** passed — target file from `INSERT_PAGE_LINK` is connected and active (see Step 0)
- [ ] Component is complete in code and merged to `main`
- [ ] Figma Console MCP and Figma MCP are installed
- [ ] Target file is open in **Figma Desktop** with Desktop Bridge plugin running on that file

The Desktop Bridge gate (Step 0) replaces a manual prerequisite check. If the gate failed, **prompt the user to connect first** — do not continue to Component Creation.

Also verify the active target after the gate passes:

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

- Read `CODE_COMPONENT_PATH` and related files first — include **`[Component].stories.tsx`** (exported stories, `args`, and custom `render` blocks) and README story examples
- Use `figma_execute` (not `use_figma`) unless the user explicitly switches MCPs
- **Placement — overrides Figma Console MCP defaults:** publish **only the component** (or component set) on the target page canvas. **Do not** wrap it in a Section, Frame, or "Component Container". **Do not** call `figma_arrange_component_set` — it adds a white labelled wrapper frame. Append the component set directly to the page via `page.appendChild(componentSet)`. Ignore `figma_execute` placement guidance that says "always create inside a Section or Frame".
- **Component set auto-layout (required):** after `figma.combineAsVariants`, configure the **component set** (not a wrapper frame):

  - `layoutMode`: `HORIZONTAL` (wrap to `VERTICAL` only if variants overflow horizontally)
  - **Padding:** 56px on all sides (`paddingLeft`, `paddingRight`, `paddingTop`, `paddingBottom`) — bind to MMDS `spacing (px)/56` via `setBoundVariable` when available; otherwise use `56`
  - **Gap between variants:** `itemSpacing` 32px — bind to MMDS `spacing (px)/32` when available; otherwise use `32`
  - **Hug variants (required):** the component set must **not** use fixed width/height. After padding and gap are set, set both sizing modes to hug contents:
    - `primaryAxisSizingMode = 'AUTO'`
    - `counterAxisSizingMode = 'AUTO'`
    - Do **not** call `resize()` on the component set — let auto-layout derive size from variants + padding. If a prior step set `FIXED`, reset to `AUTO` before screenshot.
  - Set `layoutMode` before `setBoundVariable` on padding/gap (see `@.cursor/design-verification/figma-style-binding.md`)
  - **Component set stroke (required for variant sets):** after `combineAsVariants`, apply Figma's default component-set border to the **component set** frame:
    - Color: `#9747FF` at 100% opacity
    - Position: **Inside**
    - Weight: **1**
    - Style: **Dashed** — `dashPattern = [10, 5]`, `strokeCap = 'NONE'` (butt), `strokeJoin = 'MITER'`
    - Example in `figma_execute`:
      ```js
      componentSet.strokes = [
        { type: 'SOLID', color: { r: 0.592, g: 0.278, b: 1 }, opacity: 1 },
      ];
      componentSet.strokeWeight = 1;
      componentSet.strokeAlign = 'INSIDE';
      componentSet.dashPattern = [10, 5];
      componentSet.strokeCap = 'NONE';
      componentSet.strokeJoin = 'MITER';
      ```

- Mirror variant props from code (`size`, `variant`, `severity`, etc.) as Figma component properties
- Create variants based on Storybook variants
- Bind colors, spacing, radii, and borders to **MMDS variables** — no hardcoded hex unless unavoidable
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

- **Storybook parity:** the component set must still have **one variant per exported Storybook story** with the same visual content as Prompt 1. If token binding or edits collapsed variants, restore missing story variants before finishing this step.
- Every text layer must use a **bound text style** or **typography variable** from the MMDS library
- Do not leave detached font family, size, weight, or line-height values
- Every color layer (fills, strokes, effects) must use **MMDS library variables** — bind via `boundVariables`, not hardcoded hex
- Import missing variables with `figma_import_library_variable` if the target file has not subscribed to the MMDS library
- Cross-check typography and colors against the code component, **each Storybook story**, and `@.cursor/rules/styling.md`
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
- Canvas output should be **only the component set** — no Section, documentation frame, or arrange-tool wrapper. Delete scaffolding if a prior run left any.
- Component set frame must **hug** its variants (`primaryAxisSizingMode` / `counterAxisSizingMode` = `AUTO`) — tight bounds around padding + variants, no fixed oversized frame
- Variant **component sets** must use the standard Figma purple dashed inside stroke (`#9747FF`, weight 1, dash 10/5) — see Prompt 1
- Never skip the post-create screenshot
- Delete partial artifacts before retrying a failed `figma_execute`
- If multiple Figma files are connected, confirm active file with `figma_get_status` before every write
- Do not create Figma branches via MCP — branching is UI-only

## Progress checklist

Copy and track:

```text
Task Progress:
- [ ] Step 0 — figma-preflight passed (**Desktop Bridge gate** ✅ — target file connected)
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
