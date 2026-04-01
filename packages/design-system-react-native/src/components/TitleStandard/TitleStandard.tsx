// Third party dependencies.
import React from 'react';

// External dependencies.
import { Box } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { FontWeight, Text, TextColor, TextVariant } from '../Text';

// Internal dependencies.
import type { TitleStandardProps } from './TitleStandard.types';

export const TitleStandard = ({
  title,
  titleAccessory,
  topAccessory,
  topLabel,
  bottomAccessory,
  bottomLabel,
  titleProps,
  topLabelProps,
  bottomLabelProps,
  testID,
  twClassName = '',
}: TitleStandardProps) => {
  const hasTopContent = topAccessory || topLabel;
  const hasBottomContent = bottomAccessory || bottomLabel;

  return (
    <Box twClassName={twClassName} testID={testID}>
      {hasTopContent && (
        <Box>
          {topLabel ? (
            <Text
              variant={TextVariant.BodySm}
              fontWeight={FontWeight.Medium}
              color={TextColor.TextAlternative}
              {...topLabelProps}
            >
              {topLabel}
            </Text>
          ) : (
            topAccessory
          )}
        </Box>
      )}

      <BoxHorizontal
        endAccessory={titleAccessory}
        textProps={
          title ? { variant: TextVariant.HeadingLg, ...titleProps } : undefined
        }
      >
        {title}
      </BoxHorizontal>

      {hasBottomContent && (
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
  );
};

TitleStandard.displayName = 'TitleStandard';
