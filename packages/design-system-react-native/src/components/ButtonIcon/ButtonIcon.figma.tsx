// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import type { IconName } from '@metamask/design-system-shared';
import React from 'react';

import { ButtonIcon } from './ButtonIcon';

import { ButtonIconSize, ButtonIconVariant } from '.';

/**
 * React Native implementation of ButtonIcon component.
 * Icon name resolves via nested Icon instance swap (IconGlyphs.figma.batch.json).
 */

figma.connect(
  ButtonIcon,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=1%3A2860',
  {
    props: {
      size: figma.enum('size', {
        Sm: ButtonIconSize.Sm,
        Md: ButtonIconSize.Md,
        Lg: ButtonIconSize.Lg,
      }),
      isDisabled: figma.boolean('isDisabled'),
      variant: figma.enum('variant', {
        Default: ButtonIconVariant.Default,
        Filled: ButtonIconVariant.Filled,
        Floating: ButtonIconVariant.Floating,
      }),
      iconProps: figma.nestedProps('Icon', {
        name: figma.instance<IconName>('name'),
      }),
    },
    example: ({ size, isDisabled, variant, iconProps, ...props }) => (
      <ButtonIcon
        size={size}
        iconName={iconProps.name}
        accessibilityLabel="Close"
        isDisabled={isDisabled}
        variant={variant}
        {...props}
      />
    ),
  },
);
