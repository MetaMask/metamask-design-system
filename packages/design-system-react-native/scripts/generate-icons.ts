#!/usr/bin/env ts-node
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-description */
/* eslint-disable n/shebang */
/* eslint-disable import/no-commonjs, import/no-nodejs-modules, import/no-nodejs-modules, no-console */

import fs from 'fs';
import path from 'path';

const ASSETS_FOLDER = 'assets';
const GENERATED_ASSETS_FILE = 'Icon.assets.ts';
const TYPES_FILE = 'Icon.types.ts';
const ASSET_EXT = '.svg';
const TYPES_CONTENT_TO_DETECT = '// DO NOT EDIT - Use generate-assets.js';

/**
 * Gets an icon name in TitleCase from the given file name.
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
  const typesFilePath = path.join(
    __dirname,
    `../src/components/Icon/${TYPES_FILE}`,
  );

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
    `/* eslint-disable import/prefer-default-export */`,
  );

  await fs.promises.appendFile(
    assetsModulePath,
    `\n// /////////////////////////////////////////////////////\n// This is a generated file\n// DO NOT EDIT - Use generate-assets.js\n// /////////////////////////////////////////////////////`,
  );

  // Append the SVG imports first
  for (const fileName of assetFileList) {
    const iconName = getIconNameInTitleCase(fileName);
    await fs.promises.appendFile(
      assetsModulePath,
      `\nimport ${iconName}SVG from './assets/${fileName}';`,
    );
  }

  // Separate IconName (runtime) and AssetByIconName (type-only) imports
  await fs.promises.appendFile(
    assetsModulePath,
    `\nimport { IconName } from './Icon.types';`,
  );
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

  const typesFileContent = await fs.promises.readFile(typesFilePath, {
    encoding: 'utf8',
  });
  const indexToRemove = typesFileContent.indexOf(TYPES_CONTENT_TO_DETECT);
  const baseTypesFileContent = typesFileContent.substring(0, indexToRemove);

  let typesContentToWrite = `${
    baseTypesFileContent + TYPES_CONTENT_TO_DETECT
  }\n// /////////////////////////////////////////////////////`;

  typesContentToWrite += '\n\n/**\n * Icon names\n */\nexport enum IconName {';

  for (const fileName of assetFileList) {
    const iconName = path
      .basename(fileName, ASSET_EXT)
      .split('-')
      .map(
        (section: string) =>
          `${section[0].toUpperCase()}${section.substring(1, section.length)}`,
      )
      .join('');
    typesContentToWrite += `\n  ${iconName} = '${iconName}',`;
  }

  typesContentToWrite += '\n}\n';

  await fs.promises.writeFile(typesFilePath, typesContentToWrite);

  console.log(`✅ Finished generating icons! 🎉🎉`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    throw error; // Throw instead of process.exit(1)
  });
}
