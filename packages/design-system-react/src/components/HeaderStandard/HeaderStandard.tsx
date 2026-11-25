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
import type { ReactNode } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import type { ButtonIconProps } from '../ButtonIcon';
import { HeaderBase } from '../HeaderBase';
import { Text } from '../Text';

import type { HeaderStandardProps } from './HeaderStandard.types';

const DEFAULT_BACK_ARIA_LABEL = 'Back';
const DEFAULT_CLOSE_ARIA_LABEL = 'Close';

/**
 * Centered page/modal header with optional back and close shortcuts.
 *
 * Composes {@link HeaderBase} with resolved `ButtonIcon` accessories and a
 * flatter title/subtitle column (`Box` + `Text` — no `TextOrChildren`).
 */
export const HeaderStandard = forwardRef<HTMLDivElement, HeaderStandardProps>(
  (
    {
      title,
      titleProps,
      subtitle,
      subtitleProps,
      children,
      onBack,
      backButtonProps,
      onClose,
      closeButtonProps,
      endButtonIconProps,
      startButtonIconProps,
      startAccessory,
      endAccessory,
      className,
      ...headerBaseProps
    },
    ref,
  ) => {
    const resolvedStartButtonIconProps = useMemo(():
      | ButtonIconProps
      | undefined => {
      if (startButtonIconProps) {
        return startButtonIconProps;
      }
      if (onBack || backButtonProps) {
        return {
          iconName: IconName.ArrowLeft,
          ariaLabel: DEFAULT_BACK_ARIA_LABEL,
          ...(backButtonProps ?? {}),
          onClick: backButtonProps?.onClick ?? onBack,
        };
      }
      return undefined;
    }, [onBack, backButtonProps, startButtonIconProps]);

    const resolvedEndButtonIconProps = useMemo(():
      | ButtonIconProps[]
      | undefined => {
      const props: ButtonIconProps[] = [];

      if (onClose || closeButtonProps) {
        props.push({
          iconName: IconName.Close,
          ariaLabel: DEFAULT_CLOSE_ARIA_LABEL,
          ...(closeButtonProps || {}),
          onClick: closeButtonProps?.onClick ?? onClose,
        });
      }

      if (endButtonIconProps) {
        props.push(...endButtonIconProps);
      }
      return props.length > 0 ? props : undefined;
    }, [endButtonIconProps, onClose, closeButtonProps]);

    let resolvedStartAccessory: ReactNode = startAccessory;
    if (!resolvedStartAccessory && resolvedStartButtonIconProps) {
      resolvedStartAccessory = (
        <ButtonIcon
          size={ButtonIconSize.Md}
          {...resolvedStartButtonIconProps}
        />
      );
    }

    const resolvedEndAccessory = ((): ReactNode => {
      if (endAccessory) {
        return endAccessory;
      }
      if (resolvedEndButtonIconProps && resolvedEndButtonIconProps.length > 0) {
        const reversedProps = resolvedEndButtonIconProps
          .map((buttonProps, originalIndex) => ({
            buttonProps,
            originalIndex,
          }))
          .reverse();
        const icons = reversedProps.map(({ buttonProps, originalIndex }) => (
          <ButtonIcon
            key={`end-button-icon-${originalIndex}`}
            size={ButtonIconSize.Md}
            {...buttonProps}
          />
        ));
        if (icons.length === 1) {
          return icons[0];
        }
        return (
          <Box flexDirection={BoxFlexDirection.Row} gap={2}>
            {icons}
          </Box>
        );
      }
      return undefined;
    })();

    const centerContent = ((): ReactNode => {
      if (children) {
        return children;
      }
      if (!title) {
        return null;
      }

      const titleNode =
        typeof title === 'string' ? (
          <Text
            variant={TextVariant.BodyMd}
            fontWeight={FontWeight.Bold}
            {...titleProps}
          >
            {title}
          </Text>
        ) : (
          title
        );

      let subtitleNode: ReactNode = null;
      if (subtitle) {
        if (typeof subtitle === 'string') {
          const { className: subtitleClassName, ...subtitleRest } =
            subtitleProps ?? {};
          subtitleNode = (
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
              {...subtitleRest}
              className={twMerge('-mt-0.5', subtitleClassName)}
            >
              {subtitle}
            </Text>
          );
        } else {
          subtitleNode = subtitle;
        }
      }

      return (
        <Box
          flexDirection={BoxFlexDirection.Column}
          alignItems={BoxAlignItems.Center}
        >
          {titleNode}
          {subtitleNode}
        </Box>
      );
    })();

    return (
      <HeaderBase
        ref={ref}
        {...headerBaseProps}
        startAccessory={resolvedStartAccessory}
        endAccessory={resolvedEndAccessory}
        className={twMerge(
          // Match the React Native HeaderBase root: fixed 56px height and a
          // 16px gap between the accessories and the centered title column.
          'h-14 gap-4 px-2',
          className,
        )}
      >
        {centerContent}
      </HeaderBase>
    );
  },
);

HeaderStandard.displayName = 'HeaderStandard';
