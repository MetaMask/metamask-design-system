// Third party dependencies.
import { TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import type { ButtonIconProps } from '../ButtonIcon';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { HeaderBaseProps } from './HeaderBase.types';

// `startAccessory` is the primary escape hatch. `startButtonIconProps`
// remains as a convenience path for the common single-back-button case.
const resolveStartAccessory = ({
  startAccessory,
  startButtonIconProps,
}: Pick<HeaderBaseProps, 'startAccessory' | 'startButtonIconProps'>) => {
  if (startAccessory) {
    return startAccessory;
  }

  if (startButtonIconProps) {
    return <ButtonIcon size={ButtonIconSize.Md} {...startButtonIconProps} />;
  }

  return null;
};

// Only the end side supports built-in multiple buttons. More complex
// start-side layouts should be composed explicitly with `startAccessory`.
const renderEndButtonIcons = (endButtonIconProps: ButtonIconProps[]) =>
  endButtonIconProps
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

// `endAccessory` takes precedence over the shorthand icon-props array.
const resolveEndAccessory = ({
  endAccessory,
  endButtonIconProps,
}: Pick<HeaderBaseProps, 'endAccessory' | 'endButtonIconProps'>) => {
  if (endAccessory) {
    return {
      resolvedEndAccessory: endAccessory,
      hasMultipleEndButtons: false,
    };
  }

  if (endButtonIconProps && endButtonIconProps.length > 0) {
    return {
      resolvedEndAccessory: renderEndButtonIcons(endButtonIconProps),
      hasMultipleEndButtons: endButtonIconProps.length > 1,
    };
  }

  return {
    resolvedEndAccessory: null,
    hasMultipleEndButtons: false,
  };
};

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

  // Normalize the public API into resolved slots so the render path only deals
  // with layout and title rendering.
  const resolvedStartAccessory = resolveStartAccessory({
    startAccessory,
    startButtonIconProps,
  });
  const { resolvedEndAccessory, hasMultipleEndButtons } = resolveEndAccessory({
    endAccessory,
    endButtonIconProps,
  });

  const hasStartAccessory = Boolean(resolvedStartAccessory);
  const hasEndAccessory = Boolean(resolvedEndAccessory);
  const hasAnyAccessory = hasStartAccessory || hasEndAccessory;

  // Calculate equal width for both accessory wrappers to ensure title stays centered.
  const accessoryWrapperWidth =
    hasAnyAccessory && (startAccessoryWidth || endAccessoryWidth)
      ? Math.max(startAccessoryWidth, endAccessoryWidth)
      : undefined;

  const renderAccessoryWrapper = ({
    wrapperProps,
    alignment,
    onLayout,
    content,
    measuredContentStyle,
  }: {
    wrapperProps?: HeaderBaseProps['startAccessoryWrapperProps'];
    alignment: 'items-start' | 'items-end';
    onLayout: (e: LayoutChangeEvent) => void;
    content: React.ReactNode;
    measuredContentStyle?: ReturnType<typeof tw.style>;
  }) => {
    if (!hasAnyAccessory) {
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
        <View onLayout={onLayout} style={measuredContentStyle}>
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
        wrapperProps: startAccessoryWrapperProps,
        alignment: 'items-start',
        onLayout: handleStartAccessoryLayout,
        content: resolvedStartAccessory,
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
        wrapperProps: endAccessoryWrapperProps,
        alignment: 'items-end',
        onLayout: handleEndAccessoryLayout,
        content: resolvedEndAccessory,
        measuredContentStyle: hasMultipleEndButtons
          ? tw.style('flex-row gap-2')
          : undefined,
      })}
    </View>
  );
};

HeaderBase.displayName = 'HeaderBase';
