// Third party dependencies.
import React from 'react';

// External dependencies.
import { isReactNodeRenderable } from '@metamask/design-system-shared';

// Internal dependencies.
import { Box } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { TextVariant, TextColor, FontWeight } from '../Text';

import type { TitleStandardProps } from './TitleStandard.types';

/**
 * TitleStandard is a component that displays a title with optional accessories
 * in a left-aligned layout.
 *
 * @example
 * ```tsx
 * <TitleStandard
 *   topAccessory={<Text variant={TextVariant.BodySm}>Send</Text>}
 *   title="$4.42"
 *   titleAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
 * />
 * ```
 */
export const TitleStandard: React.FC<TitleStandardProps> = ({
  title,
  titleAccessory,
  topAccessory,
  bottomAccessory,
  bottomLabel,
  titleProps,
  bottomLabelProps,
  twClassName = '',
  ...props
}) => {
  const titleEndAccessoryNode = isReactNodeRenderable(titleAccessory)
    ? titleAccessory
    : undefined;

  const titleRow = (
    <BoxHorizontal
      endAccessory={titleEndAccessoryNode}
      textProps={{
        variant: TextVariant.HeadingLg,
        ...titleProps,
      }}
    >
      {title}
    </BoxHorizontal>
  );

  const renderBottomLabel = isReactNodeRenderable(bottomLabel);
  const renderBottomAccessory =
    !renderBottomLabel && isReactNodeRenderable(bottomAccessory);

  const bottomLabelRow = (
    <BoxHorizontal
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
    <Box twClassName={twClassName} gap={1} {...props}>
      {isReactNodeRenderable(topAccessory) ? topAccessory : null}
      {titleRow}
      {renderBottomLabel ? bottomLabelRow : null}
      {renderBottomAccessory ? bottomAccessory : null}
    </Box>
  );
};

TitleStandard.displayName = 'TitleStandard';
