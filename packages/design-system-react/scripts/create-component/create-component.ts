import { promises as fs } from 'fs';
import * as path from 'path';

/**
 * Parses command-line arguments to retrieve the component name and description.
 *
 * @throws Will throw an error if the required arguments are missing.
 */
const args = process.argv.slice(2);
const nameIndex = args.indexOf('--name');
const descIndex = args.indexOf('--description');

if (nameIndex === -1 || descIndex === -1) {
  console.error(
    'Usage: yarn create-component --name ComponentName --description "Description"',
  );
  throw new Error(
    'Usage: yarn create-component --name ComponentName --description "Description"',
  );
}

const componentName = args[nameIndex + 1];
const description = args[descIndex + 1];

if (!componentName || !description) {
  console.error('Both --name and --description are required.');
  throw new Error('Both --name and --description are required.');
}

// Convert folder name to lowercase
const folderName = componentName.toLowerCase();

// Define paths - Updated to reflect new structure
const templateDir = path.join(__dirname, 'ComponentName');
const targetDir = path.join(
  __dirname,
  '..',
  '..',
  'src',
  'components',
  folderName,
);

/**
 * Creates a new React component based on the provided name and description.
 *
 * @throws Will throw an error if the component already exists or if there's a filesystem error.
 */
export async function createComponent(): Promise<void> {
  try {
    // Check if component already exists
    try {
      await fs.access(targetDir);
      throw new Error(`Component "${componentName}" already exists.`);
    } catch (error) {
      // Directory does not exist, proceed
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        throw error;
      }
    }

    await fs.mkdir(targetDir, { recursive: true });

    const files = await fs.readdir(templateDir);
    for (const file of files) {
      const templateFilePath = path.join(templateDir, file);
      let content = await fs.readFile(templateFilePath, 'utf8');

      // Replace placeholders in content
      content = content.replace(/ComponentName/gu, componentName);
      content = content.replace(
        /ComponentNameProps/gu,
        `${componentName}Props`,
      );
      content = content.replace(/the component description/gu, description);
      content = content.replace(
        /COMPONENT_NAME_CLASSMAP/gu,
        `${componentName.toUpperCase()}_CLASSMAP`,
      );

      // Replace placeholders in file names
      const targetFileName = file.replace(/ComponentName/gu, componentName);
      const targetFilePath = path.join(targetDir, targetFileName);

      await fs.writeFile(targetFilePath, content, 'utf8');
    }

    // Update src/components/index.ts
    const componentsIndexPath = path.join(
      __dirname,
      '..',
      '..',
      'src',
      'components',
      'index.ts',
    );
    const exportStatement = `
export { ${componentName} } from './${folderName}';
export type { ${componentName}Props } from './${folderName}';
`;

    await fs.appendFile(componentsIndexPath, exportStatement, 'utf8');

    console.log(`Component "${componentName}" has been created successfully.`);
  } catch (error) {
    console.error('Error creating component:', error);
    throw error;
  }
}
