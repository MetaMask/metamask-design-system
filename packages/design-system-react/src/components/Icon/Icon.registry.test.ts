import { IconName } from '@metamask/design-system-shared';

import {
  getIconComponent,
  getLazyIcon,
  preloadIcon,
  preloadIconsForTests,
} from './Icon.registry';

describe('Icon.registry', () => {
  it('returns the same lazy component instance for repeated lookups', () => {
    const first = getLazyIcon(IconName.Add);
    const second = getLazyIcon(IconName.Add);

    expect(first).toBe(second);
  });

  it('preloads an icon module', async () => {
    expect(await preloadIcon(IconName.Close)).toBeUndefined();
  });

  it('returns cached synchronous components in test environment', async () => {
    await preloadIconsForTests();

    const component = getIconComponent(IconName.Add);

    expect(component).toBeDefined();
    expect(getLazyIcon(IconName.Add)).not.toBe(component);
  });

  it('falls back to lazy components when test cache is disabled', () => {
    expect(getIconComponent(IconName.Add, { useTestCache: false })).toBe(
      getLazyIcon(IconName.Add),
    );
  });
});
