import React from 'react';

import {
  Box,
  BoxBackgroundColor,
  BoxBorderColor,
} from '../Box';

type SurfaceTileProps = {
  children?: React.ReactNode;
};

export const SurfaceTile: React.FC<SurfaceTileProps> = ({ children }) => (
  <Box
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    borderColor={BoxBorderColor.BorderMuted}
    borderWidth={1}
    padding={4}
    className="rounded-lg"
  >
    {children}
  </Box>
);

SurfaceTile.displayName = 'SurfaceTile';
