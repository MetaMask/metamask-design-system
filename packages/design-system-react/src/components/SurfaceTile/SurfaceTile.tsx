import React, { forwardRef } from 'react';

type SurfaceTileProps = {
  children: React.ReactNode;
};

export const SurfaceTile = forwardRef<HTMLDivElement, SurfaceTileProps>(
  ({ children }, ref) => (
    <div
      ref={ref}
      className="rounded-8 border border-muted bg-default p-4"
    >
      {children}
    </div>
  ),
);

SurfaceTile.displayName = 'SurfaceTile';
