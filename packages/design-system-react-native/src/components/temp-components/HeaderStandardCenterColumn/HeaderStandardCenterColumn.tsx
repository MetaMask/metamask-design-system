// Third party dependencies.
import React from 'react';

// External dependencies.
import { BoxAlignItems } from '../../Box/index.js';
import { BoxColumn } from '../../BoxColumn/index.js';
import type { TextProps } from '../../Text/index.js';
import { FontWeight, TextColor, TextVariant } from '../../Text/index.js';
import { TextOrChildren } from '../TextOrChildren/index.js';

// Internal dependencies.
import type { HeaderStandardCenterColumnProps } from './HeaderStandardCenterColumn.types.js';

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
    <BoxColumn
      alignItems={BoxAlignItems.Center}
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Bold,
        ...titleProps,
      }}
      bottomAccessory={
        subtitle ? (
          <TextOrChildren textProps={subtitleTextProps}>
            {subtitle}
          </TextOrChildren>
        ) : undefined
      }
    >
      {title}
    </BoxColumn>
  );
}
