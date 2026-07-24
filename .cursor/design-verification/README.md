# Design Verification

Figma design enforcement skills for AI agents — preflight, token binding, library-first construction, and reference interpretation.

Adapted from [senlindesign/claude2figma](https://github.com/senlindesign/claude2figma). See [ATTRIBUTION.md](./ATTRIBUTION.md).

## Skills

| Skill                                               | Invoke                     | Purpose                                                 |
| --------------------------------------------------- | -------------------------- | ------------------------------------------------------- |
| [figma-preflight](./figma-preflight.md)             | `let's start`, `preflight` | Session setup: MCP check, token map, component registry |
| [component-rules](./component-rules.md)             | Building UI in Figma       | Library-first instances, auto layout, naming            |
| [figma-style-binding](./figma-style-binding.md)     | Colors, type, spacing      | Enforce variable/style binding + QA                     |
| [reference-interpreter](./reference-interpreter.md) | Screenshot / reference     | Design Brief before building                            |

## Configuration

Edit [figma-design.config.md](./figma-design.config.md) with target Figma file URLs before a design session.

## Workflow

```
preflight → (optional) reference-interpreter → component-rules + figma-style-binding
```

For syncing **existing code components** into the library, use the [figma-component-creation](../skills/figma-component-creation/SKILL.md) skill (`/figma-component-creation`).
