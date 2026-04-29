// Third party dependencies.
import { TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { TextOrChildren } from '../temp-components/TextOrChildren';

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

  let startContent = startAccessory ?? null;
  if (!startContent && startButtonIconProps) {
    startContent = (
      <ButtonIcon size={ButtonIconSize.Md} {...startButtonIconProps} />
    );
  }

  let endContent = endAccessory ?? null;
  if (!endContent && endButtonIconProps && endButtonIconProps.length > 0) {
    endContent = endButtonIconProps
      .map((iconProps, originalIndex) => ({
        iconProps,
        originalIndex,
      }))
      .reverse()
      .map(({ iconProps, originalIndex }) => (
        <ButtonIcon
          key={`end-button-icon-${originalIndex}`}
          size={ButtonIconSize.Md}
          {...iconProps}
        />
      ));
  }

  const hasStartContent = Boolean(startContent);
  const hasEndContent = Boolean(endContent);
  const hasAnyAccessory = hasStartContent || hasEndContent;
  const shouldRenderStartWrapper = Boolean(hasAnyAccessory);
  const shouldRenderEndWrapper = Boolean(hasAnyAccessory);

  // Calculate equal width for both accessory wrappers to ensure title stays centered.
  const accessoryWrapperWidth =
    hasAnyAccessory && (startAccessoryWidth || endAccessoryWidth)
      ? Math.max(startAccessoryWidth, endAccessoryWidth)
      : undefined;

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
        content: startContent,
      })}

      {/* Title */}
      <View style={tw.style('flex-1 items-center')}>
        <TextOrChildren
          textProps={{
            variant: TextVariant.HeadingSm,
            ...textProps,
            style: [tw.style('text-center'), textProps?.style],
          }}
        >
          {children}
        </TextOrChildren>
      </View>

      {/* End accessory */}
      {renderAccessoryWrapper({
        shouldRender: shouldRenderEndWrapper,
        wrapperProps: endAccessoryWrapperProps,
        alignment: 'items-end',
        onLayout: handleEndAccessoryLayout,
        content: endContent,
        contentStyle: hasMultipleEndButtons
          ? tw.style('flex-row gap-2')
          : undefined,
      })}
    </View>
  );
};

HeaderBase.displayName = 'HeaderBase';
