# Agentic design system — plan

- **Status:** draft (19 Aug 2026)
- **Audience:** Andy, Didier, DS team, AI working group
- **Owner:** George
- **Ask:** none. This is our point of view and our plan, shared for alignment.

Working capture, transcripts and the full tool inventory live in [agentic-strategy.md](./agentic-strategy.md) and [docs/agentic-capture/](./agentic-capture/). This doc is the plan only.

---

## 1. What we mean by "agentic design system"

> Any agent creating UI — in this monorepo, in a consumer repo, or in a prototype — reaches for MMDS by default because the system is **legible** to it, and can check its own work against tokens, components and patterns **without a design-system engineer in the loop**.

Two capabilities, one knowledge base:

| Direction       | What it is                                            | Who it serves                  |
| --------------- | ----------------------------------------------------- | ------------------------------ |
| **Context out** | The agent can find out what exists and when to use it | Anyone creating UI with AI     |
| **Checks back** | The artifact can be verified against the system       | Anyone reviewing or merging UI |

These are the same knowledge expressed two ways. A documented pattern is context when handed to a creating agent and a check when applied to a finished diff. Building them as two disconnected efforts is the main way this goes wrong.

Auto-approve is a **consequence** of getting this right, not the goal. If the checks are good enough that a human adds nothing on a token rename, auto-approve becomes an obvious next step. If they aren't, no amount of policy makes it safe.

---

## 2. The opportunity

### 2.1 The knowledge lives in three places, and agents can only read one

| Where                 | Examples                                                    | Agent-readable       |
| --------------------- | ----------------------------------------------------------- | -------------------- |
| **In code**           | Props, exports, types, token values, variants, stories      | Yes — always current |
| **In docs**           | Component READMEs, contributing guides, migration guides    | Partly — drifts      |
| **In people's heads** | Which pattern for which situation, why this not that, taste | No                   |

The third bucket is the actual gap. It is also the bucket that decides whether UI feels like MetaMask.

### 2.2 What we have built is the inverse of what matters

| Layer          | Checks that exist today                                                                  | Cost of getting it wrong                         |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **Tokens**     | `color-no-hex`, `prefer-theme-color-classnames`, `no-deprecated-classnames`              | A papercut. Usually invisible to users.          |
| **Components** | `prevent-deprecated-imports` fitness function (extension). Catches deprecated _imports_. | Wrong primitive, override sprawl, drift.         |
| **Patterns**   | **Nothing.** No pattern documentation exists in this monorepo.                           | The flow feels wrong. This is what users notice. |

We built the cheap end first, which was the right call — it was cheap. But the value is concentrated in the layer where we have nothing, and that is where the opportunity is.

### 2.3 Why the pattern layer cannot be solved with more linting

**A deterministic check can only see what you wrote, not what you should have written instead.**

ESLint catches a wrong import. Nothing catches a _missing_ one — a hand-rolled pressable `div` has no import to flag, so hand-rolled UI is invisible to every check we currently run. It also falls outside our adoption numbers, because those count imports. Same root cause, two symptoms.

This gives a clean rule for the divide Andy asked about:

- **"Is this thing forbidden?"** → deterministic. Cheap, fast, zero tokens.
- **"Was this the right thing to reach for?"** → needs an agent. It requires knowing the alternative.

Every pattern question is the second kind.

### 2.4 What it unlocks

- Engineers and designers building UI with AI get MMDS-aligned output by default, rather than after a correction round.
- Review shifts from a person-shaped dependency to a check that runs on every PR, including the many that no DS engineer sees.
- Prototypes start on-system, so taste work builds on good defaults instead of undoing bad ones.
- We earn the confidence to auto-approve low-risk changes, because we can show what was checked.

---

## 3. Building blocks

### 3.1 Context — how an agent comes to know the system

**The principle: separate reference from guidance, and never duplicate reference.**

| Kind          | Examples                                           | How it should reach an agent           |
| ------------- | -------------------------------------------------- | -------------------------------------- |
| **Reference** | Props, exports, variants, token values, story list | Queried live. Never copied into prose. |
| **Guidance**  | When to use what, patterns, principles, taste      | Authored prose, versioned, small.      |

Every staleness problem we have comes from reference having been copied into prose. The MetaMask Skills `ui-development` rot is not a discipline failure — it is duplicated reference behaving exactly as duplicated reference does. Fixing it structurally means the skills shrink to guidance plus a pointer, and reference comes from Storybook MCP and package exports.

Current state of the surfaces:

| Surface                      | Serves      | State                                                                     |
| ---------------------------- | ----------- | ------------------------------------------------------------------------- |
| Storybook MCP                | Reference   | Integrated but **localhost only**. Unreachable from consumer repos or CI. |
| Package exports / types      | Reference   | Always current. No guidance attached.                                     |
| Cursor rules + `CLAUDE.md`   | Guidance    | Healthy, but scoped to this monorepo.                                     |
| MetaMask Skills `domains/ui` | Both, mixed | Goes stale every release. The reference half should not exist.            |
| Component READMEs            | Reference   | Per-component. Good. Not a pattern layer.                                 |
| Figma MCP + Code Connect     | Reference   | Only as good as Figma coverage. Many PRs have no Figma at all.            |
| Pattern docs                 | Guidance    | **Do not exist.** Some pattern work for mobile, none for extension.       |

### 3.2 Token checks

Most mature layer. Extending it is mechanical.

| Check                                                             | Type          | State   |
| ----------------------------------------------------------------- | ------------- | ------- |
| No hex / arbitrary color values                                   | Deterministic | Shipped |
| Theme colour classnames preferred                                 | Deterministic | Shipped |
| No deprecated classnames                                          | Deterministic | Shipped |
| Arbitrary Tailwind values (`w-[13px]`, `mt-[7px]`)                | Deterministic | **Gap** |
| Hardcoded spacing, radii, typography, shadow, z-index             | Deterministic | **Gap** |
| Inline styles where a token class exists                          | Deterministic | **Gap** |
| Primitive token used where a semantic one exists                  | Deterministic | **Gap** |
| Theme coverage — does it hold up in every theme                   | Deterministic | **Gap** |
| **Semantic correctness** — `text-error-default` on non-error text | Agent         | **Gap** |

Note the last row: it is token-compliant and still wrong. Even the most deterministic layer has a judgment component.

### 3.3 Component checks

| Check                                                              | Type          | State                 |
| ------------------------------------------------------------------ | ------------- | --------------------- |
| No new deprecated imports                                          | Deterministic | Shipped (extension)   |
| **Hand-rolled UI where an MMDS component exists**                  | Agent         | **Gap — the big one** |
| Override sprawl — MMDS component plus local layout/style overrides | Partly det.   | **Gap**               |
| Composition depth — raw primitives where a composite exists        | Agent         | **Gap**               |
| Prop misuse — valid props, invalid combination                     | Agent + MCP   | **Gap**               |
| React / React Native parity                                        | Agent         | **Gap**               |

Override sprawl is worth calling out as a signal and not just a violation: heavy overrides on a component usually mean either the wrong component was chosen or the component has a real gap. Either way we want to know.

### 3.4 Pattern checks

Nothing exists. This is the layer to build.

A pattern, concretely, is one of three things:

| Kind            | Question it answers                          | Example                                        |
| --------------- | -------------------------------------------- | ---------------------------------------------- |
| **Choice**      | Which component for this situation?          | Modal vs bottom sheet vs inline                |
| **Composition** | What is this surface made of, in what order? | What a confirmation screen contains            |
| **Sequence**    | What are the states and transitions?         | Loading → success → error, and the empty state |

Two consequences for how we build it:

1. **Patterns must be structured, not only prose.** For one artifact to serve as both context and check, a pattern needs a machine-readable shape — the choices, the conditions, the required parts — with prose alongside it for humans. Prose alone can be handed to a creating agent but cannot be checked against reliably.
2. **Authoring is the long lead time item.** Everything else here is engineering we control. Patterns require deciding what the patterns _are_, which is Brian and Amanda's knowledge and cannot be rushed. Mobile has a head start; extension is empty.

### 3.5 Where each check lives

Ordered by cost. Push every check as far up this list as it will go.

| Layer               | Cost    | Good for                                                         |
| ------------------- | ------- | ---------------------------------------------------------------- |
| Cursor hook / rule  | ~zero   | Authoring-time feedback, before a commit exists                  |
| ESLint / CI         | ~zero   | Anything expressible as "this is forbidden"                      |
| Bugbot on the diff  | low     | Judgment on what changed, comment-only, no new infrastructure    |
| Orchestration graph | higher  | Multi-step checks, tool use, screenshots, scored and traced runs |
| Human               | highest | Taste, novel patterns, anything the above flagged as uncertain   |

**We are not moving working deterministic checks into agents.** Joao's guidance to prefer orchestration nodes over fitness functions applies to _new_ rules. Existing ESLint runs in seconds for zero tokens; replacing it with an LLM would be slower, costlier and less reliable.

---

## 4. Enablement — engineers and designers using AI

| Surface                      | Today                                                             | What it needs                                            |
| ---------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------- |
| Engineer, this monorepo      | Cursor rules + `CLAUDE.md` + local Storybook MCP. Healthiest.     | Pattern docs                                             |
| Engineer, extension / mobile | MetaMask Skills markdown, stale, no MCP access                    | Reachable MCP + thin guidance skill                      |
| Designer, Cursor             | Same as consumer engineer. Workshops run; designers do raise PRs. | Same, plus non-blocking feedback rather than a hard gate |
| Designer, Figma              | MMDS Components library exists                                    | **Blocked — see below**                                  |
| Designer / PM, Replit        | Nothing. Must be told to look at the design system each time      | An attachable DS instruction plus queryable APIs         |

**The Figma constraint is a wall, not a gap.** First Draft generates from Figma's own libraries. Make requires a kit that does not exist for MMDS. Check designs is review-only and does not generate. A designer using Figma AI today cannot produce MMDS-aligned output regardless of what we document. The realistic options are to build a Make kit, or to accept that designer enablement means Cursor and Replit rather than in-canvas Figma. Worth an explicit decision rather than a slow discovery.

---

## 5. Sequencing — and why in this order

The ordering principle: **a check is only as smart as the reference it can query.** A pattern check that cannot see a component's real API is guessing, and guessing is what makes agent review untrustworthy. So context comes before intelligence, and the cheapest checks come before the most capable ones.

### Phase 1 — Make the system legible

| Do                                                                        | Enables                                                       |
| ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Storybook MCP reachable beyond localhost                                  | Every downstream check and every consumer-repo agent          |
| Shrink MetaMask Skills to guidance + pointer; delete duplicated reference | Ends the staleness cycle structurally                         |
| **Start pattern authoring** (extension first — it is empty)               | Phase 3. Starts now because content has the longest lead time |
| Extend token ESLint past colour                                           | Immediate quality floor, zero tokens                          |
| DS section in extension + mobile `BUGBOT.md`                              | First judgment-based DS feedback, no new infrastructure       |

### Phase 2 — Component intelligence

| Do                                                                  | Enables                                                |
| ------------------------------------------------------------------- | ------------------------------------------------------ |
| Hand-rolled-UI detection on the diff, via MCP-backed component list | Closes the biggest blind spot; makes custom UI visible |
| Override sprawl signal                                              | Surfaces component gaps as data instead of anecdote    |
| Composition depth signal                                            | A quality measure that needs no new instrumentation    |

### Phase 3 — Pattern checking

| Do                                                    | Enables                                             |
| ----------------------------------------------------- | --------------------------------------------------- |
| Publish the structured pattern layer                  | Pattern checks **and** pattern coverage as a metric |
| Pattern check as context for create and check on diff | The DS-knowledge gap actually closes                |

### Phase 4 — Orchestration

| Do                                                        | Enables                                                 |
| --------------------------------------------------------- | ------------------------------------------------------- |
| MMDS graph: inventory → docs → pattern → visual → verdict | Multi-step checks, traced and scored runs               |
| Visual evidence attached to UI PRs                        | Reviewers see the change; makes large UI PRs reviewable |
| Scoring against historical DS reviews                     | The evidence base for auto-approve                      |

### Later — auto-approve

Only once the graph can be measured against what a DS engineer would have said. Start with one-liners and token renames in this repo, internal authors only. Auto-approve is not auto-merge, and designers have explicitly asked for a human.

---

## 6. Low-hanging fruit

Cheap is a separate axis from important. These are worth doing because they are nearly free, not because they are the highest value.

- DS section in extension + mobile `BUGBOT.md` — two PRs, first DS judgment on every consumer PR.
- Extend the token ESLint plugin to arbitrary Tailwind values and hardcoded spacing / radii.
- Delete duplicated reference from MetaMask Skills; replace with a pointer.
- Confirm whether Storybook MCP is referenced anywhere in consumer repos today. Currently unknown.
- Port the existing lint rules into a Cursor hook so feedback lands while typing.
- Composition depth and `TODO: @MetaMask/design-system-engineers` counts — two quality signals that need no new tooling.

---

## 7. Dependencies

**One real dependency: agent orchestration.** We need the framework working, and reachable, for phase 4 — multi-node graphs, Langfuse tracing, scored runs. That needs support from the orchestration team (Norbert full-time; Mariona while Joao is out).

Two honest notes on it:

- **It does not block phases 1–3.** Every check before phase 4 runs in ESLint, Bugbot or a GitHub Action. Orchestration is the substrate we need for scale, telemetry and scored runs — which makes it the prerequisite for _auto-approve confidence_, not for starting.
- **Sync early anyway.** Registering a graph, triggering it, and giving a node access to Storybook MCP are all unknowns to us today. Better to resolve them while phases 1–3 are in flight than to discover them at phase 4.

Everything else is DS-team work. Pattern authoring is Brian and Amanda's knowledge, and they are on the team — it is a time cost, not an external dependency.

---

## 8. Measuring value, not swaps

Counting MMDS imports tells us the state of the code, and it does that well. It cannot tell us whether the UI got better, and treating it as if it can pushes us toward one-to-one swaps that move the number while carrying the old patterns straight into the new components.

What we should be measuring instead:

| Signal                   | Question it answers                                               |
| ------------------------ | ----------------------------------------------------------------- |
| **Pattern coverage**     | Are surfaces built from documented patterns, or assembled ad hoc? |
| **Composition depth**    | Are composites used, or are primitives being reassembled by hand? |
| **Override rate**        | Are we choosing the right components, and do they have gaps?      |
| **Custom / hand-rolled** | How much UI is off-system entirely? Currently invisible.          |
| **Three-way parity**     | Figma, React and RN agreement, plus Code Connect presence.        |

Pattern coverage is the headline, and it has a prerequisite: patterns have to exist and be enumerable before coverage of them means anything. It also needs a denominator we have not chosen yet — see §10.

---

## 9. Out of scope

- Security, offensive-content and supply-chain review — Ola and the AI working group.
- Org-wide auto-approve policy. We define the DS confidence bar that would feed it.
- Taste and LoRA scoring as a merge gate. Valuable on the prototyping track; not a gate.

---

## 10. Open questions

1. **Pattern denominator.** Coverage of what — screens, flows, surfaces? "60% of confirmation screens use documented patterns" means something; "60% of components" does not.
2. **Pattern format.** What is the machine-readable shape of a pattern, such that one artifact serves as both context and check?
3. **Figma.** Build a Make kit, or accept that designer enablement means Cursor and Replit?
4. **Hosting.** Where does a reachable Storybook MCP live — the existing Storybook deploy, Chromatic, or a service?
5. **Motion.** MMDS has no motion or animation guidance at all. In scope for the pattern layer, or explicitly parked?
6. **Consumer-repo checks.** Do DS checks run in extension and mobile CI, or as a service we own that reports back?
