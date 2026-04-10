// Third party dependencies.
import { isReactNodeRenderable } from '@metamask/design-system-shared';
import React from 'react';

// Internal dependencies.
import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { TextVariant, TextColor, FontWeight } from '../Text';

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
 * @param props.bottomAccessory - Optional custom bottom row when the bottom label row is not shown
 * @param props.bottomLabel - Optional secondary label below the amount row
 * @param props.bottomLabelEndAccessory - Optional inline accessory to the right of `bottomLabel`
 * @param props.titleProps - Optional props merged into title row `Text` when `title` is a string
 * @param props.amountProps - Optional props merged into amount `Text` when `amount` is a string
 * @param props.bottomLabelProps - Optional props merged into bottom label `Text` when `bottomLabel` is a string
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
  twClassName = '',
  ...props
}) => {
  const amountEndAccessoryNode = isReactNodeRenderable(amountEndAccessory)
    ? amountEndAccessory
    : undefined;

  const titleEndAccessoryNode = isReactNodeRenderable(titleEndAccessory)
    ? titleEndAccessory
    : undefined;

  const bottomLabelEndAccessoryNode = isReactNodeRenderable(
    bottomLabelEndAccessory,
  )
    ? bottomLabelEndAccessory
    : undefined;

  const renderTitleRow =
    isReactNodeRenderable(title) || isReactNodeRenderable(titleEndAccessory);
  const renderAmountRow =
    isReactNodeRenderable(amount) || isReactNodeRenderable(amountEndAccessory);
  const renderBottomLabelRow =
    isReactNodeRenderable(bottomLabel) ||
    isReactNodeRenderable(bottomLabelEndAccessory);
  const renderBottomAccessory =
    !renderBottomLabelRow && isReactNodeRenderable(bottomAccessory);

  const titleRow = (
    <BoxRow
      endAccessory={titleEndAccessoryNode}
      textProps={{
        variant: TextVariant.HeadingMd,
        color: TextColor.TextDefault,
        ...titleProps,
      }}
    >
      {title}
    </BoxRow>
  );

  const amountRow = (
    <BoxRow
      endAccessory={amountEndAccessoryNode}
      textProps={{
        variant: TextVariant.DisplayLg,
        ...amountProps,
      }}
    >
      {amount}
    </BoxRow>
  );

  const bottomLabelRow = (
    <BoxRow
      endAccessory={bottomLabelEndAccessoryNode}
      textProps={{
        variant: TextVariant.BodySm,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        ...bottomLabelProps,
      }}
    >
      {bottomLabel}
    </BoxRow>
  );

  return (
    <Box twClassName={twClassName} {...props}>
      {renderTitleRow ? titleRow : null}
      {renderAmountRow ? amountRow : null}
      {renderBottomLabelRow ? bottomLabelRow : null}
      {renderBottomAccessory ? bottomAccessory : null}
    </Box>
  );
};

TitleHub.displayName = 'TitleHub';
