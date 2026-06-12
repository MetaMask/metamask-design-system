// Third party dependencies.
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
  endButtonIconProps,
  startAccessory,
  endAccessory,
  includesTopInset = false,
  twClassName = '',
  style,
  testID,
  ...listItemProps
}) => {
  const tw = useTailwind();
  const insets = useSafeAreaInsets();

  const { resolvedStartAccessory, hasStartButtonIcon } = useMemo(() => {
    if (startAccessory) {
      return {
        resolvedStartAccessory: startAccessory,
        hasStartButtonIcon: false,
      };
    }

    if (onBack || backButtonProps) {
      const {
        twClassName: backButtonTwClassName,
        onPress: backButtonOnPress,
        ...restBackButtonProps
      } = backButtonProps ?? {};

      return {
        resolvedStartAccessory: (
          <ButtonIcon
            iconName={IconName.ArrowLeft}
            size={ButtonIconSize.Md}
            {...restBackButtonProps}
            twClassName={`mr-1 ${backButtonTwClassName ?? ''}`.trim()}
            onPress={backButtonOnPress ?? onBack}
          />
        ),
        hasStartButtonIcon: true,
      };
    }

    return {
      resolvedStartAccessory: undefined,
      hasStartButtonIcon: false,
    };
  }, [startAccessory, onBack, backButtonProps]);

  const { resolvedEndAccessory, hasEndButtonIcons } = useMemo(() => {
    if (endAccessory) {
      return {
        resolvedEndAccessory: endAccessory,
        hasEndButtonIcons: false,
      };
    }

    const props: ButtonIconProps[] = [];

    if (onClose || closeButtonProps) {
      props.push({
        iconName: IconName.Close,
        ...(closeButtonProps ?? {}),
        onPress: closeButtonProps?.onPress ?? onClose,
      });
    }

    if (endButtonIconProps) {
      props.push(...endButtonIconProps);
    }

    if (props.length === 0) {
      return {
        resolvedEndAccessory: undefined,
        hasEndButtonIcons: false,
      };
    }

    if (props.length === 1) {
      return {
        resolvedEndAccessory: (
          <ButtonIcon size={ButtonIconSize.Md} {...props[0]} />
        ),
        hasEndButtonIcons: true,
      };
    }

    return {
      resolvedEndAccessory: (
        <View style={tw.style('flex-row gap-2 ml-1')}>
          {renderEndButtonIcons(props)}
        </View>
      ),
      hasEndButtonIcons: true,
    };
  }, [endAccessory, onClose, closeButtonProps, endButtonIconProps, tw]);

  const horizontalPadding = `${hasStartButtonIcon ? 'pl-2' : 'pl-4'} ${
    hasEndButtonIcons ? 'pr-2' : 'pr-4'
  }`;

  return (
    <ListItem
      {...listItemProps}
      testID={testID}
      twClassName={`min-h-14 w-full ${horizontalPadding} py-0 justify-center ${twClassName}`.trim()}
      style={[includesTopInset && { marginTop: insets.top }, style]}
      startAccessory={resolvedStartAccessory}
      endAccessory={resolvedEndAccessory}
    />
  );
};

HeaderSubpage.displayName = 'HeaderSubpage';
