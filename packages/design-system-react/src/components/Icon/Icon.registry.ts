import type { IconName } from '@metamask/design-system-shared';
import type { LazyExoticComponent } from 'react';
import { lazy } from 'react';

import type { IconComponentType } from './icons';
import { iconLoaders, isIconName } from './icons';

const lazyIconCache = new Map<
  IconName,
  LazyExoticComponent<IconComponentType>
>();

/**
 * Returns a cached React.lazy wrapper for the given icon name.
 * Each icon is loaded on demand via dynamic import, enabling per-icon
 * code splitting instead of bundling all ~291 icons upfront.
 *
 * @param name - The icon name to resolve.
 * @returns A lazy-loaded icon component.
 */
export function getLazyIcon(
  name: IconName,
): LazyExoticComponent<IconComponentType> {
  let lazyIcon = lazyIconCache.get(name);

  if (!lazyIcon) {
    lazyIcon = lazy(iconLoaders[name]);
    lazyIconCache.set(name, lazyIcon);
  }

  return lazyIcon;
}

/**
 * Preloads an icon module so it is available synchronously on the next render.
 * Useful for warming commonly used icons before they appear on screen.
 *
 * @param name - The icon name to preload.
 * @returns A promise that resolves when the icon module has loaded.
 */
export function preloadIcon(name: IconName): Promise<void> {
  return iconLoaders[name]().then(() => undefined);
}

export { isIconName };
