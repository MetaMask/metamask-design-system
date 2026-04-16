import {
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { BoxRow } from '../BoxRow';

import type { TitleHubProps } from './TitleHub.types';

/**
 * Displays a required title row with optional amount, inline accessories, and bottom rows in a left-aligned layout.
 * Remaining `View` props are forwarded to the root `Box`.
 *
 * @param props - Component props
 * @param props.title - Title row content (required)
 * @param props.titleEndAccessory - Optional inline accessory to the right of `title`
 * @param props.amount - Optional primary amount below the title
 * @param props.amountEndAccessory - Optional inline accessory to the right of the amount
 * @param props.bottomAccessory - Optional custom bottom row when `bottomLabel` is not renderable
 * @param props.bottomLabel - Optional secondary label below the amount row; when renderable, shows the bottom label row
 * @param props.bottomLabelEndAccessory - Optional inline accessory to the right of `bottomLabel` (ignored without a renderable `bottomLabel`)
 * @param props.titleProps - Optional props merged into title row `Text` when `title` is a string
 * @param props.amountProps - Optional props merged into amount `Text` when `amount` is a string
 * @param props.bottomLabelProps - Optional props merged into bottom label `Text` when `bottomLabel` is a string
 * @param props.titleWrapperProps - Optional props spread onto the title row `BoxRow`
 * @param props.amountWrapperProps - Optional props spread onto the amount row `BoxRow`
 * @param props.bottomLabelWrapperProps - Optional props spread onto the bottom label row `BoxRow`
 * @param props.twClassName - Optional Tailwind classes on the root container
 *
 * @returns The rendered TitleHub layout.
 */
export const TitleHub: React.FC<TitleHubProps> = ({
  amount,
  amountEndAccessory,
  title,
  titleEndAccessory,
  bottomAccessory,
  bottomLabel,
  bottomLabelEndAccessory,
  amountProps,
  titleProps,
  bottomLabelProps,
  titleWrapperProps,
  amountWrapperProps,
  bottomLabelWrapperProps,
  twClassName = '',
  ...props
}) => {
  return (
    <Box gap={1} twClassName={twClassName} {...props}>
      {/* Title Row */}
      {title && (
        <BoxRow
          {...titleWrapperProps}
          endAccessory={titleEndAccessory}
          textProps={{
            variant: TextVariant.HeadingMd,
            color: TextColor.TextDefault,
            ...titleProps,
          }}
        >
          {title}
        </BoxRow>
      )}
      {/* Amount Row */}
      {amount && (
        <BoxRow
          {...amountWrapperProps}
          endAccessory={amountEndAccessory}
          textProps={{
            variant: TextVariant.DisplayLg,
            ...amountProps,
          }}
        >
          {amount}
        </BoxRow>
      )}
      {/* Bottom Label Row */}
      {bottomLabel && (
        <BoxRow
          {...bottomLabelWrapperProps}
          endAccessory={bottomLabelEndAccessory}
          textProps={{
            variant: TextVariant.BodySm,
            fontWeight: FontWeight.Medium,
            color: TextColor.TextAlternative,
            ...bottomLabelProps,
          }}
        >
          {bottomLabel}
        </BoxRow>
      )}
      {/* Bottom Accessory Slot */}
      {!bottomLabel && bottomAccessory}
    </Box>
  );
};

TitleHub.displayName = 'TitleHub';
