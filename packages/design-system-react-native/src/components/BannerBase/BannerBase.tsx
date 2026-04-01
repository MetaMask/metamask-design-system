import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
} from '@metamask/design-system-shared';
import React from 'react';
import { GestureResponderEvent } from 'react-native';

import {
  ButtonIconSize,
  ButtonSize,
  FontWeight,
  IconName,
  TextVariant,
} from '../../types';
import { Box } from '../Box';
import { Button } from '../Button';
import { ButtonIcon } from '../ButtonIcon';
import { Text } from '../Text';

import type { BannerBaseProps } from './BannerBase.types';

const isTextContent = (content: React.ReactNode): content is string | number =>
  typeof content === 'string' || typeof content === 'number';

const hasContent = (content: React.ReactNode) =>
  content !== null && content !== undefined;

export const BannerBase: React.FC<BannerBaseProps> = ({
  title,
  titleProps,
  description,
  descriptionProps,
  children,
  childrenWrapperProps,
  actionButtonLabel,
  actionButtonOnPress,
  actionButtonProps,
  startAccessory,
  onClose,
  closeButtonProps,
  twClassName,
  ...props
}) => {
  const resolvedActionButtonProps = actionButtonProps ?? {};

  const {
    accessibilityLabel: closeButtonAccessibilityLabel = 'Close banner',
    onPress: closeButtonPropsOnPress,
    twClassName: closeButtonTwClassName,
    ...resolvedCloseButtonProps
  } = closeButtonProps ?? {};

  const shouldShowCloseButton = Boolean(onClose || closeButtonProps);
  const shouldShowActionButton = Boolean(actionButtonOnPress);

  const handleClosePress =
    onClose || closeButtonPropsOnPress
      ? (event: GestureResponderEvent) => {
          if (onClose) {
            onClose();
            return;
          }
          closeButtonPropsOnPress?.(event);
        }
      : undefined;

  const mergedCloseButtonTwClassName = closeButtonTwClassName
    ? `ml-3 ${closeButtonTwClassName}`
    : 'ml-3';

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Start}
      gap={2}
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      padding={3}
      twClassName={twClassName ? `rounded-sm ${twClassName}` : 'rounded-sm'}
      {...props}
    >
      {startAccessory}

      <Box twClassName="flex-1">
        {hasContent(title) &&
          (isTextContent(title) ? (
            <Text
              variant={TextVariant.BodyMd}
              fontWeight={FontWeight.Medium}
              {...titleProps}
            >
              {title}
            </Text>
          ) : (
            title
          ))}

        {hasContent(description) && (
          <Box twClassName={hasContent(title) ? 'mt-1' : undefined}>
            {isTextContent(description) ? (
              <Text variant={TextVariant.BodySm} {...descriptionProps}>
                {description}
              </Text>
            ) : (
              description
            )}
          </Box>
        )}

        {hasContent(children) &&
          (isTextContent(children) ? (
            <Text variant={TextVariant.BodyMd} {...childrenWrapperProps}>
              {children}
            </Text>
          ) : (
            children
          ))}

        {shouldShowActionButton && (
          <Box twClassName="mt-4">
            <Button
              size={ButtonSize.Md}
              onPress={actionButtonOnPress}
              {...resolvedActionButtonProps}
            >
              {actionButtonLabel}
            </Button>
          </Box>
        )}
      </Box>

      {shouldShowCloseButton && (
        <ButtonIcon
          twClassName={mergedCloseButtonTwClassName}
          iconName={IconName.Close}
          size={ButtonIconSize.Sm}
          accessibilityLabel={closeButtonAccessibilityLabel}
          onPress={handleClosePress}
          {...resolvedCloseButtonProps}
        />
      )}
    </Box>
  );
};
