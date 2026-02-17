import React, { forwardRef } from 'react';

import { ButtonIconSize } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { Text } from '../Text';

import {
  HEADERBASE_TEST_ID,
  HEADERBASE_TITLE_TEST_ID,
  HEADERBASE_TITLE_TEXT_VARIANT,
} from './HeaderBase.constants';
import type { HeaderBaseProps } from './HeaderBase.types';

export const HeaderBase = forwardRef<HTMLDivElement, HeaderBaseProps>(
  (
    {
      children,
      className,
      style,
      startAccessory,
      endAccessory,
      startButtonIconProps,
      endButtonIconProps,
      includesTopInset = false,
      startAccessoryWrapperProps,
      endAccessoryWrapperProps,
      testID,
      ...props
    },
    ref,
  ) => {
    const hasStartContent = startAccessory || startButtonIconProps;
    const hasEndContent =
      endAccessory || (endButtonIconProps && endButtonIconProps.length > 0);
    const hasAnyAccessory = hasStartContent || hasEndContent;

    const shouldRenderStartWrapper = hasAnyAccessory;
    const shouldRenderEndWrapper = hasAnyAccessory;

    const hasMultipleEndButtons =
      !endAccessory && endButtonIconProps && endButtonIconProps.length > 1;

    const renderStartContent = () => {
      if (startAccessory) return startAccessory;
      if (startButtonIconProps) {
        return (
          <ButtonIcon size={ButtonIconSize.Md} {...startButtonIconProps} />
        );
      }
      return null;
    };

    const renderEndContent = () => {
      if (endAccessory) return endAccessory;
      if (endButtonIconProps && endButtonIconProps.length > 0) {
        const reversedProps = endButtonIconProps
          .map((p, i) => ({ props: p, index: i }))
          .reverse();
        return reversedProps.map(({ props: p, index }) => (
          <ButtonIcon
            key={`end-button-icon-${index}`}
            size={ButtonIconSize.Md}
            {...p}
          />
        ));
      }
      return null;
    };

    const rootClassName = twMerge(
      'grid grid-cols-[1fr_auto_1fr] items-center gap-4 min-h-14',
      includesTopInset && 'pt-[env(safe-area-inset-top)]',
      className,
    );

    return (
      <div
        ref={ref}
        className={rootClassName}
        style={style}
        data-testid={testID ?? HEADERBASE_TEST_ID}
        {...props}
      >
        {shouldRenderStartWrapper && (
          <div className="flex justify-start" {...startAccessoryWrapperProps}>
            {renderStartContent()}
          </div>
        )}

        <Box className="flex-1 min-w-0 flex items-center justify-center">
          {typeof children === 'string' ? (
            <Text
              variant={HEADERBASE_TITLE_TEXT_VARIANT}
              className="text-center"
              data-testid={HEADERBASE_TITLE_TEST_ID}
            >
              {children}
            </Text>
          ) : (
            children
          )}
        </Box>

        {shouldRenderEndWrapper && (
          <div className="flex justify-end" {...endAccessoryWrapperProps}>
            <div className={hasMultipleEndButtons ? 'flex gap-2' : undefined}>
              {renderEndContent()}
            </div>
          </div>
        )}
      </div>
    );
  },
);

HeaderBase.displayName = 'HeaderBase';
