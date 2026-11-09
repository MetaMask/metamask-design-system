/* eslint-disable */
// prettier-ignore
/**
 * The shared publish-preview workflow renames public workspaces to
 * `@metamask-previews/*` and then runs `yarn install` before
 * `prepare-preview-builds` can rewrite dependency ranges.
 *
 * Intra-repo dependencies use `workspace:^`. After the rename that protocol
 * throws `Workspace not found`, and the workflow's
 * `<name>@^<version> -> portal:` resolutions do not match a `workspace:`
 * descriptor.
 *
 * When the original workspace is gone but the preview-scoped package is still
 * checked out at the same path, resolve `workspace:^` / `workspace:~` /
 * `workspace:*` to that directory. Normal installs are unchanged: the
 * original workspace still exists, so this hook returns the descriptor as-is
 * and the lockfile is not rewritten.
 */
module.exports = {
  name: 'plugin-preview-workspace-fallback',
  factory: (require) => {
    const { structUtils } = require('@yarnpkg/core');

    const SOURCE_SCOPE = '@metamask/';
    const PREVIEW_SCOPE = '@metamask-previews/';

    return {
      hooks: {
        reduceDependency(dependency, project) {
          if (!dependency.range.startsWith('workspace:')) {
            return dependency;
          }

          const selector = dependency.range.slice('workspace:'.length);
          if (selector !== '^' && selector !== '~' && selector !== '*') {
            return dependency;
          }

          if (project.tryWorkspaceByIdent(dependency) !== null) {
            return dependency;
          }

          const ident = structUtils.stringifyIdent(dependency);
          if (!ident.startsWith(SOURCE_SCOPE)) {
            return dependency;
          }

          const previewName = `${PREVIEW_SCOPE}${ident.slice(SOURCE_SCOPE.length)}`;
          for (const workspace of project.workspaces) {
            const rawName = workspace.manifest.raw?.name;
            const manifestName = workspace.manifest.name
              ? structUtils.stringifyIdent(workspace.manifest.name)
              : null;
            if (rawName !== previewName && manifestName !== previewName) {
              continue;
            }

            return structUtils.makeDescriptor(
              dependency,
              `workspace:${workspace.relativeCwd}`,
            );
          }

          return dependency;
        },
      },
    };
  },
};
