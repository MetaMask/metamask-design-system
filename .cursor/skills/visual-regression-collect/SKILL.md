---
name: visual-regression-collect
description: >-
  Captures Storybook before/after screenshots for MMDS UI work, expands to
  every visual dependent (not only files in the diff), and attaches PNGs as
  GitHub media with gh --attach. Use when creating or updating a UI PR, when
  the user asks for screenshots, before/after, visual assets, visual
  representation, or Storybook captures, or when existing PR screenshots need
  refreshing. Never post Cursor artifact URLs.
---

# Visual regression collect (MMDS)

Capture Storybook **before/after** PNGs for visual UI work in this repo and attach them with GitHub CLI. Chromatic stays the React pixel merge gate; this skill is **GitHub-visible evidence** for React and React Native web.

## When to run

Run when **any** of these are true:

1. Creating or updating a PR whose diff includes visual UI (`packages/design-system-react`, `packages/design-system-react-native`, `packages/design-tokens`, Storybook apps).
2. The user asks for screenshots, before/after, visual assets, visual representation, or Storybook captures (even before a PR exists).
3. UI changed after screenshots were posted, or the user asks to refresh visual assets.

Skip changelog-only, types-only, tests-only, docs-only, CI, and non-visual refactors.

## Critical rules

- **Never** put `cursor.com/agents/.../artifacts` (or any other Cursor-hosted image URL) in a PR, issue, or comment.
- **Never** push a screenshots git branch or `raw.githubusercontent.com` image links.
- **Always** attach local PNGs with `gh --attach` (`gh` >= 2.99.0). This is the [GitHub CLI media upload](https://github.blog/changelog/2026-09-01-github-cli-media-in-issues-pull-requests-and-comments/) shipped in CLI 2.99.0. GitHub rewrites local Markdown paths to `user-attachments` URLs.
- **Never** screenshot only the files in the diff. Capture **every surface the change visually affects** (composition consumers, both platforms). See [Expand to dependents](#expand-to-dependents).
- **Never** commit sandbox/showcase stories or PNGs to the feature branch.
- **Always** crop tightly around the changed UI. Do not post a full-viewport or full-canvas screenshot of a small component. See [Tight crop](#tight-crop).
- React Native captures use **web** Storybook (`storybook:web` / static `/react-native`), not iOS/Android simulators.

## Expand to dependents

Primitive and token changes leak into other components. Example: [PR #1494](https://github.com/MetaMask/metamask-design-system/pull/1494) changed `ButtonBase` / `ButtonIcon` radius; reviewers needed shots of `Button` variants, `ButtonHero`, `ButtonFilter`, `TextButton` (opt-out), `SelectButton`, and `SegmentedControl` — not just `ButtonBase.tsx`.

1. Start from changed **implementation** files (`.tsx` components, token CSS/TS). Ignore tests, README, constants-only, and Figma connect unless they are the only signal.
2. For each changed component, find importers in the same package (and the sibling platform package):

   ```bash
   rg -l "from ['\"].*/ButtonBase" packages/design-system-react/src packages/design-system-react-native/src
   ```

3. Include **both** React and React Native when the same primitive exists on both.
4. Include stories that show **opt-outs** (e.g. `TextButton` still `rounded-none`) so reviewers see what did _not_ change.
5. Token / global style changes: pick representative stories for the token category (color, radius, typography) plus any component whose stories document that token. Do not screenshot the entire Storybook.

### How many shots

| Fan-out                                         | What to capture                                                                                                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1–8 affected components                         | Default story each (plus Size / Variant if that is what changed). Light and dark when the diff is color/token.                                                                       |
| More than 8, or a primitive with many consumers | One **temporary showcase** story per platform that mounts all dependents in a grid (same layout on before and after), **plus** 1–2 detail stories for the primitive and any opt-out. |

Showcase story path (delete after capture):

- React: `packages/design-system-react/src/components/VisualRegressionSandbox/VisualRegressionSandbox.stories.tsx`
- RN: `packages/design-system-react-native/src/components/VisualRegressionSandbox/VisualRegressionSandbox.stories.tsx`

Use realistic default props from existing stories. Do not commit these files.

## Capture sources

Do **not** wait for PR Storybook CI.

| Pass                | Source                                                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Before**          | Hosted main iframe: `https://metamask.github.io/metamask-design-system/iframe.html?id={storyId}&viewMode=story` and `/react-native/iframe.html?...` |
| **After**           | PR CloudFront preview **only if** the PR already has a Storybook Links comment with a live URL                                                      |
| **After (default)** | Local `yarn storybook` (port 6006) and `yarn workspace @metamask/storybook-react-native storybook:web` (port 6007)                                  |

Resolve story IDs from `index.json` / `stories.json` (hosted or `http://localhost:6006/index.json`). Do not invent IDs.

Capture the **iframe** only (no Storybook chrome). Wait until `#storybook-root > *` exists. Then crop to the component — see [Tight crop](#tight-crop). Optional: outline the component (not the canvas) with `3px solid hotpink`.

New stories (not on hosted main): after-only, labeled “new story”. Never post a broken before image.

If pixel-diff vs before is empty (or below a tiny threshold), skip that story in the PR body.

## Tight crop

Reviewers must be able to see a 2px radius or 1px border change. A full-window shot of a small component (Badge, Avatar, ButtonIcon, Icon) hides that in empty canvas.

**Do**

- Screenshot the **component bounding box**, not the browser viewport and not the whole Storybook canvas.
- Use `getBoundingClientRect()` on `#storybook-root > :first-child` (or the specific node that changed) and capture that rectangle plus **8–16px** padding.
- Prefer an element screenshot from the browser tool when it can target that node.
- Keep before and after **the same crop size and origin** so the pair is comparable.
- For a showcase grid, crop to the grid’s bounding box plus the same small padding — not the leftover white page.

**Do not**

- Take a full-screen or full-iframe PNG of `BadgeNetwork` (or any similarly small control). A 24–32px badge in a 1440×900 frame makes a radius tweak invisible.
- Include Storybook sidebar, toolbar, docs layout, or large empty `padded` canvas.
- Scale the image down so much that the change disappears; crop in, do not shrink.

If the story’s default layout is a huge padded canvas, temporarily wrap the instance in a hug-contents container in the sandbox story, or clip in the capture step. Delete any sandbox after.

Wrong: full page of one Badge. Right: Badge filling most of a ~200px-wide PNG, before and after side by side.

## Attach with GitHub CLI

GitHub CLI 2.99.0 added a repeatable `--attach` flag that uploads local PNG/JPEG/GIF/WebP (and video) and rewrites matching Markdown paths to GitHub-hosted media. See [GitHub CLI: Media in issues, pull requests, and comments](https://github.blog/changelog/2026-09-01-github-cli-media-in-issues-pull-requests-and-comments/) and [Attaching files with GitHub CLI](https://docs.github.com/en/github-cli/github-cli/attaching-files-with-github-cli).

```bash
gh --version   # require >= 2.99.0; otherwise brew upgrade gh and stop
```

`--attach` needs a user OAuth/PAT with repo **write** access. GitHub App `GITHUB_TOKEN` (`ghs_`) cannot upload. If attach fails, keep PNGs locally and say so — still do **not** use Cursor URLs.

Write Markdown that references **local paths**. `gh` rewrites those paths when the same files are passed to `--attach`:

```markdown
## **Screenshots/Recordings**

A showcase of every component this change visually affects (not only files in the diff), captured on hosted `main` (before) and this branch (after).

### React web — consumers

![Before React consumers](/tmp/vr/before/web-consumers.png)
![After React consumers](/tmp/vr/after/web-consumers.png)

### React Native web — consumers

![Before RN consumers](/tmp/vr/before/rn-consumers.png)
![After RN consumers](/tmp/vr/after/rn-consumers.png)

### Detail

![Before ButtonBase](/tmp/vr/before/buttonbase-default.png)
![After ButtonBase](/tmp/vr/after/buttonbase-default.png)
```

Then:

```bash
# New PR (combine with the usual --draft --body-file from .cursor/rules/pr.mdc)
gh pr create --title "..." --body-file pr-body.md --draft \
  --attach '/tmp/vr/before/web-consumers.png#Before React consumers' \
  --attach '/tmp/vr/after/web-consumers.png#After React consumers'

# Existing PR: replace the Screenshots section with the latest set
gh pr edit --body-file pr-body.md \
  --attach '/tmp/vr/before/web-consumers.png#Before React consumers' \
  --attach '/tmp/vr/after/web-consumers.png#After React consumers'
```

Repeat `--attach` for each PNG. Prefer the PR body **Screenshots/Recordings** section. Use `gh pr comment --body-file ... --attach ...` only for a refresh comment. Do not use `gh api` review comments for images (no `--attach`).

On refresh: recapture, rewrite the section, re-attach. The body should show only the latest set.

## No PR yet

If the user asked for visuals before a PR exists, capture into `/tmp/vr/` (or `.cursor/temp/vr/`, gitignored). When the PR is created, attach those files. If the UI changed since capture, recapture first.

## Local vs cloud agents

Local agents do **not** get a Cloud Agent VM. Use the Cursor browser against hosted/local Storybook, then `gh --attach`.

Cloud agents use the VM browser against GitHub Pages, PR preview, or Storybook in the VM. Same attach rules if `gh` auth supports `--attach`.

## Golden path (PR #1494)

Diff touched `ButtonBase` and `ButtonIcon` (and RN `SegmentedControl` to stay concentric). Correct capture set:

- Web showcase: `ButtonBase`, `Button` variants/sizes, `ButtonHero`, `ButtonFilter`, `TextButton`, `ButtonIcon`
- RN showcase: those plus `ButtonSemantic`, `SelectButton`, `SegmentedControl`
- Detail: `ButtonBase` / `ButtonIcon`; RN `SegmentedControl` sizes

Wrong: only `ButtonBase` Default on web, or a full-viewport PNG of a small control such as Badge.
