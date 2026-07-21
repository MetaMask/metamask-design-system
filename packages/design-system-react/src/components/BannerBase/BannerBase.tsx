import {
  BannerBaseActionButtonLayout,
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
      actionButtonLayout = BannerBaseActionButtonLayout.Below,
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
    const isActionButtonLayoutEnd =
      actionButtonLayout === BannerBaseActionButtonLayout.End;
    const hasActionButtonBelow =
      shouldShowActionButton && !isActionButtonLayoutEnd;

    const actionButton = shouldShowActionButton ? (
      <Button
        size={ButtonSize.Md}
        onClick={actionButtonOnClick}
        {...resolvedActionButtonProps}
        variant={ButtonVariant.Secondary}
      >
        {actionButtonLabel}
      </Button>
    ) : null;

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Start}
        gap={4}
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        paddingTop={3}
        paddingBottom={hasActionButtonBelow ? 4 : 3}
        paddingLeft={4}
        paddingRight={shouldShowCloseButton ? 2 : 4}
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
            <Box className={hasContent(title) ? 'mt-0.5' : undefined}>
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

          {hasActionButtonBelow && (
            <Box className="mt-2">{actionButton}</Box>
          )}
        </Box>

        {shouldShowActionButton && isActionButtonLayoutEnd && actionButton}

        {shouldShowCloseButton && (
          <ButtonIcon
            className={twMerge('-mt-1', closeButtonClassName)}
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
