import {
  IconColor,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { BoxRow } from '../BoxRow';
import { Icon } from '../Icon';

import type { SectionHeaderProps } from './SectionHeader.types';

/**
 * Horizontal section header: optional start/end icons or accessories, and a title row with optional inline accessory.
 * Remaining `View` props are forwarded to the outer {@link BoxRow}.
 *
 * @param props - Component props
 * @param props.title - Title content for the inner row (required)
 * @param props.titleAccessory - Optional node to the right of `title` in the inner row
 * @param props.titleProps - Optional props merged into inner row `Text` when `title` is a string
 * @param props.titleWrapperProps - Optional props spread onto the inner `BoxRow`
 * @param props.startIconName - Optional start icon; takes precedence over `startAccessory` when resolved
 * @param props.startIconProps - Props merged into the start `Icon` (defaults include medium size and default icon color)
 * @param props.endIconName - Optional end icon; takes precedence over `endAccessory` when resolved
 * @param props.endIconProps - Props merged into the end `Icon`
 * @param props.twClassName - Optional Tailwind classes on the outer row
 *
 * @returns The rendered SectionHeader layout.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleAccessory,
  titleProps,
  titleWrapperProps,
  startAccessory,
  startIconName,
  startIconProps,
  endAccessory,
  endIconName,
  endIconProps,
  twClassName = '',
  ...rest
}) => {
  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalEndIconName = endIconName ?? endIconProps?.name;

  return (
    <BoxRow
      {...rest}
      gap={1}
      twClassName={twClassName}
      startAccessory={
        finalStartIconName ? (
          <Icon
            name={finalStartIconName}
            size={IconSize.Md}
            color={IconColor.IconDefault}
            twClassName="shrink-0"
            {...startIconProps}
          />
        ) : (
          startAccessory
        )
      }
      endAccessory={
        finalEndIconName ? (
          <Icon
            name={finalEndIconName}
            size={IconSize.Md}
            color={IconColor.IconDefault}
            twClassName="shrink-0"
            {...endIconProps}
          />
        ) : (
          endAccessory
        )
      }
    >
      {title ? (
        <BoxRow
          {...titleWrapperProps}
          gap={1}
          endAccessory={titleAccessory}
          textProps={{
            variant: TextVariant.HeadingMd,
            color: TextColor.TextDefault,
            ...titleProps,
          }}
        >
          {title}
        </BoxRow>
      ) : null}
    </BoxRow>
  );
};

SectionHeader.displayName = 'SectionHeader';
