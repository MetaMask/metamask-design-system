import {
  BoxAlignItems,
  BoxFlexDirection,
  BoxJustifyContent,
  FontWeight,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

import { TextAlign } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { IconAlert } from '../IconAlert';
import { Text } from '../Text';

import type { TitleAlertProps } from './TitleAlert.types';

type TextSlotProps = Partial<
  Omit<React.ComponentProps<typeof Text>, 'children'>
>;

const renderText = (
  content: ReactNode,
  defaults: TextSlotProps,
  textProps?: TextSlotProps,
): ReactNode => {
  if (typeof content === 'string' || typeof content === 'number') {
    return (
      <Text {...defaults} {...textProps}>
        {content}
      </Text>
    );
  }
  return content;
};

/**
 * Displays a severity-based {@link IconAlert} above a centered title row, with
 * optional description text below. Remaining `div` props are forwarded to the
 * root {@link Box}.
 *
 * Implemented with direct `Box` / `Text` (no `BoxRow` / `TextOrChildren`).
 * Pass a `SensitiveText` node when a string slot needs privacy masking.
 */
export const TitleAlert = forwardRef<HTMLDivElement, TitleAlertProps>(
  (
    {
      severity,
      title,
      titleProps,
      titleWrapperProps,
      description,
      descriptionProps,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const { className: titleWrapperClassName, ...titleWrapperRest } =
      titleWrapperProps ?? {};

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Column}
        alignItems={BoxAlignItems.Center}
        gap={1}
        {...props}
        className={twMerge(className)}
        style={style}
      >
        <IconAlert severity={severity} size={IconSize.Xl} />
        {title ? (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
            justifyContent={BoxJustifyContent.Center}
            {...titleWrapperRest}
            className={twMerge('self-stretch', titleWrapperClassName)}
          >
            {renderText(
              title,
              {
                variant: TextVariant.HeadingLg,
                color: TextColor.TextDefault,
              },
              titleProps,
            )}
          </Box>
        ) : null}
        {description ? (
          <Box className="self-stretch">
            {renderText(
              description,
              {
                variant: TextVariant.BodySm,
                color: TextColor.TextAlternative,
                fontWeight: FontWeight.Medium,
                textAlign: TextAlign.Center,
              },
              descriptionProps,
            )}
          </Box>
        ) : null}
      </Box>
    );
  },
);

TitleAlert.displayName = 'TitleAlert';
