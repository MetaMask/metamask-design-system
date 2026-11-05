# Domain docs

## Before exploring

Read `CONTEXT.md` at the repository root when it exists. It defines the shared terms used across MMDS.

Read relevant organization decisions from:

- MMDS decisions: https://github.com/MetaMask/decisions/tree/main/decisions/design-system
- Agentic decisions: https://github.com/MetaMask/decisions/tree/main/decisions/agentic

Use `design-system` as the normal ADR source for this repository.

Only inspect `agentic` when the task involves the Agentic Design System strategy or shared agent infrastructure. Check each decision for relevance. Do not assume every agentic decision applies to MMDS.

If `CONTEXT.md` does not exist, continue without warning. Domain-modeling skills can create it when useful terms are agreed.

## Layout

This repository uses a single shared context:

- `CONTEXT.md` contains the MMDS glossary and domain model.
- Organization ADRs remain in `MetaMask/decisions`.
- Do not create a competing local ADR folder.

## Use the glossary

Use terms as defined in `CONTEXT.md`. Avoid switching between different names for the same concept.

## Flag decision conflicts

If proposed work conflicts with an organization ADR, state the conflict clearly and link the decision.
