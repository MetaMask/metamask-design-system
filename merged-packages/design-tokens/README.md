<table><tr><td><p align="center"><b>⚠️ PLEASE READ ⚠️</b></p><p align="center">This package is currently being migrated to our <a href="https://github.com/MetaMask/metamask-design-system"><code>metamask-design-system</code></a> monorepo. Please do not make any commits to this repository while this migration is taking place, as they will not be transferred over. Also, please re-open PRs that are under active development in the @metamask/design-tokens.</p></td></tr></table>

# MetaMask Design Tokens 🪙

[![npm version](https://badge.fury.io/js/@metamask%2Fdesign-tokens.svg)](https://npmjs.com/package/@metamask/design-tokens) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://metamask.github.io/design-tokens)

## `@metamask/design-tokens`

A collection of design tokens based on MetaMask's design system.

Have a question, suggestion, feedback? Contributors can [create an issue](https://github.com/MetaMask/design-tokens/issues/new/choose) or internal folks can post on the [#metamask-design-system](https://consensys.slack.com/archives/C0354T27M5M) Slack channel. We're here to help! 💁

### Table of Contents

- [Documentation](#documentation)
- [Installation](#installation)
  - [CSS Variables](#css-variables)
  - [CSS-in-JS](#css-in-js-react-native)
- [Tooling](#tooling)
- [Contributing](#contributing)
  - [Setup](#setup)
  - [Documentation](#documentation)
  - [Figma Tokens](#figma-tokens)
  - [Testing and Linting](#testing-and-linting)
  - [Release & Publishing](#release-publishing)
- [License](#license) TBC

## Documentation

The primary documentation for MetaMask Design Tokens is [storybook](https://metamask.github.io/design-tokens), which describes the different token formats and gives examples of their usage.

## Installation

`yarn add @metamask/design-tokens`

or

`npm install @metamask/design-tokens`

Currently the metamask design tokens repo supports 2 formats, CSS-in-JS and CSS variables. These formats are based on its primary consumers [metamask-mobile](https://github.com/MetaMask/metamask-mobile), [metamask-extension](https://github.com/MetaMask/metamask-extension) and [metamask-portfolio](https://github.com/consensys-vertical-apps/metamask-portfolio) .

### CSS Variables

1. Import the design tokens stylesheet into your CSS or SCSS.

> _Please note the file path will depend on where in your project you are importing it from._

```css
@import '@metamask/design-tokens/styles';
```

2. Use design token CSS variables in the code.

```css
/* In CSS/SCSS */
.card {
  --card-color-text: var(--color-text-default);
  --card-color-background: var(--color-background-default);
  --card-color-border: var(--color-border-muted);

  background-color: var(--card-color-background);
  color: var(--card-color-text);
  border: 1px solid var(--card-color-border);
}
```

```js
// They also work for inline styles in javascript
<div style={{ color: 'var(--color-error-default)' }}>This was is an error</div>
```

### CSS-in-JS

1. Use design tokens in code by importing from library:

```js
import { lightTheme, darkTheme } from '@metamask/design-tokens';

// Create provider that swaps theme (pseudo code)
<ThemeProvider theme={theme === 'default' ? lightTheme : darkTheme} />;

const createStyles = (theme) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: theme.colors.background.default,
      borderColor: theme.colors.border.default,
    },
  });
```

### Usage

For a detailed list of design tokens visit the MetaMask design token [storybook](https://metamask.github.io/design-tokens)

## Tooling

To prevent color tech debt and ensure themability, accessibility, and consistency of the MetaMask brand, we recommend using [@metamask/eslint-plugin-design-tokens](https://github.com/MetaMask/eslint-plugin-design-tokens). This ESLint plugin helps enforce the usage of design tokens in your codebase.

You'll first need to install [ESLint](https://eslint.org):

```shell
$ npm install --save-dev eslint
# or
$ yarn add --dev eslint
```

Next, install `@metamask/eslint-plugin-design-tokens`:

```shell
$ npm install --save-dev @metamask/eslint-plugin-design-tokens
# or
$ yarn add --dev @metamask/eslint-plugin-design-tokens
```

### Configuration

Add `eslint-plugin-design-tokens` to your ESLint configuration:

```json
{
  "plugins": ["@metamask/design-tokens"],
  "rules": {
    "@metamask/design-tokens/color-no-hex": "warn"
  }
}
```

This configuration will enforce the usage of design tokens instead of static hex color values, helping to maintain a consistent design system. See more [supported rules](https://github.com/MetaMask/eslint-plugin-design-tokens?tab=readme-ov-file#supported-rules)

## Contributing

Follow these steps to below to get the library up and running locally.

### Setup

- Install [Node.js](https://nodejs.org) version 16
  - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm use` will automatically choose the right node version for you.
- Install [Yarn v1](https://yarnpkg.com/en/docs/install)
- Run `yarn setup` to install dependencies and run any required post-install scripts
  - **Warning:** Do not use the `yarn` / `yarn install` command directly. Use `yarn setup` instead. The normal install command will skip required post-install scripts, leaving your development environment in an invalid state.

### Documentation

We use storybook for documentation. To get storybook up and running use:

```
yarn storybook
```

### Tokens Studio for Figma (formerly known as Figma Tokens)

The primary data for the generation of tokens is based on the json generated from a figma plugin called [Tokens Studio for Figma (formerly known as Figma Tokens)](https://github.com/six7/figma-tokens). This keeps our code in sync with our figma libraries. Currently the token formats are manually generated we are hoping to automate this process in future.

### Testing and Linting

Run `yarn test` to run the tests once. To run tests on file changes, run `yarn test:watch`.

Run `yarn lint` to run the linter, or run `yarn lint:fix` to run the linter and fix any automatically fixable issues.

### Release & Publishing

The project follows the same release process as the other libraries in the MetaMask organization. The GitHub Actions [`action-create-release-pr`](https://github.com/MetaMask/action-create-release-pr) and [`action-publish-release`](https://github.com/MetaMask/action-publish-release) are used to automate the release process; see those repositories for more information about how they work.

1. Choose a release version.

   - The release version should be chosen according to SemVer. Analyze the changes to see whether they include any breaking changes, new features, or deprecations, then choose the appropriate SemVer version. See [the SemVer specification](https://semver.org/) for more information.

2. If this release is backporting changes onto a previous release, then ensure there is a major version branch for that version (e.g. `1.x` for a `v1` backport release).

   - The major version branch should be set to the most recent release with that major version. For example, when backporting a `v1.0.2` release, you'd want to ensure there was a `1.x` branch that was set to the `v1.0.1` tag.

3. Trigger the [`workflow_dispatch`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_dispatch) event [manually](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow) for the `Create Release Pull Request` action to create the release PR.

   - For a backport release, the base branch should be the major version branch that you ensured existed in step 2. For a normal release, the base branch should be the main branch for that repository (which should be the default value).
   - This should trigger the [`action-create-release-pr`](https://github.com/MetaMask/action-create-release-pr) workflow to create the release PR.

4. Update the changelog to move each change entry into the appropriate change category ([See here](https://keepachangelog.com/en/1.0.0/#types) for the full list of change categories, and the correct ordering), and edit them to be more easily understood by users of the package.

   - Generally any changes that don't affect consumers of the package (e.g. lockfile changes or development environment changes) are omitted. Exceptions may be made for changes that might be of interest despite not having an effect upon the published package (e.g. major test improvements, security improvements, improved documentation, etc.).
   - Try to explain each change in terms that users of the package would understand (e.g. avoid referencing internal variables/concepts).
   - Consolidate related changes into one change entry if it makes it easier to explain.
   - Run `yarn auto-changelog validate --rc` to check that the changelog is correctly formatted.

5. Review and QA the release.

   - If changes are made to the base branch, the release branch will need to be updated with these changes and review/QA will need to restart again. As such, it's probably best to avoid merging other PRs into the base branch while review is underway.

6. Squash & Merge the release.

   - This should trigger the [`action-publish-release`](https://github.com/MetaMask/action-publish-release) workflow to tag the final release commit and publish the release on GitHub.

7. Publish the release on npm.

   - Wait for the `publish-release` GitHub Action workflow to finish. This should trigger a second job (`publish-npm`), which will wait for a run approval by the [`npm publishers`](https://github.com/orgs/MetaMask/teams/npm-publishers) team.
   - Approve the `publish-npm` job (or ask somebody on the npm publishers team to approve it for you).
   - Once the `publish-npm` job has finished, check npm to verify that it has been published.
