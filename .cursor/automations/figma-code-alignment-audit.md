# figma-code-alignment-audit

Audit one MMDS component per run for alignment between code, Code Connect, and the main MMDS Figma file.

## Defaults

- Treat code as the source of truth.
- Do not mutate live Figma.
- Do not change runtime component APIs.
- Do not open a PR by default.
- Use the Figma REST API, not Figma MCP, when REST is sufficient.

## Available tools

- `Memories`
- `Send to Slack`
- `Read Public Slack Channels`
- `Open Pull Request`

## Available secret

- `FIGMA_ACCESS_TOKEN`
  - Use only in the `X-Figma-Token` request header.
  - Never echo it in output.

## Read first

- `@CLAUDE.md`
- `@.cursor/rules/figma-integration.md`
- `@.cursor/rules/component-architecture.md`
- `@.cursor/rules/testing.md`
- `@docs/figma-code-connect.md`

## Candidate selection

1. Discover candidates from React and React Native `.figma.tsx` files.
2. Group by component name.
3. Prefer components never audited before.
4. Otherwise choose the least recently audited component.
5. Skip recently aligned components unless repo files changed since the last audit.
6. Suppress repeated low-severity findings for 30 days unless repo files or the mapped Figma node changed.

Use the `.figma.tsx` URL as the mapping source for the Figma node. Do not crawl the whole file and guess.

## Figma lookup

For the chosen `.figma.tsx` file:

1. Parse the Figma file key from the URL.
2. Parse the `node-id` query parameter.
3. Convert node id from URL form to API form.
   - URL: `120-1621`
   - API: `120:1621`
4. Fetch the node with:
   - `GET https://api.figma.com/v1/files/:file_key/nodes?ids=:node_id&depth=1`
   - header: `X-Figma-Token: <FIGMA_ACCESS_TOKEN>`

## Check

Compare the chosen component across:

- live Figma node metadata from REST
- React component API
- React Native component API
- React `.figma.tsx`
- React Native `.figma.tsx`

Check for:

- stale or WIP Figma URLs
- missing or wrong Figma node
- wrong Figma node type
- component name drift
- component description drift
- Figma property model drift
- variant model drift
- dishonest Code Connect mappings
- invalid example usage
- React / React Native divergence that Figma hides
- missing Code Connect coverage

## Severity

- `High`
  - wrong or missing Figma node
  - wrong node type
  - Code Connect maps props that do not exist in code or live Figma
  - variant model shape differs materially
  - component exists in code but has no Code Connect mapping
- `Medium`
  - Figma defaults differ from code defaults
  - Figma property options differ without making Code Connect dishonest
  - React / React Native divergence is real and Figma implies false parity
- `Low`
  - name drift only
  - description drift only
  - other polish-only issues

## Owner

- `Engineering`
  - stale or dishonest `.figma.tsx`
  - code defaults or code docs need clarification
- `Design`
  - Figma defaults, naming, descriptions, or property setup should change
- `Both`
  - mismatch spans code truth and Figma modeling

## Decision rules

- If aligned:
  - update memory only
- If Figma access fails:
  - do not report this as a component mismatch
  - post a concise Slack report that verification could not be completed
  - update memory with `figma-access-failure`
- If severity is `high` or `medium`:
  - post a concise Slack report
  - update memory
- If severity is `low`:
  - update memory
  - suppress Slack unless the issue repeats after the suppression window

## Slack format

```text
Figma/code alignment audit: <ComponentName>
Severity: <High|Medium|Low>
Owner: <Engineering|Design|Both>
Figma node: <url>
Code paths: <short list>
Finding:
- <bullet 1>
- <bullet 2>
Recommendation: <one sentence>
```

Do not attach large Figma previews unless they add unique diagnostic value.

## Output

Final output must be exactly one of:

- `Aligned: <ComponentName> - <reason>`
- `Slack report: <ComponentName> - <summary>`
- `PR opened: <ComponentName> - <summary>`
