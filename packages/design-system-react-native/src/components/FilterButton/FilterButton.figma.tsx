// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import {
  ButtonBaseSize,
  FilterButtonVariant,
} from '@metamask/design-system-shared';
import type { IconName } from '@metamask/design-system-shared';
import React from 'react';

import { FilterButton } from './FilterButton';

/**
 * React Native implementation of FilterButton component.
 * Icon names resolve via nested _ButtonBase startIcon/endIcon instance swaps
 * (IconGlyphs.figma.batch.json).
 */

figma.connect(
  FilterButton,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16475-25833',
  {
    props: {
      variant: figma.enum('variant', {
        primary: FilterButtonVariant.Primary,
        secondary: FilterButtonVariant.Secondary,
      }),
      isSelected: figma.boolean('isSelected', {
        true: true,
        false: false,
      }),
      size: figma.enum('size', {
        Lg: ButtonBaseSize.Lg,
        Md: ButtonBaseSize.Md,
        Sm: ButtonBaseSize.Sm,
      }),
      buttonBase: figma.nestedProps('_ButtonBase', {
        label: figma.string('label'),
        startIconProps: figma.boolean('startIcon (Figma Only)', {
          true: figma.nestedProps('startIcon', {
            name: figma.instance<IconName>('name'),
          }),
          false: { name: undefined },
        }),
        endIconProps: figma.boolean('endIcon (Figma Only)', {
          true: figma.nestedProps('endIcon', {
            name: figma.instance<IconName>('name'),
          }),
          false: { name: undefined },
        }),
      }),
    },
    example: ({ variant, isSelected, size, buttonBase }) => (
      <FilterButton
        variant={variant}
        isSelected={isSelected}
        size={size}
        startIconName={buttonBase.startIconProps.name}
        endIconName={buttonBase.endIconProps.name}
        onPress={() => undefined}
      >
        {buttonBase.label}
      </FilterButton>
    ),
  },
);
