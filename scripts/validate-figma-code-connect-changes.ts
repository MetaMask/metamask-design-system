#!yarn tsx

import execa from 'execa';
import fs from 'fs';
import path from 'path';

const DEFAULT_REPO_ROOT = path.resolve(__dirname, '..');

export type ValidationContext = Readonly<{
  repoRoot: string;
}>;

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
  main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}

export function createValidationContext(
  overrides: Partial<ValidationContext> = {},
): ValidationContext {
  return {
    repoRoot: overrides.repoRoot ?? DEFAULT_REPO_ROOT,
  };
}

async function main(): Promise<void> {
  const context = createValidationContext();
  const baseRef = resolveBaseRef();
  const addedFiles = await getAddedFiles(baseRef, context.repoRoot);

  const missingFigmaFiles = findMissingFigmaFilesForNewComponents(
    addedFiles,
    context,
  );
  const missingCrossPlatformFigma = findMissingCrossPlatformFigmaFiles(
    addedFiles,
    context,
  );

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
  throw new Error('Figma Code Connect change validation failed.');
}

function resolveBaseRef(): string {
  /* eslint-disable n/no-process-env */
  const githubBaseRef = process.env.GITHUB_BASE_REF;
  /* eslint-enable n/no-process-env */
  if (githubBaseRef) {
    return `origin/${githubBaseRef}`;
  }

  const explicitBase = process.argv.find((arg) => arg.startsWith('--base='));
  if (explicitBase) {
    return explicitBase.replace('--base=', '');
  }

  return 'origin/main';
}

async function getAddedFiles(
  baseRef: string,
  repoRoot: string,
): Promise<string[]> {
  return runGitDiff(
    ['diff', '--name-only', '--diff-filter=A', `${baseRef}...HEAD`],
    repoRoot,
  );
}

async function runGitDiff(
  args: readonly string[],
  repoRoot: string,
): Promise<string[]> {
  try {
    const { stdout } = await execa('git', args, {
      cwd: repoRoot,
    });

    return stdout
      .split('\n')
      .map((file) => file.trim())
      .filter(Boolean);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Unable to diff against ${args.at(-1)}. (${message})`);
  }
}

export function findMissingFigmaFilesForNewComponents(
  addedFiles: string[],
  context: ValidationContext = createValidationContext(),
): string[] {
  const errors: string[] = [];

  for (const file of addedFiles) {
    const componentInfo = parseMainComponentFile(file, context);
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
        `New component "${componentName}" in ${packagePath} is missing ${path.relative(context.repoRoot, figmaFilePath)}`,
      );
    }
  }

  return errors;
}

export function findMissingCrossPlatformFigmaFiles(
  addedFiles: string[],
  context: ValidationContext = createValidationContext(),
): string[] {
  const errors: string[] = [];
  const newComponentNames = new Set<string>();

  for (const file of addedFiles) {
    const componentInfo = parseMainComponentFile(file, context);
    if (
      !componentInfo ||
      EXCLUDED_COMPONENT_NAMES.has(componentInfo.componentName)
    ) {
      continue;
    }
    newComponentNames.add(componentInfo.componentName);
  }

  for (const componentName of newComponentNames) {
    const platformsMissingFigma = DESIGN_SYSTEM_PACKAGES.filter(
      (packagePath) => {
        const componentDir = path.join(
          context.repoRoot,
          packagePath,
          'src/components',
          componentName,
        );
        const mainComponentFile = path.join(
          componentDir,
          `${componentName}.tsx`,
        );
        const figmaFile = path.join(componentDir, `${componentName}.figma.tsx`);

        return fs.existsSync(mainComponentFile) && !fs.existsSync(figmaFile);
      },
    );

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
  context: ValidationContext = createValidationContext(),
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
    componentDir: path.join(context.repoRoot, path.dirname(filePath)),
  };
}
