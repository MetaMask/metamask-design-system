import jazzicon from '@metamask/jazzicon';
import { KnownCaipNamespace } from '@metamask/utils';
import React, { useEffect, useRef } from 'react';

import { JazziconProps } from './Jazzicon.types';
import {
  generateSeedEthereum,
  generateSeedNonEthereum,
  getCaipNamespaceFromAddress,
} from './Jazzicon.utilities';

/**
 * Cache for storing generated SVG elements by `address:diameter` so
 * we don't regenerate them repeatedly.
 */
const iconCache: Record<string, HTMLDivElement> = {};

export const Jazzicon = ({ address, size = 32, ...props }: JazziconProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isCancelled = false;

    (async () => {
      if (!containerRef.current) {
        return;
      }
      // Clear any existing content
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }

      // Check the cache
      const cacheKey = `${address.toLowerCase()}:${size}`;
      if (iconCache[cacheKey]) {
        // If cached, just append a clone
        if (!isCancelled) {
          const clone = iconCache[cacheKey].cloneNode(true) as HTMLDivElement;
          containerRef.current.appendChild(clone);
        }
        return;
      }

      // Determine the CAIP namespace
      const namespace = await getCaipNamespaceFromAddress(address);
      if (isCancelled) {
        return;
      }

      // Pick seeding strategy based on namespace
      let seed: number | number[];
      if (namespace === KnownCaipNamespace.Eip155) {
        seed = generateSeedEthereum(address);
      } else {
        seed = generateSeedNonEthereum(address);
      }

      // Create Jazzicon
      const newIcon = jazzicon(size, seed) as HTMLDivElement;

      // Cache it
      iconCache[cacheKey] = newIcon as HTMLDivElement;

      // Append a fresh clone
      if (!isCancelled && containerRef.current) {
        containerRef.current.appendChild(newIcon.cloneNode(true));
      }
    })();

    // Cleanup
    return () => {
      isCancelled = true;
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [address, size]);

  return <div ref={containerRef} {...props} />;
};

Jazzicon.displayName = 'Jazzicon';
