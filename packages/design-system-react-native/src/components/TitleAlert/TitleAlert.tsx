import {
  BoxAlignItems,
  BoxJustifyContent,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { IconSize } from '../../types';
import { Box } from '../Box';
import { BoxColumn } from '../BoxColumn';
import { BoxRow } from '../BoxRow';
import { IconAlert } from '../IconAlert';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { TitleAlertProps } from './TitleAlert.types';

/**
 * Displays a severity-based {@link IconAlert} above a centered title row with optional inline accessories.
 * Remaining `View` props are forwarded to the root {@link BoxColumn}.
 *
 * @param props - Component props
 * @param props.severity - Passed to {@link IconAlert} for glyph and color
 * @param props.title - Title row content; row renders only when `title` is renderable
 * @param props.titleStartAccessory - Optional inline accessory to the left of `title`
 * @param props.titleEndAccessory - Optional inline accessory to the right of `title`
 * @param props.titleWrapperProps - Optional props spread onto the title row {@link BoxRow}
 * @param props.titleProps - Optional props merged into title row `Text` when `title` is a string
 * @param props.description - Optional description below the title; uses {@link TextOrChildren}
 * @param props.descriptionProps - Optional props merged into description `Text` when `description` is a string
 * @param props.twClassName - Optional Tailwind classes on the root BoxColumn
 *
 * @returns The rendered TitleAlert layout.
 */
export const TitleAlert: React.FC<TitleAlertProps> = ({
  severity,
  title,
  titleStartAccessory,
  titleEndAccessory,
  titleProps,
  titleWrapperProps,
  description,
  descriptionProps,
  twClassName = '',
  ...props
}) => {
  return (
    <BoxColumn
      alignItems={BoxAlignItems.Center}
      gap={1}
      topAccessory={<IconAlert severity={severity} size={IconSize.Xl} />}
      bottomAccessory={
        description ? (
          <Box twClassName="self-stretch">
            <TextOrChildren
              textProps={{
                variant: TextVariant.BodySm,
                color: TextColor.TextAlternative,
                fontWeight: FontWeight.Medium,
                ...descriptionProps,
                style: [{ textAlign: 'center' }, descriptionProps?.style],
              }}
            >
              {description}
            </TextOrChildren>
          </Box>
        ) : undefined
      }
      twClassName={twClassName}
      {...props}
    >
      {title ? (
        <BoxRow
          justifyContent={BoxJustifyContent.Center}
          twClassName="self-stretch"
          {...titleWrapperProps}
          startAccessory={titleStartAccessory}
          endAccessory={titleEndAccessory}
          textProps={{
            variant: TextVariant.HeadingLg,
            color: TextColor.TextDefault,
            ...titleProps,
          }}
        >
          {title}
        </BoxRow>
      ) : null}
    </BoxColumn>
  );
};

TitleAlert.displayName = 'TitleAlert';
