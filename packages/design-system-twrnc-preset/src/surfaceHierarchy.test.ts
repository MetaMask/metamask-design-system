import { Theme } from './Theme.types';
import {
  getElevatedListItemClass,
  getElevatedSurfaceClass,
  getScreenSurfaceClass,
} from './surfaceHierarchy';

describe('surfaceHierarchy', () => {
  describe('getElevatedSurfaceClass', () => {
    it('returns bg-default for light theme', () => {
      expect(getElevatedSurfaceClass(Theme.Light, true)).toBe('bg-default');
      expect(getElevatedSurfaceClass(Theme.Light, false)).toBe('bg-default');
    });

    it('returns bg-default for standard dark theme', () => {
      expect(getElevatedSurfaceClass(Theme.Dark, false)).toBe('bg-default');
    });

    it('returns bg-alternative for pure-black dark theme', () => {
      expect(getElevatedSurfaceClass(Theme.Dark, true)).toBe('bg-alternative');
    });
  });

  describe('getScreenSurfaceClass', () => {
    it('always returns bg-default', () => {
      expect(getScreenSurfaceClass()).toBe('bg-default');
    });
  });

  describe('getElevatedListItemClass', () => {
    it('returns bg-section when selected', () => {
      expect(
        getElevatedListItemClass(Theme.Dark, true, { isSelected: true }),
      ).toBe('bg-section');
    });

    it('returns empty string for unselected rows in pure-black dark mode', () => {
      expect(getElevatedListItemClass(Theme.Dark, true)).toBe('');
    });

    it('returns bg-default for unselected rows outside pure-black dark mode', () => {
      expect(getElevatedListItemClass(Theme.Dark, false)).toBe('bg-default');
      expect(getElevatedListItemClass(Theme.Light, true)).toBe('bg-default');
    });
  });
});
