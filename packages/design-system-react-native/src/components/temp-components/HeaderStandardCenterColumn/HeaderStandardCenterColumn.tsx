// Third party dependencies.
import React from 'react';

// External dependencies.
import { Box, BoxAlignItems, BoxFlexDirection } from '../../Box';
import type { TextProps } from '../../Text';
import { FontWeight, TextColor, TextVariant } from '../../Text';
import { TextOrChildren } from '../TextOrChildren';

// Internal dependencies.
import type { HeaderStandardCenterColumnProps } from './HeaderStandardCenterColumn.types';

export function HeaderStandardCenterColumn({
  title,
  titleProps,
  subtitle,
  subtitleProps,
}: HeaderStandardCenterColumnProps) {
  let subtitleTextProps: Omit<Partial<TextProps>, 'children'> | undefined;
  if (subtitle && typeof subtitle === 'string') {
    const { twClassName: subtitleTwClassName, ...subtitleTextRest } =
      subtitleProps ?? {};
    subtitleTextProps = {
      variant: TextVariant.BodySm,
      color: TextColor.TextAlternative,
      ...subtitleTextRest,
      twClassName: ['-mt-0.5', subtitleTwClassName].filter(Boolean).join(' '),
    };
  }

  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      alignItems={BoxAlignItems.Center}
    >
      <TextOrChildren
        textProps={{
          variant: TextVariant.BodyMd,
          fontWeight: FontWeight.Bold,
          ...titleProps,
        }}
      >
        {title}
      </TextOrChildren>
      {subtitle ? (
        <TextOrChildren textProps={subtitleTextProps}>
          {subtitle}
        </TextOrChildren>
      ) : null}
    </Box>
  );
}
