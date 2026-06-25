import { IconName } from '@metamask/design-system-shared';

import { getLazyIcon, preloadIcon } from './Icon.registry';

describe('Icon.registry', () => {
  it('returns the same lazy component instance for repeated lookups', () => {
    const first = getLazyIcon(IconName.Add);
    const second = getLazyIcon(IconName.Add);

    expect(first).toBe(second);
  });

  it('preloads an icon module', async () => {
    expect(await preloadIcon(IconName.Close)).toBeUndefined();
  });
});
