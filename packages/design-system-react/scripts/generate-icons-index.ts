import * as fs from 'fs/promises';
import * as path from 'path';

/** Path to the directory containing icon components */
const ICONS_DIR = path.join(__dirname, '../src/components/icon/icons');
/** Path to the Icon types definition file */
const TYPES_FILE = path.join(__dirname, '../src/types/index.ts');

/**
 * Generates the index file for icon components and updates the IconName enum.
 *
 * This script:
 * 1. Creates an index.ts file that exports all icon components
 * 2. Updates the IconName enum in Icon.types.ts to match available icons
 *
 * The generated files are used to:
 * - Provide a central export point for all icon components
 * - Maintain type safety when using icons throughout the application
 *
 * @throws {Error} If file operations fail or icon generation encounters an error
 * @returns Promise that resolves when the files are generated
 */
export const generateIconsIndex = async (): Promise<void> => {
  try {
    // First check if directory exists
    try {
      await fs.access(ICONS_DIR);
    } catch {
      throw new Error(`Icons directory not found: ${ICONS_DIR}`);
    }

    const files = (await fs.readdir(ICONS_DIR))
      .filter((file: string) => file.endsWith('.tsx'))
      .map((file: string) => file.replace('.tsx', ''));

    // Throw error if no icon files are found
    if (files.length === 0) {
      throw new Error('No icon files found in icons directory');
    }

    // Generate index content with proper import ordering and newlines
    const indexContent = `// This file is auto-generated. Do not edit manually
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

${files.map((name) => `import ${name} from './${name}';`).join('\n')}

export const Icons = {
${files.map((name) => `  ${name},`).join('\n')}
} as const;

export type IconComponentType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>;

export type IconsType = typeof Icons;
`;

    await fs.writeFile(path.join(ICONS_DIR, 'index.ts'), indexContent);

    // Update IconName enum with trailing commas
    const enumContent = files
      .map((name: string) => `  ${name} = '${name}',`)
      .join('\n');

    const typesContent = await fs.readFile(TYPES_FILE, 'utf8');
    const updatedTypesContent = typesContent.replace(
      /export enum IconName \{[\s\S]*?\}/u,
      `export enum IconName {\n${enumContent}\n}`,
    );

    await fs.writeFile(TYPES_FILE, updatedTypesContent);
  } catch (error) {
    // Improve error handling with more context
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to generate icons index: ${errorMessage}`);
  }
};

// Improve the error handling in the execution
if (require.main === module) {
  generateIconsIndex().catch((error) => {
    console.error('Error details:', error);
    throw error;
  });
}
