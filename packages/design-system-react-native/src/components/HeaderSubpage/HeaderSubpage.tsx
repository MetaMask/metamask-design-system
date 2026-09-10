// Third party dependencies.
import {
  BoxAlignItems,
  mergeTwClassName,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import type { ButtonIconProps } from '../ButtonIcon';
import { Content } from '../Content';
import { IconName } from '../Icon';

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
  variant,
  avatar,
  title,
  titleProps,
  titleStartAccessory,
  titleEndAccessory,
  description,
  descriptionProps,
  descriptionStartAccessory,
  descriptionEndAccessory,
  value,
  valueProps,
  valueStartAccessory,
  valueEndAccessory,
  subvalue,
  subvalueProps,
  subvalueStartAccessory,
  subvalueEndAccessory,
  ...boxProps
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

  const hasRowAccessories =
    Boolean(resolvedStartAccessory) || Boolean(resolvedEndAccessory);

  const content = (
    <Content
      twClassName={hasRowAccessories ? 'flex-1 min-w-0' : undefined}
      variant={variant}
      avatar={avatar}
      title={title}
      titleProps={titleProps}
      titleStartAccessory={titleStartAccessory}
      titleEndAccessory={titleEndAccessory}
      description={description}
      descriptionProps={descriptionProps}
      descriptionStartAccessory={descriptionStartAccessory}
      descriptionEndAccessory={descriptionEndAccessory}
      value={value}
      valueProps={valueProps}
      valueStartAccessory={valueStartAccessory}
      valueEndAccessory={valueEndAccessory}
      subvalue={subvalue}
      subvalueProps={subvalueProps}
      subvalueStartAccessory={subvalueStartAccessory}
      subvalueEndAccessory={subvalueEndAccessory}
    />
  );

  const headerContent = hasRowAccessories ? (
    <BoxRow
      startAccessory={resolvedStartAccessory}
      endAccessory={resolvedEndAccessory}
      alignItems={BoxAlignItems.Center}
      gap={accessoryGap}
    >
      {content}
    </BoxRow>
  ) : (
    content
  );

  const rootTwClassName = mergeTwClassName(
    'h-14 px-2 py-0 justify-center',
    twClassName,
  );

  return (
    <Box
      {...boxProps}
      testID={testID}
      twClassName={rootTwClassName}
      style={[
        tw.style(rootTwClassName),
        includesTopInset && { marginTop: insets.top },
        style,
      ]}
    >
      {headerContent}
    </Box>
  );
};

HeaderSubpage.displayName = 'HeaderSubpage';
