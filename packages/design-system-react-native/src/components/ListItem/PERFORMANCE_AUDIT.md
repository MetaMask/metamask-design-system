# ListItem performance & architecture audit

**Status:** Draft findings (Aug 2026) — revisit before / during React parity for `BoxRow`, `BoxColumn`, `Content`, and `ListItem` (DSYS-1041 → DSYS-1042 → DSYS-1043 → DSYS-713).

**Scope:** React Native Storybook + React DevTools (Fabric) on iPhone 16 Pro. Compared `ListItem` (via `Content` + `BoxRow` / `BoxColumn`) to `ActionListItem` (plain `Box` + `Text`).

---

## Verdict

`ListItem` is not lightweight today. Visual rows are simple; the React tree is not. Most cost comes from composing `Content` out of `BoxRow` / `BoxColumn` (each is `Component → Box → View`) plus stacked `TextOrChildren` / `SensitiveText`, not from the `ListItem` shell itself.

**React parity decision (open):** Do not assume we must copy this stack 1:1 to web. Prefer a flatter React `ListItem`/`Content` unless product requires RN API compatibility at the wrapper-helper level. See [Parity options](#parity-options-for-react).

---

## Evidence (DevTools)

### `ListItem` — End Accessory

UI: one string (“With end accessory”) + chevron.

Approximate path:

```text
ListItem
  → Box → View
  → BoxRow → Box → View → TextOrChildren
    → Content → Box → View
      → BoxColumn → Box → View → TextOrChildren
        → BoxRow → Box → View → TextOrChildren
          → TextOrChildren → SensitiveText → Text → Text
  (+ Icon / Svg tree for chevron)
```

Roughly **~20** React layers for a one-line row with an end accessory.

### `ListItem` — Default

UI: Label + secondary + value.

Same pattern repeated per text slot (left `BoxColumn` with title/description `BoxRow`s; right `BoxColumn` with value/subvalue). Description/subvalue also nest an extra `BoxColumn` (`min-w-0`) around text.

### Control: `ActionListItem` — End Accessory

UI: Settings + description + chevron (same product shape).

Approximate path:

```text
ActionListItem
  → Pressable → View
  → Box → View
    → Box → View → Box → View → Text, Text
    → Box → View → Icon → …
```

Roughly **~8–10** layers to text. No `Content`, `BoxRow`, `BoxColumn`, `TextOrChildren`, or `SensitiveText`.

|                         | ActionListItem                                       | ListItem                                    |
| ----------------------- | ---------------------------------------------------- | ------------------------------------------- |
| Layout                  | plain `Box`                                          | `Content` + `BoxRow` / `BoxColumn`          |
| Text path               | `Text`                                               | `TextOrChildren` → `SensitiveText` → `Text` |
| Depth (label + chevron) | ~half                                                | ~2×                                         |
| Residual bloat          | every `Box` = `Box`+`View`; optional accessory `Box` | multiplied by every helper                  |

**Takeaway:** The UI does not require the Content stack. `ActionListItem` is closer to the complexity budget a list row should hit.

---

## Root causes

### 1. `BoxRow` / `BoxColumn` are dual-purpose

They are not pure layout aliases. Each one:

- Forces a `Box` → native `View`
- Adds accessory slots
- Wraps children in `TextOrChildren` (strings → `SensitiveText` on `BoxRow`)

Used as internal Lego inside `Content`, they multiply depth even when children are already elements (parent `TextOrChildren` becomes a no-op pass-through that still mounts).

### 2. `Content` is the blast radius

`ListItem` is a thin padded shell (`Box` / `Pressable`) + optional shell `BoxRow` for `startAccessory` / `endAccessory`. Almost all tree weight is `Content`.

Defaults that add cost:

- `BoxRow`: `alignItems=Center`, `gap={1}` always
- Every string through `SensitiveText` (hide/memo path) even for labels that never hide
- Asymmetric nesting: description/subvalue get an extra `BoxColumn min-w-0`; title/value do not

### 3. Sub-element access principle vs depth

Elsewhere (`TitleHub`, `SectionHeader`, `ButtonBase`) we expose `*WrapperProps` to reach inner rows.

`Content` / `ListItem` expose:

- Root `Box` / `Pressable` props
- `titleProps` / `descriptionProps` / `valueProps` / `subvalueProps` (text only)
- Accessory `ReactNode`s

They do **not** expose wrappers for title/description/value/subvalue rows, left/right columns, truncation wrappers, avatar wrapper, or the shell `BoxRow`.

Escape hatch today: pass custom `ReactNode` and rebuild layout — abandons defaults. Bolting on exhaustive `*WrapperProps` for every inner `BoxRow`/`BoxColumn` would bloat the public API to compensate for an overly deep tree.

---

## Implications

| Question                                       | Answer                                                                                                               |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Do `BoxRow`/`BoxColumn` bloat a component?     | Yes when used as the default internal vocabulary for `Content` / `ListItem`. Fine as occasional composition helpers. |
| Footgun level                                  | Medium–high: silent defaults, text coupling, opaque nesting, inconsistent `textProps` (`SensitiveText` vs `Text`).   |
| Is `ListItem` list-safe for dense `FlatList`s? | Not as-is; prefer flattening before optimizing with memo alone.                                                      |
| React parity risk                              | Copying RN stack to web locks the cost into two platforms.                                                           |

---

## Parity options for React

Priority queue today (automation): BoxRow → BoxColumn → Content → ListItem.

| Option                          | Approach                                                                                                                                | Pros                                                                   | Cons                                                       |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| **A. Copy RN stack**            | Ship `BoxRow` / `BoxColumn` / `Content` / `ListItem` with same composition                                                              | Fastest code share; same mental model                                  | Copies depth, footguns, and access gaps to web             |
| **B. Shared API, flatter impl** | Keep consumer props (`title`, accessories, `variant`, etc.); implement React (and ideally later RN) with direct `Box`/`div` + leaf text | API parity for Extension; better performance; fewer wrappers to expose | Two implementations; RN refactor follow-up                 |
| **C. Divergent architecture**   | React `ListItem` designed for performance; RN stays as-is short term                                                                    | Unblocks React parity without waiting on RN rewrite                    | Cross-platform drift; docs/Figma must call out differences |

**Recommendation:** Prefer **B** for React parity.

- Treat `BoxRow` / `BoxColumn` as optional RN (or shared) **composition helpers**, not required building blocks inside `Content`.
- Do **not** block ListItem React on perfect RN helper parity if the public ListItem/Content **props** can match.
- Use `ActionListItem`-level tree depth as the budget for a default one-/two-line row.
- Opt into `SensitiveText` only where privacy masking is a product requirement (e.g. value/subvalue), not every string.

If Extension needs the same accessory/`*Props` surface as RN `ListItem`, that can still be option B without shipping web `BoxRow`/`BoxColumn` as public primitives first.

---

## Suggested follow-ups

1. **Decide parity option (A/B/C)** in the DSYS-1041–713 thread before scaffolding React `BoxRow`/`BoxColumn` as hard deps of React `Content`.
2. **Flatten RN `Content`** (spike): replace inner `BoxRow`/`BoxColumn` with `Box` + leaf `Text`/`SensitiveText`; re-measure DevTools depth vs `ActionListItem`.
3. **Split layout vs text:** layout helpers should not own `TextOrChildren`; text convenience stays at leaf components.
4. **Access model:** after flattening, add a small set of real structural `*WrapperProps` (or compound slots) instead of one prop per nested helper.
5. **Benchmark:** Storybook story or RN perf monitor — 50–100 `ListItem` rows before/after flatten (JS frame time / mount count).

---

## References

- RN implementations: `ListItem.tsx`, `../Content/Content.tsx`, `../BoxRow/BoxRow.tsx`, `../BoxColumn/BoxColumn.tsx`, `../ActionListItem/ActionListItem.tsx`
- React parity queue: `.cursor/automations/react-parity-from-mobile.md` (ListItem blocked on Content → BoxRow/BoxColumn)
- Related migration notes: `Content` shell accessories moved to `ListItem` ([#1231](https://github.com/MetaMask/metamask-design-system/pull/1231))
