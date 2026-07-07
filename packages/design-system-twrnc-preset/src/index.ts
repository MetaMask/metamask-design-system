// Provider and type
export { ThemeProvider } from './ThemeProvider';
export { Theme } from './Theme.types';

// Hooks
export {
  useTailwind,
  useTheme,
  usePureBlack,
  useElevatedSurfaceClass,
  useElevatedListItemClass,
  useScreenSurfaceClass,
} from './hooks';
export type { ElevatedListItemOptions } from './surfaceHierarchy';

// Config generation
export { generateTailwindConfig } from './tailwind.config';
