# Chromatic Visual Regression Testing - Quick Start

This MetaMask Design System now includes automated visual regression testing using Chromatic. This setup helps catch unintended visual changes and ensures UI consistency across the design system.

## 🚀 Quick Start

### 1. Set up your Chromatic project

1. Visit [chromatic.com](https://www.chromatic.com) and sign in with GitHub
2. Create a new project linked to this repository
3. Copy your project token

### 2. Configure GitHub repository

Add your Chromatic project token to GitHub repository secrets:
- Go to Settings > Secrets and variables > Actions
- Add new secret: `CHROMATIC_PROJECT_TOKEN` with your token value

### 3. You're ready to go!

The visual regression testing will automatically run on:
- ✅ All pull requests
- ✅ Pushes to main branch

## 📋 What's included

- **Chromatic configuration** (`chromatic.config.json`)
- **GitHub Actions workflow** (`.github/workflows/chromatic.yml`)
- **NPM scripts** for local development
- **Comprehensive documentation** (`docs/chromatic-setup.md`)
- **Example stories** showing best practices

## 🛠️ Commands

```bash
# Run visual regression testing locally
yarn chromatic

# Run in CI mode (exits after upload)
yarn chromatic:ci

# Start Storybook for development
yarn storybook

# Build Storybook for production
yarn build-storybook
```

## 📖 How it works

1. **On PR creation**: Chromatic automatically compares visual changes
2. **Review changes**: Check the Chromatic dashboard for visual diffs
3. **Accept/reject**: Approve intentional changes, reject bugs
4. **Merge**: Once approved, PR can be merged
5. **Baseline update**: Main branch builds become new baselines

## 🔧 Configuration

The setup includes optimized configuration for:
- **Performance**: Only tests changed components
- **Workflow**: Auto-accepts changes on main branch
- **CI/CD**: Integrates with existing GitHub Actions
- **Reliability**: Handles animations and loading states

## 📚 Next steps

1. **Read the full documentation**: `docs/chromatic-setup.md`
2. **Check the example stories**: `apps/storybook-react/stories/ChromaticExample.stories.tsx`
3. **Start writing visual tests**: Add Chromatic parameters to your stories
4. **Monitor the dashboard**: Review visual changes regularly

## 🎯 Best practices

- Use consistent, predictable data in stories
- Handle animations with delays or disable them
- Test multiple viewport sizes for responsive components
- Group related visual changes in single PRs
- Review all visual changes before merging

## 🔗 Resources

- [Chromatic Documentation](https://www.chromatic.com/docs)
- [Storybook Visual Testing Guide](https://storybook.js.org/docs/react/writing-tests/visual-testing)
- [Design System Testing Best Practices](https://www.chromatic.com/blog/design-system-testing-best-practices)

---

For detailed setup instructions and advanced configuration, see `docs/chromatic-setup.md`.