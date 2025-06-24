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

describe('create-component (React Native)', () => {
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
      'README.md',
      'index.ts',
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

    it('should throw error if name value is missing', () => {
      const args = ['--name', '--description', 'A reusable button component'];
      expect(() => parseArgs(args)).toThrow('Both --name and --description are required.');
    });

    it('should throw error if description value is missing', () => {
      const args = ['--name', 'Button', '--description'];
      expect(() => parseArgs(args)).toThrow('Both --name and --description are required.');
    });
  });

  describe('createComponent', () => {
    it('should create a new React Native component successfully', async () => {
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

      // Verify files were written (7 template files)
      expect(fs.writeFile).toHaveBeenCalledTimes(7);

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

    it('should replace sample data constants correctly', async () => {
      // Mock fs.access to throw ENOENT
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      // Mock template file content with constants placeholder
      (fs.readFile as jest.Mock).mockResolvedValue(
        'export const COMPONENT_NAME_SAMPLE_DATA = [];',
      );

      await createComponent({
        name: 'MyButton',
        description: 'A custom button component',
      });

      // Verify constant replacements
      const writeFileCalls = (fs.writeFile as jest.Mock).mock.calls;
      const replacedContent = 'export const SAMPLE_MYBUTTON_DATA = [];';

      const hasCorrectConstant = writeFileCalls.some(
        (call: [string, string, ...unknown[]]) => call[1] === replacedContent,
      );
      expect(hasCorrectConstant).toBe(true);
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

    it('should update README.md code example correctly for React Native', async () => {
      // Mock fs.access to throw ENOENT
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      // Mock README.md template content with React Native import
      const mockReadmeContent = `
# ComponentName

the component description

## Usage

\`\`\`tsx
import React from 'react';
import { ComponentName } from '@metamask/design-system-react-native';

<ComponentName />
\`\`\`
      `;

      (fs.readFile as jest.Mock).mockImplementation(async (path: string) => {
        if (path.endsWith('README.md')) {
          return Promise.resolve(mockReadmeContent);
        }
        return Promise.resolve('Other template content');
      });

      await createComponent({
        name: 'Button',
        description: 'A reusable button component',
      });

      // Find the README.md write operation
      const writeFileCalls = (fs.writeFile as jest.Mock).mock.calls;
      const readmeWriteCall = writeFileCalls.find((call) =>
        call[0].endsWith('README.md'),
      );

      expect(readmeWriteCall).not.toBeNull();
      const updatedContent = readmeWriteCall[1];

      // Verify the import statement was updated for React Native
      expect(updatedContent).toContain(
        "import { Button } from '@metamask/design-system-react-native';",
      );

      // Verify the component usage was updated
      expect(updatedContent).toContain('<Button />');

      // Verify the component name in the title was updated
      expect(updatedContent).toContain('# Button');
      expect(updatedContent).not.toContain('# ComponentName');

      // Verify the description was updated
      expect(updatedContent).toContain('A reusable button component');
    });

    it('should handle filesystem errors gracefully', async () => {
      // Mock fs.access to throw ENOENT (directory doesn't exist)
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      // Mock fs.mkdir to fail
      (fs.mkdir as jest.Mock).mockRejectedValue(
        new Error('Permission denied'),
      );

      await expect(
        createComponent({
          name: 'Button',
          description: 'A reusable button component',
        }),
      ).rejects.toThrow('Permission denied');

      // Verify no files were written if directory creation failed
      expect(fs.writeFile).not.toHaveBeenCalled();
      expect(fs.appendFile).not.toHaveBeenCalled();
    });

    it('should preserve README.md structure while updating React Native component references', async () => {
      // Mock fs.access to throw ENOENT
      (fs.access as jest.Mock).mockRejectedValue({
        code: 'ENOENT',
      });

      // Mock a complex README.md template
      const mockReadmeContent = `
# ComponentName

the component description

## Props

### \`twClassName\`

Additional Tailwind CSS classes for React Native.

## Usage

\`\`\`tsx
import React from 'react';
import { ComponentName } from '@metamask/design-system-react-native';

<ComponentName />
\`\`\`

### With Custom Styling

\`\`\`tsx
<ComponentName twClassName="bg-primary-default">
  Styled ComponentName
</ComponentName>
\`\`\`
      `;

      (fs.readFile as jest.Mock).mockImplementation(async (path: string) => {
        if (path.endsWith('README.md')) {
          return Promise.resolve(mockReadmeContent);
        }
        return Promise.resolve('Other template content');
      });

      await createComponent({
        name: 'Button',
        description: 'A reusable button component',
      });

      // Find the README.md write operation
      const writeFileCalls = (fs.writeFile as jest.Mock).mock.calls;
      const readmeWriteCall = writeFileCalls.find((call) =>
        call[0].endsWith('README.md'),
      );

      expect(readmeWriteCall).not.toBeNull();
      const updatedContent = readmeWriteCall[1];

      // Verify React Native specific content is preserved
      expect(updatedContent).toContain('twClassName');
      expect(updatedContent).toContain('Additional Tailwind CSS classes for React Native');
      
      // Verify the structure is preserved
      expect(updatedContent).toContain('## Props');
      expect(updatedContent).toContain('## Usage');
      expect(updatedContent).toContain('### With Custom Styling');
      
      // Verify component references are updated
      expect(updatedContent).toContain('<Button twClassName="bg-primary-default">');
      expect(updatedContent).toContain('Styled Button');
    });
  });
});