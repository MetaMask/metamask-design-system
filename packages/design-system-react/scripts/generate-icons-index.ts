import * as fs from 'fs/promises';
import * as path from 'path';

const ICONS_DIR = path.join(__dirname, '../src/components/icon/icons');
const TYPES_FILE = path.join(__dirname, '../src/components/icon/Icon.types.ts');

// Generate icons index file
const generateIconsIndex = async (): Promise<void> => {
  const files = (await fs.readdir(ICONS_DIR))
    .filter((file: string) => file.endsWith('.tsx'))
    .map((file: string) => file.replace('.tsx', ''));

  const indexContent = `// This file is auto-generated. Do not edit manually
${files.map((name) => `import ${name} from './${name}';`).join('\n')}

export const Icons = {
${files.map((name) => `  ${name},`).join('\n')}
} as const;

export type IconComponentType = (typeof Icons)[keyof typeof Icons];
`;

  await fs.writeFile(path.join(ICONS_DIR, 'index.ts'), indexContent);

  // Update IconName enum
  const enumContent = files
    .map((name: string) => `  ${name} = '${name}'`)
    .join(',\n');

  const typesContent = await fs.readFile(TYPES_FILE, 'utf8');
  const updatedTypesContent = typesContent.replace(
    /export enum IconName \{[\s\S]*?\}/u,
    `export enum IconName {\n${enumContent}\n}`,
  );

  await fs.writeFile(TYPES_FILE, updatedTypesContent);
};

// Execute and handle any errors
generateIconsIndex().catch((error) => {
  console.error('Error generating icons index:', error);
  throw new Error('Failed to generate icons index');
});
