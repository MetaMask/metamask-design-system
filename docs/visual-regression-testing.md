# Visual Regression Testing

Visual regression testing is powered by [Chromatic](https://www.chromatic.com), which automatically detects visual changes in React web components across browsers.

## How It Works

**Chromatic runs automatically** when you:

- Open a pull request (results appear as PR check)
- Push changes to existing PR (incremental builds)
- Merge to `main` branch (baselines auto-update)

No manual setup is needed - visual testing is included in the CI pipeline.

## What Gets Tested

- **Platform**: React web components only (React Native not supported)
- **Stories**: All Storybook stories in `@metamask/design-system-react`
- **Browsers**: Chrome, Firefox, Safari, and Edge
- **Snapshots**: Pixel-perfect screenshots of each story

## Running Tests

### From Pull Requests (Automatic)

1. Open or update a pull request
2. Chromatic runs automatically via GitHub Actions
3. Check appears in PR status checks: "Chromatic"
4. Click "Details" to review visual changes

### From Command Line (Manual)

```bash
# From repository root
yarn chromatic

# Or from storybook-react directory
yarn workspace @metamask/storybook-react chromatic
```

**Note**: The `CHROMATIC_PROJECT_TOKEN` environment variable must be set. Contact a maintainer for access.

## Reviewing Changes

When Chromatic detects visual changes, you'll see a comment on your PR with a link to review:

1. **Click the Chromatic build link** in the PR comment
2. **Review each visual change**:
   - Green outline = Additions
   - Red outline = Deletions
   - Side-by-side diff showing before/after
3. **Accept or reject changes**:
   - ✅ Accept = Approve visual change, updates baseline
   - ❌ Deny = Flag as regression, requires fix
4. **Once all changes are reviewed**, the PR check passes

### First Build (Establishing Baseline)

The first Chromatic build on a new branch will show **all stories as changes**. This is expected:

1. Click **"Batch"** button (top right)
2. Select **"Accept all"**
3. This establishes your visual baseline

Future builds will only show actual visual differences.

## Understanding Results

### Test Status

| Status         | Description                                           |
| -------------- | ----------------------------------------------------- |
| **Unreviewed** | Changes detected, awaiting review                     |
| **Accepted**   | Changes approved and baseline updated                 |
| **Denied**     | Changes flagged as regressions                        |
| **Passed**     | No visual changes detected                            |
| **New**        | First snapshot for this story (establishing baseline) |

### Build Behavior

- **On PRs**: Chromatic requires manual review of changes
- **On `main`**: Chromatic auto-accepts changes to update baselines
- **Exit code**: Workflow uses `--exit-zero-on-changes` to allow review workflow

## Common Scenarios

### Intentional Visual Change

You updated a component's styling:

1. Chromatic flags the change in your PR
2. Review the visual diff - looks correct
3. Click "Accept" in Chromatic UI
4. PR check passes, baseline updated

### Unintentional Regression

A dependency update broke component styling:

1. Chromatic flags unexpected changes
2. Review the visual diff - looks wrong
3. Click "Deny" in Chromatic UI
4. Fix the component styling
5. Push changes, Chromatic re-runs

### No Visual Changes

You refactored component logic without changing appearance:

1. Chromatic runs and compares snapshots
2. No visual differences detected
3. All tests pass automatically
4. No manual review needed

## Workflow Integration

Chromatic is integrated into the main CI workflow as a required check:

- **Runs alongside**: Lint, build, test, accessibility tests
- **Blocks merge**: If visual changes are not reviewed
- **Required for**: All pull requests
- **Auto-accepts on**: `main` branch merges

## Troubleshooting

### Chromatic Build Failing

**Error**: "Build failed: Command exited with code 1"

**Fix**: Check that:

- Storybook builds successfully: `yarn workspace @metamask/storybook-react build-storybook`
- All stories load without errors
- Dependencies are installed: `yarn install`

### Token Not Found

**Error**: "CHROMATIC_PROJECT_TOKEN is required"

**Fix**: Contact a maintainer to get the project token, then:

```bash
export CHROMATIC_PROJECT_TOKEN=chpt_***
```

### Infinite "Unreviewed" Changes

**Issue**: Every build shows all stories as changes

**Fix**: Accept the baseline once:

1. Open any Chromatic build
2. Click "Batch" → "Accept all"
3. Future builds will only show actual changes

### Node.js Version Error

**Error**: "The requested module 'node:module' does not provide an export named 'register'"

**Fix**: Upgrade Node.js to >= 20.6.0:

```bash
nvm install 20
nvm use 20
```

## Best Practices

1. **Review visual changes carefully** - don't blindly accept all changes
2. **Accept baselines promptly** - don't let Chromatic builds pile up
3. **Test locally first** - run Storybook before pushing to catch obvious issues
4. **Keep stories focused** - small, focused stories are easier to review
5. **Document intentional changes** - explain visual updates in PR descriptions

## Platform Support

| Platform     | Visual Testing Support | Notes                                 |
| ------------ | ---------------------- | ------------------------------------- |
| React Web    | ✅ Full support        | Via Chromatic with Storybook          |
| React Native | ❌ Not supported       | See React Native testing alternatives |

**React Native alternatives:**

- Loki.js (open source, device testing)
- VisWiz.io (commercial, native mobile support)
- Manual testing in Storybook iOS/Android apps

## Resources

- [Chromatic Dashboard](https://www.chromatic.com/builds?appId=673370f0d08a04f1)
- [Chromatic Documentation](https://www.chromatic.com/docs/)
- [Storybook Visual Testing](https://storybook.js.org/docs/react/writing-tests/visual-testing)
- [GitHub Actions Workflow](../.github/workflows/chromatic.yml)
