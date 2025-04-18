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
    it('should handle small variant overrides', () => {
      const result = twMerge('text-s-body-md text-s-heading-lg');
      expect(result).toBe('text-s-heading-lg');
    });

    it('should handle large variant overrides', () => {
      const result = twMerge('text-l-body-md text-l-heading-lg');
      expect(result).toBe('text-l-heading-lg');
    });

    it('should handle mixed size variant overrides', () => {
      const result = twMerge('text-l-heading-lg text-s-body-md');
      expect(result).toBe('text-s-body-md');
    });
  });

  describe('font weight conflicts', () => {
    it('should handle standard Tailwind font weight overrides', () => {
      const result = twMerge('font-bold font-normal');
      expect(result).toBe('font-normal');
    });

    it('should handle custom typography font weight overrides', () => {
      const result = twMerge('font-s-body-md font-l-heading-lg');
      expect(result).toBe('font-l-heading-lg');
    });

    it('should handle mixed standard and custom font weight overrides', () => {
      const result = twMerge('font-s-body-md font-bold');
      expect(result).toBe('font-bold');
    });
  });

  describe('complex class combinations', () => {
    it('should handle multiple property conflicts simultaneously', () => {
      const result = twMerge('text-l-heading-lg font-bold text-alternative');
      expect(result).toBe('text-l-heading-lg font-bold text-alternative');
    });

    it('should preserve non-conflicting classes', () => {
      const result = twMerge('px-4 py-2 font-bold text-alternative');
      expect(result).toBe('px-4 py-2 font-bold text-alternative');
    });
  });

  describe('variant class validation', () => {
    it('should handle all small variant classes', () => {
      const smallVariants = [
        'text-s-display-md',
        'text-s-heading-lg',
        'text-s-heading-md',
        'text-s-heading-sm',
        'text-s-body-lg',
        'text-s-body-md',
        'text-s-body-sm',
        'text-s-body-xs',
      ];

      const result = twMerge(smallVariants.join(' '));
      expect(result).toBe('text-s-body-xs'); // Should keep last one
    });

    it('should handle all large variant classes', () => {
      const largeVariants = [
        'text-l-display-md',
        'text-l-heading-lg',
        'text-l-heading-md',
        'text-l-heading-sm',
        'text-l-body-lg',
        'text-l-body-md',
        'text-l-body-sm',
        'text-l-body-xs',
      ];

      const result = twMerge(largeVariants.join(' '));
      expect(result).toBe('text-l-body-xs'); // Should keep last one
    });
  });
});
