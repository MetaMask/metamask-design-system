// Third party dependencies.
import {
  BoxAlignItems,
  BoxFlexDirection,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

// Internal dependencies.
import { Box } from '../Box';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { TitleSubpageProps } from './TitleSubpage.types';

/**
 * Displays a required identity row (avatar + title stack) with optional subtitle, amount, inline accessories, and bottom rows in a left-aligned layout.
 * Remaining `View` props are forwarded to the root `Box`.
 *
 * @param props - Component props
 * @param props.title - Title row content (required)
 * @param props.titleAvatar - Leading visual for the identity row (required); rendered as the first child of the identity row so callers control layout and composition (for example badges that extend past the token)
 * @param props.identityRowProps - Optional props spread onto the identity row `Box` after defaults (`children` is reserved)
 * @param props.titleColumnProps - Optional props spread onto the title/subtitle column `Box` (`children` is reserved)
 * @param props.bottomLabelWrapperProps - Optional props spread onto the bottom label row `Box` after defaults (`children` is reserved)
 * @param props.titleEndAccessory - Optional inline accessory to the right of `title`
 * @param props.subtitle - Optional subtitle row below the title and above the amount
 * @param props.subtitleEndAccessory - Optional inline accessory to the right of `subtitle`
 * @param props.amount - Optional primary amount below the title
 * @param props.amountEndAccessory - Optional inline accessory to the right of the amount
 * @param props.bottomAccessory - Optional custom bottom row when the bottom label row is not shown
 * @param props.bottomLabel - Optional secondary label below the amount row
 * @param props.bottomLabelEndAccessory - Optional inline accessory to the right of `bottomLabel`
 * @param props.titleProps - Optional props merged into title row `Text` when `title` is a string
 * @param props.subtitleProps - Optional props merged into subtitle row `Text` when `subtitle` is a string
 * @param props.amountProps - Optional props merged into amount `Text` when `amount` is a string
 * @param props.bottomLabelProps - Optional props merged into bottom label `Text` when `bottomLabel` is a string
 * @param props.twClassName - Optional Tailwind classes on the root container
 *
 * @returns The rendered TitleSubpage layout.
 */
export const TitleSubpage: React.FC<TitleSubpageProps> = ({
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
  twClassName = '',
  ...props
}) => {
  return (
    <Box twClassName={twClassName} gap={1} {...props}>
      {/* Identity Row */}
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={4}
        twClassName="h-14"
        {...identityRowProps}
      >
        {titleAvatar}
        {/* Title and Subtitle Column */}
        <Box {...titleColumnProps}>
          {/* Title Row */}
          {title && (
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={1}
            >
              <TextOrChildren
                textProps={{
                  variant: TextVariant.HeadingSm,
                  color: TextColor.TextDefault,
                  ...titleProps,
                }}
              >
                {title}
              </TextOrChildren>
              {titleEndAccessory}
            </Box>
          )}
          {/* Subtitle Row */}
          {subtitle && (
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={1}
            >
              <TextOrChildren
                textProps={{
                  variant: TextVariant.BodySm,
                  fontWeight: FontWeight.Medium,
                  color: TextColor.TextAlternative,
                  ...subtitleProps,
                }}
              >
                {subtitle}
              </TextOrChildren>
              {subtitleEndAccessory}
            </Box>
          )}
        </Box>
      </Box>
      {/* Amount Row */}
      {amount && (
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
        >
          <TextOrChildren
            textProps={{
              variant: TextVariant.DisplayLg,
              ...amountProps,
            }}
          >
            {amount}
          </TextOrChildren>
          {amountEndAccessory}
        </Box>
      )}
      {/* Bottom Label Row */}
      {bottomLabel && (
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
          {...bottomLabelWrapperProps}
        >
          <TextOrChildren
            textProps={{
              variant: TextVariant.BodySm,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextAlternative,
              ...bottomLabelProps,
            }}
          >
            {bottomLabel}
          </TextOrChildren>
          {bottomLabelEndAccessory}
        </Box>
      )}
      {!bottomLabel && bottomAccessory}
    </Box>
  );
};

TitleSubpage.displayName = 'TitleSubpage';
