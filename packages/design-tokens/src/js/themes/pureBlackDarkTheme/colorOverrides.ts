import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';
import type { DeepPartial } from '../utils/deepMerge';

/**
 * Token deltas applied on top of darkTheme to produce pureBlackDarkTheme.
 * Only values that differ from grey dark are listed here.
 */
export const pureBlackDarkColorOverrides = {
  background: {
    default: '#000000',
    alternative: '#0d0d0f',
    section: '#18181b',
    subsection: '#222226',
    muted: '#e2e2ff1b',
    defaultHover: '#18181b',
    defaultPressed: '#222226',
    mutedHover: '#e2e2ff26',
    mutedPressed: '#e2e2ff30',
    hover: '#e2e2ff1b',
    pressed: '#e2e2ff30',
  },
  text: {
    muted: brandColor.grey500,
  },
  icon: {
    muted: brandColor.grey500,
    inverse: '#0d0d0f',
  },
  border: {
    muted: '#e2e2ff33',
  },
  primary: {
    inverse: '#0d0d0f',
  },
  error: {
    inverse: '#0d0d0f',
  },
  warning: {
    inverse: '#0d0d0f',
  },
  success: {
    inverse: '#0d0d0f',
  },
  info: {
    inverse: '#0d0d0f',
  },
  flask: {
    inverse: '#0d0d0f',
  },
} satisfies DeepPartial<ThemeColors>;
