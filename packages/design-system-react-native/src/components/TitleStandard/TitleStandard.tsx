// Third party dependencies.
import { isReactNodeRenderable } from '@metamask/design-system-shared';
import React from 'react';

// Internal dependencies.
import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { TextVariant, TextColor, FontWeight } from '../Text';

import type { TitleStandardProps } from './TitleStandard.types';

/**
 * Displays a primary title with optional top, inline, and bottom rows in a left-aligned layout.
 * Remaining `View` props are forwarded to the root `Box`.
 *
 * @param props - Component props
 * @param props.title - Primary title content
 * @param props.titleEndAccessory - Optional inline accessory to the right of the title
 * @param props.topAccessory - Optional row above the title
 * @param props.bottomAccessory - Optional custom bottom row when `bottomLabel` is not renderable
 * @param props.bottomLabel - Optional secondary label below the title
 * @param props.bottomLabelEndAccessory - Optional inline accessory to the right of the bottom label
 * @param props.titleProps - Optional props merged into title `Text` when `title` is a string
 * @param props.bottomLabelProps - Optional props merged into bottom label `Text` when `bottomLabel` is a string
 * @param props.twClassName - Optional Tailwind classes on the root container
 *
 * @returns The rendered TitleStandard layout.
 */
export const TitleStandard: React.FC<TitleStandardProps> = ({
  title,
  titleEndAccessory,
  topAccessory,
  bottomAccessory,
  bottomLabel,
  bottomLabelEndAccessory,
  titleProps,
  bottomLabelProps,
  twClassName = '',
  ...props
}) => {
  const titleEndAccessoryNode = isReactNodeRenderable(titleEndAccessory)
    ? titleEndAccessory
    : undefined;
  const bottomLabelEndAccessoryNode = isReactNodeRenderable(
    bottomLabelEndAccessory,
  )
    ? bottomLabelEndAccessory
    : undefined;

  const renderBottomLabel = isReactNodeRenderable(bottomLabel);
  const renderBottomAccessory =
    !renderBottomLabel && isReactNodeRenderable(bottomAccessory);

  const titleRow = (
    <BoxRow
      endAccessory={titleEndAccessoryNode}
      textProps={{
        variant: TextVariant.HeadingLg,
        ...titleProps,
      }}
    >
      {title}
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
    <Box twClassName={twClassName} gap={1} {...props}>
      {isReactNodeRenderable(topAccessory) ? topAccessory : null}
      {titleRow}
      {renderBottomLabel ? bottomLabelRow : null}
      {renderBottomAccessory ? bottomAccessory : null}
    </Box>
  );
};

TitleStandard.displayName = 'TitleStandard';
