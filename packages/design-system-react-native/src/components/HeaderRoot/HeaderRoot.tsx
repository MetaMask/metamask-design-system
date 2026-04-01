// Third party dependencies.
import React from 'react';

// External dependencies.
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { TextVariant } from '../Text';
import { TextOrChildren } from '../temp-components/TextOrChildren';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

  const renderEndContent = () => {
    if (endAccessory) {
      return endAccessory;
    }
    if (endButtonIconProps && endButtonIconProps.length > 0) {
      const reversedProps = endButtonIconProps
        .map((props, originalIndex) => ({ props, originalIndex }))
        .reverse();
      return reversedProps.map(({ props, originalIndex }) => (
        <ButtonIcon
          key={`end-button-icon-${originalIndex}`}
          size={ButtonIconSize.Md}
          {...props}
        />
      ));
    }
    return null;
  };

  const hasEndContent =
    endAccessory || (endButtonIconProps && endButtonIconProps.length > 0);

  const renderLeftSection = () => {
    if (children != null && children !== undefined) {
      return children;
    }
    if (title != null || titleAccessory != null) {
      return (
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
        >
          {title != null && title !== '' && (
            <TextOrChildren
              textProps={{
                variant: TextVariant.HeadingLg,
                ...titleProps,
              }}
            >
              {title}
            </TextOrChildren>
          )}
          {titleAccessory}
        </Box>
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
      {hasEndContent && (
        <Box twClassName="flex-row gap-2">{renderEndContent()}</Box>
      )}
    </Box>
  );
};

HeaderRoot.displayName = 'HeaderRoot';
