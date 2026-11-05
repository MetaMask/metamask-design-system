import {
  BoxAlignItems,
  BoxFlexDirection,
  ButtonIconSize,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { Text } from '../Text';

import type { HeaderRootProps } from './HeaderRoot.types';

/**
 * Top-level header with a left section (`children` or title row) and an optional
 * end section (`endAccessory` or `endButtonIconProps`).
 *
 * Implemented with direct `Box` / `Text` / `ButtonIcon` (no `BoxRow` /
 * `TextOrChildren`). Prefer this over `HeaderBase` on root/tab entry screens
 * that do not need back navigation.
 */
export const HeaderRoot = forwardRef<HTMLDivElement, HeaderRootProps>(
  (
    {
      children,
      title,
      titleProps,
      titleAccessory,
      endAccessory,
      endButtonIconProps,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const endSectionContent = ((): ReactNode => {
      if (endAccessory) {
        return endAccessory;
      }
      if (endButtonIconProps && endButtonIconProps.length > 0) {
        const reversedProps = endButtonIconProps
          .map((buttonProps, originalIndex) => ({
            buttonProps,
            originalIndex,
          }))
          .reverse();
        return reversedProps.map(({ buttonProps, originalIndex }) => (
          <ButtonIcon
            key={`end-button-icon-${originalIndex}`}
            size={ButtonIconSize.Md}
            {...buttonProps}
          />
        ));
      }
      return null;
    })();

    const leftSection = ((): ReactNode => {
      if (children) {
        return children;
      }
      if (title) {
        return (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
            className="min-w-0 flex-1"
          >
            {typeof title === 'string' ? (
              <Text variant={TextVariant.HeadingLg} {...titleProps}>
                {title}
              </Text>
            ) : (
              title
            )}
            {titleAccessory}
          </Box>
        );
      }
      return null;
    })();

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={4}
        paddingLeft={4}
        paddingRight={2}
        className={twMerge('min-h-14', className)}
        style={style}
        {...props}
      >
        {leftSection}
        {endSectionContent ? (
          <Box flexDirection={BoxFlexDirection.Row} gap={2} className="ml-auto">
            {endSectionContent}
          </Box>
        ) : null}
      </Box>
    );
  },
);

HeaderRoot.displayName = 'HeaderRoot';
