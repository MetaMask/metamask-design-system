---
name: component-rules
description: >-
  Triggers when building any UI element in Figma — "create a card", "build a
  nav", "add a section". Enforces library-first component lookup, correct Auto
  Layout structure, and semantic node naming in MMDS. Defer visual binding to
  figma-style-binding.
disable-model-invocation: false
---

# Component Rules

Governs how agents construct UI in Figma for MMDS. For visual property binding, defer to `figma-style-binding.md`.

**Prerequisite:** `figma-preflight` should have run. Load `/figma-use` before `use_figma`.

---

## Rule 1 — Library-first hierarchy

Before building anything, resolve the component source in this order:

```
1. search_design_system → importComponentByKeyAsync → createInstance()
2. Local file scan → createInstance()
3. Build from scratch — ONLY if nothing matches
```

Never rebuild primitives the DS provides: Button, Input, Checkbox, Toggle, Badge, Tag, Avatar, Icon, Tab, Header, TextField, etc.

```js
const comp = await figma.importComponentByKeyAsync("key_from_search");
const instance = comp.createInstance();
parent.appendChild(instance);

// Component sets (variants)
const set = await figma.importComponentSetByKeyAsync("key");
const instance = set.defaultVariant.createInstance();
```

For publishing **new** components from code, use `@.cursor/design-skills/figma-component-creation.md` instead.

---

## Rule 2 — Auto Layout

Every container must use Auto Layout. Property order matters:

1. Set `layoutMode` FIRST (`"VERTICAL"` or `"HORIZONTAL"`)
2. Set `layoutSizingHorizontal` / `layoutSizingVertical` AFTER `appendChild`
3. Set `layoutMode` BEFORE any `setBoundVariable` call

| Goal | layoutSizingH | layoutSizingV |
|---|---|---|
| Hug both | HUG | HUG |
| Fixed card | FIXED | FIXED |
| Full-width section | FILL | HUG |

---

## Rule 3 — Node naming

Name every node semantically with slash hierarchy. Never leave defaults.

```
Card / Container    Card / Title    Card / Body
Hero / Background   Nav / Link Group   Button / Primary
```

Component set names must match code exports (e.g. `AvatarBase`, `ButtonIcon`).

---

## Rule 4 — Incremental building

One section per `use_figma` call. Validate via `figma_capture_screenshot` or `get_screenshot` after each step. Return all created node IDs:

```js
return { created: { card: card.id, title: title.id } };
```

## Related

- `@.cursor/rules/component-architecture.md`
- `@.cursor/rules/figma-integration.md`
