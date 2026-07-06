import {
  extractAccountAddress,
  generateIconSeed,
} from '@metamask/design-system-shared';
import jazzicon from '@metamask/jazzicon';
import React, { useEffect, useRef } from 'react';

import { twMerge } from '../../../utils/tw-merge';

import type { JazziconProps } from './Jazzicon.types';

/**
 * Cache for storing generated SVG elements by `address:diameter` so
 * we don't regenerate them repeatedly.
 */
const iconCache: Record<string, HTMLDivElement> = {};

export const Jazzicon = ({
  address,
  size = 32,
  className,
  ...props
}: JazziconProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return () => {
        // No cleanup needed if container ref was null
      };
    }

    // Clear any existing content
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // Check the cache
    const cacheKey = `${address.toLowerCase()}:${size}`;
    if (iconCache[cacheKey]) {
      // If cached, just append a clone
      const clone = iconCache[cacheKey].cloneNode(true) as HTMLDivElement;
      containerRef.current.appendChild(clone);
      return () => {
        if (containerRef.current) {
          while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
          }
        }
      };
    }

    // Extract the account address from CAIP-10 format if needed
    const accountAddress = extractAccountAddress(address);

    // Generate appropriate seed based on address format
    const seed = generateIconSeed(accountAddress);

    // Create Jazzicon
    const newIcon = jazzicon(size, seed) as HTMLDivElement;

    // Cache it
    iconCache[cacheKey] = newIcon as HTMLDivElement;

    // Append a fresh clone
    if (containerRef.current) {
      containerRef.current.appendChild(newIcon.cloneNode(true));
    }

    // Cleanup
    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [address, size]);

  return (
    <div
      ref={containerRef}
      className={twMerge('flex [&>div]:!rounded-none', className)}
      {...props}
    />
  );
};

Jazzicon.displayName = 'Jazzicon';
