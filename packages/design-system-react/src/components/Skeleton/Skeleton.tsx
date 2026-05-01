import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';

import type { SkeletonProps } from './Skeleton.types';

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      height,
      width,
      children,
      hideChildren = false,
      autoPlay = true,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const hasChildren = children !== null && children !== undefined;

    // Pass-through case (matches RN `BottomSheet` Skeleton): when children
    // are provided and we're not asked to hide them, render the children
    // directly without any skeleton overlay or animation.
    if (!hideChildren && hasChildren) {
      return <>{children}</>;
    }

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={twMerge('relative overflow-hidden rounded', className)}
        style={{ height, width, ...style }}
        {...props}
      >
        <div
          aria-hidden="true"
          className={twMerge(
            'pointer-events-none absolute inset-0 rounded bg-icon-alternative',
            autoPlay && 'motion-safe:animate-skeleton-pulse',
          )}
        />
        {hasChildren && (
          <div
            aria-hidden="true"
            // Children render invisibly so the skeleton container takes its
            // natural layout dimensions. They're hidden from assistive tech
            // (the wrapping skeleton is already `aria-hidden`).
            className="pointer-events-none invisible relative z-10"
          >
            {children}
          </div>
        )}
      </div>
    );
  },
);

Skeleton.displayName = 'Skeleton';
