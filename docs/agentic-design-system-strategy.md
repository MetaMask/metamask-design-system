# MetaMask agentic design system strategy

**Status:** Draft

**Owner:** MetaMask Design System team

**Last updated:** 2026-08-27

## 1. Goal

Any agent building MetaMask UI should use the MetaMask Design System (MMDS) by default. We should be able to check its work automatically against our tokens, components, and patterns. A design system designer or engineer should only need to review work that requires human judgment.

This applies anywhere UI gets built: Cursor and other coding agents, Figma, Replit prototypes, and CI.

### Success measures

Success means agents can build and check MetaMask UI using current MMDS knowledge. Humans should focus on exceptions and decisions that require judgment.

Foundation work will establish a baseline for each quality measure. We will set targets after the first Mobile and Extension pilots.

| Success criterion                      | How we measure it                                                                                    | Initial target                                                                 |
| :------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **First drafts use MMDS correctly**    | Pass rate across representative UI tasks and the share of drafts needing design system rework        | Establish a pilot baseline, then improve it each quarter                       |
| **Automated review covers UI changes** | Percentage of UI pull requests that complete deterministic and agentic checks                        | 100% in participating Mobile and Extension repositories                        |
| **Review feedback is useful**          | Accepted findings, dismissed findings, false-positive rate, and human escalations                    | Establish a baseline before setting a quality target                           |
| **Off-system UI is visible**           | Percentage of audited UI classified as MMDS, intentional custom UI, unintended custom UI, or unknown | Classify 100% of audited pilot surfaces and reduce unknown results toward zero |
| **Guidance remains current**           | Time between an MMDS release and its guidance becoming available to agents                           | Available in the same release, with no manual component lists                  |
| **MMDS converges across platforms**    | Shared component parity and Code Connect coverage across Figma, React, and React Native              | Improve from the baseline tracked through DSYS-741                             |
| **Product drift falls over time**      | New design system findings in recurring audits                                                       | A downward trend after Review checks are enabled                               |

Two things are worth stating plainly before the detail.

**MMDS itself needs work.** Today, Figma, React, and React Native are not sufficiently aligned. Our recent focus on Mobile has moved React Native forward while React has fallen behind. Work in Figma to improve product consistency has not always been reflected in code.

We need to audit MMDS to find and fix differences in its tokens, components, and patterns across design and code. We also need to audit Mobile and Extension to understand how the system is used, identify recurring product needs, and find successful components and patterns that should become part of MMDS. This work is tracked in the [MMDS alignment epic (DSYS-741)](https://consensyssoftware.atlassian.net/browse/DSYS-741).

Consistency should be the default when it improves the user experience and makes the product easier to maintain. Custom UI should remain an intentional option when it better serves a specific product need.

**Agent tooling makes current MMDS guidance available wherever UI is created and reviewed.** Designers and engineers can introduce inconsistencies when the correct component or pattern is difficult to find. Agents repeat the same problem when they lack clear documentation and product context.

The tooling should read from sources maintained as part of MMDS rather than separate copies of its guidance. Each MMDS improvement can then reach people and agents automatically. Review and Audit results can show us where the system still has gaps.

### Now, next, later

| Horizon   | Focus                                                                                 | What it gives us                                                                   |
| :-------- | :------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------- |
| **Now**   | Align the core system and create one current source of guidance that agents can query | Cursor first drafts use current MMDS guidance, and custom UI becomes measurable    |
| **Next**  | Extend Create and Review across Figma, Replit, Mobile, and Extension                  | Each creation path has a clear handoff, and every UI pull request gets checked     |
| **Later** | Automate recurring system and product audits                                          | We track drift over time and build the evidence needed for higher-trust automation |

---

## 2. What is an agentic design system?

An agentic design system is infrastructure that lets AI agents read, reason over, and build with our components, tokens, and patterns. A traditional design system is written for humans. An agentic design system also encodes intent, relationships, and constraints as machine-readable context. Agents can then create with the system and check their own work against it.

For MetaMask:

> Any agent creating UI in Mobile, Extension, Figma, or a Replit prototype reaches for MMDS by default. The system is legible to the agent, and the work can be verified against our tokens, components, and patterns.

One knowledge layer supports three deliveries. The knowledge is what MMDS already holds: tokens, components, and patterns such as “bottom sheet versus page.” What changes is how it reaches the work.

- At **Create**, agents read it as context before building through skills, Storybook MCP, Figma MCP, and Code Connect.
- At **Review**, it runs as checks against the pull request. ESLint and fitness functions handle deterministic rules. Agentic review handles decisions that need judgment.
- At **Audit**, the same knowledge is queried across existing screens to find drift and gaps.

The knowledge is written once. Tools are delivery mechanisms. We should not maintain a separate copy inside each tool. That is how MetaMask Skills became stale and how an agent builds UI using outdated standards.

## 3. Why now

Code is cheap. An engineer, designer, or agent can now build UI in hours. Speed without encoded quality creates drift at scale.

MMDS knowledge is partly intentional: components, tokens, and lint rules designed on purpose. It is also partly emergent: patterns found in UI that has proven itself in the product. The remaining knowledge is judgment that has never been written down. This includes which component belongs where, when a pattern applies, and what makes UI feel like MetaMask.

Today, much of that judgment lives inside the design system team and gets applied one pull request at a time. This strategy answers one question: how do we ship high-quality, consistent, and thoughtful UI without a design system designer or engineer reviewing every change?

We make the system legible to agents so design-system-aligned UI becomes the default.

### Gaps across tooling surfaces

| #   | Gap                                                                                                                                          | Who is affected                                                          |
| :-- | :------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| 1   | **Cursor and other coding agents.** MetaMask Skills become stale after MMDS releases and do not cover all tokens, components, or patterns.   | Engineers and designers creating pull requests in Mobile and Extension   |
| 2   | **Figma.** Figma AI lacks design taste and complete token, component, and pattern context.                                                   | Designers in Figma                                                       |
| 3   | **Replit.** Templates are unreliable, become stale, and lack complete MMDS guidance. There is no defined path into Mobile or Extension.      | Designers and product managers in Replit; engineers receiving prototypes |
| 4   | **Pull request review.** Current quality gates cover token lint and a few deprecated imports. They do not judge component or pattern choice. | Engineers and designers creating pull requests in Mobile and Extension   |
| 5   | **Risk analysis.** The pull request risk analyzer has no design system awareness. Unaligned UI can still receive a low-risk score.           | Engineers reviewing UI pull requests; the design system team             |
| 6   | **Audit and measurement.** Existing metrics count simple deprecated swaps. Custom UI is invisible.                                           | The design system team                                                   |

## 4. Lifecycle

The agentic design system appears at three moments:

- **Create:** an engineer or designer creates UI in Figma, Replit, Cursor, or another coding agent.
- **Review:** automated checks review the pull request before human approval.
- **Audit:** recurring scans measure the product and find existing drift.

> **Diagram placeholder — lifecycle overview**
>
> Replace this block with the diagram showing Create → Review → Mobile/Extension → Audit → Jira → Create.
>
> Source: [MMDS Agentic Strategy FigJam](https://www.figma.com/board/3ijfD8P0KHe1M5ubwhk27k/MMDS-Agentic-Strategy)

### Create

> **Diagram placeholder — Create paths**
>
> Replace this block with the diagram showing the Figma, Replit, and direct-to-Cursor paths.

UI work reaches production code through three common paths. Each path should use the same MMDS sources, but each has a different handoff and different gaps today.

#### 1. Figma design → Cursor implementation → pull request

An idea or requirement is designed in Figma before it is implemented in code.

- The designer uses current MMDS components, variables, and documented patterns.
- The design identifies intentional custom UI or product-specific behavior.
- Code Connect links Figma components to their React or React Native implementations.
- The engineer or coding agent uses the installed MMDS package and Storybook documentation for the target platform.
- Differences between the Figma design and available code components are reported rather than silently worked around.

Today, this path is limited by misalignment between Figma, React, and React Native. Code Connect coverage is incomplete, and Figma AI has limited design system context.

#### 2. Replit prototype → Cursor implementation → pull request

An idea is explored as a working prototype before it is implemented in Mobile or Extension.

- Replit uses MMDS components and guidance where available.
- The prototype communicates the intended experience, interactions, and content.
- The engineer or coding agent ports that intent into the target application using its installed MMDS components.
- Generated prototype code is treated as a reference and is not copied directly into production.

Today, Replit templates are not reliably current. Replit does not have complete MMDS guidance, and the handoff into Mobile or Extension is not defined.

#### 3. Idea or ticket → Cursor implementation → pull request

A designer or engineer implements a requirement directly in Cursor or another coding agent. This includes feature work, UAT issues, and small UI fixes.

- The agent checks MMDS documentation before choosing a component or pattern.
- It uses the components and APIs available in the target application.
- It identifies when no suitable component or documented pattern exists.
- The author reviews the implementation and any intentional exceptions before opening the pull request.

Today, MetaMask Skills can contain outdated component information. Agents do not consistently query current design system documentation before writing code.

#### What is common across all three paths

All three paths should provide:

- Current MMDS context at the point where decisions are made.
- A clear handoff when work moves between tools.
- A record of intentional custom UI and identified MMDS gaps.
- The same automated design system checks when work reaches a pull request.

### Review

> **Diagram placeholder — Review checks**
>
> Replace this block with the diagram showing deterministic and agentic checks on a pull request before Mobile or Extension.

A designer or engineer opens a pull request. The same knowledge now runs as checks. Deterministic gates run first for lint and tokens. Agent judgment handles what a rule cannot express, such as choosing the right component or pattern. The findings appear as non-blocking comments.

A human still approves and merges every pull request. These checks can move us toward higher-trust automation, but design system checks are only one part of approval. Auto-approval would also require organization-level gates such as risk labels and security review.

### Audit

> **Diagram placeholder — Audit loop**
>
> Replace this block with the diagram showing Mobile and Extension feeding design system metrics, which create Jira tickets.

Recurring audits scan Mobile and Extension for incorrect or missing design system usage. This makes custom UI visible, including UI that import counts and diff-based checks cannot find.

Audit findings feed the technical-debt backlog as Jira tickets. Those tickets close the loop back to Create.

## 5. How knowledge reaches the agent

This section describes the technical strategy.

### The gateway model

MetaMask Skills currently contains a hand-written list of components and their uses. The list was written in June 2025 and has barely changed. It becomes wrong within weeks of a release. This is the clearest example of knowledge being copied into a tool.

The fix is to stop shipping component knowledge inside the skill. The skill becomes a thin and stable router. It tells the agent to query the design system before building UI. Storybook MCP answers the query using a JSON manifest published from documentation maintained in the MMDS monorepo.

> **Technical diagram placeholder — gateway model**
>
> MetaMask Skills → Storybook MCP on Context Forge → release manifest → Storybook documentation in the MMDS monorepo

This model has three benefits:

- **Documentation stays in the monorepo.** It lives beside the code and changes in the same pull request.
- **Releases propagate automatically.** A release does not require a skill edit, template refresh, or manual synchronization.
- **Token cost falls.** The agent reads structured data instead of crawling a documentation site.

The same channel carries more than components. Tokens, patterns, and taste can also travel through it. Each new category becomes available without changing every tool configuration.

### Declarative and inferred checks

There are two kinds of checks. The distinction matters because their costs differ greatly.

- **Declarative checks:** ESLint rules, fitness functions, and scripts. These checks are deterministic, run in CI, and cost no model tokens. Anything expressible as a rule belongs here.
- **Inferred checks:** component choice, pattern choice, and whether the result feels like MetaMask. These checks require agent judgment, cost tokens, and depend on high-quality context.

We should put as much as possible into declarative checks and reserve inference for decisions that require judgment.

> **Technical diagram placeholder — declarative and inferred checks**
>
> Show deterministic checks running first, followed by agent judgment using current MMDS context.

### Where each platform stands

- **Extension is ready.** Storybook MCP is hosted on Context Forge and the JSON manifest exists. The remaining work is configuration, default enablement, and a reachability check.
- **React Native and Mobile are the gap.** We need Storybook MCP on the design system side and hosting through Context Forge. This may use the existing broker or a separate Mobile MCP. Storybook React Native support needs confirmation with Alex W.
- **Figma and Replit remain unresolved.** These are covered in the decisions and investigations below.

### If the gateway does not hold

Use these fallbacks in order:

1. **Automate the copy.** Keep skills as the delivery mechanism, but generate them during the release process. This is worse than the gateway but better than relying on memory.
2. **Host an MMDS MCP server.** This gives us full control over the data and interface, but it creates infrastructure we must own. Treat this as a later option if Storybook MCP cannot meet our needs.

## 6. Surfaces and tooling

An agent needs two kinds of design system knowledge.

**Tokens and components** describe what exists: component props and variants, token names, and token values. This information changes with every release. Agents must look it up from installed packages, Figma MCP, Tailwind configuration, or Storybook MCP. It should not be copied into prose.

**Patterns, principles, and taste** explain when to use a component, which pattern applies, and what feels like MetaMask. This knowledge changes slowly and must be authored by people. It can live in short, versioned documentation that travels with the agent.

| Tool                                                                       | Create | Review | Audit | State today                                                                                                                                        |
| :------------------------------------------------------------------------- | :----: | :----: | :---: | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Storybook MCP                                                              |   ✅   |   ✅   |  ✅   | Hosted on Context Forge through `storybook-broker-mcp`; needs default enablement and a CI reachability check                                       |
| Package exports and types                                                  |   ✅   |   ✅   |       | Covers component and token APIs, but not why or when to use them                                                                                   |
| MetaMask Skills `domains/ui`                                               |   ✅   |        |       | Stale after releases; should become a thin router plus stable guidance                                                                             |
| Pattern documentation                                                      |   ✅   |   ✅   |  ✅   | Six Mobile pattern drafts exist in [Patterns FigJam](https://www.figma.com/board/CDy0suxFcEjMu68vaGjiKQ/Patterns), but they are not agent-readable |
| Taste and design skills                                                    |   ✅   |        |       | Captured in a skill and shared with designers, but not available to everyone                                                                       |
| Figma MCP and Code Connect                                                 |   ✅   |   ✅   |       | Design system coverage is partial; adoption is assumed to be low                                                                                   |
| Figma First Draft and Make                                                 |   ✅   |        |       | Cannot use MMDS today                                                                                                                              |
| Replit design system templates                                             |   ✅   |        |       | Exist but do not work as expected; no instructions are attached                                                                                    |
| Cursor rules and `CLAUDE.md`                                               |   ✅   |        |       | Healthy and scoped to this monorepo; relevant consumer guidance should move to MetaMask Skills                                                     |
| ESLint design token plugin and fitness functions                           |        |   ✅   |       | Shipped, but color-only and outdated; should move into the MMDS monorepo and expand to spacing, radii, and arbitrary values                        |
| Cursor Bugbot                                                              |        |   ✅   |       | Runs on Extension and Mobile pull requests; winding down in favor of local review rules                                                            |
| [Agent Orchestration](https://github.com/MetaMask/agent-orchestration)     |        |   ✅   |  ✅   | Framework is live; the first plugin is Extension visual validation; MMDS would own a design system plugin                                          |
| [design-system-metrics](https://github.com/MetaMask/design-system-metrics) |        |        |  ✅   | Counts imports weekly; custom UI is invisible                                                                                                      |

> **Technical diagram placeholder — tool composition**
>
> Show how Storybook MCP, Figma MCP, skills, local checks, and Agent Orchestration serve Create, Review, and Audit.

## 7. Phases

Build the shared knowledge foundation first. Then expand Create, Review, and Audit in priority order.

Each table states what we will do, what it enables, what waiting costs, and its dependencies.

### Foundation

Foundation serves Create, Review, and Audit.

| Do                                                                                  | Enables                                                                        | Cost of waiting                               | Dependencies                             |
| :---------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- | :-------------------------------------------- | :--------------------------------------- |
| Make Storybook MCP reachable by default                                             | Current examples, component usage, and patterns beyond installed package types | Agents guess from component names and types   | Context Forge access and CI reachability |
| Refine MetaMask Skills into a thin router                                           | Ends the component-list staleness cycle                                        | Manual synchronization after every release    | Storybook MCP or a generated fallback    |
| Port Patterns FigJam into structured Storybook documentation                        | Agents can apply and check documented patterns                                 | Pattern inconsistencies continue to land      | Protected design and content time        |
| Improve Storybook documentation for color, spacing, typography, and component usage | MCP returns why and when, not only props                                       | Agents receive thin answers and keep guessing | A shared documentation format            |
| Put taste guidance in Storybook with an always-on router skill                      | MetaMask design judgment reaches every supported agent                         | Teams spend time correcting off-brand drafts  | Taste guidance and content ownership     |
| Generate a static component index and guidance fallback during releases             | Environments without MCP still receive current context                         | Fallback copies rot like current skills       | Release automation and checklist support |
| Build a custom UI detector against the MCP-backed component list                    | Review can check diffs and Audit can scan the codebase                         | Custom UI remains invisible                   | A current component index                |

#### What Foundation unlocks

Foundation gives supported agents one current source of MMDS knowledge. It also creates the shared detector and documentation needed by Review and Audit.

### Create

Engineer creation in Cursor is covered by Foundation through default Storybook MCP access and the MetaMask Skills router.

| Do                                                                          | Enables                                                      | Cost of waiting                                     | Dependencies                                  |
| :-------------------------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------- | :-------------------------------------------- |
| Attach taste guidance and Storybook MCP to Replit                           | Designer prototypes start closer to MMDS                     | Teams keep correcting off-system drafts             | Foundation and Replit MCP support             |
| Document the Replit-to-client handoff as “port, do not paste”               | Prototypes act as specifications rather than production code | Engineers re-create intent or paste unsuitable code | Agreement with Mobile and Extension teams     |
| Run a Figma deep dive covering Make kits, library access, and Check Designs | An informed decision about Figma AI                          | The Figma gap remains unresolved                    | Figma capabilities and designer participation |

#### What Create unlocks

Create makes current MMDS knowledge available before UI decisions are made. It also creates safer handoffs from design and prototyping tools into production code.

### Review

| Do                                                                                           | Enables                                                             | Cost of waiting                                                    | Dependencies                                                           |
| :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :----------------------------------------------------------------- | :--------------------------------------------------------------------- |
| Move and extend the design token ESLint plugin to cover spacing, radii, and arbitrary values | A current token quality floor without model cost                    | Token problems continue to land                                    | MMDS monorepo ownership                                                |
| Add design system review rules as local skills in Extension and Mobile                       | Design system judgment at authoring time without new infrastructure | Feedback remains dependent on people                               | Consumer repository adoption                                           |
| Run the custom UI detector and override-sprawl signal on each diff                           | New custom UI is flagged and component gaps become data             | Custom UI continues to accumulate                                  | Foundation detector                                                    |
| Check documented patterns on each diff                                                       | Review covers product patterns, not only syntax                     | Teams continue to debate patterns manually                         | Agent-readable pattern documentation                                   |
| Build an orchestration graph: inventory → docs → pattern → visual → verdict                  | Traced and scored review runs with visual evidence                  | Higher trust remains a guess; large migrations stay hard to review | Agent Orchestration, visual collection, and historical review examples |

#### What Review unlocks

Review gives every UI pull request the same quality floor. It separates deterministic failures from judgment, records evidence, and builds the data needed for higher-trust automation.

### Audit

| Do                                                                          | Enables                                                               | Cost of waiting                                              | Dependencies                                                    |
| :-------------------------------------------------------------------------- | :-------------------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------------------- |
| Add custom UI as a first-class category and split discovery from regression | Composition is not mistaken for regression                            | Weekly charts remain easy to misread                         | Changes to design-system-metrics                                |
| Run the custom UI detector across Mobile and Extension                      | Existing technical debt becomes tickets and closes the loop to Create | Only new diffs are checked; existing drift remains invisible | Foundation detector and consumer access                         |
| Measure composition depth and design-system-engineer TODO counts            | Two quality signals using existing code                               | Quality remains anecdotal                                    | Agreed definitions and queries                                  |
| Measure documented pattern coverage                                         | A product-level quality signal                                        | Adoption continues to be measured through imports            | Agent-readable pattern documentation and a denominator decision |

#### Audit signals

Audit measures the state and quality of UI already in the product. These are operating signals for the Audit system. They are not the top-level success measures for the whole strategy.

| Signal            | Question it answers                                                                     |
| :---------------- | :-------------------------------------------------------------------------------------- |
| Pattern coverage  | Are surfaces built from documented patterns or assembled without them?                  |
| Composition depth | Are composite components used, or are primitives rebuilt by hand?                       |
| Override rate     | Are teams choosing the right components, and where do components have gaps?             |
| Custom UI         | How much UI is outside MMDS, and is it intentional?                                     |
| Three-way parity  | How closely do Figma, React, and React Native agree, and where is Code Connect present? |

Near-term reporting should make custom UI a first-class category, split discovery from regression, and distinguish migration passes from polish passes. Each weekly report should include one before-and-after example.

#### What Audit unlocks

Audit makes existing drift visible and converts findings into work. It gives the strategy evidence about product quality, missing MMDS patterns, and platform parity.

## 8. Decisions and investigations

### Decisions we need

1. **Figma:** Should we run the Figma deep dive first, or accept that early designer enablement will happen through Cursor and Replit rather than in-canvas Figma AI? Today this is a capability limit, not a documentation gap.
2. **Pattern denominator:** Should pattern coverage measure screens, flows, or surfaces? “60% of confirmation screens use documented patterns” is meaningful. “60% of components” is not.
3. **Authoring time:** Pattern documentation, component guidance, and taste are content work owned by Brian, Amanda, and Jason. This is the longest lead-time work and cannot be automated. Do we protect time for it?

### Investigations

These investigations inform delivery but do not block the strategy:

- Which React Native Storybook release ships Metro MCP support, and whether Mobile can adopt it.
- Whether a hosted React Native Web Storybook serves full manifests.
- Whether Replit can query MCP directly or needs the generated fallback.
- Whether agents fetch taste and component documentation before building.
- Whether CI and orchestration runners can reach Storybook MCP through Context Forge.
- How the existing risk analyzer and labels should account for design system risk.
- How the Agent Orchestration framework can run design system Review and Audit workflows.

## 9. Appendix

- [MMDS Agentic Strategy FigJam](https://www.figma.com/board/3ijfD8P0KHe1M5ubwhk27k/MMDS-Agentic-Strategy)
- [Patterns FigJam](https://www.figma.com/board/CDy0suxFcEjMu68vaGjiKQ/Patterns)
- [Into Design Systems — Agentic Design Systems](https://www.intodesignsystems.com/agentic-design-systems)
- [Storybook MCP overview](https://storybook.js.org/docs/ai/mcp/overview)
- [MMDS alignment epic (DSYS-741)](https://consensyssoftware.atlassian.net/browse/DSYS-741)
