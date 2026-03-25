# Design system process (extension and mobile)

How MetaMask Design System (MMDS) supports **any team** shipping UI in the **MetaMask extension and mobile** app repos **without blocking merge**, while **tracking** work that falls outside today’s system.

Contributing squads include **perps**, **rewards**, **predict**, **card**, **confirmations**, **metamask-earn**, **mobile-core-ux**, **metamask-assets**, **web3auth**, **ramp**, **swaps-engineers**, **accounts-engineers**, **core-platform**, **notifications**, **wallet-integrations**, **mobile-platform**, and **transactions**. Some are **platform** teams; some are **feature** teams. **Feature teams usually move fastest** on product UI, but this flow applies whenever a PR would otherwise wait on MMDS.

**Framing:** In [Design systems are platform problems, not feature problems](https://www.shaunbent.co.uk/blog/design-systems-are-platform-problems-not-feature-problems/), Shaun Bent describes a common friction: **feature teams move fast** (ship experiments and tickets on short horizons) while **platform teams move more slowly** (consistency, scale, long-term health). **MMDS is a platform team** in that sense—the design system cannot always match feature velocity without turning every gap into a merge blocker. This process keeps **“can this merge?”** separate from **“what should the system become?”** so product speed and platform care can coexist.

## Why this process exists

**Tension:** Teams often need UI changes immediately; MMDS may not yet ship the right variant, token, or API. Blocking every PR on a full DS decision stalls product work and turns the DS team into an accidental gate. Shipping ad hoc UI with no trace lets drift accumulate invisibly.

**What we do instead:** DS reviewers give **prompt feedback** and steer contributors toward **the closest supported pattern** (tokens, components, existing APIs). When there is a **legitimate gap**, MMDS proposes a **concrete short-term path**—typically **local overrides** (e.g. Tailwind classnames on the instance) rather than new global CSS or one-off system surface area. Unresolved system questions stay **off the merge critical path**; follow-up happens **async** (Slack + tracked markers in code).

**Outcomes:**

- Contributing teams are **supported, not blocked**: they get alignment options now and a clear escape hatch when the system does not yet cover the need.
- MMDS **sees demand** in code via searchable TODOs9`TODO: @MetaMask/design-system-engineers:`) and can prioritize first-class support, follow-up PRs, or automation to find and replace overrides later.

## Goals

1. **Ship on time** — PRs can land without waiting for a full MMDS design or release.
2. **Stay aligned** — Prefer DS primitives; when overriding, keep changes local, intentional, and visible.
3. **Resolve in the system** — MMDS can later promote patterns into tokens, components, or docs and clean up call sites.

## When this applies

Use this flow when a **team’s PR** in the **extension or mobile** codebase:

- Touches UI that **maps to** (or should eventually map to) the design system, but
- Needs a **variant, state, or styling** that is **not yet supported or unclear** in MMDS, and
- Waiting for a definitive DS answer would **block** the ticket.

## Process overview

| Step | Owner                  | Action                                                                                                                                 |
| ---- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Design system reviewer | **Do not block merge** on unresolved system-level design.                                                                              |
| 2    | Design system reviewer | **Respond on the PR** with the closest DS-aligned approach and, if needed, a **minimal override path** plus expectation of a **TODO**. |
| 3    | Design system reviewer | **Open a Slack thread** in the design system channel: context, screenshots, what was suggested, **open questions**.                    |
| 4    | PR author              | Implement the agreed approach, add the **TODO** next to any custom override, and land the PR.                                          |
| 5    | Design system team     | **Discuss in Slack**, decide canonical behavior, then **ship MMDS changes** and/or **update or remove** the TODO when resolved.        |

## TODO and tracking

Any **custom style or behavior** that is not covered by the design system today should carry a **searchable TODO** at the call site (or beside the override). That makes overrides **grep-friendly** and supports **future follow-up PRs** or **automation** to scan and fix.

Use the **design system engineering GitHub team** handle so ownership and discovery stay consistent:

```text
// TODO: @MetaMask/design-system-engineers: [short description of the gap and what first-class support might look like]
```

PR review requests or **CODEOWNERS** are complementary; they do not replace a **durable marker in source**.

## Slack handoff

Start a thread in **`#metamask-design-system`**.

MMDS rarely has the full **product and research context** that contributing teams carry—**what has performed well in user testing**, edge cases, and **patterns teams have already validated with users**. Slack is where we **align on the real need**: how MMDS can support it, and whether a local pattern exists for **good reasons** and should become **first-class in the design system** so the whole ecosystem benefits, not only one surface.

**@mention** whoever should be in the conversation—**design**, the contributing squad, MMDS engineers, or specific people—so the thread has enough context to discuss requirements and next steps.

## After resolution

When MMDS defines the canonical approach:

1. Implement tokens, APIs, or docs in **this monorepo** as needed.
2. Track **adoption** in the **extension and mobile** repos.
3. **Remove or rewrite** the TODO at the original call site.

Until then, the ship is valid; the TODO records explicit debt.

## Principles

- **DS gives fast, practical guidance** toward the supported path; **overrides** are a documented fallback, not silence.
- **MMDS is not a merge blocker** for reasonable, scoped UI when the process above is followed.
- **TODO + Slack** connect product speed to platform awareness so the system can evolve on its own timeline.
