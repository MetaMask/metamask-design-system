import { getResolvedStyle, resolvedStyleIncludes } from './styles';

describe('test-utils/styles', () => {
  describe('getResolvedStyle', () => {
    it('returns merged style object for style arrays', () => {
      expect(
        getResolvedStyle([{ opacity: 0.5 }, { backgroundColor: 'blue' }]),
      ).toStrictEqual({
        opacity: 0.5,
        backgroundColor: 'blue',
      });
    });

    it('returns an empty object when flattened style is not an object', () => {
      expect(getResolvedStyle('not-a-style-object')).toStrictEqual({});
    });
  });

  describe('resolvedStyleIncludes', () => {
    it('returns true when resolved style contains expected style', () => {
      expect(
        resolvedStyleIncludes([{ opacity: 1 }, { backgroundColor: 'black' }], {
          backgroundColor: 'black',
        }),
      ).toBe(true);
    });

    it('returns false when resolved style does not contain expected style', () => {
      expect(
        resolvedStyleIncludes([{ opacity: 1 }], { backgroundColor: 'black' }),
      ).toBe(false);
    });
  });
});
