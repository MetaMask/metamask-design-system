import { FontWeight, TextVariant } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import {
  BoxAlignItems,
  BoxBackgroundColor,
  ButtonIconSize,
  ButtonSize,
  BoxFlexDirection,
  IconName,
} from '../../types';
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
      onClick: closeButtonPropsOnClick,
      className: closeButtonClassName,
      ...resolvedCloseButtonProps
    } = closeButtonProps ?? {};

    const shouldShowCloseButton = Boolean(onClose || closeButtonProps);
    const shouldShowActionButton = Boolean(actionButtonOnClick);

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Start}
        gap={2}
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        padding={3}
        className={twMerge('rounded-sm', className)}
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
            <Box className={hasContent(title) ? 'mt-1' : undefined}>
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
            <Box className="mt-4">
              <Button
                size={ButtonSize.Md}
                onClick={actionButtonOnClick}
                {...resolvedActionButtonProps}
              >
                {actionButtonLabel}
              </Button>
            </Box>
          )}
        </Box>

        {shouldShowCloseButton && (
          <ButtonIcon
            className={twMerge('ml-3 self-start', closeButtonClassName)}
            iconName={IconName.Close}
            size={ButtonIconSize.Sm}
            ariaLabel={closeButtonAriaLabel}
            onClick={onClose ?? closeButtonPropsOnClick}
            {...resolvedCloseButtonProps}
          />
        )}
      </Box>
    );
  },
);

BannerBase.displayName = 'BannerBase';
