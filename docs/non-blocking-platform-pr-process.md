# Non-blocking design system input on platform PRs

This document describes how MetaMask Design System (MMDS) can **avoid blocking feature engineers** while still **recording needs that may sit outside the current design system** (new component states, one-off visual rules, or gaps between Figma and shipped UI).

It is based on team practice for extension and similar consumer repos (see [Reference example](#reference-example) below).

## Why this process exists

**The tension:** Product tickets often need a UI change _now_ (correct semantics, match surrounding UI, fix confusing states). The design system may not yet expose the right **variant, token, or component API**—or the team has not had time to design and ship it. If every such PR waits on MMDS, **feature work stalls** and the DS team becomes an accidental **merge gate**. If reviewers say “ship whatever” with no trace, **one-off styling accumulates** and the system drifts with no backlog.

**What this process does:** It separates **“can this merge?”** from **“what should the system become?”**

- **Feature teams move fast** because the approved path is a **small, local change** (e.g. Tailwind classes on the instance) that satisfies the ticket without requiring a new DS release first.
- **Design system is not a blocker** because unresolved _system_ questions are explicitly **out of the merge critical path**; discussion happens **asynchronously** (Slack) on MMDS’s timeline.
- **Custom overrides still enter an intake funnel** so nothing is invisible:
  - **PR review** — records the short-term approach and intent.
  - **TODO at the call site** — durable, **grep- and automation-friendly** marker tied to DS.
  - **Slack thread** — context, screenshots, and open questions for designers and DS engineers.

CONF-1099 / extension PR #41196 is the template: first **warning** treatment on a field, ticket asks to **match the alert icon**, DS suggests **override + TODO + team channel** so Jyoti’s team can ship while MMDS decides whether `TextField` gets a formal warning state or different tokens.

## Goals

1. **Ship product work on time** — Feature teams can merge fixes and features without waiting for a full MMDS design or API decision.
2. **Stay aware of drift** — Custom styling or behavior is visible, grep-friendly, and discussed async.
3. **Resolve deliberately** — MMDS can later promote patterns into tokens, components, or documentation and update call sites.

## When this applies

Use this flow when a pull request in a consumer repo (e.g. extension, mobile):

- Touches UI that **maps to a design-system component** (or should eventually), but
- Introduces a **variant, state, or token use** that is **new or unclear** in MMDS (e.g. first “warning” treatment on a text field), and
- Waiting for a full MMDS answer would **block** the product ticket.

## Process overview

| Step | Owner                  | Action                                                                                                                              |
| ---- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Design system reviewer | **Do not block merge** for unresolved system-level design.                                                                          |
| 2    | Design system reviewer | **Comment on the PR** with a minimal, local implementation path and a **tracked follow-up**.                                        |
| 3    | Design system reviewer | **Open a Slack thread** in the design system channel summarizing the need and asking for preferred approach (async).                |
| 4    | Feature engineer       | Apply the agreed **short-term** approach and land the PR.                                                                           |
| 5    | Design system team     | **Discuss in Slack**, decide canonical behavior, then **file MMDS work** and/or **update the TODO** at the call site when resolved. |

## PR review guidance (short-term implementation)

Prefer approaches that:

- **Avoid new global or ad-hoc CSS** where the repo already uses utility styling (e.g. a **Tailwind class override** on the instance), so the change stays localized and easy to find.
- **Avoid expanding deprecated components** when the product is already on or moving to MMDS-aligned UI — steer changes toward the stack the team is standardizing on.
- **Preserve intent** from the product ticket (e.g. match warning icon color, accessibility, copy) even if the long-term token or component API is still TBD.

Document in the PR that this is a **temporary** alignment until MMDS defines the canonical pattern.

## TODO and discoverability

Add a **searchable TODO** at the call site (or next to the override) so the team can:

- Scan repositories for follow-ups.
- Optionally automate detection later.

Use a **consistent prefix** the whole team agrees on. On extension PRs we have used an **@mention of the design system engineering GitHub team** inside the TODO so it is easy to find and assign follow-up, for example:

```text
// TODO: @MetaMask/design-system-engineers: [short description — e.g. align on first-class TextField warning vs another DS pattern]
```

Real example ([extension #41196 review](https://github.com/MetaMask/metamask-extension/pull/41196#discussion_r2989138554)): suggest **`border-warning-default`** (Tailwind) instead of a new **`mm-text-field--warning`** SCSS modifier, plus the TODO above.

Adjust the tag if your org uses a different team handle. The important part is that **MMDS can grep** for it and tie it back to the Slack discussion or Jira epic.

If the PR tags the design system team as reviewer or **CODEOWNERS** co-owner, that notification is complementary to the TODO — it does not replace a durable marker in code.

## Slack handoff

Post in the **design system team channel** (e.g. `@metamask-design-system-team`) with:

- **What** changed and **where** (repo, area of app, component name).
- **Product context** (ticket link, screenshots before/after).
- **What you suggested on the PR** (e.g. Tailwind override + TODO).
- **Open question** for the team (e.g. “Do we want a formal `warning` state on `TextField`, or a different token?”).
- **CC** relevant people (e.g. engineer and designer on the feature).

This gives space for **Brian-style** quick suggestions without holding the PR.

## After resolution

When MMDS agrees on the canonical approach:

1. Implement tokens, component props, or docs in **this monorepo** as needed.
2. Open or update **adoption tasks** in consumer repos.
3. **Remove or rewrite** the TODO at the original call site to match the new API.

Until then, the feature ship is valid; the TODO records the debt explicitly.

## Principles (summary)

- **Design system is not a merge blocker** for reasonable, scoped UI fixes.
- **Local overrides + TODO + Slack** keep signal without freezing product work.
- **System evolution** happens in MMDS on a timeline that fits design and engineering capacity.

## Reference example

Illustrative case: first **warning** styling on a **TextField**-like control in the send flow, driven by product alignment with an alert icon.

| Resource                          | Link                                                                                                                             |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Jira                              | [CONF-1099](https://consensyssoftware.atlassian.net/browse/CONF-1099) — update recipient field color to match warning alert icon |
| Extension PR                      | [MetaMask/metamask-extension#41196](https://github.com/MetaMask/metamask-extension/pull/41196)                                   |
| Inline review (suggestion + TODO) | [Discussion on `recipient-input.tsx`](https://github.com/MetaMask/metamask-extension/pull/41196#discussion_r2989138554)          |

**Slack message pattern (excerpt):**

> I came across [author]’s PR to add a warning state to our TextField for a use case in the send flow — as far as I know this is the first instance. The ticket is focused on matching the warning icon.  
> I suggested using a Tailwind classname override for now, with a TODO to revisit — do we have a preferred approach within the design system?

Replace names and paths with the actual PR author and component names when copying the pattern.

---

_Source: internal Loom walkthrough and team Slack thread describing this process._
