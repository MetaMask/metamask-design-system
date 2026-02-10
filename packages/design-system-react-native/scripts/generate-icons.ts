/* eslint-disable import-x/no-nodejs-modules */
import fs from 'fs';
import path from 'path';
/* eslint-enable import-x/no-nodejs-modules */

const ASSETS_FOLDER = 'assets';
const GENERATED_ASSETS_FILE = 'Icon.assets.ts';
const TYPES_FILE = 'index.ts';
const ASSET_EXT = '.svg';
const TYPES_CONTENT_TO_DETECT = '// DO NOT EDIT - Use generate-assets.js';

/**
 * Gets an icon name in TitleCase from the given file name.
 *
 * @param fileName - The name of the file (including extension) to process.
 * @returns The formatted icon name in TitleCase.
 */
function getIconNameInTitleCase(fileName: string): string {
  return path
    .basename(fileName, ASSET_EXT)
    .split('-')
    .map(
      (section: string) => `${section[0].toUpperCase()}${section.substring(1)}`,
    )
    .join('');
}

/**
 * Gets the kebab-case icon name from the file name.
 *
 * @param fileName - The name of the file (including extension) to process.
 * @returns The icon name in kebab-case.
 */
function getIconNameInKebabCase(fileName: string): string {
  return path.basename(fileName, ASSET_EXT);
}

/**
 * Main entry point for the script.
 * Reads SVG files, transforms them, generates asset and type files.
 * Throws an error if anything goes wrong.
 */
export async function main(): Promise<void> {
  const assetsFolderPath = path.join(
    __dirname,
    `../src/components/Icon/${ASSETS_FOLDER}`,
  );
  const assetsModulePath = path.join(
    __dirname,
    `../src/components/Icon/${GENERATED_ASSETS_FILE}`,
  );
  const typesFilePath = path.join(__dirname, `../src/types/${TYPES_FILE}`);

  const fileList = await fs.promises.readdir(assetsFolderPath);
  const assetFileList = fileList.filter(
    (fileName: string) => path.extname(fileName) === ASSET_EXT,
  );

  // Replace the color black with currentColor (using 'gu' flag)
  for (const fileName of assetFileList) {
    const filePath = path.join(
      __dirname,
      `../src/components/Icon/${ASSETS_FOLDER}/${fileName}`,
    );
    const fileContent = await fs.promises.readFile(filePath, {
      encoding: 'utf-8',
    });
    const formattedFileContent = fileContent.replace(/black/gu, 'currentColor');
    await fs.promises.writeFile(filePath, formattedFileContent);
  }

  await fs.promises.writeFile(assetsModulePath, '');

  await fs.promises.appendFile(
    assetsModulePath,
    `// /////////////////////////////////////////////////////\n// This is a generated file\n// DO NOT EDIT - Use generate-icons.js\n// /////////////////////////////////////////////////////`,
  );

  await fs.promises.appendFile(
    assetsModulePath,
    `\nimport { IconName } from '../../types';`,
  );

  await fs.promises.appendFile(assetsModulePath, '\n');

  for (const fileName of assetFileList) {
    const iconName = getIconNameInTitleCase(fileName);
    await fs.promises.appendFile(
      assetsModulePath,
      `\nimport ${iconName}SVG from './assets/${fileName}';`,
    );
  }

  await fs.promises.appendFile(
    assetsModulePath,
    `\nimport type { AssetByIconName } from './Icon.types';`,
  );

  await fs.promises.appendFile(
    assetsModulePath,
    `\n\n/**\n * Asset stored by icon name\n */`,
  );

  await fs.promises.appendFile(
    assetsModulePath,
    `\nexport const assetByIconName: AssetByIconName = {`,
  );

  for (const fileName of assetFileList) {
    const iconName = getIconNameInTitleCase(fileName);
    await fs.promises.appendFile(
      assetsModulePath,
      `\n  [IconName.${iconName}]: ${iconName}SVG,`,
    );
  }

  await fs.promises.appendFile(assetsModulePath, '\n};\n');

  await fs.promises.appendFile(
    assetsModulePath,
    `\n/**\n * Asset stored by kebab-case icon name\n */`,
  );

  await fs.promises.appendFile(
    assetsModulePath,
    `\nexport const assetByIconNameKebab = {`,
  );

  for (const fileName of assetFileList) {
    const iconNamePascal = getIconNameInTitleCase(fileName);
    const iconNameKebab = getIconNameInKebabCase(fileName);
    await fs.promises.appendFile(
      assetsModulePath,
      `\n  '${iconNameKebab}': ${iconNamePascal}SVG,`,
    );
  }

  await fs.promises.appendFile(assetsModulePath, '\n} as const;\n');

  const typesFileContent = await fs.promises.readFile(typesFilePath, {
    encoding: 'utf8',
  });
  const indexToRemove = typesFileContent.indexOf(TYPES_CONTENT_TO_DETECT);
  const baseTypesFileContent = typesFileContent.substring(0, indexToRemove);

  let typesContentToWrite = `${
    baseTypesFileContent + TYPES_CONTENT_TO_DETECT
  }\n// /////////////////////////////////////////////////////`;

  typesContentToWrite +=
    '\n\n/**\n * Icon - name\n */\n/* eslint-disable @typescript-eslint/no-shadow */\nexport enum IconName {';

  for (const fileName of assetFileList) {
    const iconNamePascal = getIconNameInTitleCase(fileName);
    const iconNameKebab = getIconNameInKebabCase(fileName);
    typesContentToWrite += `\n  ${iconNamePascal} = '${iconNameKebab}',`;
  }

  typesContentToWrite +=
    '\n}\n/* eslint-enable @typescript-eslint/no-shadow */\n';

  await fs.promises.writeFile(typesFilePath, typesContentToWrite);

  console.log(`Finished generating icons!`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    throw error; // Throw instead of process.exit(1)
  });
}
