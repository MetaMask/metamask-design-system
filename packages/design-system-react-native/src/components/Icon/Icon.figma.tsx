// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { Icon } from './Icon';

import { IconName, IconSize } from '.';

/**
 * React Native implementation of Icon component
 * `name` prop is hard to implement because it uses .instance but we use enums in code
 */

figma.connect(
  Icon,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-WIP--MMDS-Components?node-id=1%3A2554',
  {
    props: {
      size: figma.enum('size', {
        Xs: IconSize.Xs,
        Sm: IconSize.Sm,
        Md: IconSize.Md,
        Lg: IconSize.Lg,
        Xl: IconSize.Xl,
      }),
    },
    example: ({ size, ...props }) => (
      <Icon
        name={IconName.Close} // Check the icon name in figma
        size={size}
        {...props}
      />
    ),
  },
);
