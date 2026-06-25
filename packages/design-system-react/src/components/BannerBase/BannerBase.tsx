import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  ButtonIconSize,
  ButtonSize,
  ButtonVariant,
  FontWeight,
  IconName,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { Button } from '../Button';
import { ButtonIcon } from '../ButtonIcon';
import { Text } from '../Text';

import type { BannerBaseProps } from './BannerBase.types';

const isTextContent = (content: React.ReactNode): content is string | number =>
  typeof content === 'string' || typeof content === 'number';

const hasContent = (content: React.ReactNode) =>
  content !== null && content !== undefined;

export const BannerBase = forwardRef<HTMLDivElement, BannerBaseProps>(
  (
    {
      title,
      titleProps,
      description,
      descriptionProps,
      children,
      childrenWrapperProps,
      actionButtonLabel,
      actionButtonOnClick,
      actionButtonProps,
      startAccessory,
      onClose,
      closeButtonProps,
      className,
      ...props
    },
    ref,
  ) => {
    const resolvedActionButtonProps = actionButtonProps ?? {};

    const {
      ariaLabel: closeButtonAriaLabel = 'Close banner',
      className: closeButtonClassName,
      ...resolvedCloseButtonProps
    } = closeButtonProps ?? {};

    const shouldShowCloseButton = Boolean(onClose);
    const shouldShowActionButton = Boolean(actionButtonOnClick);

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Start}
        gap={4}
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        paddingVertical={3}
        paddingHorizontal={4}
        className={twMerge('rounded-xl', className)}
        {...props}
      >
        {startAccessory}

        <Box className="min-w-0 flex-1">
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
            <Box className="mt-2">
              <Button
                size={ButtonSize.Md}
                onClick={actionButtonOnClick}
                {...resolvedActionButtonProps}
                variant={ButtonVariant.Secondary}
              >
                {actionButtonLabel}
              </Button>
            </Box>
          )}
        </Box>

        {shouldShowCloseButton && (
          <ButtonIcon
            className={twMerge('-mt-1 self-start', closeButtonClassName)}
            iconName={IconName.Close}
            size={ButtonIconSize.Md}
            ariaLabel={closeButtonAriaLabel}
            onClick={onClose}
            {...resolvedCloseButtonProps}
          />
        )}
      </Box>
    );
  },
);

BannerBase.displayName = 'BannerBase';
