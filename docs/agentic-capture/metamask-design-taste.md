---
name: metamask-design-taste
description: Apply MetaMask's evolving product-design taste to mobile and desktop product work. Use this skill whenever designing, prototyping, critiquing, polishing, or reviewing a user flow, screen, component, interaction, motion pattern, design-system implementation, or product requirement—especially for MetaMask, financial products, crypto, rewards, referral programs, dashboards, and iOS experiences. Trigger on requests such as "clean this up," "this feels cluttered," "what would Apple do," "use the MetaMask design system," "do another pass," or "this doesn't feel right."
source: Jason Culbertson, shared 18 Aug 2026
status: capture only — do not ship to MetaMask/skills this week
---

# MetaMask Design Taste

Design products that feel clear, native, trustworthy, and composed. Favor a strong product model and quiet visual hierarchy over decorative UI. The interface should feel obvious before it feels impressive—and then earn moments of delight through craft.

Treat this as a living team standard. Preserve its core principles while allowing designers to add well-supported patterns, examples, and exceptions as MetaMask evolves.

This skill governs both design critique and implementation. Do not stop at aesthetic advice when the task includes building or editing a prototype.

## Core standard

Aim for an interface that:

- makes the primary purpose unmistakable;
- reveals complexity gradually;
- uses familiar platform behavior;
- feels native to the product’s existing design system;
- protects user privacy and communicates financial states accurately;
- works in the actual app, including scrolling, keyboard, navigation, sheets, and state transitions;
- uses delight selectively, without making behavior surprising.

The governing idea is: **compose before creating.** First establish the product model, hierarchy, and sequence. Add containers, color, icons, copy, and motion only when they clarify that composition.

## Begin with evidence

Before proposing a design:

- Inspect the current product surface, not merely the isolated screenshot.
- Identify the existing entry point, navigation model, adjacent screens, shared components, typography, tokens, and interaction patterns.
- Treat supplied screenshots and references as concrete evidence. Preserve the useful pattern, not the source brand’s appearance.
- When asked to follow Apple, Airbnb, or another product, separate:
  - the reusable product pattern;
  - the platform convention;
  - the source product’s brand styling.
- Reuse the team’s real component and token system before inventing a local substitute.
- Never redesign an isolated screen in a way that breaks the surrounding product architecture. If a Rewards home already exists, preserve it and design the referral entry point within it.

## Establish the product model

Make the flow legible as a sequence:

1. What is this?
2. Why should I care?
3. What is the primary action?
4. What happens next?
5. Where can I inspect status, history, or details?

Each screen should have one dominant job. Move secondary management, customization, history, and explanation into progressive disclosure when they compete with that job.

Avoid placing multiple modes on one overview merely because they are related. A concise overview with a clear link to a dedicated Earnings or Performance page is often stronger than a segmented controller that makes two dense screens feel like one.

## Build hierarchy with restraint

Use this order of operations:

1. Remove redundant content.
2. Group related information through proximity.
3. Establish typography and spacing.
4. Add dividers where they clarify large sections.
5. Add containers only when a boundary has meaning.
6. Add color or imagery only after the structure works without it.

Prefer open layouts and line breaks over a stack of rounded cards. Containers are appropriate for interactive controls, distinct summaries, selectable objects, and content that needs a meaningful boundary. They are not the default background for every group.

Large content-section dividers may run full width when they represent page structure. Rows within a section can use inset separators when that matches the product system. Do not let arbitrary padding weaken the hierarchy.

Remove duplicated labels. A large earnings value on an Earnings page usually does not need both “Total earnings” above it and another sentence below repeating the rate already explained elsewhere.

## Typography and alignment

- Follow the type scale of the closest real product screen.
- Prefer left alignment for product pages and financial summaries unless centered composition has a clear ceremonial or onboarding purpose.
- Use size, weight, and spacing before adding color.
- Keep legal and qualification copy visually secondary but readable.
- Break headlines deliberately for meaning, not to fill a shape.
- Use plain, precise labels. If a secondary line does not add meaning, remove it.

## Use color as a system

Color must encode meaning or brand emphasis. Do not assign colors to adjacent metrics simply to create variety.

Default hierarchy:

- primary text and core data: the design system’s primary foreground token;
- supporting labels: secondary or muted foreground tokens;
- tracks, dividers, and surfaces: neutral semantic tokens;
- accent: one product or brand accent used selectively;
- success, warning, danger, and pending: semantic status colors only when the state benefits from them.

For a conversion funnel, use a consistent treatment across all bars unless color communicates a real category or status distinction. Monochrome can be more polished than a rainbow. In dark mode, verify actual contrast rather than assuming pure white is always correct.

Icons inherit semantic foreground colors from the design system. Avoid decorative colored circles behind every icon. Check the icon family, stroke weight, size, optical alignment, and placement—not merely the glyph name.

## Preserve interaction semantics

Controls must honestly signal what they do:

- Use a chevron when a row navigates deeper in a hierarchy.
- Do not use a disclosure chevron merely to open a modal sheet if that contradicts the product’s convention.
- Use a vertical ellipsis for secondary management actions such as QR code and Customize link.
- Put Copy directly beside the value it copies, with the product’s standard icon/button treatment.
- Use the native iOS share sheet for general sharing on iOS instead of recreating a branded destination picker.
- Make the whole intended row or control tappable and verify the hit target.
- Ensure scroll views, keyboards, overlays, and touch interception work together.

The interaction should behave like the visual promise it makes.

## Apply progressive disclosure

Keep overview pages concise. Show the current state and the next useful action; reveal explanation or transaction metadata on demand.

Examples:

- “Available” and “Pending” can appear as clean financial rows.
- Explain unfamiliar terms with the team’s established dotted underline and informational detent pattern.
- Keep payout history concise; open transaction details after tapping a payout.
- Put QR code and link customization behind a secondary menu.
- Show transaction ID, destination, asset, network, and explorer action in a details surface rather than the overview.

Do not add disclosure affordances to labels that are already self-explanatory.

## Design sheets as a coherent system

Use the product’s sheet component, tokens, detents, safe areas, drag handle, header pattern, and action placement. Do not approximate a sheet with a black overlay and ad hoc spacing.

For nested sheet flows:

- keep the sheet container spatially stable when possible;
- transition the content within the sheet rather than abruptly dismissing and presenting a new sheet;
- provide a back arrow for a child view and a close action for the entire flow;
- animate directionally so forward and backward movement are understandable;
- preserve interruption safety, keyboard behavior, reduced motion, and scroll/drag coordination;
- let one system own sheet height to prevent bounce or squish.

Motion clarifies continuity; it does not decorate state changes.

## Handle finance and crypto with precision

Trust is a visual and product requirement.

- Reconcile totals. Available + Pending + Claimed must match any total shown, or the labels must clearly explain the difference.
- Name units and assets precisely: USD, mUSD, points, tokens, or fees are not interchangeable.
- Distinguish available, pending, claimed, paid, and lifetime earnings.
- Do not expose wallet addresses or transaction details on an overview unless they are necessary.
- Prefer aggregated performance metrics when individual wallet behavior would compromise privacy.
- Do not assume a person’s name or identity is known in a crypto referral system.
- Treat compensation disclosures and eligibility copy as required product content, not visual debris.

If the numbers or terms do not make sense, fix the product model before polishing the layout.

## Design campaign lifecycle and eligibility states

Treat campaign availability, enrollment, and qualification as different states. They may happen in sequence, but they do not mean the same thing:

- **Campaign eligibility** — confirm supported-region and legal requirements before enrollment. If a person cannot participate, explain that in a concise sheet with the relevant rules; do not let them complete a misleading opt-in.
- **Enrollment** — obtain the required consent in a focused legal sheet. On the campaign page, name the outcome (for example, “Join the sweepstakes”); reserve legally exact language such as “Opt in” for the consent action itself.
- **Daily qualification** — show whether the person is on track for the current entry period, the next concrete action, and the value needed to recover when possible.

Never label a person as broadly “Ineligible” when their state is recoverable, such as a balance below the qualifying amount. Prefer precise, action-oriented language: “Qualified,” “On track for today’s entry,” “Add $X to start earning entries,” or “Add $X to resume earning tomorrow.” Keep the threshold, entry count, and prize information tied to live backend state; do not hard-code a qualifying amount or infer qualification from balance alone when the campaign also requires a qualifying deposit or other criteria.

If campaigns are only surfaced while live, do not invent an “upcoming,” reminder, or notification flow. Let the card lead directly to the live offer, then to enrollment and the practical next action.

## Separate the offer from the enrolled experience

Before enrollment, the page should answer why the offer matters and make one clear action easy to take. A compact promotional header or illustration can support that story when it has a deliberate text-safe area and the actual component ratio.

After enrollment, move to an operational screen. Lead with the person’s current balance, qualification/entry state, and the next useful action such as “Add funds.” Remove decorative hero artwork when it competes with those live financial facts. Keep a container only when it binds a live financial state and its action; do not turn every explanatory section into a card.

Avoid generic onboarding carousels when the campaign page already explains the benefit, requirements, and next action. Extra steps are only justified when they teach something the direct flow cannot.

## Make campaign schedules easy to scan

For a multi-week campaign, use a stable chronological row model. Every week should preserve the same scan order: week and date range first, then one state or outcome and the corresponding prize information. Make the current week visually distinct with a single semantic status and, where relevant, the live entry count. Make completed and future weeks calm and unambiguous.

Do not show an exact draw time when the product only guarantees that a draw follows the weekly cycle. Use backend dates and prize-pool values in production, surface all actual campaign weeks, and keep a short footer such as “Entries reset after each weekly draw” when it helps people understand the reset. Do not hide prototype data behind a polished schedule.

## Give support destinations a job

Every support row needs a distinct destination that helps the person act or understand: campaign mechanics, Money Account, prize details, draw verification, or official rules. Remove rows that duplicate the current page or point to a generic, unrelated feature.

Call a rules destination “Rules and eligibility” rather than vague language such as “Mechanics.” The official-rules link in a consent sheet must open the rules experience. Keep detailed legal material behind a dedicated page or a system-native disclosure pattern; do not make people parse a wall of legal copy in the action flow.

## Use delight selectively

A strong hero image or crafted 3D object can create excitement when it supports the primary story. Keep it stylistically consistent with the product and subordinate to the action.

Do not use visual excitement to compensate for weak hierarchy. Avoid gradients, excessive cards, badges, colored icon bubbles, and ornamental motion unless each one has a role.

Surprise people with care—never with behavior.

## Write concise product copy

- Lead with the user outcome: “Share your code, earn rewards.”
- Avoid repeating the headline in the subhead.
- Prefer concrete terms over marketing filler.
- Keep qualification language close to the action or offer it qualifies.
- Center legal text only when it belongs to a centered action composition; otherwise follow the page’s alignment system.
- Preserve important nuance even while shortening.

## Critique workflow

When reviewing a screen, reason in this order:

1. **Product model** — Is the purpose, state, and next action coherent?
2. **Hierarchy** — Does the eye know where to begin and what comes next?
3. **Redundancy** — Which labels, containers, icons, or explanations can disappear?
4. **Semantics** — Do navigation, sheets, share, copy, menus, and disclosure controls behave as expected?
5. **System fit** — Does it use the actual product components, tokens, type scale, spacing, and icon language?
6. **Trust** — Are privacy, financial math, units, eligibility, and status precise?
7. **Craft** — Are alignment, optical balance, motion, safe areas, keyboard behavior, and edge cases resolved?
8. **Delight** — Is there one appropriate moment of personality after everything else works?

Do not answer “this does not feel right” with vague taste language. Identify the structural reason and propose a concrete change.

## Implementation workflow

When authorized to build or edit:

- Inspect the live implementation and closest existing product patterns.
- Reuse components and semantic tokens.
- Make the smallest coherent change that fixes the product issue.
- Remove obsolete UI, handlers, styles, and strings when a feature is removed.
- Run focused tests and static checks.
- Launch the actual app or prototype.
- Exercise the complete interaction, including scrolling, keyboard, menus, sheets, back behavior, share behavior, and error states.
- Inspect rendered output rather than declaring success from source code alone.

A design is not complete if the prototype cannot be tapped, scrolled, typed into, navigated, or recovered from.

## Response format

For a critique, provide:

- **Verdict** — one or two sentences naming the main issue.
- **Recommended composition** — the intended hierarchy and flow.
- **Specific changes** — a short prioritized list tied to product reasoning.
- **What to preserve** — the parts already serving the experience.

For implementation, lead with what changed and what was verified. Report any part that could not be exercised in the real app.

Keep the response direct. Avoid a long catalog of generic design principles when a few precise decisions will solve the screen.

## Final quality check

Before finishing, ask:

- Is the page’s primary purpose obvious in three seconds?
- Can anything be removed without losing meaning?
- Is every container earning its boundary?
- Is every color semantic?
- Does every control accurately signal its behavior?
- Does this look native to the existing product rather than like an imported reference?
- Do financial values and statuses reconcile?
- Are campaign eligibility, enrollment, and current qualification expressed as separate states?
- Does the campaign CTA name the user outcome, while consent language appears where legal consent is actually collected?
- Does the enrolled experience prioritize current balance, entry status, and the next action over promotional artwork?
- Does each schedule row use the same chronological scan order and live campaign data?
- Does every support link lead to a distinct, useful destination?
- Is privacy protected by default?
- Did I verify the actual interaction, not just the static composition?
- Is delight supporting clarity rather than competing with it?
