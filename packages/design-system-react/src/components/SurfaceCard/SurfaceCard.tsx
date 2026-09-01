import React, { forwardRef } from 'react';

type SurfaceCardProps = {
  children: React.ReactNode;
};

export const SurfaceCard = forwardRef<HTMLDivElement, SurfaceCardProps>(
  ({ children }, ref) => (
    <div
      ref={ref}
      className="rounded-24 border border-muted bg-default p-4"
    >
      {children}
    </div>
  ),
);

SurfaceCard.displayName = 'SurfaceCard';
