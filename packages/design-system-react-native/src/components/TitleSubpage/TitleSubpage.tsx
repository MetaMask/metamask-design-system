// Third party dependencies.
import { isReactNodeRenderable } from '@metamask/design-system-shared';
import React from 'react';

// Internal dependencies.
import { BoxAlignItems, BoxJustifyContent } from '../../types';
import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { TextVariant, TextColor, FontWeight } from '../Text';

import type { TitleSubpageProps } from './TitleSubpage.types';

/**
 * Displays a required identity row (avatar + title stack) with optional subtitle, amount, inline accessories, and bottom rows in a left-aligned layout.
 * Remaining `View` props are forwarded to the root `Box`.
 *
 * @param props - Component props
 * @param props.title - Title row content (required)
 * @param props.titleAvatar - Leading visual for the identity row (required); rendered in a 40×40 centered slot
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
  twClassName = '',
  ...props
}) => {
  const amountEndAccessoryNode = isReactNodeRenderable(amountEndAccessory)
    ? amountEndAccessory
    : undefined;

  const titleEndAccessoryNode = isReactNodeRenderable(titleEndAccessory)
    ? titleEndAccessory
    : undefined;

  const subtitleEndAccessoryNode = isReactNodeRenderable(subtitleEndAccessory)
    ? subtitleEndAccessory
    : undefined;

  const bottomLabelEndAccessoryNode = isReactNodeRenderable(
    bottomLabelEndAccessory,
  )
    ? bottomLabelEndAccessory
    : undefined;

  const renderTitleRow =
    isReactNodeRenderable(title) || isReactNodeRenderable(titleEndAccessory);
  const renderSubtitleRow =
    isReactNodeRenderable(subtitle) ||
    isReactNodeRenderable(subtitleEndAccessory);
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
        variant: TextVariant.HeadingSm,
        color: TextColor.TextDefault,
        ...titleProps,
      }}
    >
      {title}
    </BoxRow>
  );

  const subtitleRow = (
    <BoxRow
      endAccessory={subtitleEndAccessoryNode}
      textProps={{
        variant: TextVariant.BodySm,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        ...subtitleProps,
      }}
    >
      {subtitle}
    </BoxRow>
  );

  const titleAvatarSlot = (
    <Box
      twClassName="h-10 w-10 shrink-0"
      alignItems={BoxAlignItems.Center}
      justifyContent={BoxJustifyContent.Center}
    >
      {titleAvatar}
    </Box>
  );

  const identityRow = (
    <BoxRow
      gap={4}
      twClassName="h-14 align-middle"
      startAccessory={titleAvatarSlot}
    >
      <Box>
        {renderTitleRow ? titleRow : null}
        {renderSubtitleRow ? subtitleRow : null}
      </Box>
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
      {identityRow}
      {renderAmountRow ? amountRow : null}
      {renderBottomLabelRow ? bottomLabelRow : null}
      {renderBottomAccessory ? bottomAccessory : null}
    </Box>
  );
};

TitleSubpage.displayName = 'TitleSubpage';
