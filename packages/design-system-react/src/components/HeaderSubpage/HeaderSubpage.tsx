import {
  BoxAlignItems,
  BoxFlexDirection,
  ButtonIconSize,
  FontWeight,
  IconName,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef, useMemo } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import type { ButtonIconProps } from '../ButtonIcon';
import { Text } from '../Text';

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

export const HeaderSubpage = forwardRef<HTMLDivElement, HeaderSubpageProps>(
  (
    {
      avatar,
      title,
      titleProps,
      titleEndAccessory,
      description,
      descriptionProps,
      onBack,
      backButtonProps,
      onClose,
      closeButtonProps,
      startButtonIconProps,
      endButtonIconProps,
      startAccessory,
      endAccessory,
      accessoryGap = 2,
      className,
      ...props
    },
    ref,
  ) => {
    const resolvedStartAccessory = useMemo(() => {
      if (startAccessory) {
        return startAccessory;
      }

      if (startButtonIconProps) {
        return (
          <ButtonIcon size={ButtonIconSize.Md} {...startButtonIconProps} />
        );
      }

      if (onBack || backButtonProps) {
        const { ariaLabel, onClick, ...restBackButtonProps } =
          backButtonProps ?? {};
        return (
          <ButtonIcon
            iconName={IconName.ArrowLeft}
            size={ButtonIconSize.Md}
            ariaLabel={ariaLabel ?? 'Go back'}
            onClick={onClick ?? onBack}
            {...restBackButtonProps}
          />
        );
      }

      return undefined;
    }, [startAccessory, startButtonIconProps, onBack, backButtonProps]);

    const resolvedEndButtonIconProps = useMemo(() => {
      const iconProps: ButtonIconProps[] = [];

      if (onClose || closeButtonProps) {
        const { ariaLabel, onClick, ...restCloseButtonProps } =
          closeButtonProps ?? {};
        iconProps.push({
          iconName: IconName.Close,
          ariaLabel: ariaLabel ?? 'Close',
          onClick: onClick ?? onClose,
          ...restCloseButtonProps,
        });
      }

      if (endButtonIconProps) {
        iconProps.push(...endButtonIconProps);
      }

      return iconProps.length > 0 ? iconProps : undefined;
    }, [endButtonIconProps, onClose, closeButtonProps]);

    const resolvedEndAccessory = useMemo(() => {
      if (endAccessory) {
        return endAccessory;
      }

      if (resolvedEndButtonIconProps && resolvedEndButtonIconProps.length > 0) {
        const icons = renderEndButtonIcons(resolvedEndButtonIconProps);

        if (resolvedEndButtonIconProps.length > 1) {
          return <Box className="flex flex-row gap-2">{icons}</Box>;
        }

        return icons;
      }

      return undefined;
    }, [endAccessory, resolvedEndButtonIconProps]);

    const renderTitle = () => {
      if (!title) {
        return null;
      }

      if (typeof title === 'string') {
        return (
          <Text
            variant={TextVariant.BodyMd}
            fontWeight={FontWeight.Medium}
            color={TextColor.TextDefault}
            ellipsis
            {...titleProps}
          >
            {title}
          </Text>
        );
      }

      return title;
    };

    const renderDescription = () => {
      if (!description) {
        return null;
      }

      if (typeof description === 'string') {
        return (
          <Text
            variant={TextVariant.BodySm}
            fontWeight={FontWeight.Medium}
            color={TextColor.TextAlternative}
            ellipsis
            {...descriptionProps}
          >
            {description}
          </Text>
        );
      }

      return description;
    };

    const hasIdentityContent = avatar || title || description;

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={accessoryGap}
        className={twMerge('min-h-14 px-2', className)}
        {...props}
      >
        {resolvedStartAccessory}
        <Box className="min-w-0 flex-1">
          {hasIdentityContent && (
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={4}
            >
              {avatar}
              {(title || description) && (
                <Box className="min-w-0 flex-1">
                  {(title || titleEndAccessory) && (
                    <Box
                      flexDirection={BoxFlexDirection.Row}
                      alignItems={BoxAlignItems.Center}
                      gap={2}
                    >
                      {renderTitle()}
                      {titleEndAccessory}
                    </Box>
                  )}
                  {renderDescription()}
                </Box>
              )}
            </Box>
          )}
        </Box>
        {resolvedEndAccessory}
      </Box>
    );
  },
);

HeaderSubpage.displayName = 'HeaderSubpage';
