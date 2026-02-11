import { AnimationDuration } from './durations';

describe('AnimationDuration', () => {
  it('Instantly is 0ms', () => {
    expect(AnimationDuration.Instantly).toBe(0);
  });

  it('Immediately is 50ms', () => {
    expect(AnimationDuration.Immediately).toBe(50);
  });

  it('Quickly is 100ms', () => {
    expect(AnimationDuration.Quickly).toBe(100);
  });

  it('Fast is 150ms', () => {
    expect(AnimationDuration.Fast).toBe(150);
  });

  it('Promptly is 200ms', () => {
    expect(AnimationDuration.Promptly).toBe(200);
  });

  it('Regularly is 300ms', () => {
    expect(AnimationDuration.Regularly).toBe(300);
  });

  it('Slowly is 400ms', () => {
    expect(AnimationDuration.Slowly).toBe(400);
  });
});
