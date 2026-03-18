import React from 'react';

import {
  BoxFlexDirection,
  FontWeight,
  TextColor,
  TextVariant,
} from '../../types';
import { Box } from '../Box';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { SectionBaseProps } from './SectionBase.types';

const hasContent = (content: React.ReactNode) =>
  content !== null && content !== undefined;

export const SectionBase = ({
  title,
  description,
  descriptionProps,
  children,
  twClassName,
  ...boxProps
}: SectionBaseProps) => (
  <Box
    flexDirection={BoxFlexDirection.Column}
    gap={3}
    twClassName={twClassName}
    {...boxProps}
  >
    {hasContent(title) && (
      <TextOrChildren
        textProps={{
          variant: TextVariant.BodyMd,
          fontWeight: FontWeight.Bold,
        }}
      >
        {title}
      </TextOrChildren>
    )}
    {hasContent(description) && (
      <TextOrChildren
        textProps={{
          variant: TextVariant.BodyMd,
          color: TextColor.TextAlternative,
          ...descriptionProps,
        }}
      >
        {description}
      </TextOrChildren>
    )}
    {hasContent(children) && children}
  </Box>
);

SectionBase.displayName = 'SectionBase';
