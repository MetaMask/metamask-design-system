// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { Icon } from './Icon';

import { IconSize } from '.';

/**
 * React Native implementation of Icon component.
 * `name` uses figma.instance against glyph connects in IconGlyphs.figma.tsx.
 */

figma.connect(
  Icon,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=1%3A2554',
  {
    props: {
      name: figma.instance<string>('name'),
      size: figma.enum('size', {
        Xs: IconSize.Xs,
        Sm: IconSize.Sm,
        Md: IconSize.Md,
        Lg: IconSize.Lg,
        Xl: IconSize.Xl,
      }),
    },
    example: ({ name, size }) => <Icon name={name} size={size} />,
  },
);
