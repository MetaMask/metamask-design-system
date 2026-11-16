/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require('@yarnpkg/types');

/**
 * Extracts the repository name from a GitHub URL for a repository in the
 * MetaMask organization. The URL must include the `.git` extension.
 *
 * @param {string | undefined} repositoryUrl - The repository URL.
 * @returns {string | null} The repository name, or `null` if the URL does not
 * point to a MetaMask repository.
 */
function getRepositoryName(repositoryUrl) {
  const match = repositoryUrl?.match(
    /^https:\/\/github\.com\/MetaMask\/(.+)\.git$/u,
  );
  return match?.[1] ?? null;
}

module.exports = defineConfig({
  /**
   * Enforces the package.json conventions for this repository.
   *
   * @param {import('@yarnpkg/types').Yarn.Constraints.Context} context - The
   * Yarn constraints context.
   */
  async constraints({ Yarn }) {
    for (const workspace of Yarn.workspaces()) {
      const { manifest } = workspace;
      const repositoryName = getRepositoryName(manifest.repository?.url);

      // The package must have a name.
      if (!manifest.name) {
        workspace.error('The package must have a name.');
      }

      // The package must have a description, which cannot end with a period.
      if (manifest.description) {
        if (manifest.description.endsWith('.')) {
          workspace.set('description', manifest.description.slice(0, -1));
        }
      } else {
        workspace.error('The package must have a description.');
      }

      // The package must specify Git as the repository type.
      workspace.set('repository.type', 'git');

      if (repositoryName) {
        // The homepage of the package must match its repository name.
        workspace.set(
          'homepage',
          `https://github.com/MetaMask/${repositoryName}#readme`,
        );

        // The bugs URL of the package must point to the Issues page for the
        // repository.
        if (!manifest.private) {
          workspace.set(
            'bugs.url',
            `https://github.com/MetaMask/${repositoryName}/issues`,
          );
        }
      } else {
        // The package must match the URL of a repo within the MetaMask
        // organization.
        workspace.set(
          'repository.url',
          'https://github.com/MetaMask/<insert repo name here>.git',
        );
      }

      // The license for the package must be specified.
      if (!manifest.license) {
        workspace.error('The package must have a license.');
      }

      // The type definitions entrypoint the package must be
      // `./dist/types/index.d.ts`.
      workspace.set('types', './dist/types/index.d.ts');
      workspace.set('exports["."].types', './dist/types/index.d.ts');

      // The entrypoint for the package must be `./dist/index.js`.
      workspace.set('main', './dist/index.js');
      workspace.set('exports["."].require', './dist/index.js');

      // The module entrypoint for the package must be `./dist/index.mjs`.
      workspace.set('module', './dist/index.mjs');
      workspace.set('exports["."].import', './dist/index.mjs');

      workspace.set('exports["./package.json"]', './package.json');

      // The list of files included in the package must only include files
      // generated during the build step.
      workspace.set('files', ['dist']);

      // If a dependency is listed under "dependencies", it should not be
      // listed under "devDependencies".
      for (const dependency of Yarn.dependencies({ workspace })) {
        if (
          dependency.type === 'devDependencies' &&
          manifest.dependencies?.[dependency.ident] === dependency.range
        ) {
          dependency.delete();
        }
      }

      // The package must specify the expected node version constraint.
      // This matches metamask-design-system and drops Node.js 18, 20, and 22.
      workspace.set('engines.node', '>=24');

      // The package is public.
      workspace.set('publishConfig.access', 'public');
      // The package is available on the NPM registry.
      workspace.set('publishConfig.registry', 'https://registry.npmjs.org/');
    }
  },
});
