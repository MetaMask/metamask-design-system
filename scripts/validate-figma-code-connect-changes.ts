#!yarn tsx

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export function getRepoRoot(): string {
  return process.env.FIGMA_VALIDATE_REPO_ROOT
    ? path.resolve(process.env.FIGMA_VALIDATE_REPO_ROOT)
    : path.resolve(__dirname, '..');
}

export const DESIGN_SYSTEM_PACKAGES = [
  'packages/design-system-react',
  'packages/design-system-react-native',
] as const;

/**
 * Component directories that are internal building blocks or primitives and do
 * not require standalone Figma Code Connect files.
 */
export const EXCLUDED_COMPONENT_NAMES = new Set([
  'AvatarBase',
  'BadgeWrapper',
  'BannerBase',
  'Box',
  'HeaderBase',
  'HelpText',
  'Input',
  'Jazzicon',
  'Label',
  'Maskicon',
  'Blockies',
  'Modal',
  'ModalBody',
  'ModalContent',
  'ModalFocus',
  'ModalFooter',
  'ModalHeader',
  'ModalOverlay',
  'Popover',
  'PopoverHeader',
  'PureBlackProvider',
  'SensitiveText',
  'Skeleton',
  'Text',
  'Toaster',
]);

const MAIN_COMPONENT_FILE_PATTERN =
  /^packages\/design-system-(?:react|react-native)\/src\/components\/(?:temp-components\/)?([^/]+)\/\1\.tsx$/u;

const isDirectExecution =
  process.argv[1] !== undefined &&
  path.resolve(process.argv[1]) === path.resolve(__filename);

if (isDirectExecution) {
  main();
}

function main(): void {
  const baseRef = resolveBaseRef();
  const addedFiles = getAddedFiles(baseRef);

  const missingFigmaFiles = findMissingFigmaFilesForNewComponents(addedFiles);
  const missingCrossPlatformFigma =
    findMissingCrossPlatformFigmaFiles(addedFiles);

  const errors = [...missingFigmaFiles, ...missingCrossPlatformFigma];

  if (errors.length === 0) {
    console.log('Figma Code Connect change validation passed.');
    return;
  }

  console.error('Figma Code Connect change validation failed:\n');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  console.error(
    '\nSee docs/figma-code-connect.md and .cursor/rules/figma-integration.md for setup guidance.',
  );
  process.exit(1);
}

function resolveBaseRef(): string {
  const githubBaseRef = process.env.GITHUB_BASE_REF;
  if (githubBaseRef) {
    return `origin/${githubBaseRef}`;
  }

  const explicitBase = process.argv.find((arg) => arg.startsWith('--base='));
  if (explicitBase) {
    return explicitBase.replace('--base=', '');
  }

  return 'origin/main';
}

function getAddedFiles(baseRef: string): string[] {
  return runGitDiff([
    'diff',
    '--name-only',
    '--diff-filter=A',
    `${baseRef}...HEAD`,
  ]);
}

function runGitDiff(args: string[]): string[] {
  try {
    const output = execSync(['git', ...args].join(' '), {
      cwd: getRepoRoot(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    return output
      .split('\n')
      .map((file) => file.trim())
      .filter(Boolean);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(
      `Unable to diff against ${args.at(-1)}. Skipping change validation. (${message})`,
    );
    return [];
  }
}

export function findMissingFigmaFilesForNewComponents(
  addedFiles: string[],
): string[] {
  const errors: string[] = [];

  for (const file of addedFiles) {
    const componentInfo = parseMainComponentFile(file);
    if (!componentInfo) {
      continue;
    }

    const { packagePath, componentName, componentDir } = componentInfo;

    if (EXCLUDED_COMPONENT_NAMES.has(componentName)) {
      continue;
    }

    const figmaFilePath = path.join(componentDir, `${componentName}.figma.tsx`);
    if (!fs.existsSync(figmaFilePath)) {
      errors.push(
        `New component "${componentName}" in ${packagePath} is missing ${path.relative(getRepoRoot(), figmaFilePath)}`,
      );
    }
  }

  return errors;
}

export function findMissingCrossPlatformFigmaFiles(
  addedFiles: string[],
): string[] {
  const errors: string[] = [];
  const newComponentNames = new Set<string>();

  for (const file of addedFiles) {
    const componentInfo = parseMainComponentFile(file);
    if (!componentInfo || EXCLUDED_COMPONENT_NAMES.has(componentInfo.componentName)) {
      continue;
    }
    newComponentNames.add(componentInfo.componentName);
  }

  for (const componentName of newComponentNames) {
    const platformsMissingFigma = DESIGN_SYSTEM_PACKAGES.filter((packagePath) => {
      const componentDir = path.join(
        getRepoRoot(),
        packagePath,
        'src/components',
        componentName,
      );
      const mainComponentFile = path.join(componentDir, `${componentName}.tsx`);
      const figmaFile = path.join(componentDir, `${componentName}.figma.tsx`);

      return fs.existsSync(mainComponentFile) && !fs.existsSync(figmaFile);
    });

    if (platformsMissingFigma.length === 1) {
      const [missingPackage] = platformsMissingFigma;
      errors.push(
        `Component "${componentName}" is missing a Code Connect file in ${missingPackage}`,
      );
    }
  }

  return errors;
}

export function parseMainComponentFile(
  filePath: string,
): { packagePath: string; componentName: string; componentDir: string } | null {
  const match = filePath.match(MAIN_COMPONENT_FILE_PATTERN);
  if (!match) {
    return null;
  }

  const componentName = match[1];
  const packagePath = filePath.startsWith('packages/design-system-react-native')
    ? 'packages/design-system-react-native'
    : 'packages/design-system-react';

  return {
    packagePath,
    componentName,
    componentDir: path.join(getRepoRoot(), path.dirname(filePath)),
  };
}
