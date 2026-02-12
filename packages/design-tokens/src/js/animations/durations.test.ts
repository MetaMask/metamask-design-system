import { AnimationDuration } from './durations';

describe('AnimationDuration', () => {
  it('instantly is 0ms', () => {
    expect(AnimationDuration.Instantly).toBe(0);
  });

  it('immediately is 50ms', () => {
    expect(AnimationDuration.Immediately).toBe(50);
  });

  it('quickly is 100ms', () => {
    expect(AnimationDuration.Quickly).toBe(100);
  });

  it('fast is 150ms', () => {
    expect(AnimationDuration.Fast).toBe(150);
  });

  it('promptly is 200ms', () => {
    expect(AnimationDuration.Promptly).toBe(200);
  });

  it('regularly is 300ms', () => {
    expect(AnimationDuration.Regularly).toBe(300);
  });

  it('slowly is 400ms', () => {
    expect(AnimationDuration.Slowly).toBe(400);
  });
});
