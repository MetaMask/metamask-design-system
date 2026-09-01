# Agent MCP setup

How AI agents reach MMDS component knowledge, Storybook tools, and Figma during Create, Review, and Audit workflows.

## Overview

| Need | Primary | Fallback |
| ---- | ------- | -------- |
| Component APIs, stories, docs | **Metamask-storybook-mcp** (org MCP) | Published [components manifest](https://metamask.github.io/metamask-design-system/manifests/components.json) |
| Local maintainer development | `http://localhost:6006/mcp` (`yarn storybook`) | Manifest URL |
| Figma read / Code Connect | **Figma** MCP (Cursor org settings) | Figma REST API with token (automations) |
| Figma write-back | **Figma Console MCP** | Manual design updates |

## Metamask-storybook-mcp and Context Forge

MetaMask hosts MCP servers through **Context Forge** for org-wide agent access (Cursor desktop, Cloud Agents when MCP is enabled on the run).

- **Namespace in Cursor:** `Metamask-storybook-mcp`
- **Manifest source:** https://metamask.github.io/metamask-design-system/manifests/components.json

The manifest is generated when React Storybook builds (`features.componentsManifest: true` in `apps/storybook-react/.storybook/main.ts`) and published to GitHub Pages with the Storybook site.

### Cloud Agents

Cloud Agents **do not** read repo `.cursor/mcp.json` for org-hosted MCP the same way local Cursor does. MCP availability depends on:

1. **Cursor dashboard** — team/org MCP servers enabled for Cloud Agents
2. **Context Forge** — Metamask-storybook-mcp registered and reachable from the agent environment
3. **Run configuration** — MCP auth succeeding (failed auth shows tools as unavailable)

When MCP is unavailable on a Cloud Agent run:

1. **Fetch the manifest directly** — agents can read `https://metamask.github.io/metamask-design-system/manifests/components.json` (component metadata, imports, story snippets)
2. **Read package source** in this monorepo (`packages/design-system-react`, `packages/design-system-react-native`)
3. **Read** `@.cursor/rules/` and `MIGRATION.md` for migration-specific guidance

Do not block audits on MCP if the manifest or repo source is reachable.

## Local development (this repo)

### Storybook MCP

```bash
yarn storybook
```

MCP endpoint: `http://localhost:6006/mcp`

Configured in:

- `.cursor/mcp.json`
- `.vscode/mcp.json`

Tools include documentation discovery, story previews, and optional story tests (see `apps/storybook-react/README.md`).

### Components manifest (offline / CI)

Same data as Storybook MCP docs toolset, without a running server:

```text
https://metamask.github.io/metamask-design-system/manifests/components.json
```

Use for Cloud Agents, scripts, and `design-system-metrics` alignment — **do not** duplicate component lists in skills or `AGENTS.md`.

## Figma MCP

Figma is configured at the **org / user MCP level** in Cursor (OAuth), not in this repo’s `.cursor/mcp.json`.

- **Read:** `Figma` namespace — `get_design_context`, `search_design_system`, `get_code_connect_map`
- **Write:** `figma-console-mcp` — update variables, descriptions, component structure after human approval

Canonical MMDS Components file:

- https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=0-1
- `fileKey`: `1D6tnzXqWgnUC3spaAOELN`

Code Connect workflow: @.cursor/rules/figma-integration.md

Scheduled automations that must not depend on OAuth may use **Figma REST** with `FIGMA_ACCESS_TOKEN` (see `.cursor/automations/figma-code-alignment-audit.md` when present).

## Consumer adoption audits

When auditing extension or mobile product UI:

1. Follow @.cursor/rules/consumer-audit.md
2. Use metrics-aligned scan globs (same as [design-system-metrics config](https://github.com/MetaMask/design-system-metrics/blob/main/config.json))
3. Use Metamask-storybook-mcp or the published manifest for MMDS truth

## References

- @docs/ai-agents.md — three-layer documentation strategy
- @apps/storybook-react/README.md — local Storybook MCP tools
- [Storybook MCP overview](https://storybook.js.org/docs/ai/mcp/overview)
