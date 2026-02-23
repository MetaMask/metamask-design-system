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
import { HEADERBASE_VARIANT_TEXT_VARIANTS } from './HeaderBase.constants';
import type { HeaderBaseProps } from './HeaderBase.types';
import { HeaderBaseVariant } from './HeaderBase.types';

export const HeaderBase: React.FC<HeaderBaseProps> = ({
  children,
  style,
  variant = HeaderBaseVariant.Compact,
  startAccessory,
  endAccessory,
  startButtonIconProps,
  endButtonIconProps,
  includesTopInset = false,
  startAccessoryWrapperProps,
  endAccessoryWrapperProps,
  titleTestID,
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

  // Determine what to render for start/end
  const hasStartContent = startAccessory || startButtonIconProps;
  const hasEndContent =
    endAccessory || (endButtonIconProps && endButtonIconProps.length > 0);
  const hasAnyAccessory = hasStartContent || hasEndContent;

  // Render both wrappers if any accessory exists (for centering)
  const shouldRenderStartWrapper = Boolean(hasAnyAccessory);
  const shouldRenderEndWrapper = Boolean(hasAnyAccessory);

  // Calculate equal width for both accessory wrappers to ensure title stays centered
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
  const baseStyles = 'flex-row items-center gap-4 h-14';
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
      <Box twClassName="flex-1 items-center">
        {typeof children === 'string' ? (
          <Text
            variant={HEADERBASE_VARIANT_TEXT_VARIANTS[variant]}
            testID={titleTestID}
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
