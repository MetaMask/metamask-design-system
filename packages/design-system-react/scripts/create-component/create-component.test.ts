import { promises as fs } from 'fs';

import { createComponent, parseArgs } from './create-component';

// Mock the fs promises module
jest.mock('fs', () => ({
  promises: {
    access: jest.fn(),
    mkdir: jest.fn(),
    readdir: jest.fn(),
    readFile: jest.fn(),
    writeFile: jest.fn(),
    appendFile: jest.fn(),
  },
}));

describe('create-component', () => {
  beforeEach(() => {
    // Clear all mocks
    jest.clearAllMocks();

    // Mock successful file reading
    (fs.readdir as jest.Mock).mockResolvedValue([
      'ComponentName.tsx',
      'ComponentName.types.ts',
      'ComponentName.test.tsx',
      'ComponentName.stories.tsx',
      'ComponentName.constants.ts',
      'README.mdx',
    ]);

    (fs.readFile as jest.Mock).mockResolvedValue(
      'ComponentName template content',
    );
  });

  describe('parseArgs', () => {
    it('should parse valid arguments correctly', () => {
      const args = [
        '--name',
        'Button',
        '--description',
        'A reusable button component',
      ];
      const result = parseArgs(args);
      expect(result).toStrictEqual({
        name: 'Button',
        description: 'A reusable button component',
      });
    });

    it('should throw error if name argument is missing', () => {
      const args = ['--description', 'A reusable button component'];
      expect(() => parseArgs(args)).toThrow(/Usage: yarn create-component/u);
    });

    it('should throw error if description argument is missing', () => {
      const args = ['--name', 'Button'];
      expect(() => parseArgs(args)).toThrow(/Usage: yarn create-component/u);
    });
  });

  describe('createComponent', () => {
    it('should create a new component successfully', async () => {
      // Mock fs.access to throw ENOENT (simulating directory doesn't exist)
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      await createComponent({
        name: 'Button',
        description: 'A reusable button component',
      });

      // Verify directory was created
      expect(fs.mkdir).toHaveBeenCalledWith(
        expect.stringContaining('/src/components/Button'),
        { recursive: true },
      );

      // Verify files were written
      expect(fs.writeFile).toHaveBeenCalledTimes(6); // One for each template file

      // Verify index.ts was updated with correct exports
      const appendFileCalls = (fs.appendFile as jest.Mock).mock.calls;
      expect(appendFileCalls).toHaveLength(1);
      expect(appendFileCalls[0][0]).toMatch(/\/src\/components\/index\.ts$/u);
      expect(appendFileCalls[0][1]).toContain(
        "export { Button } from './Button'",
      );
      expect(appendFileCalls[0][1]).toContain(
        "export type { ButtonProps } from './Button'",
      );
    });

    it('should throw error if component already exists', async () => {
      // Mock fs.access to succeed (simulating directory exists)
      (fs.access as jest.Mock).mockResolvedValue(undefined);

      await expect(
        createComponent({
          name: 'Button',
          description: 'A reusable button component',
        }),
      ).rejects.toThrow('Component "Button" already exists.');
    });

    it('should replace all placeholder instances in template files', async () => {
      // Mock fs.access to throw ENOENT
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      // Mock template file content with placeholders
      (fs.readFile as jest.Mock).mockResolvedValue(
        'export const ComponentName: React.FC<ComponentNameProps> = () => {};',
      );

      await createComponent({
        name: 'Button',
        description: 'A reusable button component',
      });

      // Verify placeholder replacements in all written files
      const writeFileCalls = (fs.writeFile as jest.Mock).mock.calls;
      const replacedContent =
        'export const Button: React.FC<ButtonProps> = () => {};';

      // Check that at least one file contains our expected content
      const hasCorrectContent = writeFileCalls.some(
        (call: [string, string, ...unknown[]]) => call[1] === replacedContent,
      );
      expect(hasCorrectContent).toBe(true);
    });

    it('should use PascalCase for component folder name', async () => {
      // Mock fs.access to throw ENOENT
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      await createComponent({
        name: 'MyButton',
        description: 'A reusable button component',
      });

      // Verify directory was created with PascalCase name
      expect(fs.mkdir).toHaveBeenCalledWith(
        expect.stringContaining('/src/components/MyButton'),
        { recursive: true },
      );
    });

    it('should update README.mdx code example correctly', async () => {
      // Mock fs.access to throw ENOENT
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      // Mock README.mdx template content
      const mockReadmeContent = `
# ComponentName

ComponentName is used to render standardized elements within an interface.

\`\`\`tsx
import { ComponentName } from '@metamask/design-system-react';

<ComponentName />;
\`\`\`
      `;

      (fs.readFile as jest.Mock).mockImplementation(async (path: string) => {
        if (path.endsWith('README.mdx')) {
          return Promise.resolve(mockReadmeContent);
        }
        return Promise.resolve('Other template content');
      });

      await createComponent({
        name: 'Button',
        description: 'A reusable button component',
      });

      // Find the README.mdx write operation
      const writeFileCalls = (fs.writeFile as jest.Mock).mock.calls;
      const readmeWriteCall = writeFileCalls.find((call) =>
        call[0].endsWith('README.mdx'),
      );

      expect(readmeWriteCall).not.toBeNull();
      const updatedContent = readmeWriteCall[1];

      // Verify the import statement was updated
      expect(updatedContent).toContain(
        "import { Button } from '@metamask/design-system-react';",
      );

      // Verify the component usage was updated
      expect(updatedContent).toContain('<Button />;');

      // Verify the component name in the title and description was updated
      expect(updatedContent).toContain('# Button');
      expect(updatedContent).not.toContain('# ComponentName');
    });

    it('should preserve README.mdx content structure while updating component references', async () => {
      // Mock fs.access to throw ENOENT
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      // Mock a more complex README.mdx template
      const mockReadmeContent = `
import { Controls, Canvas } from '@storybook/blocks';

import * as ComponentNameStories from './ComponentName.stories';

# ComponentName

ComponentName is used to render standardized elements within an interface.

\`\`\`tsx
import { ComponentName } from '@metamask/design-system-react';

<ComponentName />;
\`\`\`

<Canvas of={ComponentNameStories.Default} />
      `;

      (fs.readFile as jest.Mock).mockImplementation(async (path: string) => {
        if (path.endsWith('README.mdx')) {
          return Promise.resolve(mockReadmeContent);
        }
        return Promise.resolve('Other template content');
      });

      await createComponent({
        name: 'Button',
        description: 'A reusable button component',
      });

      // Find the README.mdx write operation
      const writeFileCalls = (fs.writeFile as jest.Mock).mock.calls;
      const readmeWriteCall = writeFileCalls.find((call) =>
        call[0].endsWith('README.mdx'),
      );

      expect(readmeWriteCall).not.toBeNull();
      const updatedContent = readmeWriteCall[1];

      // Verify the structure is preserved
      expect(updatedContent).toContain(
        "import { Controls, Canvas } from '@storybook/blocks';",
      );
      expect(updatedContent).toContain('import * as ButtonStories from ');
      expect(updatedContent).toContain('<Canvas of={ButtonStories.Default} />');
    });
  });
});
