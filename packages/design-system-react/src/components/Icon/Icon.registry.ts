import type { IconName } from '@metamask/design-system-shared';
import type { LazyExoticComponent } from 'react';
import { lazy } from 'react';

import type { IconComponentType } from './icons';
import { iconLoaders, isIconName } from './icons';

const lazyIconCache = new Map<
  IconName,
  LazyExoticComponent<IconComponentType>
>();

const testIconCache = new Map<IconName, IconComponentType>();

let testPreloadPromise: Promise<void> | undefined;

/**
 * Preloads all icon modules for the Jest test environment.
 * Icons are cached as synchronous components so tests can query the DOM
 * immediately without waiting for React.lazy resolution.
 *
 * @returns A promise that resolves when all icons are cached.
 */
export function preloadIconsForTests(): Promise<void> {
  testPreloadPromise ??= Promise.all(
    Object.entries(iconLoaders).map(async ([name, loader]) => {
      const mod = await loader();
      testIconCache.set(name as IconName, mod.default);
    }),
  ).then(() => undefined);

  return testPreloadPromise;
}

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

type GetIconComponentOptions = {
  useTestCache?: boolean;
};

/**
 * Resolves an icon component for rendering.
 * Returns a synchronously cached component when present in the test preload
 * cache (populated by preloadIconsForTests()). Otherwise returns a React.lazy
 * wrapper for per-icon code splitting.
 *
 * @param name - The icon name to resolve.
 * @param options - Optional resolver configuration.
 * @param options.useTestCache - When false, skips the test preload cache.
 * @returns The icon component to render.
 */
export function getIconComponent(
  name: IconName,
  options?: GetIconComponentOptions,
): IconComponentType | LazyExoticComponent<IconComponentType> {
  if (options?.useTestCache !== false) {
    const cachedTestIcon = testIconCache.get(name);

    if (cachedTestIcon) {
      return cachedTestIcon;
    }
  }

  return getLazyIcon(name);
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
