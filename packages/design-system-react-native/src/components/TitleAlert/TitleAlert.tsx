import {
  BoxAlignItems,
  BoxFlexDirection,
  BoxJustifyContent,
  FontWeight,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { IconAlert } from '../IconAlert';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { TitleAlertProps } from './TitleAlert.types';

/**
 * Displays a severity-based {@link IconAlert} above a centered title row.
 * Remaining `View` props are forwarded to the root {@link Box}.
 *
 * @param props - Component props
 * @param props.severity - Passed to {@link IconAlert} for glyph and color
 * @param props.title - Title row content; row renders only when `title` is renderable
 * @param props.titleWrapperProps - Optional props spread onto the title row {@link Box}
 * @param props.titleProps - Optional props merged into title row `Text` when `title` is a string
 * @param props.description - Optional text-centered description below the title; uses {@link TextOrChildren}
 * @param props.descriptionProps - Optional props merged into description `Text` when `description` is a string
 * @param props.twClassName - Optional Tailwind classes on the root Box
 *
 * @returns The rendered TitleAlert layout.
 */
export const TitleAlert: React.FC<TitleAlertProps> = ({
  severity,
  title,
  titleProps,
  titleWrapperProps,
  description,
  descriptionProps,
  twClassName = '',
  ...props
}) => {
  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      alignItems={BoxAlignItems.Center}
      gap={1}
      twClassName={twClassName}
      {...props}
    >
      <IconAlert severity={severity} size={IconSize.Xl} />
      {title ? (
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
          justifyContent={BoxJustifyContent.Center}
          twClassName="self-stretch"
          {...titleWrapperProps}
        >
          <TextOrChildren
            textProps={{
              variant: TextVariant.HeadingLg,
              color: TextColor.TextDefault,
              ...titleProps,
            }}
          >
            {title}
          </TextOrChildren>
        </Box>
      ) : null}
      {description ? (
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
      ) : null}
    </Box>
  );
};

TitleAlert.displayName = 'TitleAlert';
