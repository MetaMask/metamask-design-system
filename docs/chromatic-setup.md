# Chromatic Visual Regression Testing Setup

This document explains how to set up and use Chromatic for visual regression testing in the MetaMask Design System.

## Overview

Chromatic is a visual testing tool that automatically detects visual changes in your UI components by comparing screenshots of your Storybook stories across different builds. It's integrated with our Storybook setup to provide automated visual regression testing.

## Configuration

### 1. Chromatic Configuration

The project is configured with `chromatic.config.json` at the root level with the following settings:

- **onlyChanged**: Only test stories that have changed
- **exitOnceUploaded**: Exit after uploading without waiting for results
- **exitZeroOnChanges**: Don't fail CI on visual changes (for review)
- **autoAcceptChanges**: Automatically accept changes on main branch
- **skip**: Skip Chromatic for dependabot branches
- **traceChanged**: Provide detailed change information

### 2. GitHub Actions Workflow

The `.github/workflows/chromatic.yml` workflow runs on:
- Push to main branch
- Pull requests to main branch

The workflow:
1. Builds the Storybook
2. Runs Chromatic visual regression testing
3. Uploads results to Chromatic dashboard

## Setup Instructions

### 1. Create Chromatic Project

1. Go to [Chromatic.com](https://www.chromatic.com)
2. Sign up/in with your GitHub account
3. Create a new project linked to your repository
4. Copy the project token

### 2. Add Project Token to GitHub Secrets

1. Go to your GitHub repository settings
2. Navigate to Secrets and variables > Actions
3. Add a new repository secret:
   - Name: `CHROMATIC_PROJECT_TOKEN`
   - Value: Your Chromatic project token

### 3. Update Configuration (if needed)

If you need to customize the Chromatic configuration, edit `chromatic.config.json`:

```json
{
  "projectToken": "CHROMATIC_PROJECT_TOKEN",
  "buildScriptName": "build-storybook",
  "storybookBuildDir": "apps/storybook-react/storybook-static",
  "onlyChanged": true,
  "externals": ["public/**"],
  "ignoreLastBuildOnBranch": "main",
  "exitOnceUploaded": true,
  "exitZeroOnChanges": true,
  "skip": "dependabot/**",
  "autoAcceptChanges": "main",
  "traceChanged": "expanded"
}
```

## Usage

### Running Chromatic Locally

```bash
# From the root directory
yarn chromatic

# Or from the storybook-react directory
cd apps/storybook-react
yarn chromatic
```

### Running Chromatic in CI Mode

```bash
# From the root directory
yarn chromatic:ci

# Or from the storybook-react directory
cd apps/storybook-react
yarn chromatic:ci
```

### Available Scripts

- `yarn chromatic` - Run Chromatic locally with changes allowed
- `yarn chromatic:ci` - Run Chromatic in CI mode (exits after upload)
- `yarn storybook` - Start Storybook development server
- `yarn build-storybook` - Build static Storybook

## Workflow

### For Pull Requests

1. When you create a PR, the Chromatic workflow automatically runs
2. Visual changes are detected and highlighted in the Chromatic dashboard
3. Review changes in the Chromatic UI
4. Accept or reject changes as needed
5. Once approved, the PR can be merged

### For Main Branch

1. Changes pushed to main are automatically accepted
2. This creates a new baseline for future comparisons
3. The visual tests ensure consistency across releases

## Best Practices

### Writing Stories for Visual Testing

1. **Use consistent data**: Use fixed, predictable data in your stories
2. **Avoid animations**: Disable animations or use static states
3. **Control timing**: Use `delay` parameter for async components
4. **Handle responsive design**: Test different viewport sizes

Example story configuration:

```typescript
export const Default: Story = {
  args: {
    // Use consistent, predictable data
    title: 'Sample Title',
    description: 'Sample description text',
  },
  parameters: {
    // Chromatic-specific parameters
    chromatic: {
      // Pause story for 1 second before screenshot
      delay: 1000,
      // Disable animations
      pauseAnimationAtEnd: true,
    },
  },
};
```

### Managing Visual Changes

1. **Review carefully**: Always review visual changes in Chromatic UI
2. **Batch changes**: Group related visual changes into single PRs
3. **Document changes**: Add comments explaining intentional changes
4. **Test thoroughly**: Ensure changes work across different browsers

### Troubleshooting

#### Common Issues

1. **Flaky tests**: Usually caused by animations or async content
   - Solution: Use `delay` parameter or disable animations

2. **Font rendering differences**: Different fonts between environments
   - Solution: Ensure consistent font loading in Storybook

3. **Image loading issues**: Images not loading consistently
   - Solution: Use static imports or ensure images are in public directory

#### Debug Mode

Run Chromatic with debug information:

```bash
yarn chromatic --debug
```

## Integration with Development Workflow

1. **Before committing**: Run `yarn chromatic` locally to catch issues early
2. **During PR review**: Check Chromatic results alongside code review
3. **After merging**: Monitor main branch builds for any issues

## Monitoring and Maintenance

1. **Regular reviews**: Review Chromatic dashboard regularly
2. **Update baselines**: Accept intentional changes promptly
3. **Monitor performance**: Keep an eye on build times and snapshot counts
4. **Cleanup**: Remove outdated or unused stories periodically

## Resources

- [Chromatic Documentation](https://www.chromatic.com/docs)
- [Storybook Visual Testing](https://storybook.js.org/docs/react/writing-tests/visual-testing)
- [GitHub Actions Integration](https://www.chromatic.com/docs/github-actions)