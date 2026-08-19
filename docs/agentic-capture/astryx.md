# Astryx (Meta) — what to steal without building their MCP

**Status:** capture only. 18 Aug 2026.  
**Repo:** [facebook/astryx](https://github.com/facebook/astryx)  
**Docs:** [astryx.atmeta.com](https://astryx.atmeta.com) · [Working with AI](https://astryx.atmeta.com/docs/working-with-ai)  
**MCP they ship:** `https://astryx.atmeta.com/mcp` — two tools: `search(query)`, `get(name)`  
**Our v1:** Storybook MCP (`localhost:6006/mcp` today). Do **not** stand up an Astryx-style custom MCP for MMDS.

Astryx is Meta’s internal system (8 years, 13k+ apps) rebuilt and open-sourced June 2026 as an AI-operable React + StyleX kit. The interesting part is not the components. It is how they made **one source of truth** readable by agents: CLI = docs, generated `AGENTS.md` from the *installed* version, hosted MCP, templates worth copying, vibe tests.

Storybook MCP already does the query job (list / get docs / stories / preview / tests). Use Astryx as a **checklist of surfaces around that query layer**.

---

## What they actually built (agent surface)

| Surface | What it does | MMDS equivalent today |
| --- | --- | --- |
| Hosted MCP (2 tools) | NL search + get full docs | Storybook MCP: `list-all-documentation`, `get-documentation`, stories, preview, tests. **Richer for authors. Weaker on intent search. Local only.** |
| CLI as the docs | `astryx component Button`, `docs tokens`, `search`, `--json`, `--dense` | No consumer CLI. `yarn mm` is visual capture, not docs. Storybook site is the human docs. |
| `init --features agents` | Writes `AGENTS.md` / `.cursorrules` / `CLAUDE.md` from **this install**. Re-run after bump. | MetaMask Skills hand-maintained catalog. Goes stale. Cursor rules in *this* repo are authoring-only. |
| 3-step workflow in that file | template list → skeleton → component docs | No page templates for agents. Brian patterns / Storybook MDX are the intended stand-in. |
| Always-on rules in that file | No raw `div`, no `style={{}}`, tokens not magic values | eslint-plugin-design-tokens + CLAUDE.md (authoring). Consumers do not get this attached. |
| npm script alias | `astryx` points at the real binary so agents do not invent paths | Agents guess `localhost:6006/mcp` or invent skill catalogs. |
| Knowledge-check prompt | 3 questions with 0% pass rate without docs | No smoke eval. |
| Templates + `astryx build` | NL → closest page / block / component. Designers grade templates. “AI is a copycat.” | Golden paths / pattern MDX — planned, not queryable. |
| `{Name}.doc.mjs` next to source | Structured `ComponentDoc` (props, features, examples). Feeds CLI + MCP + Storybook. | Stories + README. No structured machine doc object. |
| Vibe tests | 21 prompts, screenshots, 10-turn degradation curve | Parked eval harness. |
| `upgrade` + refresh agent file | Codemods **and** regenerate AGENTS.md | `upgrade-design-system` skill. Does not refresh consumer agent docs. |
| `doctor` | Diagnose setup, suggest fixes | None. |
| Night Watch Figma library | Figma stays in sync on every dot release | Figma drift is a known Gate risk. |

Their own line: *the docs site is a consumer of the CLI, not the other way around.* Nothing to go stale because there is no second copy.

---

## Steal for v1 (Storybook MCP stays the query layer)

These do not require an Astryx MCP.

1. **Host Storybook MCP.** They host `astryx.atmeta.com/mcp` so Cursor / Claude / Replit can hit it. Our v1 gap is not “wrong protocol.” It is **localhost only**. Consumers and Replit cannot see `6006`.

2. **Thin generated router file** (`AGENTS.md` / Replit instruction / Cursor rule). Always-on: tokens, no hex, use installed package. Then: query Storybook MCP. Same 3-step idea: find a pattern → read the story/skeleton → get the component. **Generate from the installed package + live Storybook**, do not hand-write a catalog. Re-run on bump. This is the MetaMask Skills freshness fix.

3. **Yarn/npm alias + one documented MCP URL** so agents do not invent binary paths or paste a catalog. Astryx learned agents call the wrong CLI path and fail silently.

4. **Dense / compact MCP answers.** `--dense` exists because full docs blow the window. Ask Storybook MCP (or our wrapper) for props + one example, not the whole MDX. Matches Indeed: JSON contract, not prose dump.

5. **Intent keywords on docs** so `list` / search can answer “success message” → Banner, not only exact names. Astryx MCP search uses the same keyword index as component docs. Cheap: add aliases / do-not-use to stories and READMEs (Miro + Astryx).

6. **Three smoke questions** with a known fail rate without MCP. Example shape: Button import path, how to make a dialog modal vs sheet, which package exports `Text`. If the agent fails, it must connect Storybook MCP. Cheap eval, not the full vibe harness.

7. **Always-on foundations in the router**, MCP on demand for components. Brad / Astryx / Miro all say this. We already have the lint. Attach the rule file where Replit and Cursor actually read.

## Steal later (not v1)

- Page / block **templates** with a designer grading rubric. `astryx build` is “what would Brian compose?” once patterns live in Storybook.
- **Vibe tests** (21 prompts, screenshots, degradation). Our eval harness.
- Consumer **CLI fallback** (`yarn mmds Button --dense`) when Storybook is down. Romina: CLI for one local cheap job. Same data as Storybook, second reader — only if MCP hosting is flaky.
- Structured `{Name}.doc.ts` next to components if stories are not enough for search quality.
- Codemod + **regenerate AGENTS.md** on package upgrade.
- Figma Night Watch (code → Figma sync). Quality problem, not the v1 wedge.

## Do not steal

- Astryx as a product (StyleX, their components, their hosted MCP).
- A second MMDS MCP that duplicates Storybook.
- A hand-maintained component list inside the generated file. Their `init` pulls from the install. Ours must too.

---

## How this sits next to IDS / Jason

| Idea | Astryx | Us |
| --- | --- | --- |
| Jason: attach the DS | Generated AGENTS.md + hosted MCP | Thin instruction + **hosted** Storybook MCP |
| Indeed: don’t dump markdown | CLI `--json` / `--dense`; MCP get | Storybook MCP, not a Storybook→md catalog |
| Miro: two tools + routing line | `search` + `get` + init file | Storybook list/get + one router file |
| Primer: public MCP | Hosted URL | Host Storybook |
| “AI is a copycat” | Grade templates | Grade Brian’s pattern stories before agents copy them |

---

## Sources

- https://github.com/facebook/astryx
- https://astryx.atmeta.com/docs/working-with-ai
- https://astryx.atmeta.com/docs/cli
- https://astryx.atmeta.com/blog/the-astryx-cli
- https://astryx.atmeta.com/blog/astryx-cli-build-command
- https://astryx.atmeta.com/blog/how-astryx-works
- https://astryx.atmeta.com/blog/introducing-astryx
- https://blog.logrocket.com/astryx-vs-shadcn-meta-ai-react-claude/
- Repo `CLAUDE.md` (vibe-test command, `{Name}.doc.mjs`, CLI bootstrap block)
