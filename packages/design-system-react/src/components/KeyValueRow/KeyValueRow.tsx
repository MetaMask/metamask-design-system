import {
  BoxAlignItems,
  BoxFlexDirection,
  ButtonIconSize,
  FontWeight,
  IconColor,
  KeyValueRowVariant,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { SensitiveText } from '../SensitiveText';
import { Text } from '../Text';

import type { KeyValueRowProps } from './KeyValueRow.types';

type TextSlotProps = Partial<
  Omit<React.ComponentProps<typeof Text>, 'children'>
>;
type SensitiveTextSlotProps = Partial<
  Omit<React.ComponentProps<typeof SensitiveText>, 'children'>
>;

const renderText = (
  content: ReactNode,
  defaults: TextSlotProps,
  textProps?: TextSlotProps,
): ReactNode => {
  if (typeof content === 'string') {
    return (
      <Text {...defaults} {...textProps}>
        {content}
      </Text>
    );
  }
  return content;
};

const renderSensitiveText = (
  content: ReactNode,
  defaults: SensitiveTextSlotProps,
  textProps?: SensitiveTextSlotProps,
): ReactNode => {
  if (typeof content === 'string') {
    return (
      <SensitiveText {...defaults} {...textProps}>
        {content}
      </SensitiveText>
    );
  }
  return content;
};

/**
 * Horizontal key/value row with optional accessories. String `keyLabel` /
 * `value` use `Text` / `SensitiveText` with BodyMd Medium defaults and
 * ellipsis. Implemented with direct `Box` + leaf text (no TextOrChildren).
 */
export const KeyValueRow = forwardRef<HTMLDivElement, KeyValueRowProps>(
  (
    {
      keyStartAccessory,
      keyEndAccessory,
      keyEndButtonIconProps,
      keyLabel: keyContent,
      keyTextProps,
      valueStartAccessory,
      valueEndAccessory,
      valueEndButtonIconProps,
      value: valueContent,
      valueTextProps,
      variant = KeyValueRowVariant.Summary,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    let keyEndAccessoryNode = keyEndAccessory;
    if (
      keyEndButtonIconProps &&
      keyEndButtonIconProps.iconName !== undefined &&
      keyEndButtonIconProps.iconName !== null
    ) {
      keyEndAccessoryNode = (
        <ButtonIcon
          size={ButtonIconSize.Sm}
          {...keyEndButtonIconProps}
          iconName={keyEndButtonIconProps.iconName}
          ariaLabel={keyEndButtonIconProps.ariaLabel ?? 'More information'}
          iconProps={{
            color: IconColor.IconAlternative,
            ...keyEndButtonIconProps.iconProps,
          }}
        />
      );
    }

    let valueEndAccessoryNode = valueEndAccessory;
    if (
      valueEndButtonIconProps &&
      valueEndButtonIconProps.iconName !== undefined &&
      valueEndButtonIconProps.iconName !== null
    ) {
      valueEndAccessoryNode = (
        <ButtonIcon
          size={ButtonIconSize.Sm}
          {...valueEndButtonIconProps}
          iconName={valueEndButtonIconProps.iconName}
          ariaLabel={valueEndButtonIconProps.ariaLabel ?? 'Action'}
          iconProps={{
            color: IconColor.IconDefault,
            ...valueEndButtonIconProps.iconProps,
          }}
        />
      );
    }

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={4}
        className={twMerge(
          'px-4',
          variant === KeyValueRowVariant.Input ? 'h-12' : 'h-10',
          className,
        )}
        style={style}
        {...props}
      >
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
          className="shrink-0"
        >
          {keyStartAccessory}
          {renderText(
            keyContent,
            {
              variant: TextVariant.BodyMd,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextAlternative,
              ellipsis: true,
            },
            keyTextProps,
          )}
          {keyEndAccessoryNode}
        </Box>
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
          className="min-w-0 flex-1 justify-end"
        >
          {valueStartAccessory}
          {renderSensitiveText(
            valueContent,
            {
              variant: TextVariant.BodyMd,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextDefault,
              ellipsis: true,
            },
            valueTextProps,
          )}
          {valueEndAccessoryNode}
        </Box>
      </Box>
    );
  },
);

KeyValueRow.displayName = 'KeyValueRow';
