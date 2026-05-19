import { getAvatarInitials } from './getAvatarInitials';

describe('getAvatarInitials', () => {
  it('returns ? for empty labels', () => {
    expect(getAvatarInitials('')).toBe('?');
    expect(getAvatarInitials('   ')).toBe('?');
  });

  it('returns the first letter for a single word', () => {
    expect(getAvatarInitials('Ethereum')).toBe('E');
    expect(getAvatarInitials('  bitcoin  ')).toBe('B');
  });

  it('returns the first letter of the first two words for multiple words', () => {
    expect(getAvatarInitials('USD Coin')).toBe('UC');
    expect(getAvatarInitials('Meta  Mask')).toBe('MM');
  });
});
