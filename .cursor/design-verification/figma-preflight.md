---
name: figma-preflight
description: >-
  Triggers on "let's start", "begin", "preflight", or when a Figma file URL is
  first shared. Verifies MCP connection, reads figma-design.config.md, audits
  connected libraries, and loads a Token Map of Styles and Variables — required
  before any Figma design work in MMDS.
disable-model-invocation: false
---

# Figma Preflight

Run at the start of every design session. Do NOT start design work until all steps pass.

**Prerequisites:** Load `/figma-use` skill before any `use_figma` call on `plugin-figma-figma`.

**Config:** Read `@.cursor/design-verification/figma-design.config.md` for the Figma file URL and session goal.

---

## Step A — Connection + Config (parallel)

Run these in parallel:

1. **Official Figma MCP:** `plugin-figma-figma` → `whoami`. Must return user email and plan. Fail → stop, re-authenticate.
2. **Figma Console (optional):** `user-figma-console` → `figma_get_status` (probe: true). Confirms Desktop Bridge for `figma_execute` workflows.
3. **Config:** Read `figma-design.config.md`. Extract Figma file URL (required — stop if missing), fonts, session goal.

---

## Step B — File + Libraries (parallel)

Parse `fileKey` from the Figma URL, then run in parallel:

1. **File access:** `plugin-figma-figma` → `get_metadata` with `fileKey` (and `nodeId` if provided).
2. **Libraries:** `plugin-figma-figma` → `get_libraries` with `fileKey`. Store subscribed libraries as **Library Registry**.

For Desktop Bridge workflows: `user-figma-console` → `figma_navigate` (url) + `figma_list_open_files`.

---

## Step C — Styles + Variables + Components

**Official MCP path:** single `use_figma` call:

```javascript
const textStyles = await figma.getLocalTextStylesAsync();
const paintStyles = await figma.getLocalPaintStylesAsync();
const collections = await figma.variables.getLocalVariableCollectionsAsync();
const variables = await figma.variables.getLocalVariablesAsync();

const grouped = {};
for (const v of variables) {
  const key = v.resolvedType;
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push({ name: v.name, scopes: v.scopes });
}

const components = {};
for (const page of figma.root.children) {
  await figma.setCurrentPageAsync(page);
  const sets = page.findAll(n => n.type === "COMPONENT_SET");
  const solos = page.findAll(n => n.type === "COMPONENT" && n.parent.type !== "COMPONENT_SET");
  if (sets.length > 0 || solos.length > 0) {
    components[page.name] = {
      sets: sets.map(c => c.name),
      solos: solos.map(c => c.name).slice(0, 15),
    };
  }
}

return {
  textStyles: textStyles.map(s => s.name),
  paintStyles: paintStyles.map(s => s.name),
  collections: collections.map(c => c.name),
  variableCount: variables.length,
  byType: Object.fromEntries(
    Object.entries(grouped).map(([type, vars]) => [type, vars.map(v => v.name)])
  ),
  components,
};
```

**Console MCP path:** `user-figma-console` → `figma_get_variables` + `figma_search_components`.

Store **names only** in context. Library styles/variables are discovered via `search_design_system`.

---

## Token Map

After Step C, derive a semantic index from variables grouped by `scopes`:

| Role | Scope | MMDS examples |
|---|---|---|
| Background fill | `FRAME_FILL`, `SHAPE_FILL` | `background/alternative`, `background/default` |
| Text color | `TEXT_FILL` | `text/muted`, `text/default` |
| Border / stroke | `STROKE_COLOR` | `border/default` |
| Gap | `GAP` | `spacing/*` |
| Padding | `PADDING` | `spacing/*` |
| Border radius | `CORNER_RADIUS` | `radius/*` |

---

## Status Report

```
✅ MCP Connection    — [name] ([email]) · [plan]
✅ Desktop Bridge    — [connected / not required]
✅ Config            — File: [url] · Goal: [goal]
✅ Figma File        — [file name] · [N] pages
✅ Libraries         — [N] connected: [names]
✅ Styles            — [N] text + [N] paint
✅ Variables         — [N] across [N] collections
✅ Components        — [N] sets across [N] pages

── Token Map ──────────────────────────────
Background  : [names]
Text        : [names]
Border      : [names]
Gap         : [names]
Padding     : [names]
Radius      : [names]
────────────────────────────────────────────

Ready to design.
```

If any step fails, output ❌ with error and stop.

## MMDS library gate (required for component creation)

When preflight runs as part of `/figma-component-creation`, also verify MMDS tokens are available:

1. Run `user-figma-console` → `figma_get_library_variables` with `libraryFileKey: 1D6tnzXqWgnUC3spaAOELN`
2. Inspect local collections from Step C

**Pass** if either:
- Target file is [🦊 MMDS Components](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN) and collections include `Color / Theme`, `Typography`, or `Variable collection`
- Target local working file has MMDS library subscribed (`figma_get_library_variables` returns collections)

**Fail** if:
- Only `material-theme` collection exists locally **and** MMDS library returns 0 collections

```
❌ MMDS Library — Not subscribed. Components will bind to material-theme, not design system tokens.

Fix (choose one):
1. Work in MMDS Components file directly (recommended for publishing)
2. In your local working file: Figma → Assets → Libraries → enable "🦊 MMDS Components", then re-run preflight
```

Do not create components until this gate passes.

## Related

- Token binding enforcement: `figma-style-binding.md`
- Component construction: `component-rules.md`
- Code → Figma publishing: `@.cursor/design-skills/figma-component-creation.md`
- `@.cursor/rules/figma-integration.md`
