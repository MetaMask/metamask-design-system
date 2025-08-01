// eslint-disable-next-line @typescript-eslint/no-shadow
import { jest } from '@jest/globals';
import type { Dirent } from 'fs';
import * as fs from 'fs/promises';

import { generateIconsIndex } from './generate-icons-index';

// Mock fs/promises
jest.mock('fs/promises');
const mockedFs = jest.mocked(fs);

describe('generateIconsIndex', () => {
  // Add interface for better type handling
  type MockFiles = {
    'types-index.ts': string;
    'icons-index.ts': string;
  };

  const mockFiles: MockFiles = {
    'types-index.ts': `
      // Other content
      export enum IconName {
        OldIcon = 'OldIcon',
      }
      // More content
    `,
    'icons-index.ts': '',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // Improve mock setup with type safety
    mockedFs.readdir.mockResolvedValue([
      'Icon1.tsx',
      'Icon2.tsx',
      'Icon3.tsx',
    ] as unknown as Dirent[]);

    // Use mockFiles object for consistent file content
    // @ts-expect-error - Mocking the function with a string parameter
    mockedFs.readFile.mockImplementation(async (filePath: string) => {
      if (filePath.includes('/src/types/index.ts')) {
        return mockFiles['types-index.ts'];
      }
      throw new Error(`Unexpected file read: ${filePath}`);
    });

    mockedFs.writeFile.mockImplementation(
      // @ts-expect-error - Mocking the function with a string parameter
      async (path: string, content: string) => {
        const filePath = path.toString();
        if (filePath.includes('/src/types/index.ts')) {
          mockFiles['types-index.ts'] = content;
        } else if (filePath.includes('/src/components/Icon/icons/index.ts')) {
          mockFiles['icons-index.ts'] = content;
        }
        return undefined;
      },
    );
  });

  it('should generate index.ts with correct content', async () => {
    await generateIconsIndex();

    const expectedIndexContent = `// This file is auto-generated. Do not edit manually
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

import Icon1 from './Icon1';
import Icon2 from './Icon2';
import Icon3 from './Icon3';

export const Icons = {
  Icon1,
  Icon2,
  Icon3,
} as const;

export type IconComponentType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>;

export type IconsType = typeof Icons;
`;

    expect(mockedFs.writeFile).toHaveBeenCalledWith(
      expect.stringContaining('/src/components/Icon/icons/index.ts'),
      expectedIndexContent,
    );
  });

  it('should update Icon.types.ts with new enum values', async () => {
    await generateIconsIndex();

    const expectedEnumContent = `export enum IconName {
  Icon1 = 'Icon1',
  Icon2 = 'Icon2',
  Icon3 = 'Icon3',
}`;

    expect(mockedFs.writeFile).toHaveBeenCalledWith(
      expect.stringContaining('/src/types/index.ts'),
      expect.stringContaining(expectedEnumContent),
    );
  });

  it('should filter out non-tsx files', async () => {
    mockedFs.readdir.mockResolvedValue([
      'Icon1.tsx',
      'README.md',
      'Icon2.tsx',
      '.DS_Store',
    ] as unknown as Dirent[]);

    await generateIconsIndex();

    const writeFileCalls = mockedFs.writeFile.mock.calls;
    const iconsIndexFileCall = writeFileCalls.find((call) =>
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      call[0].toString().includes('/src/components/Icon/icons/index.ts'),
    );
    const iconsIndexFileContent = iconsIndexFileCall?.[1] as string;

    expect(iconsIndexFileContent).toContain('import Icon1');
    expect(iconsIndexFileContent).toContain('import Icon2');
    expect(iconsIndexFileContent).not.toContain('README');
    expect(iconsIndexFileContent).not.toContain('.DS_Store');
  });

  it('should throw error when file operations fail', async () => {
    mockedFs.readdir.mockRejectedValue(new Error('Failed to read directory'));

    await expect(generateIconsIndex()).rejects.toThrow(
      /Failed to (generate icons index|read directory)/u,
    );
  });

  it('should throw error when directory is empty', async () => {
    mockedFs.readdir.mockResolvedValue([] as unknown as Dirent[]);

    await expect(generateIconsIndex()).rejects.toThrow(
      'Failed to generate icons index: No icon files found in icons directory',
    );

    expect(mockedFs.writeFile).not.toHaveBeenCalled();
  });
});
