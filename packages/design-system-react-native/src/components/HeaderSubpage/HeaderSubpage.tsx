// Third party dependencies.
import { mergeTwClassName } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import type { ButtonIconProps } from '../ButtonIcon';
import { IconName } from '../Icon';
import { ListItem } from '../ListItem';

// Internal dependencies.
import type { HeaderSubpageProps } from './HeaderSubpage.types';

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

export const HeaderSubpage: React.FC<HeaderSubpageProps> = ({
  onBack,
  backButtonProps,
  onClose,
  closeButtonProps,
  startButtonIconProps,
  endButtonIconProps,
  startAccessory,
  endAccessory,
  includesTopInset = false,
  twClassName = '',
  style,
  accessoryGap = 2,
  testID,
  ...listItemProps
}) => {
  const tw = useTailwind();
  const insets = useSafeAreaInsets();

  const resolvedStartAccessory = useMemo(() => {
    if (startAccessory) {
      return startAccessory;
    }

    if (startButtonIconProps) {
      return <ButtonIcon size={ButtonIconSize.Md} {...startButtonIconProps} />;
    }

    if (onBack || backButtonProps) {
      return (
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          {...(backButtonProps ?? {})}
          onPress={backButtonProps?.onPress ?? onBack}
        />
      );
    }

    return undefined;
  }, [startAccessory, startButtonIconProps, onBack, backButtonProps]);

  const resolvedEndButtonIconProps = useMemo(() => {
    const props: ButtonIconProps[] = [];

    if (onClose || closeButtonProps) {
      props.push({
        iconName: IconName.Close,
        ...(closeButtonProps || {}),
        onPress: closeButtonProps?.onPress ?? onClose,
      });
    }

    if (endButtonIconProps) {
      props.push(...endButtonIconProps);
    }

    return props.length > 0 ? props : undefined;
  }, [endButtonIconProps, onClose, closeButtonProps]);

  const resolvedEndAccessory = useMemo(() => {
    if (endAccessory) {
      return endAccessory;
    }

    if (resolvedEndButtonIconProps && resolvedEndButtonIconProps.length > 0) {
      const icons = renderEndButtonIcons(resolvedEndButtonIconProps);

      if (resolvedEndButtonIconProps.length > 1) {
        return <View style={tw.style('flex-row gap-2')}>{icons}</View>;
      }

      return icons;
    }

    return undefined;
  }, [endAccessory, resolvedEndButtonIconProps, tw]);

  return (
    <ListItem
      {...listItemProps}
      testID={testID}
      startAccessory={resolvedStartAccessory}
      endAccessory={resolvedEndAccessory}
      accessoryGap={accessoryGap}
      twClassName={mergeTwClassName(
        'h-14 px-2 py-0 justify-center',
        twClassName,
      )}
      style={[includesTopInset && { marginTop: insets.top }, style]}
    />
  );
};

HeaderSubpage.displayName = 'HeaderSubpage';
