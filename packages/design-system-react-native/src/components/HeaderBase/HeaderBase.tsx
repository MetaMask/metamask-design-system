// Third party dependencies.
import React, { useCallback, useState } from 'react';
import { View, LayoutChangeEvent } from 'react-native';

// External dependencies.
import { Box } from '../Box';
import { Text } from '../Text';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Internal dependencies.
import { HeaderBaseProps } from './HeaderBase.types';
import {
  HEADERBASE_TEST_ID,
  HEADERBASE_TITLE_TEST_ID,
  HEADERBASE_TITLE_TEXT_VARIANT,
} from './HeaderBase.constants';

/**
 * HeaderBase is a flexible header component that supports optional
 * start and end accessories with a center-aligned title.
 */
const HeaderBase: React.FC<HeaderBaseProps> = ({
  children,
  style,
  startAccessory,
  endAccessory,
  startButtonIconProps,
  endButtonIconProps,
  includesTopInset = false,
  startAccessoryWrapperProps,
  endAccessoryWrapperProps,
  testID = HEADERBASE_TEST_ID,
  twClassName,
  ...viewProps
}) => {
  const tw = useTailwind();
  const insets = useSafeAreaInsets();

  const [startAccessoryWidth, setStartAccessoryWidth] = useState(0);
  const [endAccessoryWidth, setEndAccessoryWidth] = useState(0);

  const handleStartAccessoryLayout = useCallback((e: LayoutChangeEvent) => {
    setStartAccessoryWidth(e.nativeEvent.layout.width);
  }, []);

  const handleEndAccessoryLayout = useCallback((e: LayoutChangeEvent) => {
    setEndAccessoryWidth(e.nativeEvent.layout.width);
  }, []);

  const hasStartContent = startAccessory || startButtonIconProps;
  const hasEndContent =
    endAccessory || (endButtonIconProps && endButtonIconProps.length > 0);
  const hasAnyAccessory = hasStartContent || hasEndContent;

  const shouldRenderStartWrapper = hasAnyAccessory;
  const shouldRenderEndWrapper = hasAnyAccessory;

  const accessoryWrapperWidth =
    hasAnyAccessory && (startAccessoryWidth || endAccessoryWidth)
      ? Math.max(startAccessoryWidth, endAccessoryWidth)
      : undefined;

  const renderStartContent = () => {
    if (startAccessory) {
      return startAccessory;
    }
    if (startButtonIconProps) {
      return <ButtonIcon size={ButtonIconSize.Md} {...startButtonIconProps} />;
    }
    return null;
  };

  const renderEndContent = () => {
    if (endAccessory) {
      return endAccessory;
    }
    if (endButtonIconProps && endButtonIconProps.length > 0) {
      // Reverse the array so first item appears rightmost
      // Use original index (before reversal) for stable React keys
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

  // Check if we have multiple end buttons for layout styling
  const hasMultipleEndButtons =
    !endAccessory && endButtonIconProps && endButtonIconProps.length > 1;

  const baseStyles = 'flex-row items-center gap-4 min-h-14';
  const resolvedTwClassName = twClassName
    ? `${baseStyles} ${twClassName}`
    : baseStyles;

  return (
    <View
      style={[
        tw.style(resolvedTwClassName),
        includesTopInset && { marginTop: insets.top },
        style,
      ]}
      testID={testID}
      {...viewProps}
    >
      {/* Start accessory */}
      {shouldRenderStartWrapper && (
        <View
          style={
            accessoryWrapperWidth
              ? tw.style('items-start', { width: accessoryWrapperWidth })
              : undefined
          }
          {...startAccessoryWrapperProps}
        >
          <View onLayout={handleStartAccessoryLayout}>
            {renderStartContent()}
          </View>
        </View>
      )}

      {/* Title */}
      <Box twClassName="flex-1 items-center">
        {typeof children === 'string' ? (
          <Text
            variant={HEADERBASE_TITLE_TEXT_VARIANT}
            testID={HEADERBASE_TITLE_TEST_ID}
            style={tw.style('text-center')}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Box>

      {/* End accessory */}
      {shouldRenderEndWrapper && (
        <View
          style={
            accessoryWrapperWidth
              ? tw.style('items-end', { width: accessoryWrapperWidth })
              : undefined
          }
          {...endAccessoryWrapperProps}
        >
          <View
            onLayout={handleEndAccessoryLayout}
            style={
              hasMultipleEndButtons ? tw.style('flex-row gap-2') : undefined
            }
          >
            {renderEndContent()}
          </View>
        </View>
      )}
    </View>
  );
};

export default HeaderBase;
