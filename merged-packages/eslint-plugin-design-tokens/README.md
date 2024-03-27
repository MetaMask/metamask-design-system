# ESlint Plugin Design Tokens 🪙✨

[![npm version](https://badge.fury.io/js/@metamask%2Feslint-plugin-design-tokens.svg)](https://npmjs.com/package/@metamask/eslint-plugin-design-tokens)

## `@metamask/eslint-plugin-design-tokens`

An ESLint plugin designed to enforce best practices and consistency for using MetaMask design tokens across various projects

Have a question, suggestion, feedback? Contributors can [create an issue](https://github.com/MetaMask/eslint-plugin-design-tokens/issues/new/choose) or internal folks can post on the [#metamask-design-system](https://consensys.slack.com/archives/C0354T27M5M) Slack channel. We're here to help! 💁

## Installation

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

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@metamask/eslint-plugin-design-tokens` globally.

## Usage

Add `@metamask/design-tokens` to the plugins section of your `.eslintrc.js` configuration file. You can omit the `eslint-plugin-` prefix:

```js
module.exports = {
  plugins: ['@metamask/design-tokens'],
};
```

Then configure the rules you want to use within `rules` property of your `.eslintrc.js`:

```js
module.exports = {
  rules: {
    '@metamask/design-tokens/no-deprecated-portfolio-classnames': 'warn', // or "error" or "off"
  },
};
```

## API

See our documentation:

- [Latest published API documentation](https://metamask.github.io/eslint-plugin-design-tokens/latest/)
- [Latest development API documentation](https://metamask.github.io/eslint-plugin-design-tokens/staging/)

## Contributing

### Setup

- Install the current LTS version of [Node.js](https://nodejs.org)
  - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm install` will install the latest version and running `nvm use` will automatically choose the right node version for you.
- Install [Yarn v3](https://yarnpkg.com/getting-started/install)
- Run `yarn install` to install dependencies and run any required post-install scripts

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
