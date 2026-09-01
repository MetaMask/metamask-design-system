import React from 'react';

import {
  Box,
  BoxBackgroundColor,
  BoxBorderColor,
} from '../Box';

type SurfaceCardProps = {
  children?: React.ReactNode;
};

export const SurfaceCard: React.FC<SurfaceCardProps> = ({ children }) => (
  <Box
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    borderColor={BoxBorderColor.BorderMuted}
    borderWidth={1}
    padding={4}
    className="rounded-3xl"
  >
    {children}
  </Box>
);

SurfaceCard.displayName = 'SurfaceCard';
