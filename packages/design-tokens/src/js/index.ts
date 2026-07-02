// DEPRECATED in favor of importing lightTheme and darkTheme
export { colors } from './colors';

// Brand Color
export { brandColor } from './brandColor';
export type { BrandColor } from './brandColor/brandColor.types';

// Themes
export { lightTheme, darkTheme, pureBlackDarkTheme } from './themes';
export type { Theme, ThemeColors, ThemeShadows } from './themes/types';

export { resolveDarkTheme } from './themes/resolveDarkTheme';

// Typography
export { typography, fontFamilies } from './typography';
export type { ThemeTypography } from './typography';

// Animations
export { AnimationDuration } from './animations';
