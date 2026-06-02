import {
  TOAST_ANIMATION_DURATION,
  TOAST_VISIBILITY_DURATION,
} from './Toast.constants';

describe('Toast.constants', () => {
  it('exports the shared toast timing constants', () => {
    expect(TOAST_VISIBILITY_DURATION).toBe(2750);
    expect(TOAST_ANIMATION_DURATION).toBe(200);
  });
});
