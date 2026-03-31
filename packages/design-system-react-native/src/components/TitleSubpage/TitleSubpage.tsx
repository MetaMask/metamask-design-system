// Third party dependencies.
import React from 'react';

// External dependencies.
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { FontWeight, Text, TextColor, TextVariant } from '../Text';

// Internal dependencies.
import type { TitleSubpageProps } from './TitleSubpage.types';

export const TitleSubpage = ({
  title,
  titleAccessory,
  startAccessory,
  bottomAccessory,
  bottomLabel,
  titleProps,
  bottomLabelProps,
  testID,
  twClassName = '',
}: TitleSubpageProps) => (
  <Box
    flexDirection={BoxFlexDirection.Row}
    alignItems={BoxAlignItems.Center}
    gap={3}
    twClassName={twClassName}
    testID={testID}
  >
    {startAccessory}

    <Box twClassName="flex-1">
      <BoxHorizontal
        endAccessory={titleAccessory}
        textProps={
          title ? { variant: TextVariant.HeadingMd, ...titleProps } : undefined
        }
      >
        {title}
      </BoxHorizontal>

      {(bottomAccessory || bottomLabel) && (
        <Box>
          {bottomLabel ? (
            <Text
              variant={TextVariant.BodySm}
              fontWeight={FontWeight.Medium}
              color={TextColor.TextAlternative}
              {...bottomLabelProps}
            >
              {bottomLabel}
            </Text>
          ) : (
            bottomAccessory
          )}
        </Box>
      )}
    </Box>
  </Box>
);

TitleSubpage.displayName = 'TitleSubpage';
