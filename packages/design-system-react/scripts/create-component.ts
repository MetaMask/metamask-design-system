import * as fs from 'fs';
import * as path from 'path';

// Parse command-line arguments
const args = process.argv.slice(2);
const nameIndex = args.indexOf('--name');
const descIndex = args.indexOf('--description');

if (nameIndex === -1 || descIndex === -1) {
  console.error(
    'Usage: yarn create-component --name ComponentName --description "Description"',
  );
  process.exit(1);
}

const componentName = args[nameIndex + 1];
const description = args[descIndex + 1];

if (!componentName || !description) {
  console.error('Both --name and --description are required.');
  process.exit(1);
}

// Convert folder name to lowercase
const folderName = componentName.toLowerCase();

// Define paths
const templateDir = path.join(__dirname, 'component-template', 'ComponentName');
const targetDir = path.join(__dirname, '..', 'src', 'components', folderName);

// Check if component already exists
if (fs.existsSync(targetDir)) {
  console.error(`Component "${componentName}" already exists.`);
  process.exit(1);
}

// Copy and rename template files
fs.mkdirSync(targetDir, { recursive: true });

fs.readdirSync(templateDir).forEach((file: string) => {
  const templateFilePath = path.join(templateDir, file);
  let content = fs.readFileSync(templateFilePath, 'utf8');

  // Replace placeholders in content
  content = content.replace(/ComponentName/g, componentName);
  content = content.replace(/ComponentNameProps/g, `${componentName}Props`);
  content = content.replace(/the component description/g, description);
  content = content.replace(
    /COMPONENT_NAME_CLASSMAP/g,
    `${componentName.toUpperCase()}_CLASSMAP`,
  );

  // Replace placeholders in file names
  const targetFileName = file.replace(/ComponentName/g, componentName);
  const targetFilePath = path.join(targetDir, targetFileName);

  fs.writeFileSync(targetFilePath, content, 'utf8');
});

// Update src/components/index.ts
const componentsIndexPath = path.join(
  __dirname,
  '..',
  'src',
  'components',
  'index.ts',
);
const exportStatement = `export { ${componentName} } from './${folderName}';
export type { ${componentName}Props } from './${folderName}';
`;

fs.appendFileSync(componentsIndexPath, exportStatement, 'utf8');

console.log(`Component "${componentName}" has been created successfully.`);
