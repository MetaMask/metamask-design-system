# Industry research — Into Design Systems, Agentic Design Systems (2026)

**Status:** capture only. Free articles and speaker writing, 18 Aug 2026.  
**Source hub:** [Agentic Design Systems: The Complete Guide](https://www.intodesignsystems.com/agentic-design-systems)  
**Conference:** AI Design Systems Conference, 19–20 Mar 2026 (recordings are paid; this note uses the free recaps and speaker-owned posts).  
**Maps to:** [agentic-strategy.md](../agentic-strategy.md)

Talks themselves are behind the recordings pass. What follows is only what is free.

---

## 1. What almost every speaker agrees on

These are not new initiatives. They are the same jobs we already mapped (Know → Make → Gate), said in industry language.

| Claim | Who | MMDS translation |
| --- | --- | --- |
| A design system is **infrastructure**, an API that lets AI build the product safely — not a Figma library | Romina Kavcic | Didier / Andy pitch line. Same as Q3 Speed: trusted context. |
| **AI is a new user.** Docs written for humans are not enough. | Diana Wolosin (Indeed), Spotify Encore, Miro | Storybook MCP + thin skills, not a prose dump. |
| **Context > probability.** Without our encoded decisions, agents collapse to the internet average. | Jesse Gardner (NY State), Jan Six | Jason’s “used the DS and still sucked.” Taste + patterns + tokens. |
| **Plant seeds, not trees.** Naming, token structure, component descriptions first. Automation second. | Romina | Confirms this week = capture, next week = DSYS-1054, not a graph. |
| **Trust levels, not full autonomy.** Intern suggests → junior does mechanical fixes. Some decisions never leave human review. | Romina, Jan Six (Primer agents may **only create issues**) | Auto-approve is a destination. Designers do not want auto-merge. Jan is even stricter than we are. |
| If the system is not **where the agent already is** (Cursor, Claude, Replit), teams bypass it. | Spotify, Miro (“somebody else was going to do it without us”) | Jason’s Replit ask. Presence, not a prettier Storybook site. |
| **The invisible system is bigger than the visible one.** If the agent cannot see it, it hallucinates. | Jan Six | Brian’s patterns, Amanda/George review taste, do-not-use rules. |

Romina’s budget sentence: *“An API that allows AI to build your product safely.”* AI generates code. Design systems generate **understanding**. Only one of those is now cheap.

---

## 2. Five failure modes (do not copy these)

From [Your Design System Is Not Ready for AI Agents](https://www.intodesignsystems.com/blog/design-system-not-ready-for-ai-agents).

### 2.1 Documentation drift

Docs say one thing, tokens another, components a third. Humans get annoyed. Agents pick the first source or average them. Romina: 30–40% of DS time is already maintenance. Treat drift as a **monitored failure mode**, not a backlog item. MAPE-K loop: Monitor → Analyze → Plan → Execute around a knowledge base. Signals: Figma API, CI, usage analytics.

**Us:** Chromatic + ESLint + fitness functions already monitor some drift. Storybook vs Figma vs MetaMask Skills is the live version of this failure. Skills going stale is exactly this.

### 2.2 Markdown dumped into an MCP without benchmarking

**This is the important one for Replit.**

Jason’s ask: “take Storybook, turn it into a markdown file.” Indeed already measured that:

| Format | Tokens / query | Result |
| --- | --- | --- |
| Markdown / MDX as-is | ~30k | 82% coverage, hallucinations |
| Structured JSON metadata | ~80% fewer tokens | Higher accuracy, **5× cheaper** ($300 vs $1,500 / yr in their bench) |

Diana’s rule: **JSON for MCP (contract). Markdown for LLM (rules, taste, why).** Indeed parsed 77 components from MDX → JSON, 1,056 prompts, 8 MCP configs. Pipeline retriggers on MDX updates. 4,300 AI prototypes in 4 months.

**Us:** Do **not** replace Storybook MCP with a giant DS markdown. Attach a **thin instruction** in Replit (“query Storybook / follow taste / use installed package”). Taste skill stays markdown. Component APIs stay queryable (MCP / exports). A short “here is how to use MMDS” file is fine. A catalog is how MetaMask Skills rotted.

### 2.3 No trust levels

Define **per action**, not per agent: auto-merge / draft PR / suggest only. GitHub Primer: daily QA agents, **safe outputs only — create an issue, never merge.**

**Us:** Already our Gate column. Bugbot comments = suggest. CODEOWNERS = human. Do not skip to auto-merge.

### 2.4 MCP without always-on rules

Brad Frost / Ian Frost / TJ Pitre: MCP is on-demand. “Build me a card” returns card metadata and **ignores** spacing, type, color. The model fills foundations from the internet.

Fix — progressive disclosure of context:

1. **Always-on** foundations (tokens, type, space, radius)
2. **MCP on demand** for component APIs
3. **AGENTS.md** as the router (what is always-on, where MCP lives, trust levels)

**Us:** Cursor rules + `CLAUDE.md` + eslint-plugin-design-tokens are the always-on layer. Storybook MCP is on-demand. We do not yet have one explicit router file that Replit and Cursor both read.

### 2.5 Monolithic component definitions

Spotify: agents **bypassed Encore** because the system was too fat to reason about. They split: foundation / style / behavior (“smaller context bubbles”), plus an eval that compares generated vs real Encore (lint, similarity, **visual**). “We can’t just launch and hope for the best.”

**Us:** One fat `ui-development` skill is this failure. Thin pointer + Storybook query is the fix. Spotify’s eval harness = our parked evaluation task. Not optional if we ever auto-approve.

---

## 3. Team playbooks (free recaps)

### Romina Kavcic — The Design System Guide

Free recap: [Your Design System Is Infrastructure, Not a Library](https://www.intodesignsystems.com/blog/agentic-design-systems-self-healing-loop). Own sites: [thedesignsystem.guide](https://thedesignsystem.guide/), [aidesign.guide](https://www.aidesign.guide/), [Substack](https://learn.thedesignsystem.guide/) (some posts gated).

- MAPE-K (IBM 2003): observe / detect / suggest / fix / learn. She did not invent a new framework.
- CLI vs MCP: CLI for one local cheap job (fewer tokens). MCP when you need many tools at once. “USB for tools.”
- Knowledge graph: write **one file** about how things connect. Do not start with 10 MCPs. She uses Figma, Granola (meeting decisions), Mintlify, Playwright, PostHog, GitHub, Storybook, Linear, Chromatic.
- Tidy: 66-tool Figma plugin (naming, health, variables). Observatory: make local markdown skills **visible** to the team.
- Monday start: one rule, naming conventions, 5–10 described components, two MCPs (Figma + code), then play. “A mouse today is completely fine.”
- Budget the **babysitting** phase. That is training, not overhead.

### Diana Wolosin — Indeed

Talk recap on the hub + failure-mode article. No separate free essay found.

- Machine-readable metadata from existing MDX (Cursor-built parsers) → Vectra.
- Benchmark **before** committing to a format.
- Always-on foundation rules + on-demand MCP as a Cursor / Claude plugin.

### Andressa Lombardo + Eddie Machado — Miro (Aura)

Free recap: [How Miro Made Their Design System AI-Ready](https://www.intodesignsystems.com/blog/miro-ai-design-system-mcp-claude-code-skills).

- Six people, 48+ product teams. Year of unglamorous metadata before the MCP looked good. Leadership initially said the docs work was a 4/10. **Prove the concept first, explain it second.**
- AI as a **new hire**: enthusiastic, literal, zero tolerance for ambiguity. Onboard it.
- Hallucinations were **naming + missing do-not-use**, not the model. Icon named like “text style” was actually font style. Deprecated token still in the library. Fix: visual description + use case + **“do not use X, use Y.”**
- MCP started with **two tools**: `list components`, `get component docs`. Then a **routing line** in the root Claude file: use the DS MCP. Slack DS questions dropped **70–80%**.
- Skills **before** MCP for search-icons / search-tokens. One skill 33,000 → 410 tokens (`/simplify`). 98% cheaper at company scale.
- `wrap-up` skill: lint + a11y + i18n checklist + PR template. First bug-bash: 17 PRs in an hour.
- Client-rendered docs sites cannot be crawled. Links must be markdown, not React indexes.
- Stop measuring MCP call count (it falls when routing is frictionless). Measure **questions you no longer answer** and outside contributions.
- Line to keep: *“You don’t need a perfect system. You need a system that is legible enough to teach.”*

### Jan Six — GitHub Primer

Talk is paid. Free: conference recaps + public [Primer MCP](https://primer.style/product/getting-started/foundations/mcp/) (`npx @primer/mcp`).

- `instructions.md` as a **router** to component / token / doc folders. Do not stuff everything in one prompt.
- Sub-agents (e.g. a11y reviewer) keep the main context clean.
- Daily QA with **safe outputs** (issue only).
- Colocate rules. Semantic names (`danger.background`, not `red-500`). Front-matter on docs.
- Public MCP tools include `find_tokens`, token usage patterns, coding guidelines, lint-style checks.

**Us:** Primer MCP is the closest public cousin of “hosted Storybook MCP.” Worth a look when we design the consumer endpoint.

### Spotify Encore — Victoria Tholerus + Aleksander Djordjevic

Meetup recap (not a 2026 conference talk, linked from the hub): [How Spotify is Making Their Design System AI-Ready](https://www.intodesignsystems.com/blog/how-spotify-design-system-ai-ready).

- People ask Cursor **before** docs. If Encore is not in that path, adoption dies.
- MCP + machine-readable docs + **eval** (generated vs real Encore, lint, similarity, visual).
- Layered architecture + headless (React ARIA / Base UI) so agents get smaller context bubbles. Claimed 93% developer satisfaction, 220k+ shared style uses.

### Jesse Gardner — New York State

Talk recap on the hub.

- Lit + TypeScript web components, Code Connect, JSDoc-powered custom-elements manifest MCP. Cuts 50–80k token dumps.
- 5-page PDF → working NY-styled multi-step form in 13 minutes **because** the MCP returned real code, not guesses.

### Brad Frost + Ian Frost + TJ Pitre

Talk recap + [Design Systems MCP guide](https://www.intodesignsystems.com/design-systems-mcp).

- FigmaLint **before** generation: token usage, layer names, a11y, descriptions. Score the Figma file first.
- Figma Console MCP to keep design and code linked.
- Design Systems Assistant MCP pulls patterns from Polaris / Spectrum / Fluent / Lightning (industry thinking, not pixels — same idea as Jason’s Apple skill).
- Progressive disclosure of context (always-on / MCP / AGENTS.md).

### Yesenia Perez-Cruz — product primitives

Free: [When the Output Becomes the Material](https://yeseniaperezcruz.substack.com/p/when-the-output-becomes-the-material) (Substack). Talk is paid.

- UI primitives (Button) do not vary that much. Leverage is **product primitives**: wallet, account, transaction, campaign, reward.
- DS team defines **grammar** (surfaces, list / summary / micro views, how objects compose). Domain teams define **vocabulary**.
- Surfaces: canvas, confirmation, batch, inline — not only pages.
- Later for us. Brian’s patterns (filters, headers, sheets) sit between UI primitives and product primitives. Do not start here next week.

### Others (talk bullets only — no full free essay)

| Speaker | Useful bit |
| --- | --- |
| Sebastian Rousseau (WhatsApp Web) | 1 designer + 1 engineer. Claude Code finds every button not on-system. Ships papercuts via a point-and-click → VS Code plugin. |
| Freya Stockman (Relevance AI) | 39 PRs. Tagged `don't.md` so agents stop shipping lazy code. Figma flows → markdown so context survives new terminals. |
| Nate Baldwin (Adobe Spectrum) | Branch-and-burn Cursor explorations. Plan then implement. Throwaway branches to find hidden requirements. |
| Laura Fehre (Figma) | Split docs into small markdown files. One monolith blows the window. Annotate token frequency + alternative names. |
| Cristian Morales Achiardi | W3C token JSON + Style Dictionary as the immortal source. Four layers: tokenization, intent, indexing, strategies. Cheap Claude health report vs paid inventory tools. |
| Davy Fung (Atlassian) | Token drift Figma vs packages via Plugin API in week one. |
| Casandra / Christoph / Raquel | 48h Figma plugin with a **Figma Plugin Developer skill**. Plan / agent / ask / debug on purpose. |

---

## 4. What this changes on our map (and what it does not)

**Strengthens (do not re-litigate)**

- Know first. Storybook MCP + pattern / do-not-use metadata. Thin skills.
- Gate stays human for judgment. Primer-level “issue only” is a valid first trust level.
- Three surfaces. Replit must see the same system Cursor sees, or it bypasses us.
- Eval harness is a prerequisite for auto-approve, not a polish item (Spotify).
- Measure support questions we no longer answer, not MCP call counts (Miro).

**Sharpens**

- Jason’s “DS as markdown” = **instruction + taste**, not a component catalog. Industry already proved the catalog-in-markdown path is the expensive failure.
- Add **do-not-use + alternative** to token / icon / component descriptions (Miro). Taste skill already does this in prose; the system files should too.
- One **router** file (AGENTS.md / Replit instruction) that says: always-on tokens, then Storybook MCP, then taste. Miro’s Slack drop came from the routing line, not from 66 tools.
- Skills first, MCP later for lookups (Miro). Matches “thin MetaMaskill, live Storybook.”
- Look at Primer’s public MCP when we design hosted Storybook MCP.

**Do not steal yet**

- Romina’s 66-tool Tidy / Observatory. Seeds first.
- Spotify layered rewrite of the component architecture.
- Yesenia product primitives as the Q3 bet.
- Paid recordings. If we want demos (Indeed bench, Primer daily QA, Tidy), that is a later purchase, not this week’s work.

---

## 5. Source list (free)

Conference / recaps

- https://www.intodesignsystems.com/agentic-design-systems
- https://www.intodesignsystems.com/speakers
- https://www.intodesignsystems.com/blog/agentic-design-systems-self-healing-loop
- https://www.intodesignsystems.com/blog/design-system-not-ready-for-ai-agents
- https://www.intodesignsystems.com/blog/miro-ai-design-system-mcp-claude-code-skills
- https://www.intodesignsystems.com/blog/how-spotify-design-system-ai-ready
- https://www.intodesignsystems.com/blog/design-teams-shipping-with-ai-2026
- https://www.intodesignsystems.com/design-systems-mcp
- https://www.intodesignsystems.com/ai-design-systems

Speaker-owned / public systems

- https://thedesignsystem.guide/ · https://www.aidesign.guide/ · https://learn.thedesignsystem.guide/
- https://yeseniaperezcruz.substack.com/p/when-the-output-becomes-the-material
- https://www.yeseniaperezcruz.com/blog/design-systems-ai
- https://primer.style/product/getting-started/foundations/mcp/

Paid (not used here): conference recordings pass, Romina’s agentic course, some Substack posts.
