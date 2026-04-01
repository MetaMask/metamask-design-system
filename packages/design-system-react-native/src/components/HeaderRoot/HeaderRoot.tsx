// Third party dependencies.
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { TextVariant } from '../Text';

// Internal dependencies.
import type { HeaderRootProps } from './HeaderRoot.types';

export const HeaderRoot = ({
  children,
  title,
  titleProps,
  titleAccessory,
  endAccessory,
  endButtonIconProps,
  includesTopInset = false,
  style,
  testID,
  twClassName,
  ...viewProps
}: HeaderRootProps) => {
  const insets = useSafeAreaInsets();

  let endSectionContent: React.ReactNode = null;
  if (endAccessory) {
    endSectionContent = endAccessory;
  } else if (endButtonIconProps && endButtonIconProps.length > 0) {
    const reversedProps = endButtonIconProps
      .map((props, originalIndex) => ({ props, originalIndex }))
      .reverse();
    endSectionContent = reversedProps.map(({ props, originalIndex }) => (
      <ButtonIcon
        key={`end-button-icon-${originalIndex}`}
        size={ButtonIconSize.Md}
        {...props}
      />
    ));
  }

  const renderLeftSection = () => {
    if (children !== null && children !== undefined) {
      return children;
    }
    if (
      (title !== null && title !== undefined) ||
      (titleAccessory !== null && titleAccessory !== undefined)
    ) {
      return (
        <BoxHorizontal
          endAccessory={titleAccessory}
          textProps={{
            variant: TextVariant.HeadingLg,
            ...titleProps,
          }}
        >
          {title !== null && title !== undefined && title !== '' ? title : null}
        </BoxHorizontal>
      );
    }
    return null;
  };

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={4}
      paddingLeft={4}
      paddingRight={2}
      twClassName={`min-h-14 ${twClassName ?? ''}`.trim()}
      style={[includesTopInset && { marginTop: insets.top }, style]}
      testID={testID}
      {...viewProps}
    >
      <Box twClassName="flex-1 items-start">{renderLeftSection()}</Box>
      {endSectionContent !== null && endSectionContent !== undefined && (
        <Box twClassName="flex-row gap-2">{endSectionContent}</Box>
      )}
    </Box>
  );
};

HeaderRoot.displayName = 'HeaderRoot';
