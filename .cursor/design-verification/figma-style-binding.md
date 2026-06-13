---
name: figma-style-binding
description: >-
  Triggers on any visual property change in Figma — creating text, setting
  colors, adjusting spacing, padding, gap, or radius. Enforces that all values
  bind to MMDS Figma Styles or Variables, never hardcoded. Includes post-write
  QA verification.
disable-model-invocation: false
---

# Style Binding + QA

Every visual value must come from the MMDS design system. Prerequisite: `figma-preflight` must have run this session.

**MCPs:** `plugin-figma-figma` (`use_figma`, `search_design_system`) and `user-figma-console` (`figma_import_library_variable`, `figma_execute`).

---

## Binding Hierarchy

For any visual property, follow this order. Stop at the first match.

```
1. Connected Library  →  search_design_system → import → apply
2. Local Style        →  Style Registry → apply by ID
3. Local Variable     →  Variable Registry → apply by ID
4. Gap found          →  Report to user, wait for decision
```

Import missing MMDS variables: `user-figma-console` → `figma_import_library_variable`.

---

## Text

Every text node must use `textStyleId`. Individual font properties (`fontSize`, `fontFamily`, etc.) are forbidden.

```js
const style = await figma.getStyleByIdAsync("<id>");
await figma.loadFontAsync(style.fontName);
await node.setTextStyleIdAsync("<id>");
```

If no local style matches, search libraries via `search_design_system`.

---

## Color Fills

Every fill/stroke must bind to a COLOR Variable (preferred) or Paint Style.

```js
const variable = await figma.variables.getVariableByIdAsync("<id>");
const fill = { type: "SOLID", color: { r: 0, g: 0, b: 0 } };
node.fills = [figma.variables.setBoundVariableForPaint(fill, "color", variable)];
```

Never use raw `{ r, g, b }` without a binding.

---

## Spacing, Padding, Gap, Radius

Bind to FLOAT Variables. Set `layoutMode` BEFORE `setBoundVariable`.

```js
node.setBoundVariable("paddingTop", spacingVar);
node.setBoundVariable("itemSpacing", spacingVar);
node.setBoundVariable("cornerRadius", radiusVar);
```

Spacing can fall back to raw values only with explicit user confirmation. Color and text cannot.

---

## Forbidden / Required

| Forbidden | Required |
|---|---|
| `node.fontSize = 24` | `textStyleId` / `setTextStyleIdAsync` |
| Unbound `fills` with raw hex | Variable or Style binding |
| `node.paddingLeft = 16` | `setBoundVariable("paddingLeft", var)` |
| `node.cornerRadius = 8` | `setBoundVariable("cornerRadius", var)` |
| Creating a Button from scratch | `importComponentByKeyAsync` from MMDS library |

---

## QA Verification

After every `use_figma` or `figma_execute` call that creates or modifies nodes, audit returned node IDs:

```javascript
const nodeIdsToAudit = [/* returned IDs */];
const results = [];

for (const id of nodeIdsToAudit) {
  const node = await figma.getNodeByIdAsync(id);
  if (!node) { results.push({ id, status: "NOT_FOUND" }); continue; }

  const checks = [];

  if (node.type === "TEXT") {
    checks.push({ prop: "textStyleId", bound: !!node.textStyleId });
  }

  if ("fills" in node && Array.isArray(node.fills) && node.fills.length > 0) {
    const bound = !!node.fillStyleId || (node.boundVariables?.fills?.length > 0);
    checks.push({ prop: "fills", bound });
  }

  if ("layoutMode" in node && node.layoutMode !== "NONE") {
    for (const p of ["paddingLeft","paddingRight","paddingTop","paddingBottom","itemSpacing"]) {
      if (p in node) checks.push({ prop: p, bound: !!(node.boundVariables && p in node.boundVariables) });
    }
  }

  if ("cornerRadius" in node && node.cornerRadius > 0) {
    checks.push({ prop: "cornerRadius", bound: !!(node.boundVariables && "cornerRadius" in node.boundVariables) });
  }

  const failed = checks.filter(c => !c.bound);
  results.push({ id, name: node.name, type: node.type, status: failed.length === 0 ? "PASS" : "FAIL", failed: failed.map(c => c.prop) });
}

return { auditResults: results };
```

**If FAIL:** Fix unbound properties, then re-audit. Do not proceed until all pass.

## Related

- `@.cursor/rules/styling.md`
- `@.cursor/design-skills/figma-component-creation.md` (Prompt 3 — typography and color tokens)
