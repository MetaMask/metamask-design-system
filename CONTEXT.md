# MetaMask Design System Context

This glossary defines the shared language used for MMDS and its agentic strategy.

## Language

**Agentic Design System**:
MMDS knowledge, delivery paths, checks, and audits that help agents create MMDS-aligned UI by default.
_Avoid_: AI design system, agent design system

**MMDS-aligned UI**:
UI that uses the applicable MMDS tokens, components, APIs, and patterns.
_Avoid_: compliant UI, correct UI

**Intentional deviation**:
A product-team decision not to use an applicable MMDS component, pattern, or convention after the available MMDS option has been surfaced. Review records the decision, while Audit measures its effect on product consistency.
_Avoid_: violation, approved exception

**Detected deviation**:
A difference from applicable MMDS guidance found during Review or Audit. It remains unresolved until the product team adopts MMDS or records an intentional deviation.
_Avoid_: violation, failure

**System gap**:
A recurring product need that MMDS does not yet support well. Repeated intentional deviations can provide evidence of a system gap.
_Avoid_: noncompliance, product error

**Intentional platform exception**:
A documented MMDS decision to differ between Figma, React, or React Native because a platform has a distinct need.
_Avoid_: mismatch, missing parity, product exception

**Platform alignment**:
The state where applicable components share a name and component API across Figma, React, and React Native, with Code Connect mappings where supported. A documented intentional platform exception can explain a valid difference.
_Avoid_: exact parity, full parity

**Shared component inventory**:
The agreed list of MMDS components, including which platforms require each component and any intentional platform exceptions.
_Avoid_: React Native component list, parity list

**Shared core API**:
The component name, semantic variants, sizes, states, content options, shared behavior, and accessibility intent that remain consistent across applicable platforms. Platform-specific properties can extend this contract.
_Avoid_: identical API, universal API

**MMDS assurance rate**:
The percentage of eligible UI pull requests that receive automatic MMDS checks and reach a recorded outcome. Alignment and intentional deviations are reported separately.
_Avoid_: auto-approval rate, compliance rate

**Create**:
The lifecycle moment when a person or agent turns an idea, requirement, or design into UI.
_Avoid_: generation, authoring phase

**Review**:
The lifecycle moment when a UI change is checked before merge using deterministic rules, agent judgment, and human approval.
_Avoid_: validation phase, quality gate

**Review finding**:
An MMDS issue or recommendation posted in a pull request as a GitHub comment or suggestion. The author can fix it, record an intentional deviation, or mark it as a false positive.
_Avoid_: violation, rejection

**Audit**:
The lifecycle moment when MMDS alignment, product usage, and agent infrastructure are measured outside a single change.
_Avoid_: scan, inspection phase

**Audit finding**:
A possible alignment issue, deviation, system gap, or migration need shown for human triage. It does not create or route work until a person chooses an action.
_Avoid_: automatic ticket, assigned defect
