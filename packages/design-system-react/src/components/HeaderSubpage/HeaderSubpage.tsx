import React, { forwardRef, useMemo } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import type { ButtonIconProps } from '../ButtonIcon';
import { IconName } from '../Icon';

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
      children,
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
        {children && <div className="min-w-0 flex-1">{children}</div>}
        {resolvedEndAccessory}
      </Box>
    );
  },
);

HeaderSubpage.displayName = 'HeaderSubpage';
