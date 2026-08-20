# MMDS agentic strategy

**Notes:** this doc **and** the [FigJam](https://www.figma.com/board/3ijfD8P0KHe1M5ubwhk27k/MMDS-Agentic-Strategy). Board for the dump. Markdown when something needs to stay long-form. Keep them in sync enough that neither is a secret second copy. Share copy: [Google Doc](https://docs.google.com/document/d/1oRUzBEAuvKoRxEZOHBq827dLpM3ymwhxjNbn0HImgqs/edit?tab=t.mwqp5txptap3#heading=h.l1tzpqbftync).

**Joao tooling, in DS words:** [§3.3.1](#331-what-joao-built-in-design-system-words) — keep this section. It is the version that explains the vision without the meeting transcript.

**Status:** capturing (18 Aug 2026). **Do not implement until the week of 25 Aug.**  
**Audience:** Andy, Didier, DS team, AI working group  
**Owner:** George  
**North star:** agents reach for MMDS when they create UI, and what lives in the design-system team's head becomes quality gates — the same way ESLint already encodes “no hex.” Create and gate share a knowledge layer. Dig into one at a time. We are not the merge blockers.

Related (narrower) doc: [AI Agent Documentation Strategy](./ai-agents.md) covers how _this_ monorepo documents itself for agents. Long source files (Jason’s skills, research extracts) live under `docs/agentic-capture/`.

---

## 1. The problem (not one thing)

We are not the merge blockers. The [non-blocking platform PR process](./non-blocking-platform-pr-process.md) already says that. The gap is: a lot of what makes UI “good” still lives in the design-system team’s head. Some of that is already a gate (`color-no-hex`, no new `component-library` imports). Most of it is not. Create that is off-system makes those gates into undo. Internal DS tooling and visual evidence are adjacent, not the same initiative.

**Frame as create vs gate.** Same knowledge (components, patterns, principles, taste). Different moment. Dig into one at a time. The engineer-sit-down story is the _narrative_ for create, not the taxonomy — designer create is the same job on different tools.

| Problem                          | Who is stuck                                                                                         | What “good” looks like                                                                                                                                          | First lever                                                                                                         |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **1. Create — product engineer** | Ext / Mobile / platform engineer (or their agent) turning Figma, Replit, or a PRD into production UI | Agent reaches for MMDS first. Flags anything in the source that is not system-aligned.                                                                          | Queryable components + patterns + principles + taste. Thin always-on instruction.                                   |
| **2. Create — designer**         | Designer turning a PRD or idea into a Figma flow or Replit prototype                                 | Figma: they (and Figma AI) can find MMDS components and patterns. Replit: attached MMDS libraries + the same docs.                                              | Library + pattern layer in Figma; same instruction + package in Replit. Check designs after.                        |
| **3. Gate**                      | Anyone shipping UI that should have been caught the way ESLint catches hex                           | What is in the DS team’s head is a quality gate. Prefer declarative (lint, fitness, tokens). Use Bugbot / an agent only for what is not writable as a rule yet. | Encode the next rules. Ext/Mobile `BUGBOT.md` for the judgment remainder. Do not re-flag what ESLint already fails. |
| **4. Internal DS tooling**       | This team, building the system                                                                       | Audits, component-creation AI, authoring rules in _this_ repo. Different audience than (1)–(3).                                                                 | Keep separate. Do not ship consumer skills from authoring prompts.                                                  |
| **5. Visual evidence**           | Anyone shipping UI                                                                                   | Dependable, repeatable visual regression and asset gathering. Useful for any UI change, not only DS.                                                            | Parallel track (See). Do not wait for (1)–(3) to be solved.                                                         |

(1) and (2) are one problem, two chairs. (3) is encode-the-head, not “become the CODEOWNER.” Auto-approve is a _side effect_ of enough gates, not the goal. (4) and (5) share tools and people; they are not why we are in the room.

What they share (**Know**): what components exist, which pattern to pick, principles, taste. Build that once. Staff Make and Gate separately.

Create should not invent UI. Gate should catch the same classes of miss a DS engineer would mention — cheaply, every time, without waiting for one of us.

---

## 2. What we are (and are not) doing

**In scope**

- Design-system quality: tokens, components, patterns, a11y, visual parity, docs.
- Authoring in this monorepo, consuming in extension / mobile, and later prototyping (Replit, design pipeline).
- The divide between deterministic checks and agent judgment.
- How we plug into Joao's agent-orchestration framework as a case study.
- How we support designers **before** auto-approve exists.

**Out of scope (owned elsewhere)**

- Security / offensive-content / supply-chain review of PRs. Work with Ola and the AI working group; do not take that on here.
- Org-wide auto-approve policy. We define the DS confidence bar that would _feed_ that policy.

---

## 3. Landscape — what already exists

A lot of the building blocks are already shipped. The strategy is mostly about **where each check lives**, **what is the source of truth**, and **how they compose**.

### 3.1 Quality gates already in CI

| Check                  | Where                                                                                      | Type                           | Notes                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lint / ESLint          | This repo, extension, mobile                                                               | Deterministic                  | Includes Tailwind and `@metamask/eslint-plugin-design-tokens` (`color-no-hex`, `prefer-theme-color-classnames`, `no-deprecated-classnames`)      |
| Unit + component tests | This repo                                                                                  | Deterministic                  | Jest + Testing Library                                                                                                                           |
| Storybook a11y tests   | This repo (`yarn test:storybook`)                                                          | Deterministic                  | Interaction + axe on stories                                                                                                                     |
| Chromatic              | This repo, React web only                                                                  | Visual / human-reviewed        | Blocks merge until visual diffs are accepted. RN is not covered.                                                                                 |
| Fitness functions      | Extension (`development/fitness-functions`)                                                | Deterministic                  | e.g. `prevent-deprecated-imports` — no new imports of legacy `component-library` / `ui/*`                                                        |
| AI PR risk analysis    | Extension (and others) via [MetaMask/ai-analyzer](https://github.com/MetaMask/ai-analyzer) | Agent                          | Labels PRs `risk:low` … `risk:critical`. Ola-owned. `merge_safe` is only true at `low`. This is the "OLAR / risk assessment" piece from the 1:1. |
| CODEOWNERS             | This repo: `@MetaMask/design-system-engineers` on `*`                                      | Human                          | Current hard gate                                                                                                                                |
| Cursor Bugbot          | Extension, Mobile (this repo: default only)                                                | Agent comments on the **diff** | Customized via `.cursor/BUGBOT.md`. Ext/Mobile: tests, coding, performance — **not DS**. Does not read MetaMask Skills.                          |

### 3.2 Agent / skill surfaces

| Surface                      | Repo                                                                                      | Role today                                                                                                               | Risk                                                                                                                       |
| ---------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Cursor rules + `CLAUDE.md`   | This monorepo                                                                             | Authoring conventions. Source of truth for _how we build components here_.                                               | Healthy. See [ai-agents.md](./ai-agents.md).                                                                               |
| MetaMask Skills `domains/ui` | [MetaMask/skills](https://github.com/MetaMask/skills)                                     | Consumer-repo UI guidance (`ui-development`, `component-scaffold`). Installed into extension / mobile via `yarn skills`. | **Goes stale on every MMDS release.** Already happened. Duplicates knowledge that should live in Storybook / the monorepo. |
| Personal / team skills       | `~/.cursor/skills`                                                                        | Review, migration, upgrade, visual-regression-collect, release validation.                                               | High-signal but not distributed. Not the product.                                                                          |
| Design pipeline              | [MetaMask/metamask-design-pipeline](https://github.com/MetaMask/metamask-design-pipeline) | Jason's prototype loop: tokens + 23-item audit + LoRA taste scorer.                                                      | Parallel "taste" system. Relevant to Replit / designer prototyping, not PR approval.                                       |
| Storybook MCP                | This repo, `http://localhost:6006/mcp`                                                    | Live component docs, props, stories, story tests, preview URLs.                                                          | **Local-only today.** Consumers and CI agents cannot see it unless we publish an endpoint.                                 |
| Figma MCP + Code Connect     | Figma + `.figma.tsx` in this repo                                                         | Design ↔ code mapping.                                                                                                  | Only as good as Figma. Many components are not up to date. Many PRs will never have a Figma file.                          |

### 3.3 Joao's stack (the thing we are evaluating as the orchestration layer)

Three related repos, not one:

| Repo                                                                            | What it is                                                                                                                                                                    | Why it matters                                                                                                                                                 |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MetaMask/agent-orchestration](https://github.com/MetaMask/agent-orchestration) | Generic LangGraph framework. A workflow is a plugin folder: state, node profiles (prompt, tools, skills, MCP), edges, deterministic bootstrap. New graph ≈ copy `_template/`. | This is what Joao asked us to use as the case study. **First (only) workflow today:** Extension PR visual-validation (`planValidation` → `executeValidation`). |
| [MetaMask/agent-runner](https://github.com/MetaMask/agent-runner)               | Executor each graph node calls (Claude Agent SDK + Langfuse).                                                                                                                 | Orchestration does not inherit Cursor's MCP/skills. Each node must declare them.                                                                               |
| [MetaMask/ai-analyzer](https://github.com/MetaMask/ai-analyzer)                 | GitHub Action for PR analysis. Pluggable modes. Built-in: `pr-risk-analysis`. Repos can add custom modes + `skills/*.md`.                                                     | Already in the Extension pipeline. Different job than orchestration: cheap-ish PR labeling, not a multi-node graph.                                            |

Joao's guidance (from the 1:1): **do not put new deterministic rules in fitness functions** — add them as nodes in orchestration. We still need a view on _existing_ deterministic tools (ESLint, Chromatic, a11y). Those already work and cost ~zero tokens. See §5.

Contacts while Joao is on leave: **Norbert Elter** (full-time on this) and **Mariona Farell**. Priya / Mariona own scoring and LLM-as-judge.

### 3.3.1 What Joao built, in design-system words

This is the version that landed. Use it in the Didier / Andy share. Do not replace it with the meeting transcript.

Joao is not building a design-system agent. He is building a **factory for small, scored cloud workflows**. Cursor Automation is only the doorbell: “run this script.” The script is [`agent-orchestration`](https://github.com/MetaMask/agent-orchestration).

From a design-system standpoint: we already encode some of our head as ESLint. The rest still needs a checkout, Storybook, Figma, or screenshots. That remainder is a **plugin we own** — a graph of nodes — not a ChatGPT skill and not a second linter.

```text
Doorbell (Cursor / label / Slack / Analyzer)
        ↓
  node dist/cli.js mmds-ui-gate --pr-url …
        ↓
  nodes: some are just code, some call an agent
        ↓
  artifacts + Langfuse traces  →  comment / Slack / later a score
```

Cursor’s skills and MCP do **not** come along. Each node declares its own prompt, tools, skills, and MCP. That is why Storybook-as-source-of-truth still matters: the graph can only query what we host.

Today there is **one** plugin: Extension `pr-visual-validation` (`planValidation` → `executeValidation`). He invited us because QA will ship that graph and sit with product teams. We are the first team that wants **different nodes** (patterns, Figma, tokens) and might own the plugin. Mid-September, Norbert reaches out. The CLI works locally now.

**Create vs gate.** This tooling is almost entirely **Gate and See**. It does not help someone sitting down in Figma or Replit. That stays local instruction + Storybook. Do not make “generate UI” the first graph.

| Already a gate (keep)                  | Graph node (code)                                            | Graph node (agent)                                          | Not this tool                                       |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | --------------------------------------------------- |
| ESLint, fitness, Chromatic, story a11y | Diff inventory, skip-if-no-UI, upload evidence, post comment | Right component / pattern, Figma vs screenshot, TODO vs gap | Authoring UI from a PRD, Replit attach, First Draft |

Andy asked about auto-approve via AI Analyzer. Joao: trigger is ours (label, Slack, Analyzer, Cursor). Open-source PRs need an internal-only trigger until we trust prompt-injection guardrails. Auto-approve is a side effect, not the first plugin.

#### What we could create

1. **`mmds-ui-gate`** — first plugin I would copy `_template/` for. Product PR that touches UI. Skip if it does not.

   - **inventory** (code): changed files, `@metamask/design-system-*` vs leftover `component-library`.
   - **storybook** (agent + MCP): live docs for those components.
   - **pattern** (agent): right component / composition? Flag restyles. Suggest a TODO, do not block.
   - **verdict** (code): structured comment + evidence URLs.
   - Does not re-run `color-no-hex`.

2. **A node on _his_ graph** — cheapest way to use what he built. His plugin already plans tests and takes Extension screenshots. We add **`figmaCompare`**: if the PR links a file, compare those shots to MMDS instances. No Figma → skip and say so. Andy named this in the meeting.

3. **`visual-collect`** — the See problem. Dependable before/after Storybook or `yarn mm` shots, upload to Norbert’s S3, public URLs on the PR. Any UI change, not only DS. Closest cousin of the plugin that already exists.

4. **`mmds-author`** — this monorepo only. Stories, changeset, tokens, Code Connect stale? Do not mix into the Ext consumer graph.

5. **Later, not first.** Taste / LoRA as a node. Auto-approve. “Build the UI from the PRD.” LLM-as-judge on pattern scores (Priya / Mariona, after 20–30 hand-scored runs).

#### How it sits next to the other pieces

| Layer          | Job                                      | Example                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------ |
| Declarative    | Already a gate                           | ESLint, fitness functions, Chromatic             |
| Bugbot         | Cheap always-on comment on the diff      | Next week’s thin DS section                      |
| **Joao graph** | Multi-step, needs tools, we want traces  | `mmds-ui-gate`, `figmaCompare`, `visual-collect` |
| Human          | New primitive, taste, first designer PRs | Still us                                         |

Joao’s “don’t put new rules in fitness functions” means: if the check needs a repo, MCP, or a plan, make it a **node**. It does not mean rip out ESLint.

#### Walk-through

Someone opens an Extension PR that restyles a Button with extra Tailwind instead of `ButtonSecondary`.

- ESLint: green (no hex).
- Bugbot (after we add the section): “compose, don’t restyle — use the variant or a TODO.”
- If we also ran `mmds-ui-gate`: inventory sees the Button import + custom classes → Storybook returns the variant API → pattern node says the same thing with a story link → comment can include a screenshot from his visual graph if we composed the nodes.
- We never became the merge blocker. The head became a gate.

#### What not to do next week

Do not stand up the first DS plugin before Storybook MCP is reachable from a runner. A graph that cannot query the system will hallucinate the catalog — same failure as stale MetaMask Skills. Next week stays: Bugbot section + DSYS-1054. When Norbert says the Ext visual graph is running, the first orchestration experiment is a `figmaCompare` or inventory node on _his_ plugin, not a four-node DS masterpiece.

### 3.4 Existing DS process this agent must respect

- [Non-blocking platform PR process](./non-blocking-platform-pr-process.md): MMDS is not a merge blocker for reasonable scoped UI. Overrides get a `TODO: @MetaMask/design-system-engineers` and a Slack thread. A DS agent that auto-rejects every override would fight this process.
- Designer onboarding (Amanda + George's Cursor workshop): designers _will_ raise PRs. Their top fear is "will this auto-merge / will I break something?" Human review is a **feature** for them right now.

---

## 3.5 What actually looks at a PR today (important)

Skills, Bugbot, and CI are easy to conflate.

| Actor                           | When        | Looks at MetaMask/skills?                                    | Looks at “built with MMDS”?                                          |
| ------------------------------- | ----------- | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| `yarn skills` + Cursor / Claude | Authoring   | Yes (installed markdown)                                     | Only if the human/agent follows the skill                            |
| Lint / fitness functions        | CI          | No                                                           | Only the deterministic bits (hex, some deprecated imports)           |
| AI Analyzer                     | CI          | Almost never. One Mobile exception: flaky-test skill, not UI | No. Risk / blast radius only                                         |
| Cursor Bugbot                   | PR comments | No                                                           | No, unless we add a DS section to Ext/Mobile `BUGBOT.md`             |
| CODEOWNERS / humans             | Review      | No                                                           | Yes — judgment that is not a gate yet. We are not the merge blocker. |

PRs are **not** checked against the skills repo. Skills shape what an agent writes. They do not fail a merge.

---

## 3.6 Six jobs (FigJam map)

Overwhelm comes from treating everything as one initiative. These are jobs in a pipeline. **Know** is the foundation. We do not staff all six at once.

```text
Know  →  Make  →  Gate  →  See  →  Measure
              Sequence says what we do now vs later
```

| Job          | Examples                                                                                                                               | This week vs next                                                           |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Know**     | Token/component/pattern docs, taste, Storybook MCP, thin skills. [DSYS-1054](https://consensyssoftware.atlassian.net/browse/DSYS-1054) | Foundation. Keep mapping; implement next week.                              |
| **Make**     | Component creation, designer → PR, consumer UI, Replit, Code Connect, upgrades                                                         | Capture only. Replit is a test, not a bet.                                  |
| **Gate**     | PR review, deterministic lint, Figma parity, Joao graph, Bugbot DS section, auto-approve later                                         | Capture the inventory. Bugbot Ext/Mobile = first cheap Gate task next week. |
| **See**      | Chromatic, before/after Storybook, `yarn mm`                                                                                           | Parallel; already useful.                                                   |
| **Measure**  | [design-system-metrics](https://github.com/MetaMask/design-system-metrics) dashboard, overrides, custom, pattern drift, parity. See §9 | Counts imports today. Quality is unmeasured — the real gap.                 |
| **Sequence** | Now / next / later, skills vs MCP, three surfaces, human in the loop                                                                   | The anti-overwhelm column.                                                  |

---

## 4. The metaphor: a DS engineer as an agent

Andy’s question is still useful as a **rubric for what to encode**, not as “become the CODEOWNER”: _what would you mention on this UI that is not already a gate?_

That is a better design question than "what skills should we write?" Map each item to the cheapest check: declarative first (ESLint, fitness, tokens), Bugbot / agent only when a rule is not writable yet, human for new primitives and taste.

### Draft rubric — what a DS engineer actually checks

Split into things a machine can decide vs things that still need judgment.

**Deterministic (fail the PR, no LLM)**

1. No hex / arbitrary colors / default Tailwind palette — tokens only.
2. No new deprecated `component-library` / `ui/*` imports (extension fitness function already does this).
3. No SASS in new UI.
4. Component-first: Box / Text / DS components over raw `div` + classes when a prop exists.
5. Types, lint, unit tests, story a11y tests pass.
6. Chromatic: no _unreviewed_ visual diffs (web).
7. Public API / changelog / changeset present when required.
8. No new hardcoded spacing that has a token equivalent (partially lintable).

**Judgment (agent, with evidence)**

9. Is this the _right_ component / pattern, not just a valid one? (Button vs ButtonHero vs TextButton; Modal vs BottomSheet; override vs new variant.)
10. Does the composition match documented patterns (and Brian / Amanda / George tribal knowledge once written down)?
11. If Figma exists and is current: does code match? If not: fallback confidence from stories + tokens + visual evidence.
12. Accessibility beyond axe: focus order, naming, empty / error / loading states.
13. Cross-platform parity (web vs RN) when both are touched.
14. Is this a system gap that should be a TODO + Slack, not a block? (non-blocking process)
15. Blast radius: papercut vs new primitive vs token rename vs theme change.

**Human-only for now**

16. New component / token / theme introduction.
17. Breaking API or visual language changes.
18. "Does this look like MetaMask?" at the composition / taste level (Jason's LoRA / taste skill lives here).
19. First-time designer PRs, until that person is confident.

---

## 5. Where each check should live

The 1:1 tension: Andy initially pictured deterministic rules in fitness functions _outside_ the AI analyzer; Joao said put them _inside_ orchestration as nodes.

**Proposed divide** (to pressure-test this week):

```text
                    cheap, always-on, no tokens
                    ┌──────────────────────────┐
                    │  Deterministic layer     │
                    │  ESLint, TSC, Jest,      │
                    │  story a11y, Chromatic,  │
                    │  existing fitness fns    │
                    └────────────┬─────────────┘
                                 │ fail closed
                                 ▼
                    ┌──────────────────────────┐
                    │  Orchestration graph     │
                    │  (Joao's framework)      │
                    │  nodes that need         │
                    │  context / MCP / files   │
                    │  but still structured    │
                    └────────────┬─────────────┘
                                 │ evidence
                                 ▼
                    ┌──────────────────────────┐
                    │  Agent judgment nodes    │
                    │  pattern, Figma parity,  │
                    │  "right component",      │
                    │  TODO-vs-block           │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    Human review  or  auto-approve
                    (by risk + rubric score)
```

**Keep deterministic tools where they already are** when they are cheap and local (ESLint, tests). Do not reimplement `color-no-hex` as an LLM node.

**Add new structured checks as orchestration nodes** when they need a repo checkout, MCP, or a multi-step plan (Storybook MCP query, visual plan, Figma compare). That follows Joao and keeps us in the shared framework.

**Do not put tribal patterns only in MetaMask Skills.** MetaMask Skills is a _distribution_ channel. The source of truth should be this monorepo (rules, stories, pattern docs) and agents should _read_ it — via Storybook MCP, or a thin pointer skill that says "query Storybook," not a copied component list.

AI analyzer stays as the **org risk label**. We may later add a custom `mmds-review` _mode_ there for a cheap PR comment, but the deep DS graph belongs in agent-orchestration.

**Captured easy win (do not ship this week): DS section on Extension and Mobile `BUGBOT.md`.** Bugbot already comments on those PRs. Neither file mentions MMDS. Add a thin router on changed UI lines only: installed package export index → leftover `component-library` → feature composite; compose don't restyle; gaps get a TODO, not a block. Do **not** paste `ui-development` or a component catalog (that is how skills went stale). Do **not** re-flag hex / deprecated imports that ESLint or fitness functions already fail. Comments stay non-blocking. Two PRs, same section, different package names. This repo's missing `BUGBOT.md` is a smaller follow-up (only catches DS-team PRs).

---

## 6. Three surfaces (do not collapse them)

The same "DS agent" is asked to do three different jobs. Skills and graphs should be named accordingly.

| Surface         | Who                                            | Job                                        | Source of truth                                                                                                                                 |
| --------------- | ---------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authoring**   | DS engineers, designers contributing to MMDS   | Build / change components in this monorepo | `.cursor/rules/`, stories, Chromatic, Code Connect                                                                                              |
| **Consuming**   | Extension / mobile / other product engineers   | Use the _installed_ package correctly      | Installed package exports + **published** Storybook MCP + eslint-plugin + fitness functions. Not a hardcoded component list in MetaMask Skills. |
| **Prototyping** | Designers in Cursor / Replit / design-pipeline | Explore UI that looks like MetaMask        | Tokens + pattern docs + (later) Jason's taste / LoRA loop                                                                                       |

Authoring and consuming have different failure modes. A consumer agent that reads this repo's source will hallucinate unreleased APIs. A consumer agent that only has a stale MetaMask Skills catalog will miss new components (the current pain).

### 6.1 Create vs review (how we frame it)

Do **not** lead with “the engineer’s chair” as the whole strategy. That is the story for create. Designer create is the same job. Gate is a second problem: turn tribal knowledge into checks, the way ESLint already did for hex. We are not the PR blockers. Internal tooling and visual evidence sit beside both.

**Create** needs the agent to pick patterns _before_ code exists. **Gate** checks the result after — preferably declarative, agent only when a rule is not writable yet. If create is off-system, gate becomes undo. Dig into one at a time; do not staff both as one initiative.

George’s first diagram is on the FigJam (left). Clearer version is the section **Create — clearer** to its right. Same story: one Know, different attachment per surface. Gate only on the client.

```text
Idea/PRD ─┬─ Designer ─┬─ Figma  (Know: library + patterns → UI → Check designs)
          │            └─ Replit (Know: instruction + package + Storybook → UI)
          │                         │
          └─ Engineer ◄─────────────┘  handoff only if on-system
                │
                ▼
         Mobile / Extension
           Know: installed package → UI
           Gate: ESLint → Bugbot → graph
```

Three inputs into production UI. Figma and Replit only help if they were already on-system. A PRD has no pixels — the agent must pull patterns.

| Input                             | Aligned only if                                                                                                                                                                                   | Create path                                                                                                                                   | Review still needed                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **Figma**                         | Designer placed 🦊 MMDS + icon library instances, tokens bound. [Check designs](https://help.figma.com/hc/en-us/articles/39592284074263-Check-designs-in-Figma) for hex / detach / wrong library. | Code Connect + Figma MCP → installed package. Do not recreate from a screenshot of detached frames.                                           | Yes. Figma can be stale or mixed (see Card 🚧). |
| **Replit**                        | Instruction + taste + Storybook MCP / installed package attached.                                                                                                                                 | Port, don’t paste. Validate. Three outcomes: accelerator / intent artifact / DS-gap detector.                                                 | Yes. Never assume production-ready.             |
| **PRD** (Jira, Confluence, Slack) | Always — there is no visual to trust.                                                                                                                                                             | Query Storybook / pattern docs: what is this, which pattern, which components. Jason’s loop + Astryx 3-step (pattern → skeleton → component). | Yes. First draft will miss edge states.         |

**Figma AI will not use MMDS by default.** Sitting in [🦊 MMDS Components](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN) does not change that.

| Figma feature                  | What it actually uses                                                                                                                                                                                                                                                                                                       | Use for                                                                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **First Draft** (Actions → AI) | Figma’s own libraries (Simple Design System, wireframes). Not 🦊 MMDS. [Forum still asking for custom libraries.](https://forum.figma.com/suggest-a-feature-11/when-will-figma-ai-allow-you-to-connect-your-own-library-37491)                                                                                              | Explore. Then rebuild with MMDS instances.                                  |
| **Figma Make**                 | Generic React unless a **Make kit** has the npm package (`@metamask/design-system-react`) + guidelines. [Make does not reliably resolve Figma library components](https://forum.figma.com/suggest-a-feature-11/figma-make-not-using-my-library-components-42235) even when subscribed — styles maybe, components often not. | Prototype in code. Same as Replit: kit first or it is off-system.           |
| **Check designs**              | Not AI. Deterministic. Tokens / type / radius / spacing, detached components, wrong library. Flags components; you swap them. Org/Enterprise.                                                                                                                                                                               | **Review** of a file that already exists. Closest Figma cousin of our Gate. |
| **Figma MCP / us**             | `search_design_system` on 🦊 MMDS Components — Button, ButtonIcon, etc. with descriptions and keywords.                                                                                                                                                                                                                     | Create in Figma _with_ the library, or implement from instances.            |

The Card 🚧 page (`13812:1238`) is the create-side pattern problem in miniature: AvatarToken + Button instances mixed with custom frames and a deprecated Tag. Patterns are not a published, queryable layer yet. Designers compose by hand. Agents have nothing to copy (Astryx: grade the examples).

**Workshop (not this week’s implementation):** sit with Amanda / Brian and walk a real flow: PRD → Figma (library? First Draft? Make?) → Check designs → handoff → engineer/agent → PR. Mark where MMDS is present vs skipped. That is the designer create path. Do not assume it matches the engineer path.

---

## 7. Source of truth — the MetaMask Skills problem

George's point from the 1:1, which should be a first-class decision:

> Component docs that agents can query should live in the design system. Use Storybook MCP. Stop re-copying APIs into MetaMask Skills on every release.

**Proposal**

1. **Canonical:** stories + READMEs in this monorepo. Patterns documented next to the component (and a dedicated pattern set — see §8).
2. **Query layer:** Storybook MCP (local for maintainers; **published endpoint** for consumers and CI).
3. **MetaMask Skills `ui-development`:** shrink to a pointer + decision tree ("check the installed export index, then Storybook MCP, then component-library only if not exported") plus _non-API_ rules (no SASS, hierarchy, TODO process). Delete the duplicated component catalog as it rots.
4. **Orchestration nodes:** declare Storybook MCP on the node profile (Joao's model: MCP is per-node, not inherited from Cursor).

**Dependencies we do not have yet**

- Hosted Storybook MCP (today: `localhost:6006/mcp` only). Astryx hosts theirs; that is the v1 gap, not a custom protocol.
- A generated consumer router (`AGENTS.md` / Replit instruction) from the _installed_ package + MCP URL. Re-run on bump. Do not hand-maintain a catalog (Astryx `init --features agents`).
- Pattern docs that are actually agent-usable (not just stories of props).
- A freshness check: if Storybook is down, the agent must degrade, not invent. A CLI `--dense` fallback is later, not v1.

---

## 8. Design patterns ("what's in Brian's head")

This is the highest-leverage _content_ gap. Checks without patterns just enforce syntax.

We need agent-friendly docs for things like:

- When to use Button vs ButtonHero vs TextButton vs ButtonIcon.
- When a local Tailwind override + TODO is correct vs when to add a variant.
- Modal vs BottomSheet vs Toast vs Banner.
- Token tiers: which color / space / radius to pick (not just "don't use hex").
- Density, grouping, page-level layout (headers, footers, empty states).
- Cross-platform: same API, different primitive (web `className` vs RN `twClassName`, etc.).

**Where to put them:** in the monorepo, next to stories, in a consistent shape (purpose, when to use, when not, composition, anti-patterns). That is what Storybook MCP can then serve. MetaMask Skills should not be the home.

This is also the work that unblocks _other people_ reviewing DS PRs — not only agents.

---

## 9. Measure — how we track this

Tracking is **two** questions that keep getting answered by one dashboard:

1. **Are we doing the work?** → Jira.
2. **What is the state of the codebase?** → [design-system-metrics](https://github.com/MetaMask/design-system-metrics) ([dashboard](https://metamask.github.io/design-system-metrics/#/migration)).
3. **Is the UI actually better?** → nothing measures this today.

(3) is the gap, and it is the same gap as everywhere else in this doc. We count what is cheap to count (imports) instead of what we care about (right component, right pattern, visual parity). Counting imports is not wrong — it is just a **proxy**, and it is being read as the goal.

### 9.1 What the dashboard measures today

| Metric                  | Mobile (18 Aug) | What it actually counts                          |
| ----------------------- | --------------- | ------------------------------------------------ |
| MMDS components         | 81 (49/49)      | Exports in the MMDS packages                     |
| MMDS instances          | 8,019 (+116)    | Import sites of MMDS components                  |
| Deprecated components   | 46              | Legacy components being tracked                  |
| Deprecated instances    | 1,654 (−25)     | Import sites of legacy components                |
| Migration progress      | 82.90%          | MMDS ÷ (MMDS + deprecated). **Custom excluded.** |
| 6-month trend           | chart           | The above, weekly                                |
| Code owner adoption     | chart           | Per-team split — the most useful view            |
| Props audit / untracked | JSON            | API adoption, components with no `@deprecated`   |

Pipeline: git submodules of extension / mobile / design-system, scanned weekly (Friday CI PR), config partly generated from `@deprecated` JSDoc.

**It is partly stale.** `ARCHITECTURE.md` phases 3–5 (auto `sync-config`, props-audit fix, untracked reorientation) are still open. `@deprecated` coverage was ~31% extension / ~18% mobile in April, so a large slice of legacy usage is simply not tracked. `migration-targets.json` was retired but still sits in the repo. Any narrative built on these numbers should say that out loud.

### 9.2 Why "MMDS instances up, deprecated down" is the wrong primary

Goodhart's law, in five specific shapes. This is the risk raised in the confirmations thread.

1. **One-to-one swaps carry pattern debt _into_ MMDS.** Three hand-rolled `Text` components that should be one `Banner` become three MMDS `Text` components. Deprecation count improves. The pattern problem is now written in MMDS-based code, which is worse than before because it looks sanctioned.
2. **DS-authored migrations become the reference implementation.** When an engineer sees a migration merged by a design-system engineer, they reasonably assume it is the recommended MMDS pattern. A one-to-one swap accidentally becomes guidance we would later argue against.
3. **Polish looks like regression.** Replacing three MMDS components with one correct higher-level component makes the MMDS instance count **drop**. That is the right outcome and a red chart.
4. **Discovery looks like regression.** Tagging custom implementations raises the deprecated count. That is finding debt, not creating it.
5. **The formula hides the biggest category.** `MMDS ÷ (MMDS + deprecated)` excludes custom one-offs entirely. A codebase could reach 100% migrated and still be mostly hand-rolled UI. The thing we most want to reduce is invisible to the headline number.

### 9.3 Fixes to the measurement itself

Cheap changes, mostly to the metrics repo and how we narrate it:

- **Demote "MMDS instances up."** It is the vanity number and it is in the hero position. Lead with deprecated-and-custom **down**.
- **Make custom / hand-rolled a first-class third category** in the denominator. Then three `Text` → one `Banner` shows as custom-pattern-down instead of MMDS-instance-down. This single change removes the perverse incentive in (3).
- **Count sites, not instances,** where we can — screens or files migrated. A screen is either on-system or it is not; an import count is not.
- **Split discovery from regression in the UI.** "Newly tracked this week" as its own annotated delta, so tagging custom code never reads as going backwards.
- **Annotate the timeline with phase.** Number-driven pass vs polish pass. A dip during polish should be legible as planned, and the annotation has to land _before_ the dip.
- **Every weekly report carries one before/after example.** A number with no picture is how we got here.

### 9.4 What we do not measure yet (and could)

This is where the agentic work pays for itself. These are computable, not vibes — but most of them depend on the pattern layer in §8 existing first.

| Signal                  | How it becomes a number                                                                                                                          | Depends on               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| **Pattern correctness** | Sites where a documented pattern exists but was not used                                                                                         | §8 pattern docs          |
| **Composition depth**   | Ratio of feature composites to raw primitives (lots of bare `Text`/`Box` = hand-rolling)                                                         | Nothing — computable now |
| **Override rate**       | Local Tailwind / style overrides on MMDS components. High = component gap or wrong component                                                     | Partly lintable today    |
| **System gaps**         | Count of `TODO: @MetaMask/design-system-engineers` from the non-blocking process                                                                 | Nothing — computable now |
| **Three-way parity**    | Component exists in Figma **and** React **and** RN, with Code Connect present                                                                    | Code Connect map         |
| **API adoption**        | Props audit — already generated, not used in the narrative                                                                                       | Exists                   |
| **Friction**            | Review wait on migration PRs, revert / hotfix rate, visual bugs caught in release validation, Slack questions we stop answering (Miro's measure) | GitHub + Slack           |

Two of these are worth pulling forward because they need nothing new: **composition depth** and **TODO overrides**. Both describe quality, both are countable from a scan we already run.

"Back to our roots of Figma / React / React Native alignment" is the parity row. It is currently an aspiration; it could be a chart.

### 9.5 The confirmations migration — a process problem, not a metric problem

From the sync with Brian. The current approach is moving the dashboard the right way while creating three risks.

**Scope.** Because each PR is scoped to one deprecated component, there is no room to step back and ask "is this the right component or pattern for this use case?" You cannot ask a pattern question inside a `Text`-replacement diff.

**Reviewability.** The migration PRs are L / XL and carry no visual assets. That is likely why issues escape review — the stablecoin lending bottom sheet rendering over the confirmation screen surfaced in 8.7.0 release validation, not in review. Adding visuals by hand for every affected area is a significant cost on Brian; expecting the confirmations team to manually verify everything is neither fair nor scalable. Both roads end badly: merge without visual validation, or stall. Four PRs sat two days waiting for review.

**Reinforcement.** See §9.2 (2) — a DS-authored one-to-one swap reads as recommended practice.

Proposal:

1. **Continue the number-driven pass** for now to meet adoption targets. Brian is aligned; this is explicitly short-term.
2. **Protect time for a dedicated polish phase** for confirmations, modelled on Brian's perps work: page-by-page, visual before/after, pattern alignment rather than component swaps. Perps left both the codebase and the design system better; confirmations deserves the same treatment.
3. **Scope polish PRs by screen or flow, not by component.** That makes visual review possible and makes the pattern question natural.
4. **Automate the visual evidence.** This is the strongest argument for the See track: `visual-collect` (§3.3.1) is not a nice-to-have, it is what makes a large migration reviewable at all. Manual capture is unaffordable for Brian and manual verification is unfair to confirmations.
5. **Set expectations before the polish phase**, not after the chart dips: during polish, MMDS instance counts may fall and deprecated counts may rise as custom code gets tagged. Both can be success.
6. **Give the polish phase its own acceptance criteria** beyond component counts — design consistency, pattern correctness, UX outcomes.

### 9.6 Who owns which question

| Question                       | Where it lives                                                           | Do not ask          |
| ------------------------------ | ------------------------------------------------------------------------ | ------------------- |
| Are we doing the work?         | Jira: epic per surface, **polish phase as its own epic** with its own AC | the dashboard       |
| What is the state of the code? | metrics dashboard, weekly                                                | it to judge quality |
| Was _this change_ correct?     | gate: ESLint → Bugbot → graph, plus visual evidence                      | a trend chart       |
| Is the system getting better?  | quarterly narrative with examples                                        | a single number     |

The dashboard counts imports. That is all it can do, and it does it well. Quality has to come from the gate and from examples.

---

## 10. Sequencing — now / next / later

Constraint from Andy: iterative value, not "dive into the deep end." Each phase should help humans even if we never auto-approve.

### Now (this week) — map only. Action starts week of 25 Aug.

**This week's deliverable:** this doc + FigJam, a recommended first wedge, and a check inventory. Share with Didier. Do not open Ext/Mobile/orchestration PRs yet.

Research still needed (see §14):

- Read agent-orchestration `_template` + `docs/adding-a-graph.md` and decide the first MMDS workflow plugin.
- Confirm whether Storybook MCP is used anywhere in consumer repos today.
- Inventory MetaMask Skills `ui-development` vs current package exports (staleness delta).
- Talk to Norbert on how a new graph is registered and triggered (Cursor Automation vs GitHub Action).
- Align with Jason on _where the friction actually is_ (review wait vs missing components vs upgrade pain vs designer confidence).

**Recommended first wedge (hypothesis — confirm this week):**

> **Publish Storybook MCP + write the first pattern docs + a thin consumer pointer skill.**

Why first:

- Unlocks every later agent (authoring, consuming, orchestration, Replit).
- Stops the MetaMask Skills rot immediately.
- Helps designers and product engineers _this month_, with no auto-approve required.
- Visual regression and Figma parity are more valuable once agents can see the real API.

Why not "first orchestration graph" first: we do not yet have a stable, queryable source of truth to hand the graph. A graph over stale MetaMask Skills would encode the wrong system.

Why not "visual regression for consumers" first: Chromatic already covers this monorepo's web stories. Consumer visual work (Joao's existing `pr-visual-validation`, George's `visual-regression-collect`) helps other teams and is worth a **parallel** track if Norbert can keep that graph moving — but it is not the DS-knowledge bottleneck.

### Next — first MMDS orchestration graph

Once Storybook MCP is reachable from CI / a runner:

A `mmds-ui-gate` (name TBD) workflow plugin:

1. Deterministic preflight (lint/test/changeset already ran — graph reads their results, does not re-run ESLint in the LLM).
2. `inventory` node: what components / tokens / stories changed.
3. `storybook` node: pull live docs + related stories via MCP.
4. `pattern` node: apply documented decision trees.
5. `visual` node: Chromatic summary (web) and/or screenshot evidence (RN / consumer).
6. `verdict` node: structured output (approve / comment / request-changes + evidence). Human still merges.

Figma MCP is a **conditional** node: run only if a file/node is linked and Code Connect exists. Otherwise skip and say so.

### Later — confidence for auto-approve

Only after we can measure the agent against human DS reviews:

- Start with one-liners / papercuts / token-class renames in **this** repo, internal authors only.
- Never auto-merge designer or external PRs as the first step. Auto-approve ≠ auto-merge. Designers asked for a human.
- Consumer-repo auto-approve of DS-shaped changes is a further step and needs the org risk label (`risk:low`) **and** the DS verdict.

Taste / Replit / LoRA stay on a **design-prototyping** track. They raise contribution quality _into_ the pipeline; they are not a merge gate.

---

## 11. Auto-approve vs auto-merge vs human-in-the-loop

These got conflated in the engineering monthly and in the designer workshop.

| Term              | Meaning                                   | DS stance                                                               |
| ----------------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| Auto-approve      | A bot CODEOWNER approve when gates pass   | Eventual, small / low-risk, internal first                              |
| Auto-merge        | Merge without a person                    | **Not** the near-term goal. Designers do not want this yet.             |
| Human-in-the-loop | Engineer reviews; agent prepares evidence | Default for now. This is how we onboard designers and build confidence. |

Jason's clarification: he thought auto-merge was already ready; he does **not** need it immediately. The valuable near-term move is still getting designers into the codebase with a human safety net.

---

## 12. Vision, Replit, and design-system relevance (Jason, 18 Aug)

Capture from a talk with Jason Culbertson (design director). Focus here is vision, Replit, and why MMDS has to show up as agent-readable context. Font / open-source tangent parked — not this week.

This is still **prototyping-track**, not a merge gate. Do not let it displace Storybook MCP / Bugbot next week. It _does_ change what “Know” has to look like: if Replit cannot see the system, the first prototype will be off-system, and we will spend the next four hours of taste work undoing that.

### 12.1 Vision (why this matters)

Jason’s first slide: **features are no longer a moat.** Anyone can build anything. If something works, everyone copies it. Startups used to outbuild bigger companies; that is less true now. The question is how we win.

His answer is **taste + thinking**, not pixels:

- Early Replit / agent prototypes that “used the design system” still sucked, because design intent and patterns were missing. Tokens without thinking is not MetaMask.
- Skills are how we **encode other people’s minds** (motion, patterns, Apple-style reasoning) so people without that experience can use it. Uplevel everyone.
- Designers then spend time **applying taste on top of good defaults**. Defaults should be MMDS + Brian’s patterns + principles. Craft levels sit on top of that, not instead of it.

Two documents, not one (Gul’s feedback):

| Doc                    | Job                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------- |
| Design principles      | Tactical. How we make the thing. Historically generic — “you could slap any company logo on them.”      |
| Manifesto / how we win | Unique POV. How craft and design help us stand out. High craft _and_ bold. Jason + Gul; not shared yet. |

Three **craft levels**, decided with Gul at kickoff of every project:

1. **Solid** — as expected, no papercuts, clear, seamless. This is the floor agents should already hit via DS + patterns.
2. **Crafted** — motion, delight, not only functional.
3. **World class** — will not show up in metrics; creates brand affinity / market attention (Cash App princess-wand example).

If we get (1) for free from agents, humans spend time on (2) and (3).

Jason is already working almost entirely in an IDE / simulator, often **without Figma**. Referrals and sweepstakes each ~4 hours. The first pass was good enough that the team only had tiny copy crits. That only works if the skills (and the DS file) are in the chat.

### 12.2 Replit — get it on the design system

The bottleneck Jason named: **he constantly has to tell the agent to go look at the design system.** If the system were simply a markdown file the agent always has, following it would get much better. His words: take Storybook and turn it into markdown.

Industry nuance (IDS 2026 / Indeed): **do not dump Storybook as one markdown catalog.** That path uses more tokens and hallucinates more. Attach a thin Replit / Cursor **instruction** plus the taste skill (markdown). Keep APIs queryable (Storybook MCP / package exports). See [industry-ids-2026.md](./agentic-capture/industry-ids-2026.md).

Concrete idea (he has admin):

- Any Replit work for **mobile** auto-attaches an instruction: here is the design system, follow it.
- Same file / same instruction becomes a **Cursor skill**. One source, two runtimes.
- He already has a **motion skill in Replit for sheets**. Same pattern for other motion / pattern skills → consistency across the product.
- His loop: dump Jira + Confluence + Slack into a new chat titled as the project → “understand this, tell me what it should be” → build from `main` in the simulator → 2–4 hours of taste on top, using skills (including the Apple one).

ChatGPT felt better than Cursor _because_ he has a dozen design skills in ChatGPT and almost none in Cursor. Distribution of the same files matters as much as quality.

Replit outcomes we already named still apply: **production accelerator / design-intent artifact / DS-gap detector**. Validate. Do not assume a Replit build is production-ready.

### 12.3 Design-system relevance (what we owe this)

Jason is asking MMDS for the **missing attachable context**: something the agent follows without being reminded. That is an instruction + live API, not a pasted catalog.

That is the same decision as DSYS-1054 / §7, just for a different surface:

| Layer                  | What it carries                         | Where it lives                                                                                                   |
| ---------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| DS “what / how”        | Components, tokens, stories, APIs       | Storybook (and a markdown / MCP projection Replit + Cursor can read)                                             |
| Taste / thinking       | Why, when, avoid-list, MetaMask feel    | A **MetaMask design taste** skill — Jason + Brian, not “Jason’s taste”                                           |
| Patterns               | Filters, headers, bottom sheets, lists… | Storybook MDX (Brian’s FigJam is a draft). Mining chat history may be a faster first pass than redrawing FigJam. |
| Principles + manifesto | Tactical bar + how we win               | Jason / Gul docs, once shared                                                                                    |

How Jason builds a taste skill (suggest this to Brian too):

1. Point the agent at a chat thread of real feedback → “make a skill from this.”
2. At the end of each project: “update the skill with what you learned.”
3. Eventually theme-wide: avoid everything we already know is wrong.

### 12.4 Files landed (18 Aug) — read, do not ship

Captured as-is under [`docs/agentic-capture/`](./agentic-capture/):

| File                                                                   | What it actually is                                                                                       |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [metamask-design-taste.md](./agentic-capture/metamask-design-taste.md) | Living team standard. Critique **and** implementation. Trigger includes “use the MetaMask design system.” |
| [apple-design.md](./agentic-capture/apple-design.md)                   | WWDC fluid-interface thinking **translated for the web** (CSS, Pointer Events, Motion). Not an HIG dump.  |

**What to keep (theme-wide)**

- Governing idea: **compose before creating.** Obvious before impressive. Delight is earned.
- Begin with evidence. Inspect the live product, not an isolated screenshot. Separate reusable pattern / platform convention / source brand.
- Product model: what / why / primary action / next / where to inspect status. One dominant job per screen.
- Hierarchy order: remove → group → type/space → dividers → containers → color last.
- Color encodes meaning. Tokens, not variety. Containers only when a boundary has meaning.
- Interaction semantics must match the visual promise (chevron vs sheet vs ellipsis vs native share).
- Sheets as a **system** (component, detents, nested content, back vs close). Do not fake a sheet with a black overlay.
- Finance/crypto trust: reconcile totals, name units, privacy by default.
- Critique order: model → hierarchy → redundancy → semantics → **system fit** → trust → craft → delight.
- Implementation: reuse components/tokens, smallest coherent change, verify in the real app (tap, scroll, keyboard, sheets). A design is not done in source.
- Apple through-line: motion starts from the **current** value, inherits velocity, projects momentum, is interruptible. Springs, not locked transitions.
- Apple eight principles (Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity ≠ minimalism, Craft, Delight). Delight is the result of the other seven.

**What is project residue (do not promote to system law)**

Rewards / referrals / sweepstakes specifics: campaign eligibility vs enrollment vs daily qualification, weekly draw schedules, “Join the sweepstakes” CTA vs “Opt in,” prize-pool rows, Money Account support links. That is how he built the skill (one project, then update). Theme-wide later. Brian can add a different project’s residue the same way.

**DS relevance**

The taste skill already _tells_ the agent to reuse the real component and token system. It does not _contain_ that system. Jason’s missing skill is still a DS markdown / Storybook projection it can read. Do not paste a component catalog into the taste file.

Apple skill snippets are **web**. Mobile Replit / RN will use the thinking (interruptible sheets, velocity, rubber-band, reduced motion), not the CSS. Jason’s existing Replit motion skill for sheets is the same family.

Still waiting: principles + manifesto (Jason / Gul). Font / OSS parked.

**Do not** put the DS catalog inside the taste skill. Taste = why / when / feel. DS file / Storybook = what to use. Same split as skills vs MCP on the FigJam.

---

## 13. Topics the 1:1 did not cover (additions)

- **Evaluation harness.** We cannot claim "as good as George" without a set of historical PRs (approve / request-changes) to score the agent against. This is a prerequisite for auto-approve, not a nice-to-have.
- **Author vs consumer vs prototype** (see §6). Easy to accidentally build one skill that is wrong for all three.
- **Hosted Storybook MCP.** Local MCP does not help CI or extension agents.
- **RN visual gap.** Chromatic is web-only. Mobile still depends on `yarn mm` / simulator skills / Joao's extension-oriented graph.
- **Non-blocking TODO process.** An agent that does not know this will over-block product teams.
- **Existing eslint-plugin-design-tokens.** Already the right home for "no hex / no default Tailwind colors."
- **Preview packages / upgrade skills.** `upgrade-design-system` and preview aliases already help adoption. An agent that reviews _upgrades_ is a different graph than one that reviews _new UI_.
- **Cost.** Deterministic checks are free. Orchestration nodes cost tokens and need Langfuse. Bias new rules to the cheap layer.
- **Trigger.** Cursor Automation vs GitHub Action vs both. Joao's framework is designed so Cursor only _starts_ a Node process.
- **Governance.** Who can change node profiles / pattern docs? Same CODEOWNERS as the system they encode.
- **ai-analyzer custom mode vs new orchestration graph.** We should pick one home for the DS _verdict_ so we do not run two agents that disagree.

---

## 14. Open questions

### Product / sequencing

1. Is the first wedge **Storybook MCP + pattern docs** (George's current lean) or **first orchestration graph** (Joao case-study lean)? Can we do a thin graph that _only_ calls Storybook MCP as the case study?
2. What did Jason mean by the real friction — review wait, missing primitives, upgrade lag, or designer confidence? **Partial answer (18 Aug):** on Replit the friction is “I have to keep telling it to look at the design system.” A DS markdown / Storybook projection is the ask.
3. Auto-approve target when we get there: this monorepo, extension DS-touching PRs, or designer papercuts?

### Architecture

4. Confirm Joao's "don't use fitness functions" applies to _new_ rules only. We should not rip out ESLint or `prevent-deprecated-imports`.
5. Should the DS verdict be an **agent-orchestration plugin**, an **ai-analyzer custom mode**, or orchestration that _writes_ a label ai-analyzer already understands?
6. Where does a published Storybook MCP get hosted (GitHub Pages storybook, Chromatic, dedicated service)?
7. MetaMask Skills: pointer skill now, or wait until MCP is published?

### Content

8. Who drafts the first pattern set with Brian / Amanda — and what is the first five decisions to write down?
9. Do we treat Figma as required for new components going forward, or permanently optional with a fallback path?
   9a. Taste + Apple files landed in `docs/agentic-capture/`. Park next to Know, or start a Replit instruction next month? Still capture-only until week of 25 Aug. Who strips Rewards residue before it is called theme-wide?

### People / process

10. End-of-week share: Didier only, or Didier + Norbert + Ola + Jason?
11. Andy mentioned a Google Doc for collaboration. Keep this markdown as source and paste, or switch?
12. Designer support this quarter: continue workshops + human review, or also a "DS agent draft review" comment that is explicitly non-blocking?

---

## 15. Captured tasks (action from week of 25 Aug)

Nothing below is started this week. This week is capture + Didier point of view only.

### This week (capture only)

- [x] Start this doc and the [FigJam](https://www.figma.com/board/3ijfD8P0KHe1M5ubwhk27k/MMDS-Agentic-Strategy)
- [x] Joao tooling in DS words — [§3.3.1](#331-what-joao-built-in-design-system-words) (keep for the share)
- [ ] Finish the Didier one-pager (now / next / later + why)
- [ ] Optional: keep researching Joao's repo so the one-pager is not hypothetical

### Next week — first actions (proposed)

- [ ] **DS section on Extension + Mobile `BUGBOT.md`** (thin router, no catalog). Two PRs. Highest-leverage cheap Gate win.
- [ ] **DSYS-1054** — RN Storybook MCP + first pattern MDX + thin MCP-first `ui-development` skills
- [ ] Read `agent-orchestration` `_template` / `adding-a-graph.md` with Norbert; decide if a thin Storybook-only graph is the case study
- [ ] Diff MetaMask Skills `ui-development` vs current package exports (staleness delta) to size the skill shrink
- [ ] **Confirmations polish phase** — Jira epic of its own, page-by-page, own acceptance criteria (§9.5). Agree with Andy / Brian in Monday's sync.
- [ ] **Reframe the metrics narrative before the polish dip** — deprecated/custom down as primary, not MMDS instances up (§9.3)

### Measurement (metrics repo — small, high leverage)

- [ ] Add **custom / hand-rolled** as a third category so composition is not punished (§9.3)
- [ ] Split "newly tracked" from "regression" in the dashboard deltas
- [ ] Phase annotations on the timeline (number pass vs polish pass)
- [ ] Two quality signals that need nothing new: **composition depth** and **`TODO: @MetaMask/design-system-engineers` count** (§9.4)
- [ ] Finish `ARCHITECTURE.md` phases 3–5 (auto `sync-config` from `@deprecated`, props-audit fix, untracked reorientation); remove retired `migration-targets.json`
- [ ] State `@deprecated` coverage (~31% ext / ~18% mobile in April) wherever the % is quoted

### Parked (do not start next week unless the above is moving)

- [ ] First `mmds-ui-gate` orchestration plugin
- [ ] `visual-collect` — the thing that makes L/XL migration PRs reviewable (§9.5)
- [ ] Three-way parity chart: Figma + React + RN + Code Connect (§9.4)
- [ ] Hosted Storybook MCP endpoint
- [ ] This-repo `BUGBOT.md`
- [ ] Replit: attach a shared DS markdown / instruction for mobile work (Jason has admin). Same file as a Cursor skill.
- [ ] Replit production-readiness test (validate, do not assume)
- [ ] Port captured taste + Apple skills into MetaMask/skills / Replit. Strip Rewards residue before calling it theme-wide. Suggest Brian mine one project’s chat the same way.
- [ ] Evaluation harness (historical DS reviews)
- [ ] Auto-approve of XS papercuts
- [ ] Golden-path surfaces + three examples
- [ ] Predictions theming / color system

---

## 16. People

| Person         | Role on this                                              |
| -------------- | --------------------------------------------------------- |
| George         | Owns the plan and DS-side design                          |
| Andy           | Protects time; partner on sequencing and Didier share     |
| Didier         | Alignment on "this is what accelerates MMDS adoption"     |
| Joao Tavares   | Framework author; on paternity leave                      |
| Norbert Elter  | Full-time on orchestration; primary technical counterpart |
| Mariona Farell | Orchestration / AI initiative while Joao is out           |
| Ola            | AI analyzer / PR risk                                     |
| Jason          | Taste, prototyping, bottleneck challenge                  |
| Brian / Amanda | Pattern knowledge to encode; designer onboarding          |
| Josh (Earn)    | Replit / reuse-code thread                                |

---

## 17. Working notes

Use this section as a scratch pad while researching. Promote anything durable into the sections above.

### 18 Aug — kickoff

- 1:1 with Andy captured above.
- George still needs a first-pass on agent-orchestration (last touch was the Joao conversation).
- MetaMask Skills freshness is already a live pain; Storybook-as-source-of-truth is the leading mitigation.
- Auto-merge is explicitly _not_ what designers want right now.
- Pure Black is closed; this is the only focus this week.

### 18 Aug — later the same day

- FigJam sorted into six jobs (Know / Make / Gate / See / Measure / Sequence). Original stickies kept.
- Confirmed: consumer PRs are **not** checked against MetaMask/skills. Skills are authoring-only.
- Confirmed: Bugbot looks at the PR diff + `.cursor/BUGBOT.md`. Ext/Mobile have no DS checks. Easy win captured for **next week**, not this week.
- Q3 Speed / Quality / Consistency, DSYS-1054, Replit, and Joao's stack folded into the map. No implementation until week of 25 Aug.

### 18 Aug — Jason Culbertson (vision / Replit / DS)

- Features are no longer a moat. Win with taste + thinking, not more features.
- Replit ask: auto-attach “here is the design system, follow it” (he has admin on mobile). Same file → Cursor skill.
- Missing skill is the DS itself as markdown (Storybook → markdown). Taste skill is separate: MetaMask design taste, updated after each project, mined from chat feedback.
- Principles (generic, tactical) vs manifesto (how we win). Three craft levels with Gul: solid / crafted / world class. Agents should hit solid by default.
- Taste + Apple skills landed. Captured in `docs/agentic-capture/`. Do not ship this week.
- Taste already says reuse real components/tokens. Still missing: a DS file the agent can read. Campaign/sweepstakes sections are project residue.
- Apple skill is WWDC fluid-interface thinking translated for the web. Thinking travels to RN; CSS snippets do not.
- Still waiting: principles + manifesto (Gul). Font / OSS parked.
- FigJam Taste section updated. Still a dump.

### 18 Aug — industry (Into Design Systems)

- Free recaps only. Recordings are paid; not used.
- Consensus matches our map: DS as infrastructure, AI as a new user, plant seeds, trust levels, presence where the agent already is.
- Five failure modes: drift, markdown-into-MCP, no trust levels, MCP without always-on rules, monolithic docs.
- Indeed: JSON for MCP, Markdown for taste/rules. 5× cheaper, fewer hallucinations. Do not turn Storybook into one markdown file for Replit.
- Miro: do-not-use metadata; two MCP tools + a routing line dropped Slack questions 70–80%; skills before MCP; measure questions you no longer answer.
- Primer: public MCP; agents may only create issues. Spotify: eval harness; agents bypass a fat system.
- Full notes: [industry-ids-2026.md](./agentic-capture/industry-ids-2026.md). FigJam Industry section added.

### 18 Aug — Astryx (facebook/astryx)

- AI-operable DS. Their MCP is hosted `search` + `get`. We keep Storybook MCP for v1. Do not build a second MCP.
- Steal: host Storybook MCP; generate a thin AGENTS.md / Replit router from the _installed_ version (not a catalog); dense answers; intent keywords; 3 smoke questions; yarn alias so agents don’t invent paths.
- Later: templates worth copying (“AI is a copycat”), vibe tests, CLI fallback if Storybook is down.
- Notes: [astryx.md](./agentic-capture/astryx.md).

### 18 Aug — create vs review

- Review (Gate) is half the job. Create is how a product engineer (or designer) gets to UI. If create is off-system, review is undo.
- Three inputs: Figma / Replit / PRD. First two must already be on-system. PRD has no pixels — agent pulls patterns from Storybook.
- Figma First Draft does **not** use 🦊 MMDS. Figma Make needs a Make kit + npm package. Check designs is deterministic review, not generate.
- Workshop designer workflow with Amanda / Brian. Card 🚧 is the pattern gap: mix of instances + custom + deprecated Tag.

### 18 Aug — five facets, frame as create vs review

- Problem is not one-dimensional. Review wait is one facet. Off-system create is another. Intertwined, different first actions.
- Engineer create: Figma / Replit / PRD → agent reaches for DS first, flags off-system inputs. Needs components, patterns, principles, taste.
- Designer create: same job. Figma needs findable components/patterns. Replit needs MMDS libraries + the same docs.
- Review: Bugbot + declarative gates → auto-approve path. Dig into this separately.

### 18 Aug — gate ≠ PR review

- We are not the merge blockers. Non-blocking process already exists.
- The second problem is not “CODEOWNER wait.” It is: turn what is in the DS team’s head into quality gates, like ESLint.
- Prefer declarative. Bugbot / agent only for what cannot be a rule yet. Auto-approve is a side effect, not the goal.
- Andy’s “approve to the same standard as you” is still a useful _rubric for what to encode_, not a request to become the CODEOWNER.

### 18 Aug — Joao meeting (orchestration)

- Cursor Automation = doorbell. The product is a LangGraph plugin in `agent-orchestration`. Nodes can be code or agents. Cursor MCP/skills are not inherited.
- First plugin is Extension visual validation (plan → execute). He invited us to own a DS-specific plugin and/or add a Figma-compare node onto his graph.
- Use for Gate + See (checkout, screenshots, MCP, scored runs). Not for Create. Not a second ESLint.
- Trigger is ours. Open-source: internal-only trigger until guardrails exist. Auto-approve later, not the first graph.
- Contacts: Norbert (full-time), Mariona / Priya (scores + judge). Local CLI works now.

### 19 Aug — tracking / measurement (metrics repo + Brian sync)

- Tracking is Jira (are we doing the work) + dashboard (state of the code). Neither answers "is the UI better." That third question is the gap. See §9.
- [design-system-metrics](https://github.com/MetaMask/design-system-metrics) counts **imports**. Useful, but a proxy. `ARCHITECTURE.md` phases 3–5 still open; `@deprecated` coverage ~31% ext / ~18% mobile in April, so tracked ≠ all legacy usage.
- Migration % = MMDS ÷ (MMDS + deprecated). **Custom one-offs are excluded** — the biggest category of off-system UI does not move the headline number at all.
- Five Goodhart shapes: one-to-one swaps carry pattern debt into MMDS; DS-authored swaps become the reference implementation; polish makes MMDS counts drop; tagging custom code makes deprecated counts rise; custom is invisible.
- Fix the metric, not just the narrative: custom as a third category, count sites not instances, split discovery from regression, annotate phases, one before/after per weekly report.
- Two quality signals need nothing new: **composition depth** (composites vs raw primitives) and **`TODO: @MetaMask/design-system-engineers` count**.
- Confirmations: continue the number pass short-term (Brian aligned), then a protected polish phase modelled on perps — page-by-page, visual before/after, pattern alignment. Scope polish PRs by screen, not by component.
- L/XL component-scoped PRs with no visual assets are the review problem. Stablecoin lending bottom sheet surfaced in 8.7.0 release validation, not review. Four PRs waited two days. Manual capture is unaffordable for Brian; manual verification is unfair to confirmations. This is the case for `visual-collect`.
- Set the expectation about the polish dip **before** it happens, with Andy and Didier.
- "Back to our roots of Figma / React / RN alignment" is measurable: parity + Code Connect presence per component.
- Raise in Monday's weekly sync.

### 19 Aug — inbox sweep

- Fresh-eyes pass over the doc. Inventory (§3) is the strongest part. The framing layers are stacked three deep and read as decided — see §18.
- Gaps dumped raw into §18. Nothing promoted, nothing framed.

---

## 18. Inbox — raw, unplaced

Unsorted. Written down so it is not lost, **not** organised into the frames above. Promote when a frame actually earns it.

### 18.1 Framing debt (the doc's own problem)

Three framings are layered on top of each other and each was added as if it were a capture:

| Framing                                                  | Where    |
| -------------------------------------------------------- | -------- |
| Six jobs (Know / Make / Gate / See / Measure / Sequence) | §3.6     |
| Three surfaces / five facets                             | §6, §6.1 |
| Create vs gate                                           | §1, §6.1 |

They overlap heavily. Several statements also carry more confidence than the gathering supports — "do not collapse them" (§6), "the wrong primary" (§9.2). **Option:** quarantine all three into one _framing attempts, undecided_ section so the inventory stands alone and new facets are not bent to fit. Not done yet.

### 18.2 Tooling we already own but have not inventoried

- **`~/.cursor/skills/design-system-ops`** — ~40 design-system skills installed locally. Someone has already built a taxonomy of DS agent jobs: `token-audit`, `token-compliance`, `component-audit`, `component-api-validator`, `drift-detection`, `adoption-report`, `docs-coverage`, `naming-audit`, `theme-audit`, `figma-variable-audit`, `codemod-generator`, `deprecation-process`, `governance-encoder`, `metadata-schema-generator`, `context-engine-builder`, `component-decision-tree`, `codebase-index`, `ai-component-description`, `version-bump-advisor`, `stakeholder-brief`, `system-health`, `triage`. Today §3.2 has this as a single line ("high-signal but not distributed").
  - Open: build vs adopt. Which of these are we about to reinvent? `governance-encoder`, `metadata-schema-generator` and `component-decision-tree` sound like the "encode Brian's head" job (§8). `codebase-index` sounds like the Storybook MCP job (§7).
- **Motion / taste cluster** in `~/.agents/skills` — `animate`, `animate-expo`, `animation-vocabulary`, `apple-design`, `emil-design-eng`, `find-animation-opportunities`, `improve-animations`. The Apple / taste files are already in `docs/agentic-capture/`. The motion ones are not. **MMDS has no motion or animation guidance layer at all.** Open: is motion a DS domain or not? If yes it is a Know gap, not a tooling gap.
- Personal skills already doing gate-shaped work with no distribution path: `review-pr`, `self-review-pr`, `review-component-migration`, `release-validation`, `visual-regression-collect(-extension)`, `record-storybook-ios`, `upgrade-design-system(-preview)`.

### 18.3 The design side is nearly empty

§3.2 lists Figma MCP + Code Connect and stops. Also connected today: a **Figma Console MCP** — `audit_design_system`, `lint_design`, `check_design_parity`, `generate_component_doc`, `audit_component_accessibility`, variable CRUD + batch, `export_tokens` / `import_tokens`, `diff_versions`, `blame_node`, `generate_changelog`, annotations. Separate from the official Figma MCP.

Given designer-create is an open problem (§6.1) and the Card 🚧 page is the evidence (§8), this is the largest blank in the landscape. Unknowns: is it dependable, does it work on the MMDS Components file, does it need admin, is it a person's laptop or something we can share.

### 18.4 Timing — everything we have fires at PR time or later

- **Cursor Hooks are not mentioned anywhere in this doc.** Hooks fire while someone is typing. Cheapest possible feedback, no PR involved, no tokens. If gate = "encode the head," a hook is the earliest place a gate can live.
- Order of surfaces by cost and latency, roughly: hook → ESLint → Bugbot → orchestration graph → human. We have only reasoned about the last three.

### 18.5 Codemods as the missing migration lever

The confirmations story (§9.5) is partly "humans hand-swapping instances." Nothing anywhere proposes automating the mechanical swap so humans only do the pattern work. `codemod-generator` exists locally (§18.2). This is the same pass that would raise `@deprecated` coverage.

### 18.6 Measurement blind spots (beyond §9.4)

- **Figma library analytics** — component insert counts and **detach rate**. Detach is the design-side equivalent of override rate (§9.4). Zero design-side numbers exist today; the whole of §9 is code-side.
- **Runtime / product telemetry** — nobody has proposed prioritising migration by actual user traffic. We rank by instance count, not by what people touch.
- **Version lag** — how many MMDS releases behind Extension and Mobile actually are. Adoption of a stale version is not the same as adoption.
- **Support load** — volume and _type_ of DS questions in Slack. The cheapest signal of a Know gap and we do not log it.

### 18.7 Unowned jobs

- **`@deprecated` tag authoring.** Coverage at ~31% ext / ~18% mobile (§9.1) is not a tooling gap — nobody owns writing the tags, in what format, at what point in the release. The entire metrics pipeline reads from them.
- **When the agent is wrong.** No appeal path, no owner for tuning, no record of false positives. This is the thing that decides whether people trust the gate or route around it.
- **Token / run cost.** No budget per PR, no idea what a graph run costs.
- **Component API quality.** `props-audit` is mechanical. Nobody judges whether an API is _good_.

### 18.8 Check categories never raised as gate candidates

RTL / localisation · theme + dark mode coverage · bundle size · component render performance · naming drift across Figma / React / RN · Figma file hygiene as a precondition for Code Connect being trustworthy.

### 18.9 People-side

- **Onboarding new DS engineers** is the same encode-the-head problem with a different beneficiary. Never mentioned. `engineering-onboarding` and `designer-onboarding` skills exist locally.
- Designer-authored PRs: who reviews them, and does a gate help or scare them (§3.4 touches the fear, not the ownership).
