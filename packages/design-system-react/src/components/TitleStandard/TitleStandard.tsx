import {
  BoxAlignItems,
  BoxFlexDirection,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { Text } from '../Text';

import type { TitleStandardProps } from './TitleStandard.types';

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
 * Displays a primary title with optional top, inline, and bottom rows in a
 * left-aligned layout. Remaining `div` props are forwarded to the root `Box`.
 *
 * Implemented with direct `Box` / `Text` (no `BoxRow` / `TextOrChildren`).
 * Pass a `SensitiveText` node when a string slot needs privacy masking.
 */
export const TitleStandard = forwardRef<HTMLDivElement, TitleStandardProps>(
  (
    {
      title,
      titleEndAccessory,
      topAccessory,
      bottomAccessory,
      bottomLabel,
      bottomLabelEndAccessory,
      titleProps,
      titleWrapperProps,
      bottomLabelProps,
      bottomLabelWrapperProps,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const { className: titleWrapperClassName, ...titleWrapperRest } =
      titleWrapperProps ?? {};
    const {
      className: bottomLabelWrapperClassName,
      ...bottomLabelWrapperRest
    } = bottomLabelWrapperProps ?? {};

    return (
      <Box
        ref={ref}
        gap={1}
        className={twMerge(className)}
        style={style}
        {...props}
      >
        {topAccessory}
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={2}
          className={twMerge(titleWrapperClassName)}
          {...titleWrapperRest}
        >
          {renderText(
            title,
            {
              variant: TextVariant.HeadingLg,
            },
            titleProps,
          )}
          {titleEndAccessory}
        </Box>
        {bottomLabel ? (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={2}
            className={twMerge(bottomLabelWrapperClassName)}
            {...bottomLabelWrapperRest}
          >
            {renderText(
              bottomLabel,
              {
                variant: TextVariant.BodySm,
                fontWeight: FontWeight.Medium,
                color: TextColor.TextAlternative,
              },
              bottomLabelProps,
            )}
            {bottomLabelEndAccessory}
          </Box>
        ) : (
          bottomAccessory
        )}
      </Box>
    );
  },
);

TitleStandard.displayName = 'TitleStandard';
