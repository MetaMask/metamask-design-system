import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  ButtonIconSize,
  ButtonSize,
  FontWeight,
  IconName,
  mergeTwClassName,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

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
    twClassName: closeButtonTwClassName,
    ...resolvedCloseButtonProps
  } = closeButtonProps ?? {};

  const shouldShowCloseButton = Boolean(onClose);
  const shouldShowActionButton = Boolean(actionButtonOnPress);

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Start}
      gap={4}
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      paddingVertical={3}
      paddingHorizontal={4}
      twClassName={mergeTwClassName('rounded-xl', twClassName)}
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
          <Box>
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
          <Box twClassName="mt-2">
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
          twClassName={closeButtonTwClassName}
          iconName={IconName.Close}
          size={ButtonIconSize.Sm}
          accessibilityLabel={closeButtonAccessibilityLabel}
          onPress={onClose}
          {...resolvedCloseButtonProps}
        />
      )}
    </Box>
  );
};
