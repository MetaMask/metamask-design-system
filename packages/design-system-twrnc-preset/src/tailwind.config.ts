import type { TwConfig } from 'twrnc';

import { generateTailwindConfig } from './generateTailwindConfig';
import { Theme } from './Theme.types';

/**
 * Default content paths for React Native projects
 */
const defaultContent = [
  './src/**/*.{js,jsx,ts,tsx}',
  './app/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}',
  './screens/**/*.{js,jsx,ts,tsx}',
];

/**
 * Converts TWRNC config to standard Tailwind CSS config format
 *
 * @param twrncConfig - The TWRNC configuration object
 * @param content - Array of content paths for Tailwind to scan
 * @returns A Tailwind CSS configuration object
 */
const convertToTailwindConfig = (
  twrncConfig: TwConfig,
  content: string[] = defaultContent,
): TwConfig & { content: string[] } => {
  return {
    content,
    ...twrncConfig,
  };
};

/**
 * Tailwind configuration for IntelliSense
 * Uses light theme colors since classnames are theme agnostic
 */
const config = convertToTailwindConfig(generateTailwindConfig(Theme.Light));

/**
 * Default export
 */
export default config;

/**
 * Function to generate config with custom content paths
 *
 * @param content - Array of content paths for Tailwind to scan
 * @returns A Tailwind CSS configuration object with custom content paths
 */
export const createTailwindConfig = (
  content: string[] = defaultContent,
): TwConfig & { content: string[] } => {
  return convertToTailwindConfig(generateTailwindConfig(Theme.Light), content);
};
