// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback, useState } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { Box } from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { Text } from '../Text';

// Internal dependencies.
import {
  HEADERBASE_TEST_ID,
  HEADERBASE_TITLE_TEST_ID,
  HEADERBASE_TITLE_TEXT_VARIANT,
} from './HeaderBase.constants';
import { HeaderBaseProps } from './HeaderBase.types';

/**
 * HeaderBase is a flexible header component that supports optional
 * start and end accessories with a center-aligned title.
 * When includesTopInset is true, the app tree must include SafeAreaProvider
 * from react-native-safe-area-context.
 *
 * @param options0 - Component props.
 * @param options0.children - Title or custom content.
 * @param options0.style - Optional container style.
 * @param options0.startAccessory - Content before the title.
 * @param options0.endAccessory - Content after the title.
 * @param options0.startButtonIconProps - ButtonIcon props for start.
 * @param options0.endButtonIconProps - ButtonIcon props for end.
 * @param options0.includesTopInset - Whether to include top safe area inset.
 * @param options0.startAccessoryWrapperProps - Props for start wrapper View.
 * @param options0.endAccessoryWrapperProps - Props for end wrapper View.
 * @param options0.testID - Test ID for the container.
 * @param options0.twClassName - Tailwind class names for the container.
 * @returns Header element.
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
  const hasEndButtons =
    Array.isArray(endButtonIconProps) && endButtonIconProps.length > 0;
  /* istanbul ignore next -- branch coverage quirk in CI */
  const hasEndContent = endAccessory || hasEndButtons;
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
