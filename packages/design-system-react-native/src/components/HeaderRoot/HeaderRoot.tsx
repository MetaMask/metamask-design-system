// Third party dependencies.
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { BoxRow } from '../BoxRow';
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

  const endSectionContent = (() => {
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
  })();

  const renderLeftSection = () => {
    if (children) {
      return children;
    }
    if (title || titleAccessory) {
      return (
        <BoxRow
          endAccessory={titleAccessory}
          textProps={{
            variant: TextVariant.HeadingLg,
            ...titleProps,
          }}
          twClassName="flex-1"
        >
          {title}
        </BoxRow>
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
      {renderLeftSection()}
      {endSectionContent ? (
        <Box flexDirection={BoxFlexDirection.Row} gap={2} twClassName="ml-auto">
          {endSectionContent}
        </Box>
      ) : null}
    </Box>
  );
};

HeaderRoot.displayName = 'HeaderRoot';
