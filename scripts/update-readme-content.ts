#!yarn ts-node

import execa from 'execa';
import fs from 'fs';
import path from 'path';

type Workspace = {
  location: string;
  name: string;
  dependencies: string[];
};

const DEPENDENCY_GRAPH_START_MARKER = '<!-- start dependency graph -->';
const DEPENDENCY_GRAPH_END_MARKER = '<!-- end dependency graph -->';
const PACKAGE_LIST_START_MARKER = '<!-- start package list -->';
const PACKAGE_LIST_END_MARKER = '<!-- end package list -->';
const README_PATH = path.resolve(__dirname, '../README.md');

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/**
 * The entrypoint to this script.
 *
 * Uses `yarn workspaces list` to:
 *
 * 1. Retrieve all of the workspace packages in this project and their relationships to each other.
 * 2. Produce a Markdown fragment that represents a Mermaid graph.
 * 3. Produce a Markdown fragment that represents a list of the workspace packages, and links to them.
 * 4. Update the README with the new content.
 */
async function main() {
  const workspaces = await retrieveWorkspaces();
  await updateReadme(
    getDependencyGraph(workspaces),
    getPackageList(workspaces),
  );
  console.log('README content updated.');
}

/**
 * Uses the `yarn` executable to gather the Yarn workspaces inside of this
 * project (the packages that are matched by the `workspaces` field inside of
 * `package.json`).
 *
 * @returns The list of workspaces.
 */
async function retrieveWorkspaces(): Promise<Workspace[]> {
  const { stdout } = await execa('yarn', [
    'workspaces',
    'list',
    '--json',
    '--no-private',
    '--verbose',
  ]);

  const workspaces = stdout.split('\n').map((line) => JSON.parse(line));

  // Get actual dependencies for each workspace
  return Promise.all(
    workspaces.map(async (workspace) => {
      const packageJsonPath = path.join(
        process.cwd(),
        workspace.location,
        'package.json',
      );
      const packageJson = JSON.parse(
        await fs.promises.readFile(packageJsonPath, 'utf8'),
      );

      // Collect all dependencies that are workspace packages
      const deps = [
        ...Object.keys(packageJson.dependencies || {}),
        ...Object.keys(packageJson.devDependencies || {}),
        ...Object.keys(packageJson.peerDependencies || {}),
      ].filter((dep) => dep.startsWith('@metamask/'));

      return {
        ...workspace,
        dependencies: deps,
      };
    }),
  );
}

/**
 * Gets the Markdown fragment that represents a Mermaid graph of the
 * dependencies between the workspace packages in this project.
 *
 * @param workspaces - The Yarn workspaces inside of this project.
 * @returns The new dependency graph Markdown fragment.
 */
function getDependencyGraph(workspaces: Workspace[]): string {
  const nodeLines = buildMermaidNodeLines(workspaces);
  const connectionLines = buildMermaidConnectionLines(workspaces);
  return assembleMermaidMarkdownFragment(nodeLines, connectionLines);
}

/**
 * Builds a piece of the Mermaid graph by defining a node for each workspace
 * package within this project.
 *
 * @param workspaces - The Yarn workspaces inside of this project.
 * @returns A set of lines that will go into the final Mermaid graph.
 */
function buildMermaidNodeLines(workspaces: Workspace[]): string[] {
  return workspaces.map((workspace) => {
    const fullPackageName = workspace.name;
    const shortPackageName = fullPackageName
      .replace(/^@metamask\//u, '')
      .replace(/-/gu, '_');
    return `${shortPackageName}(["${fullPackageName}"]);`;
  });
}

/**
 * Builds a piece of the Mermaid graph by defining connections between nodes
 * that correspond to dependencies between workspace packages within this
 * project.
 *
 * @param workspaces - The Yarn workspaces inside of this project.
 * @returns A set of lines that will go into the final Mermaid graph.
 */
function buildMermaidConnectionLines(workspaces: Workspace[]): string[] {
  const connections: string[] = [];
  const workspacesByName = new Map(workspaces.map((w) => [w.name, w]));

  workspaces.forEach((workspace) => {
    const shortPackageName = workspace.name
      .replace(/^@metamask\//u, '')
      .replace(/-/gu, '_');

    workspace.dependencies.forEach((dependencyName) => {
      // Only create connection if dependency is a workspace package
      if (workspacesByName.has(dependencyName)) {
        const shortDependencyName = dependencyName
          .replace(/^@metamask\//u, '')
          .replace(/-/gu, '_');
        connections.push(`${shortPackageName} --> ${shortDependencyName};`);
      }
    });
  });
  return connections;
}

/**
 * Creates the Mermaid graph from the given node lines and connection lines,
 * wrapping it in a triple-backtick directive so that it can be embedded within
 * a Markdown document.
 *
 * @param nodeLines - The set of nodes in the graph as lines.
 * @param connectionLines - The set of connections in the graph as lines.
 * @returns The graph in string format.
 */
function assembleMermaidMarkdownFragment(
  nodeLines: string[],
  connectionLines: string[],
): string {
  return [
    '```mermaid',
    "%%{ init: { 'flowchart': { 'curve': 'bumpX' } } }%%",
    'graph LR;',
    'linkStyle default opacity:0.5',
    ...nodeLines.map((line) => `  ${line}`),
    ...connectionLines.map((line) => `  ${line}`),
    '```',
  ].join('\n');
}

/**
 * Gets the Markdown fragment that represents a list of the workspace packages
 * in this project.
 *
 * @param workspaces - The Yarn workspaces inside of this project.
 * @returns The new package list Markdown fragment.
 */
function getPackageList(workspaces: Workspace[]): string {
  return workspaces
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((workspace) => `- [\`${workspace.name}\`](${workspace.location})`)
    .join('\n');
}

/**
 * Updates the dependency graph section in the README with the given Markdown
 * fragment.
 *
 * @param newGraph - The new dependency graph Markdown fragment.
 * @param newPackageList - The new package list Markdown fragment.
 */
async function updateReadme(newGraph: string, newPackageList: string) {
  const readmeContent = await fs.promises.readFile(README_PATH, 'utf8');

  // Dependency graph
  let newReadmeContent = readmeContent.replace(
    new RegExp(
      `(${DEPENDENCY_GRAPH_START_MARKER}).+(${DEPENDENCY_GRAPH_END_MARKER})`,
      'su',
    ),
    (_match, startMarker, endMarker) =>
      [startMarker, '', newGraph, '', endMarker].join('\n'),
  );

  // Package list
  newReadmeContent = newReadmeContent.replace(
    new RegExp(
      `(${PACKAGE_LIST_START_MARKER}).+(${PACKAGE_LIST_END_MARKER})`,
      'su',
    ),
    (_match, startMarker, endMarker) =>
      [startMarker, '', newPackageList, '', endMarker].join('\n'),
  );

  await fs.promises.writeFile(README_PATH, newReadmeContent);
}
