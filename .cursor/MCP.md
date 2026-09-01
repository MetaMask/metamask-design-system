# MCP configuration in this repo

Repo `.cursor/mcp.json` configures **local** Storybook MCP for maintainers running `yarn storybook`.

| Server          | Config                      | When to use           |
| --------------- | --------------------------- | --------------------- |
| `storybook-mcp` | `http://localhost:6006/mcp` | Local IDE development |

**Org-hosted MCP** (Context Forge) is not defined here:

- **Metamask-storybook-mcp** — enable in Cursor MCP settings; uses manifest at https://metamask.github.io/metamask-design-system/manifests/components.json
- **Figma** / **Figma Console** — enable in Cursor MCP settings (OAuth)

Cloud Agents: see `docs/agent-mcp-setup.md` for MCP vs manifest fallback.
