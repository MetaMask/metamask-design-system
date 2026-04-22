// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { TextOrChildren } from '../temp-components/TextOrChildren';
import { TextVariant } from '../Text';

import type { HeaderBaseProps } from './HeaderBase.types';

export const HeaderBase: React.FC<HeaderBaseProps> = ({
  children,
  style,
  startAccessory,
  endAccessory,
  startButtonIconProps,
  endButtonIconProps,
  includesTopInset = false,
  startAccessoryWrapperProps,
  endAccessoryWrapperProps,
  textProps,
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
  const shouldRenderStartWrapper = Boolean(hasAnyAccessory);
  const shouldRenderEndWrapper = Boolean(hasAnyAccessory);

  // Calculate equal width for both accessory wrappers to ensure title stays centered.
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

  const renderAccessoryWrapper = ({
    shouldRender,
    wrapperProps,
    alignment,
    onLayout,
    content,
    contentStyle,
  }: {
    shouldRender: boolean;
    wrapperProps?: HeaderBaseProps['startAccessoryWrapperProps'];
    alignment: 'items-start' | 'items-end';
    onLayout: (e: LayoutChangeEvent) => void;
    content: React.ReactNode;
    contentStyle?: ReturnType<typeof tw.style>;
  }) => {
    if (!shouldRender) {
      return null;
    }

    return (
      <View
        style={
          accessoryWrapperWidth
            ? tw.style(alignment, { width: accessoryWrapperWidth })
            : undefined
        }
        {...wrapperProps}
      >
        <View onLayout={onLayout} style={contentStyle}>
          {content}
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        tw.style('flex-row items-center gap-4 h-14', twClassName),
        includesTopInset && { marginTop: insets.top },
        style,
      ]}
      {...props}
    >
      {/* Start accessory */}
      {renderAccessoryWrapper({
        shouldRender: shouldRenderStartWrapper,
        wrapperProps: startAccessoryWrapperProps,
        alignment: 'items-start',
        onLayout: handleStartAccessoryLayout,
        content: renderStartContent(),
      })}

      {/* Title */}
      <TextOrChildren
        textProps={{
          variant: TextVariant.HeadingSm,
          ...textProps,
          style: [
            tw.style('text-center flex-1 items-center'),
            textProps?.style,
          ],
        }}
      >
        {children}
      </TextOrChildren>

      {/* End accessory */}
      {renderAccessoryWrapper({
        shouldRender: shouldRenderEndWrapper,
        wrapperProps: endAccessoryWrapperProps,
        alignment: 'items-end',
        onLayout: handleEndAccessoryLayout,
        content: renderEndContent(),
        contentStyle: hasMultipleEndButtons
          ? tw.style('flex-row gap-2')
          : undefined,
      })}
    </View>
  );
};

HeaderBase.displayName = 'HeaderBase';
