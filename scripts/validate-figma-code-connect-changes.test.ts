import fs from 'fs';
import os from 'os';
import path from 'path';

import {
  createValidationContext,
  EXCLUDED_COMPONENT_NAMES,
  findMissingCrossPlatformFigmaFiles,
  findMissingFigmaFilesForNewComponents,
  parseMainComponentFile,
} from './validate-figma-code-connect-changes';

describe('validate-figma-code-connect-changes', () => {
  let tempDir: string;
  let context: ReturnType<typeof createValidationContext>;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'figma-validate-'));
    context = createValidationContext({ repoRoot: tempDir });
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  describe('parseMainComponentFile', () => {
    it('parses a main component file path', () => {
      expect(
        parseMainComponentFile(
          'packages/design-system-react/src/components/Button/Button.tsx',
          context,
        ),
      ).toStrictEqual({
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
          context,
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

      const errors = findMissingFigmaFilesForNewComponents(
        ['packages/design-system-react/src/components/NewWidget/NewWidget.tsx'],
        context,
      );

      expect(errors).toStrictEqual([
        'New component "NewWidget" in packages/design-system-react is missing packages/design-system-react/src/components/NewWidget/NewWidget.figma.tsx',
      ]);
    });

    it('does not require figma files for excluded components', () => {
      const errors = findMissingFigmaFilesForNewComponents(
        ['packages/design-system-react/src/components/Box/Box.tsx'],
        context,
      );

      expect(errors).toStrictEqual([]);
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

      const errors = findMissingCrossPlatformFigmaFiles(
        [
          'packages/design-system-react/src/components/NewWidget/NewWidget.tsx',
          'packages/design-system-react-native/src/components/NewWidget/NewWidget.tsx',
        ],
        context,
      );

      expect(errors).toStrictEqual([
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
