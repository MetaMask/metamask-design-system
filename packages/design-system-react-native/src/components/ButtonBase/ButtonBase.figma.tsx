// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { ButtonBase } from './ButtonBase';

import { ButtonBaseSize } from '.';

/**
 * React Native implementation of ButtonBase component.
 * Icon names resolve via nested startIcon/endIcon instance swaps (IconGlyphs.figma.tsx).
 */

figma.connect(
  ButtonBase,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=1%3A432',
  {
    props: {
      size: figma.enum('size', {
        Lg: ButtonBaseSize.Lg,
        Md: ButtonBaseSize.Md,
        Sm: ButtonBaseSize.Sm,
      }),
      children: figma.string('label'),
      startIconProps: figma.boolean('startIcon (Figma Only)', {
        true: figma.nestedProps('startIcon', {
          name: figma.instance<string>('name'),
        }),
        false: { name: undefined },
      }),
      endIconProps: figma.boolean('endIcon (Figma Only)', {
        true: figma.nestedProps('endIcon', {
          name: figma.instance<string>('name'),
        }),
        false: { name: undefined },
      }),
    },
    example: ({ size, startIconProps, endIconProps, children }) => (
      <ButtonBase
        size={size}
        startIconName={startIconProps.name}
        endIconName={endIconProps.name}
      >
        {children}
      </ButtonBase>
    ),
  },
);
