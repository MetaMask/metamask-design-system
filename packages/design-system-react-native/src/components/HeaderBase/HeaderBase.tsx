// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { Box } from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { Text } from '../Text';

// Internal dependencies.
import {
  HEADERBASE_TITLE_TEST_ID,
  HEADERBASE_VARIANT_TEXT_VARIANTS,
} from './HeaderBase.constants';
import type { HeaderBaseProps } from './HeaderBase.types';
import { HeaderBaseVariant } from './HeaderBase.types';

const HeaderBase: React.FC<HeaderBaseProps> = ({
  children,
  style,
  startAccessory,
  endAccessory,
  startButtonIconProps,
  endButtonIconProps,
  includesTopInset = false,
  variant = HeaderBaseVariant.Compact,
  startAccessoryWrapperProps,
  endAccessoryWrapperProps,
  titleTestID = HEADERBASE_TITLE_TEST_ID,
  twClassName,
  ...props
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

  // Determine alignment and text variant based on variant prop
  const isLeftAligned = variant === HeaderBaseVariant.Display;
  const textVariant = HEADERBASE_VARIANT_TEXT_VARIANTS[variant];

  // Determine what to render for start/end
  const hasStartContent = startAccessory || startButtonIconProps;
  const hasEndContent =
    endAccessory || (endButtonIconProps && endButtonIconProps.length > 0);
  const hasAnyAccessory = hasStartContent || hasEndContent;

  // For Compact: render both wrappers if any accessory exists (for centering)
  // For Display: only render wrappers if their respective accessory exists
  const shouldRenderStartWrapper = isLeftAligned
    ? Boolean(hasStartContent)
    : hasAnyAccessory;
  const shouldRenderEndWrapper = isLeftAligned
    ? Boolean(hasEndContent)
    : hasAnyAccessory;

  // Calculate equal width for both accessory wrappers to ensure title stays centered
  // Only needed for Compact variant
  const accessoryWrapperWidth =
    !isLeftAligned &&
    hasAnyAccessory &&
    (startAccessoryWidth || endAccessoryWidth)
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
        .map((iconProps, originalIndex) => ({
          iconProps,
          originalIndex,
        }))
        .reverse();
      return reversedProps.map(({ iconProps, originalIndex }) => (
        <ButtonIcon
          key={`end-button-icon-${originalIndex}`}
          size={ButtonIconSize.Md}
          {...iconProps}
        />
      ));
    }
    return null;
  };

  // Check if we have multiple end buttons for layout styling
  const hasMultipleEndButtons =
    !endAccessory && endButtonIconProps && endButtonIconProps.length > 1;

  // Merge default styles with passed-in twClassName
  // Compact: fixed height, Display: content-based with no default styles
  const baseStyles = isLeftAligned
    ? 'flex-row items-center gap-4'
    : 'flex-row items-center gap-4 h-14';
  const resolvedTwClassName = twClassName
    ? `${baseStyles} ${twClassName}`
    : baseStyles;

  // Title classes based on variant
  const titleWrapperClass = isLeftAligned
    ? 'flex-1 items-start'
    : 'flex-1 items-center';

  return (
    <View
      style={[
        tw.style(resolvedTwClassName),
        includesTopInset && { marginTop: insets.top },
        style,
      ]}
      {...props}
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
      <Box twClassName={titleWrapperClass}>
        {typeof children === 'string' ? (
          <Text
            variant={textVariant}
            testID={titleTestID}
            style={isLeftAligned ? undefined : tw.style('text-center')}
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
