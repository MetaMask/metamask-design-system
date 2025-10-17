/* eslint-disable tailwindcss/no-contradicting-classname */
import { twMerge } from './tw-merge';

describe('twMerge utility', () => {
  describe('text color conflicts', () => {
    it('should override default text color with alternative', () => {
      const result = twMerge('text-alternative text-default');
      expect(result).toBe('text-default');
    });

    it('should override alternative text color with muted', () => {
      const result = twMerge('text-alternative text-muted');
      expect(result).toBe('text-muted');
    });

    it('should maintain the last text color in a sequence', () => {
      const result = twMerge('text-alternative text-default text-muted');
      expect(result).toBe('text-muted');
    });
  });

  describe('typography variant conflicts', () => {
    it('should handle typography variant overrides', () => {
      const result = twMerge('text-body-md text-heading-lg');
      expect(result).toBe('text-heading-lg');
    });

    it('should handle mixed typography variant overrides', () => {
      const result = twMerge('text-display-lg text-body-sm');
      expect(result).toBe('text-body-sm');
    });

    it('should handle page heading override', () => {
      const result = twMerge('text-section-heading text-page-heading');
      expect(result).toBe('text-page-heading');
    });
  });

  describe('font weight conflicts', () => {
    it('should handle standard Tailwind font weight overrides', () => {
      const result = twMerge('font-bold font-medium');
      expect(result).toBe('font-medium');
    });

    it('should handle mixed standard and custom font weight overrides', () => {
      const result = twMerge('font-bold font-regular');
      expect(result).toBe('font-regular');
    });
  });

  describe('complex class combinations', () => {
    it('should handle multiple property conflicts simultaneously', () => {
      const result = twMerge('text-heading-lg font-bold text-alternative');
      expect(result).toBe('text-heading-lg font-bold text-alternative');
    });

    it('should preserve non-conflicting classes', () => {
      const result = twMerge('px-4 py-2 font-bold text-alternative');
      expect(result).toBe('px-4 py-2 font-bold text-alternative');
    });

    it('should handle text color and typography together', () => {
      const result = twMerge('text-default text-body-md font-medium');
      expect(result).toBe('text-default text-body-md font-medium');
    });
  });

  describe('responsive typography validation', () => {
    it('should handle all typography variant classes', () => {
      const typographyVariants = [
        'text-display-lg',
        'text-display-md',
        'text-heading-lg',
        'text-heading-md',
        'text-heading-sm',
        'text-body-lg',
        'text-body-md',
        'text-body-sm',
        'text-body-xs',
        'text-page-heading',
        'text-section-heading',
        'text-button-label-md',
        'text-button-label-lg',
        'text-amount-display-lg',
      ];

      const result = twMerge(typographyVariants.join(' '));
      expect(result).toBe('text-amount-display-lg'); // Should keep last one
    });

    it('should handle typography conflicts with color', () => {
      const result = twMerge('text-body-md text-muted text-heading-lg text-default');
      expect(result).toBe('text-heading-lg text-default');
    });
  });
});
