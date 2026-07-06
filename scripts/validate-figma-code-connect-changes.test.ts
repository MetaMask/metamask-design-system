import fs from 'fs';
import os from 'os';
import path from 'path';

import {
  EXCLUDED_COMPONENT_NAMES,
  findMissingCrossPlatformFigmaFiles,
  findMissingFigmaFilesForNewComponents,
  parseMainComponentFile,
} from './validate-figma-code-connect-changes';

describe('validate-figma-code-connect-changes', () => {
  let tempDir: string;
  let previousRepoRoot: string | undefined;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'figma-validate-'));
    previousRepoRoot = process.env.FIGMA_VALIDATE_REPO_ROOT;
    process.env.FIGMA_VALIDATE_REPO_ROOT = tempDir;
  });

  afterEach(() => {
    if (previousRepoRoot === undefined) {
      delete process.env.FIGMA_VALIDATE_REPO_ROOT;
    } else {
      process.env.FIGMA_VALIDATE_REPO_ROOT = previousRepoRoot;
    }
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  describe('parseMainComponentFile', () => {
    it('parses a main component file path', () => {
      expect(
        parseMainComponentFile(
          'packages/design-system-react/src/components/Button/Button.tsx',
        ),
      ).toEqual({
        packagePath: 'packages/design-system-react',
        componentName: 'Button',
        componentDir: path.join(
          tempDir,
          'packages/design-system-react/src/components/Button',
        ),
      });
    });

    it('ignores non-main component files', () => {
      expect(
        parseMainComponentFile(
          'packages/design-system-react/src/components/Button/Button.stories.tsx',
        ),
      ).toBeNull();
    });
  });

  describe('findMissingFigmaFilesForNewComponents', () => {
    it('reports missing figma files for new components', () => {
      writeFile(
        'packages/design-system-react/src/components/NewWidget/NewWidget.tsx',
        'export const NewWidget = () => null;',
      );

      const errors = findMissingFigmaFilesForNewComponents([
        'packages/design-system-react/src/components/NewWidget/NewWidget.tsx',
      ]);

      expect(errors).toEqual([
        'New component "NewWidget" in packages/design-system-react is missing packages/design-system-react/src/components/NewWidget/NewWidget.figma.tsx',
      ]);
    });

    it('does not require figma files for excluded components', () => {
      const errors = findMissingFigmaFilesForNewComponents([
        'packages/design-system-react/src/components/Box/Box.tsx',
      ]);

      expect(errors).toEqual([]);
      expect(EXCLUDED_COMPONENT_NAMES.has('Box')).toBe(true);
    });
  });

  describe('findMissingCrossPlatformFigmaFiles', () => {
    it('requires figma files on both platforms for new shared components', () => {
      writeFile(
        'packages/design-system-react/src/components/NewWidget/NewWidget.tsx',
        'export const NewWidget = () => null;',
      );
      writeFile(
        'packages/design-system-react/src/components/NewWidget/NewWidget.figma.tsx',
        'export {};',
      );
      writeFile(
        'packages/design-system-react-native/src/components/NewWidget/NewWidget.tsx',
        'export const NewWidget = () => null;',
      );

      const errors = findMissingCrossPlatformFigmaFiles([
        'packages/design-system-react/src/components/NewWidget/NewWidget.tsx',
        'packages/design-system-react-native/src/components/NewWidget/NewWidget.tsx',
      ]);

      expect(errors).toEqual([
        'Component "NewWidget" is missing a Code Connect file in packages/design-system-react-native',
      ]);
    });
  });

  function writeFile(relativePath: string, contents: string): void {
    const filePath = path.join(tempDir, relativePath);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents);
  }
});
