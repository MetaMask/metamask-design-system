// Third party dependencies.
import { isReactNodeRenderable } from '@metamask/design-system-shared';
import React from 'react';

// Internal dependencies.
import { Box } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { TextVariant, TextColor, FontWeight } from '../Text';

import type { TitleHubProps } from './TitleHub.types';

/**
 * Displays a required title row with optional amount, inline accessories, and bottom rows in a left-aligned layout.
 * Remaining `View` props are forwarded to the root `Box`.
 *
 * @param props - Component props
 * @param props.title - Title row content (required)
 * @param props.titleAccessory - Optional inline accessory to the right of `title`
 * @param props.amount - Optional primary amount below the title
 * @param props.amountAccessory - Optional inline accessory to the right of the amount
 * @param props.bottomAccessory - Optional custom bottom row when the bottom label row is not shown
 * @param props.bottomLabel - Optional secondary label below the amount row
 * @param props.bottomLabelAccessory - Optional inline accessory to the right of `bottomLabel`
 * @param props.titleProps - Optional props merged into title row `Text` when `title` is a string
 * @param props.amountProps - Optional props merged into amount `Text` when `amount` is a string
 * @param props.bottomLabelProps - Optional props merged into bottom label `Text` when `bottomLabel` is a string
 * @param props.twClassName - Optional Tailwind classes on the root container
 *
 * @returns The rendered TitleHub layout.
 */
export const TitleHub: React.FC<TitleHubProps> = ({
  amount,
  amountAccessory,
  title,
  titleAccessory,
  bottomAccessory,
  bottomLabel,
  bottomLabelAccessory,
  amountProps,
  titleProps,
  bottomLabelProps,
  twClassName = '',
  ...props
}) => {
  const amountEndAccessoryNode = isReactNodeRenderable(amountAccessory)
    ? amountAccessory
    : undefined;

  const titleEndAccessoryNode = isReactNodeRenderable(titleAccessory)
    ? titleAccessory
    : undefined;

  const bottomLabelEndAccessoryNode = isReactNodeRenderable(
    bottomLabelAccessory,
  )
    ? bottomLabelAccessory
    : undefined;

  const renderTitleRow =
    isReactNodeRenderable(title) || isReactNodeRenderable(titleAccessory);
  const renderAmountRow =
    isReactNodeRenderable(amount) || isReactNodeRenderable(amountAccessory);
  const renderBottomLabelRow =
    isReactNodeRenderable(bottomLabel) ||
    isReactNodeRenderable(bottomLabelAccessory);
  const renderBottomAccessory =
    !renderBottomLabelRow && isReactNodeRenderable(bottomAccessory);

  const titleRow = (
    <BoxHorizontal
      endAccessory={titleEndAccessoryNode}
      textProps={{
        variant: TextVariant.HeadingMd,
        color: TextColor.TextDefault,
        ...titleProps,
      }}
    >
      {title}
    </BoxHorizontal>
  );

  const amountRow = (
    <BoxHorizontal
      endAccessory={amountEndAccessoryNode}
      textProps={{
        variant: TextVariant.DisplayLg,
        ...amountProps,
      }}
    >
      {amount}
    </BoxHorizontal>
  );

  const bottomLabelRow = (
    <BoxHorizontal
      endAccessory={bottomLabelEndAccessoryNode}
      textProps={{
        variant: TextVariant.BodySm,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        ...bottomLabelProps,
      }}
    >
      {bottomLabel}
    </BoxHorizontal>
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
