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

import type { TitleSubpageProps } from './TitleSubpage.types';

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
 * Displays a required identity row (avatar + title stack) with optional
 * subtitle, amount, inline accessories, and bottom rows in a left-aligned
 * layout. Remaining `div` props are forwarded to the root `Box`.
 *
 * Implemented with direct `Box` / `Text` (no `BoxRow` / `TextOrChildren`).
 * Pass a `SensitiveText` node when a string slot needs privacy masking.
 */
export const TitleSubpage = forwardRef<HTMLDivElement, TitleSubpageProps>(
  (
    {
      amount,
      amountEndAccessory,
      title,
      titleAvatar,
      titleEndAccessory,
      subtitle,
      subtitleEndAccessory,
      bottomAccessory,
      bottomLabel,
      bottomLabelEndAccessory,
      amountProps,
      titleProps,
      subtitleProps,
      bottomLabelProps,
      identityRowProps,
      titleColumnProps,
      bottomLabelWrapperProps,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const { className: identityRowClassName, ...identityRowRest } =
      identityRowProps ?? {};
    const { className: titleColumnClassName, ...titleColumnRest } =
      titleColumnProps ?? {};
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
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={4}
          className={twMerge('h-14', identityRowClassName)}
          {...identityRowRest}
        >
          {titleAvatar}
          <Box className={twMerge(titleColumnClassName)} {...titleColumnRest}>
            {title ? (
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={1}
              >
                {renderText(
                  title,
                  {
                    variant: TextVariant.HeadingSm,
                    color: TextColor.TextDefault,
                  },
                  titleProps,
                )}
                {titleEndAccessory}
              </Box>
            ) : null}
            {subtitle ? (
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={1}
              >
                {renderText(
                  subtitle,
                  {
                    variant: TextVariant.BodySm,
                    fontWeight: FontWeight.Medium,
                    color: TextColor.TextAlternative,
                  },
                  subtitleProps,
                )}
                {subtitleEndAccessory}
              </Box>
            ) : null}
          </Box>
        </Box>
        {amount ? (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
          >
            {renderText(
              amount,
              {
                variant: TextVariant.DisplayLg,
              },
              amountProps,
            )}
            {amountEndAccessory}
          </Box>
        ) : null}
        {bottomLabel ? (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
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

TitleSubpage.displayName = 'TitleSubpage';
